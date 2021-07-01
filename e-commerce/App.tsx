import React, {useEffect, useMemo, useState} from 'react';
import {Provider as PaperProvider} from "react-native-paper";
import AuthScreen from "./src/screens/Auth";
import AuthContext from "./src/components/context/AuthContext";
import {getTokenApi, removeTokenApi, setTokenApi} from "./src/api/token";
import jwtDecode from "jwt-decode";
import {IUser} from "./src/models/user";
import AppNavigation from "./src/navigation/AppNavigation";

export default function App() {
    const [auth, setAuth] = useState<IUser | null>(null);

    useEffect(() => {
        (async () => {
            const token = await getTokenApi();
            if (token) {
                setAuth({
                    token,
                    idUser: jwtDecode(token).id
                });
            } else {
                setAuth(null);
            }
        })()
    }, []);

    const login = (user: any) => {
        setTokenApi(user.jwt);
        setAuth({
            token: user.jwt,
            idUser: user.user.id
        });
    };

    const logout = () => {
        if (auth) {
            removeTokenApi();
            setAuth(null);
        }
    }

    const authData = useMemo(() => ({
            auth,
            login,
            logout,
        }),
        [auth]
    );

    if (auth === undefined) return null;

    return (
        <AuthContext.Provider value={authData}>
            <PaperProvider>
                {auth ? (<AppNavigation/>) : (<AuthScreen/>)}
            </PaperProvider>
        </AuthContext.Provider>
    );
}
