import { CircularProgress, Dialog, DialogContent, Paper, Typography } from '@material-ui/core'
import { useStyles } from './styles'
import { useSelector } from 'react-redux'
import CompanyCard from '../CompanyCard'

export default function Companies() {
    const classes = useStyles()
    const companiesList = useSelector(state => state.companiesList)

    return (
        <>
            <Paper elevation={3} className={classes.companies}>
                {
                    companiesList && companiesList.length > 0 ? companiesList.map(company => <CompanyCard key={company.id} company={company} />)
                        : <Typography className={classes.empty} variant="h6" component="h6">No available companies in the database</Typography>
                }
                <Dialog open={!companiesList}>
                    <DialogContent className={classes.content} >
                        <CircularProgress />
                    </DialogContent>
                </Dialog>
            </Paper>

        </>
    )
}