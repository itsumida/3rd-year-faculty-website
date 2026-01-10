# 3-kurs Umumiy Fakultet - O'quv Materiallari

Bu 3-kurs Umumiy fakultet talabalari uchun o'quv materiallarini joylashtirish uchun mo'ljallangan ochiq manba veb-sayt.

## Xususiyatlar

- **2 ta semestr**: 1-semestr (bo'sh) va 2-semestr (15 ta dars)
- **Har bir darsda 5 xil material**:
  - 📄 Nazariya (PDF)
  - 🎥 Video dars (YouTube)
  - ✍️ Testlar (PDF)
  - 📊 Taqdimot (PPTX)
  - 📚 Qo'shimcha materiallar (PDF)
- **Qidiruv funksiyasi**: Darslarni tez topish
- **Progress tracking**: Tugatilgan darslarni belgilash (brauzerda saqlanadi)
- **Yuklab olish**: Barcha materiallarni bir vaqtning o'zida ochish

## O'rnatish

### 1. Loyihani yuklab olish

```bash
git clone https://github.com/YOUR_USERNAME/3rd-year-faculty-website.git
cd 3rd-year-faculty-website
```

### 2. Materiallarni yangilash

`js/data.js` faylini oching va Google Drive va YouTube havolalarini o'zgartiring:

```javascript
const lessonsData = [
    {
        id: 1,
        title: "1-dars",
        description: "Birinchi dars materiallari",
        materials: {
            theory: "https://drive.google.com/file/d/YOUR_ACTUAL_FILE_ID/view",
            video: "https://www.youtube.com/watch?v=YOUR_ACTUAL_VIDEO_ID",
            tests: "https://drive.google.com/file/d/YOUR_ACTUAL_FILE_ID/view",
            presentation: "https://drive.google.com/file/d/YOUR_ACTUAL_FILE_ID/view",
            additional: "https://drive.google.com/file/d/YOUR_ACTUAL_FILE_ID/view"
        }
    },
    // ... 14 ta boshqa dars
];
```

### 3. Google Drive fayllarini sozlash

1. Barcha PDF va PPTX fayllarni Google Drive ga yuklang
2. Har bir fayl uchun:
   - Faylga o'ng tugma bilan bosing
   - "Share" ni tanlang
   - "Anyone with the link" ni tanlang
   - "Copy link" tugmasini bosing
3. Nusxa olingan havolalarni `data.js` fayliga joylashtiring

### 4. Saytni ochish

Oddiy HTML sayt bo'lganligi uchun, `index.html` faylini brauzerda ochish kifoya:

- **Lokal (kompyuteringizda)**: `index.html` faylini ikki marta bosing
- **Yoki**: `index.html` faylini brauzerga sudrab olib keling

## Deploy qilish (Onlayn joylashtirish)

### GitHub Pages orqali (Bepul)

1. GitHub hisobingizga kiring
2. Yangi repository yarating
3. Barcha fayllarni repository ga yuklang:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

4. Repository sozlamalariga o'ting
5. "Pages" bo'limini toping
6. "Source" da "main" branch ni tanlang
7. "Save" tugmasini bosing
8. Bir necha daqiqadan so'ng saytingiz `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/` manzilida mavjud bo'ladi

### Netlify orqali (Bepul)

1. [Netlify](https://netlify.com) ga kiring
2. "Add new site" > "Deploy manually" ni tanlang
3. Loyiha papkasini sudrab olib keling
4. Deploy tugmasini bosing
5. Saytingiz bir necha soniyada tayyor bo'ladi

### Vercel orqali (Bepul)

1. [Vercel](https://vercel.com) ga kiring
2. "New Project" ni tanlang
3. GitHub repository ni ulang
4. Deploy tugmasini bosing

## Fayllar strukturasi

```
3rd-year-faculty-website/
│
├── index.html          # Asosiy HTML fayl
├── css/
│   └── style.css       # Barcha CSS stillari
├── js/
│   ├── data.js         # Darslar ma'lumotlari
│   └── app.js          # Asosiy JavaScript kodi
└── README.md           # Bu fayl
```

## Darslarni yangilash

Yangi darslar qo'shish yoki mavjudlarini tahrirlash uchun:

1. `js/data.js` faylini oching
2. `lessonsData` massivida o'zgarishlar qiling:
   - Yangi dars qo'shish uchun yangi obyekt qo'shing
   - Dars sarlavhasini o'zgartirish uchun `title` ni tahrirlang
   - Havolalarni yangilash uchun `materials` obyektini o'zgartiring
3. Faylni saqlang va sahifani yangilang

### Dars qo'shish misoli

```javascript
{
    id: 16,  // Keyingi ID raqam
    title: "16-dars",
    description: "O'n oltinchi dars materiallari",
    materials: {
        theory: "https://drive.google.com/file/d/...",
        video: "https://www.youtube.com/watch?v=...",
        tests: "https://drive.google.com/file/d/...",
        presentation: "https://drive.google.com/file/d/...",
        additional: "https://drive.google.com/file/d/..."
    }
}
```

## Texnologiyalar

- **HTML5**: Struktura
- **CSS3**: Dizayn va animatsiyalar
- **Vanilla JavaScript**: Funksionallik
- **localStorage**: Progress tracking

## Litsenziya

Bu loyiha ochiq manba (open source) bo'lib, har kim foydalanishi mumkin.

## Hissa qo'shish

Loyihani yaxshilash uchun:

1. Repository ni fork qiling
2. Yangi branch yarating (`git checkout -b feature/yangi-xususiyat`)
3. O'zgarishlarni commit qiling (`git commit -m 'Yangi xususiyat qo'shildi'`)
4. Branch ga push qiling (`git push origin feature/yangi-xususiyat`)
5. Pull Request yarating

## Qo'llab-quvvatlash

Savol yoki muammolar bo'lsa, GitHub Issues bo'limida yozing.

---

**Muvaffaqiyatlar tilaymiz!** 🎓
