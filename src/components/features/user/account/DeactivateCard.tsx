'use client'

import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/common/Button'
import { CardContainer } from '@/components/ui/elements/CardContainer'
import { ConfirmModal } from '@/components/ui/elements/ConfirmModal'

import { ACCOUNT_PAGE } from '@/config/account-page.config'

export function DeactivateCard() {
  const t = useTranslations('dashboard.settings.account.deactivation')

  const router = useRouter()

  return (
    <CardContainer
      heading={t('heading')}
      description={t('description')}
      rightContent={
        <div className='flex items-center gap-x-4'>
          <ConfirmModal
            heading={t('confirmModal.heading')}
            message={t('confirmModal.message')}
            onConfirm={() => router.push(ACCOUNT_PAGE.DEACTIVATE)}
          >
            <Button>{t('button')}</Button>
          </ConfirmModal>
        </div>
      }
    />
  )
}
