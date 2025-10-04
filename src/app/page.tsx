import Link from "next/link";
import { ArrowRight, CalendarDays, GraduationCap, Layers, Sparkles, Star, Users } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const highlights = [
  {
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    title: "全链路职业课程",
    description: "覆盖AI、数据分析、产品经理、项目管理等热门岗位技能，帮助你快速匹配行业需求。",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "导师一对一辅导",
    description: "百余位来自头部企业的行业导师提供学习规划、作业批改与面试辅导。",
  },
  {
    icon: <CalendarDays className="h-6 w-6 text-primary" />,
    title: "灵活的混合式教学",
    description: "线上直播 + 录播 + 线下工作坊，兼顾时间安排与沉浸式体验。",
  },
];

const programs = [
  {
    name: "数据分析旗舰班",
    description: "掌握Excel、SQL、Python与BI报表工具，实战企业真实项目。",
    duration: "12 周进阶计划",
    outcome: "企业项目作品集 + 专属就业辅导",
  },
  {
    name: "生成式AI产品设计营",
    description: "学习Prompt工程、AI产品设计方法论与AI应用落地案例。",
    duration: "8 周实战营",
    outcome: "AI产品落地方案 + 团队路演",
  },
  {
    name: "高阶项目管理训练营",
    description: "覆盖敏捷、OKR、风险控制与跨部门协作，助力管理能力跃迁。",
    duration: "10 周系统课",
    outcome: "PMP考试辅导 + 企业导师实战陪跑",
  },
];

