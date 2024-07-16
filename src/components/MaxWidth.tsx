import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={cn(
        'h-full mx-auto w-full max-w-screen-2xl px-5 md:px-8 py-7',
        className
      )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper