//Active-NavBar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function()
{
    if(document.documentElement.scrollTop > 20)
    {
        nav.classList.add("scroll-on");
    }else
    {
        nav.classList.remove("scroll-on");
    }
}
//nav-hide
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse')
navbar.forEach(function (a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})


//counter-design
document.addEventListener("DOMContentLoaded",()=> {

function counter (id, start, end, duration){

let obj = document.getElementById(id),

current =start,

range = end- start,

increment = end > start? 1: -1,

step= Math.abs (Math.floor(duration / range)),

timer = setInterval(() => {

current += increment;

obj.textContent = current;

if(current == end) {

clearInterval(timer);

}

}, step);

}

counter ("count1", 0, 1287, 3000);
counter ("count2", 100, 5786, 2500);
counter ("count3", 0, 1440, 3000);
counter ("count4", 0, 1000, 3000);

});


// Function to update the badge display on any page load
function updateBadgeDisplay() {
    const cartBadge = document.getElementById('cart-count');
    let savedCount = localStorage.getItem('cartCount') || 0;
    if(cartBadge) {
        cartBadge.textContent = savedCount;
    }
}
// Function to update the badge display
function updateBadgeDisplay() {
    const cartBadge = document.getElementById('cart-count');
    let savedCount = localStorage.getItem('cartCount') || 0;
    if(cartBadge) cartBadge.textContent = savedCount;
}

// Logic for clicking "Order Now"
const orderButtons = document.querySelectorAll('.main-button');

orderButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        // 1. GATEKEEPER: Check login status
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn !== 'true') {
            alert("Please login first to place an order!");
            window.location.href = "login.html";
            return;
        }

        // 2. CAPTURE DATA: Find the price in the card
        const cardBody = this.closest('.card-body');
        const priceText = cardBody.querySelector('.white-button').textContent;
        const priceValue = priceText.replace('Rs', '').trim();
        
        // 3. SAVE TO STORAGE
        let currentCount = parseInt(localStorage.getItem('cartCount')) || 0;
        localStorage.setItem('cartCount', currentCount + 1);
        localStorage.setItem('selectedPrice', priceValue);

        // 4. GO TO PAYMENT
        window.location.href = "payment.html";
    });
});

document.addEventListener('DOMContentLoaded', updateBadgeDisplay);
