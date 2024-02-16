import { makeStyles } from '@mui/styles';

export default makeStyles((theme => ({
    root: {
        height: '100vh',
    },
    paper: {
        // margin: theme.spacing(6, 16),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: 'none',
    },
    form: {
        width: '100%',
    },
    submit: {
        backgroundColor: '#5138EE',
        padding: 15,
        marginTop: "15px",
        "&:hover": {
            backgroundColor: '#3318e0',
        }
    },

    flexProp: {
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        textAlign: 'center',
        justifyItems: 'center',
        justifyContent: 'center',
    }




})
)
);


