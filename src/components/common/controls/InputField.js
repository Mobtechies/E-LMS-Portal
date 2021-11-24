import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  labelRoot: ({ labelColor }) => ({
    fontFamily: "Montserrat-Medium",
    fontSize: "14px",
    letterSpacing: "0.7px",
    lineHeight: "18px",
    "&.Mui-focused": {
      color: labelColor || theme.palette.black,
    },
  }),
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: ({ error, value }) => ({
    padding: "15px 20px",
    background: theme.palette.background.default,
    color: error
      ? theme.palette.danger.main
      : value
      ? theme.palette.neutral.action.main
      : theme.palette.neutral.default.main,
    border: `1px solid ${
      error
        ? theme.palette.danger.main
        : value
        ? theme.palette.neutral.action.light
        : theme.palette.neutral.default.light
    }`,
    borderRadius: 4,
    fontFamily: "SourceSansPro-Regular",
    fontSize: 16,
    letterSpacing: 0,
    "&::placeholder": {
      color: error
        ? theme.palette.danger.main
        : theme.palette.neutral.default.main,
      opacity: 1,
    },
    "&:hover, &:focus, &:active": {
      color: theme.palette.neutral.action.main,
      border: `1px solid ${theme.palette.neutral.action.light}`,
    },
  }),
}));

const InputField = (props) => {
  const {
    children,
    id,
    label,
    placeholder,
    defaultValue,
    value,
    disabled,
    error,
    labelColor,
    helperText,
    ...rest
  } = props;
  const classes = useStyles(props);

  return (
    <FormControl fullWidth>
      {label && (
        <InputLabel
          focused={true}
          shrink
          htmlFor={id}
          classes={{ root: classes.labelRoot }}
        >
          {label}
        </InputLabel>
      )}
      <InputBase
        id={id}
        classes={{
          root: classes.root,
          input: classes.input,
        }}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        value={value}
        {...rest}
      >
        {children}
      </InputBase>
      {error && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default InputField;
