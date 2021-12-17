//reviews data (local) without AJAX

const peoples= [
    {
        id:1, 
        name: "Vecheslav Sychev",
        job: "Unemployed",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.AJa_1rh88qtKkbwQYMecjgHaLH%26pid%3DApi&f=1",
        text: 
        "Front-end has gave me a hope. I really enjoyed to learn the React technologies. It`s really necessary to perform as many pet-projects as possible.  ",
    },
    {
        id:2, 
        name: "Alexander Sychev",
        job: "Unemployed",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7Lw_QSnKdtuKMPRfjhZ8sgHaEK%26pid%3DApi&f=1",
        text: 
        "I was a welder before my brother showed me a way to provide happines and joy for the internet - users.  A front end developer focuses on all of the design system components that a user interacts with and sees. Everything from menus and colors to animations is running properly due to the front end developer's skill.  ",
    },
    {
        id:3, 
        name: "Donnald Trump",
        job: "Pesident of the USA",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP._Z_anWH8Ar4cHjxMu36TjQHaE7%26pid%3DApi&f=1",
        text: 
        "It's impossible to find a job in front end development without knowing the three key web technologies: HTML, CSS, and JavaScript. HyperText Markup Language (HTML). This is used to describe a structure of a web page. HTML lets you specify where text, images, and other forms of content go on a website. ",
    },
{
    id:4, 
    name: "Nariman aka ABU",
    job: "Mail ru group",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.dxfH1Xk3w-LXGyHw60YcIAHaE7%26pid%3DApi&f=1",
    text: 
    "Frontend Design. Somewhere between design - a world of personas, pixels, and polish - and engineering - a world of logic, loops, and linux - lies frontend design. Frontend design involves creating the HTML, CSS, and presentational JavaScript code that makes up a user interface.  ",
},
{
    id:5, 
    name: "Nikolay Temichenko",
    job: "Math-teacher",
    img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F2325240%2Fimages%2Fo-ANGRY-OLDER-PERSON-facebook.jpg&f=1&nofb=1",
    text: "Front-end that is why I decided to learn math.",
},

{
    id:6, 
    name: "Michael Desyther",
    job:  "Node.js Trainee",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ZdtUTVJeW7Guq7KxZvw8VwHaE8%26pid%3DApi&f=1",
    text: "Amaze!!!!",
},

{
    id:7, 
    name: "Alex Kaganovich",
    job: "Farmer",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8Xj9CyAn1wTXOq-hlelEyQHaFm%26pid%3DApi&f=1",
    text: 
    "We `re glad to get this source control technology, that`s so smart  ",
},

]

const img = document.getElementById ("personImg")
const author = document.getElementById ("Author")
const job = document.getElementById ("job")
const info = document.getElementById ("info")

const prevBtn = document.querySelector ('.prev-btn')
const nextBtn = document.querySelector ('.next-btn')
const randomBtn = document.querySelector ('.random-btn')

//starting item
let currentItem = 0

//load  initial item
window.addEventListener("DOMContentLoaded", function(){
    showPerson (currentItem)
  
})

//showing a person depends on item
function showPerson(person){
    const  item = peoples [person]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text

}

//show person`s deppends on button
nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > peoples.length -1){
        currentItem = 0
    }
    showPerson(currentItem)
})

prevBtn.addEventListener('click', function(){
    currentItem--
    if (currentItem  < 0){
        currentItem = peoples.length -1
    }
    showPerson(currentItem)
})

randomBtn.addEventListener('click', function(){
    let c = Math.floor((Math.random()) * peoples.length)
    currentItem = c
    console.log(currentItem)
    showPerson(currentItem)
})




