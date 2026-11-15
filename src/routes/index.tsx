import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Counter } from "@/components/urbivis/Counter";
import { WhatsAppButton } from "@/components/urbivis/WhatsAppButton";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Layers2, MapPinned, Timer, Wallet } from "lucide-react";

import heroBairro from "@/assets/bairro-aereo.webp";
import heroBairroMobile from "@/assets/bairro-aereo-mobile.webp";
import cardAmpliacao from "@/assets/lote-ampliacao.webp";
import cardConstrucao from "@/assets/lote-construcao.webp";
import cardPiscina from "@/assets/lote-piscina.webp";
import cardDemolicao from "@/assets/lote-demolicao.webp";
import bairroCadastro from "@/assets/quadras-cadastro.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Urbivis, inteligência territorial para prefeituras" },
      {
        name: "description",
        content:
          "O Urbivis compara o cadastro imobiliário com imagem de satélite e cria a base do zero quando ela não existe. Fale com a equipe pelo WhatsApp.",
      },
      { property: "og:title", content: "Urbivis, inteligência territorial para prefeituras" },
      {
        property: "og:description",
        content:
          "Satélite e cadastro juntos. O Urbivis mostra onde a cidade cresceu e a base ficou parada.",
      },
    ],
  }),
  component: Index,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const divergencias = [
  {
    img: cardAmpliacao,
    alt: "Telhado antigo com uma cobertura de telhas novas junto à lateral da casa",
    title: "Casa ampliada",
    text: "A casa cresceu. O registro ficou no tamanho antigo.",
    destaque: "M242 61L292 59V177L242 186Z",
    limite: "M109 48L242 52V186H109Z",
  },
  {
    img: cardConstrucao,
    alt: "Pequena construção com telhado cerâmico dentro de um terreno murado",
    title: "Obra invisível",
    text: "Existe construção no terreno que a base não conhece.",
    destaque: "M178 45L261 46L268 116L175 126Z",
    limite: "M151 25L263 22L297 195L112 200Z",
  },
  {
    img: cardPiscina,
    alt: "Piscina azul retangular no quintal ao lado de uma casa",
    title: "Piscina nova",
    text: "Benfeitoria no quintal que nunca entrou no sistema.",
    destaque: "M221 71H262V180H221Z",
    limite: "M41 30L365 23L369 222L44 223Z",
  },
  {
    img: cardDemolicao,
    alt: "Terreno vazio com vestígios da fundação entre duas casas vizinhas",
    title: "Imóvel demolido",
    text: "A casa saiu. A cobrança continuou igual.",
    destaque: "M149 86L262 85L275 183L147 177Z",
    tracejado: true,
  },
];

const frasesHero = [
  ["A", "cidade", "cresceu."],
  ["O", "cadastro", "ficou", "parado."],
];

const passos = [
  { n: "01", t: "Recebemos sua base atual, mesmo antiga" },
  { n: "02", t: "Comparamos cada lote com satélite recente" },
  { n: "03", t: "Entregamos mapa com pontos de revisão" },
  { n: "04", t: "Sua equipe valida e atualiza o sistema" },
];

const beneficios = [
  {
    icon: Timer,
    categoria: "Tempo",
    valor: passos.length,
    texto: "etapas para atualizar o cadastro",
  },
  {
    icon: Layers2,
    categoria: "Praticidade",
    valor: 2,
    texto: "formas de começar, com ou sem base",
  },
  { icon: Wallet, categoria: "Custos", valor: 0, texto: "trocas de sistema", destaque: true },
  { icon: MapPinned, categoria: "Planejamento", valor: 1, texto: "mapa para priorizar vistorias" },
];

