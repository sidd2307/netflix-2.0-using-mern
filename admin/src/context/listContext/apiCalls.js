import axios from 'axios'
import { getListsFailure, getListsStart, getListsSuccess } from "./ListActions"
import { deleteListsFailure, deleteListsStart, deleteListsSuccess } from "./ListActions"
import { createListFailure, createListStart, createListSuccess } from "./ListActions"

export const getLists = async (dispatch) => {
    dispatch(getListsStart())
    try {
        const res = await axios.get("/lists", { headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken, } })
        dispatch(getListsSuccess(res.data))
    } catch (error) {
        dispatch(getListsFailure())
    }
}

export const deleteLists = async (id, dispatch) => {
    dispatch(deleteListsStart())
    try {
        await axios.delete("/lists/"+id, { headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken, } })
        dispatch(deleteListsSuccess(id))
    } catch (error) {
        dispatch(deleteListsFailure())
    }
}

export const createList = async (list, dispatch) => {
    dispatch(createListStart())
    try {
        const res = await axios.post("/lists",list, { headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken, } })
        dispatch(createListSuccess(res.data))
    } catch (error) {
        dispatch(createListFailure())
    }
}

