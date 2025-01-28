import { ThemeProvider } from "@/components/providers/ThemeProvider";
import UserProvider from "@/components/providers/UserProvider";
import ThemeToggle from "@/components/ThemeToggle";
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
      <body className="antialiased bg-white dark:bg-neutral-900">
        <ThemeProvider>
          <UserProvider>
            <header className="bg-white dark:bg-neutral-800 shadow-md">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Sim-ads
                </h1>
                <nav className="flex space-x-4">
                  <ThemeToggle />
                </nav>
              </div>
            </header>
            {children}
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
