import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

// Import Google Fonts
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Metadata for the application
export const metadata: Metadata = {
    title: "Harvard Art App",
    description: "Explore artworks from the Harvard Art Museums API",
};

// Root Layout Component
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ErrorBoundary
            errorComponent={() => (
                <div className="p-4 text-red-700 bg-red-100 rounded-lg">
                    Something went wrong. Please try again later.
                </div>
            )}
        >
            {children}
        </ErrorBoundary>
        </body>
        </html>
    );
}
