export const saveDataLocalStorage = (data) => {
    return localStorage.setItem("todoData", JSON.stringify(data))
}

export const getDataLocalStorage = (key) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : []; // always return an array
    } catch (error) {
        console.error("Error parsing localStorage data:", error);
        return [];
    }
};

export const deleteDataLocalStorage = (key, id) => {
    const data = JSON.parse(localStorage.getItem(key)) || [];
    const updatedData = data.filter((todo) => todo.id !== id);
    localStorage.setItem(key, JSON.stringify(updatedData));
}
