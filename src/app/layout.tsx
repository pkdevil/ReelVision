import type { Metadata, Viewport } from 'next';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
    title: {
        default: 'ReelVision - Explore Movies',
        template: '%s | ReelVision',
    },
    description: 'Discover movies, explore details, and find your next favorite film with ReelVision.',
    keywords: ['movies', 'films', 'explore movies', 'movie database', 'movie ratings', 'movie trailers'],
    authors: [{ name: 'Prateek Singh', url: 'https://github.com/pkdevil/ReelVision' }],
    metadataBase: new URL('https://ReelVision.vercel.app'),
    openGraph: {
        description: 'Discover movies, explore details, and find your next favorite film with ReelVision.',
        url: 'https://ReelVision.vercel.app',
        siteName: 'ReelVision',
        images: [
            {
                url: 'https://ReelVision.vercel.app/banner.png',
                width: 1200,
                height: 630,
                alt: 'ReelVision Banner',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        description: 'Discover movies, explore details, and find your next favorite film with ReelVision.',
        images: ['https://ReelVision.vercel.app/banner.png'],
    },
    manifest: '/site.webmanifest',
    robots: 'index, follow',
};

export const viewport: Viewport = {
    themeColor: 'black',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={` antialiased dark`}>
                <GoogleAnalytics gaId="G-Y94T96FRD7" />
                <Analytics />
                {children}
            </body>
        </html>
    );
}
