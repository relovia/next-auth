"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, LogOut } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleNavigation = () => {
    if (session?.user?.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <nav className="w-full px-6 py-4 bg-black/20 backdrop-blur-md border-b border-white/20 flex items-center justify-between shadow-md sticky top-0 z-50">
      <div
        className="text-white text-xl font-bold cursor-pointer hover:opacity-80 transition"
        onClick={() => router.push("/")}
      >
        <Image
          src="/images/kayra_export.jpg"
          width={256}
          height={256}
          alt="Kayra Export"
        />
      </div>

      {session && (
        <div className="flex items-center gap-4">
          <Button
            onClick={handleNavigation}
            variant="outline"
            className="flex items-center gap-x-2 cursor-pointer"
          >
            <LayoutDashboard className="w-4 h-4" />
            Panel
          </Button>
          <Button
            onClick={() => signOut({ callbackUrl: "/auth/login" })}
            variant="destructive"
            className="flex items-center gap-x-2 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Çıkış
          </Button>
        </div>
      )}
    </nav>
  );
}
