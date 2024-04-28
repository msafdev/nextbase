import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import LoginForm from "@/components/macro/form";

const Page = async () => {
  const supabase = createClient();
  const { data: user } = await supabase.auth.getUser();

  if (user.user) {
    redirect("/");
  }

  return (
    <main className="relative flex h-auto w-full grow flex-col items-center justify-center gap-y-3">
      <LoginForm />
    </main>
  );
};

export default Page;
