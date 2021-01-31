import { useStyles } from '../IdeaCard/styles';
import { makeStyles, createStyles } from '@material-ui/core/styles';
export const styles = makeStyles(() =>
    createStyles({
        chartWrapper: {
            position: 'relative',
            margin: '0 -24px',
        },
        chart: {
            height: '136px',
            width: '100%',
        },
        bottomBar: {
            height: '30px',
            position: 'absolute',
            background: 'white',
            width: '100%',
            bottom: '-11px',
        },
    }),
);
