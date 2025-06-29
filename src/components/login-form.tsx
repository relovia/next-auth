"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { signIn } from "next-auth/react";
import Image from "next/image";

export function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#f6f6f6] h-full">
      <Card className="w-full max-w-4xl md:h-[520px] overflow-hidden border shadow-xl py-0">
        <CardContent className="grid h-full p-0 md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 gap-6 bg-white">
            <div className="flex flex-col items-center text-center gap-2">
              <h1 className="text-3xl font-bold text-[#1d1d1d]">Giriş Yap</h1>
              <p className="text-muted-foreground text-sm">
                Devam etmek için Auth0 ile giriş yapın
              </p>
            </div>

            <Button
              onClick={() => signIn("auth0", { prompt: "login" })}
              className="w-full bg-[#ffc107] hover:bg-[#ffcd80] text-black font-semibold cursor-pointer"
            >
              Auth0 ile Giriş Yap
            </Button>
          </div>

          <div className="relative hidden md:block">
            <Image
              src="/images/hali.jfif"
              alt="Giriş görseli"
              fill
              className="object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
