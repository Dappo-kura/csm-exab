import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PWARegister } from "@/components";

export const metadata: Metadata = {
  title: "PSM I 模擬試験 | Professional Scrum Master™ I",
  description:
    "Professional Scrum Master™ I (PSM I) の模擬試験アプリです。60分80問の本番形式で実力をチェックしましょう。",
  keywords: ["PSM", "スクラムマスター", "模擬試験", "Scrum", "アジャイル"],
  authors: [{ name: "PSM Exam App" }],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "PSM Exam",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0f172a",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* iOS用PWA設定 */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="PSM Exam" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className="antialiased min-h-screen bg-slate-900">
        <PWARegister />
        {children}
      </body>
    </html>
  );
}
