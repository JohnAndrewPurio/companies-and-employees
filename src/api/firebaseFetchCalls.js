import { store } from '../redux/store'
import '../firebaseConfig'
import firebase from 'firebase'
import { initCompaniesList, initEmployeesList } from '../redux/actions'

const firestoreDB = firebase.firestore()
const companies = 'companies'
const employees = 'employees'

export const fetchCompaniesListFromDB = () => {
    const doc = firestoreDB.collection('companies')

    doc.onSnapshot( docSnapshot => {
        const companiesList = []
        docSnapshot.docs.forEach( doc => {
            const data = doc.data()
            data.id = doc.id

            companiesList.push( data )
        })

        companiesList.sort()
        store.dispatch( initCompaniesList(companiesList) )
    }, errorHandler)
    
}

export const addNewCompanyToDB = (data) => {
    try {
        firestoreDB.collection(companies).add(data)
    } catch(error) {
        console.log(error)
    }
}

export const fetchEmployeesListFromDB = () => {
    const doc = firestoreDB.collection('employees')
    const employeesList = []

    doc.onSnapshot(docSnapshot => {
        docSnapshot.docs.forEach( doc => {
            const data = doc.data()
            data.id = doc.id

            employeesList.push( data )
        })
    }, errorHandler)

    store.dispatch( initEmployeesList(employeesList) )
}

export const addNewEmployeeToDB = (data) => {
    try {
        firestoreDB.collection(employees).add(data)
    } catch (error) {
        console.log(error)
    }
}

function errorHandler(error) {
    console.log(error)
}