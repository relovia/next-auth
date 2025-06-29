"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center bg-[#f6f6f6] h-full">
      <div className="w-full max-w-1/4">
        <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-3xl shadow-2xl p-10 gap-6">
          {session?.user?.image && (
            <Image
              src={session.user.image}
              alt={session.user.name || "Kullanıcı görseli"}
              className="rounded-full shadow-lg"
              width={96}
              height={96}
              priority
            />
          )}
          <div className="flex flex-col items-start justify-center gap-3 w-full">
            <div className="text-2xl font-bold text-[#1d1d1d]">
              {session?.user?.name}
            </div>
            <div className="flex flex-col gap-1 w-full">
              <span className="text-sm text-black">
                <b>Email:</b> {session?.user?.email}
              </span>
              <span className="text-sm text-black">
                <b>Oturum Bitiş:</b>{" "}
                {session?.expires &&
                  new Date(session.expires).toLocaleString("tr-TR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
