import makeStyles from "@material-ui/core/styles/makeStyles";
import { BLUE } from "appConstants/color";

export const useStyles = makeStyles((theme) => ({
  wrapperUserInfo: {
    margin: "40px 56px",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "wrap",
      margin: "15px 22px",
    },
  },
  wrapperUserNameAndAvatar: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      margin: "auto",
    },
  },
  wrapperUserNameAndLink: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      marginRight: 20,
    },
  },
  avatar: {
    width: 280,
    height: 280,
    borderRadius: "50%",
    marginBottom: 28,
    [theme.breakpoints.down("xs")]: {
      width: 60,
      height: 60,
      marginBottom: 16,
      marginRight: 26,
    },
  },
  userName: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 26,
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
  userLink: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    color: BLUE,
    marginTop: 12,
    marginBottom: 25,
    textDecoration: "none",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  wrapperFollowersContainer: {
    display: "flex",
    marginTop: 12,
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      alignItems: "center",
      margin: "auto",
    },
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
    [theme.breakpoints.down("xs")]: {
      width: 18,
      height: 18,
    },
  },
  textFollowers: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    marginRight: 12,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
}));
