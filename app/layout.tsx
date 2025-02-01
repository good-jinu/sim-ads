import { ThemeProvider } from "@/components/providers/ThemeProvider";
import UserProvider from "@/components/providers/UserProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sim-ads",
  description: "Simple advertising",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white dark:bg-neutral-900 text-black dark:text-white">
        <ThemeProvider>
          <UserProvider>{children}</UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
