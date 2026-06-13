export default function manifest() {
  return {
    name: 'Al Mahmud — Portfolio',
    short_name: 'Al Mahmud',
    description:
      'Portfolio of Al Mahmud, Front-End Developer and WordPress Expert.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/assets/images/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
