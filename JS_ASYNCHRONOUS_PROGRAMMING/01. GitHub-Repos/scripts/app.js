async function loadRepos() {
   const divEl = document.getElementById("res");

   const res = await fetch("https://api.github.com/users/testnakov/repos");
   const text = await res.text();

   divEl.textContent = text;
}