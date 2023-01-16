let icons = document.querySelectorAll(".ico");
let length = icons.length;

icons.forEach((item, index) => {
  item.addEventListener("mouseover", (e) => {
    focus(e.target, index);
  });
  item.addEventListener("mouseleave", (e) => {
    icons.forEach((item) => {
      item.style.transform = "scale(1)  translateY(0px)";
    });
  });
});

const focus = (elem, index) => {
  let previous2 = index - 2;
  let previous1 = index - 1;
  let next1 = index + 1;
  let next2 = index + 2;

  icons.forEach(icon => icon.style.transform = "");

  elem.style.transform = "scale(1.5) translateY(-10px)";

  if (previous2 >= 0) icons[previous2].style.transform = "scale(1.1)";
  if (previous1 >= 0) icons[previous1].style.transform = "scale(1.2) translateY(-6px)";
  if (next1 < icons.length) icons[next1].style.transform = "scale(1.2) translateY(-6px)";
  if (next2 < icons.length) icons[next2].style.transform = "scale(1.1)";
};
