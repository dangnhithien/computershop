const initialState = {
  todos: [
    {
      text: "Eat food",
      completed: true,
    },
    {
      text: "Exercise",
      completed: false,
    },
  ],
};

const root = (state = initialState, action) => {
  return state;
};

export default root;
