'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef
} from 'react'

import { cn } from '@/utils/tw-merge'

const Slider = forwardRef<
  ComponentRef<typeof SliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className='bg-secondary relative h-2 w-full grow overflow-hidden rounded-full'>
      <SliderPrimitive.Range className='bg-primary absolute h-full' />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className='border-primary focus-visible:ring-ring block h-5 w-5 rounded-full border-2 bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50' />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
