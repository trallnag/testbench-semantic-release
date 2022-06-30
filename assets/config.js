'use strict';

const config = require('conventional-changelog-conventionalcommits');

module.exports = config({
  types: [
    // Visible.
    { type: 'feat', section: 'Features', hidden: false },
    { type: 'fix', section: 'Bug Fixes', hidden: false },
    { type: 'perf', section: 'Performance', hidden: false },
    { type: 'revert', section: 'Reverts', hidden: false },
    { type: 'refactor', section: 'Refactor', hidden: false },
    { type: 'test', section: 'Tests', hidden: false },
    { type: 'docs', section: 'Docs', hidden: false },
    // Hidden.
    { type: 'style', section: 'Styles', hidden: true },
    { type: 'chore', section: 'Chores', hidden: true },
    { type: 'build', section: 'Build', hidden: true },
    { type: 'ci', section: 'CI/CD', hidden: true },
  ],
});
