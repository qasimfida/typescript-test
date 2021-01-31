import { Card, Typography, Button, Avatar } from '@material-ui/core';
import Celebiration from '@material-ui/icons/BarChart';
import CommentSharp from '@material-ui/icons/CommentOutlined';
import Star from '@material-ui/icons/Star';
import ThumbUp from '@material-ui/icons/ThumbUp';
import AttachMoney from '@material-ui/icons/AttachMoney';
import * as React from 'react';
import { useStyles } from './styles';
import Chart from '../Chart';
import { chartData } from './data';
import { ICard } from '../../types/IdeaCard';

interface IProps {
    data: ICard;
}
const IdeaCard: React.FC<IProps> = ({ data = {} }) => {
    const { title, price, profit, buttonLabel, timeStamp, likesCount, commentsCount } = data;
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Typography className={classes.heading} variant="h5">
                {title || 'Idea card'}
            </Typography>
            <div className={classes.paper + ' ' + classes.padding}>
                <div className={classes.flex}>
                    <Celebiration />
                    <AttachMoney fontSize={'small'} />
                    <Typography className={classes.cardAmount} variant="h5" component="h5">
                        {price || '12345'}
                    </Typography>
                    <Typography className={classes.percentage} variant="h6" component="p" color="primary">
                        {profit || '4.05%'}
                    </Typography>
                </div>
                <div>
                    <Button size="small" variant="contained" color="secondary" className={classes.cardButton}>
                        {buttonLabel || 'Buy'}
                    </Button>
                </div>
            </div>
            <Chart data={chartData} />
            <div className={classes.paper}>
                <Avatar alt="Cindy Baker" src="#" className={classes.userImage} />
                <Typography className={classes.postDate} variant="body2" component="span">
                    {timeStamp || '3m ago'}
                </Typography>
            </div>
            <div className={classes.paper}>
                <Button variant="outlined" className={classes.btnLike}>
                    {likesCount || 12} <ThumbUp className={classes.margins} color="primary" fontSize={'small'} />
                </Button>
                <div className={classes.flex}>
                    <Typography className={classes.postDate + ' ' + classes.margins} variant="body2" component="span">
                        {commentsCount || 4}
                    </Typography>
                    <CommentSharp className={classes.margins} />
                    <Star className={classes.margins} />
                </div>
            </div>
        </Card>
    );
};

export default IdeaCard;
