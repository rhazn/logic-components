# formula-input



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type                                                | Default                                                      |
| ---------------- | ----------------- | ----------- | --------------------------------------------------- | ------------------------------------------------------------ |
| `initialFormula` | `initial-formula` |             | `string`                                            | `""`                                                         |
| `postvalidate`   | --                |             | `(formula: string) => string`                       | `(formula: Formula) => formula`                              |
| `prevalidate`    | --                |             | `(formula: string) => string`                       | `(formula: Formula) => `fof('formula', axiom, ${formula}).`` |
| `validate`       | --                |             | `(formula: string) => Promise<SyntaxCheckResponse>` | `() => Promise.resolve({ valid: true })`                     |


## Events

| Event                 | Description | Type                  |
| --------------------- | ----------- | --------------------- |
| `validFormulaEntered` |             | `CustomEvent<string>` |


## Shadow Parts

| Part            | Description |
| --------------- | ----------- |
| `"description"` |             |
| `"error"`       |             |
| `"form"`        |             |
| `"input"`       |             |
| `"label"`       |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
