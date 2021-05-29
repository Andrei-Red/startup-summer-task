import makeStyles from "@material-ui/core/styles/makeStyles";
import { HEADER_COLOR } from "appConstants/color";

export const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignContent: "center",
    height: "72px",
    margin: 0,
    background: HEADER_COLOR,
  },
  logo: {
    width: "40px",
    height: "40px",
    margin: "16px 10px 16px 40px",
  },
  searchIcon: {
    width: "14px",
    height: "14px",
    margin: "5px",
  },
  form: {
    maxWidth: "500px",
    height: "40px",
    margin: "10px",
  },

  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
