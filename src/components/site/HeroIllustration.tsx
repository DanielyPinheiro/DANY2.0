import { useState } from 'react';

import HeroVisual from './HeroVisual';

/**
 * Coloca `public/hero-illustration.png` para usar a arte da personagem;
 * se o ficheiro não existir, mostra o HeroVisual de cartões.
 */
export default function HeroIllustration() {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return <HeroVisual />;
  }

  return (
    <img
      src="/hero-illustration.png"
      alt="Ilustração: profissional com painéis de dados e código à volta."
      width={640}
      height={640}
      className="mx-auto w-full max-w-md select-none object-contain drop-shadow-lg md:max-w-lg"
      decoding="async"
      loading="eager"
      onError={() => setUseFallback(true)}
    />
  );
}
