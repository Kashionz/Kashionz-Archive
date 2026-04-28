export const blogCategoryLabels = {
  tech: '技術相關',
  leetcode: '刷題相關',
  life: '生活相關',
  anime: '動漫相關'
} as const

export type BlogCategorySlug = keyof typeof blogCategoryLabels

export type BlogCategory = {
  slug: BlogCategorySlug
  label: (typeof blogCategoryLabels)[BlogCategorySlug]
}

export const blogCategorySlugs = Object.keys(blogCategoryLabels) as BlogCategorySlug[]

export const blogCategories: BlogCategory[] = blogCategorySlugs.map((slug) => ({
  slug,
  label: blogCategoryLabels[slug]
}))

export function getBlogCategory(slug: string) {
  return blogCategories.find((category) => category.slug === slug)
}

export function getBlogCategoryLabel(slug: string) {
  return getBlogCategory(slug)?.label ?? slug
}

export function getBlogCategoryCount(posts: Array<{ data: { category: string } }>, slug: string) {
  return posts.filter((post) => post.data.category === slug).length
}
