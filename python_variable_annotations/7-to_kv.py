#!/usr/bin/env python3
"""
Key-value pair
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Key-value pair
    """
    return (k, float(v ** 2))
