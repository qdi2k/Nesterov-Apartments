from typing import List, Any, Dict

from pydantic import BaseModel, field_validator, model_validator

from app.core.config import apartments_storage
from app.core.enums import QuarterEnum


class ProjectImageSchema(BaseModel):
    id: int
    name: str
    image: str

    class Config:
        from_attributes = True

    @field_validator('image')
    def lowercase_email(cls, v):
        return apartments_storage.get_path(v)


class ProjectSchema(BaseModel):
    id: int
    name: str
    city: str
    address: str
    construction_year: int
    construction_quarter: QuarterEnum
    description: str
    images: List[ProjectImageSchema]

    class Config:
        from_attributes = True

    @model_validator(mode="before")
    def convert_city_name(cls, data: Any) -> Dict[str, Any]:
        return dict(
            id=data.id,
            name=data.name,
            city=data.city.name,
            address=data.address,
            construction_year=data.construction_year,
            construction_quarter=data.construction_quarter,
            description=data.description,
            images=data.images,
        )


class ResponseListProjectsByCity(BaseModel):
    projects: List[ProjectSchema]


class ResponseProject(ProjectSchema):
    pass
