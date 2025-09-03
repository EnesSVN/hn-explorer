# 📰 HN Explorer — Next.js + Jest/RTL + MSW + Cypress

**Hacker News arama & detay** mini uygulaması.  
Bu repo **test ekosistemini öğrenmek** için tasarlandı:

- **Unit & Integration** → Jest + React Testing Library + MSW
- **E2E** → Cypress (network intercept: başarı + hata senaryoları)
- **CI** → GitHub Actions (coverage eşikleri + headless E2E)

> Amaç: Gerçekçi bir akış (arama, sayfalama, detay) üzerinde **deterministik** ve **bakımı kolay** test stratejisi kurmak.

---

## 🎯 Amaç

- Jest, RTL, MSW, Cypress gibi **test araçlarını öğrenmek**
- **Test piramidi** kurmak → Unit → Integration → E2E
- **Gerçekçi senaryolar**: arama, hata state, debounce, race guard, pagination, detay sayfası
- CI ve coverage eşikleri ile **kalite barını ölçmek**

---

## 🔧 Teknoloji Yığını

- **Next.js (App Router)** + **TypeScript** + **TailwindCSS**
- **Jest** (runner) + **React Testing Library** (jest-dom, user-event)
- **MSW (Mock Service Worker)** → Jest ortamında network mocking
- **Cypress** → Uçtan uca testler (tarayıcı)
- **GitHub Actions** + **wait-on** → CI’da build → start → URL hazır → Cypress run

---

## 🚀 Kurulum

Gereksinimler: **Node.js ≥ 18**

```bash
npm ci
npm run dev
# http://localhost:3000
```

| Komut                | Açıklama                                |
| -------------------- | --------------------------------------- |
| `npm run dev`        | Lokal geliştirme sunucusu               |
| `npm run build`      | Production build                        |
| `npm run start`      | Production server                       |
| `npm test`           | Jest unit/integration testleri          |
| `npm run test:watch` | Jest watch modu                         |
| `npm run test:cov`   | Jest coverage raporu                    |
| `npm run cy:open`    | Cypress GUI başlatır                    |
| `npm run cy:run`     | Cypress headless koşar                  |
| `npm run ci:test`    | CI’da Jest + coverage (tek proseste)    |
| `npm run ci:e2e`     | CI’da build → start → wait-on → Cypress |
