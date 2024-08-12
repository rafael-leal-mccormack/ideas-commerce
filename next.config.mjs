import createNextIntlPlugin from "next-intl/plugin";
import MDX from "@next/mdx";

const withNextIntl = createNextIntlPlugin();
const withMDX = MDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "files.stripe.com" },
      { hostname: "d1wqzb5bdbcre6.cloudfront.net" },
      { hostname: "*.blob.vercel-storage.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  transpilePackages: ["next-mdx-remote", "commerce-kit"],
  experimental: {
    esmExternals: true,
    scrollRestoration: true,
    ppr: true,
    after: true,
    reactCompiler: true,
  },
  webpack: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        extensionAlias: {
          ".js": [".js", ".ts"],
          ".jsx": [".jsx", ".tsx"],
        },
      },
    };
  },
};

export default withNextIntl(withMDX(nextConfig));
