// import { GET_ALL_RECIPES, GET_A_RECIPE, SAVE_ALL_RECIPES } from "./actions";

// const initialState = {
//   recipes: [1, 2],
// };

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case GET_ALL_RECIPES: {
//       //console.log("I AM RETURNING ALL RECIPES!!!!!")
//       return state;
//     }

//     case SAVE_ALL_RECIPES: {
//       return {
//         recipes: action.payload,
//       };
//     }
//     case GET_A_RECIPE: {
//       return state.recipes.find((recipe) => recipe.name === action.payload);
//     }
//     default:
//       return state;
//   }
// }

export const initialState = {
  articles: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_ARTICLES":
      return {
        ...state,
        articles: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
