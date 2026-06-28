import { ReactNode } from "react";

export default function Marquee({ children, reverse = false }: { children: ReactNode; reverse?: boolean }) {
  return (
    <div className="marquee" aria-hidden="false">
      <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>
        {children}
        {children}
      </div>
    </div>
  );
}
