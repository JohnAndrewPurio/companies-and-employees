import { INIT_COMPANIES_LIST, INIT_EMPLOYEES_LIST, TOGGLE_ERROR_ALERT, TOGGLE_SUCCESS_ALERT } from './action_types'

export const initCompaniesList = (payload) => ({
    type: INIT_COMPANIES_LIST,
    payload: payload
})

export const initEmployeesList = (payload) => ({
    type: INIT_EMPLOYEES_LIST,
    payload: payload
})

export const toggleErrorAlert = (payload) => ({
    type: TOGGLE_ERROR_ALERT,
    payload: payload
})

export const toggleSuccessAlert = (payload) => ({
    type: TOGGLE_SUCCESS_ALERT,
    payload: payload
})