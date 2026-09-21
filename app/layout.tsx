import './globals.css'
import type { Metadata, Viewport } from 'next'
import Header from '@/components/Header'
import FooterSection from '@/components/FooterSection'
import SiteNavProvider from '@/components/SiteNavProvider'
import { Inter, Roboto_Mono, Lora } from 'next/font/google'
import Script from 'next/script'
import { UMAMI_SRC, UMAMI_WEBSITE_ID } from '@/data/analytics'
import { OG_IMAGE, OG_IMAGES, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/data/metadata'
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Armando Rojano | Product Designer',
    template: '%s | Armando Rojano',
  },
  description: SITE_DESCRIPTION,
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
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
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
  interactiveWidget: 'resizes-content',
  themeColor: '#0001e9',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${robotoMono.variable} ${lora.variable}`}
    >
      <body>
        <SiteNavProvider>
          <Header />
          {children}
          <FooterSection />
        </SiteNavProvider>
        {process.env.NODE_ENV === 'production' && (
          <Script src={UMAMI_SRC} data-website-id={UMAMI_WEBSITE_ID} />
        )}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
