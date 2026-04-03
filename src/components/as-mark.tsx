export function ASMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 288 160"
      aria-hidden
      {...props}
    >
      {/* A */}
      <rect x="32"  y="0"   width="64"  height="32" fill="currentColor" />
      <rect x="0"   y="32"  width="32"  height="64" fill="currentColor" />
      <rect x="96"  y="32"  width="32"  height="64" fill="currentColor" />
      <rect x="0"   y="96"  width="128" height="32" fill="currentColor" />
      <rect x="0"   y="128" width="32"  height="32" fill="currentColor" />
      <rect x="96"  y="128" width="32"  height="32" fill="currentColor" />
      {/* S */}
      <rect x="160" y="0"   width="128" height="32" fill="currentColor" />
      <rect x="160" y="32"  width="32"  height="48" fill="currentColor" />
      <rect x="256" y="80"  width="32"  height="48" fill="currentColor" />
      <rect x="160" y="128" width="128" height="32" fill="currentColor" />
    </svg>
  );
}
