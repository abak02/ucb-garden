const initialFlats = [
  { id: 1, nameBn: "জনাব খোন্দকার শফিকুল ইসলাম", nameEn: "Mr. Khondokar Shafiqul Islam", flatBn: "GFB", flatEn: "GFB", electricity: 100, guard: 615, water: 100, garage: 0, development: 140, festival: 0, paid: true },
  { id: 2, nameBn: "জনাব রুহুল আমিন কমল", nameEn: "Mr. Ruhul Amin Komol", flatBn: "GFD", flatEn: "GFD", electricity: 100, guard: 615, water: 100, garage: 0, development: 140, festival: 0, paid: true },
  { id: 3, nameBn: "জনাবা আঞ্জুমান আরা জলি", nameEn: "Mrs. Anjuman Ara Joly", flatBn: "2B", flatEn: "2B", electricity: 100, guard: 615, water: 100, garage: 0, development: 140, festival: 0, paid: true },
  { id: 4, nameBn: "জনাব মোছাঃ আসমা খাতুন M-1", nameEn: "Mrs. Asma Khatun M-1", flatBn: "2A", flatEn: "2A", electricity: 100, guard: 615, water: 100, garage: 0, development: 140, festival: 0, paid: true },
  { id: 5, nameBn: "জনাব মো: সাইদুল ইসলাম M-2", nameEn: "Mr. Md. Saidul Islam M-2", flatBn: "2C+4C(2)", flatEn: "2C+4C(2)", electricity: 200, guard: 1230, water: 200, garage: 650, development: 280, festival: 0, paid: true },
  { id: 6, nameBn: "জনাব আবুল কালাম আজাদ M-1", nameEn: "Mr. Abul Kalam Azad M-1", flatBn: "2D", flatEn: "2D", electricity: 100, guard: 615, water: 100, garage: 0, development: 140, festival: 0, paid: true },
  { id: 7, nameBn: "জনাব রমজান আলী", nameEn: "Mr. Ramjan Ali", flatBn: "3A(1)", flatEn: "3A(1)", electricity: 100, guard: 615, water: 100, garage: 325, development: 140, festival: 0, paid: true },
  { id: 8, nameBn: "জনাব রোকনুজ্জামান নান্টু M-1", nameEn: "Mr. Rokonuzzaman Nantu M-1", flatBn: "3B+3C(1)", flatEn: "3B+3C(1)", electricity: 200, guard: 1230, water: 200, garage: 325, development: 280, festival: 0, paid: true },
  { id: 9, nameBn: "জনাব মু. আছাদুল্লাহ", nameEn: "Mr. Mu. Asadullah", flatBn: "4A", flatEn: "4A", electricity: 100, guard: 615, water: 100, garage: 0, development: 140, festival: 0, paid: true },
  { id: 10, nameBn: "জনাব মু. আব্দুর রহিম", nameEn: "Mr. Mu. Abdur Rahim", flatBn: "4B(1)", flatEn: "4B(1)", electricity: 100, guard: 615, water: 100, garage: 325, development: 140, festival: 0, paid: true },
  { id: 11, nameBn: "জনাবা রওশন আরা বেগম M-1", nameEn: "Mrs. Rawshan Ara Begum M-1", flatBn: "4D(1)", flatEn: "4D(1)", electricity: 100, guard: 615, water: 100, garage: 325, development: 140, festival: 0, paid: true },
  { id: 12, nameBn: "জনাব আলমগির কবির M-1", nameEn: "Mr. Alamgir Kabir M-1", flatBn: "5A+5C", flatEn: "5A+5C", electricity: 200, guard: 1230, water: 200, garage: 0, development: 280, festival: 0, paid: true },
  { id: 13, nameBn: "জনাব খন্দকার রফিকুল ইসলাম", nameEn: "Mr. Khondokar Rafiqul Islam", flatBn: "5B", flatEn: "5B", electricity: 100, guard: 615, water: 100, garage: 0, development: 140, festival: 0, paid: true },
  { id: 14, nameBn: "জনাব আমিরুজ্জামান বাদশা M-2", nameEn: "Mr. Amiruzzaman Badsha M-2", flatBn: "5D", flatEn: "5D", electricity: 100, guard: 615, water: 100, garage: 0, development: 140, festival: 0, paid: true },
  { id: 15, nameBn: "জনাব মো: সাজেদুল ইসলাম", nameEn: "Mr. Md. Sajedul Islam", flatBn: "3D", flatEn: "3D", electricity: 100, guard: 615, water: 100, garage: 0, development: 140, festival: 0, paid: true }
];

const initialExpenses = [
  { key: "guard_salary", nameBn: "প্রহরীর বেতন", nameEn: "Guard's Salary", amount: 11070 },
  { key: "sweeper_salary", nameBn: "ঝাড়ুদারের বেতন", nameEn: "Sweeper's Salary", amount: 1800 },
  { key: "garage_rent", nameBn: "গ্যারেজ ভাড়া", nameEn: "Garage Rent", amount: 0 },
  { key: "water_bill", nameBn: "পানির বিল", nameEn: "Water Bill", amount: 1800 },
  { key: "electricity_bill", nameBn: "বিদ্যুৎ বিল", nameEn: "Electricity Bill", amount: 1800 },
  { key: "misc", nameBn: "বিবিধ", nameEn: "Miscellaneous", amount: 1500 }
];

const initialIncomes = [
  { key: "room_rent", nameBn: "রুম ভাড়া", nameEn: "Room Rent", amount: 2000 },
  { key: "flat_income", nameBn: "ফ্ল্যাট থেকে মোট আয়", nameEn: "Total Income from Flats", amount: 19140, isCalculated: true },
  { key: "motorcycle_rent", nameBn: "মোটরসাইকেল ভাড়া", nameEn: "Motorcycle Rent", amount: 500 }
];

window.UbcGardenSeeds = {
  flats: initialFlats,
  expenses: initialExpenses,
  incomes: initialIncomes
};
