import makeStyles from "@material-ui/core/styles/makeStyles";
import { BLUE, WIGHT, GRAY } from "appConstants/color";

export const useStyles = makeStyles((theme) => ({
  wrapperRepoContainer: {
    display: "flex",
    height: 110,
    margin: 24,
    [theme.breakpoints.down("xs")]: {
      height: 60,
      margin: 12,
    },
  },
  title: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 32,
    margin: 24,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  repoContent: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 20,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 12,
    },
  },
  repoName: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 24,
    color: BLUE,
    textDecoration: "none",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  repoDiscription: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  paginateContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 25,
    [theme.breakpoints.down("xs")]: {
      margin: 16,
    },
  },
  paginateInfo: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    color: GRAY,
    marginRight: 12,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      marginRight: 8,
    },
  },
  containerClassName: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.6rem",
    background: WIGHT,
    listStyleType: "none",
    color: GRAY,
  },
  pageLinkClassName: {
    width: 20,
    height: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    [theme.breakpoints.down("xs")]: {
      width: 16,
      height: 20,
      margin: 0,
      fontSize: 12,
    },
  },
  previousClassName: {
    cursor: "pointer",
  },
  nextClassName: {
    cursor: "pointer",
  },
  nextLabel: {
    color: GRAY,
  },
  arrow: {
    width: 18,
    height: 18,
  },
  pageClassName: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.6rem",
    background: WIGHT,

    margin: "0.8rem",
    fontSize: "1.4rem",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      margin: "0.6rem",
      fontSize: "1rem",
    },
  },
  activ: {
    width: 20,
    height: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: BLUE,
    borderRadius: 6,
  },
  disabledClassName: {
    filter: "grayscale(100%)",
  },
  wrapperRmptyPage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyImg: {
    width: 76,
    height: 62,
    margin: 12,
  },
  emptyTitle: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 22,
    color: GRAY,
  },
}));
