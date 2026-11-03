// const movie = {
//   title: "Interstellar",
//   year: 2014,
//   rating: 8.7,
//   genres: ["🚀 Сансар", "🎭 Драм", "🧪 Шинжлэх ухаан"],
//   hasSubtitle: true,
// };
// console.log(`🎬 ` + movie.title + ` (` + movie.year + `)`);
// 8 > movie.rating
//   ? console.log(`⭐` + movie.rating + `—` + `👌 Болно`)
//   : console.log(`⭐` + movie.rating + `— 🔥 Заавал үз`);
// console.log(
//   `Төрөл` + `(` + movie.genres.length + `): ` + movie.genres.join(" , "),
// );
// movie.hasSubtitle === true
//   ? console.log(`🇲🇳 Монгол хадмалтай`)
//   : console.log(`🔤 Хадмалгүй`);

// const settings = {
//   theme: "light",
//   language: "mn",
//   notifications: true,
// };
// settings.theme === "light"
//   ? console.log(`🎨 Загвар: dark`)
//   : console.log(`🎨 Загвар: ` + settings.theme);
// settings.notifications === false
//   ? console.log(`🔔 Мэдэгдэл: асаалттай`)
//   : console.log(` 🔔 Мэдэгдэл: унтраалттай`);
// console.log(` 🔠 Үсгийн хэмжээ:` +settings.font.size+ `px`);

// const rates = {
//   USD: 3450,
//   EUR: 3720,
//   CNY: 478,
//   KRW: 2.5,
// };
// const currency = "EUR";
// const amount = 100;
// if (rates[currency]) {
//   console.log(
//     `💱 ` + amount + ` ` + currency + ` = ` + rates[currency] * amount,
//   );
// } else {
//   console.log(`⚠️` + currency + `-ийн ханш алга`);
// }

// const post = {
//   author: "pinecone.academy",
//   likes: 41,
//   likedByMe: false,
// };
// post.likedByMe === false
//   ? console.log(`❤️`, post.likes + 1, `🤍`, post.likes, `❤️`, post.likes + 1)
//   : console.log(`🤍`, post.likes - 1, `❤️`, post.likes, `🤍`, post.likes - 1);

// const week = [
//   { day: "Даваа", temp: 12, rain: false },
//   { day: "Мягмар", temp: 9, rain: true },
//   { day: "Лхагва", temp: 15, rain: false },
//   { day: "Пүрэв", temp: 7, rain: true },
//   { day: "Баасан", temp: 11, rain: false },
// ];
// let rainyDay = 0;
// let dundaj = 0;
// for (let i = 0; i < week.length; i++) {
//   if (week[i].rain == true) {
//     console.log(week[i].day + ` 🌧 ` + week[i].temp + `°`);
//     rainyDay++;
//   } else {
//     console.log(week[i].day + ` ☀️ ` + week[i].temp + `°`);
//   }
//   dundaj += week[i].temp;
// }
// console.log(`🌡 Дундаж: ` + dundaj / 5 + `°`);
// console.log(`☂️`, rainyDay, `өдөр шүхэр авна`);

// const students = [
//   { name: "Бат", present: true },
//   { name: "Сараа", present: false },
//   { name: "Ану", present: true },
//   { name: "Болд", present: true },
//   { name: "Тэмүүлэн", present: false },
// ];
// let irts = 0;
// let ireegui = [];
// for (let i = 0; i < students.length; i++) {
//   if (students[i].present) {
//     console.log(`✅`, students[i].name);
//     irts++;
//   } else {
//     console.log(`❌`, students[i].name);
//     ireegui.push(students[i].name);
//   }
// }
// console.log(`Ирсэн:`, irts, `/`, students.length);
// if (students.length === irts) {
//   console.log(`🎉 Бүгд ирсэн!`);
// } else {
//   console.log(`Ирээгүй:`, ireegui.join(" , "));
// }

// const cart = [
//   { name: "🍎 Алим", price: 1500, qty: 3 },
//   { name: "🥛 Сүү", price: 3200, qty: 2 },
//   { name: "🍞 Талх", price: 2800, qty: 1 },
// ];
// let niit = 0;
// for (let i = 0; i < cart.length; i++) {
//   console.log(
//     cart[i].name,
//     `x`,
//     cart[i].qty,
//     `=`,
//     cart[i].price * cart[i].qty + `₮`,
//   );
//   niit += cart[i].price * cart[i].qty;
// }
// console.log(`Бараа:`, niit + `₮`);
// (20000 < niit
//   ? console.log(`🚚 Хүргэлт: үнэгүй 🎉`)
//   : console.log(`🚚 Хүргэлт: 3000₮`),
//   20000 < niit
//     ? console.log(`💳 Төлөх:`, niit + `₮`)
//     : console.log(`💳 Төлөх:`, niit + 3000 + `₮`));

// const players = [
//   { name: "Бат", score: 870, level: 12 },
//   { name: "Сараа", score: 980, level: 15 },
//   { name: "Ану", score: 750, level: 9 },
//   { name: "Болд", score: 640, level: 11 },
// ];
// let ih = 0;
// let suragch = "";
// let mdq = "";
// let mdq2 = 0;
// for (let i = 0; i < players.length; i++) {
//   if (ih < players[i].score) {
//     ih = players[i].score;
//     suragch = players[i].name;
//     mdq = players[i].level;
//   }
//   if (10 < players[i].level) {
//     mdq2++;
//   }
// }
// console.log(`🏆 ` + suragch + ` — ` + ih + ` оноо`, `(түвшин ${mdq})`);
// console.log(`⭐ 10-аас дээш түвшинтэй: ${mdq2} тоглогч`);

// const books = [
//   { title: "Алхимич", borrowedBy: null },
//   { title: "Бяцхан ханхүү", borrowedBy: "Бат" },
//   { title: "Тунгалаг Тамир", borrowedBy: null },
// ];

// function borrow(title, name) {
//   let found = false;
//   for (let i = 0; i < books.length; i++) {
//     if (title === books[i].title) {
//       found = true;
//       if (books[i].borrowedBy == null) {
//         books[i].borrowedBy = name;
//         console.log(`✅ ${name} авлаа: ${title}`);
//       } else {
//         console.log(`⛔ ${title} — ${books[i].borrowedBy} дээр байна`);
//       }
//       return;
//     }
//   }
//   if (!found) {
//     console.log(`🤷 «${title}» манай санд алга`);
//   }
// }
// function showBooks() {
//   for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     const status = book.borrowedBy === null ? "сул" : book.borrowedBy;
//     const icon = book.borrowedBy === null ? "📗" : "📕";

//     console.log(`${icon} ${book.title} — ${status}`);
//   }
// }
// borrow("Алхимич", "Сараа");
// borrow("Бяцхан ханхүү", "Ану");
// borrow("Харри Поттер", "Болд");
// showBooks();

const menu = {
  Бууз: 1200,
  Хуушуур: 2500,
  Цуйван: 9500,
  Цай: 1000,
};
const order = ["Бууз", "Бууз", "Бууз", "Хуушуур", "Цуйван", "Пицца", "Цай"];

let total = 0;

for (let i = 0; i < order.length; i++) {
  const item = order[i];
  if (menu[item] !== undefined) {
    total += menu[item];
  } else {
    console.log(`⚠️ ${item} цэсэнд алга`);
  }
}

const discount = total > 15000 ? (total * 10) / 100 : 0;
const finalAmount = total - discount;

console.log(`🧾 Нийт: ${total}₮`);
console.log(`🎁 Хөнгөлөлт: ${discount}₮`);
console.log(`💳 Төлөх: ${finalAmount}₮`);
