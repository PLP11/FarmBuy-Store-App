// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const logoutForm = document.getElementById('logout-form');

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(registerForm);
        const username = formData.get('username');
        const password = formData.get('password');
        const email = formData.get('email');
        const full_name = formData.get('full_name');
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password, email, full_name })
            });
            if (response.ok) {
                alert('Registration successful');
                
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const username = formData.get('username');
        const password = formData.get('password');
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            if (response.ok) {
                alert('Login successful');
            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    logoutForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/logout', {
                method: 'POST'
            });
            if (response.ok) {
                alert('Logout successful');
            } else {
                alert('Logout failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Check if the current page is the course content page
    if (window.location.pathname === '/course-content') {
        // Call the fetchCourseContent function
        fetchCourseContent();
    }

     // Check if the current page is the course content page
    if (window.location.pathname === '/leader-board') {
        // Fetch course content from server
        fetchLeaderboardData();
    }

    // Check if the current page is the course content page
    if (window.location.pathname === '/dashboard') {
        //fetch Logged in user's full name
        fetchFullName();
    }
});






function fetchFullName() {
    // Make AJAX request to fetch the user's full name from the server
    fetch('/get-fullname')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display the user's full name on the dashboard
            displayFullName(data.fullName);
        })
        .catch(error => {
            console.error('Error fetching user full name:', error);
        });
}
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick =() =>{
   searchForm.classList.toggle('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')

}
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick =() =>{
    shoppingCart.classList.toggle('active')
    searchForm.classList.remove('active')
    
    loginForm.classList.remove('active')
    navbar.classList.remove('active')
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick =() =>{
    loginForm.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    
    navbar.classList.remove('active')
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =() =>{
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
   
}
window.onscroll =() =>{
 
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')

}
 var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,

    },
    centeredSlides: true,
    breakpoints: {
        0:{
            slidesPerView: 1,
            

        },
        768: {
            slidesPerView: 2,
        

        },
        1020: {
            slidesPerView:3,
           
        },

    },
 });




