"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { UserPlus, LogOut } from "lucide-react";
import { LoadingSpinner } from "@/components/loading-spinner";

export default function Home() {
  const { data: session, status } = useSession();

  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] to-[#1e1e1e]">
      <div className="bg-black/60 border border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6 max-w-md w-full animate-fade-in">
        {children}
      </div>
    </main>
  );

  if (status === "loading") {
    return (
      <Wrapper>
        <LoadingSpinner />
      </Wrapper>
    );
  }

  if (!session) {
    return (
      <Wrapper>
        <h1 className="text-4xl font-extrabold text-white drop-shadow-md">
          Hoş Geldin!
        </h1>
        <p className="text-neutral-400 text-center leading-relaxed">
          Giriş yapmak veya kayıt olmak için aşağıdaki butonları kullan.
        </p>
        <div className="flex flex-col gap-4 w-full">
          <Button
            onClick={() => signIn("auth0", { prompt: "select_account" })}
            className="w-full text-lg cursor-pointer"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Giriş / Kayıt Ol
          </Button>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h1 className="text-4xl font-extrabold text-white drop-shadow-md">
        Hoş geldin, {session.user?.name}!
      </h1>
      <p className="text-neutral-400 text-center leading-relaxed">
        Başarıyla giriş yaptın. Dilersen çıkış yapabilirsin.
      </p>
      <Button
        onClick={() => signOut({ callbackUrl: "/auth/login" })}
        variant="destructive"
        className="w-full text-lg cursor-pointer"
      >
        <LogOut className="w-5 h-5 mr-2" />
        Çıkış Yap
      </Button>
    </Wrapper>
  );
}
