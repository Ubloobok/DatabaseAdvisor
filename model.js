function fetchDatabases() {
    return [{
        name: "PostgreSQL",
        license: "Open Source",
        cap: { c: true, a: false, p: true },
        hostingOptions: { onPrem: true, aws: true, azure: true, gcp: true },
        type: { rdbms: 2, keyValue: 1, document: 2, columnar: 1, wideColumn: "N/A", fullText: 1, inMemory: "N/A", graph: "N/A", timeSeries: "N/A" },
        schema: { onWrite: true, onRead: true },
        features: { sql: 2, mapReduce: "N/A" },
        oltp_olap: { oltp: 2, olap: 1 },
        transactions: { supported: true, isolation: "" },
        replication: { leaderFollower: true, multiLeader: true, leaderless: false },
        partitioning: { supported: true },
        utilities: { scalability: 0, availability: 1, maintainability: 1, durability: "", latency: "Depends on configuration and workload" },
        useCase: { byKey: 1, byQuery: 2, write: 0, update: 1, delete: 1 },
        costPricingModel: "",
        lockingIndexes: "",
        attributes: {
            "License": { values: ["Open Source"] },
            "CAP": { values: ["cp"] },
            "Hosting": { values: ["onPrem", "aws", "azure", "gcp"] },
            "Type": { values: ["rdbms", "keyValue-", "document", "columnar-", "fullText-"] },
            "Schema": { values: ["onWrite", "onRead"] }
        }
    },
    {
        "name": "MongoDB CP",
        "license": "Open Source",
        "cap": { "c": true, "a": false, "p": true },
        "hostingOptions": { "onPrem": true, "aws": true, "azure": true, "gcp": true },
        "type": { "rdbms": "N/A", "keyValue": 1, "document": 2, "columnar": "N/A", "wideColumn": "N/A", "fullText": "N/A", "inMemory": "", "graph": "", "timeSeries": "" },
        "schema": { "onWrite": false, "onRead": true },
        "features": { "sql": "N/A", "mapReduce": "" },
        "oltp_olap": { "oltp": 2, "olap": 0 },
        "transactions": { "supported": true, "isolation": "" },
        "replication": { "leaderFollower": true, "multiLeader": true, "leaderless": false },
        "partitioning": { "supported": true },
        "utilities": { "scalability": 1, "availability": 1, "maintainability": 2, "durability": "", "latency": "Depends on configuration and workload" },
        "useCase": { "byKey": 2, "byQuery": 1, "write": 1, "update": 1, "delete": 1 },
        "costPricingModel": "",
        "lockingIndexes": "",
        attributes: {
            "License": { values: ["Open Source"] },
            "CAP": { values: ["cp"] },
            "Hosting": { values: ["azure", "aws", "onPrem", "gcp"] },
            "Type": { values: ["keyValue-", "document"] },
            "Schema": { values: ["onRead"] }
        }
    }, {
        "name": "CosmosDB",
        "license": "Proprietary",
        "cap": { "c": "", "a": "", "p": "" },
        "hostingOptions": { "onPrem": false, "aws": false, "azure": true, "gcp": false },
        "type": { "rdbms": "N/A", "keyValue": "", "document": "", "columnar": "", "wideColumn": "", "fullText": "", "inMemory": "", "graph": "", "timeSeries": "" },
        "schema": { "onWrite": false, "onRead": false },
        "features": { "sql": "", "mapReduce": "" },
        "oltp_olap": { "oltp": "", "olap": "" },
        "transactions": { "supported": false, "isolation": "" },
        "replication": { "leaderFollower": "", "multiLeader": "", "leaderless": "" },
        "partitioning": { "supported": false },
        "utilities": { "scalability": 2, "availability": 2, "maintainability": 2, "durability": "", "latency": "" },
        "useCase": { "byKey": "", "byQuery": "", "write": "", "update": "", "delete": "" },
        "costPricingModel": "",
        "lockingIndexes": "",
        attributes: {
            "License": { values: ["Proprietary"] },
            "CAP": { values: ["cp", "cap-", "ap"] },
            "Hosting": { values: ["azure"] },
            "Type": { values: ["document"] },
            "Schema": { values: [] }
        }
    }]
}

function fetchAttributes() {
    return {
        license: { name: "License" },
        cap: { name: "CAP" },
        hosting: { name: "Hosting" },
        type: { name: "Type" },
        schema: { name: "Schema" }
    }
}
