import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  InputAdornment,
  OutlinedInput,
  Box,
  CardMedia,
  InputBase,
  Paper,
  Divider,
  IconButton,
} from "@material-ui/core";
// import SearchIcon from "@material-ui/icons/Search";
import { getUserInfo, getUserRepos } from "store/actions";
import { MAX_REPOS_ON_PAGE, PLASEHOLDER_INPUT } from "appConstants/constants";
import GIT_LOGO from "assets/img/gitLogo.svg";
import SEARCH_IMG from "assets/img/search.svg";
import { useStyles } from "./styled";

export const Header: FC = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    setInputValue(searchText);
  };

  const submitFormHandler = (e: React.ChangeEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch(getUserInfo(inputValue));
    dispatch(getUserRepos(inputValue, 1, MAX_REPOS_ON_PAGE));
    setInputValue("");
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
            inputProps={{ "aria-label": "search google maps" }}
            id="outlined-adornment-amount"
            value={inputValue}
          />
        </Paper>
      </Box>
    </>
  );
};

{
  /* <form onSubmit={submitFormHandler} className={classes.form}>
<OutlinedInput
  id="outlined-adornment-amount"
  value={inputValue}
  onChange={inputHandler}
  startAdornment={<InputAdornment position="start">$</InputAdornment>}
  labelWidth={60}
/>
</form> */
}
