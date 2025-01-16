import {
  Banknote,
  DollarSign,
  KeyRound,
  Medal,
  MessageSquare,
  Settings,
  Users
} from 'lucide-react'
import { useTranslations } from 'next-intl'

import { DASHBOARD_PAGE } from '@/config/dashboard-page'

import { SidebarItem } from './SidebarItem'
import type { Route } from './route.interface'

export function DashboardNav() {
  const t = useTranslations('layout.sidebar.dashboardNav')

  const routes: Route[] = [
    {
      label: t('settings'),
      href: DASHBOARD_PAGE.SETTINGS,
      icon: Settings
    },
    {
      label: t('keys'),
      href: DASHBOARD_PAGE.KEYS_STREAMS,
      icon: KeyRound
    },
    {
      label: t('chatSettings'),
      href: DASHBOARD_PAGE.CHAT,
      icon: MessageSquare
    },
    {
      label: t('followers'),
      href: DASHBOARD_PAGE.FOLLOWERS,
      icon: Users
    },
    {
      label: t('sponsors'),
      href: DASHBOARD_PAGE.SPONSORS,
      icon: Medal
    },
    {
      label: t('premium'),
      href: DASHBOARD_PAGE.PLANS,
      icon: DollarSign
    },
    {
      label: t('transactions'),
      href: DASHBOARD_PAGE.TRANSACTIONS,
      icon: Banknote
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
    </div>
  )
}
