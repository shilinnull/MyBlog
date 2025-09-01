<?php
define('THEME_NAME', 'CorePress');
define('THEME_VERSION', 31);
define('THEME_DOWNURL', 'https://www.lovestu.com');
define('THEME_VERSIONNAME', '4.0');
define('THEME_PATH', get_template_directory());
define('THEME_STATIC_PATH', get_template_directory_uri() . '/static');
define('THEME_CSS_PATH', THEME_STATIC_PATH . '/css');
define('THEME_JS_PATH', THEME_STATIC_PATH . '/js');
define('THEME_LIB_PATH', THEME_STATIC_PATH . '/lib');
define('THEME_IMG_PATH', THEME_STATIC_PATH . '/img');
define('FRAMEWORK_PATH', THEME_PATH . '/geekframe');
define('FRAMEWORK_URI', get_template_directory_uri() . '/geekframe');
define('AJAX_URL', admin_url('admin-ajax.php'));

// 加载next风格配置
function load_next_config() {
    $config_file = THEME_PATH . '/config.js';
    if (file_exists($config_file)) {
        $config_content = file_get_contents($config_file);
        // 提取配置对象
        preg_match('/const CONFIG = ({[\s\S]*?});/', $config_content, $matches);
        if (isset($matches[1])) {
            // 转换JS配置为PHP数组（简单实现）
            $js_config = $matches[1];
            // 这里可以添加更复杂的JS到PHP转换逻辑
        }
    }
    
    // 返回默认的next风格配置
    return array(
        'NEXT_HOME_BANNER' => true,
        'NEXT_HOME_BANNER_STRINGS' => array(
            'Hi，欢迎来到CorePress主题',
            'Hi，这是一个极客主题', 
            'Hi，多功能WordPress主题',
            '欢迎来到我的博客🎉'
        ),
        'NEXT_NAV_TYPE' => 'normal',
        'NEXT_POST_LIST_COVER' => true,
        'NEXT_POST_LIST_PREVIEW' => true,
        'NEXT_POST_LIST_SUMMARY' => false,
        'NEXT_PREVIEW_TAG_COUNT' => 16,
        'NEXT_PREVIEW_CATEGORY_COUNT' => 16,
        'NEXT_POST_HEADER_IMAGE_VISIBLE' => false,
        'NEXT_RIGHT_BAR' => true,
        'NEXT_RIGHT_LATEST_POSTS' => true,
        'NEXT_RIGHT_CATEGORY_LIST' => true,
        'NEXT_RIGHT_TAG_LIST' => true,
        'NEXT_RIGHT_AD' => false,
        'NEXT_MENU_HOME' => true,
        'NEXT_MENU_CATEGORY' => true,
        'NEXT_MENU_TAG' => true,
        'NEXT_MENU_ARCHIVE' => true,
        'NEXT_MENU_SEARCH' => true,
        'NEXT_WIDGET_TO_TOP' => true,
        'NEXT_WIDGET_TO_BOTTOM' => false,
        'NEXT_WIDGET_DARK_MODE' => false,
        'NEXT_WIDGET_TOC' => true,
        'NEXT_ARTICLE_RELATE_POSTS' => true,
        'NEXT_ARTICLE_COPYRIGHT' => true,
        'NEXT_ARTICLE_NOT_BY_AI' => false,
        'NEXT_ARTICLE_INFO' => true
    );
}

// 将next配置合并到现有配置中
$next_config = load_next_config();

require_once(FRAMEWORK_PATH . '/options.php');
$set = options::getInstance()->getdata();

// 合并next配置到现有配置
$set = array_merge($set, array('next' => $next_config));

require_once(FRAMEWORK_PATH . '/utils.php');
require_once(FRAMEWORK_PATH . '/support.php');
require_once(FRAMEWORK_PATH . '/users.php');
require_once(FRAMEWORK_PATH . '/ajax.php');

require_once(FRAMEWORK_PATH . '/comment-pro.php');
require_once(THEME_PATH . '/widgets/comments.php');
require_once(THEME_PATH . '/widgets/author.php');
require_once(THEME_PATH . '/widgets/hot-post.php');

require_once(FRAMEWORK_PATH . '/shortcode.php');
add_editor_style('static/css/editor-style.css');
error_reporting(0);

require_once(ABSPATH . 'wp-admin/includes/file.php');
WP_Filesystem();