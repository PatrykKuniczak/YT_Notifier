module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module'
	},
	// PRETTIER MUST BE LAST
	plugins: [
		'@typescript-eslint/eslint-plugin',
		'@darraghor/nestjs-typed',
		'prettier'
	],
	// PRETTIER MUST BE LAST
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@darraghor/nestjs-typed/recommended',
		'plugin:prettier/recommended'
	],
	root: true,
	env: {
		node: true,
		jest: true
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'no-restricted-imports': [
			'error',
			{
				paths: [
					{
						name: 'google-auth-library/build/src/auth/oauth2client',
						message:
							"Please import 'OAuth2GoogleClientCredentials' from 'oauth2.module.ts', and use it as provider in your service instead"
					}
				]
			}
		],
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off'
	},
	overrides: [
		{
			files: 'src/auth/oauth2.module.ts',
			rules: {
				'no-restricted-imports': 'off'
			}
		}
	]
};
