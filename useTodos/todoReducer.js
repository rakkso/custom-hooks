



export const todoReducer = (initialState =[], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload];
        case '[TODO] Delete Todo':
            return initialState.filter(todo => todo.id != action.payload);
        case '[TODO] Toggle Todo':
             return initialState.map( todo => {
               
                if ( todo.id === action.payload ) {
                    console.log("es igual",todo.id,"a", action.payload);
                    return  {
                        ...todo,
                        done:!todo.done
                    }
                }
                return todo;
            });
            
           
        case '[TODO] Add Todo2':
           throw new Error('Action.type: ABC no está implementada');
            
        default:
            return initialState;
    }
}

5112810390984