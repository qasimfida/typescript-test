import { makeStyles, createStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme: any) => createStyles(

{
    card: {
        width: '320px',
        padding: '22px 18px 18px',
        borderRadius: '15px',
        minHeight: 'auto',
        fontFamily: 'san-serif !important'
    },
    heading: {
        fontWeight: 600,
        lineHeight: '24px',
    },
    paper: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 0',
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
        fontSize: '14px',
        textTransform: 'capitalize',
        minWidth: 'auto',
        minHeight: 'auto'
    },
    cardAmount: {
        position: 'relative',
        fontWeight: 'bold',
        left: '-6px',
        fontSize: '16px'
    },
    percentage: {
        fontWeight: 'bold',
        fontSize: '12px'
    },
    userImage: {
        width: '32px',
        height: '32px',
    },
    postDate : {
        color: 'gray'
    },
    margins: {
        margin: '0 4px'
    },
    btnLike: {
        borderRadius: '30px',
        fontWeight: 'bold',
        color: 'gray',
        minWidth: 'auto',
        minHeight: 'auto',
        padding: '5px 10px'
    },
    padding: {
        padding: '16px 0 0 0'
    }
}
));