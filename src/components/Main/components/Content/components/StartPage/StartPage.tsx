import React, { FC } from "react";
import { CardMedia, Typography, Box } from "@material-ui/core";
import SEARCH_IMG from "assets/img/search.svg";
import { useStyles } from "./styled";

export const StartPage: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <CardMedia
        className={classes.image}
        image={SEARCH_IMG}
        title="search-logo"
      />
      <Typography className={classes.text}>
        Start with searching a GitHub user
      </Typography>
    </Box>
  );
};
