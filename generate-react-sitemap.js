const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const reactRoutes = [
  "/", // Home route
  "/blog",
];

(async () => {
  const sitemap = new SitemapStream({
    hostname: "https://bharathportfolio.rf.gd/",
  });
  const writeStream = createWriteStream("./public/react-sitemap.xml");
  sitemap.pipe(writeStream);

  reactRoutes.forEach((route) => {
    sitemap.write({ url: route, changefreq: "daily", priority: 0.8 });
  });

  sitemap.end();
  await streamToPromise(sitemap);
  console.log("React sitemap generated at public/react-sitemap.xml");
})();
