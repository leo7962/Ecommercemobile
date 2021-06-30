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
