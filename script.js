const navbar = document.querySelector(".js-select");
const mode = document.querySelector(".container .order-3");
const body = document.querySelector("#home");
const nav = document.querySelector("nav");
const jumbotron = document.querySelector(".jumbotron");
const about = document.getElementById("about");
const project = document.getElementById("project");
const h2Project = document.querySelector(".h2-project");
const card = document.querySelector(".card");
const wave1 = document.querySelector("svg .wave-1");
const wave2 = document.querySelector("svg .wave-2");
const wave3 = document.querySelector("svg .wave-3");
const wave4 = document.querySelector("svg .wave-4");
const footer = document.querySelector("footer");
const contact = document.querySelector("#contact");
const button = document.querySelector("form button");

const dom = [nav, jumbotron, about, project, h2Project, project, wave1, wave2, wave3, wave4, contact, footer, button];
const kelas = ["bg-dark", "jumbotron-dark", "about-dark", "project-dark", "project-darkh2", "project", "wave13-dark", "wave2-dark", "wave13-dark", "wave4-dark", "contact", "bg-dark", "btn-dark"];

mode.addEventListener("click", () => {
  for (let i = 0; i < dom.length; i++) {
    dom[i].classList.toggle(kelas[i]);
  }
});

// Mengirim email

// ambil DOM element form
const name = document.getElementById("name");
const email = document.getElementById("email");
const subjek = document.getElementById("subjek");
const message = document.getElementById("pesan");

button.addEventListener("click", async function (e) {
  e.preventDefault();
  ValidateEmail(fetchData());
});

// Hapus pesan
function deleteMsg() {
  const form = [name, email, subjek, message];
  form.forEach((e) => (e.value = ""));
}

// Fetch message POST
async function fetchData() {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "7b348bb20cmsh5adf4c315a2c8a3p1d7a1ajsna1079d9dd43e",
      "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
    },
    body: `{"personalizations":[{"to":[{"email":"pantekzonk@gmail.com"}],"subject":"${name.value} | ${subjek.value}"}],"from":{"email":"${email.value}"},"content":[{"type":"text/plain","value":"${message.value}"}]}`,
  };

  await fetch("https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send", options)
    .then((response) => {
      response.json();
      const msg = document.querySelector(".msg");
      if (response.ok) {
        console.log("OK");
        msg.classList.add("success");
        msg.innerHTML = "Success";
        if (msg.classList.contains("fail")) {
          msg.classList.toggle("fail");
        }
      } else if (response.status === "429") {
        msg.classList.add('fail');
        msg.innerHTML = response.statusText;
      } else {
        console.log("NOT OK");
        msg.classList.add("fail");
        msg.innerHTML = "Email yang anda masukan salah dan/atau masukan form kosong";
        if (msg.classList.contains("success")) {
          msg.classList.toggle("success");
        }
      }
    })
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  deleteMsg();
}

function ValidateEmail(fetchData) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) && name.value != "" && subjek.value != "" && message.value != "") {
    fetchData();
  }
  return false;
}
