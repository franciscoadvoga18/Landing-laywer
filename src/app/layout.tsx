import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const normalidad = localFont({
  src: '../../public/fonts/Normalidad_Extended_Bold.otf',
  variable: '--font-normalidad-bold',
  display: "swap"
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Francisco de Assis | Advogado",
  description: "website do Francisco Assis Advogado apresentando seus serviços e sua historia",
  keywords: ["francisco", "assis", "advogado", "advogacia","Direito de Família" ,"Direito de Família", "Direito Civil", "Direito Trabalhista", "Direito do Consumidor", "solicitar abono", "Direito Público", "Concursos Públicos"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${normalidad.variable}`}>
        {children}
      </body>
    </html>
  );
}
