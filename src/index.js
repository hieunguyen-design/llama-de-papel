console.log("Hello");
// I M P O R T S
import "./styles.css";
import llamaLogo from "./assets/Logo=Color Black.png";
import llamaLogo2 from "./assets/Logo=White.png";
import item1Photo from "./assets/item1.jpg";
import item2Photo from "./assets/item2.jpg";
import item3Photo from "./assets/item3.jpg";
import item4Photo from "./assets/item4.jpg";
import item5Photo from "./assets/item5.jpg";
import appDownloadImage from "./assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
// D E C L A R A T I O N S
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");
const content = document.getElementById("content");
const logo = document.createElement("img");
logo.src = llamaLogo;
const footer = document.createElement("footer");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const headerNav = document.createElement("div");
headerNav.classList.add("headerNav");
headerNav.appendChild(logo);
headerNav.appendChild(nav);
header.appendChild(headerNav);

// F U N C T I O N S
//item
const Menu = Array();
function createItem(name, discription, price, imageurl) {
  return {
    name: name,
    discription: discription,
    price: price,
    imageurl: imageurl,
    infor: function () {
      console.log(`${name} is created.`);
    },
    addtoMenu: function () {
      Menu.push(this);
    },
  };
}
const item1 = createItem(
  "Potato & Pork Taco",
  "A rustic taco with savory pork, diced potatoes, and fresh tomatoes on a handmade corn tortilla.",
  "3.99",
  item1Photo
);
item1.addtoMenu();

const item2 = createItem(
  "Veggie Fiesta Trio",
  "Three soft tacos filled with seasoned veggies, red cabbage, and spicy salsa — perfect for plant lovers.",
  "6.49",
  item2Photo
);
item2.addtoMenu();

const item3 = createItem(
  "Barbacoa Classic",
  "Juicy slow-cooked beef barbacoa, topped with chopped onions and cilantro on a golden corn tortilla.",
  "4.75",
  item3Photo
);
item3.addtoMenu();

const item4 = createItem(
  "Carnitas Especial",
  "Tender pulled pork tacos with lime, cilantro, and a smoky house rub. Served on warm double-layer tortillas.",
  "4.89",
  item4Photo
);
item4.addtoMenu();

const item5 = createItem(
  "Shrimp Verde Taco",
  "Grilled shrimp, sweet corn, and crisp veggies with creamy avocado-lime drizzle — bright, bold, and fresh.",
  "5.25",
  item5Photo
);
item5.addtoMenu();
const item6 = createItem(
  "El Pastor Classic",
  "Marinated pork with pineapple, grilled onions, and a sprinkle of cilantro on a toasted corn tortilla.",
  "4.25",
  item1Photo // or use your new photo path
);
item6.addtoMenu();

const item7 = createItem(
  "Grilled Baja Fish Taco",
  "Crispy white fish, shredded cabbage, fresh lime, and chipotle crema in a soft flour tortilla.",
  "4.75",
  item2Photo
);
item7.addtoMenu();

const item8 = createItem(
  "Carne Asada Taco",
  "Seared steak strips with garlic, lime, pico de gallo, and cotija cheese.",
  "4.99",
  item3Photo
);
item8.addtoMenu();

const item9 = createItem(
  "Street Corn Bowl",
  "Roasted corn, lime mayo, cotija, chili powder, and cilantro over a bed of rice.",
  "3.99",
  item4Photo
);
item9.addtoMenu();

const item10 = createItem(
  "Spicy Shrimp Taco",
  "Cajun shrimp, purple cabbage, mango salsa, and avocado crema on a flour tortilla.",
  "5.25",
  item5Photo
);
item10.addtoMenu();

const reviews = [
  {
    name: "Emily R.",
    title: "The Best Tacos in Town!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Absolutely delicious. Everything was fresh and bursting with flavor. Highly recommend the Taco del Fuego!",
  },
  {
    name: "Carlos M.",
    title: "A Must-Try Spot",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    review:
      "I came here on a whim and it blew me away. Great service and even better food. Tinga tacos are 🔥",
  },
  {
    name: "Jasmine K.",
    title: "My New Favorite Lunch Place",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "The Llama Bowl Supreme is everything! Fresh, filling, and flavorful. I'm already planning my next visit.",
  },
  {
    name: "Liam D.",
    title: "Incredible Flavors!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    review:
      "Hands down the best tacos I've ever had. The spices and texture were perfect. I’ll be back for more every week!",
  },
  {
    name: "Sophia L.",
    title: "Authentic & Delicious",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    review:
      "Reminded me of the tacos I had on the streets of Mexico City. Fresh ingredients and vibrant flavors.",
  },
  {
    name: "Noah B.",
    title: "Perfect for Quick Lunch",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    review:
      "Quick service, tasty food, and generous portions. My go-to lunch spot from now on!",
  },
];

