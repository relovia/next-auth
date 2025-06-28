import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-950 to-red-800 text-white">
      <Card className="w-full max-w-md rounded-3xl shadow-2xl border border-red-700 bg-red-800/30 backdrop-blur-xl animate-fade-in">
        <CardHeader className="flex flex-col items-center gap-2 pt-8 pb-2">
          <AlertTriangle className="w-10 h-10 text-red-400 mb-2" />
          <h1 className="text-3xl font-bold mb-2 text-red-200">
            Yetkisiz Giriş
          </h1>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4 pb-8">
          <p className="text-red-100 text-center">
            Bu sayfaya erişim yetkiniz bulunmuyor.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
