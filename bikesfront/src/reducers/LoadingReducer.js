const INITIAL_STATE = {
  loading: false
}

const loadingReducer = (state = INITIAL_STATE, action) => {
  if (action.type.includes('ATTEMPT')) {
    return { loading: true }
  } else if (action.type.includes('SUCCESS')) {
    return { loading: false }
  } else if (action.type.includes('FAILURE')) {
    return { loading: false }
  }
  switch (action.type) {
    default:
      return state
  }
}

export default loadingReducer