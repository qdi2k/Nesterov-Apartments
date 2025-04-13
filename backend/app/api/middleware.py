import datetime
import logging
import time

from fastapi import HTTPException, Request
from fastapi.responses import JSONResponse
from starlette import status
from starlette.middleware.base import BaseHTTPMiddleware

from app.core.config import settings

logger = logging.getLogger()


class ExceptionHandlerMiddleware(BaseHTTPMiddleware):
    """
    ### Общая обработка исключений, вывод заголовков входящего запроса,
        а также вывод подробностей серверной ошибки при включенном DEBUG
    """

    async def dispatch(self, request: Request, call_next):
        try:
            logger.debug(f"Request headers:\n{dict(request.headers)}")
            start_time = time.time()
            response = await call_next(request)
            logger.info(f"Request completed in {(time.time() - start_time):.3f}s")
            return response
        except HTTPException as http_exc:
            return JSONResponse(
                status_code=http_exc.status_code,
                content={"detail": http_exc.detail},
            )
        except Exception as exc:
            if not settings.DEBUG:
                return JSONResponse(
                    status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                    content={"detail": "Internal Server Error"},
                )
            raise exc
