from pydantic import BaseModel, Field

from core.enums import CountRooms


class RequestSearchApartment(BaseModel):
    zone: str = Field(min_length=3, max_length=100)

    rooms_count: CountRooms | None = Field()
    area: float | None = Field(min_length=5, max_length=1000)
    floor: int | None = Field(min_length=1, max_length=150)
    price: float | None = Field(min_length=500000, max_length=300000000)
