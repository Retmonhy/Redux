const initialState = {
    todos: [],
    count: 0,
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT" : {
            return {
            ...state,
            count: state.count + 1
            }
        }
        case 'ADD' : {
            return {
                ...state,
                todos : [{title: action.title, 
                isDone: false, 
            isImportant: false,
            }, ...state.todos]
            }
        }
        default: return state
    }
}

export const incFunc = () => {
    return (dispatch) => {
        return dispatch({type: 'INCREMENT'})
    }
}

export const addTodo = (title) => {
    return (dispatch) => {
        return dispatch({type: 'ADD', title: title})
    }
}
export default tasks