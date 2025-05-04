import axiosInstance from "./axios"


export const login = async () => {
    const url = '/auth/login'

    try {
        const response = await axiosInstance.post(url)
        console.log(response)
        return response.data?.user
    } catch (error) {
        throw error;
    }
}

export const signin = async () => {
    const url = '/auth/signup'

    try {
        const response = await axiosInstance.post(url)
        console.log(response)
        return response.data?.user
    } catch (error) {
        throw error;
    }
}