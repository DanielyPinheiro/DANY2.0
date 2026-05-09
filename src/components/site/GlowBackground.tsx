// Manchas muito suaves — modo perolado Soft Intelligence

export default function GlowBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div
        className="absolute top-[-15%] right-[-5%] h-[380px] w-[380px] rounded-full bg-primary opacity-[0.048]"
        style={{ filter: 'blur(90px)' }}
      />
      <div
        className="absolute bottom-[-10%] left-[-10%] h-[320px] w-[320px] rounded-full bg-[#F4C36A] opacity-[0.042]"
        style={{ filter: 'blur(80px)' }}
      />
      <div
        className="absolute top-[42%] left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-[0.028]"
        style={{ filter: 'blur(100px)' }}
      />
    </div>
  )
}
