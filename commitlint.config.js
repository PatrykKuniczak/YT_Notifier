export default { extends: ['@commitlint/config-conventional'] ,
rules: {
    'type-enum': [2, 'always', ['chore', 'docs', 'feat', 'fix', 'refactor', 'revert', 'style', 'improvement']]
}};
