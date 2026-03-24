```markdown
# 🕶️ Loopstudios — Immersive VR Experiences Landing Page

![Preview](design/preview.jpg)

Адаптивная лендинг-страница для Loopstudios — компании, создающей иммерсивные VR-проекты.  
Проект для отработки **SASS-архитектуры**, **адаптивной верстки**, **мобильного меню** и **доступности**.

[🔗 Демо]() | [📄 Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw)

---

## ✨ Возможности

- ✅ **Адаптивный дизайн** — mobile-first, десктопная версия с сеткой
- ✅ **Мобильное меню** — бургер с анимацией, блокировка скролла
- ✅ **Тёмная тема** — автоматическая через `prefers-color-scheme`
- ✅ **SASS-архитектура** — модули, миксины, переменные, `@use`/`@forward`
- ✅ **Доступность** — ARIA-атрибуты, семантическая разметка, фокусы
- ✅ **Адаптивные изображения** — через `picture` с разными разрешениями
- ✅ **Псевдоэлементы** — подчёркивание ссылок без смещения лого
- ✅ **CSS Grid** — сетка карточек с изображениями

---

## 🛠 Технологии

| Технология | Назначение |
|------------|------------|
| **HTML5** | Семантическая разметка, ARIA |
| **CSS3 / SASS** | Grid, Flexbox, переменные, `clamp()`, миксины |
| **JavaScript (ES6)** | Мобильное меню, блокировка скролла, клавиатура |
| **Google Fonts** | Alata (400), Josefin Sans (300) |

---

## 🧩 Структура проекта

```
loopstudios-landing-page/
├── index.html
├── css/
│   └── sass/
│       ├── abstracts/
│       │   ├── _variables.scss
│       │   ├── _mixins.scss
│       │   └── _index.scss
│       ├── base/
│       │   ├── _reset.scss
│       │   ├── _utilities.scss
│       │   └── _index.scss
│       ├── components/
│       │   ├── _menu.scss
│       │   └── _index.scss
│       ├── layouts/
│       │   ├── _header.scss
│       │   ├── _main.scss
│       │   ├── _footer.scss
│       │   └── _index.scss
│       ├── themes/
│       │   ├── _theme.scss
│       │   └── _index.scss
│       └── main.scss
├── js/
│   ├── main.js
│   ├── constants.js
│   └── menu.js
├── images/
│   ├── mobile/
│   ├── desktop/
│   └── icons/
└── README.md
```

---

## 🧠 SASS-архитектура

### Миксины
```scss
@mixin font-one($font-size, $color, $fontW) { ... }
@mixin font-two($font-size, $color, $fontW) { ... }
@mixin layoutFlexBase($gap) { ... }
@mixin layoutFLex { ... }
@mixin desktopBreakpoint { ... }
```

### Переменные
```scss
$color-white: hsl(0, 0%, 100%);
$color-black: hsl(0, 0%, 0%);
$color-dark-grey: hsl(0, 0%, 55%);
$color-very-dark-grey: hsl(0, 0%, 41%);
```

### Структура импортов
```scss
// main.scss
@use "abstracts" as *;
@use "base";
@use "layouts";
@use "components";
@use "themes";
```

---

## 📱 Адаптивность

| Устройство | Ширина | Особенности |
|------------|--------|-------------|
| Mobile | < 1024px | Вертикальная сетка, мобильное меню |
| Desktop | ≥ 1024px | Горизонтальная сетка, десктопное меню |

---

## 🎨 Тёмная тема

Автоматически подстраивается под системные настройки:

```scss
@media (prefers-color-scheme: dark) {
    :root {
        --bg-body: #0a0a0a;
        --bg-card: #111111;
        --text-primary: #ffffff;
        --text-secondary: #cccccc;
    }
}
```

---

## ⌨️ Клавиатурная навигация

| Клавиша | Действие |
|---------|----------|
| `Escape` | Закрыть мобильное меню |

---

## 🧪 Тестирование

- [x] Chrome, Firefox, Safari
- [x] Мобильные устройства (Android, iOS)
- [x] Клавиатурная навигация
- [x] Скринридер (NVDA, VoiceOver)
- [x] Светлая и тёмная темы
- [x] Разные разрешения экрана

---

## 💬 Контакты

- GitHub: [@Thought-del](https://github.com/Thought-del)
- Frontend Mentor: [@Thought-del](https://www.frontendmentor.io/profile/Thought-del)

---

**⭐ Если проект понравился — поставь звезду!**
```