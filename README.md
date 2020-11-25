# doldari

## eslint 파일설정

### eslint란? 코드를 작성하면 자동으로 react 코드에 맞게 들여쓰기, 문법 검사를 해주는 기능입니다.

#### 설정방법
----------------------------------------------------------------------------------
#### 1. eslint, prettier확장자 설치
</br>
#### 2. package.json 파일에 설정내용추가 (dependencies와 devDependencies수정)

```
"dependencies" : {
...
	"@typescript-eslint/eslint-plugin": "^4.8.1",
	"@typescript-eslint/parser": "^4.8.1",
}

"devDependencies" : {
...
    "@typescript-eslint/eslint-plugin": "4.0.1",
		"@typescript-eslint/parser": "4.0.1",
		"babel-eslint": "^10.1.0",
		"eslint": "^7.11.0",
		"eslint-config-airbnb": "^18.2.0",
		"eslint-config-airbnb-base": "^14.2.0",
		"eslint-config-prettier": "^6.11.0",
		"eslint-plugin-import": "^2.22.0",
		"eslint-plugin-jest": "^23.20.0",
		"eslint-plugin-jsx-a11y": "^6.3.1",
		"eslint-plugin-prettier": "^3.1.4",
		"eslint-plugin-react": "^7.20.6",
		"eslint-plugin-react-hooks": "^4.1.0",
}
```
</br>

#### 3. .eslintrc.js파일 생성 하여 아래의 내용 (앱 루트폴더(client/server))
```
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
    es6: true,
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint/eslint-plugin',
    'prettier',
    'jest',
  ],
  extends: [
    'plugin:react/recommended',
    'airbnb-base',
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    /**
     * Basic rules
     */
    'brace-style': 'off',
    camelcase: 1,
    // 'no-console': [2, { allow: ['error'] }],
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'lines-between-class-members': 1,
    'no-trailing-spaces': [
      'error',
      { ignoreComments: true },
    ],
    'class-methods-use-this': 0,
    'no-underscore-dangle': 'off',
    'comma-dangle': 2,
    'linebreak-style': 'off',
    'no-useless-constructor': 0,
    'max-len': ['error', {
      code: 120,
      tabWidth: 2,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreStrings: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
    }],
    'max-params': ['warn', 4],
    'no-shadow': 2,
    /**
     * import rules
     */
    'import/no-extraneous-dependencies': [0, { devDependencies: ['**/*.test.js', '**/*.spec.js'] }],
    'import/no-cycle': 0, // disable dependency cycle for this project
    'import/prefer-default-export': 0, // please use import
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    /**
     * Typescript rules
     */
    '@typescript-eslint/brace-style': ['error'],
    '@typescript-eslint/type-annotation-spacing': [2, { before: false, after: true, overrides: { arrow: { after: true, before: true } } }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // disable this rule for js, jsx files
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'warn', // please use import
    '@typescript-eslint/no-use-before-define': 2,

    // do not allow unused variables
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/camelcase': 'off',
    /**
     * React rules
     */
    'jsx-a11y/img-redundant-alt': 2,
    'jsx-a11y/no-access-key': 2,
    'jsx-a11y/aria-role': 2,
    'react/button-has-type': 0,
    'react/display-name': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.tsx',
          '.jsx',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/require-default-props': 0,
    'react/prefer-stateless-function': 1,
    'react/jsx-pascal-case': 2,
    'react/jsx-no-bind': 2,
    'react/no-is-mounted': 2,
    'react/forbid-prop-types': [
      0,
      {
        forbid: [
          'object',
        ],
      },
    ],
    'react/prop-types': [
      2,
      {
        ignore: [
          'className',
          'children',
          'location',
          'params',
          'location*',
        ],
      },
    ],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
      },
    },
    {
      // 'React' was used before it was defined
      // this bug occurs due to mismatch of @typescript-eslint versions in react-scripts and your local package.json
      // 2020/10/13 -> react-scripts use @teypscript-eslint/parser and eslint-plugin of version 4.0.1 
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/no-use-before-define': 0,
      },
    },
  ],
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
      ],
    },
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
};

```
