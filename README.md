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

Place a `config.json` with content similar to this here:

```json
{
  "options": {
    "preset": {
      "name": "conventionalcommits",
      "types": "add list of json objects here"
    }
  }
}
```

Ensure that `conventional-changelog-cli` is installed. Execute the following:

```shell
conventional-changelog -r 0 --config config.json
```
