export const setTasks = tasks => ({ type: "SET_TASKS", tasks });
export const addTask = title => ({ type: "ADD_TASK", title });

export const loading = () => ({ type: "LOADING" });
export const loaded = () => ({ type: "LOADED" });

export const loadTodos = () => dispatch => {
    dispatch(loading());
    setTimeout(() => {
        fetch("http://127.0.0.1:8080/todos.json")
            .then(res => res.json())
            .then(json => {
                dispatch(setTasks(json.tasks));
                dispatch(loaded());
            })
            // eslint-disable-next-line
            .catch(console.error);
    }, 3000);
};
