"use client";

import { useSession } from "next-auth/react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] to-[#1e1e1e]">
        <Card className="w-full max-w-md rounded-3xl shadow-2xl border border-white/10 bg-black/60 backdrop-blur-xl animate-fade-in text-center p-6">
          <CardHeader>
            <h2 className="text-white text-2xl font-semibold">
              Giriş Yapmalısınız
            </h2>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-400">
              Bu sayfayı görüntülemek için lütfen giriş yapın.
            </p>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] to-[#1e1e1e]">
      <Card className="w-full max-w-md rounded-3xl shadow-2xl border border-white/10 bg-black/60 backdrop-blur-xl animate-fade-in">
        <CardHeader className="flex flex-col items-center gap-4 pt-8 pb-4">
          <h1 className="text-white font-bold text-2xl">ADMIN PANEL</h1>
          {session.user?.image && (
            <Image
              src={session.user.image}
              alt={session.user.name || "Kullanıcı görseli"}
              className="rounded-full border-4 border-indigo-400 shadow-lg"
              width={96}
              height={96}
            />
          )}
          <h2 className="text-2xl font-bold text-white drop-shadow-md">
            {session.user?.name}
          </h2>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-2 pb-8">
          <span className="text-neutral-300 text-base">
            <b>Email:</b> {session.user?.email}
          </span>
          <span className="text-neutral-400 text-sm">
            <b>Oturum Bitiş:</b>{" "}
            {session.expires &&
              new Date(session.expires).toLocaleString("tr-TR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
          </span>
        </CardContent>
      </Card>
    </main>
  );
}
