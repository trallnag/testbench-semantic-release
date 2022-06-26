# Testbench for Semantic Release

Repository where I play around with the Semantic Release tool.

- <https://github.com/semantic-release/semantic-release>

## Miscellaneous Notes

### Major version 0

Semantic Release does not support releasing with major version `0`. The official
recommendation is to use pre-releases instead. If `0.x` versions are a must, use
something like Release Please instead.

### Regenerate changelog

Not directly possible with Semantic Release. But Semantic Release uses packages
from conventional-changelog under the hood and these include a CLI.

<!-- prettier-ignore -->
```json
{
  "options": {
    "preset": {
      "name": "conventionalcommits",
      "types": [
        { "type": "feat",      "section": "Features",     "hidden": false },
        { "type": "fix",       "section": "Bug Fixes",    "hidden": false },
        { "type": "perf",      "section": "Performance",  "hidden": false },
        { "type": "refactor",  "section": "Refactor",     "hidden": false },
        { "type": "test",      "section": "Tests",        "hidden": false },
        { "type": "revert",    "section": "Revert",       "hidden": false },
        { "type": "docs",      "section": "Docs",         "hidden": true },
        { "type": "style",     "section": "Styles",       "hidden": true },
        { "type": "chore",     "section": "Chores",       "hidden": true },
        { "type": "build",     "section": "Build",        "hidden": true },
        { "type": "ci",        "section": "CI/CD",        "hidden": true }
      ]
    }
  }
}
```

Can be generated like this:

```shell
conventional-changelog -r 0 --config config.json
```
