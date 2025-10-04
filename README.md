# 启航教育学院官网

使用 Next.js、Tailwind CSS 与 shadcn/ui 构建的教育培训机构落地页，并针对 Cloudflare Workers/Pages 部署进行了配置。

## 技术栈

- [Next.js 15](https://nextjs.org/) App Router
- [Tailwind CSS 3](https://tailwindcss.com/)
- [shadcn/ui 组件库](https://ui.shadcn.com/)
- [lucide-react](https://lucide.dev/) 图标
- [@cloudflare/next-on-pages](https://github.com/cloudflare/next-on-pages) Cloudflare Pages 适配器

## 开发与调试

```bash
npm install
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 进行预览。

运行 ESLint：

```bash
npm run lint
```

## 构建与部署

### 本地构建

```bash
npm run build
```

构建产物会输出到 `.vercel/output` 目录。

### Cloudflare Pages

项目已包含 `wrangler.toml` 与 `next-on-pages` 命令，可按照以下流程部署：

1. 在 Cloudflare Pages 面板中创建项目并关联仓库。
2. 将 **Build command** 设置为 `npm run cf:deploy`。
3. 将 **Build output directory** 设置为 `.vercel/output/static`。
4. 保存后即可触发构建并自动生成 Workers Functions。

如需本地预览 Cloudflare Pages 运行时，可执行：

```bash
npm run cf:preview
```

然后使用 `wrangler pages dev .vercel/output/static --watch` 进行进一步调试。

## 目录结构概览

```
src/
  app/
    layout.tsx     # 全局布局与 Metadata 配置
    page.tsx       # 落地页主体
  components/ui/   # shadcn/ui 组件
  lib/utils.ts     # 样式工具函数
```

## 自定义

- Tailwind 配置位于 `tailwind.config.ts`，可按需调整主题色与 Token。
- shadcn/ui 组件可通过 `npx shadcn@latest add <component>` 命令继续扩展。
- `wrangler.toml` 中可设置 Cloudflare Pages 的环境变量。

