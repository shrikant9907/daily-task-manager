export function getTodosFromStorage() {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
}
  
export function setTodosToStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}
