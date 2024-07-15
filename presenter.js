﻿function databaseAdvisor() {
    const instance = {
        model: {
            attributes: fetchAttributes(),
            databases: fetchDatabases()
        },
        filters: {
            attributes: {
                // Automatically populated.
                // license: { values: { 'Open Source': { disabled: false } } }
            }
        },
        selected: {
            attributes: {
                // Automatically populated.
                // license: { values: [] }
            }
        },
        suggested: {
            databases: []
        },
        collectAttributeValues(databases) {
            let result = {};
            databases.forEach(database => {
                Object.entries(database.attributes).forEach(([key, attrData]) => {
                    if (!result[key]) {
                        result[key] = { values: {} };
                    }
                    attrData.values.forEach(function (value) {
                        if (!result[key].values[value]) {
                            result[key].values[value] = { disabled: false };
                        }
                    });
                });
            });
            return result;
        },
        init() {
            const availableAttributes = this.collectAttributeValues(this.model.databases);
            const filterAttributes = this.filters.attributes;
            const selectedAttributes = this.selected.attributes;
            const modelAttributes = this.model.attributes;

            Object.entries(availableAttributes).forEach(([key, attr]) => {
                if (!filterAttributes[key]) {
                    filterAttributes[key] = {
                        name: modelAttributes[key].name,
                        values: {}
                    };
                }
                filterAttributes[key].values = { ...attr.values };
                if (!selectedAttributes[key]) {
                    selectedAttributes[key] = {
                        values: []
                    };
                }
            });
        },
        selectedChanged(value) {
            console.log("Selected has been changed:");
            console.log(value);

            const selectedAttributes = this.selected.attributes;
            const suggestedDatabases = this.model.databases.filter(function (database) {
                return Object.keys(selectedAttributes).every(function (attr) {
                    var selectedValues = selectedAttributes[attr].values;
                    if (selectedValues.length === 0) {
                        return true; // Skip filtering if no values are selected for this attribute
                    }
                    var dbValues = database.attributes[attr]?.values;
                    if (!dbValues || dbValues.length === 0) {
                        return false;
                    }
                    return selectedValues.some(function (value) {
                        return dbValues.includes(value);
                    });
                });
            });
            this.suggested.databases = suggestedDatabases;

            const filterAttributes = this.filters.attributes;
            const availableAttributes = this.collectAttributeValues(suggestedDatabases);
            const modelAttributes = this.model.attributes;
            Object.entries(availableAttributes).forEach(([key, attr]) => {
                if (!attr.name) {
                    attr.name = modelAttributes[key].name;
                }
            });
            //this.filters.attributes = availableAttributes;

            // Update disabled state of filter attributes
            Object.keys(filterAttributes).forEach(key => {
                Object.keys(filterAttributes[key].values).forEach(value => {
                    filterAttributes[key].values[value].disabled = !this.suggested.databases.some(db => db.attributes[key]?.values.includes(value));
                });
            });
        }
    };
    instance.init();
    return instance;
}
