# Coding Style

## General Coding Style

## HTML

| name | usage |
| --- | --- |
| Attribute New Line | Every attribute a separate line (if only one exists it can be on the same line)|
| Initial Indent | ✅ |


## Javascript

| name | usage |
| --- | --- |
| Initial Indent | ✅ |


## PHP

| name | usage |
| --- | --- |
| Attribute New Line | Every attribute a separate line (if only one exists it can be on the same line)|
| Initial Indent | ✅ |

## VueJS


| name | usage |
| --- | --- |
| API Style | Composition API **without** the 'script setup' code block. |
| Component Names | Pascal Case |


## Laravel

| name | usage |
| --- | --- |
| Controllers | Slim Controllers -> Logic should be inside models Control only handles the Requests |
| Models | If we need additional functionality, it shoudl reside inside the model, not the controller, as it can be easily reused inside different controllers but still be in it's associated model. |
| Component Names | Pascal Case |

```html
<script>
  import {reactive} from vue
  import MyComponent from "@/components/MyComponent"

  export default {
      components: { MyComponent },
      setup(props){

        const state = reactive({
          active: false,
        })


        return {
          state
        }
      }
  }
</script>
```