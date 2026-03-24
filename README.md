# 🕶️ Loopstudios — Immersive VR Experiences Landing Page

![Preview](design/preview.jpg)

A responsive landing page for Loopstudios — a company specializing in immersive VR experiences.  
This project was built to practice **SASS architecture**, **responsive design**, **mobile menu implementation**, and **accessibility**.

[🔗 Live Demo](https://thought-del.github.io/Loopstudios-Lending/) | [📄 Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw)

---

## ✨ Features

- ✅ **Responsive design** — mobile-first approach with desktop grid layout
- ✅ **Mobile menu** — hamburger with smooth animation and scroll lock
- ✅ **Dark theme** — automatic via `prefers-color-scheme`
- ✅ **SASS architecture** — modules, mixins, variables, `@use` / `@forward`
- ✅ **Accessibility** — ARIA attributes, semantic markup, focus states
- ✅ **Responsive images** — `<picture>` element with different resolutions
- ✅ **Pseudo-elements** — link underlines without disrupting logo positioning
- ✅ **CSS Grid** — image card grid layout

---

## 🛠 Technologies

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup, ARIA |
| **CSS3 / SASS** | Grid, Flexbox, variables, `clamp()`, mixins |
| **JavaScript (ES6)** | Mobile menu, scroll lock, keyboard handling |
| **Google Fonts** | Alata (400), Josefin Sans (300) |

---

## 🧩 Project Structure

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

## 🧠 SASS Architecture

### Mixins
```scss
@mixin font-one($font-size, $color, $fontW) { ... }
@mixin font-two($font-size, $color, $fontW) { ... }
@mixin layoutFlexBase($gap) { ... }
@mixin layoutFlex { ... }
@mixin desktopBreakpoint { ... }
```

### Variables
```scss
$color-white: hsl(0, 0%, 100%);
$color-black: hsl(0, 0%, 0%);
$color-dark-grey: hsl(0, 0%, 55%);
$color-very-dark-grey: hsl(0, 0%, 41%);
```

### Import Structure
```scss
// main.scss
@use "abstracts" as *;
@use "base";
@use "layouts";
@use "components";
@use "themes";
```

---

## 📱 Responsive Design

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | < 1024px | Stacked layout, mobile hamburger menu |
| Desktop | ≥ 1024px | Horizontal grid layout, desktop navigation |

---

## 🎨 Dark Theme

Automatically adapts to system preferences:

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

## ⌨️ Keyboard Navigation

| Key | Action |
|-----|--------|
| `Escape` | Close mobile menu |

---

## 🧪 Testing

- [x] Chrome, Firefox, Safari
- [x] Mobile devices (Android, iOS)
- [x] Keyboard navigation
- [x] Screen readers (NVDA, VoiceOver)
- [x] Light and dark themes
- [x] Various screen resolutions

---

## 💬 Contact

- GitHub: [@Thought-del](https://github.com/Thought-del)
- Frontend Mentor: [@Thought-del](https://www.frontendmentor.io/profile/Thought-del)

---

**⭐ If you like this project — please give it a star!**