import { SELECT_PRODUCT, SUBMIT_FORM, TOGGLE_BILLING_FORM } from './actionTypes'


export const selectProduct = product => ({
  type: SELECT_PRODUCT,
  payload: {
    ...product
  }
})


export const submitForm = data => ({
  type: SUBMIT_FORM,
  payload: {
    ...data
  }
})

export const toggleBillingForm = isBillingHidden => ({
  type: TOGGLE_BILLING_FORM,
  payload: {
    isBillingHidden
  }
})
