import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adhithya N | Data Science & AI Enthusiast',
  description:
    'Personal portfolio of Adhithya N. Aspiring software and AI professional passionate about Python, Data Science, and Generative AI technologies.',
  keywords: [
    'Adhithya',
    'portfolio',
    'data science',
    'AI',
    'machine learning',
    'python',
    'web developer',
  ],
  authors: [{ name: 'Adhithya N', url: 'https://adhithya-portfolio.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adhithya-portfolio.com',
    title: 'Adhithya N | Data Science & AI Enthusiast',
    description:
      'Personal portfolio of Adhithya N. Aspiring software and AI professional passionate about Python, Data Science, and Generative AI technologies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adhithya N | Data Science & AI Enthusiast',
    description:
      'Personal portfolio of Adhithya N. Aspiring software and AI professional passionate about Python, Data Science, and Generative AI technologies.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-dark text-white`}>{children}</body>
    </html>
  );
}
