import Vue from 'vue'
import Router from 'vue-router'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.use(Mint)
Vue.use(Router)


const Home = resolve => {
  import('../components/navigator').then(module => {
    resolve(module)
  })
}
const RecommendDetail = resolve => {
  import('../page-render/recommend-render').then(module => {
    resolve(module)
  })
}
const NewsDetail = resolve => {
  import('../page-render/news-render').then(module => {
    resolve(module)
  })
}
const timelimitedDetail = resolve => {
  import('../page-render/timelimited-render').then(module => {
    resolve(module)
  })
}
const LivingDetail = resolve => {
  import('../page-render/living-render').then(module => {
    resolve(module)
  })
}
const KitchenDetail = resolve => {
  import('../page-render/kitchen-render').then(module => {
    resolve(module)
  })
}
export default new Router({
  routes: [{
      path: '/',
      redirect: '/recommend',
      name: '主页'
  }, {
    path: '/recommend',
    component: Home,
    children: [{
      path: '1/',
      component: RecommendDetail
    },{
      path: '2/',
      component: NewsDetail
    },{
      path: '3/',
      component: timelimitedDetail
    },{
      path: '4/',
      component: LivingDetail
    },{
      path: '5/',
      component: KitchenDetail
    }, {
      path: '6/',
      component: KitchenDetail
    }, {
      path: '7/',
      component: KitchenDetail
    }, {
      path: '8/',
      component: KitchenDetail
    }]
  }
  ]
})


