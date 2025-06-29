# Next.js Auth0 + NextAuth + JWT Yetkilendirme Sistemi

## Genel Bakış

Bu proje, **Next.js (App Router)**, OAuth sağlayıcısı olarak **Auth0**, oturum yönetimi için **NextAuth.js** ve güvenli, token tabanlı kimlik doğrulama için **JWT** kullanarak sağlam bir kimlik doğrulama ve yetkilendirme sistemi uygular.

## Özellikler

- **Auth0 ile OAuth Girişi**
- **JWT tabanlı oturum yönetimi**
- **Rol bazlı yetkilendirme** (admin, user)
- **Sayfa koruması ve erişim kontrolü için Next.js Middleware**
- **TypeScript** ile tip güvenliği
- **TailwindCSS** ile modern arayüz (giriş & panel)
- **Docker** ile konteyner desteği
- **.env ile yapılandırma**

## Teknolojiler & Araçlar

- Next.js 15+ (App Router)
- Auth0
- NextAuth.js
- JWT (JSON Web Token)
- TypeScript
- TailwindCSS
- Docker
- Git / GitHub

## Klasör Yapısı

```
├── src/
│   ├── app/
│   │   ├── admin/           # Admin paneli (rol korumalı)
│   │   ├── dashboard/       # Kullanıcı paneli (rol korumalı)
│   │   ├── auth/login/      # Giriş sayfası
│   │   ├── unauthorized/    # Yetkisiz erişim sayfası
│   │   ├── api/auth/[...nextauth]/route.ts # NextAuth API route
│   │   ├── layout.tsx       # Uygulama yerleşimi
│   │   ├── middleware.ts    # Route koruma için middleware
│   ├── components/          # Arayüz bileşenleri
│   ├── lib/                 # Kimlik doğrulama mantığı, yardımcılar
│   ├── types/               # TypeScript tipleri
├── public/                  # Statik dosyalar
├── Dockerfile               # Docker yapılandırması
├── docker-compose.yml       # Docker Compose
├── .env.example             # Örnek ortam değişkenleri
```

## Başlarken

### 1. Repoyu Klonlayın

```bash
git clone https://github.com/kullanici-adiniz/next-auth.git
cd next-auth
```

### 2. Kütüphaneleri Yükleyin

```bash
npm install
# veya
yarn install
```

### 3. Ortam Değişkenlerini Ayarlayın

Kök dizinde bir `.env` dosyası oluşturun ve aşağıdaki ortam değişkenlerini doldurun:

```
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret
AUTH0_ISSUER=https://your-tenant.auth0.com
NEXTAUTH_SECRET=your-random-secret
NEXTAUTH_URL=http://localhost:3000
```

> **Not:** `NEXTAUTH_SECRET` değerini güvenli bir şekilde oluşturmak için aşağıdaki komutu kullanabilirsiniz:
>
> OpenSSL ile:
>
> ```bash
> openssl rand -hex 32
> ```
>
> veya Node.js ile:
>
> ```bash
> node -e "console.log(crypto.randomBytes(32).toString('hex'))"
> ```

### 4. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) adresinden uygulamayı görüntüleyebilirsiniz.

### 5. Docker Desteği

Uygulamayı konteynerde çalıştırmak için:

```bash
docker-compose up --build
```

## Yetkilendirme & Middleware

- **/admin**: Sadece `role: admin` olan kullanıcılar erişebilir. Diğerleri `/unauthorized` sayfasına yönlendirilir.
- **/dashboard**: Sadece kimliği doğrulanmış kullanıcılar erişebilir.
- **/auth/login**: Herkese açık giriş sayfası.
- **/unauthorized**: Yetkisiz erişimlerde gösterilir.
- Middleware (`src/middleware.ts`), her istekte JWT ve kullanıcı rolünü kontrol eder.
