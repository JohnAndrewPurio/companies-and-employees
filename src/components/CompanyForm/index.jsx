import { useRef } from 'react'
import {
    Button, Divider, FormControl, InputAdornment, InputLabel, OutlinedInput, Paper, Typography, TextField
} from '@material-ui/core'
import { useStyles } from './styles'
import { useDispatch } from 'react-redux'
import { addNewCompanyToDB } from '../../api/firebaseFetchCalls'
import { toggleErrorAlert, toggleSuccessAlert } from '../../redux/actions'
import ErrorAlert from '../ErrorAlert'
import SuccessAlert from '../SuccessAlert'

export default function CompanyForm() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const name = useRef()
    const address = useRef()
    const revenue = useRef()
    const phone = useRef()

    const buttonHandler = () => {
        const result = {
            name: name.current.value,
            address: address.current.value,
            revenue: revenue.current.value,
            phone: phone.current.value
        }

        const invalid = validateForm(result)

        if (!!!invalid) {
            name.current.value = ''
            address.current.value = ''
            revenue.current.value = ''
            phone.current.value = ''

            addNewCompanyToDB(result)
            dispatch( toggleSuccessAlert(`Successfully added ${result.name} to database`) )

            return
        }

        dispatch( toggleErrorAlert(invalid)) 
    }

    return (
        <>
            <Paper elevation={3} className={classes.root}  >
                <Typography variant="h6">
                    Add New Company
                </Typography>
                <Divider />
                <TextField
                    inputRef={name}
                    className={classes.input}
                    id="name"
                    label="Name"
                    variant="outlined"
                    color="primary"
                />
                <TextField
                    inputRef={address}
                    className={classes.input}
                    id="address"
                    label="Address"
                    variant="outlined"
                    color="primary"
                />
                <FormControl className={classes.input} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Revenue</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        inputRef={revenue}
                        type="number"
                        inputProps={{
                            step: 100,
                            min: 0
                        }}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        labelWidth={67}
                    />
                </FormControl>
                <TextField
                    inputRef={phone}
                    className={classes.input}
                    id="phone"
                    label="Phone"
                    variant="outlined"
                    color="primary"
                />
                <Divider />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={buttonHandler}
                >
                    Save
                </Button>
            </Paper>
            <ErrorAlert />
            <SuccessAlert />
        </>
    )
}

function validateForm(data) {
    try {
        const { name, address, revenue, phone } = data
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/

        if (!name)
            return 'Name field cannot be empty'
        if (!address)
            return 'Address field cannot be empty'
        if (!revenue)
            return 'Revenue field cannot be empty'
        if (!phone)
            return 'Phone field cannot be empty'
        if(!phoneRegex.test(phone))
            return 'Invalid phone number format'
    } catch (error) {
        return error
    }
}