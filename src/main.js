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
  if(data){
    return data;
  }
  return '0.0';
})
Vue.filter('price',(data)=>{
  return data/100;
});
Vue.filter('distance',(data)=>{
  return Math.floor(data*100)/100;
});
Vue.filter('timeFilter',(time)=>{
  var date=new Date(time);
  return date.toLocaleString();
})
import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller);
import Loading from '@/components/Loading'
Vue.component('Loading',Loading);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
