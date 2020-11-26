<template>
    <div id="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    import IScroll from 'iscroll/build/iscroll-probe'
    export default {
        name:'ScrollView',
        mounted(){
            this.iscroll = new IScroll(this.$refs.wrapper,{
                mouseWheel:true,
                scrollbars:true
            })

            let observer = new MutationObserver((mutationList,observer)=>{
                this.iscroll.refresh()
            })
            
            let config = {
                childList:true
            }

            observer.observe(this.$refs.wrapper,config)
        }
	} 
</script>

<style lang="scss" scoped> 

</style>