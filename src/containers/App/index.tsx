import * as React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import IdeaCard from '../../components/IdeaCard';

const useStyles = makeStyles(() => createStyles(styles));
const App: React.FC = () => {
    const classes = useStyles();
    const data = {
        title: 'With the market looking overbought. I expect a retrace',
        price: '1373.54',
        profit: '0.51%',
        buttonLabel: 'Buy',
        timeStamp: '4m ago',
        likesCount: 5,
        commentsCount: 2,
    };
    return (
        <Grid className={classes.root} container justify="center" alignItems="center">
            <IdeaCard data={data} />
        </Grid>
    );
};

export default App;
