// const songs = [
//   { title: "Wolf Totem", artist: "The HU", isLiked: true },
//   { title: "Bohemian Rhapsody", artist: "Queen", isLiked: false },
//   { title: "Shape of You", artist: "Ed Sheeran", isLiked: true },
//   { title: "Blinding Lights", artist: "The Weeknd", isLiked: false },
// ];
// let total = 0;
// songs.forEach((song, index) => {
//   if (song.isLiked === true) {
//     total++;
//     console.log(`${index + 1}. ❤️ ${song.title} — ${song.artist}`);
//   } else {
//     console.log(`${index + 1}. 🎵 ${song.title} — ${song.artist}`);
//   }
// });
// console.log(`🎧 Нийт ${songs.length} дуу, ❤️ ${total} нь таалагдсан`);

// const expenses = [
//   { icon: "🍔", category: "Хоол", amount: 180000 },
//   { icon: "🚌", category: "Унаа", amount: 45000 },
//   { icon: "📱", category: "Утас", amount: 30000 },
//   { icon: "🎮", category: "Тоглоом", amount: 65000 },
// ];
// const budget = 300000;
// let total = 0;
// expenses.forEach((item, i) => {
//   console.log(`${item.icon} ${item.category} - ${item.amount}₮`);
//   total += item.amount;
// });
// total < budget
//   ? console.log(`✅ Төсөвт багтлаа: ${budget - total}₮ үлдлээ`)
//   : console.log(`⚠️ Төсөв ${total - budget}₮-өөр хэтэрлээ`);

// const notifications = [
//   { from: "Сараа", text: "таны зурганд like дарлаа", isRead: false },
//   { from: "Бат", text: "танд мессеж илгээлээ", isRead: false },
//   { from: "Ану", text: "таныг дагаж эхэллээ", isRead: false },
//   { from: "Болд", text: "таны постыг хуваалцлаа", isRead: false },
// ];
// let unread = 0;
// notifications.forEach((b) => {
//   if (b.isRead === true) {
//     unread++;
//   }
// });
// unread === 0
//   ? console.log(`📭 Шинэ мэдэгдэл алга`)
//   : console.log(`🔔 ${unread} шинэ мэдэгдэл`);

// notifications.forEach((a) => {
//   if (a.isRead) {
//     console.log(`⚪ ${a.from} ${a.text}`);
//   } else {
//     console.log(`🔵 ${a.from} ${a.text}`);
//   }
// });

// const words = ["JavaScript", "Pinecone", "Bootcamp", "Code"];
// const hashtag = words.map((a) => {
//   return a;
// });
// console.log(`#` + hashtag.join(" #").toLowerCase());

// const orders = [
//   { name: "Бат", phone: "99112233", total: 45000 },
//   { name: "Сараа", phone: "88554466", total: 120000 },
//   { name: "Ану", phone: "95001122", total: 8000 },
// ];
// const result = orders.map((order) => {
//   return `${order.name} - ${order.phone.slice(0, 4)}**** - ${order.total}₮`;
// });
// console.log(`📦 Өнөөдөр ${orders.length} захиалга`, "\n" + result.join("\n"));

// const players = [
//   { name: "Сараа", score: 980 },
//   { name: "Бат", score: 870 },
//   { name: "Ану", score: 750 },
//   { name: "Болд", score: 640 },
//   { name: "Тэмүүлэн", score: 510 },
// ];
// const medals = ["🥇", "🥈"];
// const result = players.map((a, i) => {
//   return medals.length < i + 1
//     ? `${i + 1} ${a.name} - ${a.score}`
//     : `${medals[i]} ${a.name} - ${a.score}`;
// });
// console.log(result.join("\n"));

// const options = [
//   { label: "🍕 Пицца", votes: 18 },
//   { label: "🍔 Бургер", votes: 12 },
//   { label: "🥟 Бууз", votes: 6 },
//   { label: "🍜 Цуйван", votes: 4 },
// ];
// let total = 0;
// options.forEach((b) => {
//   total += b.votes;
// });
// const result = options.map((a) => {
//   return `${a.label} - ${a.votes} санал (${(a.votes * 100) / total}%)`;
// });
// console.log(`🗳 Нийт ${total} санал` + "\n" + result.join("\n"));

// const fullName = "сАРАА бОЛД";
// const fullNameArray = fullName.split("");
// console.log(fullNameArray[0].slice(1));

// const ages = [38, 35, 12, 5, 67];
// let total = 0;

// const result = ages.map((a) => {
//   if (a < 6) {
//     total += 0;
//     return `👤 ${a} нас — үнэгүй`;
//   } else if (6 <= a && a <= 17) {
//     total += 8000;
//     return `👤 ${a} нас — 8000₮`;
//   } else if (18 <= a && a <= 64) {
//     total += 15000;
//     return `👤 ${a} нас — 15000₮`;
//   } else {
//     total += 7000;
//     return `👤 ${a} нас — 7000₮`;
//   }
// });
// console.log(`🎟 Нийт: ${total}₮` + "\n" + result.join("\n"));

const emojis = {
  love: "❤️",
  pizza: "🍕",
  cat: "🐱",
  sun: "☀️",
  coffee: "☕",
};
const sentence = "I love pizza and my cat";
