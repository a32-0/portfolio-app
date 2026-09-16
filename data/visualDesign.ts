export const PLACEHOLDER_IMAGE = 'placeholder'

export type VisualDesignItem = {
  visible: boolean
  id: string
  title: string
  image: string
  width: number
  height: number
}

const allVisualDesignItems: VisualDesignItem[] = [
  {
    visible: true,
    id: 'kiosk-liverpool',
    title: 'Kiosk',
    image: '/images/projects/kiosk-liverpool/cover.png',
    width: 3834,
    height: 2680,
  },
  {
    visible: true,
    id: 'connect-liverpool',
    title: 'Connect',
    image: '/images/projects/connect-liverpool/cover2.png',
    width: 3144,
    height: 4232,
  },
  {
    visible: true,
    id: 'invoice-liverpool',
    title: 'Invoicing',
    image: '/images/projects/invoice-liverpool/cover2.png',
    width: 3096,
    height: 2084,
  },
  {
    visible: true,
    id: 'immersio',
    title: 'Immersio',
    image: '/images/projects/immersio/cover.png',
    width: 2880,
    height: 2328,
  },
  {
    visible: true,
    id: 'toma1',
    title: 'TOMA1',
    image: '/images/projects/toma1/cover.png',
    width: 2880,
    height: 6086,
  },
  {
    visible: true,
    id: 'cyberpuerta',
    title: 'CyberPuerta',
    image: '/images/projects/cyberpuerta/cover.png',
    width: 2880,
    height: 2780,
  },
  {
    visible: true,
    id: 'ox-bi',
    title: 'OX BI',
    image: '/images/projects/ox-bi/cover.png',
    width: 2880,
    height: 2048,
  },
  {
    visible: true,
    id: 'binca',
    title: 'Binca',
    image: '/images/projects/binca/cover.png',
    width: 2880,
    height: 4112,
  },
  {
    visible: true,
    id: 'disrupto',
    title: 'Disrupto',
    image: '/images/projects/disrupto/cover.png',
    width: 2880,
    height: 4218,
  },
  {
    visible: true,
    id: 'nexum',
    title: 'Nexum',
    image: '/images/projects/nexum/cover.png',
    width: 2880,
    height: 2250,
  },
  {
    visible: true,
    id: 'doia',
    title: 'Doia',
    image: '/images/projects/doia/cover.png',
    width: 2880,
    height: 5562,
  },
  {
    visible: true,
    id: 'mait',
    title: 'Mait',
    image: '/images/projects/mait/cover.png',
    width: 2880,
    height: 2048,
  },
  {
    visible: true,
    id: 'ilum',
    title: 'Ilum Prosperity Sherpas',
    image: '/images/projects/ilum/cover.png',
    width: 2880,
    height: 2354,
  },
  {
    visible: true,
    id: 'maestro-malta',
    title: 'Maestro Malta',
    image: '/images/projects/maestro-malta/cover.png',
    width: 2880,
    height: 2394,
  },
  {
    visible: true,
    id: 'ox-logistics',
    title: 'OX Logistics',
    image: '/images/projects/ox-logistics/cover.png',
    width: 1600,
    height: 1138,
  },

  {
    visible: false,
    id: 'little-lemon',
    title: 'Little Lemon',
    image: '/images/projects/little-lemon/cover.png',
    width: 2880,
    height: 2048,
  },
  {
    visible: true,
    id: 'borgatta',
    title: 'Borgatta',
    image: '/images/projects/borgatta/cover2.png',
    width: 2880,
    height: 2004,
  },
  {
    visible: false,
    id: 'salesforce-liverpool',
    title: 'Salesforce',
    image: '/images/projects/salesforce-liverpool/cover.png',
    width: 2880,
    height: 2048,
  },
  {
    visible: false,
    id: 'yuni',
    title: 'Yuni',
    image: PLACEHOLDER_IMAGE,
    width: 808,
    height: 1080,
  },
  {
    visible: false,
    id: 'zuma',
    title: 'Zuma Capital',
    image: '/images/projects/zuma/cover.png',
    width: 2880,
    height: 2048,
  },
  {
    visible: false,
    id: 'lottery',
    title: 'Lottery',
    image: '/images/projects/lottery/cover.png',
    width: 1440,
    height: 1024,
  },
  {
    visible: false,
    id: 'bike',
    title: 'Bike',
    image: '/images/projects/bike/cover.png',
    width: 2880,
    height: 2048,
  },
]

export const visualDesignItems = allVisualDesignItems.filter((item) => item.visible)
