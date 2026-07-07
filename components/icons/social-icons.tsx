import type { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.06h2.7l.4-3.13h-3.1V7.8c0-.9.25-1.52 1.55-1.52h1.66V3.48A22.4 22.4 0 0 0 14.2 3.3c-2.42 0-4.08 1.48-4.08 4.19v2.32H7.4v3.13h2.72V21h3.38Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.6a2.7 2.7 0 0 0-1.9-1.9C18 5.2 12 5.2 12 5.2s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 9.3 2 12 2 12s0 2.7.4 4.4c.2 1 1 1.7 1.9 1.9 1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.4.4-4.4s0-2.7-.4-4.4ZM10 15.3V8.7l5.2 3.3-5.2 3.3Z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m4 3 6.6 8.6L4.2 21h2.4l5.2-6.5L16.3 21H20l-6.9-9L19.1 3h-2.4l-4.8 6-4.4-6H4Z" />
    </svg>
  );
}
