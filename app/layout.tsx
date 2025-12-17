import type { Metadata } from "next";
import { Inter  } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";
import {ThemeProvider} from "next-themes"

const  inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: `${APP_DESCRIPTION}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        themes={["light", "dark","system"]}    // 使用系统主题
        enableSystem          // 启用系统主题检测
        disableTransitionOnChange      // 切换时禁用过渡动画
      >
      {children}
      </ThemeProvider>  
      
        
      </body>
    </html>
  );
}
