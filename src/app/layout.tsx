import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sain Studios | Premium Video Content Creation",
    template: "%s | Sain Studios",
  },
  description:
    "Professional video editing and content creation for creators. Gaming, Vlogs, Documentaries, and more. Transform your content with Sain Studios.",
  keywords: [
    "video editing",
    "content creation",
    "youtube editor",
    "tiktok editor",
    "shorts editing",
    "gaming content",
    "vlog editing",
  ],
  authors: [{ name: "Sain Studios" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sain Studios",
    title: "Sain Studios | Premium Video Content Creation",
    description:
      "Professional video editing and content creation for creators. Transform your content with Sain Studios.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
