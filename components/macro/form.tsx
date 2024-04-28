"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { OAuthSignIn } from "@/lib/function/auth";

import { FaGoogle, FaGithub } from "react-icons/fa6";

const LoginForm = () => {
  return (
    <Card className="anim mx-auto w-full max-w-xs overflow-hidden bg-transparent">
      <CardHeader className="anim rounded-t-lg border-b bg-popover/0 backdrop-blur-sm">
        <CardTitle className="text-xl text-popover-foreground">
          Sign In
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Sign in to access your account and start building your app.
        </CardDescription>
      </CardHeader>
      <CardContent className="anim bg-background p-3">
        <div className="grid gap-3">
          <form>
            <Button
              onClick={() => OAuthSignIn({ provider: "github" })}
              variant="default"
              className="anim w-full justify-between"
            >
              <FaGithub className="text-supabase" />
              <span className="mx-auto text-primary-foreground">
                Sign up with GitHub
              </span>
            </Button>
          </form>
          <Button
            variant="default"
            className="anim w-full justify-between"
            onClick={() => OAuthSignIn({ provider: "google" })}
          >
            <FaGoogle className="text-supabase" />
            <span className="mx-auto text-primary-foreground">
              Sign up with Google
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default LoginForm;
