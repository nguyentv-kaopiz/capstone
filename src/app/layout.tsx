'use client';

import "./globals.css";
import SideNavbar from "../widgets/SideNavbar";
import TopNavbar from "../widgets/TopNavbar";
import {useState} from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  return (
    <html lang="en">
      <body>
        <div className="flex bg-gray-100 min-h-screen">
          <SideNavbar/>
          <div>
            <TopNavbar/>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
