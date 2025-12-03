#!/usr/bin/env python3
"""12-log_stats.py"""

from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient("mongodb://localhost:27017")
    db = client.logs
    nginx = db.nginx

    total_logs = nginx.count_documents({})
    print(f"{total_logs} logs")

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        count = nginx.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    status_check = nginx.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")
