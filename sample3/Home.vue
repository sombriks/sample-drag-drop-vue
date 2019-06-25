<template>
  <Container v-if="current" :get-child-payload="i => current.children[i]" @drop="onDrop">
    <Draggable v-for="c in current.children" :key="c.id">
      <div class="elementos">{{c.val}}</div>
    </Draggable>
  </Container>
</template>

<script>
// https://github.com/kutlugsahin/vue-smooth-dnd#drop
// https://github.com/kutlugsahin/vue-smooth-dnd#get-child-payload
const { Container, Draggable } = require("vue-smooth-dnd");
module.exports = {
  name: "Home",
  components: { Container, Draggable },
  data() {
    return {
      root: { i: -1, val: "Root", children: [] },
      current: null
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
      onDrop(data){
          console.log(data)
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
