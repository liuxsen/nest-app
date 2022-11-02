module.exports = {
  extends: [
    '@fostars/eslint-config/typescript'
  ],
  rules: {
    'no-useless-constructor': 'off',
    // https://stackoverflow.com/questions/70642350/eslint-indent-rule-indents-decorated-members
    indent: ['error', 2, { ignoredNodes: ['PropertyDefinition'] }]
  }
}
