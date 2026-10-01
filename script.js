// 1. MENU HAMBURGER giao diện Mobile
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navLinks = document.querySelector('.nav-links');

hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. HIỂN THỊ NĂM HIỆN TẠI
const currentYearSpan = document.getElementById('current-year');
currentYearSpan.textContent = new Date().getFullYear();

// 3.SCROLL 
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });

        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// 4. DARK / LIGHT MODE 
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    let theme = 'light';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});

// 5. VALIDATE FORM 

const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Chặn hành vi submit mặc định để kiểm tra bằng JS

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    //1: Không được để trống
    if (name === '' || email === '' || message === '') {
        formFeedback.textContent = 'Vui lòng điền đầy đủ thông tin!';
        formFeedback.style.color = 'red';
        formFeedback.style.display = 'block';
        return;
    }

    //2: Định dạng email 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formFeedback.textContent = 'Email không đúng định dạng (phải có @ và dấu .)!';
        formFeedback.style.color = 'red';
        formFeedback.style.display = 'block';
        return;
    }

    formFeedback.textContent = 'Gửi thành công! Cảm ơn bạn.';
    formFeedback.style.color = 'green';
    formFeedback.style.display = 'block';
    
    contactForm.reset();
});