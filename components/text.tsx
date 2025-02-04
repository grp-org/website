import { useRef } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";

export function Title(props: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <h1
      ref={ref}
      className={`font-wide z-50 text-3xl leading-tight tracking-tighter uppercase sm:text-3xl md:text-5xl lg:text-6xl ${props.className}`}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {props.children}
    </h1>
  );
}

export function Paragraph(props: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <p
      ref={ref}
      className={`text-muted-foreground text-lg sm:text-xl ${props.className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
      }}
    >
      {props.children}
    </p>
  );
}

export function AnimatedLink({ children, href }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Link
      ref={ref}
      className="hover:underline"
      href={href}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
      }}
    >
      {children}
    </Link>
  );
}
