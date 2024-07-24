// *navBarmoda

// ?dekstop
//branchModal
const ShowModalBtnBranchBtn = document.querySelector(".ModalBtnBranchBtn");
const modalBranch = document.querySelector(".modalBranch");

ShowModalBtnBranchBtn.addEventListener("click", () =>
  modalBranch.classList.contains("hidden")
    ? modalBranch.classList.remove("hidden")
    : modalBranch.classList.add("hidden")
);

// menu

const ShowModalBtnMenu = document.querySelector(".ModalBtnMenu");
const modalMenu = document.querySelector(".modalMenu");

ShowModalBtnMenu.addEventListener("click", () => {
  if (modalMenu.classList.contains("hidden")) {
    modalMenu.classList.remove("hidden");
  } else {
    modalMenu.classList.add("hidden");
  }
});

// profileModal

const showProfileBtn = document.querySelector(".profileBtn");
const profileModal = document.querySelector(".profileModal");

showProfileBtn.addEventListener("click", () => {
  if (profileModal.classList.contains("hidden")) {
    profileModal.classList.remove("hidden");
  } else {
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

const slide = document.querySelectorAll(".slide");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

const dot = document.querySelectorAll(".dot");
var num = 0;

let isHover = false;

next.addEventListener("click", (e) => {
  e.preventDefault();

  num++;

  slide.forEach((s) => {
    s.style.display = "none";
  });

  dot.forEach((s) => {
    s.classList.remove("active");
  });

  if (num > slide.length - 1) {
    num = 0;
  }
  dot[num].classList.add("active");

  slide[num].style.display = "block";
});

prev.addEventListener("click", (e) => {
  e.preventDefault();

  num--;

  slide.forEach((s) => {
    s.style.display = "none";
  });
  dot.forEach((s) => {
    s.classList.remove("active");
  });

  if (num < 0) {
    num = slide.length - 1;
  }
  dot[num].classList.add("active");

  slide[num].style.display = "block";
});

slide.forEach((w) => {
  w.addEventListener("mouseover", () => {
    isHover = true;

    w.addEventListener("mouseout", () => {
      isHover = false;
    });
  });
});

setInterval(() => {
  if (isHover === false) {
    num++;

    slide.forEach((s) => {
      s.style.display = "none";
    });

    if (num > slide.length - 1) {
      num = 0;
    }

    dot.forEach((s) => {
      s.classList.remove("active");
    });

    dot[num].classList.add("active");

    slide[num].style.display = "block";
  }
}, 500000);

// brache btn
const bracheOne = document.querySelector(".branche-1");
const btnOne = document.querySelector(".btn-1");

bracheOne.addEventListener("mouseover", () => {
  btnOne.classList.remove("hidden");
});

bracheOne.addEventListener("mouseout", () => {
  btnOne.classList.add("hidden");
});

const bracheTwo = document.querySelector(".brTwo");
const btnTwo = document.querySelector(".btnTwo");

bracheTwo.addEventListener("mouseover", () => {
  btnTwo.classList.remove("hidden");
});

bracheTwo.addEventListener("mouseout", () => {
  btnTwo.classList.add("hidden");
});

const bracheTh = document.querySelector(".brTh");
const btnTh = document.querySelector(".btnTh");

bracheTh.addEventListener("mouseover", () => {
  btnTh.classList.remove("hidden");
});

bracheTh.addEventListener("mouseout", () => {
  btnTh.classList.add("hidden");
});



const bracheF = document.querySelector(".brTF");
const btnTF = document.querySelector(".btnTF");



bracheF.addEventListener("mouseover", () =>{
  btnTF.classList.remove("hidden")

})

bracheF.addEventListener("mouseout", () =>{
  btnTF.classList.add("hidden")
  
  })