/**
 * CorePress主题配置文件
 * 极客个人主题，多功能CMS主题
 * WordPress深度优化，颜值与性能并存
 */
const CONFIG = {
  // 主题基本信息
  THEME_NAME: 'CorePress',
  THEME_VERSION: '4.0',
  THEME_AUTHOR: 'applek',
  THEME_URI: 'https://www.lovestu.com/CorePress',

  // 首页设置
  COREPRESS_HOME_SLIDES: true, // 首页幻灯片
  COREPRESS_HOME_BANNER: true, // 首页横幅
  COREPRESS_HOME_BANNER_STRINGS: [
    '极客个人主题，多功能CMS主题',
    'WordPress深度优化，颜值与性能并存',
    '你想要的功能他都有',
    '干掉收费主题，从这儿开始🎉'
  ],

  // 导航设置
  COREPRESS_NAV_FIXED: false, // 固定导航栏
  COREPRESS_NAV_TRANSPARENT: false, // 透明导航栏

  // 文章列表设置
  COREPRESS_POST_LIST_STYLE: 'card', // 文章列表样式 ['card','list']
  COREPRESS_POST_LIST_COVER: true, // 显示封面图
  COREPRESS_POST_LIST_EXCERPT: true, // 显示摘要
  COREPRESS_POST_LIST_META: true, // 显示文章信息

  // 侧边栏设置
  COREPRESS_SIDEBAR_ENABLE: true, // 启用侧边栏
  COREPRESS_SIDEBAR_POSITION: 'right', // 侧边栏位置
  COREPRESS_SIDEBAR_FIXED: false, // 固定侧边栏
  
  // 侧边栏小工具
  COREPRESS_WIDGET_AUTHOR: true, // 作者信息
  COREPRESS_WIDGET_LATEST_POSTS: true, // 最新文章
  COREPRESS_WIDGET_HOT_POSTS: true, // 热门文章
  COREPRESS_WIDGET_LATEST_COMMENTS: true, // 最新评论
  COREPRESS_WIDGET_TAGS: true, // 标签云
  COREPRESS_WIDGET_CATEGORIES: true, // 分类列表

  // 文章页面设置
  COREPRESS_POST_TOC: true, // 文章目录
  COREPRESS_POST_BREADCRUMB: true, // 面包屑导航
  COREPRESS_POST_COPYRIGHT: true, // 版权声明
  COREPRESS_POST_PREV_NEXT: true, // 上下篇导航
  COREPRESS_POST_RELATED: true, // 相关文章

  // 功能模块
  COREPRESS_FEATURE_HIGHLIGHT: true, // 代码高亮
  COREPRESS_FEATURE_LIGHTBOX: true, // 图片灯箱
  COREPRESS_FEATURE_LAZYLOAD: true, // 图片懒加载
  COREPRESS_FEATURE_SHARE: true, // 社交分享
  COREPRESS_FEATURE_REPRINT: true, // 防复制
  COREPRESS_FEATURE_USER_CENTER: true, // 用户中心

  // SEO优化
  COREPRESS_SEO_ENABLE: true, // 启用SEO
  COREPRESS_SEO_AUTO_KEYWORDS: true, // 自动关键词
  COREPRESS_SEO_AUTO_DESCRIPTION: true, // 自动描述
  COREPRESS_SEO_SITEMAP: true, // 站点地图

  // 性能优化
  COREPRESS_OPTIMIZE_CSS: true, // CSS优化
  COREPRESS_OPTIMIZE_JS: true, // JS优化
  COREPRESS_OPTIMIZE_IMAGE: true, // 图片优化
  COREPRESS_OPTIMIZE_DATABASE: true, // 数据库优化

  // 小工具
  COREPRESS_WIDGET_TO_TOP: true, // 返回顶部
  COREPRESS_WIDGET_DARK_MODE: false, // 暗黑模式
  COREPRESS_WIDGET_SEARCH: true, // 搜索功能

  // 评论系统
  COREPRESS_COMMENT_SYSTEM: 'wordpress', // 评论系统类型
  COREPRESS_COMMENT_AVATAR: true, // 评论头像
  COREPRESS_COMMENT_NESTED: true, // 嵌套评论
  COREPRESS_COMMENT_EMOJI: true // 评论表情
}

// WordPress环境适配
if (typeof window !== 'undefined') {
  window.COREPRESS_CONFIG = CONFIG;
}

// PHP环境适配
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}

export default CONFIG
  COREPRESS_MODULE_USER_CENTER: true, // 用户中心

  // SEO设置
  COREPRESS_SEO_ENABLE: true, // 启用SEO功能
  COREPRESS_SEO_AUTO_KEYWORDS: true, // 自动生成关键词
  COREPRESS_SEO_AUTO_DESCRIPTION: true // 自动生成描述
}

// 导出配置（WordPress环境下的兼容处理）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
} else if (typeof window !== 'undefined') {
  window.COREPRESS_CONFIG = CONFIG;
}

export default CONFIG
