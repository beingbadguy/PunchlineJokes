const type = document.querySelector("#type");
const line = document.querySelector("#line");
const punch = document.querySelector("#punch");
const button = document.querySelector("button");
const errorMsg = document.querySelector(".error");
const load = document.querySelector(".load");

let url = "https://official-joke-api.appspot.com/jokes/random";
async function fetchJoke() {
  load.style.display = "block";

  try {
    const res = await fetch(url);
    const jokes = await res.json();
    // console.log(jokes);

    type.innerHTML = jokes.type;
    line.innerHTML = jokes.setup;
    punch.innerHTML = jokes.punchline;
  } catch (error) {
    errorMsg.innerHTML = "too many request, wait 15 minutes";
    console.log("error : ", error);
  } finally {
    load.style.display = "none";
  }
}

button.addEventListener("click", () => {
  fetchJoke();
});
