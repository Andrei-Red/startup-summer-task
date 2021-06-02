import React, { FC } from "react";
import {
  Box,
  CardMedia,
  InputBase,
  Paper,
  IconButton,
} from "@material-ui/core";
import { PLASEHOLDER_INPUT } from "appConstants/constants";
import GIT_LOGO from "assets/img/gitLogo.svg";
import SEARCH_IMG from "assets/img/search.svg";
import { useStyles } from "./styled";

type HeaderProps = {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  submitForm: () => void;
  inputValue: string;
};

export const Header: FC<HeaderProps> = ({
  setInputValue,
  submitForm,
  inputValue,
}) => {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    setInputValue(searchText);
  };

  const submitFormHandler = (e: React.ChangeEvent<HTMLDivElement>) => {
    e.preventDefault();
    submitForm();
  };

  const classes = useStyles();
  return (
    <>
      <Box component="div" m={1} className={classes.header}>
        <CardMedia className={classes.logo} image={GIT_LOGO} title="git-logo" />

        <Paper
          component="form"
          onSubmit={submitFormHandler}
          className={classes.form}
        >
          <IconButton
            color="primary"
            className={classes.iconButton}
            aria-label="directions"
          >
            <CardMedia
              className={classes.searchIcon}
              image={SEARCH_IMG}
              title="search-img"
            />
          </IconButton>
          <InputBase
            onChange={inputHandler}
            className={classes.input}
            placeholder={PLASEHOLDER_INPUT}
            inputProps={{ "aria-label": "search github users" }}
            id="outlined-adornment-amount"
            value={inputValue}
          />
        </Paper>
      </Box>
    </>
  );
};
