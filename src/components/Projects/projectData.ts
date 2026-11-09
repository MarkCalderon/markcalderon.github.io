import imgPah from '@/assets/projects/philippine-adventure-holidays.webp'
import imgBarambah from '@/assets/projects/barambah-organics.webp'
import imgPryce from '@/assets/projects/pryce-gardens.webp'
import imgUoc from '@/assets/projects/uoc-world.webp'
import imgOgawa from '@/assets/projects/ogawa-group.webp'

export type Project = {
  title: string
  category: string
  description: string
  url: string
  screenshot: string
}

export const projects: Project[] = [
  {
    title: 'Philippine Adventure Holidays',
    category: 'Tour Reservation System',
    description:
      'A full-featured tour reservation platform for a Philippines-based travel agency. Supports package browsing, online booking, and customized itineraries covering island hopping, diving, corporate travel, and destination experiences.',
    url: 'https://www.philippineadventureholidays.com/',
    screenshot: imgPah,
  },
  {
    title: 'Barambah Organics',
    category: 'E-commerce Dashboard',
    description:
      'A customer-facing portal for an Australian organic dairy brand. Provides authenticated account management, order access, and self-service features in a clean, streamlined dashboard experience.',
    url: 'https://customers.barambahorganics.com.au/',
    screenshot: imgBarambah,
  },
  {
    title: 'Pryce Gardens',
    category: 'Lot Booking & Purchase System',
    description:
      'An online lot booking and memorial planning platform for a memorial park group in Mindanao, Philippines. Enables families to browse and reserve burial lots, explore pre-planning options, and manage service inquiries.',
    url: 'https://prycegardens.com/',
    screenshot: imgPryce,
  },
  {
    title: 'University of Creativity',
    category: 'Content Management & Delivery',
    description:
      'A content delivery platform for a Tokyo-based cross-disciplinary creative institution. Powers seminar programs, research publication, event management, and community engagement across the UoC ecosystem.',
    url: 'https://uoc.world/',
    screenshot: imgUoc,
  },
  {
    title: 'Ogawa Group',
    category: 'WordPress Corporate Site',
    description:
      'A corporate WordPress site for a Japanese real estate services group established in 1988. Covers land registration, surveying, inheritance transfers, and urban redevelopment consulting across a group of specialized professional entities.',
    url: 'https://www.ogawagroup.co.jp/',
    screenshot: imgOgawa,
  },
]
