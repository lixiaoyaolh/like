<template>
    <div>
        <button @click="jian">-</button>
		{{this.$store.state.xxoo}}
        <button @click="jia">+</button>
    </div>
</template>

<script>
import {mapMutations} from "vuex"
export default {
	methods:{
		...mapMutations(["jia","jian"])
	}
}
</script>