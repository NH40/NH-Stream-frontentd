import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/libs/i18n/request.ts')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'b154eedd-5cd2-468f-9ac7-c6107e934ab8.selstorage.ru'
      }
    ]
  }
}

export default withNextIntl(nextConfig)
