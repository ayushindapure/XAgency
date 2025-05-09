import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { HeroHeader } from "@/components/hero5-header";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import Footer from "@/components/Footer";
import { StickyBannerDemo } from "@/components/StickyBannerDemo";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Agency",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://cal.com/embed/embed.js" async></script>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Luxurious+Roman&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >

        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            
            <HeroHeader/>
            {children}

            {/* <div className="pointer-events-none fixed bottom-0 left-0 w-full h-16 z-50">
  <div className="w-full h-full backdrop-blur-2xl [mask-image:linear-gradient(to_top,black,transparent)]"></div>
</div> */}

{/* <ProgressiveBlur
        className='w-full h-full backdrop-blur-2xl '
        blurIntensity={6}
      /> */}

          </ThemeProvider>
          <Footer/>
      </body>
    </html>
  );
}
