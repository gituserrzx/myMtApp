import axios from '@/axios.js'
const request = {
  getHotWord () {
    return axios.get('/api/meituan/header/searchHotWords.json')
  },
  getSearchList () {
    return axios.get('/api/meituan/header/search.json')
  },
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  getContainerContent () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  getHotCityList () {
    return axios.get('/api/meituan/city/hot.json')
  },
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  getRecentList () {
    return axios.get('/api/meituan/city/recents.json')
  },
  getGoodsList(){
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getRecommendList(){
    return axios.get('/api/meituan/list/recommend.json')
  },
  getCategoryList(){
    return axios.get('/api/meituan/list/classify.json')
  },
  getAreaList(){
    return axios.get('/api/meituan/list/areaList.json')
  },
  getPosition(){
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getPositionDetail(){
    return axios.get('/api/meituan/product/detail.json')
  }
}
export default request
