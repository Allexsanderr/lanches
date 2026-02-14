import { useEffect, useMemo, useRef, useState } from 'react'
import Lenis from 'lenis'
import {
  Flame,
  Hamburger,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Phone,
  UtensilsCrossed,
  Youtube,
} from 'lucide-react'

type MenuItem = {
  name: string
  price: string
  description: string
  accent: 'amber' | 'smoke' | 'heat' | 'green'
  imageSrc: string
  imageFallbackSrc: string
}

function FadeIn({
  children,
  className = '',
  delay = 0,
  as: Component = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: React.ElementType
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  return (
    <Component
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={[
        'will-change-transform',
        visible ? 'animate-fade-up' : 'opacity-0',
        className,
      ].join(' ')}
    >
      {children}
    </Component>
  )
}

function TikTokIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M14 3v10.2a3.8 3.8 0 1 1-3.8-3.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14 6.1c1.2 2.2 3.3 3.6 6 3.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function menuImageDataUri({
  title,
  subtitle,
  accent,
}: {
  title: string
  subtitle: string
  accent: MenuItem['accent']
}) {
  const accentRgb =
    accent === 'amber'
      ? '212 175 55'
      : accent === 'heat'
        ? '239 68 68'
        : accent === 'green'
          ? '16 185 129'
          : '148 163 184'

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="rgb(10 10 10)"/>
        <stop offset="1" stop-color="rgb(18 18 18)"/>
      </linearGradient>
      <radialGradient id="glow" cx="34%" cy="30%" r="75%">
        <stop offset="0" stop-color="rgb(${accentRgb} / 0.40)"/>
        <stop offset="0.45" stop-color="rgb(${accentRgb} / 0.12)"/>
        <stop offset="1" stop-color="rgb(${accentRgb} / 0)"/>
      </radialGradient>
      <filter id="noise" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="matrix" values="
          0 0 0 0 0
          0 0 0 0 0
          0 0 0 0 0
          0 0 0 .16 0"/>
      </filter>
      <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="22" stdDeviation="18" flood-color="rgb(0 0 0 / 0.55)"/>
      </filter>
    </defs>

    <rect width="1200" height="900" fill="url(#bg)"/>
    <rect width="1200" height="900" fill="url(#glow)"/>
    <rect width="1200" height="900" filter="url(#noise)" opacity="0.7"/>

    <g filter="url(#shadow)" opacity="0.92">
      <path d="M240 500c0-84 160-152 360-152s360 68 360 152c0 16-8 30-22 40-40 28-176 64-338 64-164 0-300-36-340-64-12-9-20-24-20-40z" fill="rgb(255 255 255 / 0.10)"/>
      <path d="M282 500c0-58 140-106 318-106s318 48 318 106c0 10-6 19-15 26-34 24-154 54-303 54-151 0-270-30-304-54-9-6-14-16-14-26z" fill="rgb(${accentRgb} / 0.22)"/>
      <path d="M330 540c0-26 120-48 270-48s270 22 270 48c0 4-2 8-6 10-28 18-132 38-264 38-132 0-236-20-264-38-4-2-6-6-6-10z" fill="rgb(0 0 0 / 0.38)"/>
      <path d="M330 600c0-30 120-56 270-56s270 26 270 56c0 6-3 12-8 16-30 22-138 44-262 44-126 0-234-22-264-44-4-4-6-10-6-16z" fill="rgb(255 255 255 / 0.10)"/>
      <path d="M328 606c0-22 122-40 272-40s272 18 272 40c0 4-2 8-6 10-32 18-136 34-266 34-130 0-234-16-266-34-4-2-6-6-6-10z" fill="rgb(${accentRgb} / 0.16)"/>
      <path d="M360 448c40-44 126-74 240-74s200 30 240 74" stroke="rgb(255 255 255 / 0.14)" stroke-width="12" stroke-linecap="round"/>
    </g>

    <g opacity="0.95">
      <rect x="70" y="70" width="1060" height="760" rx="44" fill="rgb(0 0 0 / 0.22)" stroke="rgb(255 255 255 / 0.10)" />
      <rect x="70" y="70" width="1060" height="760" rx="44" fill="url(#glow)" opacity="0.75" />
    </g>

    <g>
      <text x="120" y="178" font-family="Oswald, Arial, sans-serif" font-size="66" font-weight="700" letter-spacing="2" fill="white">${title.toUpperCase()}</text>
      <text x="120" y="232" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="500" fill="rgb(255 255 255 / 0.70)">${subtitle}</text>
    </g>

    <g opacity="0.85">
      <path d="M880 160c24 30 40 60 48 90" stroke="rgb(255 255 255 / 0.20)" stroke-width="10" stroke-linecap="round"/>
      <path d="M930 146c26 34 42 66 50 98" stroke="rgb(${accentRgb} / 0.25)" stroke-width="10" stroke-linecap="round"/>
      <path d="M980 164c22 28 36 56 42 82" stroke="rgb(255 255 255 / 0.16)" stroke-width="10" stroke-linecap="round"/>
    </g>
  </svg>
  `

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const menuItems = useMemo<MenuItem[]>(
    () => [
      {
        name: 'Clássico Chapa & Fogo',
        price: 'R$ 35,00',
        description:
          'Blend da casa, cheddar inglês, cebola caramelizada e bacon.',
        accent: 'amber',
        imageSrc:
          'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
        imageFallbackSrc: menuImageDataUri({
          title: 'Clássico',
          subtitle: 'Cheddar inglês • Bacon • Cebola caramelizada',
          accent: 'amber',
        }),
      },
      {
        name: 'Picante Defumado',
        price: 'R$ 38,00',
        description: 'Jalapeño, biquinho, queijo defumado e molho especial.',
        accent: 'heat',
        imageSrc:
          'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
        imageFallbackSrc: menuImageDataUri({
          title: 'Picante',
          subtitle: 'Jalapeño • Queijo defumado • Molho especial',
          accent: 'heat',
        }),
      },
      {
        name: 'Cheddar Supremo',
        price: 'R$ 32,00',
        description: 'Extra cheddar, bacon crocante, brioche na manteiga.',
        accent: 'smoke',
        imageSrc:
          'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
        imageFallbackSrc: menuImageDataUri({
          title: 'Cheddar',
          subtitle: 'Extra cheddar • Bacon crocante • Brioche',
          accent: 'smoke',
        }),
      },
      {
        name: 'Vegano na Pedra',
        price: 'R$ 30,00',
        description: 'Burger de grão de bico, avocado, tomate e cebola roxa.',
        accent: 'green',
        imageSrc:
          'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80',
        imageFallbackSrc: menuImageDataUri({
          title: 'Vegano',
          subtitle: 'Grão de bico • Avocado • Cebola roxa',
          accent: 'green',
        }),
      },
    ],
    [],
  )

  const heroImageFallback =
    'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=2400&q=60'
  const [heroImage, setHeroImage] = useState('/hero-bg.png')

  useEffect(() => {
    let cancelled = false
    const img = new Image()
    img.onload = () => {}
    img.onerror = () => {
      if (!cancelled) setHeroImage(heroImageFallback)
    }
    img.src = '/hero-bg.png'
    return () => {
      cancelled = true
    }
  }, [heroImageFallback])

  return (
    <div className="min-h-screen bg-charcoal font-body text-white/90">
      <main id="topo" className="relative">
        <section className="relative min-h-screen overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(180deg, rgba(18,18,18,0.82) 0%, rgba(18,18,18,0.7) 20%, rgba(18,18,18,0.88) 55%, rgba(18,18,18,0.98) 100%), radial-gradient(circle at 55% 35%, rgba(212,175,55,0.10) 0%, rgba(18,18,18,0.0) 45%), radial-gradient(circle at 55% 40%, rgba(255,255,255,0.10) 0%, rgba(18,18,18,0.0) 55%)',
            }}
          />

          <header className="absolute left-0 top-0 z-50 w-full">
            <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-4 px-4 py-5 md:grid-cols-[1fr_auto_1fr] md:py-7">
              <a
                href="#topo"
                className="flex items-center gap-3 text-white/90 transition hover:text-white"
              >
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-amberGold/15 text-amberGold">
                  <Flame className="h-5 w-5" />
                </span>
                <span className="leading-tight">
                  <span className="font-title text-sm font-bold uppercase tracking-tight md:text-base">
                    Chapa &amp; Fogo
                  </span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55 md:text-xs">
                    Lanches Artesanais
                  </span>
                </span>
              </a>

              <nav className="hidden items-center gap-10 text-xs font-semibold uppercase tracking-[0.22em] text-white/75 md:flex">
                <a href="#cardapio" className="transition hover:text-white">
                  Cardápio
                </a>
                <a href="#unidades" className="transition hover:text-white">
                  Unidades
                </a>
                <a href="#sobre" className="transition hover:text-white">
                  Sobre Nós
                </a>
              </nav>

              <div className="flex justify-end">
                <a
                  href="#cardapio"
                  className="rounded-full bg-amberGold px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-black shadow-glow transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amberGold"
                >
                  Pedir Online
                </a>
              </div>
            </div>
          </header>

          <div className="relative mx-auto flex min-h-[92vh] max-w-6xl items-center px-4 pb-36 pt-28 md:pt-32">
            <div className="max-w-xl">
              <FadeIn className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                <span className="h-px w-10 bg-amberGold/60" />
                Sabores artesanais na pedra
              </FadeIn>

              <div className="mt-6 animate-float-slow">
                <h1 className="font-title text-5xl font-bold uppercase leading-[0.88] tracking-tight text-white sm:text-6xl md:text-7xl">
                  <FadeIn as="span" className="block" delay={0}>
                    A Chapa
                  </FadeIn>
                  <FadeIn
                    as="span"
                    className="block animate-shimmer bg-gradient-to-r from-amber-200 via-amber-500 to-amber-600 bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-sm"
                    delay={200}
                  >
                    Mais Quente
                  </FadeIn>
                  <FadeIn as="span" className="block" delay={400}>
                    Da Cidade.
                  </FadeIn>
                </h1>
                <FadeIn
                  as="p"
                  className="mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-base"
                  delay={600}
                >
                  Defumado elegante, crosta perfeita e suculência no ponto. O
                  cheiro chega antes — e a vontade não espera.
                </FadeIn>
              </div>

              <FadeIn className="mt-7">
                <a
                  href="#cardapio"
                  className="inline-flex items-center justify-center rounded-full bg-amberGold px-9 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black shadow-glow transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amberGold"
                >
                  Pedir Agora
                </a>
              </FadeIn>
            </div>
          </div>

          <div className="absolute bottom-6 left-0 right-0">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/30 text-white/70 backdrop-blur-md transition hover:border-amberGold/35 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/30 text-white/70 backdrop-blur-md transition hover:border-amberGold/35 hover:text-white"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/30 text-white/70 backdrop-blur-md transition hover:border-amberGold/35 hover:text-white"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="h-4 w-4" />
                </a>
              </div>

              <div className="flex flex-col gap-2 text-xs text-white/70 md:flex-row md:items-center md:gap-6">
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-amberGold" />
                  +55 (31) 99999-9999
                </span>
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-amberGold" />
                  contato@chapaefogo.com
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="relative -mt-24 pb-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: Leaf,
                  title: 'Ingredientes de qualidade',
                  description:
                    'Seleção criteriosa para sabor limpo e final marcante.',
                },
                {
                  icon: Hamburger,
                  title: 'Sabor na medida',
                  description:
                    'Selagem rápida, crosta perfeita e suculência garantida.',
                },
                {
                  icon: UtensilsCrossed,
                  title: 'Feito todos os dias',
                  description:
                    'Produção artesanal, fresca, com padrão consistente.',
                },
              ].map((feature) => (
                <FadeIn key={feature.title}>
                  <div className="rounded-3xl border border-white/10 bg-black/35 px-6 py-7 text-center shadow-glow backdrop-blur-xl transition hover:border-white/15 hover:bg-black/45">
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-amberGold/25 bg-amberGold/10 text-amberGold">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div className="mt-4 font-title text-sm font-bold uppercase tracking-[0.14em] text-white">
                      {feature.title}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-white/65">
                      {feature.description}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="cardapio" className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <FadeIn className="rounded-3xl border border-white/10 bg-black/30 p-6 shadow-glow backdrop-blur-xl md:p-10">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <h2 className="font-title text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
                    Cardápio
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                    Seleção enxuta, execução impecável. Escolha seu favorito e
                    deixe o fogo fazer o resto.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                  <span className="h-px w-10 bg-white/15" />
                  Combos e adicionais na loja
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {menuItems.map((item) => {
                  const accent =
                    item.accent === 'amber'
                      ? 'from-amberGold/25 via-amberGold/10 to-transparent'
                      : item.accent === 'heat'
                        ? 'from-red-500/25 via-orange-400/10 to-transparent'
                        : item.accent === 'green'
                          ? 'from-emerald-400/20 via-emerald-300/10 to-transparent'
                          : 'from-white/20 via-white/5 to-transparent'

                  return (
                    <FadeIn key={item.name} className="h-full">
                      <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/15 hover:bg-white/7">
                        <div
                          className={[
                            'absolute -left-12 -top-16 h-44 w-44 rounded-full blur-3xl',
                            `bg-gradient-to-br ${accent}`,
                          ].join(' ')}
                        />
                        <div className="relative">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="font-title text-lg font-bold uppercase leading-tight tracking-tight text-white">
                              {item.name}
                            </h3>
                            <span className="shrink-0 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white/80">
                              {item.price}
                            </span>
                          </div>

                          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/30 to-black/10">
                            <img
                              src={item.imageSrc}
                              alt={item.name}
                              className="aspect-[4/3] w-full object-cover opacity-95 transition duration-300 group-hover:opacity-100"
                              loading="lazy"
                              decoding="async"
                              onError={(event) => {
                                event.currentTarget.src = item.imageFallbackSrc
                              }}
                            />
                          </div>

                          <p className="mt-4 text-sm leading-relaxed text-white/70">
                            {item.description}
                          </p>

                          <a
                            href="#cardapio"
                            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white/85 transition hover:border-amberGold/35 hover:bg-black/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amberGold"
                          >
                            Ver detalhes
                          </a>
                        </div>
                      </article>
                    </FadeIn>
                  )
                })}
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="unidades" className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <FadeIn>
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <h2 className="font-title text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
                    Unidades
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                    A brasa está acesa. Escolha a unidade mais perto ou peça sem
                    sair de casa.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 backdrop-blur-md">
                  <Phone className="h-4 w-4 text-amberGold" />
                  +55 (31) 99999-9999
                </div>
              </div>
            </FadeIn>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'Savassi',
                  subtitle: 'Belo Horizonte • 12:00–23:00',
                },
                {
                  title: 'Pampulha',
                  subtitle: 'Belo Horizonte • 12:00–23:00',
                },
                {
                  title: 'Centro',
                  subtitle: 'Belo Horizonte • 12:00–22:30',
                },
              ].map((unit) => (
                <FadeIn key={unit.title}>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white/15 hover:bg-white/7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-title text-xl font-bold uppercase tracking-tight text-white">
                          {unit.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/70">
                          {unit.subtitle}
                        </p>
                      </div>
                      <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-black/20 text-amberGold">
                        <MapPin className="h-5 w-5" />
                      </span>
                    </div>
                    <a
                      href="#unidades"
                      className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-amberGold/10 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-amberGold transition hover:bg-amberGold/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amberGold"
                    >
                      Ver no mapa
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="pb-20 pt-10">
          <div className="mx-auto max-w-6xl px-4">
            <FadeIn className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amberGold/15 blur-3xl" />
              <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-7">
                  <h2 className="font-title text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
                    Sobre Nós
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                    A Chapa &amp; Fogo nasceu do respeito ao ingrediente e do
                    controle absoluto do calor. Cada burger é selado na pedra,
                    com textura e fumaça na medida — sem exageros, só sabor.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="#cardapio"
                      className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/85 transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30"
                    >
                      Ver cardápio
                    </a>
                    <a
                      href="#unidades"
                      className="inline-flex items-center justify-center rounded-2xl bg-amberGold px-6 py-4 text-xs font-semibold uppercase tracking-wider text-black transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amberGold"
                    >
                      Reservar mesa
                    </a>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="grid gap-3">
                    {[
                      {
                        title: 'Defumado na medida',
                        description: 'Aroma de fogo com final limpo e elegante.',
                      },
                      {
                        title: 'Blend da casa',
                        description:
                          'Textura suculenta com selagem rápida e crosta.',
                      },
                      {
                        title: 'Atendimento direto',
                        description:
                          'Pedido simples, entrega rápida, ponto consistente.',
                      },
                    ].map((feature) => (
                      <div
                        key={feature.title}
                        className="rounded-2xl border border-white/10 bg-black/20 p-5"
                      >
                        <div className="font-title text-base font-bold uppercase tracking-tight text-white">
                          {feature.title}
                        </div>
                        <div className="mt-2 text-sm text-white/70">
                          {feature.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/65">
            <span className="font-title font-bold uppercase tracking-tight text-white">
              Chapa &amp; Fogo
            </span>{' '}
            <span className="text-white/40">•</span> Copyright{' '}
            {new Date().getFullYear()}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/75 transition hover:border-amberGold/35 hover:text-white"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/75 transition hover:border-amberGold/35 hover:text-white"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/75 transition hover:border-amberGold/35 hover:text-white"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>

          <div className="text-sm text-white/65">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-amberGold" />
              +55 (31) 99999-9999
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
