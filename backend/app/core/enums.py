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


class SortSearchFilter(str, Enum):
    LOW_PRICE = "Сначала дешевле"
    HIGH_PRICE = "Сначала дороже"

    LOW_FLOOR = "Сначала нижние этажи"
    HIGH_FLOOR = "Сначала верхние этажи"

    SMALL_AREA = "Сначала меньшая площадь"
    LARGE_AREA = "Сначала большая площадь"

    FEW_ROOMS = "Сначала меньше комнат"
    MANY_ROOMS = "Сначала больше комнат"
