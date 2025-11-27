#!/usr/bin/env python3
"""
Module 2-measure_runtime:
Measures the average execution time of the wait_n coroutine.
"""
import asyncio
import time
from typing import Union

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure total execution time of wait_n(n, max_delay) and return average
    time per coroutine.
    """
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    total_time = end - start
    return total_time / n
