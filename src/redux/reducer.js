import { INIT_COMPANIES_LIST, INIT_EMPLOYEES_LIST, TOGGLE_ERROR_ALERT, TOGGLE_SUCCESS_ALERT } from './action_types'

const initState = {
    companiesList: null,
    employeesList: [],
    errorAlert: null,
    successAlert: null
}

export default function reducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}
    selector[INIT_COMPANIES_LIST] = initCompaniesList
    selector[INIT_EMPLOYEES_LIST] = initEmployeesList
    selector[TOGGLE_ERROR_ALERT] = toggleErrorAlert
    selector[TOGGLE_SUCCESS_ALERT] = toggleSuccessAlert

    if(selector[type] === undefined) return {...state}

    return selector[type](state, payload)
}

function initCompaniesList(state, payload) {
    return {...state, companiesList: payload}
}

function initEmployeesList(state, payload) {
    return {...state, employeesList: payload}
}

function toggleErrorAlert(state, payload) {
    return {...state, errorAlert: payload}
}

function toggleSuccessAlert(state, payload) {
    return {...state, successAlert: payload}
}