import Navbar from "@/component/Navbar/Navbar";
import Sidebar from "@/component/Sidebar/Sidebar";

export const metadata = {
  title: 'BCA 1st year Python | By Saumya Sarma',
  description: 'Made my Saumya Sarma from Pillai College of arts, commerce and science.',
  keywords: ["BCA", "Python", "Saumya", "Bca python tutorials"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/svg+xml" href="/icons/python.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="w-[100vw] h-[100dvh] overflow-hidden">
        <Navbar />

        <main className="flex h-[calc(100dvh-70px)] relative max-md:h-[calc(100dvh-60px)]">
          {/* Sidebar */}
          <aside className="max-w-[250px] h-[calc(100dvh-70px)] bg-gray-100 overflow-y-auto realtive">
            <Sidebar />
          </aside>

          {/* Page Content */}
          <section className="flex-1 overflow-y-auto p-4">
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
