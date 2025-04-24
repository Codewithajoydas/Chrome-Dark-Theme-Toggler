document.getElementById("inject").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const currentTheme = document.body.getAttribute("data-theme");

      if (currentTheme === "dark") {
        // Switch to light theme
        document.body.style.background = "#fff";

        const divs = document.querySelectorAll("div");
        divs.forEach((div) => {
          div.style.background = "#fff";
          div.style.color = "#000";
        });

        document.body.setAttribute("data-theme", "light");
        console.log("Switched to light mode");
      } else {
        // Switch to dark theme
        document.body.style.background = "#222";

        const divs = document.querySelectorAll("div");
        divs.forEach((div) => {
          div.style.background = "#333";
          div.style.color = "#fff";
        });

        document.body.setAttribute("data-theme", "dark");
        console.log("Switched to dark mode");
      }
    },
  });
});
