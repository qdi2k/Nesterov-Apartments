from typing import Optional

from pydantic import BaseModel, Field

from app.core.enums import CountRooms


class RequestSearchApartment(BaseModel):
    zone: str = Field(min_length=3, max_length=100)

    rooms_count: Optional[CountRooms] = Field(default=None)
    area: Optional[float] = Field(default=None, ge=5, le=1000)
    floor: Optional[int] = Field(default=None, ge=1, le=150)
    price: Optional[float] = Field(default=None, ge=500000, le=300000000)
