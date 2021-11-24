import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiButton from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "13px 20px",
    background: theme.palette.background.secondary.main,
    color: theme.palette.secondary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
    "&:hover": {
      background: theme.palette.background.secondary.light,
      color: theme.palette.secondary.light,
      border: `2px solid ${theme.palette.secondary.light}`
    },
    "&:focus, &:active": {
      background: theme.palette.background.secondary.dark,
      color: theme.palette.secondary.dark,
      border: `2px solid ${theme.palette.secondary.dark}`
    },
    "&:disabled": {
      background: theme.palette.background.secondary.main,
      color: theme.palette.secondary.disabled,
      border: `2px solid ${theme.palette.secondary.disabled}`
    }
  }
}));

const SecondaryButton = (props) => {
  const { children, disabled, ...rest } = props;
  const classes = useStyles();

  return (
    <MuiButton classes={{ root: classes.root }} disabled={disabled} {...rest}>
      {children}
    </MuiButton>
  );
};

export default SecondaryButton;
