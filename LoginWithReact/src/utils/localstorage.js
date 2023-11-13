export function getToken() {
  return localStorage.getItem("token");
}

export function saveToken(token) {
  localStorage.setItem("token", token);
}

export function removeToken() {
  localStorage.removeItem("token");
}

export function getUser() {
  return localStorage.getItem("username");
}

export function saveUser(user) {
  
  localStorage.setItem("data_user", JSON.stringify(user));
  localStorage.setItem("ID_user", user.idUser);
  localStorage.setItem("username", user.nameUser);
}

export function removeUser() {
  localStorage.removeItem("ID_user");
  localStorage.removeItem("username");
}

export function setDatosProfile(data) {
  localStorage.setItem('dataProfile' ,JSON.stringify(data));
}
