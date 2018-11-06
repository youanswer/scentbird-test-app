import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button } from 'react-bootstrap'
import { submitForm, toggleBillingForm } from '~/redux/actions'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { ARROW_IMAGE } from '~/constants'
import FloatingLabel from './Field'
import Select from './Select'
import styles from './index.scss'

class ContactForm extends React.Component {
  toggleForm = () => {
    this.props.dispatch(toggleBillingForm(!this.props.isBillingHidden))
  }

  form = ({ handleSubmit, handleChange, handleBlur, values, errors }) => {
    const { isBillingHidden } = this.props
    return (
      <form method="POST" onSubmit={handleSubmit} className={styles.shippingForm}>
        <h1>Shipping address</h1>
        <Row>
          <Col xs={12} md={6}>
            <FloatingLabel
              id="firstName"
              placeholder="First name"
              name="firstName"
              onChange={handleChange} // By default client side validation is done onChange
              onBlur={handleBlur} // By default client side validation is also done onBlur
              value={values.firstName}
              errorText={errors.firstName}
            />
          </Col>
          <Col xs={12} md={6}>
            <FloatingLabel
              id="lastName"
              placeholder="Last name"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              errorText={errors.lastName}
            />
          </Col>
          <Col xs={12} md={8}>
            <FloatingLabel
              id="streetAddress"
              placeholder="Street address"
              name="streetAddress"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.streetAddress}
              errorText={errors.streetAddress}
            />
          </Col>
          <Col xs={12} md={4}>
            <FloatingLabel
              id="aptSuite"
              placeholder="Apt/Suite (Optional)"
              name="aptSuite"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.aptSuite}
              errorText={errors.aptSuite}
            />
          </Col>
          <Col xs={12} md={4}>
            <FloatingLabel
              id="zip"
              placeholder="ZIP Code"
              name="zip"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.zip}
              errorText={errors.zip}
            />
          </Col>
          <Col xs={12} md={4}>
            <Select
              id="city"
              placeholder="Select City"
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
              errorText={errors.city}
            >
              <option value="" />
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
            </Select>
          </Col>
          <Col xs={12} md={4}>
            <Select
              id="state"
              placeholder="Select State"
              name="state"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.state}
              errorText={errors.state}
            >
              <option value="" />
              <option value="New York">New York</option>
              <option value="California">California</option>
            </Select>
          </Col>
          <Col xs={12}>
            <FloatingLabel
              id="country"
              placeholder="Country"
              name="country"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.country}
              errorText={errors.country}
            />
          </Col>
          <Col xs={12} md={6}>
            <FloatingLabel
              id="phone"
              placeholder="Mobile number (Optional)"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              errorText={errors.phone}
            />
          </Col>
          <Col xsHidden smHidden md={6}>
            <p className={styles.discounts}>
              We may send you special discounts and offers
            </p>
          </Col>
          <Col xs={12}>
            <div
              className={styles.checkbox}
            >
              <input
                type="checkbox"
                id="useSameAddress"
                value="other"
                defaultChecked={isBillingHidden}
                onChange={this.toggleForm}
              />
              <label htmlFor="useSameAddress" />
              <span>Use this address as my billing address</span>
            </div>
          </Col>
        </Row>
        {!isBillingHidden && this.renderBillingForm({ handleChange, handleBlur, values, errors })}
        <Row className={styles.actionsContainer}>
          <Col xs={12} sm={6} smPush={6}>
            <Button
              block
              bsClass={styles.button}
              onClick={() => handleSubmit()}
            >
              BUY NOW
              <img src={ARROW_IMAGE} alt="arrow" />
            </Button>
          </Col>
          <Col xs={12} sm={6} smPull={6}>
            <div className={styles.backButton} onClick={() => this.props.history.goBack()}>
              Back
            </div>
          </Col>
        </Row>
      </form>
    )
  }

  renderBillingForm = ({ handleChange, handleBlur, values, errors }) => {
    return (
      <div>
        <h1>Billing address</h1>
        <Row>
          <Col xs={12} md={8}>
            <FloatingLabel
              id="billingStreetAddress"
              placeholder="Street address"
              name="billingStreetAddress"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.billingStreetAddress}
              errorText={errors.billingStreetAddress}
            />
          </Col>
          <Col xs={12} md={4}>
            <FloatingLabel
              id="billingAptSuite"
              placeholder="Apt/Suite (Optional)"
              name="billingAptSuite"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.billingAptSuite}
              errorText={errors.billingAptSuite}
            />
          </Col>
          <Col xs={12} md={4}>
            <FloatingLabel
              id="billingZip"
              placeholder="ZIP Code"
              name="billingZip"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.billingZip}
              errorText={errors.billingZip}
            />
          </Col>
          <Col xs={12} md={4}>
            <Select
              id="billingCity"
              placeholder="Select City"
              name="billingCity"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.billingCity}
              errorText={errors.billingCity}
            >
              <option value="" />
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
            </Select>
          </Col>
          <Col xs={12} md={4}>
            <Select
              id="billingState"
              placeholder="Select State"
              name="billingState"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.billingState}
              errorText={errors.billingState}
            >
              <option value="" />
              <option value="New York">New York</option>
              <option value="California">California</option>
            </Select>
          </Col>
          <Col xs={12}>
            <FloatingLabel
              id="billingCountry"
              placeholder="Country"
              name="billingCountry"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.billingCountry}
              errorText={errors.billingCountry}
            />
          </Col>
        </Row>
      </div>
    )
  }

  render() {
    const { isBillingHidden } = this.props

    const {
      aptSuite,
      city,
      country,
      firstName,
      lastName,
      phone,
      state,
      streetAddress,
      zip,
      billingAptSuite,
      billingCity,
      billingCountry,
      billingState,
      billingStreetAddress,
      billingZip
    } = this.props

    const addressFormSchema = {
      firstName: Yup.string()
        .matches(/^[a-zA-Z]+$/, 'This field shall contain only letters')
        .required('First name is required.'),
      lastName: Yup.string()
        .matches(/^[a-zA-Z]+$/, 'This field shall contain only letters')
        .required('Last name is required'),
      streetAddress: Yup.string()
        .matches(/^[a-zA-Z0-9\s,'-]*$/, 'This field shall contain only letters, numbers, - or space')
        .min(3, 'Street address must be at least 3 characters long.')
        .required('Street address is required'),
      zip: Yup.string()
        .min(3, 'ZIP code must be at least 3 characters long.')
        .required('ZIP code is required'),
      city: Yup.string()
        .min(2, 'City must be at least 2 characters long.')
        .required('City is required'),
      state: Yup.string()
        .min(2, 'State must be at least 3 characters long.')
        .required('State is required'),
      country: Yup.string()
        .min(2, 'Country must be at least 3 characters long.')
        .required('Country is required')
    }

    const addressDefaultValues = {
      aptSuite,
      city,
      country,
      firstName,
      lastName,
      phone,
      state,
      streetAddress,
      zip
    }

    const billingDefaultValues = {
      billingAptSuite,
      billingCity,
      billingCountry,
      billingState,
      billingStreetAddress,
      billingZip
    }

    const billingSchema = {
      billingStreetAddress: Yup.string()
        .matches(/^[a-zA-Z0-9\s,'-]*$/, 'This field shall contain only letters, numbers, - or space')
        .min(3, 'Street address must be at least 3 characters long.')
        .required('Street address is required'),
      billingZip: Yup.string()
        .min(3, 'ZIP code must be at least 3 characters long.')
        .required('ZIP code is required'),
      billingCity: Yup.string()
        .min(2, 'City must be at least 2 characters long.')
        .required('City is required'),
      billingState: Yup.string()
        .min(2, 'State must be at least 3 characters long.')
        .required('State is required'),
      billingCountry: Yup.string()
        .min(2, 'Country must be at least 3 characters long.')
        .required('Country is required')
    }

    const schema = isBillingHidden
      ? Object.assign(
        {},
        addressFormSchema
      )
      : Object.assign(
        {},
        addressFormSchema,
        billingSchema
      )

    const initialValues = isBillingHidden
      ? Object.assign(
        {},
        addressDefaultValues
      )
      : Object.assign(
        {},
        addressDefaultValues,
        billingDefaultValues
      )


    return (
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setFieldError }) => {
            try {
              this.props.dispatch(submitForm(values))
            } catch (errors) {
              console.log('errors', errors)
              errors.forEach((err) => {
                setFieldError(err.field, err.error)
              })
            }
          }}
          validationSchema={Yup.object().shape(schema)}
          component={this.form}
        />
      </div>
    )
  }
}

ContactForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isBillingHidden: PropTypes.bool.isRequired,
  aptSuite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  streetAddress: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  billingAptSuite: PropTypes.string.isRequired,
  billingCity: PropTypes.string.isRequired,
  billingCountry: PropTypes.string.isRequired,
  billingState: PropTypes.string.isRequired,
  billingStreetAddress: PropTypes.string.isRequired,
  billingZip: PropTypes.string.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired,
}

const mapStateToProps = state => state.contact.formData

export default connect(
  mapStateToProps,
  null
)(ContactForm)
