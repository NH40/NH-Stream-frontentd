'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { LogoImage } from '@/components/images/LogoImage'

import { SITE_NAME } from '@/constants/seo.constants'

import { PUBLIC_PAGE } from '@/config/public-page.config'

export function Logo() {
  const t = useTranslations('layout.header.logo')

  return (
    <Link
      href={PUBLIC_PAGE.HOME}
      className='flex items-center gap-x-4 transition-opacity hover:opacity-75'
    >
      <LogoImage />
      <div className='hidden leading-tight lg:block'>
        <h2 className='text-lg font-semibold tracking-wider text-accent-foreground'>
          {SITE_NAME}
        </h2>
        <p className='text-sm text-muted-foreground'>{t('platform')}</p>
      </div>
    </Link>
  )
}
