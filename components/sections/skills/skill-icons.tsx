import type { ReactElement, SVGProps } from "react";
import {
  Accessibility,
  Blocks,
  Code2,
  Gauge,
  GitBranch,
  KeyRound,
  Layers,
  Lightbulb,
  Network,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type IconProps = SVGProps<SVGSVGElement>;

function ReactIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.2"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.2"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

function NextIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm3.6 14.7h-1.7l-4.3-6.4v6.4H8.2V7.3h1.8l4.2 6.3V7.3h1.4Z" />
    </svg>
  );
}

function TsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M3 3h18v18H3V3Zm9.4 8.2H8.7v1.4h2.1v5.7h1.7v-5.7h2.1v-1.4h-2.2Zm5.2 2.4c0-.9-.5-1.5-1.6-1.5-.8 0-1.4.3-1.9.8l1 .9c.3-.3.6-.5 1-.5.4 0 .6.2.6.5 0 .3-.2.5-.8.7l-.9.3c-1 .3-1.6.9-1.6 1.9 0 1.1.9 1.9 2.2 1.9.9 0 1.6-.3 2.1-.9l-1-.9c-.3.3-.7.5-1.1.5-.5 0-.8-.2-.8-.6 0-.3.2-.5.8-.7l.9-.3c1.1-.4 1.7-1 1.7-2.1Z" />
    </svg>
  );
}

function NodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.2 3.5 7.1v9.8L12 21.8l8.5-4.9V7.1L12 2.2Zm0 2.3 6.2 3.6v7.2L12 18.9l-6.2-3.6V8.1L12 4.5Z" />
    </svg>
  );
}

function MongoIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12.1 2s3.4 3.2 3.4 8.4c0 4-2 6.6-3.4 7.9v3.5h-.3V18.3C10.4 17 8.4 14.4 8.4 10.4 8.4 5.2 11.8 2 11.8 2h.3Z" />
    </svg>
  );
}

function TailwindIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 6.5c-2.7 0-4.4 1.3-5 4 1-1.3 2.1-1.8 3.4-1.5.7.2 1.3.7 1.8 1.3.9 1.1 1.9 2.2 4.1 2.2 2.7 0 4.4-1.3 5-4-1 1.3-2.1 1.8-3.4 1.5-.7-.2-1.3-.7-1.8-1.3-.9-1.1-1.9-2.2-4.1-2.2Zm-5 5.5c-2.7 0-4.4 1.3-5 4 1-1.3 2.1-1.8 3.4-1.5.7.2 1.3.7 1.8 1.3.9 1.1 1.9 2.2 4.1 2.2 2.7 0 4.4-1.3 5-4-1 1.3-2.1 1.8-3.4 1.5-.7-.2-1.3-.7-1.8-1.3-.9-1.1-1.9-2.2-4.1-2.2Z" />
    </svg>
  );
}

const lucideSkillIcons: Record<string, LucideIcon> = {
  redux: Layers,
  rtk: Network,
  responsive: Smartphone,
  express: Network,
  api: Network,
  jwt: KeyRound,
  git: GitBranch,
  code: Code2,
  postman: Network,
  architecture: Blocks,
  gauge: Gauge,
  accessibility: Accessibility,
  blocks: Blocks,
  wrench: Wrench,
  lightbulb: Lightbulb,
};

const svgSkillIcons: Record<string, (props: IconProps) => ReactElement> = {
  react: ReactIcon,
  nextjs: NextIcon,
  typescript: TsIcon,
  nodejs: NodeIcon,
  mongodb: MongoIcon,
  tailwind: TailwindIcon,
};

export function SkillGlyph({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const SvgIcon = svgSkillIcons[name];
  if (SvgIcon) {
    return <SvgIcon className={className ?? "size-5"} />;
  }

  const Lucide = lucideSkillIcons[name] ?? Code2;
  return <Lucide className={className ?? "size-5"} aria-hidden />;
}
