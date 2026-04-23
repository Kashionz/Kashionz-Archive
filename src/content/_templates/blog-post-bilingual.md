---
<%*
const lang = await tp.system.suggester(["中文", "English"], ["中文", "English"])
const description =
  lang === "中文"
    ? "Markdown 是一種輕量級的標記語言。"
    : "Markdown is a lightweight markup language."
const sectionTitle = lang === "中文" ? "基本語法" : "Basic Syntax"
const bodyText = lang === "中文" ? "在這裡撰寫文章內容。" : "Write your article content here."

tR += `title: "${tp.file.title}"
publishDate: "${tp.date.now('YYYY-MM-DD HH:mm:ss')}"
description: "${description}"
tags:
  - Markdown
language: "${lang}"
draft: true
---

## ${sectionTitle}

${bodyText}
`
%>
