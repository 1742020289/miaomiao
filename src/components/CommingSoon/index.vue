<template>
  <div class="movie_body">
      <Scroller>
          <Loading v-if="isLoading"/>
        <ul v-else>
            <li v-for="item in commingList" :key="item.filmId">
                    <div class="pic_show"><img :src="item.poster" @touchstart="handleToDetail(item.filmId)"></div>
                    <div class="info_list">
                        <h2 @touchstart="handleToDetail(item.filmId)">{{ item.name }} <img v-if="item.item.type==2" src="@/assets/maxs.png" alt=""></h2>
                        
                        <p>主演: {{ item.actors|actorsfilter }}</p>
                        <p>{{ item.premiereAt|timeFilter }}上映</p>
                    </div>
                    <div class="btn_pre">
                        预售
                    </div>
                </li>
        </ul>
      </Scroller>
    </div>
</template>

<script>
export default {
    name : 'CommingSoon',
    data(){
		return{
			commingList : [],
            isLoading:true,
		}
	},
   methods:{
    handleToDetail(id){
      console.log(id);
      this.$router.push('/movie/detail/2/'+id);
    }
  
},
	mounted() {
this.axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8977309',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"160041217029742648524801","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res=>{
		console.log(res.data);
		
		
	
			this.commingList=res.data.data.films;
            this.isLoading=false;
			
		
		
	})
	}
  
  
}
</script>

<style scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;height: 100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
</style>