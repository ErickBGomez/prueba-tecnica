const activitiesReducer = (state, action) => {
  switch (action.type) {
    case "Add": {
      if (state.some((activity) => activity.id === action.newActivity.id))
        return;

      return [...state, action.newActivity];
    }
    case "Remove": {
      if (!state.some((activity) => activity.id === action.newActivity.id))
        return;

      return state.filter((activity) => activity.id !== action.newActivity.id);
    }

    default:
  }
};

export default activitiesReducer;
