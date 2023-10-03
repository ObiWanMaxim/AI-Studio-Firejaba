/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/attachments/:path*",
        destination: "https://cdn.discordapp.com/attachments/:path*",
      },
      {
        source: "/ephemeral-attachments/:path*",
        destination: "https://cdn.discordapp.com/ephemeral-attachments/:path*",
      },
    ];
  },
};

module.exports = nextConfig

module.exports = {
  images: {
    domains: [
      "res.cloudinary.com",
      "images.unsplash.com",
      "unsplash.com",
      "api.unsplash.com",
      "cdn.discordapp.com",
      "ai-studio.wivo.co.il",
      "cdn.discordapp.com"
    ],
  },
};