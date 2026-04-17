import { useEffect, useState } from 'react'

type PageLoaderProps = {
  isVisible: boolean
}

const loaderSteps = ['now building', 'cracking', 'almost there', 'executing']

function getRandomStepIndex(currentIndex: number) {
  if (loaderSteps.length <= 1) {
    return currentIndex
  }

  let nextIndex = currentIndex

  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * loaderSteps.length)
  }

  return nextIndex
}

function PageLoader({ isVisible }: PageLoaderProps) {
  const [stepIndex, setStepIndex] = useState(() => Math.floor(Math.random() * loaderSteps.length))

  useEffect(() => {
    if (!isVisible) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setStepIndex((previousIndex) => getRandomStepIndex(previousIndex))
    }, 950)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [isVisible])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        isVisible ? 'pointer-events-auto visible opacity-100' : 'pointer-events-none invisible opacity-0'
      }`}
      aria-live="polite"
      aria-busy={isVisible}
      role="status"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-sm font-medium text-black">
          <span className="loader-dot loader-dot-1 size-1.5 rounded-full bg-black" />
          <span className="loader-dot loader-dot-2 size-1.5 rounded-full bg-black" />
          <span className="loader-dot loader-dot-3 size-1.5 rounded-full bg-black" />
        </div>
        <p className="min-h-5 text-sm font-medium tracking-wide text-black animate-pulse">
          {loaderSteps[stepIndex]}
        </p>
      </div>
    </div>
  )
}

export default PageLoader
