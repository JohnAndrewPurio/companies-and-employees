import { Snackbar } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { toggleErrorAlert } from '../../redux/actions'
import { Alert } from './styles'

export default function ErrorAlert() {
    const dispatch = useDispatch()
    const errorAlert = useSelector(state => state.errorAlert)

    const handleClose = () => {
        dispatch( toggleErrorAlert(null) )
    }

    return (
        <Snackbar 
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
            open={!!errorAlert}
            onClose={handleClose}
            autoHideDuration={3000}
        >
            <Alert severity='error'>{errorAlert}</Alert>
        </Snackbar>
    )
}
