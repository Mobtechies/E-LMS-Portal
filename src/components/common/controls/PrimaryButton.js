import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiButton from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px 20px",
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    border: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    },
    "&:focus, &:active": {
      backgroundColor: theme.palette.primary.dark
    },
    "&:disabled": {
      backgroundColor: theme.palette.primary.disabled,
      color: theme.palette.primary.disabledText
    }
  }
}));

const PrimaryButton = (props) => {
  const { children, disabled, ...rest } = props;
  const classes = useStyles();

  return (
    <MuiButton classes={{ root: classes.root }} disabled={disabled} {...rest}>
      {children}
    </MuiButton>
  );
};

export default PrimaryButton;
