#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0"""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {i: dataset[i]
                                      for i in range(len(dataset))}
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Return deletion-resilient hypermedia pagination info."""
        assert index is None or index >= 0
        indexed = self.indexed_dataset()
        assert index is None or index < len(indexed)

        if index is None:
            index = 0

        data = []
        current_index = index

        # collect page_size existing rows, skipping deleted indices
        while len(data) < page_size and current_index < len(indexed):
            if current_index in indexed:
                data.append(indexed[current_index])
            current_index += 1

        next_index = current_index

        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": next_index
        }
