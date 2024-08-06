function databaseAdvisor() {
    const instance = {
        model: {
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

            // Collect all available attributes values.
            databases.forEach(database => {
                Object.entries(database.attributes).forEach(([key, attrData]) => {
                    if (!result[key]) {
                        result[key] = { values: {} };
                    }
                    attrData.values.forEach(function (value) {
                        // Add attribute value if not exist, enabled by default (i.e. disabled=false).
                        if (!result[key].values[value]) {
                            result[key].values[value] = { disabled: false };
                        }
                    });
                });
            });

            // Sort the attributes values.
            Object.keys(result).forEach(key => {
                const sortedValues = Object.keys(result[key].values).sort((a, b) => a.localeCompare(b));
                const sortedValuesObj = {};
                sortedValues.forEach(value => {
                    sortedValuesObj[value] = result[key].values[value];
                });
                result[key].values = sortedValuesObj;
            });

            return result;
        },
        init() {
            const availableAttributes = this.collectAttributeValues(this.model.databases);
            const filterAttributes = this.filters.attributes;
            const selectedAttributes = this.selected.attributes;

            Object.entries(availableAttributes).forEach(([key, attr]) => {
                if (!filterAttributes[key]) {
                    filterAttributes[key] = {
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

            this.selectedChanged(this.selected);
        },
        selectedChanged(value) {
            console.log("Selected has been changed:");
            console.log(value);

            // Filter suggested based on selected selected:
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

            // Update filter based on suggested (available) databases:
            Object.keys(filterAttributes).forEach(key => {
                const filterAttribute = filterAttributes[key];
                Object.keys(filterAttribute.values).forEach(value => {
                    const attrValue = filterAttributes[key].values[value];
                    const count = suggestedDatabases.filter(db => db.attributes[key]?.values.includes(value)).length;
                    attrValue.count = count;
                    attrValue.disabled = count === 0;
                });
            });
        }
    };

    instance.init();

    return instance;
}
