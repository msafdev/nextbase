"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const UnderlineLink = ({
  href = "/",
  children = "Link",
  className = "",
}: {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();

  return (
    <Link
      aria-label={`Go to ${href}`}
      href={href}
      className={cn("group flex w-fit flex-col text-center", className)}
    >
      {children}
      <div
        className={`anim h-0.5 bg-supabase group-hover:w-full ${
          pathname === href ? "w-full" : "w-0"
        }`}
      />
    </Link>
  );
};

const StyledLink = ({
  href,
  children = "Link",
  variant = "default",
  className = "",
}: {
  href: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "underline";
}) => {
  if (variant === "underline") {
    return (
      <UnderlineLink href={href} className={cn("", className)}>
        {children}
      </UnderlineLink>
    );
  }

  return (
    <Link
      aria-label={`Go to ${href}`}
      href={href}
      className={cn("group flex w-fit text-center", className)}
    >
      {children}
    </Link>
  );
};

export default StyledLink;
