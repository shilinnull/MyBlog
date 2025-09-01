<div class="set-plane">
    <div class="set-title">
        主题颜色：
    </div>
    <div class="set-object">
        <div class="set-plane">
            <el-color-picker v-model="set.theme.themeColor"></el-color-picker>
            <div style="max-width: 200px;margin-left: 10px;margin-right: 10px">
                <el-input v-model="set.theme.themeColor" placeholder="" size="small"></el-input>
            </div>
            <div>
                <el-button type="primary" size="small" @click="reThemeColor(0)">恢复默认</el-button>
            </div>
        </div>
    </div>
</div>

<div class="set-plane">
    <div class="set-title">
        热点颜色：
    </div>
    <div class="set-object">
        <div class="set-plane">
            <el-color-picker v-model="set.theme.themeHoverColor"></el-color-picker>
            <div style="max-width: 200px;margin-left: 10px;margin-right: 10px">
                <el-input v-model="set.theme.themeHoverColor" placeholder="" size="small"></el-input>
            </div>
            <div>
                <el-button type="primary" size="small" @click="reThemeColor(2)">恢复默认</el-button>
            </div>
        </div>
    </div>
</div>

<div class="set-plane">
    <div class="set-title">
    </div>
    <div class="set-object">
        链接，按钮等鼠标放上去显示的颜色
    </div>
</div>
<div class="set-plane">
    <div class="set-title">
        侧边栏位置
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.theme.sidebar_position"
                :active-value="1"
                :inactive-value="0"
                active-text="右边"
                inactive-text="左边">
        </el-switch>
    </div>
</div>

<div class="set-plane">
    <div class="set-title">
        文字选中颜色：
    </div>
    <div class="set-object">
        <div class="set-plane">
            <el-color-picker v-model="set.theme.fontSelectedColor"></el-color-picker>
            <div style="max-width: 200px;margin-left: 10px;margin-right: 10px">
                <el-input v-model="set.theme.fontSelectedColor" placeholder="" size="small"></el-input>
            </div>
            <div>
                <el-button type="primary" size="small" @click="reThemeColor(1)">恢复默认</el-button>
            </div>

        </div>
    </div>
</div>
<h3>字体设置</h3>
<div class="set-plane">
    <div class="set-title">
        选择字体
    </div>
    <div class="set-object">
        <el-radio v-model="set.theme.font" label="no">默认</el-radio>
        <el-radio v-model="set.theme.font" label="ceym">仓耳与墨</el-radio>
        <el-radio v-model="set.theme.font" label="zkklt">站酷快乐体</el-radio>

    </div>
</div>
<div class="set-plane">
    <div class="set-title">
    </div>
    <div class="set-object">
        字体CDN来自jsdelivr，不同的字体加载速度不一样
    </div>
</div>
<h3>背景图片设置</h3>
<div class="set-plane">
    <div class="set-title">
        背景图片
    </div>
    <div class="set-object">
        <el-input placeholder="" v-model="set.theme.bagimg" size="small">
            <el-button size="mini" slot="append" icon="el-icon-picture"
                       @click="selectImg('set.theme.bagimg')">上传
            </el-button>
        </el-input>
    </div>
</div>


<div class="set-plane">
    <div class="set-title">
        背景图片显示方式
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.theme.bagimg_showtype"
                :active-value="1"
                :inactive-value="0"
                active-text="全屏"
                inactive-text="平铺"
        >
        </el-switch>
    </div>
</div>
<div class="set-plane">
    <div class="set-title">
    </div>
    <div class="set-object">
        建议选择小图片，加载比较迅速，推荐背景图片下载网站：<a href="https://www.toptal.com/designers/subtlepatterns/" target="_blank">点击进入</a>
    </div>
</div>


<h3>首页文章列表外观</h3>
<div class="set-plane">
    <div class="set-title">
        最新发布文章图标提示
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.theme.postlist_newnote"
                :active-value="1"
                :inactive-value="0"
        >
        </el-switch>
    </div>
</div>
<h3>文章页面内容外观</h3>

<div class="set-plane">
    <div class="set-title">
        底部显示上一篇下一篇面板
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.theme.postcontent.turn_page_plane"
                :active-value="1"
                :inactive-value="0"
        >
        </el-switch>
    </div>
</div>

<h3>侧边栏</h3>

