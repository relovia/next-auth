import { AlertTriangle } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#f6f6f6] h-full">
      <div className="w-full max-w-1/4">
        <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-3xl shadow-2xl p-10 gap-6">
          <AlertTriangle className="w-16 h-16 text-red-400" />
          <div className="flex flex-col items-start justify-center gap-3 w-full">
            <h1 className="text-2xl font-bold text-red-600">Yetkisiz Giriş</h1>
            <p className="text-black text-left">
              Bu sayfaya erişim yetkiniz bulunmuyor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
