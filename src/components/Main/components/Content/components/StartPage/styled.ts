import makeStyles from "@material-ui/core/styles/makeStyles";
import { GRAY } from "appConstants/color";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: "100vh",
  },
  image: {
    width: 64,
    height: 64,
    margin: 24,
  },
  text: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 22,
    color: GRAY,
    width: 220,
    textAlign: "center",
  },
}));
