import { useRef, type CSSProperties, type ReactNode } from 'react'
import { ArrowDown, ArrowUpRight, Mail, Pause, Play } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  leadership,
  technologyShowcaseCards,
  toolsDesignShowcaseCards,
  type TechCard,
} from '@/components/TechnicalProfile/techData'
import portrait from '@/assets/portrait.webp'
import { useAutoplay } from '@/hooks/useAutoplay'
import { useFlight } from '@/hooks/useFlight'
import { cn } from '@/lib/utils'
import { segmentBetween, yearTicks, type Vec3 } from './flightMath'
import { endYear, firstSentence, markets, sceneGroups, scenes, startYear, stats, type Scene } from './scenes'

const EMAIL = 'markcev0@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/markcalderon/'
const GITHUB = 'https://github.com/MarkCalderon'
const techItems = [...technologyShowcaseCards, ...toolsDesignShowcaseCards]
const totalLength = scenes.reduce((sum, scene) => sum + scene.length, 0)

function place(x: number, y: number, z: number): CSSProperties {
  return { transform: `translate3d(${x}px, ${y}px, ${z}px) translate(-50%, -50%)` }
}

/** Deterministic spiral so the constellation reads as arranged, not random. */
function constellationSpot(index: number) {
  const angle = index * 2.39996
  const radius = 160 + index * 22
  return { x: 160 + Math.cos(angle) * radius, y: Math.sin(angle) * radius * 0.6 - 60, z: 260 - index * 46 }
}

/** Award chips float at different depths around the year so parallax separates them. */
const chipSpots: Vec3[] = [
  { x: 260, y: -300, z: 240 },
  { x: -440, y: 170, z: 140 },
  { x: 340, y: 240, z: -200 },
]

const companyName = (company: string) => company.split(' · ')[0]


type RoleScene = Extract<Scene, { kind: 'role' }>
const isRoleScene = (scene: Scene): scene is RoleScene => scene.kind === 'role'

const timeline = yearTicks(
  scenes.filter(isRoleScene).map((scene) => ({
    year: Number(startYear(scene.role.period)),
    point: { x: scene.focal.x, y: scene.focal.y + 240, z: scene.focal.z },
  })),
)

/** Hairline thread with a tick per year, linking the roles into one career path. */
function Timeline() {
  return (
    <>
      {timeline.slice(1).map((tick, index) => {
        const { mid, length, yaw } = segmentBetween(timeline[index].point, tick.point)
        return (
          <div
            key={`segment-${tick.year}`}
            data-fog-z={mid.z}
            className="world-anchor h-px bg-primary/45"
            style={{
              width: length,
              transform: `translate3d(${mid.x}px, ${mid.y}px, ${mid.z}px) translate(-50%, -50%) rotateY(${yaw}deg)`,
            }}
          />
        )
      })}
      {timeline.map((tick) => (
        <div
          key={`tick-${tick.year}`}
          data-fog-z={tick.point.z}
          className="world-anchor flex flex-col items-center gap-2"
          style={{
            transform: `translate3d(${tick.point.x}px, ${tick.point.y}px, ${tick.point.z}px) translate(-50%, -1.5rem)`,
          }}
        >
          <span className={cn('w-px', tick.isAnchor ? 'h-16 bg-primary' : 'h-8 bg-foreground/30')} />
          <span
            className={cn(
              'text-2xl tabular-nums',
              tick.isAnchor ? 'font-medium text-primary' : 'text-muted-foreground',
            )}
          >
            {tick.year}
          </span>
        </div>
      ))}
    </>
  )
}

