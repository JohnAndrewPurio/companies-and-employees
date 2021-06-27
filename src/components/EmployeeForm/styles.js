import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        margin: theme.spacing(3),
        width: 250
    },
    input: {
        margin: theme.spacing(2)
    },
    button: {
        margin: theme.spacing(2)
    }
}))