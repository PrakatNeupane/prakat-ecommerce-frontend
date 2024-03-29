import axios from "axios";

const rootUrlAPI = "http://localhost:8000/api/v1";
const adminEP = rootUrlAPI + "/admin";
const catEP = rootUrlAPI + "/category"
const productEP = rootUrlAPI + "/products"

const apiProcessor = async ({ method, url, dataObj }) => { // data must be object
    try {
        const { data } = await axios({
            method,
            url,
            data: dataObj,
        });
        return data
    } catch (error) {
        let message = error.message;
        if (error.response && error.response.data) {
            message = error.response.data.message
        }
        return {
            status: "error",
            message,
        }
    }
}

export const postUser = async (dataObj) => {
    const url = adminEP
    return apiProcessor({ method: "post", url, dataObj })
};

export const postEmailVerification = dataObj => {
    const url = adminEP + "/email-verification"
    return apiProcessor({ method: "post", url, dataObj })
}

export const loginUser = (dataObj) => {
    const url = adminEP + "/login"
    return apiProcessor({ method: "post", url, dataObj })
};


// CATEGORY API

export const getCategories = () => {
    const url = catEP
    return apiProcessor({ method: "get", url })
}

export const postCategories = (dataObj) => {
    const url = catEP
    return apiProcessor({ method: "post", url, dataObj })
}
export const deleteCategory = (_id) => {
    const url = catEP
    return apiProcessor({ method: "delete", url, dataObj: { _id } })
}

export const updateCategory = (dataObj) => {
    const url = catEP
    return apiProcessor({ method: "put", url, dataObj })
}

// PRODUCT API
export const getProducts = () => {
    const url = productEP
    return apiProcessor({ method: "get", url })
}

export const postProduct = (dataObj) => {
    const url = productEP
    return apiProcessor({ method: "post", url, dataObj })
}

export const deleteProducts = (dataObj) => {
    const url = productEP
    return apiProcessor({ method: "delete", url, dataObj })
}