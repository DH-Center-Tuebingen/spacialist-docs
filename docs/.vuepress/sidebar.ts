export default [
    {
        text: 'User',
        collapsible: true,
        prefix: '/user/',
        children: [
            'overview',
            'geodata',
            'thesaurus',
            'data-model',
            'entity-type',
            'attribute-types',
            'attribute',
            'bibliography',
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