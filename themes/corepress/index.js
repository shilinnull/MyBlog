/**
 * CorePress主题 - 极客个人主题，多功能CMS主题
 * 作者: applek
 * 官网: https://www.lovestu.com
 */

// CorePress主题全局配置
import CONFIG from './config'
import replaceSearchResult from '@/components/Mark'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { isBrowser } from '@/lib/utils'
import dynamic from 'next/dynamic'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import Announcement from './components/Announcement'
import ArticleDetail from './components/ArticleDetail'
import { ArticleLock } from './components/ArticleLock'
import BlogListBar from './components/BlogListBar'
import BlogPostArchive from './components/BlogPostArchive'
import BlogPostListPage from './components/BlogPostListPage'
import BlogPostListScroll from './components/BlogPostListScroll'
import Card from './components/Card'
import FloatDarkModeButton from './components/FloatDarkModeButton'
import Footer from './components/Footer'
import JumpToBottomButton from './components/JumpToBottomButton'
import JumpToTopButton from './components/JumpToTopButton'
import SideAreaLeft from './components/SideAreaLeft'
import SideAreaRight from './components/SideAreaRight'
import StickyBar from './components/StickyBar'
import TagItem from './components/TagItem'
import TocDrawer from './components/TocDrawer'
import TocDrawerButton from './components/TocDrawerButton'
import TopNav from './components/TopNav'

const AlgoliaSearchModal = dynamic(
  () => import('@/components/AlgoliaSearchModal'),
  { ssr: false }
)

// 主题全局状态
const ThemeGlobalNext = createContext()
export const useNextGlobal = () => useContext(ThemeGlobalNext)

/**
 * CorePress基础布局
 * 采用WordPress标准布局结构
 */
const CorePressLayoutBase = (props) => {
  const { children, sidebar_position, show_sidebar } = props

  return (
    <div id="corepress-theme" className="corepress-wrapper">
      {/* 头部导航 */}
      <header className="header-main-plane">
        <div className="header-main container">
          <CorePressTopNav {...props} />
        </div>
      </header>

      {/* 主内容区域 */}
      <main className={`container ${sidebar_position === 'left' ? 'sidebar-left' : 'sidebar-right'}`}>
        <div className="main-content">
          <div className="post-list-plane">
            {children}
          </div>

          {/* 侧边栏 */}
          {show_sidebar && (
            <aside className="sidebar-plane">
              <CorePressSidebar {...props} />
            </aside>
          )}
        </div>
      </main>

      {/* 页脚 */}
      <footer>
        <CorePressFooter {...props} />
      </footer>

      {/* 返回顶部按钮 */}
      <div className="go-top-plane" title="返回顶部">
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </div>
    </div>
  )
}

/**
 * 首页布局
 */
const CorePressLayoutIndex = (props) => {
  const { posts, slides } = props

  return (
    <>
      {/* 幻灯片 */}
      {slides && slides.length > 0 && (
        <div className="swiper-container">
          <CorePressSlider slides={slides} />
        </div>
      )}

      {/* 文章列表 */}
      <div className="post-list">
        <CorePressPostList posts={posts} {...props} />
      </div>
    </>
  )
}

/**
 * 文章详情页布局
 */
const CorePressLayoutPost = (props) => {
  const { post, show_catalog, show_breadcrumb } = props

  return (
    <>
      {/* 面包屑导航 */}
      {show_breadcrumb && (
        <div className="breadcrumb-plane">
          <CorePressBreadcrumb />
        </div>
      )}

      {/* 文章内容 */}
      <article className="post-content-post">
        <CorePressArticleDetail post={post} {...props} />
      </article>

      {/* 文章目录 */}
      {show_catalog && (
        <div id="post-catalog" className="post-catalog">
          <CorePressTOC />
        </div>
      )}

      {/* 评论区域 */}
      <div className="comment-plane">
        <CorePressComments post={post} />
      </div>
    </>
  )
}

/**
 * 分类页面布局
 */
const CorePressLayoutCategory = (props) => {
  const { category, posts } = props

  return (
    <>
      <div className="category-header">
        <h1 className="category-title">{category.name}</h1>
        <div className="category-description">{category.description}</div>
      </div>

      <div className="post-list">
        <CorePressPostList posts={posts} {...props} />
      </div>
    </>
  )
}

/**
 * 标签页面布局
 */
const CorePressLayoutTag = (props) => {
  const { tag, posts } = props

  return (
    <>
      <div className="tag-header">
        <h1 className="tag-title">标签: {tag.name}</h1>
      </div>

      <div className="post-list">
        <CorePressPostList posts={posts} {...props} />
      </div>
    </>
  )
}

/**
 * 搜索结果页布局
 */
const CorePressLayoutSearch = (props) => {
  const { keyword, posts } = props

  return (
    <>
      <div className="search-header">
        <h1 className="search-title">搜索结果: {keyword}</h1>
        <div className="search-count">找到 {posts.length} 篇文章</div>
      </div>

      <div className="post-list">
        <CorePressPostList posts={posts} {...props} />
      </div>
    </>
  )
}

/**
 * 归档页面布局
 */
