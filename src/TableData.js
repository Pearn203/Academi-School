import BeefSteak from './assets/beefsteak.jpg';
import Pandcake from './assets/pandcake.jpg';
import PorkSandwich from './assets/pork_sandwich.jpg';
import TunarRoll from './assets/tunar_roll.jpg';
import GrillChicken from './assets/ultimate-grilled-chicken-caesar-salad.jpg';
import VeganBow from './assets/vegan_bow.jpg';
export const foodData = [
  {
    id: 1,
    name: "Beef steak",
    star: 4.6,
    order: 1456,
    interest: "26%",
    percentage: "50%",
    ingridient: ['Beef Steak', 'Salt', 'Black Pepper', 'Olive Oil or Butter', 'Garlic', 'Fresh Herbs '],
    nutrition: ['Calories: 217.', 'Water: 61% Protein: 26.1 grams.', 'Carbs: 0 grams. Sugar: 0 grams.',  'Fiber: 0 grams. Fat: 11.8 grams.'],
    type: "lunch",
    image: BeefSteak
  },
  {
    id: 2,
    name: "Pancake",
    star: 4.1,
    order: 1456,
    interest: "23%",
    percentage: "50%",
    ingridient: ['All-Purpose Flour', 'Baking Powder', 'Salt', 'Sugar', 'Egg'],
    nutrition: ['Calories: 90-110 kcal', 'Carbohydrates: 15-20 g', 'Protein: 2-4 g', 'Fat: 2-3 g', 'Saturated Fat: 1-2 g'],
    type: "breakfast",
    image: Pandcake,
    },
  {
    id: 3,
    name: "Grilled Chicken Caesar Salad",
    star: 4.5,
    order: 1600,
    interest: "40%",
    percentage: "50%",
    ingridient: ['romaine lettuce', 'grilled chicken breast', 'croutons', 'Parmesan cheese', 'Caesar dressing'],
    nutrition: ['Calories: 400-600 kcal', 'Carbohydrates: 10-20 g', 'Protein: 30-40 g', 'Fat: 25-35 g', 'Saturated Fat: 5-8 g'],
    type: 'lunch',
    image: GrillChicken,
    },
    {
      id: 4,
      name: "Spicy Tuna Roll",
      star: 4.7,
      order: 2100,
      interest: "35%",
      percentage: "60%",
      ingridient: ['sushi rice', 'nori seaweed', 'spicy tuna', 'cucumber', 'sesame seeds'],
      nutrition: ['Calories: 300-400 kcal', 'Carbohydrates: 50-60 g', 'Protein: 20-30 g', 'Fat: 8-12 g', 'Saturated Fat: 1-2 g'],
      type: 'dinner',
      image: TunarRoll,
    },
    {
      id: 5,
      name: "Vegan Buddha Bowl",
      star: 4.8,
      order: 1800,
      interest: "45%",
      percentage: "70%",
      ingridient: ['quinoa', 'chickpeas', 'avocado', 'spinach', 'sweet potato', 'tahini dressing'],
      nutrition: ['Calories: 500-700 kcal', 'Carbohydrates: 60-80 g', 'Protein: 15-25 g', 'Fat: 20-30 g', 'Saturated Fat: 2-4 g'],
      type: 'lunch',
      image: VeganBow
    },
    {
      id: 6,
      name: "BBQ Pulled Pork Sandwich",
      star: 4.6,
      order: 2500,
      interest: "38%",
      percentage: "55%",
      ingridient: ['pulled pork', 'barbecue sauce', 'brioche bun', 'coleslaw', 'pickles'],
      nutrition: ['Calories: 600-800 kcal', 'Carbohydrates: 40-60 g', 'Protein: 35-45 g', 'Fat: 30-40 g', 'Saturated Fat: 8-12 g'],
      type: 'dinner',
      image: PorkSandwich
    },
  
];

export const ChartData = [
{
  "id": "Expend",
  "color": "hsl(166, 70%, 50%)",
  "data": [
    {
      "x": "January",
      "y": 248
    },
    {
      "x": "February",
      "y": 125
    },
    {
      "x": "March",
      "y": 180
    },
    {
      "x": "April",
      "y": 16
    },
    {
      "x": "May",
      "y": 244
    },
    {
      "x": "June",
      "y": 174
    },
    {
      "x": "July",
      "y": 48
    },
    {
      "x": "August",
      "y": 250
    },
    {
      "x": "September",
      "y": 129
    },
    {
      "x": "October",
      "y": 71
    },
    {
      "x": "November",
      "y": 64
    },
    {
      "x": "December",
      "y": 120
    }
  ]
},
{
  "id": "Income",
  "color": "hsl(52, 70%, 50%)",
  "data": [
    {
      "x": "January",
      "y": 56
    },
    {
      "x": "February",
      "y": 61
    },
    {
      "x": "March",
      "y": 269
    },
    {
      "x": "April",
      "y": 199
    },
    {
      "x": "May",
      "y": 211
    },
    {
      "x": "June",
      "y": 109
    },
    {
      "x": "July",
      "y": 155
    },
    {
      "x": "August",
      "y": 250
    },
    {
      "x": "September",
      "y": 12
    },
    {
      "x": "October",
      "y": 144
    },
    {
      "x": "November",
      "y": 148
    },
    {
      "x": "December",
      "y": 52
    }
  ]
},
]
export const expenseData = [
{ id: "#12141589", money: "$50042", state: "Complete" },
{ id: "#12141590", money: "$10230", state: "Pending" },
{ id: "#12141591", money: "$74500", state: "Canceled" },
{ id: "#12141592", money: "$15400", state: "Complete" },
{ id: "#12141593", money: "$9830", state: "Pending" },
{ id: "#12141594", money: "$50600", state: "Complete" },
{ id: "#12141595", money: "$22500", state: "Canceled" },
{ id: "#12141596", money: "$34800", state: "Pending" },
{ id: "#12141597", money: "$8700", state: "Complete" },
{ id: "#12141598", money: "$13000", state: "Canceled" },
{ id: "#12141599", money: "$51200", state: "Pending" },
{ id: "#12141600", money: "$26000", state: "Complete" },
{ id: "#12141601", money: "$43000", state: "Canceled" },
{ id: "#12141602", money: "$32000", state: "Complete" },
{ id: "#12141603", money: "$12000", state: "Pending" }

]
export const BarChartData = [
  {
    "country": "Mon",
    "this week": 90,
    "last week": 151
},
{
    "country": "Tue",
    "this week": 120,
    "last week": 132
},
{
    "country": "Wed",
    "this week": 95,
    "last week": 125
},
{
    "country": "Thu",
    "this week": 110,
    "last week": 143
},
{
    "country": "Fri",
    "this week": 80,
    "last week": 110
},
{
    "country": "Sat",
    "this week": 105,
    "last week": 130
},
{
    "country": "Sun",
    "this week": 100,
    "last week": 140
}
]

