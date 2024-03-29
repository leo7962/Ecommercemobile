import {API_URL} from "../utils/constants";

export async function registerApi(formData: any) {
    try {
        const url = `${API_URL}/auth/local/register`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, params);
        return await response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function loginApi(formData: any){
    try {
        const url = `${API_URL}/auth/local`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, params);
        return await response.json();
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

export async function getMeApi(token: any) {
    try {
        const url = `${API_URL}/users/me`;
        const params = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, params);
        return await response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function updateUserApi(auth: any, formData: any) {
    try {
        const url = `${API_URL}/users/${auth.idUser}`;
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${auth.token}`
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, params);
        return await response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}
