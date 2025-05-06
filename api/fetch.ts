import axiosInstance from "./axios"

export const getCategories = async () => {
    const url = '/categories'
    try {
        const response = await axiosInstance.get(url)
        console.log('categories======>>>>>>>>', response.data)
        return response.data
    } catch (error) {
        console.log('categories error====>>>>>', error)
        throw error 
    }
}