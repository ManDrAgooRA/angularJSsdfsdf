export function setLocalStorage(name, data){
  localStorage.setItem(name, JSON.stringify(data))
}