export default function sitemap() {
  const baseUrl = "https://iic.bitsindri.ac.in";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2025-12-20"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2025-12-20"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/BITS_TEXMiN`,
      lastModified: new Date("2025-12-20"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/initiatives`,
      lastModified: new Date("2025-12-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/incubation`,
      lastModified: new Date("2025-12-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date("2025-12-20"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date("2025-12-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2025-12-20"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
