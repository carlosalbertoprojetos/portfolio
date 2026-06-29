import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carlosalbertoprojetos.github.io/portfolio/"),
  title: "Carlos Alberto Medeiros | Senior Full Stack Software Engineer",
  description:
    "Portfólio profissional de Carlos Alberto Medeiros, desenvolvedor Full Stack especializado em Python, Django, FastAPI, APIs, Cloud, DevOps, automação e IA aplicada à engenharia de software.",
  keywords: [
    "Carlos Alberto Medeiros",
    "Senior Full Stack Developer",
    "Software Engineer",
    "Python Developer",
    "Django Developer",
    "FastAPI",
    "Backend Developer",
    "DevOps",
    "Cloud",
    "AI Engineering",
  ],
  authors: [{ name: "Carlos Alberto Medeiros" }],
  openGraph: {
    title: "Carlos Alberto Medeiros | Senior Full Stack Software Engineer",
    description: "Python, Django, FastAPI, APIs, Cloud, DevOps, automação e IA aplicada.",
    type: "website",
    locale: "pt_BR",
    url: "https://carlosalbertoprojetos.github.io/portfolio/",
    images: ["/images/carlos-alberto-medeiros.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
