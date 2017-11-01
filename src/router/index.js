import Vue from 'vue'

import Router from 'vue-router'
Vue.use(Router)

import Rank from '../components/rank/rank.vue'
import Singer from '../components/singer/singer.vue'
import Search from '../components/search/search.vue'
import Recommend from '../components/recommend/recommend.vue'
import SingerDetail from '../components/singer-detail/singer-detail.vue'

export default new Router({
  routes: [
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/',
      redirect: '/recommend'
    }
  ]
})
