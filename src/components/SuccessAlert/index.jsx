import { Snackbar } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSuccessAlert } from '../../redux/actions'
import { Alert } from './styles'

export default function SuccessAlert() {
    const dispatch = useDispatch()
    const successAlert = useSelector(state => state.successAlert)

    const handleClose = () => {
        dispatch( toggleSuccessAlert(null) )
    }

    return (
        <Snackbar 
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
            open={!!successAlert}
            onClose={handleClose}
            autoHideDuration={3000}
        >
            <Alert severity='success'>{successAlert}</Alert>
        </Snackbar>
    )
}
