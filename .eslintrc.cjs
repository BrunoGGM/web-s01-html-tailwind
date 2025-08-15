module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier',
    'tailwindcss'
  ],
  settings: {
    tailwindcss: { callees: ['cn', 'clsx', 'cva'] }
  },
  rules: {
    'prettier/prettier': 'warn'
  }
};