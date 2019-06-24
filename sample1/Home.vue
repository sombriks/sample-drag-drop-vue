<template>
    <div>
        <h1>Drag drop with vue-drag-drop</h1>
        <button v-if="current.pai" @click="current = current.pai">Voltar</button> 
        <div class="elementos" v-for="c in current.children" :key="c.id">
            <drop @drop="drop => handleDrop(drop,c)">
                <drag :transfer-data="c">
                    <div>{{c.val}}</div> <button @click="current = c">...</button>
                </drag> 
            </drop>
        </div>
    </div>
</template>

<script>
const { Drag, Drop } = require("vue-drag-drop");
module.exports = {
    name:"Home",
    components: { Drag, Drop },
    data() {
        return {
            root:{i:-1, val:"Root", children:[]},
            current:null
        }
    },
    created() {
        this.current=this.root;
        let i = 10;
        while(i-->0) {
            this.current.children.push({ 
                pai:this.root, 
                val:`item ${i}`, 
                children:[],
                id:i, 
            })
        }
    },
    methods: {
        handleDrop(drop, target) {
            drop.pai.children = drop.pai.children.filter(e => e != drop);
            drop.pai = target;
            target.children.push(drop);
        }
    }
}
</script>

<style scoped>
    .elementos {
        margin: 1em 1em 1em 1em;
        padding: 1em 1em 1em 1em;
        border: 1px solid black;
    }
</style>
