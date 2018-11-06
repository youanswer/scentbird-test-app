import PropTypes from 'prop-types'
import React from 'react'
import styles from './index.scss'

const labelStyles = {
  marginTop: '15px',
  width: '100%',
  boxSizing: 'border-box',
  display: 'inline-block',
  paddingTop: 5,
  position: 'relative'
}

const spanStyles = {
  boxSizing: 'border-box',
  fontSize: '18px',
  lineHeight: '18px',
  fontWeight: 100,
  left: 0,
  padding: '16px',
  color: '#9B9B9B',
  pointerEvents: 'none',
  position: 'absolute',
  top: 0,
  transition: 'font-size 200ms, padding 200ms',
  zIndex: 1
}

const floatingStyles = {
  fontSize: '14px',
  backgroundColor: 'white',
  padding: '0 5px',
  marginLeft: '10px'
}

const inputStyles = {
  width: '100%',
  border: '1px solid #E6E6E6',
  backgroundColor: '#FAFAFA',
  boxSizing: 'border-box',
  fontSize: '18px',
  color: 'black',
  padding: '7px 16px'
}

const focusStyles = {
  borderColor: '#FF458F',
  backgroundColor: 'white',
  outline: 'none'
}

const errorStyles = {
  borderColor: '#FD6464'
}

class FloatingLabel extends React.Component {
  state = {
    floating: false,
    focused: false,
    value: this.props.value
  }

  handleChange = (evt) => {
    const value = evt.target.value

    this.props.onChange(evt)

    this.setState({
      value
    })
  }

  handleFocusChange = (evt) => {
    evt.type === 'focus' ? this.props.onFocus(evt) : this.props.onBlur(evt)

    this.setState({
      focused: !this.state.focused
    })
  }

  isFloating = (value, focused) => {
    return value.length || focused
  }

  render() {
    const { value, focused } = this.state
    const { errorText } = this.props
    const floating = this.isFloating(value, focused)
    const Node = this.props.element
    const floatingStyle = floating && Object.assign({}, floatingStyles)
    const focusStyle = focused && Object.assign({}, focusStyles)
    const errorStyle = errorText && Object.assign({}, errorStyles)
    const labelStyle = Object.assign({}, labelStyles)
    const spanStyle = Object.assign(
      {},
      spanStyles,
      floatingStyle
    )
    const inputStyle = Object.assign(
      {},
      inputStyles,
      focusStyle,
      errorStyle
    )

    return (
      <label htmlFor={this.props.id} style={labelStyle}>
        <span style={spanStyle}>
          {this.props.placeholder}
        </span>
        <Node
          autoCapitalize={this.props.autoCapitalize}
          autoFocus={this.props.autoFocus}
          defaultValue={this.props.value}
          id={this.props.id}
          name={this.props.name}
          onBlur={this.handleFocusChange}
          onChange={this.handleChange}
          onFocus={this.handleFocusChange}
          style={inputStyle}
          type={this.props.type}
          disabled={this.props.disabled}
        />
        {errorText && <span className={styles.errorText}>{errorText}</span>}
      </label>
    )
  }
}

FloatingLabel.propTypes = {
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  element: PropTypes.oneOf(['input', 'textarea']),
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  errorText: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'url', 'search', 'email', 'tel']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

FloatingLabel.defaultProps = {
  autoCapitalize: 'none',
  autoFocus: false,
  disabled: false,
  element: 'input',
  name: '',
  onBlur: () => { },
  onChange: () => { },
  onFocus: () => { },
  placeholder: '',
  type: 'text',
  value: '',
  errorText: ''
}

export default FloatingLabel
