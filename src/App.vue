<template>
    <div id="app">
        <!-- <Header/> -->
		<router-link to="/recommend">Recommend</router-link>
		<router-view></router-view>
		<!-- <button @click="myFn('theme')">ok</button> -->
    </div>
</template>

<script>
	import Header from './components/Header.vue'
	export default {
		name:'App',
		data(){
			return {

			}
		},
		components:{
			Header
		},
		methods:{
			myFn(data){
				document.documentElement.setAttribute('data-theme',data)
			}
		}
	}
</script>

<style lang="scss">

</style>
