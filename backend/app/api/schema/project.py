from datetime import datetime
from typing import List

from pydantic import BaseModel, field_validator

from app.core.config import apartments_storage


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
    construction_date: datetime
    description: str
    images: List[ProjectImageSchema]

    class Config:
        from_attributes = True


class ResponseListProjectsByCity(BaseModel):
    projects: List[ProjectSchema]


class ResponseProject(ProjectSchema):
    pass
