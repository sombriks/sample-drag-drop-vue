# Sample drag drop vue

Small experiments to tease drag drop solutions with vue

## Libraries being evaluated

- [vue-drag-drop](https://github.com/cameronhimself/vue-drag-drop)
- [Vue.Draggable](https://github.com/SortableJS/Vue.Draggable)
- [vue-smooth-dnd](https://github.com/kutlugsahin/vue-smooth-dnd)

## Key characteristic being tested

Once drop event fires, we must detect drop target and instead to shift or
anything like that we need to make drag source a children of drop target.

## Findings

- **vue-drag-drop** does exactly what was needed, giving access to the
  underlying data without much effort.
- *Vue.Draggable* manipulates the data list directly, becoming more a sorting
  library than a drag/drop properly speaking
- *vue-smooth-dnd* is also more sortable than drag/drop. But does it much more
  nicely.

A few extra experiments were made, but they are not the main object of this
study.
