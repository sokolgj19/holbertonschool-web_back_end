#!/usr/bin/env python3
"""
Element lengths
"""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Element lengths
    """
    return [(i, len(i)) for i in lst]