// D O M S
window.addEventListener("load", home_content());
home.addEventListener("click", () => home_content());
menu.addEventListener("click", () => menu_content());
about.addEventListener("click", () => about_content());

// C O N T E N T
//home
function home_content() {
  content.innerHTML = "";
  console.log("Homepage");
  createHeaderBanner();
  createFanFav();
  customerReview();
  location();
}
function createHeaderBanner() {
  const headerBanner = document.createElement("div");
  headerBanner.classList.add("header-banner");
  // headerBanner.appendChild(logo2);
  //headline
  const headline = document.createElement("h1");
  headline.innerHTML = `Bold Flavors.<br>Paper Flames.<br> Welcome to<br> Llama de Papel.`;
  headerBanner.appendChild(headline);
  //subheadline
  const subHeadline = document.createElement("h3");
  subHeadline.innerHTML = `Authentic street tacos, sizzling grilled plates, and bold bites made with heart.<br>Taste the spark that sets us apart.`;
  headerBanner.appendChild(subHeadline);
  //callToAction
  const callToAction = document.createElement("div");
  const viewMenu = document.createElement("button");
  viewMenu.textContent = "View Menu";
  viewMenu.classList.add("viewMenu");
  const appButton = document.createElement("button");
  const appDownload = document.createElement("img");
  appButton.classList.add("appDownload");
  appDownload.src = appDownloadImage;
  appDownload.setAttribute("width", "150px");
  appDownload.setAttribute("padding", "0px");
  appDownload.addEventListener("click", () => {
    window.open(
      "https://www.figma.com/proto/MDe3Scr3bqAV6a2mTeG5KR/FOOD-ORDERING-APP?page-id=423%3A950&node-id=564-5760&p=f&viewport=9719%2C-425%2C2.44&t=Ab2kU4MpTclIzsiU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=564%3A5760"
    );
  });
  appButton.appendChild(appDownload);
  callToAction.appendChild(viewMenu);
  callToAction.appendChild(appButton);
  headerBanner.appendChild(callToAction);
  content.appendChild(headerBanner);
}
function createFanFav() {
  const fanFav = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "♥️ Fan Favorite";
  title.classList.add("title");
  content.appendChild(title);
  //item
  const fanFavList = Array(3);
  const itemList = document.createElement("div");
  for (let i = 0; i < 3; i++) {
    let item = document.createElement("div");
    let itemPhoto = document.createElement("div");
    item.classList.add("item");
    itemPhoto.classList.add("itemPhoto");
    let itemName = document.createElement("h3");
    itemName.textContent = Menu[i].name;
    console.log(Menu[i].imageurl);
    itemPhoto.style.backgroundImage = `url('${Menu[i].imageurl}')`;
    itemList.appendChild(item);
    item.appendChild(itemPhoto);
    item.appendChild(itemName);
    fanFavList[i] = item;
  }
  // console.log(fanFavList);
  fanFav.classList.add("fanFav");
  itemList.classList.add("itemList");

  fanFav.appendChild(itemList);
  content.appendChild(fanFav);
}
function location() {
  const section = document.createElement("div");
  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "🔍 We are located at";
  const addressLine = document.createElement("p");
  addressLine.innerHTML = ` 📍 123 Taco Flame Ave
  Arlington, VA 22201<br>
  United States
`;
  section.classList.add("location");
  addressLine.classList.add("address-line");
  section.appendChild(addressLine);
  content.append(title, section);
}

