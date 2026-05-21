import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://aktywnekobiety.pl',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://aktywnekobiety.pl/o-projekcie',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://aktywnekobiety.pl/aktualnosci',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
        url: 'https://aktywnekobiety.pl/rekrutacja',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: 'https://aktywnekobiety.pl/kontakt',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
  ]
}