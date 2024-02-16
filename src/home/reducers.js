import { ADD_DATA_REQUEST, EDIT_USER_DATA, SET_SELECTED_USER } from './actions'


const initialState = {
    userData: [{
        name: "xyz",
        age: "20",
        profession: "CA"
    },

    {
        name: "abc",
        age: "22",
        profession: "Engg"

    }
    ],
    selectedUser: {}
}

const userReducer = ((state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA_REQUEST:
            const isExist = state.userData.find((per) => per.name === action.userData.name)
            if (isExist) {
                window.alert("User already exists")
            } else
                return {
                    ...state,
                    userData: [...state.userData, action.userData]
                }
        case SET_SELECTED_USER:
            return {
                ...state,
                selectedUser: action.user

            }
        case EDIT_USER_DATA:
            const index = state.userData.findIndex(user => user.name !== action.userData); //finding index of the item
            const newArray = [...state.userData]; //making a new array
            newArray[index].name = action.userData.name//changing value in the new array
            newArray[index].age = action.userData.age//changing value in the new array
            newArray[index].profession = action.userData.profession//changing value in the new array
            return {
                ...state, //copying the orignal state
                userData: newArray, //reassingning todos to new array
            }
        default:
            return state


    }
})

export default userReducer