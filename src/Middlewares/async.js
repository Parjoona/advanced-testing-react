export default ({ dispatch }) => (next) => (action) => {
  if (!action.payload || !action.payload.then) {
    return next(action)
  }

  action.payload.then((response) => {
    const payloadAction = {
      ...action,
      payload: response
    }
  
    dispatch(payloadAction)

  })
}