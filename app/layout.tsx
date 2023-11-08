import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider.context";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stk Clone",
  description:
    "A community-driven platform for getting solutions to tech problems.",
  icons: {
    icon: "/public/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
