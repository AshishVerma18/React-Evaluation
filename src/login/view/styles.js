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
    avatar: {
        // margin: theme.spacing(1),
        // backgroundColor: theme.palette.secondary.main,
        boxShadow: "none"
    },
    form: {
        width: '100%',
    },
    submit: {
        backgroundColor: '#5138EE',
        padding: 15,
        marginTop:"15px",
        "&:hover": {
            backgroundColor: '#3318e0',
        }
    },
    loginTitle: {
        fontSize: 16,
        color: '#939191',
        paddingTop: 15,
        paddingBottom: 15,
    },

    // [theme.breakpoints.down('xs')]: {
    //     paper: {
    //         margin: theme.spacing(6, 6),
    //     },
    // },
    // [theme.breakpoints.down('sm')]: {
    //     paper: {
    //         margin: theme.spacing(6, 6),
    //     },
    // },
    // [theme.breakpoints.down('md')]: {
    //     paper: {
    //         margin: theme.spacing(6, 6),
    //     },
    // },
    flexProp: {
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        textAlign: 'center',
        justifyItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        width: "40%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: '0 auto',
        // [theme.breakpoints.down("md")]: {
        //     width: "50%",
        // },
    },
    formlogin: {
        width: 500,
        background: 'rgb(255, 255, 255)',
        boxShadow: 'rgb(0 0 0 / 5%) 0px 3px 15px 0px',
        borderRadius: '10px',
        padding: '40px 50px',
    },

    loginbutton: {
        background: '#5138EE',
        "&:hover": {
            background: '#3318e0 !important',
        },
    },


    greeting: {
        fontWeight: 500,
        textAlign: "center",
        // marginTop: theme.spacing(4),
    },
    subGreeting: {
        fontWeight: 500,
        textAlign: "center",
        marginTop: theme.spacing(2),
    },

    // textFieldUnderline: {
    //     "&:before": {
    //         borderBottomColor: theme.palette.primary.light,
    //     },
    //     "&:after": {
    //         borderBottomColor: theme.palette.primary.main,
    //     },
    //     "&:hover:before": {
    //         borderBottomColor: `${theme.palette.primary.light} !important`,
    //     },
    // },
    // textField: {
    //     borderBottomColor: theme.palette.background.light,
    // },
    fieldset: {
        border: '1px solid red',
    },
    formButtons: {
        width: "100%",
        marginTop: theme.spacing(4),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

    },
    snackbarcustomBtn: {
        backgroundColor: '#fff',
        padding: 4,
        minWidth: 45,
        color: "#000",
        "&:hover": {
            background: '#efefef',
            color: "#000",
        }
    }
})
)
);


