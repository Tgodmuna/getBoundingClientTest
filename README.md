# Interactive Sidebar with Scroll-to-View Navigation

This is a simple JavaScript project that creates an interactive sidebar with list items that highlight when their corresponding content sections are in the viewport. Additionally, you can scroll to a specific section by clicking on the list items.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [How to Use](#how-to-use)
- [Using `getBoundingClientRect`](#using-getboundingclientrect)
- [License](#license)

## Introduction

In web development, it's common to have long content pages divided into sections. This project offers a solution to improve user experience by providing a sidebar that highlights the section the user is currently viewing and allows them to easily navigate to other sections.

## Features

- **Interactive Sidebar**: The sidebar dynamically updates the appearance of list items based on which section is in the viewport.

- **Smooth Scrolling**: You can click on a list item, and the corresponding section will smoothly scroll into view.

- **Customizable**: The JavaScript code can be customized to match the design and layout of your website.

## How to Use

1. Include the JavaScript code in your HTML document or link it as an external script.
2. Make sure your HTML structure is set up with sections and list items that you want to connect.
3. Customize the JavaScript code as needed, including class names and styling.

## Using getBoundingClientRect
The project uses the getBoundingClientRect method to determine whether an element is in the viewport. getBoundingClientRect returns an object with properties that describe the position of the element relative to the viewport.

The relevant properties are:

- **top**: The distance from the top of the viewport to the top of the element.
- **left**: The distance from the left of the viewport to the left of the element.
- **bottom**: The distance from the top of the viewport to the bottom of the element.
- **right**: The distance from the left of the viewport to the right of the element.
By comparing these properties to the dimensions of the viewport (window.innerHeight and window.innerWidth), the code can determine whether the element is in the viewport or not.

License
This project is licensed under the MIT License - see the LICENSE file for details.

JavaScript code:

```javascript
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
      item style.borderRadius = "2rem";
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

// Function to scroll to a section when a list item is clicked
const intoView = () => {
  ListItems.forEach((item, index) => {
    const cat = document.querySelector(`.cat${index + 1}`);
    item.addEventListener("click", () => {
      cat.scrollIntoView({ behavior: "smooth" });
    });
  });
};

intoView();

```

