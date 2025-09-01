/* eslint-disable react/no-unknown-property */
/**
 * CorePress主题样式
 * 极客个人主题，多功能CMS主题
 * 作者: applek
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* CorePress主题基础样式 */
      body {
        background-color: #f5f5f5;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      }
      
      .dark body {
        background-color: #1a1a1a;
        color: #e0e0e0;
      }

      /* CorePress主题色彩 */
      :root {
        --corepress-primary: #409EFF;
        --corepress-primary-hover: #66b1ff;
        --corepress-text-selected: #409EFF;
      }

      /* 导航菜单样式 */
      #corepress-theme .menu-item a {
        color: #333;
        text-decoration: none;
        padding: 10px 15px;
        display: block;
        transition: all 0.3s ease;
      }

      #corepress-theme .menu-item a:hover {
        color: var(--corepress-primary);
        background-color: rgba(64, 158, 255, 0.1);
      }

      /* 文章列表样式 */
      .post-list-item {
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 20px;
        padding: 20px;
        transition: transform 0.2s ease;
      }

      .post-list-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(0,0,0,0.15);
      }

      /* 侧边栏样式 */
      .sidebar-plane .aside-box {
        background: #fff;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }

      /* 按钮样式 */
      .corepress-btn {
        background: var(--corepress-primary);
        color: #fff;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.3s ease;
      }

      .corepress-btn:hover {
        background: var(--corepress-primary-hover);
      }

      /* 返回顶部按钮 */
      .go-top-plane {
        position: fixed;
        right: 30px;
        bottom: 30px;
        width: 40px;
        height: 40px;
        background: var(--corepress-primary);
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }

      .go-top-plane-show {
        opacity: 1;
        visibility: visible;
      }

      /* 暗色模式 */
      .dark .post-list-item,
      .dark .aside-box {
        background: #2d2d2d;
        color: #e0e0e0;
      }

      .dark .menu-item a {
        color: #e0e0e0;
      }

      /* 响应式设计 */
      @media (max-width: 768px) {
        .sidebar-plane {
          margin-top: 20px;
        }
        
        .container {
          padding: 0 15px;
        }
      }
    `}</style>
  )
}

export { Style }
