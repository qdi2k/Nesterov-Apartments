from typing import Optional, List

from pydantic import BaseModel, Field

from app.core.enums import CountRooms


class RequestSearchApartment(BaseModel):
    # required fields
    city: str = Field(default='Нижний Новгород', min_length=3, max_length=100)
    district: str = Field(
        default='Сормово', min_length=3, max_length=100
    )

    # optional fields
    rooms_count: Optional[List[CountRooms]] = Field(default=None)

    min_area: Optional[float] = Field(default=None, ge=5, le=1000)
    max_area: Optional[float] = Field(default=None, ge=5, le=1000)

    min_floor: Optional[int] = Field(default=None, ge=1, le=150)
    max_floor: Optional[int] = Field(default=None, ge=1, le=150)

    min_price: Optional[float] = Field(default=None, ge=100000, le=300000000)
    max_price: Optional[float] = Field(default=None, ge=100000, le=300000000)


class ResponseSearchApartment(BaseModel):
    id: int
    name: str
    price: float
    discounted_price: float

    class Config:
        from_attributes = True
