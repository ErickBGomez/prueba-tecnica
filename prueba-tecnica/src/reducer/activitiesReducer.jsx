const activitiesReducer = (state, action) => {
  switch (action.type) {
    case "Add": {
      if (state.some((activity) => activity.id === action.newActivity.id))
        return;

      return [...state, action.newActivity];
    }
    case "Delete": {
      if (!state.some((activity) => activity.id === action.id)) return;

      return state.filter((activity) => activity.id !== action.id);
    }

    case "Reorder": {
      const [...activities] = state;
      const { direction, id } = action;
      let temp;

      if (
        direction + activities.length - 1 >= activities.length ||
        direction + activities.length - 1 < 0
      )
        return [...state];

      const index = activities.findIndex((activity) => activity.id === id);

      temp = activities[index + direction];
      activities[index + direction] = activities[index];
      activities[index] = temp;

      return [...state, activities];
    }

    default:
  }
};

export default activitiesReducer;
