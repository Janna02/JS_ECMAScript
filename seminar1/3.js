"use strict";

// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(rootElement, className) {
  if (rootElement.classList.contains(className)) {
    return rootElement;
  }
  if (rootElement.children.length === 0) return;
  for (const child of rootElement.children) {
    const el = findElementByClass(child, className);
    if (el) return el;
  }
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
