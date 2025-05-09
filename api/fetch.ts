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

export const getCategoriesById = async ({categoryId}:{categoryId: string}) => {
    const url = `/categories/${categoryId}/items`
    try {
        const response = await axiosInstance.get(url)
        console.log('categories items ======>>>>>>>>', response.data)
        return response.data
    } catch (error) {
        console.log('categories items error====>>>>>', error?.response?.data?.message)
        throw error?.response?.data?.message
    }
}

export const getResturant = async () => {
    const url = '/resturant'
    try {
        const response = await axiosInstance.get(url)
        console.log('resturants ======>>>>>', response.data)
        return response.data
    } catch (error) {
        console.log('resturant error====>>>>>', error?.response?.data?.message)
        throw error?.response?.data?.message
    }
}