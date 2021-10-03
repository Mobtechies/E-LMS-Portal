import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Courses</Title>
      <Typography component="p" variant="h4">
       6
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2021
      </Typography>
      <div>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          View Courses
        </Link> */}
      </div>
    </React.Fragment>
  );
}