import React, {createContext} from 'react';

const AuthContext = createContext({
    auth: undefined,
    login: (response: any) => null,
    logout: () => null
});

export default AuthContext;
