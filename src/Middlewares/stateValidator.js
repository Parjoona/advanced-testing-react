import tv4 from 'tv4'
import stateSchema from 'Middlewares/stateSchema'

export default ({ dispatch, getState }) => (next) => (action) => {

  // Goes through all the other middlewares first
  next(action)

  if (!tv4.validate(getState(), stateSchema)) console.warn('Invalid state schema')
}