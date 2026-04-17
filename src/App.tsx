import Intro from '@/components/Intro/Intro'
import TechnicalProfile from '@/components/TechnicalProfile/TechnicalProfile'
import WorkExperienceTree from '@/components/WorkExperienceTree/WorkExperienceTree'

function App() {
  return (
    <div className="flex flex-col gap-6">
      <Intro />
      <TechnicalProfile />
      <WorkExperienceTree />
    </div>
  )
}

export default App
