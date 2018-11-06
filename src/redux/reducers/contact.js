import { SUBMIT_FORM, TOGGLE_BILLING_FORM } from '../actionTypes'

const initialState = {
  formData: {
    aptSuite: '',
    city: '',
    country: '',
    firstName: '',
    lastName: '',
    phone: '',
    state: '',
    streetAddress: '',
    zip: '',
    isBillingHidden: true,
    billingAptSuite: '',
    billingCity: '',
    billingCountry: '',
    billingState: '',
    billingStreetAddress: '',
    billingZip: ''
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM: {
      console.log('Form was submitted with values:', action.payload)
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload
        }
      }
    }
    case TOGGLE_BILLING_FORM: {
      return {
        ...state,
        formData: {
          ...state.formData,
          isBillingHidden: action.payload.isBillingHidden
        }
      }
    }
    default:
      return state
  }
}
