import { useMemo } from 'react'
import type { PieSectorShapeProps } from 'recharts'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

/** Roxo marca site — alinhado a `--app-primary` (#7B3FE4). */
export const BRAND_PURPLE = '#7B3FE4'
export const BRAND_GOLD = '#D4AF37'
export const BRAND_ROSE = '#FF69B4'

const BAR_DATA = [
  { name: 'Inteligência Gastronômica Global', roi: 74 },
  { name: 'Precisão em Saúde e Coluna', roi: 74 },
  { name: 'Estratégia de Hospitalidade de Elite', roi: 257 },
]

const PIE_DATA = [
  { name: 'Consultoria', value: 3, fill: BRAND_PURPLE },
  { name: 'Desenvolvimento', value: 5, fill: BRAND_ROSE },
]

function HeroPieSector(props: PieSectorShapeProps) {
  const bump = props.isActive ? 7 : 0
  const { stroke, strokeWidth } = props
  return (
    <Sector
      {...props}
      outerRadius={(props.outerRadius ?? 0) + bump}
      stroke={stroke ?? 'rgba(255,255,255,0.14)'}
      strokeWidth={strokeWidth ?? 1}
      style={{
        ...(props.style as object),
        filter: props.isActive
          ? 'drop-shadow(0 0 12px rgba(212,175,55,0.45))'
          : undefined,
        outline: 'none',
      }}
    />
  )
}

const chartGlass = 'hero-chart-shell hero-chart-soft-glow px-5 py-5'
const chartFadeIn = 'hero-chart-slide-up opacity-0'
const spinLayer = 'hero-chart-pie-spin'

export default function HeroCharts() {
  const barTooltipStyle = useMemo(
    () => ({
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(212,175,55,0.25)',
      borderRadius: '10px',
      background: 'rgba(18,18,23,0.85)',
      color: '#FFFFFF',
      fontSize: '13px',
    }),
    []
  )

  const axisTick = useMemo(() => ({ fill: '#B0B0B0', fontSize: 11 }), [])

  return (
    <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-11">
      <figure className={`${chartGlass} ${chartFadeIn} order-1`}>
        <figcaption className="sr-only">
          Ilustração com ROIs simbólicos de cases que documento na biblioteca: Inteligência Gastronômica
          Global setenta e quatro por cento; Precisão em Saúde e Coluna setenta e quatro por cento;
          Estratégia de Hospitalidade de Elite duzentos e cinquenta e sete por cento.
        </figcaption>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          ROI por caso (%)
        </p>
        <div className="h-[200px] w-full md:h-[250px] lg:h-[286px]" role="presentation">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={BAR_DATA} margin={{ top: 8, right: 8, left: -16, bottom: 4 }}>
              <defs>
                <linearGradient id="heroBarGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor={BRAND_GOLD} stopOpacity={0.95} />
                  <stop offset="100%" stopColor={BRAND_PURPLE} stopOpacity={1} />
                </linearGradient>
              </defs>
              <CartesianGrid
                vertical={false}
                stroke="rgba(176,176,176,0.08)"
              />
              <XAxis
                dataKey="name"
                tick={axisTick}
                tickLine={false}
                axisLine={{ stroke: 'rgba(123,63,228,0.22)' }}
                interval={0}
                tickMargin={10}
                height={104}
                angle={-26}
                textAnchor="end"
              />
              <YAxis
                domain={[0, 280]}
                tick={axisTick}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip
                cursor={{ fill: 'rgba(123,63,228,0.08)' }}
                contentStyle={barTooltipStyle}
                formatter={(value, _name, item) => {
                  const v = Number(value ?? 0)
                  const caseName =
                    (item.payload as { name?: string } | undefined)?.name ?? 'Caso'
                  return [`${v}% ROI`, caseName]
                }}
                labelFormatter={() => ''}
              />
              <Bar
                dataKey="roi"
                name="ROI"
                fill="url(#heroBarGrad)"
                radius={[8, 8, 4, 4]}
                isAnimationActive="auto"
                animationDuration={1500}
                animationEasing="ease-out"
                activeBar={{
                  opacity: 0.92,
                  filter: `drop-shadow(0 0 10px rgba(212,175,55,0.5)) brightness(1.08)`,
                }}
                unit="%"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </figure>

      <figure className={`${chartGlass} ${chartFadeIn} hero-chart-slide-up-delay order-2`}>
        <figcaption className="sr-only">
          Ilustração da minha distribuição de projetos por área: consultoria trinta e sete vírgula cinco
          por cento; desenvolvimento sessenta e dois vírgula cinco por cento.
        </figcaption>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Projetos por área
        </p>
        <div
          className={`${spinLayer} relative h-[200px] w-full md:h-[250px] lg:h-[286px]`}
          role="presentation"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                contentStyle={barTooltipStyle}
                formatter={(value, _name, item) => {
                  const v = Number(value ?? 0)
                  const name =
                    (item.payload as { name?: string } | undefined)?.name ?? ''
                  const total = PIE_DATA.reduce((s, d) => s + d.value, 0)
                  const pct = total ? ((v / total) * 100).toFixed(1) : '0'
                  return [`${v} projetos (${pct}%)`, name]
                }}
              />
              <Pie
                data={PIE_DATA}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="46%"
                outerRadius="72%"
                paddingAngle={2}
                labelLine={{ stroke: 'rgba(176,176,176,0.35)' }}
                label={({ name, percent, x, y, textAnchor }) => {
                  if (percent == null) return null
                  return (
                    <text
                      x={x}
                      y={y}
                      textAnchor={textAnchor}
                      fill="#F5ECFF"
                      fontSize={12}
                      fontWeight={600}
                      style={{ textShadow: '0 1px 8px rgba(0,0,0,0.45)' }}
                    >
                      {`${name} · ${(percent * 100).toFixed(1)}%`}
                    </text>
                  )
                }}
                isAnimationActive="auto"
                animationDuration={1200}
                animationEasing="ease-out"
                shape={HeroPieSector}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </figure>
    </div>
  )
}
