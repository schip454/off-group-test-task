export const handleTabs = (tabs, tabContent) => {


  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab");

      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });

      tabContent.forEach((pane) => {
        pane.classList.remove("active");
      });

      tab.classList.add("active");

      const pane = document.getElementById(tabId);
      pane.classList.add("active");
    });
  });
}