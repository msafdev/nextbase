"use client";

import { createClient } from "../supabase/client";

const OAuthSignIn = async ({ provider }: { provider: "github" | "google" }) => {
  const supabase = createClient();
  const { data: user, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${location.origin}/auth/callback`,
    },
  });

  if (error) {
    console.error(error);
    return { error: "Sign in failed" };
  }

  return { user, data: "Sign in successful" };
};

const signOut = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return { error: "Sign out failed" };
  }

  location.reload();
  return { data: "Sign out successful" };
};

export { OAuthSignIn, signOut };
