console.log("Hello");
let checkArr = [];
let isPaused = false;
let isLose = false;

const DATA = [
  {
    id: 1,
    name: "javascript",
    img: "./images/js.png",
  },
  {
    id: 2,
    name: "css3",
    img: "./images/css.png",
  },
  {
    id: 3,
    name: "html5",
    img: "./images/html.png",
  },
  {
    id: 4,
    name: "safari",
    img: "./images/safari.png",
  },
];

const CARDS = [...DATA, ...DATA];

var cardDiv = document.querySelector(".cards");

const draw = () => {
  for (let i = 0; i < CARDS.length; i++) {
    let cardItem = `
    <div class="card" data-label="${CARDS[i].name}">
      <div class="inner-card front">${CARDS[i].name}</div>
      <div class="inner-card back"><img src="${CARDS[i].img}" alt="jj"/></div>
    </div>
  `;
    cardDiv.innerHTML += cardItem;
  }
};
function handleClick(event) {
  const { target } = event;
  console.log(event.target.parentNode);
  if (
    !isPaused &&
    !isLose &&
    !target.classList.contains("card--guessed") &&
    !target.classList.contains("card--picked")
  ) {
    isPaused = true;
    const picked = card.querySelector(".card--picked");
    if (picked) {
      if (picked.dataset.id === target.dataset.id) {
        target.classList.remove("card--picked");
        picked.classList.remove("card--picked");
        target.classList.add("card--guessed");
        picked.classList.add("card--guessed");
        isPaused = false;
      } else {
        target.classList.add("card--picked");
        setTimeout(() => {
          target.classList.remove("card--picked");
          picked.classList.remove("card--picked");
          isPaused = false;
        }, 1500);
      }
      console.log("counter", counter);
      counter -= 1;
      available.innerHTML = counter;
      if (counter === 0) {
        // lose();
      }
    } else {
      target.classList.add("card--picked");
      isPaused = false;
    }

    // Validate is already win
    const isWin =
      cardContainer.querySelectorAll("card--guessed").length ===
      currentCards.length;
    if (isWin) {
      // win();
    }
  }
}

const connectListener = () => {
  const carts = document.querySelectorAll(".card");
  console.log(carts);
  carts.forEach((item) => {
    item.addEventListener("click", handleClick);
  });
};

const checkFlip = () => {
  isPaused = true;
  modalTitle.innerHTML = "You win! 🙌🥳";
  modal.classList.add("modal--open");
};

draw();
connectListener();
