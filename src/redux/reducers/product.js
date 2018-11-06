import { SELECT_PRODUCT } from '../actionTypes'

const initialState = {
  selectedProduct: {
    id: 0,
    text: '1.7 oz Subscription',
    price: '14.95',
    size: '1.7'
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT: {
      const { id, text, price, size } = action.payload
      return {
        ...state,
        selectedProduct: {
          id,
          text,
          price,
          size
        }
      }
    }
    default:
      return state
  }
}
