module.exports = {
  root: true,

  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    // project: resolve(__dirname, './tsconfig.json'),
    // tsconfigRootDir: __dirname,
    // ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    // sourceType: 'module', // Allows for the use of imports
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    //'plugin:@typescript-eslint/recommended-requiring-type-checking',

    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
    // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    // 'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    // https://github.com/prettier/eslint-config-prettier#installation
    // usage with Prettier, provided by 'eslint-config-prettier'.
    'prettier',
  ],

  plugins: [
    // required to apply rules which need type information
    '@typescript-eslint',

    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
    // required to lint *.vue files
    'vue',

    // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
    // Prettier has not been included as plugin to avoid performance impact
    // add it as an extension for your IDE
  ],

  //globals: {
  //   ga: 'readonly', // Google Analytics
  //   cordova: 'readonly',
  //   __statics: 'readonly',
  //   __QUASAR_SSR__: 'readonly',
  //   __QUASAR_SSR_SERVER__: 'readonly',
  //   __QUASAR_SSR_CLIENT__: 'readonly',
  //   __QUASAR_SSR_PWA__: 'readonly',
  //   process: 'readonly',
  //   Capacitor: 'readonly',
  //   chrome: 'readonly',
  // },

  // add your custom rules here
  rules: {
    'prefer-promise-reject-errors': 'off',
    quotes: ['warn', 'single'],
    //curly: [2, 'all'],
    //'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
    // 'vue/first-attribute-linebreak': [
    //   'always',
    //   {
    //     singleline: 'ignore',
    //     multiline: 'below',
    //   },
    // ],
    // '[vue, html, javascript, typescript]': {
    //   'editor.defaultFormatter': 'esbenp.prettier-vscode',
    // },

    //'generator-star-spacing': 'off',
    //'vue/max-attributes-per-line': 0,
    //'vue/valid-v-for': 0,
    //'arrow-parens': 'off',
    //'one-var': 'off',

    // this rule, if on, would require explicit return type on the `render` function
    '@typescript-eslint/explicit-function-return-type': 'off',

    // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
    '@typescript-eslint/no-var-requires': 'off',

    // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
    // does not work with type definitions
    'no-unused-vars': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
}
