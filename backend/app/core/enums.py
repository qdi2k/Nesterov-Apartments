from enum import Enum


class CallStatusEnum(Enum):
    AWAIT = "await"
    COMPLETED = "completed"


class CountRooms(Enum):
    STUDIO = "studio"
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
