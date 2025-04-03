import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import typescriptParser from '@typescript-eslint/parser';
import vueEslintParser from 'vue-eslint-parser';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  // https://eslint.org/docs/latest/use/configure/ignore
  // https://github.com/eslint/eslint/discussions/18304
  {
    ignores: [
      'public/',
      'vendor/',
    ],
  },
  // https://eslint.org/docs/latest/use/configure/parser#configure-a-custom-parser
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      // https://eslint.org/docs/latest/rules/no-undef#handled_by_typescript
      'no-undef': 'off',
    },
  },
  // https://eslint.org/docs/latest/use/configure/parser#configure-a-custom-parser
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: typescriptParser,
      },
    },
  },
  {
    // https://eslint.org/docs/latest/use/configure/language-options#using-configuration-files
    languageOptions: {
      globals: {
        axios: 'readonly',
      },
    },
    rules: {
      'prettier/prettier': [
        'error',
        // Prettier config
        {
          singleQuote: true,
          // htmlWhitespaceSensitivity: 'ignore',
          plugins: ['prettier-plugin-tailwindcss'],
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            '.*', // no relative imports
          ],
        },
      ],
      'prefer-const': 'error',
      'vue/no-v-html': 'off',
      'vue/no-deprecated-slot-attribute': 'off',
      'vue/html-button-has-type': ['error'],
      'vue/padding-line-between-blocks': ['error', 'always'],
      'vue/multi-word-component-names': 'off', // todo: turn on and fix
      'vue/require-explicit-emits': 'off', // todo: turn on and fix
      'vue/attributes-order': [
        'error',
        {
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            'UNIQUE',
            'SLOT',
            'OTHER_DIRECTIVES',
            ['TWO_WAY_BINDING', 'OTHER_ATTR'],
            'EVENTS',
            'CONTENT',
          ],
          alphabetical: false,
        },
      ],
      'vue/no-mutating-props': [
        'error',
        {
          shallowOnly: true,
        },
      ],
      'vue/custom-event-name-casing': ['error', 'camelCase'],
      'vue/slot-name-casing': ['error', 'kebab-case'],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/component-options-name-casing': ['error', 'PascalCase'],
      'vue/define-emits-declaration': ['error', 'type-literal'],
      'vue/define-macros-order': [
        'error',
        {
          order: [
            'defineOptions',
            'defineModel',
            'defineProps',
            'defineEmits',
            'defineSlots',
          ],
          defineExposeLast: true,
        },
      ],
      'vue/define-props-declaration': ['error', 'type-based'],
      'vue/no-empty-component-block': ['error'],
      'vue/no-import-compiler-macros': ['error'],
      'vue/no-ref-object-reactivity-loss': ['error'],
      'vue/no-this-in-before-route-enter': ['error'],
      'vue/prefer-define-options': ['error'],
      'vue/prefer-use-template-ref': ['error'],
      'vue/require-explicit-slots': ['error'],
      'vue/require-macro-variable-name': ['error'],
      'vue/require-typed-ref': ['error'],
    },
  },
];