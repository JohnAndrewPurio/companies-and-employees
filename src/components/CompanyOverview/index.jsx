import { Divider, Grid, Paper, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import CompanyCard from '../CompanyCard'
import EmployeeCard from '../EmployeeCard'
import { useStyles } from './styles'

export default function CompanyOverview({ id }) {
    const classes = useStyles()
    const company = useSelector(state => state.companiesList.find(company => company.id === id))
    const employeesList = useSelector(state => state.employeesList.filter(employee => employee.employer === id))

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <CompanyCard company={company} />
                </Grid>
            </Grid>
            {
                employeesList.length ?
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <Paper className={classes.container} elevation={3}>
                                <Typography variant="h5" component="h5">
                                    Employees
                                </Typography>
                                <Divider />
                                {
                                    employeesList.map(employee => (
                                        <EmployeeCard key={employee.id} employee={employee} />
                                    ))
                                }
                            </Paper>
                        </Grid>
                    </Grid>
                : <></>
            }
        </Grid>
    )
}
