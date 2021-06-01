import makeStyles from "@material-ui/core/styles/makeStyles";
import { BLUE, WIGHT, GRAY } from "appConstants/color";

export const useStyles = makeStyles((theme) => ({
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
  paginateContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 25,
  },
  paginateInfo: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    color: GRAY,
    marginRight: 12,
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
    background: "#ffffff",

    margin: "0.8rem",
    fontSize: "1.4rem",
    cursor: "pointer",
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
