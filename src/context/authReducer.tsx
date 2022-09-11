import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'logOut'}
  | {type: 'changeFavIcon'; payload: {iconName: string}}
  | {type: 'changeUserName'; payload: {userName: string}};

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'signIn':
      return {...state, isLoggedIn: true, username: 'no-username-yet'};
    case 'changeFavIcon':
      return {...state, favoriteIcon: action.payload.iconName};
    case 'logOut':
      return {isLoggedIn: false, favoriteIcon: undefined, username: undefined};
    case 'changeUserName':
      return {...state, username: action.payload.userName};
    default:
      return state;
  }
}
