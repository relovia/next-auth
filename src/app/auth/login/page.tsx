"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { LoadingSpinner } from "@/components/loading-spinner";
import { LoginForm } from "@/components/login-form";

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
    <div className="flex flex-col items-center justify-center bg-[#f6f6f6] h-full">
      <div className="w-full max-w-4xl">
        <LoginForm />
      </div>
    </div>
  );
}
