#!/usr/bin/env python3
"""10-update_topics.py"""

def update_topics(mongo_collection, name, topics):
    """
    Update the topics of a school document based on its name.

    Args:
        mongo_collection: pymongo collection object
        name (str): the school name to update
        topics (list of str): list of topics to set
    """
    if mongo_collection is None or not name or not isinstance(topics, list):
        return

    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
