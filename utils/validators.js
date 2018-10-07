export const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    console.log('this must be have value')
    return 'require'
  }
}

export const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not valid email.`
  }
}