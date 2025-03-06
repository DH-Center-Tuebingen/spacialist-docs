export default [
    {
        text: 'User',
        collapsible: true,
        prefix: '/user/',
        children: [
            'overview',
            'thesaurus',
            'user-and-role-management',
            {
                text: 'Data Model',
                link: 'data-model',
                children: [
                    'entity-type',
                    'attribute',
                    'attribute-types',
                ]
            },
            'entity',
            'collaboration',
            'bibliography',
            'geodata',
            'data-importer',
            'data-analysis',
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