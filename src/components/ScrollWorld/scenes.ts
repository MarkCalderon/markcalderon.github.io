import { projects, type Project } from '@/components/Projects/projectData'
import { experiences, type ExperienceNode } from '@/components/WorkExperienceTree/experienceData'
import type { Pose, Vec3 } from './flightMath'

export type SceneGroup = 'intro' | 'work' | 'impact' | 'experience' | 'stack' | 'contact'

type SceneContent =
  | { kind: 'intro' }
  | { kind: 'project'; project: Project }
  | { kind: 'impact' }
  | { kind: 'role'; role: ExperienceNode; isCurrent: boolean }
  | { kind: 'stack' }
  | { kind: 'contact' }

export type Scene = SceneContent & {
  id: string
  group: SceneGroup
  /** Scroll length in viewport heights. */
  length: number
  /** Where the scene's scenery sits in world space (px). */
  focal: Vec3
  /** Hues (deg) of the two atmosphere glows while this scene is presented. */
  sky: Sky
}

export type Sky = [number, number]

const BRAND_SKY: Sky = [262, 220]

/** Picked from each site's own screenshot so the atmosphere matches the work. */
const projectSky: Record<string, Sky> = {
  'Philippine Adventure Holidays': [205, 55],
  'Barambah Organics': [250, 140],
  'Pryce Gardens': [140, 85],
  'University of Creativity': [28, 195],
  'Ogawa Group': [235, 80],
}

export const sceneGroups: { group: SceneGroup; label: string }[] = [
  { group: 'intro', label: 'Intro' },
  { group: 'work', label: 'Work' },
  { group: 'impact', label: 'Shipped' },
  { group: 'experience', label: 'Experience' },
  { group: 'stack', label: 'Stack' },
  { group: 'contact', label: 'Contact' },
]

const STEP = 1600

/** Every figure is on record (PRODUCT.md, LinkedIn); add new ones only with Mark's confirmation. */
export const stats = [
  { value: '7+', label: 'years building for the web' },
  { value: '80+', label: 'WordPress custom themes and landing pages' },
  { value: '70+', label: 'CMS and landing pages for Commude Japan clients' },
  { value: '4', label: 'markets: Philippines, Japan, Australia, US' },
]

export const markets = [
  { country: 'Philippines', work: 'Philippine Adventure Holidays, Pryce Gardens' },
  { country: 'Japan', work: 'University of Creativity, Ogawa Group' },
  { country: 'Australia', work: 'Barambah Organics, intranet platform' },
  { country: 'United States', work: 'SaaS time management, New York' },
]

export function firstSentence(text: string) {
  return text.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? text
}

export function startYear(period: string) {
  return period.match(/\d{4}/)?.[0] ?? ''
}

export function endYear(period: string) {
  return period.split(' - ')[1]?.match(/\d{4}|Present/)?.[0] ?? ''
}

function buildScenes(): Scene[] {
  let depth = 0
  const nextFocal = (x: number, y = 0): Vec3 => {
    depth -= STEP
    return { x, y, z: depth }
  }

  return [
    { kind: 'intro', id: 'intro', group: 'intro', length: 1.2, focal: { x: 0, y: 0, z: 0 }, sky: BRAND_SKY },
    ...projects.map(
      (project, index): Scene => ({
        kind: 'project',
        project,
        id: `work-${index}`,
        group: 'work',
        length: 1.1,
        focal: nextFocal(index % 2 === 0 ? 420 : -420),
        sky: projectSky[project.title] ?? BRAND_SKY,
      }),
    ),
    { kind: 'impact', id: 'impact', group: 'impact', length: 1.4, focal: nextFocal(0, -60), sky: [262, 200] },
    ...experiences.map(
      (role, index): Scene => ({
        kind: 'role',
        role,
        isCurrent: index === 0,
        id: `experience-${index}`,
        group: 'experience',
        length: 1,
        focal: nextFocal(index % 2 === 0 ? -300 : 300, -40),
        sky: [45, 75],
      }),
    ),
    { kind: 'stack', id: 'stack', group: 'stack', length: 1.4, focal: nextFocal(0), sky: [220, 180] },
    { kind: 'contact', id: 'contact', group: 'contact', length: 1, focal: nextFocal(0), sky: BRAND_SKY },
  ]
}

export const scenes = buildScenes()

/**
 * Camera pose that frames a scene. Desktop copy sits bottom-left, so the camera stands
 * left of the focal point and the scenery reads on the right. Phones stack copy at the
 * bottom, so the camera drops and backs off to fit the scenery above it.
 */
export function poseFor(scene: Scene, isNarrow: boolean): Pose {
  const { x, y, z } = scene.focal
  const yaw = -4 * Math.sign(x)

  if (isNarrow) return { x, y: y + 160, z: z + 1400, yaw: yaw / 2 }
  return { x: x - 260, y, z: z + 420, yaw }
}
