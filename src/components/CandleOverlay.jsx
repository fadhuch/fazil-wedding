import islamicLamp from '../assets/lamp1.png'

const topLayerLampIds = new Set([2, 5])
const lowLayerLampIds = new Set([9, 12])
const topLampZIndex = 50
const forcedLampLeft = {
  4: 8,
  10: 90,
}
const randomOpacity = () => Number((0.28 + Math.random() * 0.32).toFixed(2))

const lampAnchors = [
  { left: 6, top: 14 },
  { left: 19, top: 33 },
  { left: 33, top: 11 },
  { left: 46, top: 39 },
  { left: 59, top: 19 },
  { left: 72, top: 44 },
  { left: 86, top: 16 },
  { left: 11, top: 60 },
  { left: 26, top: 77 },
  { left: 42, top: 64 },
  { left: 57, top: 83 },
  { left: 74, top: 69 },
  { left: 90, top: 82 },
]

const lamps = Array.from({ length: 13 }, (_, index) => {
  const seed = index + 1
  const baseZ = 1 + ((seed * 11) % 5)
  const anchor = lampAnchors[index % lampAnchors.length]
  const jitterLeft = ((seed * 7) % 7) - 3
  const jitterTop = ((seed * 5) % 7) - 3

  return {
    id: seed,
    left: `${forcedLampLeft[seed] ?? Math.max(2, Math.min(94, anchor.left + jitterLeft))}%`,
    top: `${Math.max(8, Math.min(90, anchor.top + jitterTop))}%`,
    size: 35 + ((seed * 17) % 20),
    opacity: randomOpacity(),
    rotate: -10 + ((seed * 29) % 21),
    zIndex: lowLayerLampIds.has(seed) ? 0 : topLayerLampIds.has(seed) ? topLampZIndex : baseZ,
  }
})

const CandleOverlay = () => (
  <div className="candle-overlay fixed inset-0 z-[30] overflow-hidden" aria-hidden="true">
    {lamps.map((lamp) => (
      <div
        key={lamp.id}
        className="lamp-deco absolute will-change-transform"
        style={{
          left: lamp.left,
          top: lamp.top,
          zIndex: lamp.zIndex,
          width: `${lamp.size}px`,
          opacity: lamp.opacity,
          transform: `rotate(${lamp.rotate}deg)`,
        }}
      >
        <img src={islamicLamp} alt="" className="lamp-image h-auto w-full" loading="eager" decoding="async" />
      </div>
    ))}
  </div>
)

export default CandleOverlay
