# world-preference



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute | Description             | Type                     | Default |
| ---------------- | --------- | ----------------------- | ------------------------ | ------- |
| `allowEmptyRows` | --        | Allow empty rows or not | `Boolean`                | `false` |
| `preference`     | --        | Preference over worlds  | `PropositionalWorld[][]` | `[]`    |


## Events

| Event               | Description | Type                                  |
| ------------------- | ----------- | ------------------------------------- |
| `preferenceChanged` |             | `CustomEvent<PropositionalWorld[][]>` |


## Dependencies

### Depends on

- [propositional-world-component](../propositional-world-component)

### Graph
```mermaid
graph TD;
  world-preference --> propositional-world-component
  style world-preference fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
