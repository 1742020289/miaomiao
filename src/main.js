import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.axios=axios;
Vue.filter('actorsfilter', (data) => {
  if (!data) {
    return '暂无主演'
  }
  var result = data.map(item => item.name)
  return result.join(' ')
});
Vue.filter('filter',  (path)=> {
  return path.replace('w.h', '64.90')
});
Vue.filter('gradeFilter',(data)=>{
  if(data===0){
    return '暂无评分';
  }
  return data;
})
Vue.filter('price',(data)=>{
  return data/100;
});
Vue.filter('distance',(data)=>{
  return Math.floor(data*100)/100;
});
import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller);
import Loading from '@/components/Loading'
Vue.component('Loading',Loading);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
