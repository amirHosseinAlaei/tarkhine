// *navBarmoda

// ?dekstop
//branchModal
const ShowModalBtnBranchBtn = document.querySelector(".ModalBtnBranchBtn");
const modalBranch = document.querySelector(".modalBranch");

ShowModalBtnBranchBtn.addEventListener("click", function(event) {
  event.stopPropagation(); // جلوگیری از پخش رویداد به عناصر بالادستی
  modalBranch.classList.contains("hidden")
    ? modalBranch.classList.remove("hidden")
    : modalBranch.classList.add("hidden");
});

document.addEventListener("click", function(event) {
  var isClickInside = modalBranch.contains(event.target);
  if (!isClickInside && !modalBranch.classList.contains("hidden")) {
    modalBranch.classList.add("hidden");
  }
});




// menu

const ShowModalBtnMenu = document.querySelector(".ModalBtnMenu");
const modalMenu = document.querySelector(".modalMenu");

ShowModalBtnMenu.addEventListener("click", function(event) {
  event.stopPropagation(); // جلوگیری از پخش رویداد به عناصر بالادستی
  if (modalMenu.classList.contains("hidden")) {
    modalMenu.classList.remove("hidden");
  } else {
    modalMenu.classList.add("hidden");
  }
});

document.addEventListener("click", function(event) {
  var isClickInside = modalMenu.contains(event.target);
  if (!isClickInside && !modalMenu.classList.contains("hidden")) {
    modalMenu.classList.add("hidden");
  }
});


// profileModal
const showProfileBtn = document.querySelector(".profileBtn");
const profileModal = document.querySelector(".profileModal");

showProfileBtn.addEventListener("click", function(event) {
  event.stopPropagation(); // جلوگیری از پخش رویداد به عناصر بالادستی
  if (profileModal.classList.contains("hidden")) {
    profileModal.classList.remove("hidden");
  } else {
    profileModal.classList.add("hidden");
  }
});

document.addEventListener("click", function(event) {
  var isClickInside = profileModal.contains(event.target);
  if (!isClickInside && !profileModal.classList.contains("hidden")) {
    profileModal.classList.add("hidden");
  }
});

// ?mobile
// hamburgerBox

//  ! *** *** click any wher and remove !!!!!! *** ***
//
//
//
//
// ! navbar menue mobile .....
//
//
//
//
//
//
//

// *slider
// انتخاب عناصر
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");

let currentSlideIndex = 0;
let isHovering = false;

// تابع برای نمایش اسلاید فعلی و پنهان کردن بقیه
const showSlide = (index) => {
  slides.forEach((slide, idx) => {
    slide.style.display = idx === index ? "block" : "none";
  });
};

// تابع برای فعال/غیرفعال کردن نقاط
const updateDots = (index) => {
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === index);
  });
};

// رویداد کلیک برای دکمه‌ی بعدی
nextBtn.addEventListener("click", (e) => {
  e.preventDefault()
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) currentSlideIndex = 0;

  showSlide(currentSlideIndex);
  updateDots(currentSlideIndex);
});

// رویداد کلیک برای دکمه‌ی قبلی
prevBtn.addEventListener("click", (e) => {
  e.preventDefault()

  currentSlideIndex--;

  if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;

  showSlide(currentSlideIndex);
  updateDots(currentSlideIndex);
});

// رویدادها برای hover روی اسلایدها
slides.forEach((slide) => {
  slide.addEventListener("mouseenter", () => {
    isHovering = true;
  });

  slide.addEventListener("mouseleave", () => {
    isHovering = false;
  });
});

// تایمر برای خودکار چرخش اسلایدها
setInterval(() => {
  if (!isHovering) {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) currentSlideIndex = 0;

    showSlide(currentSlideIndex);
    updateDots(currentSlideIndex);
  }
}, 5000); // زمان را به میلی‌ثانیه تنظیم کنید، مثلاً 5000 برای 5 ثانیه

const  inputEmail = document.getElementById("inputEmail")

const  inputLabel = document.getElementById("inputLabel")

inputEmail.addEventListener("input",  (e) =>{

if (e.target.value==="".trim() ) {
  inputLabel.style.display="block"
  
}else{
inputLabel.style.display="none"

}


})
