import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginTypescript from 'typescript-eslint';

export default [
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: eslintPluginTypescript.parser,
            sourceType: 'module',
        },
        plugins: {
            'import': eslintPluginImport,
        },
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts']
            },
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                },
            },
        },
        rules: {
            'import/no-extraneous-dependencies': ['error', {
                devDependencies: false,
                peerDependencies: false,
            }],
        },
    }
];
