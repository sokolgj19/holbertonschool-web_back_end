#!/usr/bin/env python3
"""Simple helper function for pagination index calculation."""

def index_range(page, page_size):
    """Return a tuple (start, end) for pagination based on page and page_size."""
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
