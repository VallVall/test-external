window.addEventListener("DOMContentLoaded", () => {
  const hook = document.getElementById("hook");

  const hookText = document.createElement("h1");

  hookText.textContent = "Hook text";

  hook.appendChild(hookText);
});
