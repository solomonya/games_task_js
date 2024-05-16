const discounts = [
  [5, { value: 100, cond: 150 }],
  [10, 200],
  [15, 300],
  [20, 500],
];

const games = [
  {
    id: 1,
    name: " death stranging   ",
    price: "1000rub",
    description:
      "Компьютерная игра в жанре action с открытым миром, разработанная...",
    link: "https://ru.wikipedia.org/wiki/Death_Stranding",
    discountType: null,
    hashTags: ["Шутер", "", ["Приключения,Доставка еды"]],
  },
  {
    id: 2,
    name: "the last of us   ",
    price: 300,
    description:
      "Компьютерная игра в жанре action-adventure с элементами survival horror...",
    link: "https://ru.wikipedia.org/wiki/The_Last_of_Us",
    discountType: 20,
    hashTags: ["Стелс", "Экшен", "Приключения"],
  },
  {
    id: 3,
    name: "death stranging",
    price: null,
    description: null,
    discountType: null,
    hashTags: [],
  },
  {
    id: 4,
    name: "SHREK 2: THE GAME",
    price: "321",
    description: "Игра про зеленого мужика, который всем нравится",
    discountType: 5,
    hashTags: [["Шутер,Приключения"], "Хоррор", "Криминал"],
  },
  {
    id: 5,
    name: "GTA 3",
    price: 20.512830102,
    description: "Игра про безумного мужика, который всем нравится",
    discountType: 5,
    hashTags: undefined,
  },
];