const faq = [
  {
    q: "O Urbivis aumenta imposto",
    a: "Não. A alíquota segue sendo do município. O que muda é a informação do imóvel, que passa a refletir a realidade.",
  },
  {
    q: "Isso é seguro do ponto de vista jurídico",
    a: "Sim. Atualizar dado de fato do imóvel é atividade normal de cadastro, feita com prova visual e revisão da sua equipe.",
  },
  {
    q: "Funciona sem cadastro prévio",
    a: "Funciona. Quando não existe base com geometria, criamos lote a lote a partir da imagem de satélite.",
  },
  {
    q: "Preciso trocar meu sistema",
    a: "Não precisa. Entregamos os dados no formato que o seu sistema já lê.",
  },
  {
    q: "Quanto tempo até o primeiro resultado",
    a: "Poucas semanas. Você recebe os primeiros lotes revisados antes do fim do projeto.",
  },
];

function Index() {
  useSmoothScroll();

  return (
    <div className="relative bg-background" style={{ overflowX: "clip" }}>
      <FloatingCta />
      <Hero />
      <Problema />
      <Divergencias />
      <DuasFrentes />
      <ComoFunciona />
      <Juridico />
      <Beneficios />
      <Contexto />
      <Faq />
      <ChamadaFinal />
      <Rodape />
    </div>
  );
}

function FloatingCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: EASE }}
      className="fixed bottom-5 right-5 z-50"
    >
      <WhatsAppButton size="sm" className="shadow-brand-lg">
        Falar agora
      </WhatsAppButton>
    </motion.div>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-svh overflow-hidden bg-brand text-brand-foreground"
    >
      <motion.div style={reducedMotion ? undefined : { y }} className="absolute inset-0 -z-20">
        <picture>
          <source media="(max-width: 639px)" srcSet={heroBairroMobile} />
          <img
            src={heroBairro}
            alt="Vista aérea de ruas estreitas e casas de telha cerâmica em um bairro do interior brasileiro"
            width={1536}
            height={1024}
            fetchPriority="high"
            className="h-full w-full object-cover object-[62%_center]"
          />
        </picture>
      </motion.div>
      <div aria-hidden="true" className="urbivis-hero-shade absolute inset-0 -z-10" />

      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between px-6 pt-8 pb-16 sm:px-10 sm:pt-11 md:pb-24">
        <span className="font-display text-sm font-semibold tracking-[0.28em] uppercase">
          Urbivis
        </span>
        <div className="mt-28 md:mt-40">
          <h1 className="max-w-[52rem] font-display text-[clamp(2rem,7.6vw,5.3rem)] leading-[1.04] font-bold tracking-[-0.055em]">
            {frasesHero.map((frase, linha) => (
              <span key={frase[0]} className="block">
                {frase.map((palavra, i) => (
                  <motion.span
                    key={palavra}
                    initial={reducedMotion ? false : { y: 18 }}
                    animate={{ y: 0 }}
                    transition={{ delay: (linha * 3 + i) * 0.06, duration: 0.42, ease: EASE }}
                    className="mr-[0.24em] inline-block last:mr-0"
                  >
                    {palavra}
                    {i < frase.length - 1 ? " " : ""}
                  </motion.span>
                ))}
                {linha === 0 ? " " : ""}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-brand-foreground/90 sm:text-lg">
            Satélite e cadastro juntos. Você vê onde a realidade do município já mudou.
          </p>
          <div className="mt-7">
            <WhatsAppButton size="lg">Falar no WhatsApp</WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problema() {
  return (
    <section className="bg-background px-6 py-28 sm:px-10 md:py-40">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <h2 className="max-w-xl font-display text-3xl leading-tight font-semibold sm:text-4xl">
          O cadastro envelhece. A cidade não acompanha.
        </h2>
        <div className="mt-14 font-display text-[5.5rem] leading-none font-bold text-accent sm:text-[11rem]">
          <Counter to={30} suffix="" />
          <span className="text-foreground/25">a</span>
          <Counter to={50} suffix="%" />
        </div>
        <p className="mt-6 max-w-sm text-base text-muted-foreground">
          É quanto da base imobiliária costuma estar desatualizada nos municípios brasileiros.
        </p>
        <p className="mt-3 text-xs tracking-widest text-muted-foreground/70 uppercase">
          Fonte Ipea
        </p>
      </motion.div>
    </section>
  );
}

function Divergencias() {
  return (
    <section className="bg-brand px-6 py-20 sm:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
          whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-lg font-display text-3xl leading-tight font-semibold text-brand-foreground sm:text-4xl"
        >
          Quatro formas de perder receita
        </motion.h2>
        <p className="mt-4 text-sm text-brand-foreground/75">Imagens aéreas ilustrativas.</p>

        <div className="mt-9 grid gap-6 sm:grid-cols-2">
          {divergencias.map((d, i) => (
            <motion.article
              key={d.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
              className="overflow-hidden rounded-2xl bg-surface shadow-card transition-[translate,scale,box-shadow] duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.015] hover:shadow-card-hover"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.alt}
                  loading="lazy"
                  decoding="async"
                  width={960}
                  height={640}
                  className="h-full w-full object-cover"
                />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 384 256"
                  className="pointer-events-none absolute inset-0 size-full"
                >
                  {d.limite && (
                    <path
                      d={d.limite}
                      className="urbivis-map-line"
                      vectorEffect="non-scaling-stroke"
                    />
                  )}
                  <path
                    d={d.destaque}
                    className="urbivis-map-highlight"
                    strokeDasharray={d.tracejado ? "5 4" : undefined}
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
              <div className="px-6 py-5 sm:px-7">
                <h3 className="font-display text-xl font-semibold">{d.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DuasFrentes() {
  const frentes = [
    {
      cadastrado: true,
      label: "Já tem cadastro",
      legenda: "Lote para revisão",
      alt: "Quadra com limites cadastrados em ciano e um lote em revisão destacado em âmbar",
      text: "Comparamos a sua base com imagem recente e apontamos cada lote onde a realidade divergiu do registro.",
    },
    {
      cadastrado: false,
      label: "Ainda não tem cadastro",
      legenda: "Traçado inicial",
      alt: "A mesma quadra com o traçado inicial de um único lote indicado em ciano",
      text: "Criamos a base do zero. Desenhamos lote por lote a partir da imagem de satélite do seu município.",
    },
  ];

  return (
    <section className="bg-background px-6 py-20 sm:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="max-w-xl font-display text-3xl leading-tight font-semibold sm:text-4xl"
        >
          Funciona com base antiga ou sem base
        </motion.h2>

        <div className="mt-9 grid gap-6 md:grid-cols-2">
          {frentes.map((f, i) => (
            <motion.figure
              key={f.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
              className="overflow-hidden rounded-2xl bg-surface shadow-card ring-1 ring-border transition-[translate,scale,box-shadow] duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.015] hover:shadow-card-hover"
            >
              <h3 className="px-6 py-5 font-display text-lg font-semibold sm:px-7">{f.label}</h3>
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={bairroCadastro}
                  alt={f.alt}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 1536 1024"
                  className="pointer-events-none absolute inset-0 size-full"
                >
                  {f.cadastrado ? (
                    <>
                      <path
                        d="M17 88L1521 80V938H17Z M17 503L1521 499 M249 87V938 M460 86V938 M690 84V938 M902 83V938 M1113 82V938 M1308 81V938"
                        className="urbivis-map-line"
                        vectorEffect="non-scaling-stroke"
                      />
                      <path
                        d="M690 84L902 83V501L690 502Z"
                        className="urbivis-map-highlight"
                        vectorEffect="non-scaling-stroke"
                      />
                    </>
                  ) : (
                    <>
                      <path
                        d="M902 83V367"
                        className="urbivis-map-line"
                        strokeDasharray="5 4"
                        vectorEffect="non-scaling-stroke"
                      />
                      <path
                        d="M690 502V84L902 83"
                        className="urbivis-map-line"
                        vectorEffect="non-scaling-stroke"
                      />
                      <g className="fill-outline">
                        <circle cx="690" cy="502" r="8" />
                        <circle cx="690" cy="84" r="8" />
                        <circle cx="902" cy="83" r="8" />
                      </g>
                    </>
                  )}
                </svg>
                <span className="absolute bottom-3 left-3 flex items-center gap-2 rounded-md bg-brand/95 px-2.5 py-1.5 text-xs font-semibold text-brand-foreground sm:bottom-4 sm:left-4">
                  <span
                    aria-hidden="true"
                    className={`size-2 rounded-full ${f.cadastrado ? "urbivis-map-key" : "bg-outline"}`}
                  />
                  {f.legenda}
                </span>
              </div>
              <figcaption className="px-6 py-5 text-sm leading-relaxed text-muted-foreground sm:px-7">
                {f.text}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const ref = useRef<HTMLElement>(null);
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    let raf = 0;
    const medir = () => {
      const el = ref.current;
      if (el) {
        const r = el.getBoundingClientRect();
        const total = r.height - window.innerHeight;
        const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
        setProgresso(p);
      }
      raf = requestAnimationFrame(medir);
    };
    raf = requestAnimationFrame(medir);
    return () => cancelAnimationFrame(raf);
  }, []);

  const ativo = Math.min(passos.length - 1, Math.floor(progresso * passos.length));

  return (
    <section ref={ref} className="relative h-[380svh] bg-brand">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden px-6 sm:px-10">
        <div className="absolute inset-0" style={{ transform: `scale(${1.05 + progresso * 0.1})` }}>
          <img
            src={bairroCadastro}
            alt=""
            loading="lazy"
            width={1200}
            height={800}
            className="h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-brand/70" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <h2 className="font-display text-xs tracking-[0.28em] text-brand-foreground/60 uppercase">
            Como funciona
          </h2>
          <div className="relative mt-8 h-[10rem] sm:h-[12rem]">
            {passos.map((p, i) => (
              <div
                key={p.n}
                className="absolute inset-0 transition-all duration-500 ease-out"
                style={{
                  opacity: i === ativo ? 1 : 0,
                  transform: `translateY(${i === ativo ? 0 : i < ativo ? -24 : 24}px)`,
                  pointerEvents: i === ativo ? "auto" : "none",
                }}
              >
                <span className="font-display text-5xl font-bold text-accent sm:text-6xl">
                  {p.n}
                </span>
                <p className="mt-4 max-w-xl font-display text-2xl leading-snug font-semibold text-brand-foreground sm:text-4xl">
                  {p.t}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex gap-2">
            {passos.map((p, i) => (
              <span
                key={p.n}
                className="h-1 w-10 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor:
                    i <= ativo ? "hsl(var(--accent))" : "hsl(var(--brand-foreground) / 0.25)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Juridico() {
  return (
    <section className="relative overflow-hidden bg-brand px-6 py-32 sm:px-10 md:py-48">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 className="font-display text-4xl leading-[1.05] font-bold text-brand-foreground sm:text-6xl">
            Seguro por natureza
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-brand-foreground/80">
            O Urbivis não cria imposto novo. Ele corrige a base de cálculo com prova visual. A lei
            trata de forma diferente quem nunca soube de uma construção e quem já sabia e deixou o
            sistema parado.
          </p>
          <div className="mt-10">
            <WhatsAppButton>Tirar dúvida no WhatsApp</WhatsAppButton>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <svg viewBox="0 0 320 320" className="w-full max-w-md" aria-hidden="true">
            <motion.path
              d="M40 70 L200 40 L280 120 L250 260 L90 285 L30 190 Z"
              fill="none"
              stroke="var(--outline-cyan)"
              strokeWidth="2.5"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.path
              d="M110 130 L205 115 L220 200 L125 215 Z"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeDasharray="6 8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.6, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="beneficios-titulo"
      className="bg-background px-5 py-20 sm:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="beneficios-titulo"
          initial={reducedMotion ? false : { y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="max-w-lg text-3xl leading-tight font-semibold sm:text-5xl"
        >
          O que a prefeitura ganha
        </motion.h2>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4">
          {beneficios.map((b, i) => (
            <motion.li
              key={b.categoria}
              initial={reducedMotion ? false : { y: 14 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
              className={`flex min-w-0 flex-col rounded-2xl p-3.5 shadow-card ring-1 ring-border transition-[translate,box-shadow] duration-300 hover:shadow-card-hover motion-safe:hover:-translate-y-1 sm:rounded-3xl sm:p-6 ${b.destaque ? "bg-brand text-brand-foreground" : "bg-surface text-brand"}`}
            >
              <div className="flex items-center justify-between gap-1">
                <h3 className="text-[0.6875rem] font-semibold tracking-wide sm:text-sm">
                  {b.categoria}
                </h3>
                <b.icon
                  aria-hidden="true"
                  className={`size-7 shrink-0 rounded-lg p-1.5 sm:size-9 sm:p-2 ${b.destaque ? "bg-brand-foreground/10 text-outline" : "bg-secondary text-brand"}`}
                  strokeWidth={1.75}
                />
              </div>
              <div className="mt-5 sm:mt-8">
                <span className="sr-only">{b.valor} </span>
                <span
                  aria-hidden="true"
                  className="block font-display text-6xl leading-[0.9] font-bold tracking-tight tabular-nums sm:text-8xl"
                >
                  {reducedMotion || b.valor === 0 ? (
                    b.valor
                  ) : (
                    <Counter to={b.valor} duration={550} />
                  )}
                </span>
                <p
                  className={`mt-3 max-w-40 text-xs leading-snug sm:mt-4 sm:text-base ${b.destaque ? "text-brand-foreground/85" : "text-muted-foreground"}`}
                >
                  {b.texto}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contexto() {
  return (
    <section className="bg-brand px-6 py-32 sm:px-10 md:py-44">
      <motion.div
        initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto max-w-4xl text-center"
      >
        <p className="font-display text-[3rem] leading-none font-bold text-brand-foreground sm:text-[7rem]">
          <Counter to={10.8} decimals={1} suffix="%" />
        </p>
        <p className="mt-4 font-display text-2xl font-semibold text-accent sm:text-4xl">
          Crescimento médio na arrecadação.
        </p>
        <p className="mx-auto mt-8 max-w-md text-base text-brand-foreground/75">
          Resultado direto de um cadastro atualizado.
        </p>
      </motion.div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-background px-6 py-28 sm:px-10 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="mx-auto max-w-3xl"
      >
        <h2 className="font-display text-3xl leading-tight font-semibold sm:text-4xl">
          Perguntas frequentes
        </h2>
        <Accordion type="single" collapsible className="mt-10">
          {faq.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-border">
              <AccordionTrigger className="text-left font-display text-base font-semibold sm:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground sm:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}

function ChamadaFinal() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand px-6 sm:px-10">
      <img
        src={heroBairro}
        alt="Bairro visto de cima ao fim da tarde"
        loading="lazy"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand/80 to-brand" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <h2 className="font-display text-[2.6rem] leading-[1.05] font-bold text-brand-foreground sm:text-6xl">
          Veja sua cidade como ela é hoje
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg text-brand-foreground/80">
          Converse com a nossa equipe. Mostramos um recorte do seu município.
        </p>
        <div className="mt-10 flex justify-center">
          <WhatsAppButton size="lg">Falar no WhatsApp</WhatsAppButton>
        </div>
      </motion.div>
    </section>
  );
}

function Rodape() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 bg-brand px-6 py-10 sm:flex-row sm:px-10">
      <span className="font-display text-lg font-semibold tracking-tight text-brand-foreground">
        Urbivis
      </span>
      <WhatsAppButton size="sm">WhatsApp</WhatsAppButton>
    </footer>
  );
}
