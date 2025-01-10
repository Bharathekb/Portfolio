const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

// Define your site's routes
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/blog", changefreq: "weekly", priority: 0.8 },
];

// Create a sitemap stream
const sitemapStream = new SitemapStream({
  hostname: "https://bharathportfolio.rf.gd",
});

// Write the sitemap to a file
const writeStream = createWriteStream("./public/sitemap.xml");

sitemapStream.pipe(writeStream);

// Add each route to the sitemap
links.forEach((link) => sitemapStream.write(link));

// End the stream
sitemapStream.end();

// Log a success message
writeStream.on("finish", () => {
  console.log(
    "Sitemap successfully generated and saved to /public/sitemap.xml"
  );
});
