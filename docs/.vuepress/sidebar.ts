export default [
    {
        text: 'User',
        collapsible: true,
        children: [
            '/user/overview',
            '/user/geodata',
            '/user/thesaurus',
            '/user/data-model',
            '/user/entity-type',
            '/user/attribute-types',
            '/user/attribute',
            '/user/bibliography',
            '/user/data-importer'
        ]
    },
    {
        text: 'Developer',
        collapsible: true,
        prefix: '/developer/',
        children: [
            'overview',
            'coding-structure',
            'plugins',
            {
                text: 'Classes',
                collapsible: true,
                children: [
                    '/developer/classes/entity_type',
                ]
            },
            {
                text: 'Commands',
                collapsible: true,
                prefix: '/developer/commands/',
                children: [
                    'export-types',
                    'refresh-testing'
                ]
            },
        ]
    }
]