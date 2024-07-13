function databaseAdvisor() {
    const instance = {
        cap: '',
        dataProcessing: '',
        license: '',
        heavyUsageScenario: [],
        type: [],
        hostingConstraints: [],
        //features: [],
        //utilities: [],
        //pricingModel: '',
        options: {
            cap: ['CP', 'CA', 'AP'],
            dataProcessing: ['OLTP', 'OLAP', 'Large Scale, Distributed Data'],
            license: ['Proprietary', 'Open Source'],
            heavyUsageScenario: ['By Key', 'By Query', 'Write', 'Update', 'Delete', 'Cache'],
            type: ['Relational', 'Document', 'Key/Value', 'Columnar', 'Wide-Column', 'Full-text', 'In-memory', 'Graph', 'Time-Series'],
            hostingConstraints: ['On-Prem', 'AWS', 'Azure', 'GCP'],
        },
        selected: {
            license: '',
            heavyUsageScenarios: [],
            types: [],
            hostingConstraints: []
        },
        findFirstDatabase: function (selected, databases) {
            for (let db of databases) {
                if (db.license === selected.license) {
                    return db;
                }
            }
            console.log('No database found with the specified license.');
        },
        selectedChanged: function (value) {
            console.log("changed");
            var database = this.findFirstDatabase(value, this.databases);
            this.suggested.database = database;
        },
        suggested: {
            database: '',
            //features: '',
            //utilities: '' // ['Latency', 'Throughput', 'Durability', 'Maintainability', 'Scale Up', 'Scale Out']''
        },
        databases: [
            {
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
                lockingIndexes: ""
            },
            {
                "name": "MySQL MyISAM",
                "license": "",
                "cap": { "c": false, "a": false, "p": false },
                "hostingOptions": { "onPrem": false, "aws": false, "azure": false, "gcp": false },
                "type": { "rdbms": 1, "keyValue": "", "document": "", "columnar": "", "wideColumn": "", "fullText": "", "inMemory": "", "graph": "", "timeSeries": "" },
                "schema": { "onWrite": false, "onRead": false },
                "features": { "sql": 1, "mapReduce": "" },
                "oltp_olap": { "oltp": 0, "olap": "" },
                "transactions": { "supported": false, "isolation": "N/A" },
                "replication": { "leaderFollower": false, "multiLeader": false, "leaderless": false },
                "partitioning": { "supported": false },
                "utilities": { "scalability": 1, "availability": "", "maintainability": 1, "durability": "", "latency": "Reads better than PostgreSQL" },
                "useCase": { "byKey": 2, "byQuery": 1, "write": "", "update": "", "delete": "" },
                "costPricingModel": "",
                "lockingIndexes": 2
            },
            {
                "name": "MySQL InnoDB",
                "license": "",
                "cap": { "c": true, "a": false, "p": true },
                "hostingOptions": { "onPrem": true, "aws": true, "azure": true, "gcp": true },
                "type": { "rdbms": 2, "keyValue": "", "document": "", "columnar": "", "wideColumn": "", "fullText": "", "inMemory": "", "graph": "", "timeSeries": "" },
                "schema": { "onWrite": false, "onRead": false },
                "features": { "sql": 2, "mapReduce": "" },
                "oltp_olap": { "oltp": 0, "olap": "" },
                "transactions": { "supported": true, "isolation": "" },
                "replication": { "leaderFollower": false, "multiLeader": false, "leaderless": false },
                "partitioning": { "supported": false },
                "utilities": { "scalability": 0, "availability": "", "maintainability": "", "durability": "", "latency": "" },
                "useCase": { "byKey": "", "byQuery": "", "write": "", "update": "", "delete": "" },
                "costPricingModel": "",
                "lockingIndexes": ""
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
                "lockingIndexes": ""
            },
            {
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
                "lockingIndexes": ""
            }
        ]
    };
    return instance;
}