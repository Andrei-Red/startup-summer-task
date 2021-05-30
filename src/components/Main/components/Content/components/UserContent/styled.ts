import makeStyles from "@material-ui/core/styles/makeStyles";
import { BLUE } from "appConstants/color";

export const useStyles = makeStyles((theme) => ({
  wrapperUserInfo: {
    margin: "40px 56px",
  },
  avatar: {
    width: 280,
    height: 280,
    borderRadius: "50%",
    marginBottom: 28,
  },
  userName: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 26,
  },
  userLink: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    color: BLUE,
    marginTop: 12,
    marginBottom: 25,
    textDecoration: "none",
  },
  wrapperFollowersContainer: {
    display: "flex",
    marginTop: 12,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  textFollowers: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    marginRight: 12,
  },
  wrapperRepoContainer: {
    display: "flex",
    height: 110,
    margin: 24,
  },
  title: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 32,
    margin: 24,
  },
  repoContent: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 20,
  },
  repoName: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 24,
    color: BLUE,
    textDecoration: "none",
  },
  repoDiscription: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
  },
  test: {
    color: "red",
  },
}));
