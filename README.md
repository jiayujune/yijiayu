# 个人网站项目

这是一个现代化的个人网站模板，参考了学术风格的排版设计。

## 项目结构

```
JIAYU YI_WEB/
├── index.html           # 主页文件
├── assets/
│   ├── css/
│   │   └── style.css    # 样式表
│   ├── js/
│   │   └── script.js    # JavaScript脚本
│   └── img/             # 图片文件夹
└── README.md            # 项目说明文件
```

## 功能特性

✨ **现代化设计**
- 响应式布局，支持桌面、平板和移动设备
- 流畅的动画和过渡效果
- 清晰的视觉层次结构

📱 **主要模块**
- **主页** - 个人介绍和首屏展示
- **关于** - 详细的个人信息和技能
- **项目** - 作品集展示（网格布局）
- **博客** - 文章列表
- **联系** - 社交媒体和联系方式
- **侧边栏** - 快速导航和个人信息卡片

🎨 **设计特点**
- 渐变色主题（紫蓝到粉红）
- 悬停效果和交互动画
- 平滑滚动导航
- 阴影和深度设计

## 自定义指南

### 1. 个人信息修改

打开 `index.html`，修改以下内容：

```html
<!-- 页面标题 -->
<title>贾钰怡 - 个人网站</title>

<!-- 名字 -->
<h1>贾钰怡</h1>

<!-- 职位和简介 -->
<p class="subtitle">Web开发者 | 设计师 | 创意者</p>

<!-- 联系方式 -->
<a href="mailto:your.email@example.com">Email</a>
<a href="https://linkedin.com">LinkedIn</a>
```

### 2. 修改颜色主题

编辑 `assets/css/style.css` 中的颜色变量：

```css
:root {
    --primary-color: #667eea;      /* 主颜色 */
    --secondary-color: #764ba2;    /* 次要颜色 */
    --accent-color: #f5576c;       /* 强调颜色 */
    --text-dark: #2d3748;          /* 深色文字 */
    --text-light: #718096;         /* 浅色文字 */
    --bg-light: #f7fafc;           /* 浅色背景 */
}
```

### 3. 添加项目

在 `index.html` 中的项目网格部分添加新的项目卡片：

```html
<div class="project-card">
    <div class="project-image" style="background: linear-gradient(135deg, #your-color, #your-color);"></div>
    <h3>项目名称</h3>
    <p>项目描述</p>
    <div class="project-tags">
        <span>技术1</span>
        <span>技术2</span>
    </div>
    <a href="#" class="project-link">查看详情 →</a>
</div>
```

### 4. 添加博客文章

在 `index.html` 的博客部分添加：

```html
<article class="blog-post">
    <h3><a href="#">文章标题</a></h3>
    <span class="post-date">发布日期</span>
    <p>文章摘要</p>
</article>
```

### 5. 更改头像

修改侧边栏中的头像部分（使用你的名字的首字或图片）：

```html
<div class="avatar">
    <div class="avatar-placeholder">贾</div>
</div>
```

或者替换为图片：

```html
<div class="avatar">
    <img src="assets/img/avatar.jpg" alt="头像">
</div>
```

## 如何使用

### 本地预览

1. 下载项目文件
2. 在浏览器中打开 `index.html` 文件
3. 或者使用本地服务器：

```bash
# 如果你有Python installed
python -m http.server 8000

# 或使用 Node.js http-server
npx http-server
```

然后在浏览器中访问 `http://localhost:8000`

### 部署到GitHub Pages

1. 创建一个GitHub仓库（命名为 `yourusername.github.io`）
2. 将所有文件推送到仓库
3. 访问 `https://yourusername.github.io`

### 部署到其他平台

- **Netlify**：直接拖拽文件夹到Netlify
- **Vercel**：连接GitHub仓库自动部署
- **Gitee**：类似GitHub Pages的服务
- **传统主机**：使用FTP上传文件

## 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript** - 交互功能
- **无需框架** - 纯原生代码，易于修改

## 浏览器兼容性

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 响应式断点

- 桌面电脑：1200px 以上
- 平板设备：768px - 1199px
- 手机设备：480px - 767px
- 小手机：479px 以下

## 文件大小

- HTML: ~10KB
- CSS: ~15KB
- JavaScript: ~3KB
- 总计：约 28KB（不含图片）

## 常见问题

**Q: 如何添加自己的项目图片？**
A: 将图片放在 `assets/img/` 文件夹中，然后在项目卡片中修改路径。

**Q: 如何改变网站的配色？**
A: 编辑 `style.css` 中的 `:root` 变量部分。

**Q: 如何添加谷歌分析？**
A: 在 `</head>` 标签前添加谷歌分析代码片段。

**Q: 网站可以做成多语言吗？**
A: 可以，可以为该站点创建多个HTML文件或使用JavaScript动态改变内容。

## 许可证

这是一个免费模板，可以自由使用和修改。

## 联系和反馈

如有问题或建议，欢迎联系！

---

祝你的个人网站建设顺利！🚀
