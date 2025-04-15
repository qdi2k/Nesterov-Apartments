from datetime import datetime
from typing import List, Annotated, Union, Optional

import phonenumbers
from pydantic import BaseModel, Field
from pydantic_extra_types.phone_numbers import PhoneNumberValidator

RUNumberType = Annotated[
    Union[str, phonenumbers.PhoneNumber],
    PhoneNumberValidator(
        supported_regions=['RU'],
        default_region='RU',
        number_format="E164"
    )
]


class ItemFromGetQuestion(BaseModel):
    question: str
    answer: str


class ResponseGetListQuestion(BaseModel):
    questions: List[ItemFromGetQuestion]


class RequestCreateQuestion(BaseModel):
    name_owner: str
    phone: RUNumberType
    question: Optional[str] = Field(default=None)


class ResponseCreateQuestion(BaseModel):
    id: int
    created_at: datetime
    owner: str
    phone: str

    class Config:
        from_attributes = True
