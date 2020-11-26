<template>
    <div id="outer">
        recommend...
        <!-- <Banner :banners='banners'></Banner> -->
        <!-- <div class="box" ref="box">

        </div> -->

        <Header ref="box"></Header>

        <!-- <ScrollView>
            <div>
                <div class="box" v-for='(item,key) in "1111111111111111111"' :key="key"></div>
            </div>
        </ScrollView> -->

        <img style="width:100px;height:100px" v-lazy="imgUrl" alt="">
    </div>
</template>

<script>
    import {getBanner,getPersonalized} from '../api/index'
    import Banner from '../components/Banner'
    import ScrollView from '../components/ScrollView'
    import Header from '../components/Header'
    export default {
        name:'Recommend',
        data(){
            return {
                banners:[],
                imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594043682729&di=6b65cfd52186a534f77d6b8de0ffd957&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1305%2F03%2Fc0%2F20496484_1367549048818.jpg'
            }
        },
        mounted(){
            getBanner().then(res=>{
                this.banners = res.banners
            })

            console.log(this.$refs.box.$el)
        },
        components:{
            Banner,
            ScrollView,
            Header
        }
	}
</script>

<style lang="scss" scoped> 
#outer{
    height: 400px;
    width: 200px;
    background: #eee;
    overflow: scroll
}
.box{
    width: 50px;
    height: 50px;
    background: orange;
    border: 1px solid gray;
}
</style>