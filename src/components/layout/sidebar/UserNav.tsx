import { Folder, Home, Radio } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { PUBLIC_PAGE } from '@/config/public-page.config'

import { RecommendedChannels } from './RecommendedChannels'
import { SidebarItem } from './SidebarItem'
import type { Route } from './route.interface'

export function UserNav() {
  const t = useTranslations('layout.sidebar.userNav')

  const routes: Route[] = [
    {
      label: t('home'),
      href: PUBLIC_PAGE.HOME,
      icon: Home
    },
    {
      label: t('categories'),
      href: PUBLIC_PAGE.CATEGORIES(),
      icon: Folder
    },
    {
      label: t('streams'),
      href: PUBLIC_PAGE.STREAMS,
      icon: Radio
    }
  ]

  return (
    <div className='space-y-2 px-2 pt-4 lg:pt-0'>
      {routes.map((route, index) => (
        <SidebarItem
          key={index}
          route={route}
        />
      ))}
      <RecommendedChannels />
    </div>
  )
}
