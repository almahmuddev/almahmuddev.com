const siteUrl = 'https://almahmuddev.com'

const routes = [
  '',
  '/about',
  '/service',
  '/service-details',
  '/blog',
  '/blog-col-4',
  '/blog-details',
  '/project',
  '/project-details',
  '/contact',
]

export default function sitemap() {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
