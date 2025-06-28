"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { LoadingSpinner } from "@/components/loading-spinner";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

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
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] to-[#1e1e1e]">
        <Card className="w-full max-w-md rounded-3xl shadow-2xl border border-white/10 bg-black/60 backdrop-blur-xl animate-fade-in flex flex-col items-center">
          <h1 className="text-3xl font-bold text-white ">Hoş Geldin!</h1>
          <CardContent className="flex flex-col items-center gap-4">
            <p className="text-neutral-400 text-center">
              Giriş yapmak için aşağıdaki butonu kullan.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 pb-8 w-full">
            <Button
              onClick={() => router.push("/auth/login")}
              className="text-lg w-full cursor-pointer"
            >
              Giriş Yap
            </Button>
          </CardFooter>
        </Card>
      </main>
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
