"use client";
import React from 'react'
import Navbar from '../Navbar/Navbar'
import useSidebarStore from '@/store/Store.zust';
import Sidebar from '../Sidebar/Sidebar';

export default function RootWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const display = useSidebarStore((state) => state.visible);
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

        <main className="flex h-[calc(100dvh-70px)] relative">
          {/* Sidebar */}
          <aside className="w-[250px] h-[calc(100dvh-70px)] bg-gray-100 overflow-y-auto left-0 top-0 max-md:absolute transition duration-150 ease-in-out" style={{
            left: display ? "0" : "-100%"
          }}>
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
