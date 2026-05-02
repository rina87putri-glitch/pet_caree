import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "爪爪星球 | 宠物用品与护理",
  description: "爪爪星球提供宠物主粮、洗护用品、玩具配件和到店护理服务。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
