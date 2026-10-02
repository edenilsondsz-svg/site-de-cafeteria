import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primario" | "secundario" | "texto";

const base =
  "inline-flex items-center justify-center text-label font-semibold transition-colors duration-150 disabled:opacity-45 disabled:pointer-events-none";

const variantClasses: Record<Variant, string> = {
  primario:
    "rounded-full bg-caramelo px-6 py-3 text-creme hover:bg-caramelo-escuro",
  secundario:
    "rounded-full border-[1.5px] border-espresso px-6 py-3 text-espresso hover:bg-espresso/[0.06]",
  texto: "text-espresso underline-offset-4 hover:underline",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  variant = "primario",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorProps } = props;
    return <a href={href} className={classes} {...anchorProps} />;
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;
  return <button type={type} className={classes} {...buttonProps} />;
}