<div class="set-plane">
    <div class="set-title">
        关闭首页侧边栏
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.theme.sidebar.index"
                :active-value="1"
                :inactive-value="0"
        >
        </el-switch>
    </div>
</div>
<div class="set-plane">
    <div class="set-title">
        关闭搜索，分类标签侧边栏
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.theme.sidebar.other"
                :active-value="1"
                :inactive-value="0"
        >
        </el-switch>
    </div>
</div>
<div class="set-plane">
    <div class="set-title">
        关闭内页侧边栏
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.theme.sidebar.post"
                :active-value="1"
                :inactive-value="0"
        >
        </el-switch>
    </div>
</div>

<div class="set-plane">
    <div class="set-title">
    </div>
    <div class="set-object">
       本设置功能比文章设置中关闭侧边栏的权重高
    </div>
</div>

<h3>文章设置</h3>

<div class="set-plane">
    <div class="set-title">
        开启面包屑导航
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.theme.crumbs"
                :active-value="1"
                :inactive-value="0"
        >
        </el-switch>
    </div>
</div>
<h3>Next主题风格配置</h3>

<div class="set-plane">
    <div class="set-title">
        首页横幅显示
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.next.NEXT_HOME_BANNER"
                :active-value="true"
                :inactive-value="false"
        >
        </el-switch>
    </div>
</div>

<div class="set-plane">
    <div class="set-title">
        导航栏类型
    </div>
    <div class="set-object">
        <el-select v-model="set.next.NEXT_NAV_TYPE" placeholder="请选择">
            <el-option label="普通" value="normal"></el-option>
            <el-option label="固定顶部" value="fixed"></el-option>
            <el-option label="自动收起" value="autoCollapse"></el-option>
        </el-select>
    </div>
</div>

<div class="set-plane">
    <div class="set-title">
        文章列表显示封面图
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.next.NEXT_POST_LIST_COVER"
                :active-value="true"
                :inactive-value="false"
        >
        </el-switch>
    </div>
</div>

<div class="set-plane">
    <div class="set-title">
        显示文章预览
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.next.NEXT_POST_LIST_PREVIEW"
                :active-value="true"
                :inactive-value="false"
        >
        </el-switch>
    </div>
</div>

<div class="set-plane">
    <div class="set-title">
        右侧边栏
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.next.NEXT_RIGHT_BAR"
                :active-value="true"
                :inactive-value="false"
        >
        </el-switch>
    </div>
</div>

<div class="set-plane">
    <div class="set-title">
        右侧栏最新文章
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.next.NEXT_RIGHT_LATEST_POSTS"
                :active-value="true"
                :inactive-value="false"
        >
        </el-switch>
    </div>
</div>

<div class="set-plane">
    <div class="set-title">
        显示回到顶部
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.next.NEXT_WIDGET_TO_TOP"
                :active-value="true"
                :inactive-value="false"
        >
        </el-switch>
    </div>
</div>

<div class="set-plane">
    <div class="set-title">
        文章版权声明
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.next.NEXT_ARTICLE_COPYRIGHT"
                :active-value="true"
                :inactive-value="false"
        >
        </el-switch>
    </div>
</div>

<div class="set-plane">
    <div class="set-title">
        相关文章推荐
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.next.NEXT_ARTICLE_RELATE_POSTS"
                :active-value="true"
                :inactive-value="false"
        >
        </el-switch>
    </div>
</div>

<h3>原有主题配置</h3>
<div class="set-plane">
    <div class="set-title">
        主题颜色：
    </div>
    <div class="set-object">
        <div class="set-plane">
            <el-color-picker v-model="set.theme.themeColor"></el-color-picker>
            <div style="max-width: 200px;margin-left: 10px;margin-right: 10px">
                <el-input v-model="set.theme.themeColor" placeholder="" size="small"></el-input>
            </div>
            <div>
                <el-button type="primary" size="small" @click="reThemeColor(0)">恢复默认</el-button>
            </div>
        </div>
    </div>
</div>

<div class="set-plane">
    <div class="set-title">
        热点颜色：
    </div>
    <div class="set-object">
        <div class="set-plane">
            <el-color-picker v-model="set.theme.themeHoverColor"></el-color-picker>
            <div style="max-width: 200px;margin-left: 10px;margin-right: 10px">
                <el-input v-model="set.theme.themeHoverColor" placeholder="" size="small"></el-input>
            </div>
            <div>
                <el-button type="primary" size="small" @click="reThemeColor(2)">恢复默认</el-button>
            </div>
        </div>
    </div>
