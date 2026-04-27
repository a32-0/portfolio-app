import './globals.css'
import type { Metadata, Viewport } from 'next'
import Header from '@/components/Header'
import FooterSection from '@/components/FooterSection'
import { Inter, Roboto_Mono, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

const lora = Lora({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: {
    default: 'Armando Rojano | Product Designer',
    template: '%s | Armando Rojano',
  },
  description:
    'Product Designer designing operational systems across retail, service, and conversational ecosystems, with experience in high-traffic customer flows, internal platforms, and scalable self-service products.',
  applicationName: 'Armando Rojano Portfolio',
  authors: [{ name: 'Armando Rojano', url: 'https://www.linkedin.com/in/armandorour/' }],
  creator: 'Armando Rojano',
  publisher: 'Armando Rojano',
  keywords: [
    'Armando Rojano',
    'Product Designer',
    'Operational Systems',
    'Conversational Design',
    'Service Design',
    'UX',
    'Design Systems',
    'Enterprise UX',
    'Portfolio',
    'Mexico City',
  ],
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Armando Rojano | Product Designer',
    title: 'Armando Rojano | Product Designer',
    description:
      'Product Designer designing operational systems across retail, service, and conversational ecosystems, with experience in high-traffic customer flows, internal platforms, and scalable self-service products.',
    images: [
      {
        url: '/icons/catarsis.svg',
        width: 1200,
        height: 630,
        alt: 'Armando Rojano portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armando Rojano | Product Designer',
    description:
      'Product Designer designing operational systems across retail, service, and conversational ecosystems, with experience in high-traffic customer flows, internal platforms, and scalable self-service products.',
    images: ['/icons/catarsis.svg'],
  },
  icons: {
    icon: '/icons/catarsis.svg',
    shortcut: '/icons/catarsis.svg',
    apple: '/icons/catarsis.svg',
  },
  category: 'portfolio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0001f7',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} ${lora.variable}`}
    >
      <body>
        <Header />
        {children}
        <FooterSection />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
