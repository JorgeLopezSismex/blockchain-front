import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "SinguarDocs",
  description:
    "Plataforma para la creación de certificados digitales en blockchain",
  icons: {
    icon: "/web/singulardocs-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ backgroundColor: "#f4f6f9" }}
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
