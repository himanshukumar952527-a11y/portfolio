
// hero 
const words=[

"Machine Learning Engineer",

"AI Enthusiast",

"Data Science Student",

"Python Developer"

];

let i=0;

let j=0;

let current="";

let isDeleting=false;

function type(){

current=words[i];

document.getElementById("typing").textContent=current.substring(0,j);

if(!isDeleting){

j++;

if(j>current.length){

isDeleting=true;

setTimeout(type,1200);

return;

}

}

else{

j--;

if(j===0){

isDeleting=false;

i=(i+1)%words.length;

}

}

setTimeout(type,isDeleting?40:90);

}

type();


// skills


const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        tabButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        // Remove active class from all contents
        tabContents.forEach(content =>
            content.classList.remove("active")
        );

        // Add active class to clicked button
        button.classList.add("active");

        // Show selected tab content
        const targetTab = button.dataset.tab;

        document
            .getElementById(targetTab)
            .classList.add("active");

    });

});

// footer
document.querySelectorAll('.footer-links a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({

            behavior:'smooth'

        });

    });

});
