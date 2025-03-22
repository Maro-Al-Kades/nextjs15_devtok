import "@/styles/globals.css";

import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import NextTopLoader from "nextjs-toploader";

import { Providers } from "./providers";

const FONT = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ديڤ تُوك | DevTok",
  description:
    "أكبر منصة مجتمعية تفاعلية لطرح الأسئلة والإجابة عليها في مجال البرمجة. احصل على المساعدة، وشارك معرفتك، وتعاون مع المطورين من جميع أنحاء العالم. استكشف مواضيع في تطوير الويب، وتطوير تطبيقات الهاتف، والخوارزميات، وهياكل البيانات، والمزيد...",
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
          // eslint-disable-next-line prettier/prettier
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
            <div className="">
              <NextTopLoader color="#ff7000" />
              <main className="flex-grow">{children}</main>
              {/* <footer className="w-full flex items-center justify-center py-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://heroui.com?utm_source=next-app-template"
                  title="heroui.com homepage"
                >
                  <span className="text-default-600">Powered by</span>
                  <p className="text-primary">HeroUI</p>
                </Link>
              </footer> */}
            </div>
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
