type CoffeeBeanIconProps = {
  size?: number;
  className?: string;
};

export function CoffeeBeanIcon({ size = 16, className = '' }: CoffeeBeanIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 16 16"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1.75c3.45 0 6.1 3.2 6.1 6.9S11.45 15.55 8 15.55 1.9 12.35 1.9 8.65 4.55 1.75 8 1.75Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M8 3.4c-1.6 1.7-1.6 7.1 0 9.2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
