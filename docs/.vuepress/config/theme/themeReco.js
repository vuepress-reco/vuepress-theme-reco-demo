module.exports = {
  type: 'blog',
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: 'Category' // 默认 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: 'Tag' // 默认 “标签”
    }
  },
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'reco_luan',
  // 备案号
  record: '京ICP备17067634号-1',
  // 项目开始时间
  startYear: '2017'
}