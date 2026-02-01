import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "Agid Nurhaliza | Portofolio",
  description: "Portofolio Profesional Agid Nurhaliza - Lulusan Ekonomi Syariah & Financial Analysis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-google-sans">
        <Navbar />
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
