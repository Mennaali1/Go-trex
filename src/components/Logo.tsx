import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const sizes = {
  sm: { width: 120, height: 40, img: "h-8 w-auto" },
  md: { width: 160, height: 53, img: "h-10 w-auto" },
  lg: { width: 220, height: 73, img: "h-14 sm:h-16 w-auto" },
};

export default function Logo({ size = "md", showText = false, className = "" }: LogoProps) {
  const { width, height, img } = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.jpeg"
        alt="GO TREX for Export"
        width={width}
        height={height}
className={`${img} object-contain [mix-blend-mode:screen]`}        priority={size === "lg"}
      />
      {showText && (
        <div className="hidden sm:block">
          <p className="text-white font-display font-semibold text-sm leading-none">GO TREX</p>
          <p className="text-brand-300 text-xs tracking-widest uppercase mt-0.5">for Export</p>
        </div>
      )}
    </div>
  );
}
