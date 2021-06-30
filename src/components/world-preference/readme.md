# world-preference



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description             | Type              | Default                              |
| ---------------- | ------------------ | ----------------------- | ----------------- | ------------------------------------ |
| `allowChanges`   | `allow-changes`    | Allow changes or not    | `boolean`         | `true`                               |
| `allowEmptyRows` | `allow-empty-rows` | Allow empty rows or not | `boolean`         | `false`                              |
| `preference`     | --                 | Preference over worlds  | `WorldPreference` | `new WorldPreference(new Set(), [])` |


## Events

| Event               | Description | Type                           |
| ------------------- | ----------- | ------------------------------ |
| `preferenceChanged` |             | `CustomEvent<WorldPreference>` |


## Dependencies

### Depends on

- [propositional-world-component](../propositional-world-component)

### Graph
```mermaid
graph TD;
  world-preference-component --> propositional-world-component
  style world-preference-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
