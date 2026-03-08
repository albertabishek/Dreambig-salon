'use client'

import { Spinner } from './spinner'

interface PageLoadingProps {
  message?: string
}

export function PageLoading({ message = "Loading..." }: PageLoadingProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <Spinner className="size-8 mx-auto text-primary" />
        <p className="text-foreground/60 animate-pulse">{message}</p>
      </div>
    </div>
  )
}

export function SectionLoading({ message = "Loading..." }: PageLoadingProps) {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="text-center space-y-3">
        <Spinner className="size-6 mx-auto text-primary" />
        <p className="text-sm text-foreground/60 animate-pulse">{message}</p>
      </div>
    </div>
  )
}
