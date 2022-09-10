# Formatter

## EditorConfig

[EditorConfig](https://editorconfig.org/) helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig file defines the coding styles.

```ini
# top-most EditorConfig file
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = crlf
insert_final_newline = true
trim_trailing_whitespace = true
max_line_length = 80
```

As all members of my team code on Windows, `end_of_line` is set to `crlf`. You may need to change it to `lf`.

## Prettier

Prettier is an opinionated code formatter which removes all original styling and ensures that all outputted code conforms to a consistent style. With [Prettier for VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), you can format you code on save.

Notice the Prettier config of Vitify Admin is very simple, as it [inherits config from EditorConfig](https://prettier.io/docs/en/configuration.html#editorconfig).

```json
{
  "singleQuote": true,
  "semi": false,
}
```

### JSON schema for config file

In order to obtain intellisense of config file which cannot be defined in TypeScript, like Prettier which does not allow `.prettierrc.ts`, we can profit [VSCode JSON schemas feature](https://code.visualstudio.com/docs/languages/json#_json-schemas-and-settings) to get auto-completion.

```json
// .vscode/settings.json
{
  "json.schemas": [
    {
      "fileMatch": ["/.prettierrc"],
      "url": "https://json.schemastore.org/prettierrc.json"
    }
  ]
}
```
