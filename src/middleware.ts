import { type NextRequest, NextResponse } from 'next/server'

import { ACCOUNT_PAGE } from './config/account-page.config'
import { DASHBOARD_PAGE } from './config/dashboard-page'

export default function middleware(request: NextRequest) {
  const { url, cookies, nextUrl } = request

  const session = cookies.get('session')?.value

  const isAuthRoute = nextUrl.pathname.startsWith('/account')
  const isDeactivateRoute = nextUrl.pathname === '/account/deactivate'
  const isDashboardRoute = nextUrl.pathname.startsWith('/dashboard')

  if (!session && isDashboardRoute) {
    return NextResponse.redirect(new URL(ACCOUNT_PAGE.LOGIN, url))
  }

  if (!session && isDeactivateRoute) {
    return NextResponse.redirect(new URL(ACCOUNT_PAGE.LOGIN, url))
  }

  if (session && isAuthRoute && !isDeactivateRoute) {
    return NextResponse.redirect(new URL(DASHBOARD_PAGE.SETTINGS, url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/account/:path*', '/dashboard/:path*']
}
