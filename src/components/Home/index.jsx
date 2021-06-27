import { CssBaseline, Grid } from '@material-ui/core'
import { useEffect } from 'react'
import CompanyForm from '../CompanyForm'
import Companies from '../Companies'
import EmployeeForm from '../EmployeeForm'
import { fetchCompaniesListFromDB, fetchEmployeesListFromDB } from '../../api/firebaseFetchCalls'

export default function Home() {
    useEffect(() => {
        fetchCompaniesListFromDB()
        fetchEmployeesListFromDB()
    }, [])

    return (
        <>
            <CssBaseline />
            <Grid container>
                <Grid item xs={9}>
                    <Companies />
                </Grid>
                <Grid item xs={3}>
                    <Grid container justify="center">
                        <Grid item>
                            <CompanyForm />
                        </Grid>
                        <Grid item>
                            <EmployeeForm />
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}
