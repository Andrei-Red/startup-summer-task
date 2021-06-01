import makeStyles from "@material-ui/core/styles/makeStyles";
import { BLUE } from "appConstants/color";

export const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    height: 72,
    margin: 0,
    background: BLUE,
  },
  logo: {
    width: 42,
    height: 40,
    margin: "16px 10px 16px 40px",
    [theme.breakpoints.down("xs")]: {
      width: 40,
      height: 34,
      margin: "10px 8px 10px 15px",
    },
  },
  searchIcon: {
    width: 14,
    height: 14,
    margin: 5,
  },
  form: {
    width: 500,
    height: 40,
    margin: 10,
    [theme.breakpoints.down("xs")]: {
      width: 280,
    },
  },
  input: {
    width: 400,
    marginLeft: theme.spacing(1),
    flex: 1,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    [theme.breakpoints.down("xs")]: {
      width: 180,
      height: 30,
      fontSize: 12,
    },
  },
  iconButton: {
    padding: 10,
  },
}));
