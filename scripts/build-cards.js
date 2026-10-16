const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'products.json');
const htmlPath = path.join(__dirname, '..', 'index.html');

const START_MARKER = '<!-- CARDS:START -->';
const END_MARKER = '<!-- CARDS:END -->';

const products = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const cardsHtml = products
  .map(
    (item) =>
      `        <article class="card"><div class="card__media"><img src="${item.image}" alt="${item.alt}" width="290" height="300" loading="lazy"><button class="card__add" type="button" data-name="${item.title}" aria-label="Add ${item.title} to cart">+</button></div><h3 class="card__title">${item.title}</h3><p class="card__price">${item.price} <s>${item.oldPrice}</s></p></article>`
  )
  .join('\n');

const html = fs.readFileSync(htmlPath, 'utf-8');
const startIdx = html.indexOf(START_MARKER);
const endIdx = html.indexOf(END_MARKER);

if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
  console.error('Помилка: Не знайдено маркери <!-- CARDS:START --> та <!-- CARDS:END --> у index.html');
  process.exit(1);
}

const before = html.slice(0, startIdx + START_MARKER.length);
const after = html.slice(endIdx);
const updatedHtml = `${before}\n${cardsHtml}\n        ${after}`;

fs.writeFileSync(htmlPath, updatedHtml, 'utf-8');
console.log(`Зібрано ${products.length} карток з data/products.json у index.html`);