const foods = [
  {
    name: "ข้าวมันไก่",
    description: "น้ำมันไก่ปลาผัดพลิไฟแรง",
    price: "ราคา 45-65 บาท",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=85"
  },
  {
    name: "ผัดไทยกุ้งสด",
    description: "เส้นผัดซอสรสเปรี้ยวหวานกับกุ้งสด",
    price: "ราคา 65-89 บาท",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=400&q=85"
  },
  {
    name: "ก๋วยเตี๋ยวต้มยำ",
    description: "เส้นก๋วยเตี๋ยวในน้ำซุปรสเผ็ดเปรี้ยว",
    price: "ราคา 55-75 บาท",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=85"
  },
  {
    name: "ข้าวผัดกุ้ง",
    description: "ข้าวหอมผัดกับกุ้งสดและเครื่องปรุง",
    price: "ราคา 60-80 บาท",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=400&q=85"
  },
  {
    name: "สเต๊กไก่ย่าง",
    description: "ไก่ย่างสมุนไพรพร้อมผักและซอสพริกไทย",
    price: "ราคา 120-150 บาท",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=400&q=85"
  },
  {
    name: "ต้มยำกุ้งน้ำข้น",
    description: "กุ้งสดในน้ำซุปต้มยำรสจัดจ้าน",
    price: "ราคา 145-180 บาท",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=85"
  }
];

let currentIndex = 0;
const image = document.querySelector("#food-image");
const nameElement = document.querySelector("#food-name");
const description = document.querySelector("#food-description");
const price = document.querySelector("#food-price");
const button = document.querySelector("#random-button");

button.addEventListener("click", () => {
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * foods.length);
  } while (nextIndex === currentIndex);

  currentIndex = nextIndex;
  const food = foods[currentIndex];
  image.src = food.image;
  image.alt = food.name;
  nameElement.textContent = food.name;
  description.textContent = food.description;
  price.textContent = food.price;
});
