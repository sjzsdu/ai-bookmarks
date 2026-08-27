# AI Bookmarks

零成本、SEO/GEO 友好的 AI 工具导航站（中英文双语，内容独立整理，非翻译）。

## 技术栈
- **Hugo**（SSG，纯静态、零 JS 默认）— 对 SEO/GEO 友好
- **Cloudflare Pages** — 免费托管（无限带宽、自带 CDN）
- 无后端；站内搜索用 **Pagefind**（构建期生成索引）
- 内容即 Git 仓库中的 Markdown

## 多语言架构
- `content/zh/` 与 `content/en/` 两套**独立内容集**（非翻译）。
- 同一工具在两种语言下用 `translationKey` 关联，用于输出 `hreflang`，但内容各自独立撰写（不同地区关注点不同）。
- URL 结构：`/zh/...` 与 `/en/...`，根路径重定向到默认语言（中文）。

## 本地运行
```bash
hugo server
# 构建 + 搜索索引
hugo --minify && npx -y pagefind --site public
```

## 部署到 Cloudflare Pages（零成本）
1. 在 Cloudflare Pages 连接本 GitHub 仓库。
2. 构建设置：
   - 构建命令：`hugo --minify && npx -y pagefind --site public`
   - 输出目录：`public`
3. 部署后提交 sitemap 到 Google Search Console / Bing Webmaster。
（也可使用 `.github/workflows/build.yml` 在 PR 时验证构建。）

## 已包含
- 首页 / 分类页 / 工具详情页模板
- hreflang 多语言 alternates + `x-default`
- schema.org 结构化数据（WebSite/SearchAction、SoftwareApplication、BreadcrumbList）
- sitemap.xml、robots.txt、RSS
- Pagefind 站内搜索（`/zh/search/` 与 `/en/search/`）

## 范围说明
当前为**骨架**：含占位内容，不含真实工具条目、评论、用户系统或广告。正式内容进入 AI 起草 + 人工审校阶段。
