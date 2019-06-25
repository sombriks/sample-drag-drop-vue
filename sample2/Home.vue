<template>
  <div v-if="current">
    <h1>Drag drop with vuedraggable</h1>
    <draggable v-model="current.children" @start="dragin" @end="dragout">
      <div class="elementos" v-for="c in current.children" :key="c.id">
        <div>{{c.val}}</div>
        <button @click="current = c">...</button>
      </div>
    </draggable>
  </div>
</template>

<script>
// https://github.com/SortableJS/Vue.Draggable#value
const draggable = require("vuedraggable");
module.exports = {
  name: "Home",
  components: { draggable },
  data() {
    return {
      root: { i: -1, val: "Root", children: [] },
      current: null,
      debu1: {},
      debu2: {}
    };
  },
  created() {
    this.current = this.root;
    let i = 10;
    while (i-- > 0) {
      this.current.children.push({
        pai: this.root,
        val: `item ${i}`,
        children: [],
        id: i
      });
    }
  },
  methods: {
    dragin(data) {
      this.debu1 = data;
      console.log("in: " + data);
    },
    dragout(data) {
      this.debu2 = data;
      console.log("out: " + data);
    }
  }
};
</script>

<style scoped>
.elementos {
  margin: 1em 1em 1em 1em;
  padding: 1em 1em 1em 1em;
  border: 1px solid black;
}
</style>
