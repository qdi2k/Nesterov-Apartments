from enum import Enum


class CountRooms(str, Enum):
    STUDIO = "studio"
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"


class QuarterEnum(str, Enum):
    I = "I квартал"
    II = "II квартал"
    III = "III квартал"
    IV = "IV квартал"
