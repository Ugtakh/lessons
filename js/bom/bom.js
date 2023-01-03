function openWindow() {
  let url = "http://www.google.com";
  let features = "height=600,width=800";
  window.open(url, "", features);
}

const showAlert = () => {
  let result = confirm("Та устгахдаа итгэлтэй байна уу ?");

  let message = result ? "Та OK товчийг дарлаа" : "Та Cancel товчийг дарсан";

  alert(message);
};
const startBtn = document.getElementsByTagName("button")[0];
const stopBtn = document.getElementsByTagName("button")[1];
const container = document.getElementById("container");
const username = document.getElementById("name");
const password = document.getElementById("pass");
const aimag = document.getElementById("aimag");

const h1 = document.getElementsByTagName("h1")[0];
let count = 0;
let timer = null;
let seconds = 0;
let minutes = 0;
let hours = 0;

const increment = () => {
  seconds = new Date().getSeconds();
  minutes = new Date().getMinutes();
  hours = new Date().getHours();
  h1.innerHTML = `<span style="color: red">Time</span>: ${hours}:${minutes}:${seconds}`;
};
const clear = () => {
  clearInterval(timer);
};

// setTimeout(increment, 1000);
const start = () => {
  startBtn.classList.toggle("btn-salmon");
  if (startBtn.textContent === "start") {
    startBtn.textContent = "stop";
  } else {
    startBtn.textContent = "start";
  }
  console.log(username.value);
  console.log(password.value);
  console.log(aimag.value);
};
timer = setInterval(increment, 1000);

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", () => {
  location = "./about/about.html";
});

const changeColor = (e) => {};

const con = `
<div class="blue">
    <div>
        <div>
            <h1>Pinecone</h1>
        </div>
       
    </div>
</div>
`;

container.innerHTML = con;

//onclick="";
//onclick="";
