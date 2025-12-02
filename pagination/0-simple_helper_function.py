#!/usr/bin/env python3
"""Simple helper function for pagination index calculation."""
from typing import Tuple


def index_range(page, page_size):
    """Return a tuple of (start, end) indexes for pagination."""
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
