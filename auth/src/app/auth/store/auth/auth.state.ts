
export interface AuthState {

  testString: string;

  login: {
    defaultEmail: string;
  };

}

export const initialAuthState: AuthState = {
  testString: 'This is a test (I hope you can see this)',

  login: {
    defaultEmail: '',
  },

};
