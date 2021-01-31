import { makeStyles, createStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(() => createStyles(
{
    card: {
        width: '241px',
        height: '307px',
        padding: '16px',
        borderRadius: '8px',
        border: '1px solid #E4E4E4'
    },
    heading: {
        fontSize: '17px',
        color: '#0E103C',
        fontWeight: 600,
        lineHeight: '23.85px',
        letterSpacing: '1px'
    },
    paper: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '7px 0',
        alignItems: 'center'
    },
    cardHeading: {
        fontSize: '14px',
    },
    flex : {
        display: 'flex',
        padding: '0',
        alignItems: 'center'
    },
    cardButton: {
        borderRadius: '16px',
        padding: '3px 10px',
        fontSize: '12px',
        fontWeight: 400,
        textTransform: 'capitalize',
        minWidth: 'auto',
        minHeight: 'auto',
        background: '#28C76F',
        width: '34px',
        height: '23px'
    },
    cardAmount: {
        position: 'relative',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight :'22.14px',
        color: '#0E103C',
        padding: '0 6px 0 8px'
    },
    percentage: {
        lineHeight :'16.61px',
        fontWeight: 600,
        fontSize: '12px',
        color: '#28C76F'
    },
    userImage: {
        width: '24px',
        height: '24px',
    },
    postDate : {
        lineHeight :'17px',
        fontSize: '12px',
        color: '#CDCDCD'
    },
    margins: {
        margin: '0 4px'
    },
    btnLike: {
        borderRadius: '25px',
        fontWeight: 400,
        fontSize: '12px',
        color: '#CDCDCD',
        borderColor: '#CDCDCD important',
        minWidth: 'auto',
        minHeight: 'auto',
        height: '28px',
        padding: '0px 10px'
    },
    iconSize: {
        height: 'auto',
        width: 'auto'
    },
    padding: {
        padding: '14px 0 0 0'
    },
    star : {
        marginLeft: '10px',
    },
    like : {
        marginLeft: '7px'
    },
    footer : {
        position: 'relative',
        top: '-10px'
    }
}
));