function customerReview() {
  const title = document.createElement("h1");
  title.textContent = "⭐ Our Beloved Customer Reviews";
  title.classList.add("title");
  content.appendChild(title);
  const section = document.createElement("div");
  section.className = "review-slider";

  const track = document.createElement("div");
  track.className = "review-track";

  reviews.forEach(({ name, title, rating, image, review }) => {
    const card = document.createElement("div");
    card.className = "review-card";
    const stars = "⭐".repeat(rating);

    card.innerHTML = `
    <h3 class="review-title">${title}</h3>
    <div class="review-rating">${stars}</div>
    <p class="review-text">"${review}"</p>
    <div class="review-footer">
      <img class="review-img" src="${image}" alt="${name}'s photo" />
      <span class="review-name">${name}</span>
    </div>
  `;

    track.appendChild(card);
  });

  section.appendChild(track);
  content.appendChild(section);
}
//menu
function menu_content() {
  content.innerHTML = "";
  console.log("Menu");
  const title = document.createElement("h1");
  // title.textContent = "Our Menu";
  content.appendChild(title);
  const section = document.createElement("div");
  section.classList.add("menu-section");
  Menu.forEach(({ name, discription, price, imageurl }) => {
    const card = document.createElement("div");
    card.classList.add("item-card");
    card.innerHTML = `
    <img class="item-img" src="${imageurl}" alt="${name}'s photo" />
    <div class="item-infor">
    <h3 class="item-name">${name}</h3>
    <p class="item-discription">${discription}</p>
    <p class="item-price">${price}</p>
    </div>
    `;
    section.appendChild(card);
  });
  content.appendChild(section);
}

//about
function about_content() {
  console.log("About");
  content.innerHTML = "";
  const space = document.createElement("div");
  const section = document.createElement("div");
  const title = document.createElement("h2");
  const paragraph = document.createElement("p");
  section.classList.add("about-section");
  title.classList.add("title");

  title.textContent = "💬 Our Story";
  paragraph.innerHTML = `Llama de Papel began with a simple idea: tacos should spark joy.

  What started as a backyard grill and a hand-me-down recipe book has grown into a neighborhood go-to for bold, comforting, and unforgettable flavors. We’re not a big chain — we’re a small, local team with big hearts and even bigger flavor.
  
  The name Llama de Papel, or “Paper Flame,” represents the spirit we cook with — a balance of warmth, creativity, and a little bit of fire. Just like a flame that dances on paper, our food is vibrant, unexpected, and always full of life.
  
  We slow-cook our meats, hand-press every tortilla, and make our salsas fresh each morning — no shortcuts, no compromises. From our signature Taco del Fuego to our veggie-packed bowls, every dish is made with purpose, tradition, and just the right kick.
  
  But beyond the food, what truly matters to us is community. We’ve built this place for friends, families, late-night taco seekers, and anyone who walks in hungry and walks out happy. Whether you're stopping by for the first time or returning for your usual, you're always part of the Llama family.
  
  So come hungry. Leave smiling. And taste the spark that started it all.
  
  `;
  section.append(title, paragraph);
  content.append(space, section);
  createFooter();
}
function createFooter() {
  footer.innerHTML = "";
  const siteFooter = document.createElement("div");
  siteFooter.classList.add("site-footer");
  footer.appendChild(siteFooter);
  // Left: Logo
  const footerLeft = document.createElement("div");
  footerLeft.classList.add("footer-left");
  const logo = document.createElement("img");
  logo.src = llamaLogo2;
  logo.alt = "Llama de Papel Logo";
  footerLeft.appendChild(logo);

  // Center: Info
  const footerCenter = document.createElement("div");
  footerCenter.classList.add("footer-center");
  footerCenter.innerHTML = `
    <p><strong>Llama de Papel</strong></p>
    <p>123 Taco Flame Ave, Arlington, VA</p>
    <p>Mon–Sun: 11:00 AM – 10:00 PM</p>
  `;

  // Right: Contact
  const footerRight = document.createElement("div");
  footerRight.classList.add("footer-right");
  footerRight.innerHTML = `
    <p>📞 <a href="tel:+17031234567">(703) 123-4567</a></p>
    <p>📧 <a href="mailto:info@llamadepapel.com">info@llamadepapel.com</a></p>
    <div class="footer-socials">
      <a href="#">Instagram</a> | <a href="#">Facebook</a>
    </div>
  `;

  siteFooter.appendChild(footerLeft);
  siteFooter.appendChild(footerCenter);
  siteFooter.appendChild(footerRight);
  document.body.appendChild(footer);
}
