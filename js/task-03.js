const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulRef = document.querySelector(".gallery");

/* const arr = [];
for (let i = 0; i < images.length; i += 1) {
  const markup = `<li><img class="gallery__image" src= "${images[i].url}" alt="${images[i].alt}"></li>`;
  console.log(markup);
  arr.push(markup);
}
ulRef.insertAdjacentHTML("afterbegin", arr.join(""));
console.log(arr); */

// another solution method

const anotherMarkup = images
  .map(
    ({ url, alt }) =>
      `<li><img class="gallery__image" src= "${url}" alt="${alt}"></li>`
  )
  .join("");
ulRef.insertAdjacentHTML("afterbegin", anotherMarkup);

ulRef.style.listStyle = "none";
ulRef.style.display = "flex";
