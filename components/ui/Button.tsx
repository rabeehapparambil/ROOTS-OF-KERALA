import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
};

type AnchorButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

function getVariantClass(variant: SharedProps["variant"]) {
  switch (variant) {
    case "secondary":
      return "border border-[color:var(--line)] bg-white/60 text-coconut shadow-[0_18px_44px_var(--shadow)] hover:border-[rgba(61,43,31,0.3)] hover:bg-white/80";
    case "ghost":
      return "border border-transparent bg-transparent text-coconut hover:bg-white/40";
    case "primary":
    default:
      return "bg-coconut text-bg shadow-[0_24px_52px_var(--shadow)] hover:-translate-y-0.5 hover:bg-[#4a3424]";
  }
}

function getBaseClass(fullWidth?: boolean) {
  return cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-[0.02em]",
    "focus-visible:outline-none",
    fullWidth && "w-full",
  );
}

export default function Button(props: AnchorButtonProps | NativeButtonProps) {
  const variantClass = getVariantClass(props.variant);
  const baseClass = cn(getBaseClass(props.fullWidth), variantClass, props.className);

  if ("href" in props && props.href) {
    const { children, href, ...anchorProps } = props;

    return (
      <a href={href} className={baseClass} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { children, type = "button", ...buttonProps } = props as NativeButtonProps;

  return (
    <button type={type} className={baseClass} {...buttonProps}>
      {children}
    </button>
  );
}
