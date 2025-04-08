export interface AddOnItemType {
  id: string;
  name: string;
  price: number;
}

export interface AddOnCategoryType {
  id: string;
  name: string;
  maxSelections: number;
  items: AddOnItemType[];
}

const addOnCategories: AddOnCategoryType[] = [
  {
    id: "1",
    name: "Add a Side",
    maxSelections: 4,
    items: [
      { id: "248292616508", name: "Imli Chutney", price: 19 },
      { id: "2092616508", name: "Curd (100 gm)", price: 29 },
      { id: "99762616508", name: "Mint Raita", price: 39 },
      { id: "2102616508", name: "Dal Makhani (100 gm)", price: 59 },
    ],
  },
  {
    id: "2",
    name: "Add a Beverage",
    maxSelections: 8,
    items: [
      { id: "228062616509", name: "Lemon Soda (250 ml)", price: 29 },
      { id: "97862616509", name: "Masala Lemonade (200 ml)", price: 46 },
      { id: "54532616509", name: "Mint Chaas", price: 49 },
      { id: "1122616509", name: "Coca-Cola Bottle (475 ml)", price: 57 },
      { id: "169892616509", name: "Lemon Ice Tea", price: 59 },
      { id: "1092616509", name: "Jeera Masala Soda", price: 59 },
      { id: "126162616509", name: "Thums Up Can (330 ml)", price: 67 },
    ],
  },
  {
    id: "3",
    name: "Add a Starter",
    maxSelections: 15,
    items: [
      { id: "38642616507", name: "Upvas Aloo Pattice (2 pcs)", price: 59 },
      { id: "2142616507", name: "Falafel Shots (6 pcs)", price: 59 },
      { id: "92372616507", name: "Hara Bhara Kebab (2 pcs)", price: 59 },
      { id: "2132616507", name: "Cheesy Chicken Meatballs (3 pcs)", price: 69 },
      { id: "1187616507", name: "Potato Wedges (60 gm)", price: 79 },
      { id: "7762616507", name: "Dahi Kebab (3 pcs)", price: 149 },
      { id: "11612616507", name: "Murgh Kefta (6 pcs)", price: 159 },
    ],
  },
  {
    id: "4",
    name: "Add a Dessert",
    maxSelections: 7,
    items: [
      { id: "36592616507", name: "Gulab Jamun (1 pc)", price: 29 },
      { id: "4122616507", name: "Gajar Halwa (100 gm)", price: 59 },
      { id: "97612616507", name: "Moong Dal Halwa (100 gm)", price: 99 },
      { id: "3152616507", name: "Choco Lava Cake", price: 99 },
      { id: "5742616507", name: "Belgian Chocolate Ice Cream", price: 99 },
    ],
  },
  {
    id: "5",
    name: "Make it a Meal",
    maxSelections: 2,
    items: [
      {
        id: "228062616509_1",
        name: "Lemon Soda (250 ml) + Aloo Bhujiya",
        price: 39,
      },
      {
        id: "97862616509_1",
        name: "Masala Lemonade (200 ml) + Aloo Bhujiya",
        price: 39,
      },
    ],
  },
];

export default addOnCategories;
