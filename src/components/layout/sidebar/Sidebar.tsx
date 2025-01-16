'use client'

import { usePathname } from 'next/navigation'

import { useSidebar } from '@/hooks/useSidebar'

import { DASHBOARD_PAGE } from '@/config/dashboard-page'

import { cn } from '@/utils/tw-merge'

import { DashboardNav } from './DashboardNav'
import { SidebarHeader } from './SidebarHeader'
import { UserNav } from './UserNav'

export function Sidebar() {
  const { isCollapsed } = useSidebar()
  const pathname = usePathname()

  const isDashboardPage = pathname.includes(DASHBOARD_PAGE.HOME)

  return (
    <aside
      className={cn(
        'fixed left-0 z-50 mt-[75px] flex h-full flex-col border-r border-border bg-card transition-all duration-100 ease-in-out',
        'w-64',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <SidebarHeader />
      {isDashboardPage ? <DashboardNav /> : <UserNav />}
    </aside>
  )
}
