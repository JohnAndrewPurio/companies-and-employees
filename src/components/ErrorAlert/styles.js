import { Alert as MuiAlert } from '@material-ui/lab'

export const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }