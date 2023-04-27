/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['source.unsplash.com', 'www.datocms-assets.com'],
  },
  fontFamily: {
    'sans': ['Dancing Script', 'Cardo', 'Eagle Lake', 'ui-sans-serif', 'system-ui'],
    'serif': ['Cardo', 'Dancing Script', 'Work Sans', 'Tangerine', 'Great Vibes', 'Marck Script', 'Cardo', 'serif', 'ui-serif', 'Georgia'],
    'caligraphic': ['Great Vibes']
  },
  i18n: {
    // providing the locales supported by your application
    locales: ["en", "fr"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "en",
  },
}

module.exports = nextConfig
