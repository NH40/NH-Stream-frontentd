import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { redirect } from 'next/navigation'

import { VerifyAccountForm } from '@/components/features/auth/forms/VerifyAccountForm'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { ACCOUNT_PAGE } from '@/config/account-page.config'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('auth.verify')

  return {
    title: t('heading'),
    ...NO_INDEX_PAGE
  }
}

export default async function VerifyAccountPage(props: {
  searchParams: Promise<{ token: string }>
}) {
  const searchParams = await props.searchParams

  if (!searchParams.token) {
    return redirect(ACCOUNT_PAGE.CREATE)
  }

  return <VerifyAccountForm />
}
