export default [
    {
        text: 'User',
        collapsible: true,
        prefix: '/user/',
        children: [
            'overview',
            'getting-started',
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
            'environment-setup',
            'coding-structure',
            {
                text: 'Plugins',
                collapsible: true,
                prefix: '/developer/plugins/',
                children: [
                    'legacy',
                    'usage',
                    'manifest',
                    'frontend-capabilities',
                    'i18n',
                    'development',
                    'plugin-log',
                    'internal-structure',
                    'lifecycle',
                    'plugin-features',
                ] 
            },
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
            {
                text: 'Framework',
                collapsible: true,
                prefix: '/developer/framework/',
                children: [
                    'auth'
                ]
            },
            'common-issues',
        ]
    }
]