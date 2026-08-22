import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
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
import { Banknote, Clock, FileCheck, Map, ShieldCheck, Wallet } from "lucide-react";

import heroBairro from "@/assets/hero-bairro.jpg";
import cardAmpliacao from "@/assets/card-ampliacao.jpg";
import cardConstrucao from "@/assets/card-construcao.jpg";
import cardPiscina from "@/assets/card-piscina.jpg";
import cardDemolicao from "@/assets/card-demolicao.jpg";
import frenteCom from "@/assets/frente-com-cadastro.jpg";
import frenteSem from "@/assets/frente-sem-cadastro.jpg";

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
  { img: cardAmpliacao, title: "Casa ampliada", text: "A casa cresceu. O registro ficou no tamanho antigo." },
  { img: cardConstrucao, title: "Obra invisível", text: "Existe construção no terreno que a base não conhece." },
  { img: cardPiscina, title: "Piscina nova", text: "Benfeitoria no quintal que nunca entrou no sistema." },
  { img: cardDemolicao, title: "Imóvel demolido", text: "A casa saiu. A cobrança continuou igual." },
];

const passos = [
  { n: "01", t: "Recebemos sua base atual, mesmo antiga" },
  { n: "02", t: "Comparamos cada lote com satélite recente" },
  { n: "03", t: "Entregamos mapa com pontos de revisão" },
  { n: "04", t: "Sua equipe valida e atualiza o sistema" },
];

const beneficios = [
  { icon: Wallet, t: "Mais receita sem criar imposto novo" },
  { icon: Map, t: "Mapa completo da cidade real" },
  { icon: ShieldCheck, t: "Decisão apoiada em prova visual" },
  { icon: Banknote, t: "Cobrança mais justa entre vizinhos" },
  { icon: FileCheck, t: "Base pronta para obras e zoneamento" },
  { icon: Clock, t: "Resultado em semanas, não anos" },
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
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  const palavras = ["A", "cidade", "cresceu.", "O", "cadastro", "ficou", "parado."];

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-brand">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroBairro}
          alt="Vista aérea de um bairro residencial com telhados de telha cerâmica ao fim da tarde"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/35 to-brand/25" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-10 md:pb-24"
      >
        <span className="font-display text-sm tracking-[0.28em] text-brand-foreground/70 uppercase">
          Urbivis
        </span>
        <h1 className="mt-5 max-w-3xl font-display text-[2.6rem] leading-[1.05] font-bold text-brand-foreground sm:text-6xl md:text-7xl">
          {palavras.map((p, i) => (
            <motion.span
              key={p + i}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.09, duration: 0.55, ease: EASE }}
              className="mr-[0.28em] inline-block"
            >
              {p}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5, ease: EASE }}
          className="mt-6 max-w-md text-base text-brand-foreground/80 sm:text-lg"
        >
          Satélite e cadastro juntos. Você vê onde a realidade do município já mudou.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.5, ease: EASE }}
          className="mt-9"
        >
          <WhatsAppButton size="lg">Falar no WhatsApp</WhatsAppButton>
        </motion.div>
      </motion.div>
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
        <p className="mt-3 text-xs tracking-widest text-muted-foreground/70 uppercase">Fonte Ipea</p>
      </motion.div>
    </section>
  );
}

function Divergencias() {
  return (
    <section className="bg-brand px-6 py-28 sm:px-10 md:py-40">
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {divergencias.map((d, i) => (
            <motion.article
              key={d.title}
              initial={{ opacity: 0, clipPath: "inset(12% 0 12% 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
              whileHover={{ scale: 1.02, y: -6 }}
              className="group overflow-hidden rounded-3xl bg-surface shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <img
                src={d.img}
                alt={`Imagem aérea mostrando ${d.title.toLowerCase()}`}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-[4/3] w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="p-7">
                <h3 className="font-display text-xl font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
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
      img: frenteCom,
      label: "Já tem cadastro",
      text: "Comparamos a sua base com imagem recente e apontamos cada lote onde a realidade divergiu do registro.",
    },
    {
      img: frenteSem,
      label: "Ainda não tem cadastro",
      text: "Criamos a base do zero. Desenhamos lote por lote a partir da imagem de satélite do seu município.",
    },
  ];

  return (
    <section className="bg-background px-6 py-28 sm:px-10 md:py-40">
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

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {frentes.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
              whileHover={{ scale: 1.015, y: -6 }}
              className="overflow-hidden rounded-3xl bg-surface shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <p className="px-7 pt-7 font-display text-xs tracking-[0.22em] text-accent uppercase">
                {f.label}
              </p>
              <img
                src={f.img}
                alt={`Vista aérea de lotes residenciais, cenário ${f.label.toLowerCase()}`}
                loading="lazy"
                width={1280}
                height={1600}
                className="mt-5 aspect-[4/5] w-full object-cover"
              />
              <p className="p-7 text-sm text-muted-foreground">{f.text}</p>
            </motion.div>
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
        <div
          className="absolute inset-0"
          style={{ transform: `scale(${1.05 + progresso * 0.1})` }}
        >
          <img
            src={frenteCom}
            alt="Camada de contornos de lotes sobre fotografia aérea"
            loading="lazy"
            width={1280}
            height={1600}
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
  return (
    <section className="bg-background px-6 py-28 sm:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="max-w-lg font-display text-3xl leading-tight font-semibold sm:text-4xl"
        >
          O que a prefeitura ganha
        </motion.h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b, i) => (
            <motion.div
              key={b.t}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="rounded-3xl bg-surface p-8 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <b.icon className="size-7 text-accent" strokeWidth={1.4} />
              <p className="mt-6 font-display text-lg leading-snug font-semibold">{b.t}</p>
            </motion.div>
          ))}
        </div>
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
          <Counter to={73.45} decimals={2} prefix="R$ " />
        </p>
        <p className="mt-4 font-display text-2xl font-semibold text-accent sm:text-4xl">bilhões</p>
        <p className="mx-auto mt-8 max-w-md text-base text-brand-foreground/75">
          É o potencial de IPTU que os municípios brasileiros deixam de arrecadar por ano.
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
