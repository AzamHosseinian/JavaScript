document.addEventListener("DOMContentLoaded", () => {
  const todosContainer = document.getElementById("todos");

  todosContainer.addEventListener("click", (event) => {
    // Check if the clicked target or its parent is a .todo
    if (event.target.classList.contains("todo") || event.target.closest(".todo")) {
      event.target.classList.toggle("active");
    }

    // Check if the clicked target is a .toggler
    let toggler = event.target.closest(".toggler");
    if (toggler) {
      toggler.classList.toggle("active");
      let nextElement = toggler.nextElementSibling;
      if (nextElement && nextElement.classList.contains("toggler-target")) {
        nextElement.classList.toggle("active");
      }
    }
  });
});