</div>

<div class="set-plane">
    <div class="set-title">
    </div>
    <div class="set-object">
        链接，按钮等鼠标放上去显示的颜色
    </div>
</div>
<div class="set-plane">
    <div class="set-title">
        侧边栏位置
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.theme.sidebar_position"
                :active-value="1"
                :inactive-value="0"
                active-text="右边"
                inactive-text="左边">
        </el-switch>
    </div>
</div>

<div class="set-plane">
    <div class="set-title">
        文字选中颜色：
    </div>
    <div class="set-object">
        <div class="set-plane">
            <el-color-picker v-model="set.theme.fontSelectedColor"></el-color-picker>
            <div style="max-width: 200px;margin-left: 10px;margin-right: 10px">
                <el-input v-model="set.theme.fontSelectedColor" placeholder="" size="small"></el-input>
            </div>
            <div>
                <el-button type="primary" size="small" @click="reThemeColor(1)">恢复默认</el-button>
            </div>

        </div>
    </div>
</div>
<h3>字体设置</h3>
<div class="set-plane">
    <div class="set-title">
        选择字体
    </div>
    <div class="set-object">
        <el-radio v-model="set.theme.font" label="no">默认</el-radio>
        <el-radio v-model="set.theme.font" label="ceym">仓耳与墨</el-radio>
        <el-radio v-model="set.theme.font" label="zkklt">站酷快乐体</el-radio>

    </div>
</div>
<div class="set-plane">
    <div class="set-title">
    </div>
    <div class="set-object">
        字体CDN来自jsdelivr，不同的字体加载速度不一样
    </div>
</div>
<h3>背景图片设置</h3>
<div class="set-plane">
    <div class="set-title">
        背景图片
    </div>
    <div class="set-object">
        <el-input placeholder="" v-model="set.theme.bagimg" size="small">
            <el-button size="mini" slot="append" icon="el-icon-picture"
                       @click="selectImg('set.theme.bagimg')">上传
            </el-button>
        </el-input>
    </div>
</div>


<div class="set-plane">
    <div class="set-title">
        背景图片显示方式
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.theme.bagimg_showtype"
                :active-value="1"
                :inactive-value="0"
                active-text="全屏"
                inactive-text="平铺"
        >
        </el-switch>
    </div>
</div>
<div class="set-plane">
    <div class="set-title">
    </div>
    <div class="set-object">
        建议选择小图片，加载比较迅速，推荐背景图片下载网站：<a href="https://www.toptal.com/designers/subtlepatterns/" target="_blank">点击进入</a>
    </div>
</div>


<h3>首页文章列表外观</h3>
<div class="set-plane">
    <div class="set-title">
        最新发布文章图标提示
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.theme.postlist_newnote"
                :active-value="1"
                :inactive-value="0"
        >
        </el-switch>
    </div>
</div>
<h3>文章页面内容外观</h3>

<div class="set-plane">
    <div class="set-title">
        底部显示上一篇下一篇面板
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.theme.postcontent.turn_page_plane"
                :active-value="1"
                :inactive-value="0"
        >
        </el-switch>
    </div>
</div>

<h3>侧边栏</h3>

<div class="set-plane">
    <div class="set-title">
        关闭首页侧边栏
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.theme.sidebar.index"
                :active-value="1"
                :inactive-value="0"
        >
        </el-switch>
    </div>
</div>
<div class="set-plane">
    <div class="set-title">
        关闭搜索，分类标签侧边栏
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.theme.sidebar.other"
                :active-value="1"
                :inactive-value="0"
        >
        </el-switch>
    </div>
</div>
<div class="set-plane">
    <div class="set-title">
        关闭内页侧边栏
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.theme.sidebar.post"
                :active-value="1"
                :inactive-value="0"
        >
        </el-switch>
    </div>
</div>

<div class="set-plane">
    <div class="set-title">
    </div>
    <div class="set-object">
       本设置功能比文章设置中关闭侧边栏的权重高
    </div>
</div>

<h3>文章设置</h3>

<div class="set-plane">
    <div class="set-title">
        开启面包屑导航
    </div>
    <div class="set-object">
        <el-switch
                v-model="set.theme.crumbs"
                :active-value="1"
                :inactive-value="0"
        >
        </el-switch>
    </div>
</div>
