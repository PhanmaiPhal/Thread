"use strict";
const container = [
  {
    title: "Hello ",
    des: "Your welcome ",
    img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/09/instagram-image-size.jpg",
  },
  {
    title: "Hello",
    des: "Your welcome",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
  {
    title: "Hello",
    des: "Your welcome",
    img: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg",
  },
  {
    title: "Hello",
    des: "Your welcome ",
    img: "https://th.bing.com/th/id/OIG.MxQxUggA0RKmKdTjwAqw",
  },
  {
    title: "Hello",
    des: "Your welcome ",
    img: "https://th.bing.com/th/id/OIG.MxQxUggA0RKmKdTjwAqw",
  },
];

let card = "";
let containerSection = document.querySelector("#container");
container.forEach((container) => {
  console.log(container);
  card += `
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
      <a href="#" class="w-">
        <img class="h-full w-ful" src="${container.img}" alt=""/>
      </a>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-1000 dark:text-white">${container.title}</h5>
        <p class="mb-3 font-normal text-gray-900 dark:text-gray-800">${container.des}</p>
      </div>
    </div>
    `;
});

// containerSection.innerHTML += card;

containerSection.innerHTML += `
  <div class="grid grid-cols-5 gap-4">
    ${card}
  </div>
`;