import { useRef } from 'react'
import { Button, Divider, FormControl, InputLabel, Select, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { useStyles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { toggleErrorAlert, toggleSuccessAlert } from '../../redux/actions'
import { addNewEmployeeToDB } from '../../api/firebaseFetchCalls'


export default function EmployeeForm() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const companiesList = useSelector(state => state.companiesList)
    const name = useRef()
    const address = useRef()
    const employer = useRef()

    const buttonHandler = () => {
        const data = {
            name: name.current.value,
            address: address.current.value,
            employer: employer.current.value
        }

        const invalid = validateForm(data)

        if (!invalid) {
            name.current.value = ''
            address.current.value = ''
            employer.current.value = ''

            addNewEmployeeToDB(data)
            dispatch( toggleSuccessAlert(`Successfully added employee ${data.name} to database`) )

            return
        }

        dispatch( toggleErrorAlert(invalid) )
    }

    return (
        <Paper elevation={3} className={classes.root}>
            <Typography variant="h6">
                Add New Person
            </Typography>
            <Divider />
            <TextField
                inputRef={name}
                className={classes.input}
                id="name-employee"
                label="Name"
                variant="outlined"
                color="primary"
            />
            <TextField
                inputRef={address}
                className={classes.input}
                id="address-employee"
                label="Address"
                variant="outlined"
                color="primary"
            />
            <Grid container justify="center" >
                <SelectTag employer={employer} companiesList={companiesList} />
            </Grid>

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
    )
}

function SelectTag({ employer, companiesList }) {
    const classes = useStyles()

    return (
        <FormControl variant="outlined" className={classes.input} fullWidth>
            <InputLabel id="employer">Select Employer</InputLabel>
            <Select
                native
                labelId="employer"
                label="Select Employer"
                inputProps={<TextField />}
                inputRef={employer}
            >
                <option key="none" aria-label="None" value="" />
                {
                    companiesList && companiesList.map(company => <option key={company.id} value={company.id}>{company.name}</option>)
                }
            </Select>
        </FormControl>
    )
}

function validateForm(data) {
    try {
        const { name, address, employer} = data

        if (!name)
            return 'Name field cannot be empty'
        if (!address)
            return 'Address field cannot be empty'
        if (!employer)
            return 'Employer field cannot be empty'
    } catch (error) {
        return error
    }
}