# Лабораторна робота 2. Перехід від папки з файлами до керованого npm-проєкту

- **Прізвище, група:** Фурів Ростислав, ІСТ 2 курс
- **Варіант:** 8 — системи зберігання (FurniShop), `--color-accent: #5F6B63`
- **GitHub Pages / Посилання на сторінку:** https://rost1slavvvvvv.github.io/lab2/
- **РЕПОЗИТОРІЙ** https://github.com/Rost1slavvvvvv/lab2
## Середовище розробки
- **Node.js:** `v24.20.0`
- **npm:** `11.19.0`

## Структура проєкту
- `src/scss/` — вихідні стилі SCSS:
  - `_variables.scss` — partial зі змінними SCSS та CSS Custom Properties (світла/темна тема).
  - `_cards.scss` — partial з міксинами (`flex-center`, `grid-center`, `respond-to`) та вкладеними стилями карток товарів.
  - `main.scss` — головний файл стилів, який підключає partials через `@use`.
- `data/products.json` — масив даних для 8 карток товарів.
- `scripts/build-cards.js` — Node.js скрипт (модуль `fs`), що читає `data/products.json` і вставляє згенеровані HTML-картки в `index.html` між маркерами `<!-- CARDS:START -->` та `<!-- CARDS:END -->`.
- `css/style.css` — автоматично згенерований CSS-файл (вручну не редагується).

## Перелік команд (npm scripts)

```bash
# Встановлення залежностей у чистій копії репозиторію
npm install

# Одноразова компіляція SCSS у CSS
npm run scss:build

# Запуск Sass у режимі спостереження за змінами (watch)
npm run scss:watch

# Генерація HTML-карток із data/products.json у index.html
npm run build:cards

# Повне фінальне збирання проєкту (компіляція стилів + генерація карток)
npm run build