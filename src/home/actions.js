export const ADD_DATA_REQUEST = "ADD_DATA_REQUEST";

export const SET_SELECTED_USER = "SET_SELECTED_USER"

export const EDIT_USER_DATA = "EDIT_USER_DATA"

export const addUserData = (userData) => {
    return {
        type: ADD_DATA_REQUEST,
        userData: userData
    }
}

export const setSelctedUser = (user) => {
    return {
        type: SET_SELECTED_USER,
        user: user
    }
}

export const editUserData = (userData) => {
    return {
        type: EDIT_USER_DATA,
        userData: userData
    }
}