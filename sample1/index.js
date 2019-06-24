const Vue = require("vue");

new Vue({
    el:"#app",
    render: r => r(require("./Home.vue"))
})