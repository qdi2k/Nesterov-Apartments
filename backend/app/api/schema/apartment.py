from typing import Optional, List, Dict, Any

from pydantic import (
    BaseModel, Field, model_validator, field_validator, computed_field
)

from app.api.schema.project import ProjectFieldSearch
from app.core.config import apartments_storage
from app.core.enums import CountRooms
from app.core.functools import get_total_price


class ItemSearchApartment(BaseModel):
    id: int
    name: str
    project_name: str
    construction_date: str
    rooms_count: CountRooms
    floor: int
    area: float
    image: str
    price: int
    discount_percent: float
    total_price: int

    class Config:
        from_attributes = True

    @model_validator(mode="before")
    def laizy_projects_filed(cls, data: Any) -> Dict[str, Any]:
        return dict(
            id=data.id,
            name=data.name,
            project_name=data.project.name,
            construction_date=(
                f"{data.project.construction_quarter.value}"
                f" - {data.project.construction_year}"
            ),
            price=data.price,
            discount_percent=data.discount_percent,
            total_price=get_total_price(data.price, data.discount_percent),
            rooms_count=data.rooms_count,
            floor=data.floor,
            area=data.area,
            image=apartments_storage.get_path(data.image.image),
        )


class ApartmentSchema(BaseModel):
    id: int
    name: str
    on_sale: bool
    rooms_count: CountRooms
    section: str
    floor: int
    area: float
    image: str
    project_id: int
    price: int
    discount_percent: float

    class Config:
        from_attributes = True

    @field_validator('image', mode='before')
    def lowercase_email(cls, v) -> str:
        return apartments_storage.get_path(v.image)

    @computed_field
    @property
    def total_price(self) -> int:
        return get_total_price(self.price, self.discount_percent)


class RequestSearchApartment(BaseModel):
    # Required fields
    city: str = Field(default='Нижний Новгород', min_length=3, max_length=100)

    # Optional fields
    on_sale: Optional[bool] = Field(default=None)
    rooms_count: Optional[List[CountRooms]] = Field(default=None)
    min_area: Optional[float] = Field(default=None, ge=5, le=1000)
    max_area: Optional[float] = Field(default=None, ge=5, le=1000)
    min_floor: Optional[int] = Field(default=None, ge=1, le=200)
    max_floor: Optional[int] = Field(default=None, ge=1, le=200)
    min_price: Optional[int] = Field(default=None, ge=100000, le=500000000)
    max_price: Optional[int] = Field(default=None, ge=100000, le=500000000)
    exclude_id: Optional[int] = Field(default=None)
    project_ids: Optional[List[int]] = Field(default=None)


class ResponseSearchApartment(BaseModel):
    projects: List[ProjectFieldSearch]
    apartments: List[ItemSearchApartment]


class ResponseGetApartment(ApartmentSchema):
    pass
