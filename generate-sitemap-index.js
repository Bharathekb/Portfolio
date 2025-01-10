const { createWriteStream } = require("fs");

const combinedSitemapPath = "./public/sitemap_index.xml";

// Sitemaps to include
const sitemaps = [
  "https://bharathportfolio.rf.gd/react-sitemap.xml", // React sitemap
  "https://bharathportfolio.rf.gd/blog/sitemap_index.xml", // WordPress blog sitemap
];

(async () => {
  const writeStream = createWriteStream(combinedSitemapPath);
  writeStream.write(`<?xml version="1.0" encoding="UTF-8"?>\n`);
  writeStream.write(
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`
  );

  sitemaps.forEach((sitemap) => {
    writeStream.write(`  <sitemap>\n`);
    writeStream.write(`    <loc>${sitemap}</loc>\n`);
    writeStream.write(`  </sitemap>\n`);
  });

  writeStream.write(`</sitemapindex>\n`);
  writeStream.end();

  console.log(`Combined sitemap_index.xml generated at ${combinedSitemapPath}`);
})();
