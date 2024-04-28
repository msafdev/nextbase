import Link from "next/link";

import { createClient } from "@/lib/supabase/server";

import StyledLink from "@/components/macro/link";
import DarkMode from "@/components/macro/dark-mode";
import Profile from "@/components/macro/profile";

import { LuSparkle } from "react-icons/lu";

const Navbar = async () => {
  const supabase = createClient();
  const { data: user } = await supabase.auth.getUser();

  return (
    <header className="anim px-auto absolute left-0 top-0 z-20 flex w-full items-center justify-between gap-x-4 bg-background/20 py-4 backdrop-blur-md md:gap-x-8 md:py-8">
      <Link href={"/"} className="group flex items-center">
        <LuSparkle className="anim h-7 w-7 rotate-12 fill-supabase text-supabase group-hover:rotate-45 md:h-9 md:w-9" />
      </Link>
      <DarkMode className="ml-auto" />
      {user.user ? (
        <Profile user={user.user} />
      ) : (
        <StyledLink
          href="/login"
          variant="underline"
          className="text-base font-medium md:text-lg"
        >
          Login
        </StyledLink>
      )}
    </header>
  );
};

export default Navbar;
