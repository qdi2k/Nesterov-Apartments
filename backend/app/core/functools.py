def get_total_price(price: int, discount_percent: float) -> int:
    """Получить итоговую цену с учетом скидки."""
    return int(price * (1 - discount_percent / 100))