function Scenery({ scene }: { scene: Scene }) {
  switch (scene.kind) {
    case 'intro':
      return (
        // World offsets differ per breakpoint, so they live in CSS vars: right of the copy on
        // desktop, lifted above it on phones. Feet fade so the crop edge never reads as a line.
        <img
          src={portrait}
          alt=""
          width={360}
          height={450}
          fetchPriority="high"
          decoding="async"
          className="absolute h-[34rem] w-auto max-w-none [--portrait-x:0px] [--portrait-y:-130px] [mask-image:linear-gradient(to_bottom,black_72%,transparent)] md:[--portrait-x:140px] md:[--portrait-y:-30px]"
          style={{ transform: 'translate3d(var(--portrait-x), var(--portrait-y), 0) translate(-50%, -50%)' }}
        />
      )
    case 'contact':
      return (
        <p className="text-[11rem] leading-none font-medium tracking-tight whitespace-nowrap text-foreground/[0.07]">
          Mark Calderon
        </p>
      )
    case 'project':
      return (
        <div className="aspect-16/10 w-[52rem] overflow-hidden rounded-xl bg-muted ring-1 ring-foreground/10">
          <img
            src={scene.project.screenshot}
            alt=""
            className="h-full w-full object-cover object-top"
            loading={scene.id === 'work-0' ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>
      )
    case 'impact':
      return (
        <>
          {/* Phones skip the numeral: it lands under the progress bar and the stat grid already says it. */}
          <p
            className="world-outline absolute hidden text-[22rem] leading-none font-medium tracking-tight tabular-nums md:block"
            style={place(-380, -220, 0)}
          >
            {markets.length}
          </p>
          {markets.map((market, index) => (
            <p
              key={market.country}
              className="absolute flex w-max flex-col gap-1"
              // Left-aligned column, so only centred vertically.
              style={{ transform: `translate3d(40px, ${-320 + index * 120}px, 60px) translateY(-50%)` }}
            >
              <span className="text-3xl font-medium tracking-tight text-foreground/75">{market.country}</span>
              <span className="text-xl text-muted-foreground">{market.work}</span>
            </p>
          ))}
        </>
      )
    case 'role':
      return (
        <>
          <p
            className="world-outline absolute text-[22rem] leading-none font-medium tracking-tight tabular-nums"
            style={place(0, 0, 0)}
          >
            {startYear(scene.role.period)}
          </p>
          <p
            className="absolute text-4xl font-medium tracking-tight whitespace-nowrap tabular-nums text-foreground/45"
            style={place(400, 130, 60)}
          >
            to {endYear(scene.role.period)}
          </p>
          <p
            className="absolute text-5xl font-medium tracking-tight whitespace-nowrap text-foreground/70"
            style={place(-140, -220, 180)}
          >
            {companyName(scene.role.company)}
          </p>
          {scene.role.highlights.map((highlight, index) => {
            const spot = chipSpots[index % chipSpots.length]
            return (
              <span
                key={highlight}
                className="absolute rounded-full border border-border bg-background px-4 py-1.5 text-base whitespace-nowrap text-muted-foreground"
                style={place(spot.x, spot.y, spot.z)}
              >
                {highlight}
              </span>
            )
          })}
        </>
      )
    case 'stack':
      return techItems.map((item, index) => {
        const spot = constellationSpot(index)
        return (
          <span
            key={item.name}
            className={cn('absolute flex size-16 items-center justify-center', item.iconClassName)}
            style={place(spot.x, spot.y, spot.z)}
          >
            <item.icon className="size-full" />
          </span>
        )
      })
  }
}

function TechList({ title, items }: { title: string; items: TechCard[] }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm text-muted-foreground">{title}</h3>
      <ul className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <li
            key={item.name}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-1 text-xs text-foreground"
          >
            <item.icon aria-hidden="true" className={cn('size-3.5 shrink-0', item.iconClassName)} />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex w-fit items-center gap-1.5 rounded-sm text-sm font-medium text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {children}
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 text-muted-foreground transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}

function SceneCopy({ scene, onViewProjects }: { scene: Scene; onViewProjects: () => void }) {
  const headingId = `${scene.id}-title`

  switch (scene.kind) {
    case 'intro':
      return (
        <>
          <h1 id={headingId} className="text-4xl font-medium tracking-tight text-balance text-foreground md:text-6xl">
            Senior Frontend Developer
          </h1>
          <p className="text-lg leading-relaxed text-pretty text-foreground/80 md:text-xl">
            7+ years building SPA to enterprise web applications, with 80+ WordPress custom themes and landing
            pages delivered.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="px-4">
              <a href={`mailto:${EMAIL}`}>
                <Mail data-icon="inline-start" />
                Email me
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="px-4" onClick={onViewProjects}>
              <ArrowDown data-icon="inline-start" />
              View projects
            </Button>
          </div>
        </>
      )
    case 'project':
      return (
        <>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">{scene.project.category}</p>
            <h2 id={headingId} className="text-3xl font-medium tracking-tight text-balance text-foreground md:text-4xl">
              {scene.project.title}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-pretty text-foreground/80">
            {firstSentence(scene.project.description)}
          </p>
          <ExternalLink href={scene.project.url}>Visit site</ExternalLink>
        </>
      )
    case 'impact':
      return (
        <>
          <h2 id={headingId} className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Where it shipped
          </h2>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col-reverse justify-end gap-1">
                <dt className="text-sm leading-snug text-pretty text-muted-foreground">{stat.label}</dt>
                <dd className="text-4xl font-medium tracking-tight tabular-nums text-foreground md:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </>
      )
    case 'role':
      return (
        <>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground tabular-nums">{scene.role.period}</p>
            <h2
              id={headingId}
              className="flex flex-wrap items-center gap-2 text-2xl font-medium tracking-tight text-balance text-foreground md:text-3xl"
            >
              {scene.role.title}
              {scene.isCurrent ? <Badge>Current</Badge> : null}
            </h2>
            <p className="text-sm text-foreground/80">{scene.role.company}</p>
            <p className="text-sm text-muted-foreground">{scene.role.location}</p>
          </div>
          <p className="text-base leading-relaxed text-pretty text-foreground/80">{firstSentence(scene.role.summary)}</p>
        </>
      )
    case 'stack':
      return (
        <>
          <h2 id={headingId} className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Technical profile
          </h2>
          <TechList title="Languages & frameworks" items={technologyShowcaseCards} />
          {/* Phones keep the scene short; the icon constellation above already shows every tool. */}
          <div className="hidden md:block">
            <TechList title="Tools & design" items={toolsDesignShowcaseCards} />
          </div>
          <div className="hidden flex-wrap gap-1.5 md:flex">
            {leadership.badges.map((badge) => (
              <Badge key={badge} variant="outline">
                {badge}
              </Badge>
            ))}
          </div>
        </>
      )
    case 'contact':
      return (
        <>
          <h2 id={headingId} className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Contact
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            className="w-fit rounded-sm text-2xl font-medium tracking-tight text-foreground underline decoration-primary/40 underline-offset-8 transition-colors hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring md:text-4xl"
          >
            {EMAIL}
          </a>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <ExternalLink href={LINKEDIN}>
              <FaLinkedinIn aria-hidden="true" className="size-3.5" />
              LinkedIn
            </ExternalLink>
            <ExternalLink href={GITHUB}>
              <FaGithub aria-hidden="true" className="size-3.5" />
              GitHub
            </ExternalLink>
            <p className="text-sm text-muted-foreground">Languages: English, Tagalog, Malay</p>
          </div>
        </>
      )
  }
}

function ScrollWorld() {
  const rootRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<HTMLButtonElement>(null)
  const goTo = useFlight(rootRef, scenes)
  const autoplay = useAutoplay(rootRef, autoplayRef)
  const firstIndexOf = (group: Scene['group']) => scenes.findIndex((scene) => scene.group === group)

  return (
    <div ref={rootRef} className="world relative" style={{ height: `calc(${totalLength + 1} * 100dvh)` }}>
      <div className="sticky top-0 h-dvh overflow-clip">
        <div aria-hidden="true" data-world-sky className="world-sky absolute inset-0" />
        <div aria-hidden="true" className="world-stage absolute inset-0">
          <div data-world-camera className="world-camera absolute inset-0">
            {scenes.map((scene) => (
              <div
                key={scene.id}
                data-scene-scenery
                className="world-anchor"
                style={place(scene.focal.x, scene.focal.y, scene.focal.z)}
              >
                <Scenery scene={scene} />
              </div>
            ))}
            <Timeline />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-linear-to-t from-background via-background/85 to-transparent"
        />

        <div className="relative mx-auto h-full w-full max-w-5xl px-4 sm:px-6">
          {scenes.map((scene, index) => (
            <section
              key={scene.id}
              id={scene.id}
              data-scene-copy
              aria-labelledby={`${scene.id}-title`}
              className="absolute inset-x-4 bottom-[calc(20dvh+env(safe-area-inset-bottom))] flex max-w-xl flex-col gap-5 opacity-0 sm:inset-x-6 md:bottom-16"
              style={index === 0 ? { opacity: 1 } : undefined}
            >
              <SceneCopy scene={scene} onViewProjects={() => goTo(firstIndexOf('work'))} />
            </section>
          ))}
        </div>

        <nav aria-label="Sections" className="absolute top-1/2 right-4 hidden -translate-y-1/2 flex-col items-end gap-1 md:flex">
          {sceneGroups.map(({ group, label }) => (
            <button
              key={group}
              type="button"
              data-rail-group={group}
              onClick={() => goTo(firstIndexOf(group))}
              className="group flex items-center gap-3 rounded-md px-2 py-1.5 text-xs text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 aria-[current=step]:text-primary"
            >
              {label}
              <span
                aria-hidden="true"
                className="h-px w-8 origin-right scale-x-50 bg-border transition-[scale,background-color] duration-200 ease-out group-aria-[current=step]:scale-x-100 group-aria-[current=step]:bg-primary"
              />
            </button>
          ))}
        </nav>

        {/* Phones: progress bar and Autoplay share a top row. From md up the row dissolves
            (display: contents) and Autoplay drops to the bottom-right corner. */}
        <div className="absolute inset-x-0 top-0 flex items-start gap-3 px-4 pt-[calc(0.5rem+env(safe-area-inset-top))] md:contents">
          <nav aria-label="Sections" className="flex min-w-0 flex-1 flex-col md:hidden">
            <div className="flex">
              {sceneGroups.map(({ group, label }) => (
                <button
                  key={group}
                  type="button"
                  data-rail-group={group}
                  aria-label={label}
                  onClick={() => goTo(firstIndexOf(group))}
                  className="group flex h-11 flex-1 items-center px-0.5 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <span
                    aria-hidden="true"
                    className="h-0.5 w-full rounded-full bg-foreground/15 transition-colors duration-200 ease-out group-data-[state=past]:bg-primary/40 group-data-[state=current]:bg-primary"
                  />
                </button>
              ))}
            </div>
            <p data-rail-label aria-hidden="true" className="-mt-2 px-0.5 text-xs font-medium text-foreground">
              {sceneGroups[0].label}
            </p>
          </nav>

          <Button
            ref={autoplayRef}
            variant="outline"
            size="sm"
            aria-pressed={autoplay.isPlaying}
            onClick={autoplay.toggle}
            className="mt-2 shrink-0 bg-background/80 md:absolute md:right-6 md:bottom-8 md:mt-0"
          >
            {autoplay.isPlaying ? <Pause data-icon="inline-start" /> : <Play data-icon="inline-start" />}
            {autoplay.isPlaying ? 'Pause' : 'Autoplay'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ScrollWorld
