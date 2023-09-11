import "./globals.css";
import type { Metadata } from "next";
import { Header } from "../../components/header/page";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: "Movie Mingle",
  description: "Watch movies and enjoy popcorns at ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
