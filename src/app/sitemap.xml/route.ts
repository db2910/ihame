const BASE_URL = 'https://ihamelogistics.com';

// List all individual static service page slugs here (no dynamic [slug] pages)
const serviceSlugs = [
  'freight-forwarding',
  'customs-clearance',
  'port-logistics-support',
  'warehousing-delivery',
  'cross-border-logistics',
  'multilingual-customer-service',
  'digital-supply-chain',
];

const staticPages = [
  '', // homepage
  'about',
  'contact',
  'services',
  'track',
];

export async function GET() {
  const urls = [
    ...staticPages.map((page) => `${BASE_URL}/${page}`.replace(/\/$/, '/')), // ensure trailing slash
    ...serviceSlugs.map((slug) => `${BASE_URL}/services/${slug}/`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${url}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 