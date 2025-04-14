from typing import List

from pydantic import BaseModel


class ItemFromGetQuestion(BaseModel):
    question: str
    answer: str


class ResponseGetListQuestion(BaseModel):
    questions: List[ItemFromGetQuestion]
