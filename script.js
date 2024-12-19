const num1 = ["Doniyor", "Ismoil", "Said", "Mahmud", "Boisxon"]; // Boshlang'ich massiv
const num = prompt("Ism qo'shing:"); // Foydalanuvchidan ism so'rash
const answer = prompt(
  "Iltimos tanlang: \n 1) push \n 2) pop \n 3) shift \n 4) unshift"
); // Foydalanuvchidan amal tanlash

if (answer == 1) {
  num1.push(num); // Foydalanuvchi kiritgan ismni oxiriga qo'shish
  alert(`Javob: ${num1}`); // Yangi massivni ko'rsatish
  console.log(num1);
} else if (answer == 2) {
  const removed = num1.pop(); // Oxirgi elementni o'chirish
  alert(`Javob: ${removed}`); // O'chirilgan elementni ko'rsatish
  console.log(num1);
} else if (answer == 3) {
  const removed = num1.shift(); // Boshidagi elementni o'chirish
  alert(`Javob: ${removed}`); // O'chirilgan elementni ko'rsatish
  console.log(num1);
} else if (answer == 4) {
  num1.unshift(num); // Foydalanuvchi kiritgan ismni boshiga qo'shish
  alert(`Javob: ${num1}`); // Yangi massivni ko'rsatish
  console.log(num1);
} else {
  alert("Noto'g'ri qiymat kiritildi!"); // Noto'g'ri qiymat uchun xabar
}
