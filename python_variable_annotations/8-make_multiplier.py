#!/usr/bin/env python3
"""
Multiplier function
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Multiplier function
    """
    def multiplier_func(n: float) -> float:
        return n * multiplier

    return multiplier_func
