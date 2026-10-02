type BeanIconProps = {
  className?: string;
};

export function BeanIcon({ className }: BeanIconProps) {
  return (
    <svg
      viewBox="0 0 32 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 10c0-4.5 6-8 14-8s14 3.5 14 8-6 8-14 8S2 14.5 2 10Z" />
      <path d="M13 3c-3 3-3 4 0 7s3 4 0 7" />
    </svg>
  );
}
