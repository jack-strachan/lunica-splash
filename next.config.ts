import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/payments-portal",
        destination: "/invoice-upload",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
