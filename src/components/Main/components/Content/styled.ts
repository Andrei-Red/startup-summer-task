import makeStyles from "@material-ui/core/styles/makeStyles";
import { GRAY } from "appConstants/color";

export const useStyles = makeStyles((theme) => ({
  wrapperNotFoundPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: "70vh",
  },
  image: {
    width: 65,
    height: 75,
  },
  text: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 22,
    color: GRAY,
  },
}));
