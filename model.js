function fetchDatabases() {
    return [
        {
            name: "PostgreSQL",
            attributes: {
                "License": { values: ["Open Source"] },
                "CAP": { values: ["CP"] },
                "Hosting": { values: ["On-Prem", "AWS", "Azure", "GCP"] },
                "Type": { values: ["RDBMS", "KeyValue-", "Document", "Columnar-", "FullText-"] },
                "Schema": { values: ["OnWrite", "OnRead"] },
                "Features": { values: ["SQL"] },
                "OLTP/OLAP": { values: ["OLTP", "OLAP-"] },
                "Replication": { values: ["Leader/Follower", "Multi-leader"] },
                "Partitioning": { values: ["Supported"] },
                "Utilities": { values: ["Availability-", "Maintainability-"] },
                "Use-case": { values: ["ByKey-", "ByQuery", "Update-", "Delete-"] }
            }
        },
        {
            name: "MySQL InnoDB",
            attributes: {
                "License": { values: ["Open Source"] },
                "CAP": { values: ["CP"] },
                "Hosting": { values: ["On-Prem", "AWS", "Azure", "GCP"] },
                "Type": { values: ["RDBMS"] },
                "Schema": { values: [] },
                "Features": { values: ["SQL"] },
                "OLTP/OLAP": { values: [] },
                "Replication": { values: ["Leader/Follower", "Multi-leader"] },
                "Partitioning": { values: ["Supported"] },
                "Utilities": { values: ["Availability-", "Maintainability-"] },
                "Use-case": { values: ["ByKey-", "ByQuery", "Update-", "Delete-"] }
            }
        },
        {
            name: "MongoDB CP",
            attributes: {
                "License": { values: ["Open Source"] },
                "CAP": { values: ["CP"] },
                "Hosting": { values: ["Azure", "AWS", "On-Prem", "GCP"] },
                "Type": { values: ["KeyValue-", "Document"] },
                "Schema": { values: ["OnRead"] },
                "Features": { values: [] },
                "OLTP/OLAP": { values: ["OLTP"] },
                "Replication": { values: ["Leader/Follower", "Multi-leader"] },
                "Partitioning": { values: ["Supported"] },
                "Utilities": { values: ["Scalability-", "Availability-", "Maintainability"] },
                "Use-case": { values: ["ByKey", "ByQuery-", "Write-", "Update-"] }
            }
        },
        {
            name: "MongoDB AP",
            attributes: {
                "License": { values: ["Open Source"] },
                "CAP": { values: ["AP"] },
                "Hosting": { values: ["Azure", "AWS", "On-Prem", "GCP"] },
                "Type": { values: ["KeyValue-", "Document"] },
                "Schema": { values: ["OnRead"] },
                "Features": { values: [] },
                "OLTP/OLAP": { values: ["OLTP"] },
                "Replication": { values: ["Leader/Follower", "Multi-leader"] },
                "Partitioning": { values: ["Supported"] },
                "Utilities": { values: ["Scalability-", "Availability", "Maintainability", "Durability"] },
                "Use-case": { values: ["ByKey", "Write", "Update"] }
            }
        },
        {
            name: "DynamoDB",
            attributes: {
                "License": { values: ["Proprietary"] },
                "CAP": { values: ["AP"] },
                "Hosting": { values: ["AWS"] },
                "Type": { values: ["KeyValue", "Document"] },
                "Schema": { values: ["OnRead"] },
                "Features": { values: [] },
                "OLTP/OLAP": { values: ["OLTP"] },
                "Replication": { values: ["Leaderless"] },
                "Partitioning": { values: [] },
                "Utilities": { values: ["Scalability", "Availability", "Maintainability"] },
                "Use-case": { values: ["ByKey", "Write", "Update", "Delete"] }
            }
        },
        {
            name: "CosmosDB (CP, CAP, AP, TBD)",
            attributes: {
                "License": { values: ["Proprietary"] },
                "CAP": { values: ["CP", "CAP-", "AP"] },
                "Hosting": { values: ["Azure"] },
                "Type": { values: ["Document"] },
                "Schema": { values: ["OnRead"] },
                "Features": { values: [] },
                "OLTP/OLAP": { values: [] },
                "Replication": { values: [] },
                "Partitioning": { values: [] },
                "Utilities": { values: ["Scalability", "Availability", "Maintainability"] },
                "Use-case": { values: ["ByKey", "Write", "Update", "Delete"] }
            }
        }
    ]
}
