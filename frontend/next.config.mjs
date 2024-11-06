/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
      },
    ],
    unoptimized: true //เมื่อไปดึงข้อมูลรูปภาพข้างนอกมาให้ปรับขนาดตามเหมาะสม
  },
};


export default nextConfig;
