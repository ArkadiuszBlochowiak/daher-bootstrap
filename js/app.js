const social = document.getElementById("header-nav");
let distance = social.offsetTop;

function social_sticky() {
  if (window.pageYOffset > distance) {
    social.classList.add("fixed-top");
  } else {
    social.classList.remove("fixed-top");
  }
}

window.onscroll = () => {
  social_sticky();
};


new Splide(".splide", {
  type: "loop",
  perPage: 1,
  perMove: 1,
  cover: true,
}).mount();


const drop = document.getElementById("svc-drop");
const list = document.getElementById("svc-list");
let check = true;

drop.onclick = () => {
  if (check) {
    list.classList.remove("list-none");
    check = false;
  } else {
    list.classList.add("list-none");
    check = true;
  }
};
