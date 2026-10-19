import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Ook bruikbaar op links: <Link className={buttonVariants({ variant: "secondary" })}>
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 font-semibold whitespace-nowrap transition-colors select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-strong disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "rounded-btn bg-brand-strong text-white hover:bg-brand-strong-hover",
        secondary:
          "rounded-btn border-2 border-brand-strong bg-white text-brand-strong hover:bg-brand-tint",
        link: "rounded-sm text-brand-strong underline-offset-4 hover:underline",
        // Aliassen voor bestaande code
        default:
          "rounded-btn bg-brand-strong text-white hover:bg-brand-strong-hover",
        outline:
          "rounded-btn border-2 border-brand-strong bg-white text-brand-strong hover:bg-brand-tint",
      },
      size: {
        default: "min-h-12 px-6 text-base",
        lg: "min-h-14 px-8 text-lg",
        sm: "min-h-10 px-4 text-sm",
      },
    },
    compoundVariants: [
      { variant: "link", className: "min-h-0 px-0" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
