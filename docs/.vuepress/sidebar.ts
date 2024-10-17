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
        children: [
            '/developer/overview',
            '/developer/coding-structure',
            '/developer/plugins',
            {
                text: 'Classes',
                collapsible: true,
                children: [
                    '/developer/classes/entity_type',
                ]
            },
            '/developer/docs',
        ]
    }
]