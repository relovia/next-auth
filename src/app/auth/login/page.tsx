"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { LogIn } from "lucide-react";
import { LoadingSpinner } from "@/components/loading-spinner";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && session) {
      const role = session.user.role;

      if (role === "admin") {
        router.replace("/admin");
      } else {
        router.replace("/dashboard");
      }
    }
  }, [status, session, router]);

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800">
      <Card className="w-full max-w-md rounded-3xl shadow-2xl border border-white/10 bg-black/60 backdrop-blur-xl animate-fade-in">
        <CardHeader className="flex flex-col items-center gap-2 pt-8 pb-2">
          <h1 className="text-3xl font-bold text-white">Giriş Yap</h1>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <p className="text-neutral-400 text-center">
            Devam etmek için Auth0 ile giriş yap:
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 pb-8 w-full">
          <Button
            onClick={() => signIn("auth0", { prompt: "login" })}
            className="text-lg w-full cursor-pointer"
          >
            <LogIn className="w-5 h-5 mr-2" />
            Auth0 ile Giriş Yap
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
