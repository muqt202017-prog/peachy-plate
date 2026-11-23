const RECIPES = [
  {
    id: "fluffy-pancakes",
    name: "Fluffy Pancakes",
    category: "Breakfast",
    image: "jaqueline-pelzer-MytHEJlzdcM-unsplash.jpg",
    description: "Soft, golden pancakes, lovely with berries and a drizzle of honey.",
    prepMin: 10,
    cookMin: 10,
    difficulty: "Easy",
    ingredients: [
      { name: "plain flour", qty: 100, unit: "g" },
      { name: "baking powder", qty: 1.5, unit: "tsp" },
      { name: "sugar", qty: 1, unit: "tbsp" },
      { name: "egg", qty: 1, unit: "" },
      { name: "milk", qty: 150, unit: "ml" },
      { name: "butter, melted", qty: 1, unit: "tsp" }
    ],
    steps: [
      "Mix the flour, baking powder and sugar in a bowl.",
      "Whisk the egg, milk and melted butter in a jug, then pour into the dry mix.",
      "Stir gently until just combined. A few lumps are fine.",
      "Heat a lightly greased pan on medium heat.",
      "Pour in small rounds of batter and cook 2 minutes until bubbles appear.",
      "Flip and cook 1 to 2 minutes more. Serve with berries and honey."
    ],
    tips: "Do not overmix the batter, or the pancakes turn out flat.",
    source: "Peachy Plate original recipe"
  },
  {
    id: "creamy-chicken-pasta",
    name: "Creamy Pasta",
    category: "Main Courses",
    image: "sama-hosseini-wTBGTwHlf0c-unsplash.jpg",
    description: "Silky creamy pasta with tender chicken, mushrooms and parmesan.",
    prepMin: 10,
    cookMin: 20,
    difficulty: "Easy",
    ingredients: [
      { name: "fettuccine (dry)", qty: 90, unit: "g" },
      { name: "chicken breast, sliced", qty: 100, unit: "g" },
      { name: "mushrooms, sliced", qty: 50, unit: "g" },
      { name: "garlic clove", qty: 1, unit: "" },
      { name: "cream", qty: 100, unit: "ml" },
      { name: "parmesan, grated", qty: 20, unit: "g" },
      { name: "olive oil", qty: 1, unit: "tsp" }
    ],
    steps: [
      "Boil the pasta in salted water until just tender, then drain.",
      "Heat the oil in a pan and cook the chicken until golden and cooked through.",
      "Add the mushrooms and chopped garlic and cook for 3 minutes.",
      "Pour in the cream and simmer gently for 2 minutes.",
      "Stir in the parmesan and the pasta. Add a splash of pasta water if too thick.",
      "Season to taste and top with fresh parsley."
    ],
    tips: "Keep some pasta water to loosen the sauce.",
    source: "Peachy Plate original recipe"
  },
  {
    id: "iced-matcha",
    name: "Iced Matcha",
    category: "Drinks",
    image: "denise-teix-YE1HcXXvnes-unsplash.jpg",
    description: "A cool, creamy matcha latte over ice.",
    prepMin: 5,
    cookMin: 0,
    difficulty: "Easy",
    ingredients: [
      { name: "matcha powder", qty: 2, unit: "g" },
      { name: "hot water (not boiling)", qty: 60, unit: "ml" },
      { name: "honey", qty: 1, unit: "tsp" },
      { name: "cold milk", qty: 200, unit: "ml" },
      { name: "ice cubes", qty: 5, unit: "" }
    ],
    steps: [
      "Whisk the matcha with the hot water until smooth and frothy.",
      "Stir in the honey.",
      "Fill a glass with ice and pour in the cold milk.",
      "Pour the matcha over the top and stir before drinking."
    ],
    tips: "Sift the matcha first to avoid lumps.",
    source: "Peachy Plate original recipe"
  }
];
