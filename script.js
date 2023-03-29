const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");
const tabs = ["home", "services", "about us", "contact us", "login"];

const handleTab = (event) => {
  const clickedTabId = event.target.id;
  const clickedTab = document.getElementById(clickedTabId);
  const clickedTabWidth = clickedTab.offsetWidth;
  sliderTag.style.width = clickedTabWidth + "px";
  const clickedTabOffsetLeft = clickedTab.offsetLeft;
  sliderTag.style.transform = `translateX(${clickedTabOffsetLeft}px)`;
};
for (let i = 0; i < tabs.length; i++) {
  const liTag = document.createElement("li");
  liTag.append(tabs[i].toUpperCase());
  liTag.id = i;
  liTag.addEventListener("click", handleTab);
  ulTag.append(liTag);
  if (i === 0) {
    sliderTag.style.width = liTag.offsetWidth + "px";
  }
}
