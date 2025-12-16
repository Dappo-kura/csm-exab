import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PWARegister } from "@/components";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "Pocket Scrum Master",
  description:
    "Pocket Scrum Master - PSM I 模擬試験アプリ",
  keywords: ["PSM", "スクラムマスター", "模擬試験", "Scrum", "アジャイル"],
  authors: [{ name: "PSM Exam App" }],
  manifest: "/csm-exab/manifest.json",
  icons: {
    icon: "/csm-exab/icon-192.png",
    apple: "/csm-exab/icon-192.png",
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
    <html lang="ja" className="dark">
      <head>
        {/* iOS用PWA設定 */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="PSM Exam" />
        <link rel="apple-touch-icon" href="/csm-exab/icon-192.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/csm-exab/icon-192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/csm-exab/icon-512.png" />
      </head>
      <body className="antialiased min-h-screen">
        <ThemeProvider>
          <LanguageProvider>
            <PWARegister />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
