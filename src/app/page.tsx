"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/loading-spinner";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f6f6f6]">
        <LoadingSpinner />
      </main>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-[#f6f6f6] h-full">
      <Card className="w-full max-w-4xl h-[600px] md:h-[520px] overflow-hidden border shadow-xl flex items-center justify-center py-0">
        <CardContent className="grid grid-cols-1 md:grid-cols-2 h-full w-full p-0">
          <div className="flex flex-col h-full bg-white rounded-none md:rounded-l-3xl shadow-md px-4 py-6 text-left">
            {!session ? (
              <>
                <h1 className="text-3xl font-bold text-[#1d1d1d] tracking-widest">
                  KAYRA EXPORT
                </h1>
                <div className="flex-1 flex items-center w-full">
                  <p className="text-black w-full">
                    Kayra Export, el dokuması halı ve kilim ihracatında
                    uzmanlaşmış bir markadır. Giriş yaparak size özel teklifleri
                    ve ürünleri görüntüleyebilirsiniz.
                  </p>
                </div>
                <Button
                  onClick={() => router.push("/auth/login")}
                  className="bg-[#ffc107] hover:bg-[#ffcd80] text-black font-semibold cursor-pointer text-lg w-full"
                >
                  Giriş Yap
                </Button>
              </>
            ) : (
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-3xl font-bold text-[#1d1d1d]">
                    Hoş geldin
                  </h1>
                  <div className="text-2xl font-semibold text-[#222]">
                    {session.user?.name}!
                  </div>
                  {session.user?.role === "admin" ? (
                    <div className="text-base text-black">
                      <span>
                        Yönetici paneline hoş geldin! Buradan kullanıcıları ve
                        ürünleri yönetebilirsin.
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-y-2 text-base text-black">
                      <span>
                        Kayra Export ile el dokuması halıların dünyasına hoş
                        geldin.
                      </span>
                      <span>
                        Panelinden siparişlerini ve tekliflerini kolayca
                        yönetebilirsin.
                      </span>
                    </div>
                  )}
                </div>
                <Button
                  className="bg-[#ffc107] hover:bg-[#ffcd80] text-black font-semibold cursor-pointer text-lg w-full"
                  onClick={() =>
                    session.user?.role === "admin"
                      ? router.push("/admin")
                      : router.push("/dashboard")
                  }
                >
                  Panele Git
                </Button>
              </div>
            )}
          </div>
          <div className="relative hidden md:block h-full w-full">
            <Image
              src="/images/pillows.jpg"
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
