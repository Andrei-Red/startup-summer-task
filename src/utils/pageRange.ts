import { MAX_REPOS_ON_PAGE } from "appConstants/constants";

export const pageRange = (
  allRrpos: number | null,
  currenPage: number,
  reposOnPage = MAX_REPOS_ON_PAGE
) => {
  const pageRangeAnswer = { firstPage: 0, lastPage: 0, allRrpos: 0 };
  if (allRrpos === null) {
    return pageRangeAnswer;
  }

  const lastPage = currenPage * reposOnPage;
  if (allRrpos > lastPage) {
    pageRangeAnswer.lastPage = lastPage;
    pageRangeAnswer.firstPage = pageRangeAnswer.lastPage - (reposOnPage - 1);
  } else {
    pageRangeAnswer.lastPage = allRrpos;
    pageRangeAnswer.firstPage = (currenPage - 1) * reposOnPage + 1;
  }
  pageRangeAnswer.allRrpos = allRrpos;

  return pageRangeAnswer;
};
