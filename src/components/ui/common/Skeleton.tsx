import type { HTMLAttributes } from 'react'

import { cn } from '@/utils/tw-merge'

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'bg-card dark:bg-muted animate-pulse rounded-lg',
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
