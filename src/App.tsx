import Intro from '@/components/Intro/Intro'
import Projects from '@/components/Projects/Projects'
import ScrollWorld from '@/components/ScrollWorld/ScrollWorld'
import TechnicalProfile from '@/components/TechnicalProfile/TechnicalProfile'
import WorkExperienceTree from '@/components/WorkExperienceTree/WorkExperienceTree'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

function App() {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (!prefersReducedMotion) return <ScrollWorld />

  return (
    <div className="flex flex-col gap-24 md:gap-32">
      <Intro />
      <Projects />
      <WorkExperienceTree />
      <TechnicalProfile />
    </div>
  )
}

export default App
