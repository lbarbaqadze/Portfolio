"use client";

import { motion } from "motion/react";

const ACCENT = {
  core: "rgba(255, 255, 255, 0.95)",
  node: "rgba(255, 255, 255, 0.5)",
  ring: "rgba(255, 255, 255, 0.12)",
  pulse: "rgba(255, 255, 255, 0.25)",
  lineLow: "rgba(255, 255, 255, 0.05)",
  lineMid: "rgba(255, 255, 255, 0.35)",
};

const techLabels = ["React.js", "Next.js", "Node.js", "Express.js"] as const;

const nodes = [
  { id: "core", x: 250, y: 240, size: 12, delay: 0 },
  { id: "n1", x: 100, y: 110, size: 6, delay: 0.15 },
  { id: "n2", x: 400, y: 100, size: 6, delay: 0.3 },
  { id: "n3", x: 60, y: 250, size: 6, delay: 0.45 },
  { id: "n4", x: 440, y: 240, size: 6, delay: 0.6 },
  { id: "n5", x: 140, y: 380, size: 6, delay: 0.75 },
  { id: "n6", x: 360, y: 370, size: 6, delay: 0.9 },
  { id: "n7", x: 250, y: 60, size: 5, delay: 1.05 },
  { id: "n8", x: 250, y: 410, size: 5, delay: 1.2 },
] as const;

const edges: [string, string][] = [
  ["core", "n1"],
  ["core", "n2"],
  ["core", "n3"],
  ["core", "n4"],
  ["core", "n5"],
  ["core", "n6"],
  ["core", "n7"],
  ["core", "n8"],
  ["n1", "n3"],
  ["n2", "n4"],
  ["n3", "n5"],
  ["n4", "n6"],
  ["n5", "n8"],
  ["n6", "n8"],
  ["n7", "n1"],
  ["n7", "n2"],
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

function NetworkLine({
  from,
  to,
  index,
}: {
  from: string;
  to: string;
  index: number;
}) {
  const a = getNode(from);
  const b = getNode(to);

  return (
    <motion.line
      x1={a.x}
      y1={a.y}
      x2={b.x}
      y2={b.y}
      stroke="url(#line-gradient)"
      strokeWidth="1.5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: [0.2, 0.6, 0.2] }}
      transition={{
        pathLength: { duration: 1.5, delay: index * 0.05, ease: "easeOut" },
        opacity: { duration: 3, delay: index * 0.1, repeat: Infinity, ease: "easeInOut" },
      }}
    />
  );
}

function NetworkNode({
  x,
  y,
  size,
  delay,
  isCore,
}: {
  x: number;
  y: number;
  size: number;
  delay: number;
  isCore?: boolean;
}) {
  return (
    <g>
      {isCore && (
        <motion.circle
          cx={x}
          cy={y}
          r={32}
          fill="none"
          stroke={ACCENT.ring}
          strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
          }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />
      )}
      <motion.circle
        cx={x}
        cy={y}
        r={size}
        fill={isCore ? ACCENT.core : ACCENT.node}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [1, isCore ? 1.25 : 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          scale: { duration: isCore ? 3 : 2.5, repeat: Infinity, ease: "easeInOut", delay },
          opacity: { duration: isCore ? 3 : 2.5, repeat: Infinity, ease: "easeInOut", delay },
        }}
        style={{ transformOrigin: `${x}px ${y}px` }}
      />
      {isCore && (
        <motion.circle
          cx={x}
          cy={y}
          r={size + 6}
          fill="none"
          stroke={ACCENT.pulse}
          strokeWidth="1.5"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />
      )}
    </g>
  );
}

const labelPositions = [
  { top: "0%", left: "-2%" },
  { top: "-2%", right: "-2%" },
  { bottom: "4%", left: "-4%" },
  { bottom: "0%", right: "-4%" },
] as const;

export function HeroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto flex h-[300px] w-full max-w-[340px] items-center justify-center overflow-visible sm:h-[340px] sm:max-w-[380px] lg:h-[min(400px,55vh)] lg:max-w-md xl:h-[min(440px,58vh)] xl:max-w-lg"
    >
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full scale-95 sm:scale-100 lg:scale-[0.88] xl:scale-90"
      >
        <div className="absolute top-1/2 left-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/4 blur-3xl" />
        <div className="absolute top-1/4 right-1/5 h-32 w-32 rounded-full bg-neutral-500/5 blur-2xl" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border border-dashed border-neutral-700/40"
        />

        <svg viewBox="0 0 500 480" className="relative h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={ACCENT.lineLow} />
              <stop offset="50%" stopColor={ACCENT.lineMid} />
              <stop offset="100%" stopColor={ACCENT.lineLow} />
            </linearGradient>
          </defs>

          {edges.map(([from, to], i) => (
            <NetworkLine key={`${from}-${to}`} from={from} to={to} index={i} />
          ))}

          {nodes.map((node) => (
            <NetworkNode
              key={node.id}
              x={node.x}
              y={node.y}
              size={node.size}
              delay={node.delay}
              isCore={node.id === "core"}
            />
          ))}

          <motion.text
            x={250}
            y={247}
            textAnchor="middle"
            fill="white"
            fontSize="16"
            fontFamily="monospace"
            fontWeight="bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            {"</>"}
          </motion.text>
        </svg>

        {techLabels.map((label, i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
            className="absolute rounded-full border border-neutral-800/80 bg-neutral-950/70 px-2 py-0.5 text-[10px] font-medium text-neutral-400 backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs"
            style={labelPositions[i]}
          >
            {label}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
