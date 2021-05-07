# propositional-world



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute | Description                        | Type                           | Default     |
| ---------------- | --------- | ---------------------------------- | ------------------------------ | ----------- |
| `interpretation` | --        | Interpretation for the world       | `(formula: string) => boolean` | `undefined` |
| `syntax`         | --        | Propositional Syntax for the world | `Set<string>`                  | `undefined` |


## Dependencies

### Used by

 - [world-preference](../world-preference)
 - [world-selector](../world-selector)

### Graph
```mermaid
graph TD;
  world-preference --> propositional-world-component
  world-selector --> propositional-world-component
  style propositional-world-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
