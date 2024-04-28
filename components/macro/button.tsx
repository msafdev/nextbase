"use client";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const DimensionButton = ({
  onClick,
  children = "Button",
  className = "",
  theme = "default",
}: {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  theme?: "default" | "secondary" | "outline";
}) => {
  const themeClasses = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline:
      "border-primary bg-accent text-accent-foreground [box-shadow:0_4px_0_0_hsl(var(--foreground))] hover:[box-shadow:0_1px_0_0_hsl(var(--foreground))] hover:translate-y-1",
  };

  return (
    <button
      className={cn(
        "anim flex items-center gap-x-2 rounded-sm border border-supabase px-3 py-1 font-medium [box-shadow:0_4px_0_0_hsl(var(--supabase))] hover:[box-shadow:0_1px_0_0_hsl(var(--supabase))] hover:translate-y-1",
        className,
        themeClasses[theme],
      )}
      onClick={
        onClick
          ? onClick
          : () => {
              console.log("Button clicked");
            }
      }
    >
      {children}
    </button>
  );
};

const StyledButton = ({
  href,
  children = "Link",
  variant = "default",
  className = "",
  theme = "default",
}: {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "3d";
  theme?: "default" | "secondary" | "outline";
}) => {
  const router = useRouter();

  const handleHref = (url: string) => () => {
    router.push(url || "/", { scroll: false });
  };

  if (variant === "3d") {
    return (
      <DimensionButton
        onClick={href ? handleHref(href) : undefined}
        className={cn("", className)}
        theme={theme}
      >
        {children}
      </DimensionButton>
    );
  }

  return <div>StyledButton</div>;
};
export default StyledButton;
