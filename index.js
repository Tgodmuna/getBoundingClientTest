// Define constants for your HTML elements
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const ListItems = document.querySelectorAll("li");
const cat1 = document.querySelector(".cat1");
const cat2 = document.querySelector(".cat2");
const cat3 = document.querySelector(".cat3");

// Function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to update the sidebar item's background color based on visibility
function updateSidebarItems() {
  ListItems.forEach((item, index) => {
    const section = document.querySelector(`.cat${index + 1}`);
    if (isElementInViewport(section)) {
      item.style.borderColor = "black";
      item.style.borderStyle = "solid";
      item.style.borderRadius = "2rem";
      item.style.transition = "0.9s"; // Change to the desired background color
      item.style.padding = "1rem";
      item.style.backgroundColor = "white";
      item.style.color = "black";
    } else {
      item.style.backgroundColor = ""; // Reset background color
      item.style.borderColor = "";
      item.style.borderStyle = "";
      item.style.borderRadius = "";
      item.style.padding = "";
    }
  });
}

// Add an event listener for scrolling to update the sidebar items
window.addEventListener("scroll", updateSidebarItems);

//fucntion scroll Cat(n) into view
const intoView = () => {
  ListItems.forEach((item, index) => {
    const cat = document.querySelector(`.cat${index + 1}`);
    item.addEventListener("click", () => {
      cat.scrollIntoView();
    });
  });
};

intoView();
