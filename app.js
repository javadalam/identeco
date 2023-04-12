const form = document.querySelector("form");
const searchInput = document.querySelector("#search-query");
const resultsList = document.querySelector("#results");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (query === "") {
    return;
  }
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const results = data.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(query.toLowerCase())
        )
      );
      displayResults(results);
    })
    .catch((error) => console.error(error));
});

function displayResults(results) {
  resultsList.innerHTML = "";
  if (results.length === 0) {
    resultsList.innerHTML = "<li>No Found Result.</i>";
    return;
  }

  results.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.title}`;
    resultsList.appendChild(li);
  });
}
