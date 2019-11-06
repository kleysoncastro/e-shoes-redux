export default function cart(state = [], action) {
  // switch é para que somente o redure cart ouça eventos dele mesmo;
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          ...action.product,
          amount: 1,
        },
      ];
    default:
      return state;
  }
}
