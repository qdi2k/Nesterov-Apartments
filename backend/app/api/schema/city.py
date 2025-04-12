from typing import List

from pydantic import BaseModel


class CitySchema(BaseModel):
    id: int
    name: str

    class Config:
        from_attributes = True


class ResponseListCity(BaseModel):
    cities: List[CitySchema]
