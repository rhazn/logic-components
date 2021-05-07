# world-selector



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description    | Type                   | Default |
| -------- | --------- | -------------- | ---------------------- | ------- |
| `worlds` | --        | List of worlds | `PropositionalWorld[]` | `[]`    |


## Events

| Event             | Description | Type                              |
| ----------------- | ----------- | --------------------------------- |
| `worldDeselected` |             | `CustomEvent<PropositionalWorld>` |
| `worldSelected`   |             | `CustomEvent<PropositionalWorld>` |


## Dependencies

### Depends on

- [propositional-world-component](../propositional-world-component)

### Graph
```mermaid
graph TD;
  world-selector --> propositional-world-component
  style world-selector fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
