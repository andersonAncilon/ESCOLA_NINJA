export const Types = {
  SAVE_USER: 'user/SAVE_USER',
};

const INITIAL_STATE = {
  userData: {
    name: 'Anderson',
  },
};

export default function user(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case Types.SAVE_USER:
      return { ...state, data: payload };
    default:
      return state;
  }
}

export const Creators = {
  saveUser: userData => ({
    type: Types.SAVE_USER,
    payload: userData,
  }),
};
