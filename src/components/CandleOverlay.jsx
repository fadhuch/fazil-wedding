import islamicLamp from '../assets/lamp1.png'

const topLayerLampIds = new Set([3, 11])
const lowLayerLampIds = new Set([2, 9])
const randomOpacity = () => Number((0.28 + Math.random() * 0.32).toFixed(2))

const lamps = Array.from({ length: 13 }, (_, index) => {
  const seed = index + 1
  const baseZ = 1 + ((seed * 11) % 5)

  return {
    id: seed,
    left: `${1 + ((seed * 37) % 88)}%`,
    top: `${20 + ((seed * 53) % 78)}%`,
    size: 35 + ((seed * 17) % 20),
    opacity: randomOpacity(),
    rotate: -10 + ((seed * 29) % 21),
    zIndex: lowLayerLampIds.has(seed) ? 0 : topLayerLampIds.has(seed) ? 12 : baseZ,
  }
})

const CandleOverlay = () => (
  <div className="candle-overlay fixed inset-0 z-[5] overflow-hidden" aria-hidden="true">
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
