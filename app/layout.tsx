import type { Metadata } from "next";
import Font from "@/public/font";
import "../styles/globals.css";
import { cn } from "@/lib/cn";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "RoomTrack - Next.js App",
  keywords: [
    "RoomTracker",
    "RoomTracking",
    "Next.js",
    "React",
    "Room Management",
    "Room Tracker",
    "Room Management System",
    "Room Management App",
    "Room Management Software",
    "Room Management Tool",
    "Room Management Platform",
    "Room Management Dashboard",
    "Room Management UI",
    "Room Management Interface",
    "Hotel Room Management",
    "Hotel Room Tracker",
    "Hotel Room Management System",
    "Hotel Room Management App",
    "Hotel Room Management Software",
    "Hotel Room Management Tool",
    "Hotel Room Management Platform",
    "Hotel Room Management Dashboard",
    "Hotel Room Management UI",
    "Hotel Room Management Interface",
  ],
  description:
    "RoomTrack is a powerful tool for managing and keeping Track of your Hotel rooms.",
  authors: [
    {
      name: "Emmanuel Odewale",
      url: "https://github.com/odewale-emmanuel",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen flex flex-col",
          "bg-gray-100/80 dark:bg-black/90 text-black",
          "antialiased",
          Font.geistSans,
          Font.inter,
          Font.geistMono
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