const CorePressLayoutArchive = (props) => {
  const { archivePosts } = props

  return (
    <>
      <div className="archive-header">
        <h1 className="archive-title">文章归档</h1>
      </div>

      <div className="archive-content">
        {Object.keys(archivePosts).map(year => (
          <div key={year} className="archive-year">
            <h2 className="year-title">{year}</h2>
            <div className="year-posts">
              {archivePosts[year].map(post => (
                <div key={post.id} className="archive-post-item">
                  <span className="post-date">{post.date}</span>
                  <a href={post.url} className="post-title">{post.title}</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

/**
 * 404错误页面
 */
const CorePressLayout404 = (props) => {
  return (
    <div className="error-404">
      <div className="error-content">
        <h1>404</h1>
        <p>页面未找到</p>
        <a href="/" className="btn-home">返回首页</a>
      </div>
    </div>
  )
}

// 导出所有布局组件
export {
  CorePressLayoutBase as LayoutBase,
  CorePressLayoutIndex as LayoutIndex,
  CorePressLayoutPost as LayoutSlug,
  CorePressLayoutCategory as LayoutCategoryIndex,
  CorePressLayoutTag as LayoutTagIndex,
  CorePressLayoutSearch as LayoutSearch,
  CorePressLayoutArchive as LayoutArchive,
  CorePressLayout404 as Layout404,
  CONFIG as THEME_CONFIG
}
    setTimeout(() => {
      const article = isBrowser && document.getElementById('article-wrapper')
      if (!article) {
        router.push('/').then(() => {
          // console.log('找不到页面', router.asPath)
        })
      }
    }, 3000)
  }, [])

  return (
    <>
      <div className='md:-mt-20 text-black w-full h-screen text-center justify-center content-center items-center flex flex-col'>
        <div className='dark:text-gray-200'>
          <h2 className='inline-block border-r-2 border-gray-600 mr-2 px-3 py-2 align-top'>
            <i className='mr-2 fas fa-spinner animate-spin' />
            404
          </h2>
          <div className='inline-block text-left h-32 leading-10 items-center'>
            <h2 className='m-0 p-0'>页面无法加载，即将返回首页</h2>
          </div>
        </div>
      </div>
    </>
  )
}

/**
 * 归档
 * @param {*} props
 * @returns
 */
const LayoutArchive = props => {
  const { archivePosts } = props

  return (
    <>
      <div className='mb-10 pb-20 bg-white md:p-12 p-3 dark:bg-hexo-black-gray shadow-md min-h-full'>
        {Object.keys(archivePosts).map(archiveTitle => (
          <BlogPostArchive
            key={archiveTitle}
            posts={archivePosts[archiveTitle]}
            archiveTitle={archiveTitle}
          />
        ))}
      </div>
    </>
  )
}

/**
 * 文章详情
 * @param {*} props
 * @returns
 */
const LayoutSlug = props => {
  const { post, lock, validPassword } = props

  const router = useRouter()
  const waiting404 = siteConfig('POST_WAITING_TIME_FOR_404') * 1000
  useEffect(() => {
    // 404
    if (!post) {
      setTimeout(
        () => {
          if (isBrowser) {
            const article = document.querySelector('#article-wrapper #notion-article')
            if (!article) {
              router.push('/404').then(() => {
                console.warn('找不到页面', router.asPath)
              })
            }
          }
        },
        waiting404
      )
    }
  }, [post])
  return (
    <>
      {post && !lock && <ArticleDetail {...props} />}

      {post && lock && <ArticleLock validPassword={validPassword} />}
    </>
  )
}

/**
 * 分类列表
 * @param {*} props
 * @returns
 */
const LayoutCategoryIndex = props => {
  const { allPosts, categoryOptions } = props
  const { locale } = useGlobal()
  return (
    <div totalPosts={allPosts} {...props}>
      <div className='bg-white dark:bg-hexo-black-gray px-10 py-10 shadow h-full'>
        <div className='dark:text-gray-200 mb-5'>
          <i className='mr-4 fas faTh' />
          {locale.COMMON.CATEGORY}:
        </div>
        <div id='category-list' className='duration-200 flex flex-wrap'>
          {categoryOptions?.map(category => {
            return (
              <SmartLink
                key={category.name}
                href={`/category/${category.name}`}
                passHref
                legacyBehavior>
                <div
                  className={
                    'hover:text-black dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600 px-5 cursor-pointer py-2 hover:bg-gray-100'
                  }>
                  <i className='mr-4 fas fa-folder' />
                  {category.name}({category.count})
                </div>
              </SmartLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/**
 * 标签列表
 * @param {*} props
 * @returns
 */
const LayoutTagIndex = props => {
  const { tagOptions } = props
  const { locale } = useGlobal()
  return (
    <>
      <div className='bg-white dark:bg-hexo-black-gray px-10 py-10 shadow h-full'>
        <div className='dark:text-gray-200 mb-5'>
          <i className='fas fa-tags mr-4' />
          {locale.COMMON.TAGS}:
        </div>
        <div id='tags-list' className='duration-200 flex flex-wrap'>
          {tagOptions.map(tag => {
            return (
              <div key={tag.name} className='p-2'>
                <TagItem key={tag.name} tag={tag} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export {
  Layout404,
  LayoutArchive,
  LayoutBase,
  LayoutCategoryIndex,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutSlug,
  LayoutTagIndex,
  CONFIG as THEME_CONFIG
}
