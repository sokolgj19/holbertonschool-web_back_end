#!/usr/bin/env python3
"""
This module contains a function to sum a list of floats.
"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Sum all floats in a list and return the total.

    Args:
        input_list (List[float]): List of float numbers.

    Returns:
        float: The sum of the list elements.
    """
    return sum(input_list)
