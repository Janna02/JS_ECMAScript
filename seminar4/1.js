"use strict";

// Задача

// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.

const userList = document.getElementById("userList");
const apiUrl = "https://jsonplaceholder.typicode.com/users";

function fetchUsers() {
  return fetch(apiUrl)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching users:", error);
      return [];
    });
}

function saveUsersToLocalStorage(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function getUsersFromLocalStorage() {
  const usersJson = localStorage.getItem("users");
  return JSON.parse(usersJson) || [];
}

function displayUsers(users) {
  userList.innerHTML = "";
  for (const user of users) {
    const li = document.createElement("li");
    li.textContent = user.name;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteUser(user.id));

    li.appendChild(deleteButton);
    userList.appendChild(li);
  }
}

async function init() {
  let users = getUsersFromLocalStorage();
  if (users.length === 0) {
    users = await fetchUsers();
    saveUsersToLocalStorage(users);
  }
  displayUsers(users);
}

function deleteUser(userId) {
  let users = getUsersFromLocalStorage();
  users = users.filter((user) => user.id !== userId);
  saveUsersToLocalStorage(users);
  displayUsers(users);
}

async function refreshUserList() {
  const users = await fetchUsers();
  saveUsersToLocalStorage(users);
  displayUsers(users);
}

const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", refreshUserList);

init();
