import { defineConfig } from 'eslint/config';
import globals from 'globals';
import path from 'path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default defineConfig([
	{
		extends: compat.extends('eslint:recommended'),

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},

			ecmaVersion: 'latest',
			sourceType: 'module',
		},

		rules: {
			'no-unused-vars': 'warn',
			'no-console': 'off',
			eqeqeq: 'error',
			semi: ['error', 'always'],
			quotes: ['error', 'single'],
		},
	},
]);
