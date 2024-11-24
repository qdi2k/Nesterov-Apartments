import re
from typing import Dict

from pydantic import field_validator, BaseModel, Field


class ContactManagerCreate(BaseModel):
    name: str = Field(..., max_length=255)
    phone: str = Field(None, max_length=20)
    email: str = Field(None, max_length=255)

    @classmethod
    def validate(cls, values):
        if not values.get('phone') and not values.get('email'):
            raise ValueError(
                "Должен быть указан хотя бы один из 'phone' или 'email'"
            )
        return values

    @field_validator('email')
    def validate_email(cls, value):
        if value is None:
            return value
        email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
        if not re.match(email_regex, value):
            raise ValueError("Неверный формат 'email'")
        return value

    @field_validator('phone')
    def validate_phone(cls, value):
        if value is None:
            return value
        phone_regex = r'^((\+7|7|8)+([0-9]){10})$'
        if not re.match(phone_regex, value):
            raise ValueError("Неверный формат 'phone'")
        return value


class ContactManagerResponse(BaseModel):
    data: Dict[str, str] = {
        "message": "Запись успешно создана, ожидайте обратной связи"
    }
