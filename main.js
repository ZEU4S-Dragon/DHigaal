const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
});

// end menu responsive


const allProduct=[
    {
        image:"images/lightout-01.png",
        name:"Lights Out",
        Author:"Navessa Allen",
        Price:11.99
    },
    {
        image:"images/Righdad-01.png",
        name:"Rich Dad Poor Dad",
        Author:"Robert Kiyosaki",
        Price:34.99
    },
    {
        image:"images/7habit-01.png",
        name:"Atomic Habits",
        Author:"James Clear",
        Price:54.99
    },
    {
        image:"images/maketoday-01.png",
        name:"Make Today Count",
        Author:"John C. Maxwell",
        Price:12.99
    },
    {
        image:"images/learnstatup-01.png",
        name:"The Lean Startup",
        Author:"Eric Ries",
        Price:33.99
    },
    {
        image:"images/art of the war.jpg",
        name:"The Art of War",
        Author:" Sun Tzu",
        Price:53.99
    }
]

//Fetch the product

const productCard = document.getElementById("productCard"); 

allProduct.map((product)=>{
    const ProductHtml = `<div class="shadow-lg   px-4 py-6 ">
            <img class="w-full" src="${product.image}" alt="">
            <h3 class="font-light py-1"><b>Name:<b/> ${product.name}</h3>
            <h3 class="font-light"><b>Author: <b/>${product.Author}</h3>
            <h3 class="font-light py-1"><b>Author: <b/>$${product.Price}</h3>
            <button class="bg-[#E2FE26] py-0.5 px-4 text-lg">Buy Now</button>
          </div>`;
          productCard.innerHTML += ProductHtml;
});

