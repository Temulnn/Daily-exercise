// const todos = [
//   { title: "💧 Ус уух", isDone: true },
//   { title: "📚 Гэрийн даалгавар", isDone: false },
//   { title: "🏃 30 минут гүйх", isDone: false },
//   { title: "📞 Ээж рүү залгах", isDone: true },
// ];
// if (todos.length === 0) {
//  return  console.log(`📭 Жагсаалт хоосон`);
// } else {
//   function showTodos() {
//     const result = todos.map((todo, i) => {
//       if (todo.isDone === true) {
//         console.log(`${i + 1}. ✅ ${todo.title}`);
//       } else {
//         console.log(`${i + 1}. ⬜ ${todo.title}`);
//       }
//     });
//   }
// }
// showTodos();

// const todos = [
//   { title: "💧 Ус уух", isDone: true },
//   { title: "📚 Гэрийн даалгавар", isDone: false },
//   { title: "🏃 30 минут гүйх", isDone: false },
//   { title: "📞 Ээж рүү залгах", isDone: true },
// ];

// if (todos.length === 0) {
//  return  console.log(`Шинэ ажил нэмээрэй`);
// } else {
//   let total = 0;
//   function showProgress() {
//     todos.forEach((todo) => {
//       if (todo.isDone) {
//         total++;
//       }
//     });
//     if (total === todos.length) {
//       console.log(`🎉 Бүгд дууслаа!`);
//     } else {
//       console.log(`${total} / ${todos.length} дууссан`);
//     }
//   }
// }
// showProgress();

// const todos = [
//   { title: "💧 Ус уух", isDone: true },
//   { title: "📚 Гэрийн даалгавар", isDone: false },
//   { title: "🏃 30 минут гүйх", isDone: false },
//   { title: "📞 Ээж рүү залгах", isDone: true },
// ];
// const result = [];
// let total = 0;

// todos.forEach((todo) => {
//   if (todo.isDone === true) {
//     total++;
//   }
// });
// function addTodo(a) {
//   if (a.trim().length === 0) {
//     console.log(`✏️ Юу хийхээ бичээрэй`);
//   } else {
//     a.trim();
//     total++;
//     console.log(`➕ Нэмэгдлээ: ${a.trim()} · нийт ${total} ажил`);
//     todos.push(a.trim());
//   }
// }
// addTodo("  🛒 Дэлгүүр орох  ");
// addTodo("   ");
// addTodo("🎸 Гитар тоглох");

// const todos = [
//   { title: "💧 Ус уух", isDone: true },
//   { title: "📚 Гэрийн даалгавар", isDone: false },
//   { title: "🏃 30 минут гүйх", isDone: false },
//   { title: "📞 Ээж рүү залгах", isDone: true },
// ];
// function toggleTodo(index) {
//   const myEl = todos[index];
//   console.log(`1`, myEl);

//   myEl.isDone = !myEl.isDone;
//   console.log(`2`, myEl);

//   if (myEl.isDone) {
//     console.log(`duuslaa ${myEl.title}`);
//   } else {
//     console.log(`butsaalaa ${myEl.title}`);
//   }
// }
// toggleTodo(1);
// toggleTodo(0);
// toggleTodo(1);

// const todos = [
//   { title: "💧 Ус уух", isDone: true },
//   { title: "📚 Гэрийн даалгавар", isDone: false },
//   { title: "🏃 30 минут гүйх", isDone: false },
//   { title: "📞 Ээж рүү залгах", isDone: true },
// ];
// function deleteTodo(index) {
//   todos.splice(index, 1);
// }
// deleteTodo(1);
// deleteTodo(2);
// console.log(todos);

// const todos = [
//   { title: "💧 Ус уух", isDone: true },
//   { title: "📚 Гэрийн даалгавар", isDone: false },
//   { title: "🏃 30 минут гүйх", isDone: false },
//   { title: "📞 Ээж рүү залгах", isDone: true },
// ];
// const tabNames = {
//   all: "📋 Бүгд",
//   active: "⏳ Хийх",
//   completed: "✅ Дууссан",
// };
// const activeList = [];
// const completedList = [];
// function showTodos() {
//   todos.forEach((todo) => {
//     if (todo.isDone) {
//       completedList.push(todo);
//     } else {
//       activeList.push(todo);
//     }
//   });
//   console.log(`bugd: `, todos);
//   console.log(`hiih ystoi zuils: `, activeList);
//   console.log(`hiih: `, completedList);
// }
// showTodos();

// const todos = [
//   { title: "💧 Ус уух", isDone: true },
//   { title: "📚 Гэрийн даалгавар", isDone: false },
//   { title: "🏃 30 минут гүйх", isDone: false },
//   { title: "📞 Ээж рүү залгах", isDone: true },
// ];
// function addTodo(a) {
//   if (a.trim() === todos.title) {
//     console.log(a.trim(), `ali hediin bn`);
//   } else if (a.trim().length === 0) {
//     console.log(a.trim(), `yu hiihe biceec`);
//   } else {
//     todos.push({ title: a.trim(), isDone: true });
//     console.log(a.trim(), `nemegdle`);
//   }
// }
// addTodo("💧 ус уух");
// addTodo("  🛒 Дэлгүүр орох ");
// addTodo("🛒 ДЭЛГҮҮР ОРОХ");
// addTodo("  ");

let todos = [
  { title: "💧 Ус уух", isDone: true },
  { title: "📞 Ээж рүү залгах", isDone: true },
  { title: "📚 Гэрийн даалгавар", isDone: false },
  { title: "🧺 Угаалга хийх", isDone: false },
  { title: "🏃 30 минут гүйх", isDone: false },
];

const clearCompleted = () => {
  const result = todos.map((todo) => {
    if (!todo.isDone) {
      return todo;
    }
  });
  const total = todos.length - result.length;
  console.log(`ustgasan too`, total);
};
clearCompleted();
console.log(todos);
