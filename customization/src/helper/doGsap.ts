import gsap from 'gsap'
import type { MutableRefObject } from 'react'

const timeline = gsap.timeline()

const doGsap = (tref: MutableRefObject<HTMLElement | null>) => {
  timeline.from(tref.current, { y: '-100%', duration: 4, ease: 'bounce' }, 0)
}

export default doGsap
