import { Share } from 'lucide-react'
import { useTranslations } from 'next-intl'
import {
  FaFacebook,
  FaMailBulk,
  FaReddit,
  FaTelegram,
  FaVk,
  FaWhatsapp
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import {
  FacebookShareButton,
  MailruShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  VKShareButton,
  WhatsappShareButton
} from 'react-share'

import { Button } from '@/components/ui/common/Button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/common/Popover'

import type { FindChannelByUsernameQuery } from '@/graphql/generated/output'

interface ShareActionsProps {
  channel: FindChannelByUsernameQuery['findChannelByUsername']
}

export function ShareActions({ channel }: ShareActionsProps) {
  const t = useTranslations('stream.actions.share')

  const shareUrl = `${window.location.origin}/${channel.username}`

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='ghost'
          size='lgIcon'
        >
          <Share className='size-5' />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side='top'
        className='w-[300px]'
      >
        <h2 className='font-medium'>{t('heading')}</h2>
        <div className='mt-4 grid grid-cols-4 gap-3'>
          <TelegramShareButton url={shareUrl}>
            <div className='flex h-14 items-center justify-center rounded-md bg-sky-500 transition-transform hover:-translate-y-1.5'>
              <FaTelegram className='size-7 text-white' />
            </div>
          </TelegramShareButton>
          <TwitterShareButton url={shareUrl}>
            <div className='flex h-14 items-center justify-center rounded-md bg-black transition-transform hover:-translate-y-1.5'>
              <FaXTwitter className='size-7 text-white' />
            </div>
          </TwitterShareButton>
          <VKShareButton url={shareUrl}>
            <div className='flex h-14 items-center justify-center rounded-md bg-sky-700 transition-transform hover:-translate-y-1.5'>
              <FaVk className='size-7 text-white' />
            </div>
          </VKShareButton>
          <RedditShareButton url={shareUrl}>
            <div className='flex h-14 items-center justify-center rounded-md bg-orange-600 transition-transform hover:-translate-y-1.5'>
              <FaReddit className='size-7 text-white' />
            </div>
          </RedditShareButton>
          <WhatsappShareButton url={shareUrl}>
            <div className='flex h-14 items-center justify-center rounded-md bg-green-600 transition-transform hover:-translate-y-1.5'>
              <FaWhatsapp className='size-7 text-white' />
            </div>
          </WhatsappShareButton>
          <MailruShareButton url={shareUrl}>
            <div className='flex h-14 items-center justify-center rounded-md bg-blue-800 transition-transform hover:-translate-y-1.5'>
              <FaMailBulk className='size-7 text-white' />
            </div>
          </MailruShareButton>
          <FacebookShareButton url={shareUrl}>
            <div className='flex h-14 items-center justify-center rounded-md bg-blue-700 transition-transform hover:-translate-y-1.5'>
              <FaFacebook className='size-7 text-white' />
            </div>
          </FacebookShareButton>
        </div>
      </PopoverContent>
    </Popover>
  )
}
