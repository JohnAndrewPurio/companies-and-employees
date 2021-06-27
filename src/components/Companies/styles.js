import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    companies: {
        margin: theme.spacing(3),
        padding: theme.spacing(2),
        minHeight: '95%'
    },
    empty: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        padding: theme.spacing(2)
    }
}))