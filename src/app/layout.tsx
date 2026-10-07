import type { Metadata } from "next";
import { Fraunces, Figtree, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { ReservationProvider } from "@/components/reservation/ReservationContext";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  axes: ["SOFT", "opsz"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: "variable",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Café da Vovó | Cafeteria de bairro em Cornélio Procópio",
  description:
    "Café especial, doces frescos e lanches leves numa cafeteria de bairro em Cornélio Procópio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${figtree.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ReservationProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ReservationProvider>
        <ChatBot />
      </body>
    </html>
  );
}
