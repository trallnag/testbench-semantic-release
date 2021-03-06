# Testbench for Semantic Release

Repository where I play around with the Semantic Release tool.

- <https://github.com/semantic-release/semantic-release>

## Major version 0

Semantic Release does not support releasing with major version `0`. The official
recommendation is to use pre-releases instead. If `0.x` versions are a must, use
something like Release Please instead.

## Regenerate changelog

Not directly possible with Semantic Release. But Semantic Release uses packages
from conventional-changelog under the hood and these include a CLI.

```sh
npm install -g conventional-changelog-conventionalcommits
npm install -g conventional-changelog-cli
```

Use either [`assets/config.js`](assets/config.js) or
[`assets/config.json`](assets/config.json).

```shell
conventional-changelog -r 0 --config <config-file>
```

## Advantages

### References

- <https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-conventionalcommits/README.md>
