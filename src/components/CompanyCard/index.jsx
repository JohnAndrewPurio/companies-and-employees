import { Button, Card, CardContent, CardActions, CardHeader, Divider, Typography } from '@material-ui/core'
import { useStyles } from './styles'
import { useHistory } from 'react-router-dom'

export default function CompanyCard({ company }) {
    const classes = useStyles()
    const history = useHistory()

    const redirectHandler = () => {
        history.push(`/companies/${company.id}`)
    }

    return (
        <Card elevation={4} variant="outlined" className={classes.root}>
            <CardHeader
                title={company.name}
            />
            <Divider />
            <CardContent>
                <Typography variant="h6" compnent="h6" >
                    Address:
                </Typography>
                <Typography variant="body2" compnent="p" >
                    {company.address}
                </Typography>
                <Typography variant="h6" compnent="h6" >
                    Revenue:
                </Typography>
                <Typography variant="body2" compnent="p" >
                    $ {company.revenue}
                </Typography>
                <Typography variant="h6" compnent="h6" >
                    Phone:
                </Typography>
                <Typography variant="body2" compnent="p" >
                    {company.phone}
                </Typography>
            </CardContent>
            <Divider />
            {
                history.location.pathname === '/companies' ? <CompanyOverviewButton redirectHandler={redirectHandler} />
                    : <></>
            }

        </Card>
    )
}


function CompanyOverviewButton({ redirectHandler }) {
    return (
        <CardActions>
            <Button
                variant="contained"
                onClick={redirectHandler}
                color="primary"
            >
                Company Overview
            </Button>
        </CardActions>
    )
}
