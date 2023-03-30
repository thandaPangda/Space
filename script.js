const writeBtn = document.getElementById("write-btn");
const formContainer = document.createElement("div");
formContainer.classList.add("form-container");
formContainer.innerHTML = `
  <textarea id="content"></textarea>
  <div class="form-buttons">
    <button id="save-btn">Save</button>
  </div>
`;

writeBtn.addEventListener("click", () => {
  document.body.appendChild(formContainer);
  formContainer.style.display =
