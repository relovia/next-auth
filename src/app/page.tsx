import { Button } from "@/components/ui/button";
import { auth0 } from "@/lib/auth0";
import { UserPlus, LogIn, LogOut } from "lucide-react";

export default async function Home() {
  const session = await auth0.getSession();

  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] to-[#1e1e1e]">
      <div className="bg-black/60 border border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6 max-w-md w-full animate-fade-in">
        {children}
      </div>
    </main>
  );

  if (!session) {
    return (
      <Wrapper>
        <h1 className="text-4xl font-extrabold text-white drop-shadow-md">
          Hoş Geldin!
        </h1>
        <p className="text-neutral-400 text-center leading-relaxed">
          Uygulamayı kullanmaya başlamak için hesabına giriş yap veya hızlıca
          kayıt ol.
        </p>
        <div className="flex flex-col gap-4 w-full">
          <a href="/auth/login?screen_hint=signup">
            <Button className="w-full text-lg cursor-pointer">
              <UserPlus className="w-5 h-5 mr-2" />
              Kayıt Ol
            </Button>
          </a>
          <a href="/auth/login">
            <Button variant="outline" className="w-full text-lg cursor-pointer">
              <LogIn className="w-5 h-5 mr-2" />
              Giriş Yap
            </Button>
          </a>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h1 className="text-4xl font-extrabold text-white drop-shadow-md">
        Hoş geldin, {session.user.name}!
      </h1>
      <p className="text-neutral-400 text-center leading-relaxed">
        Başarıyla giriş yaptın. Dilersen çıkış yapabilirsin.
      </p>
      <a href="/auth/logout" className="w-full">
        <Button variant="destructive" className="w-full text-lg cursor-pointer">
          <LogOut className="w-5 h-5 mr-2" />
          Çıkış Yap
        </Button>
      </a>
    </Wrapper>
  );
}
