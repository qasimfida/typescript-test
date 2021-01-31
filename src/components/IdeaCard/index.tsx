import { Card, Typography, Button, Avatar } from '@material-ui/core';
import * as React from 'react';
import { useStyles } from './styles';
import Chart from '../Chart';
import { chartData } from './data';
import { ICard } from '../../types/IdeaCard';
import dallor from '../../assets/images/YFI 9.png';
import user from '../../assets/images/4.png';
import like from '../../assets/images/like.png';
import comment from '../../assets/images/comment.png';
import star from '../../assets/images/star.png';

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
                    <Avatar alt="Cindy Baker" src={dallor} className={classes.userImage} />
                    <Typography className={classes.cardAmount} variant="h5" component="h5">
                        ${price || '12345'}
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
            <div className={classes.footer}>
                <div className={classes.paper}>
                    <Avatar alt="user" src={user} className={classes.userImage} />
                    <Typography className={classes.postDate} variant="body2" component="span">
                        {timeStamp || '3m ago'}
                    </Typography>
                </div>
                <div className={classes.paper}>
                    <Button variant="outlined" className={classes.btnLike}>
                        {likesCount || 12}{' '}
                        <Avatar alt="like" src={like} className={classes.like + ' ' + classes.iconSize} />
                    </Button>
                    <div className={classes.flex}>
                        <Typography
                            className={classes.postDate + ' ' + classes.margins}
                            variant="body2"
                            component="span"
                        >
                            {commentsCount || 4}
                        </Typography>
                        <Avatar alt="comment" src={comment} className={classes.iconSize} />
                        <Avatar alt="star" src={star} className={classes.star + ' ' + classes.iconSize} />
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default IdeaCard;
