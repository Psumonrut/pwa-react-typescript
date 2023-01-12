export const DBConfig = {
    name: 'MyDB',
    version: 1,
    objectStoresMeta: [
        {
            store: 'employee',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'name', keypath: 'name', options: { unique: false }},
                { name: 'lastname', keypath: 'lastname', options: { unique: false }},
                { name: 'age', keypath: 'age', options: { unique: false } }
            ]
        }
    ]
};