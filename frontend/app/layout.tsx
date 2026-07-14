import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "企业管理 AI 助手平台",
  description: "Enterprise management AI assistant platform",
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
