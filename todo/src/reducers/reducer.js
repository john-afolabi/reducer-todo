const initialState = {
  todos: [
    {
      task: "Learn about reducers",
      id: 3892987589,
      completed: false
    }
  ],
  name: ""
};

const ADD_TODO = "ADD_TODO";
const TOGGLE_COMPLETED_FIELD = "TOGGLE_COMPLETED_FIELD";
const CLEAR_COMPLETED = "CLEAR_COMPLETED";
const INPUT_CHANGE = "INPUT_CHANGE";

function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { task: state.name, id: Date.now(), completed: false }
        ], name = ""
      };
    case TOGGLE_COMPLETED_FIELD:
      return { ...state, todos: action.payload };
    case CLEAR_COMPLETED:
      return { ...state, todos: action.payload };
    case INPUT_CHANGE:
      return { ...state, name: action.payload };
    default:
  }
}

export { initialState, reducer}
