const runners = [
  { name: "Тэмүүлэн", age: 9 },
  { name: "Номин", age: 12 },
  { name: "Билгүүн", age: 13 },
  { name: "Анужин", age: 17 },
  { name: "Ган-Эрдэнэ", age: 18 },
  { name: "Солонго", age: 35 },
  { name: "Мөнх", age: 15 },
];

const sixToTwelve = runners.filter((runner) => {
  return runner.age >= 6 && runner.age <= 12;
});
const thirteenToSeventeen = runners.filter((runner) => {
  return runner.age >= 13 && runner.age <= 17;
});
const eighteenTofiftyNine = runners.filter((runner) => {
  return runner.age >= 18 && runner.age <= 59;
});
const sixtyToHundredAndTwenty = runners.filter((runner) => {
  return runner.age >= 60 && runner.age <= 120;
});

const sixToTwelveNames = sixToTwelve.map((person) => {
  return person.name;
});
const thirteenToSeventeenNames = thirteenToSeventeen.map((person) => {
  return person.name;
});
const eighteenTofiftyNineNames = eighteenTofiftyNine.map((person) => {
  return person.name;
});
const sixtyToHundredAndTwentyNames = sixtyToHundredAndTwenty.map((person) => {
  return person.name;
});

console.log("› 🧒 6–12 нас: ", sixToTwelveNames.join(", "));
console.log("› 🧑 13–17 нас: ", thirteenToSeventeenNames.join(", "));
console.log("🧔 18–59 нас: ", eighteenTofiftyNineNames.join(", "));
console.log("👴 60–120 нас: ", sixtyToHundredAndTwentyNames.join(", "));

const pets = [
  { name: "Банхар", type: "нохой", age: 3, vaccinated: true },
  { name: "Мишка", type: "муур", age: 1, vaccinated: true },
  { name: "Бөмбөг", type: "нохой", age: 1, vaccinated: false },
  { name: "Цасаа", type: "туулай", age: 2, vaccinated: true },
  { name: "Хар", type: "муур", age: 5, vaccinated: false },
  { name: "Азаа", type: "нохой", age: 7, vaccinated: true },
];
const wanted = "муур";

const wantedAnimalList = pets.filter((pet) => {
  return pet.type === wanted;
});

console.log(`${wantedAnimalList.length} ширхэг амьтан байна`);
wantedAnimalList.forEach((animal) => {
  console.log(`${animal.name}, ${animal.age} nastai`);
});
