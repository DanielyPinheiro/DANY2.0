import { useId } from 'react';

type Variant = 'default' | 'onPurple';

const GOLD = '#F4C36A';

export default function OwlMark({
  className = '',
  variant = 'default',
}: {
  className?: string;
  variant?: Variant;
}) {
  const rawId = useId().replace(/:/g, '');
  const filterId = `owl-glow-${rawId}`;
  const onPurple = variant === 'onPurple';
  const stroke = onPurple ? '#faf5ff' : GOLD;
  const eyeFill = onPurple ? 'rgba(250,245,255,0.18)' : 'rgba(244,195,106,0.14)';
  const pupil = onPurple ? '#5b21b6' : '#2a1f35';
  const highlight = onPurple ? '#faf5ff' : '#fff8e7';
  const cheek = onPurple ? 'rgba(245,243,255,0.12)' : GOLD;
  const blur = onPurple ? 3.5 : 2;

  return (
    <svg
      className={className}
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logótipo DataGlow — coruja estilizada"
    >
      <g filter={`url(#${filterId})`}>
        <ellipse
          cx="48"
          cy="64"
          rx="26"
          ry="16"
          fill={cheek}
          fillOpacity={onPurple ? 0.35 : 0.1}
        />

        {/* Tufos (orelhas em ponta) */}
        <path
          d="M 36 32 L 32 12 L 44 30 Z"
          fill={eyeFill}
          stroke={stroke}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M 60 32 L 64 12 L 52 30 Z"
          fill={eyeFill}
          stroke={stroke}
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Cabeça */}
        <ellipse
          cx="48"
          cy="50"
          rx="25"
          ry="28"
          stroke={stroke}
          strokeWidth="3.5"
          fill="none"
        />

        {/* Olhos — anel + interior + pupila + reflexo */}
        <circle
          cx="37"
          cy="48"
          r="12"
          stroke={stroke}
          strokeWidth="2.5"
          fill={eyeFill}
        />
        <circle
          cx="59"
          cy="48"
          r="12"
          stroke={stroke}
          strokeWidth="2.5"
          fill={eyeFill}
        />
        <circle cx="37" cy="48" r="5" fill={pupil} />
        <circle cx="59" cy="48" r="5" fill={pupil} />
        <circle cx="39" cy="46" r="2" fill={highlight} fillOpacity={0.95} />
        <circle cx="61" cy="46" r="2" fill={highlight} fillOpacity={0.95} />

        {/* Bico */}
        <path
          d="M 48 58 L 43 68 L 48 65 L 53 68 Z"
          fill={stroke}
          stroke={stroke}
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* Corpo mínimo (linha de peito) */}
        <path
          d="M 32 70 Q 48 80 64 70"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      <defs>
        <filter
          id={filterId}
          x="-8"
          y="-8"
          width="112"
          height="112"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur stdDeviation={blur} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
