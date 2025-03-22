import "@/styles/globals.css";

import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { ClerkProvider } from "@clerk/nextjs";
import { IBM_Plex_Sans_Arabic } from "next/font/google";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";

const FONT = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MaroFlow | مجتمع المطورين العربي",
  description:
    "منصة مجتمعية تفاعلية لطرح الأسئلة والإجابة عليها في مجال البرمجة. احصل على المساعدة، وشارك معرفتك، وتعاون مع المطورين من جميع أنحاء العالم. استكشف مواضيع في تطوير الويب، وتطوير تطبيقات الهاتف، والخوارزميات، وهياكل البيانات، والمزيد...",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning dir="rtl" lang="ar">
      <head />
      <body
        className={clsx(
          FONT.className,
          "min-h-screen bg-background antialiased"
        )}
      >
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "text-primary hover:text-primary-600",
            },
          }}
        >
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col h-screen">
              <Navbar />
              <main className="container mx-auto max-w-7xl  px-6 flex-grow">
                {children}
              </main>
              <footer className="w-full flex items-center justify-center py-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://heroui.com?utm_source=next-app-template"
                  title="heroui.com homepage"
                >
                  <span className="text-default-600">Powered by</span>
                  <p className="text-primary">HeroUI</p>
                </Link>
              </footer>
            </div>
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