const faqs = [
  {
    question: "课程是否适合零基础学员?",
    answer:
      "我们为零基础学员提供预科模块与学习路径建议，并在正式课程中穿插练习与导师答疑，确保稳步提升。",
  },
  {
    question: "如何安排学习时间?",
    answer:
      "每周约 6-8 小时学习任务，支持移动端与录播回放；线下活动将提前两周通知，便于合理安排。",
  },
  {
    question: "完成课程后能获得哪些支持?",
    answer:
      "毕业学员可加入启航校友社群，享受就业内推、简历优化、面试陪练以及行业交流活动。",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" aria-hidden />
            <span className="text-lg font-semibold tracking-tight">启航教育学院</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="#programs" className="transition-colors hover:text-primary">
              课程体系
            </Link>
            <Link href="#advantages" className="transition-colors hover:text-primary">
              教学特色
            </Link>
            <Link href="#testimonials" className="transition-colors hover:text-primary">
              学员评价
            </Link>
            <Link href="#contact" className="transition-colors hover:text-primary">
              联系我们
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">预约咨询</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-white to-slate-50">
          <div className="container flex flex-col-reverse items-center gap-12 py-24 md:flex-row">
            <div className="mx-auto max-w-2xl space-y-6 text-center md:text-left">
              <Badge className="rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                面向未来的职业能力加速器
              </Badge>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                以实战驱动的职业培训，让你在数字时代脱颖而出
              </h1>
              <p className="text-lg text-muted-foreground">
                启航教育学院整合行业导师资源，提供从技能学习、项目实战到就业辅导的一站式成长体验，帮助你在 3-6 个月内完成职业跃迁。
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
                <Button asChild size="lg" className="gap-2">
                  <Link href="#contact">
                    预约职业规划 <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#programs">查看课程安排</Link>
                </Button>
              </div>
              <div className="grid gap-6 pt-8 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.title} className="flex flex-col items-center gap-2 rounded-xl border border-border bg-white/60 p-4 text-center shadow-sm">
                    {item.icon}
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative max-w-sm rounded-3xl border border-border bg-white/80 p-6 shadow-xl ring-1 ring-primary/10">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">三个月学习成果</p>
                <Layers className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <div className="space-y-4 pt-6">
                <div className="rounded-lg border border-dashed border-primary/40 p-4">
                  <p className="text-sm font-semibold text-primary">阶段一 · 技能打基础</p>
                  <p className="mt-2 text-xs text-muted-foreground">掌握核心工具，完成课堂练习与导师点评。</p>
                </div>
                <div className="rounded-lg border border-dashed border-primary/40 p-4">
                  <p className="text-sm font-semibold text-primary">阶段二 · 项目深练习</p>
                  <p className="mt-2 text-xs text-muted-foreground">真实业务项目拆解，小组协作交付成果。</p>
                </div>
                <div className="rounded-lg border border-dashed border-primary/40 p-4">
                  <p className="text-sm font-semibold text-primary">阶段三 · 职业冲刺</p>
                  <p className="mt-2 text-xs text-muted-foreground">职业发展顾问一对一辅导，模拟面试与内推支持。</p>
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4">
                <p className="text-xs font-medium text-muted-foreground">超过 9,800 名学员成功完成转型</p>
                <p className="mt-1 text-2xl font-bold text-foreground">就业薪资平均提升 45%</p>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="bg-white py-24">
          <div className="container space-y-10">
            <div className="flex flex-col items-center text-center">
              <Badge variant="outline" className="rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                Course Programs
              </Badge>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                行业专家共创的实战课程，覆盖数字化时代的核心竞争力
              </h2>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground">
                每门课程都配备岗位胜任力模型、行业案例与结业路演，让学习成果可视化、可复用。
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {programs.map((program) => (
                <Card key={program.name} className="flex flex-col justify-between border-border/80 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-foreground">{program.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg bg-muted/40 p-4">
                      <p className="text-xs font-semibold text-muted-foreground">课程节奏</p>
                      <p className="text-sm font-medium text-foreground">{program.duration}</p>
                    </div>
                    <div className="rounded-lg bg-muted/40 p-4">
                      <p className="text-xs font-semibold text-muted-foreground">结业成果</p>
                      <p className="text-sm font-medium text-foreground">{program.outcome}</p>
                    </div>
                    <Button asChild className="w-full">
                      <Link href="#contact">申请试听</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="advantages" className="bg-slate-50 py-24">
          <div className="container grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                教学设计以结果为导向，助你把知识真正转化为职业优势
              </h2>
              <p className="text-base text-muted-foreground">
                启航教育学院的课程团队来自腾讯、字节跳动、麦肯锡等一线企业。我们将真实的业务场景融入课堂，并提供系统的学习支持，让每位学员都能看见自己的成长曲线。
              </p>
              <ul className="grid gap-4 sm:grid-cols-2">
                <li className="rounded-xl border border-border bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" aria-hidden />
                    <p className="text-sm font-semibold text-foreground">个性化学习路径</p>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    学习顾问根据行业背景与发展目标制定学习路线，重要节点配备阶段复盘。
                  </p>
                </li>
                <li className="rounded-xl border border-border bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" aria-hidden />
                    <p className="text-sm font-semibold text-foreground">小班制社群学习</p>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    小组研讨、挑战赛与行业导师办公时为你提供高频互动与答疑机会。
                  </p>
                </li>
                <li className="rounded-xl border border-border bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" aria-hidden />
                    <p className="text-sm font-semibold text-foreground">项目驱动评估体系</p>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    用真实商业指标衡量学习成果，阶段性作品由企业导师给出详尽反馈。
                  </p>
                </li>
                <li className="rounded-xl border border-border bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" aria-hidden />
                    <p className="text-sm font-semibold text-foreground">终身学习生态</p>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    毕业后继续获得最新行业案例、公开课与校友导师资源，持续进阶。
                  </p>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-white p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-muted-foreground">学习者数据看得见</p>
                  <Badge className="bg-primary/10 text-primary">2024 年度</Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-xl bg-muted/60 p-4">
                    <p className="text-sm font-medium text-muted-foreground">学员满意度</p>
                    <p className="text-2xl font-bold text-foreground">4.8 / 5.0</p>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-muted/60 p-4">
                    <p className="text-sm font-medium text-muted-foreground">项目交付率</p>
                    <p className="text-2xl font-bold text-foreground">96%</p>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-muted/60 p-4">
                    <p className="text-sm font-medium text-muted-foreground">平均薪资涨幅</p>
                    <p className="text-2xl font-bold text-foreground">45%</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-primary/10 p-4 text-sm text-primary">
                  与启航教育一起，让成长拥有可量化的成果与可持续的动力。
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-white py-24">
          <div className="container space-y-12">
            <div className="text-center">
              <Badge variant="outline" className="rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                Student Stories
              </Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                看看学员们如何评价启航教育学院
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                他们来自互联网、咨询、制造业与高校，将所学应用到真实工作中并获得突破。
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-border/80 shadow-sm">
                <CardContent className="space-y-4 p-6">
                  <p className="text-sm text-muted-foreground">
                    “导师团队会带着我们拆解企业真实数据报表，还帮我完善了作品集。三个月后我成功拿到了互联网大厂的商业分析师 offer。”
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-foreground">王晨 · 商业分析师</p>
                    <p className="text-xs text-muted-foreground">原世界 500 强运营主管</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border/80 shadow-sm">
                <CardContent className="space-y-4 p-6">
                  <p className="text-sm text-muted-foreground">
                    “课程安排很系统，每周的学习目标都很清晰。职业顾问帮助我梳理简历亮点，最终拿到两家 AI 创业公司的产品经理岗位。”
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-foreground">刘畅 · AI 产品经理</p>
                    <p className="text-xs text-muted-foreground">原高校辅导员</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border/80 shadow-sm">
                <CardContent className="space-y-4 p-6">
                  <p className="text-sm text-muted-foreground">
                    “线下工作坊让我和同组伙伴一起打磨方案，还接触到很多来自一线公司的导师，收获了宝贵的人脉与视角。”
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-foreground">陈一航 · 项目管理负责人</p>
                    <p className="text-xs text-muted-foreground">原制造业工艺工程师</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-slate-50 py-20">
          <div className="container grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <Badge variant="outline" className="rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                FAQs
              </Badge>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                常见问题解答，助你快速了解启航教育学院
              </h2>
              <p className="text-base text-muted-foreground">
                如果你仍有疑问，欢迎填写下方表单或添加课程顾问企业微信，我们会为你提供个性化答复。
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`} className="rounded-xl border border-border bg-white">
                  <AccordionTrigger className="px-4 text-left text-sm font-semibold text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contact" className="bg-slate-900 py-24 text-white">
          <div className="container grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <Badge variant="outline" className="rounded-full border-white/30 px-4 py-1 text-xs uppercase tracking-wider text-white">
                Get in Touch
              </Badge>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                与课程顾问预约深度咨询，量身定制你的成长计划
              </h2>
              <p className="text-base text-white/70">
                留下你的联系方式，我们将在 24 小时内安排课程顾问与你沟通，提供课程试听、能力评估与职业发展建议。
              </p>
              <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-2">
                <div className="rounded-lg border border-white/20 bg-white/5 p-4">
                  <p className="font-semibold text-white">咨询热线</p>
                  <p className="mt-1">400-820-2025</p>
                </div>
                <div className="rounded-lg border border-white/20 bg-white/5 p-4">
                  <p className="font-semibold text-white">企业合作</p>
                  <p className="mt-1">partnership@qihangedu.com</p>
                </div>
                <div className="rounded-lg border border-white/20 bg-white/5 p-4">
                  <p className="font-semibold text-white">校区地址</p>
                  <p className="mt-1">上海市杨浦区长阳路 1687 号</p>
                </div>
                <div className="rounded-lg border border-white/20 bg-white/5 p-4">
                  <p className="font-semibold text-white">课程时间</p>
                  <p className="mt-1">工作日 19:30-21:30 | 周末全天</p>
                </div>
              </div>
            </div>
            <Card className="border-white/20 bg-white/10 text-foreground backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-white">获取课程手册</CardTitle>
                <CardDescription className="text-white/70">
                  填写表单获取详细课程大纲、导师介绍与优惠信息。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white" htmlFor="name">
                      姓名
                    </label>
                    <Input id="name" placeholder="请输入姓名" className="bg-white/90 text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white" htmlFor="phone">
                      手机号码
                    </label>
                    <Input id="phone" placeholder="用于安排课程顾问联系" className="bg-white/90 text-foreground" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white" htmlFor="interests">
                      感兴趣的课程方向
                    </label>
                    <Textarea id="interests" placeholder="例如：AI 产品 / 数据分析 / 项目管理" className="min-h-[100px] bg-white/90 text-foreground" />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground">
                    提交信息
                  </Button>
                  <p className="text-xs text-white/60">
                    提交即代表你同意我们在 24 小时内通过电话或邮件与您联系，信息仅用于课程咨询。
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-white py-8">
        <div className="container flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} 启航教育学院 · 保留所有权利</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-primary">
              隐私政策
            </Link>
            <Link href="#" className="hover:text-primary">
              服务条款
            </Link>
            <Link href="mailto:hello@qihangedu.com" className="hover:text-primary">
              hello@qihangedu.com
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
