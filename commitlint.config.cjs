module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'root',
        'frontend',
        'backend',
        'shared',
        'admin-portal',
        'landing-page',
        'services',
        'microservices',
        'deps',
        'release',
      ],
    ],
    'subject-case': [2, 'always', 'sentence-case'],
    'body-max-line-length': [0, 'always', 100], // Disable line length check for body
  },
};
