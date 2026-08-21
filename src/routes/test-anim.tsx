import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Route = createFileRoute("/test-anim")({
  head: () => ({
    meta: [
      { title: "Teste de animação" },
      { name: "description", content: "Rota temporária de teste de animação." },
      { property: "og:title", content: "Teste de animação" },
      { property: "og:description", content: "Rota temporária de teste de animação." },
    ],
  }),
  component: Test,
});

function A() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);
  return (
    <div ref={ref} className="h-[300svh] bg-brand">
      <motion.div style={{ y }} className="sticky top-0 h-screen text-brand-foreground">
        pinned
      </motion.div>
    </div>
  );
}

function B() {
  return (
    <motion.div
      initial={{ opacity: 0, clipPath: "inset(12% 0 12% 0)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className="h-64 bg-accent"
    >
      clip
    </motion.div>
  );
}

function Test() {
  return (
    <div>
      <A />
      <B />
    </div>
  );
}
