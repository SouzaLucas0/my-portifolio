import { cn } from "@/src/lib/utils";
import type React from "react";

interface StarProps {
  count?: number
  // isScrolling prop não é mais necessária para a animação das estrelas
}

// Componente individual da estrela
const Star = ({ style, className }: { style: React.CSSProperties; className?: string }) => (
  <div
    className={cn(
      "absolute rounded-full bg-white opacity-[0.05]", // Opacidade fixa e muito baixa
      className,
    )}
    style={style}
  />
)

export default function Stars({ count = 150 }: StarProps) {
  const stars = Array.from({ length: count }).map((_, i) => {
    const size = Math.random() * 3 + 1 // 1px a 4px
    // delay e duration não são mais necessários sem animação
    return (
      <Star
        key={i}
        style={{
          width: size,
          height: size,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        className={Math.random() > 0.8 ? "blur-[0.5px]" : ""} // Algumas estrelas ligeiramente borradas
      />
    )
  })

  return <>{stars}</>
}
