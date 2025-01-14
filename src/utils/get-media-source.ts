import { MEDIA_URL } from '@/constants/url.constants'

export function getMediaSource(path: string | undefined | null) {
  return MEDIA_URL + path
}
