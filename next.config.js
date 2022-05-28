/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withSvgr = require("next-svgr");
 
module.exports = withSvgr({
  nextConfig // your config for other plugins or the general next.js here...
});

// module.exports = nextConfig
