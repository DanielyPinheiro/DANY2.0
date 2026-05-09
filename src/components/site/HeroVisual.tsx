import { Compass } from 'lucide-react';

import OwlMark from './OwlMark';

function MiniBarChart() {
  const heights = [36, 52, 44, 64, 48, 56];
  return (
    <div className="flex h-20 items-end justify-center gap-1.5 px-2" aria-hidden>
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-2 rounded-t bg-gradient-to-t from-primary to-pink shadow-sm"
          style={{ height: h }}
        />
      ))}
    </div>
  );
}

export default function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-md min-h-[300px] md:max-w-lg md:min-h-[340px]"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/6 via-transparent to-gold/5" />

      <div className="absolute left-[6%] top-[12%] z-20 w-[44%] -rotate-[3deg]">
        <div className="rounded-2xl border border-primary/22 bg-gradient-to-br from-primary/18 via-primary/28 to-primary/35 p-5 shadow-lg shadow-primary/12 backdrop-blur-sm">
          <OwlMark variant="onPurple" className="mx-auto h-14 w-14 owl-float" />
        </div>
      </div>

      <div className="absolute right-[4%] top-[20%] z-30 w-[46%] rotate-[2deg]">
        <div className="glass rounded-2xl p-5 shadow-md">
          <Compass className="mx-auto h-11 w-11 text-gold drop-shadow-sm md:h-12 md:w-12" />
        </div>
      </div>

      <div className="absolute bottom-[14%] left-[14%] z-25 w-[52%] rotate-[1deg]">
        <div className="glass rounded-2xl p-4 shadow-md">
          <MiniBarChart />
        </div>
      </div>
    </div>
  );
}
