import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const MESSAGE =
  "Ola, sou gestor publico e quero entender como o Urbivis pode atualizar o cadastro imobiliario do meu municipio.";

export const WHATSAPP_URL = `https://wa.me/5587988758805?text=${encodeURIComponent(MESSAGE)}`;

type Props = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function WhatsAppButton({ children, size = "md", className }: Props) {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer noopener"
      initial={false}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full bg-accent font-medium text-accent-foreground shadow-brand transition-shadow duration-300 hover:shadow-brand-lg",
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-base",
        size === "lg" && "px-8 py-4 text-lg",
        className,
      )}
    >
      <MessageCircle
        className={cn(
          "transition-transform duration-300 group-hover:rotate-12",
          size === "sm" ? "size-4" : "size-5",
        )}
        strokeWidth={1.75}
      />
      {children}
    </motion.a>
  );
}
