import { Card, CardContent, CardHeader, Divider, Typography } from '@material-ui/core'
import { useStyles } from './styles'

export default function EmployeeCard({employee}) {
    const classes = useStyles()

    return (
        <Card elevation={4} variant="outlined" className={classes.root}>
            <CardHeader
                title={employee.name}
            />
            <Divider />
            <CardContent>
                <Typography variant="h6" compnent="h6" >
                    Address:
                </Typography>
                <Typography variant="body2" compnent="p" >
                    {employee.address}
                </Typography>
            </CardContent>
        </Card>
    )
}
