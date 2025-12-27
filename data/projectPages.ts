export type ProjectPageData = {
  slug: string
  description?: string
  detailImage?: string
  detailAlt?: string
  link?: { label: string; href: string }
  meta?: { label: string; value: string }[]
}

export const projectPages: ProjectPageData[] = [
  {
    slug: 'ox-logistics',
    description:
      'OX Logistics is a B2B marketplace platform that connects transporters and clients to optimize logistics. It reduces empty mileage for transporters by enabling them to publish routes and receive service requests, while merchants can easily find, compare, and book transportation services in one centralized system.',
    detailImage: '/images/projects/ox-logistics/casestudy.png',
    detailAlt: 'OX Logistics case study',
    meta: [
      { label: 'Client', value: 'Ilum Prosperity Sherpas' },
      { label: 'Type', value: 'Product Design' },
      { label: 'Dev', value: 'PID Electronics' },
      { label: 'Year', value: '2021' },
    ],
  },
  {
    slug: 'mait',
    description:
      'Mait is a user-centered platform designed to connect travelers with verified locals, offering personalized, non-touristic experiences. It helps users discover cultural, culinary, and recreational activities based on their interests and location while ensuring safety and avoiding romantic or intimate associations.',
    detailImage: '/images/projects/mait/casestudy.png',
    detailAlt: 'Mait case study',
    meta: [
      { label: 'Client', value: 'Ilum Prosperity Sherpas' },
      { label: 'Type', value: 'Product Design' },
      { label: 'Dev', value: 'Internal' },
      { label: 'Year', value: '2022' },
    ],
  },
  {
    slug: 'doia',
    description:
      'Doia is a digital platform that offers personalized skincare product recommendations using advanced technologies like facial scanning and questionnaires. It provides users with expert-validated solutions, streamlined navigation, and a reliable shopping experience, empowering them to make informed decisions about their skincare routine.',
    detailImage: '/images/projects/doia/casestudy.png',
    detailAlt: 'Doia case study',
    meta: [
      { label: 'Client', value: 'Ilum Prosperity Sherpas' },
      { label: 'Type', value: 'Product Design' },
      { label: 'Dev', value: 'Internal' },
      { label: 'Year', value: '2022' },
    ],
  },
  {
    slug: 'yuni',
    description:
      'Yuni is a C2C marketplace that enables users to rent a wide variety of personal items, from gardening tools to fashion accessories, fostering a secure, convenient, and transparent rental experience. Focused on the sharing economy, Yuni connects individuals who want to access or monetize items they don’t use frequently, offering features like verified profiles, detailed product listings, and optional logistics services.',
    detailImage: '/images/projects/yuni/casestudy.png',
    detailAlt: 'Yuni case study',
    meta: [
      { label: 'Client', value: 'Ilum Prosperity Sherpas' },
      { label: 'Type', value: 'Product Design' },
      { label: 'Dev', value: 'Internal' },
      { label: 'Year', value: '2023' },
    ],
  },
  {
    slug: 'invoice-liverpool',
    description:
      'El portal de Facturación es la plataforma central de Liverpool para que los clientes generen facturas de todas sus compras, sin importar el canal: tiendas físicas, e-commerce o ventas telefónicas. Cualquier cliente que necesite facturar una compra debe completar este flujo. Al tratarse de una experiencia post-compra, regulada y legalmente sensible, cualquier fricción impacta directamente en la confianza del cliente, en los costos operativos y en la percepción de marca.',
    detailImage: '/images/projects/invoice-liverpool/casestudy.png',
    detailAlt: 'Factura case study',
    meta: [
      { label: 'Client', value: 'El Puerto de Liverpool' },
      { label: 'Type', value: 'Product Design' },
      { label: 'Dev', value: 'Trend IT' },
      { label: 'Year', value: '2025' },
    ],
  },
  {
    slug: 'connect-liverpool',
    description: 'Hub de colaboracion interna con mensajeria, tareas y seguimiento.',
    detailImage: '/images/projects/connect-liverpool/casestudy.png',
    detailAlt: 'Connect case study',
    meta: [
      { label: 'Client', value: 'El Puerto de Liverpool' },
      { label: 'Type', value: 'Product Design' },
      { label: 'Dev', value: 'Apply Digital' },
      { label: 'Year', value: '2025' },
    ],
  },
  {
    slug: 'whatsapp-liverpool',
    description: 'Experiencia conversacional para soporte y seguimiento via WhatsApp.',
    detailImage: '/images/projects/whatsapp/casestudy.png',
    detailAlt: 'Conversacion en WhatsApp',
    meta: [
      { label: 'Client', value: 'El Puerto de Liverpool' },
      { label: 'Type', value: 'Conversation Design' },
      { label: 'Dev', value: 'Internal' },
      { label: 'Year', value: '2025' },
    ],
  },
]
