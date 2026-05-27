import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibrant Wellness × Beyond Biohacking — Get matched in Austin",
  description: "Sign up at Beyond Biohacking 2026 in Austin. Get matched with a provider trained on Vibrant Wellness specialty lab panels — gut, hormone, cardio, brain, toxin, cellular.",
  icons: {
    icon: "/assets/vw-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
