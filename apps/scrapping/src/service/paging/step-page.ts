export const stepPage = async (
  page: any,
  selector: string,
  currentPage: number,
  maxTimes: number,
) => {
  const nextPage = currentPage + 1;
  const nextSelector = selector.replace(/{{page}}/g, nextPage.toString());
  let times = 0;

  while (times < maxTimes) {
    try {
      const isNextPage = await page.evaluate(`document.querySelector('${nextSelector}')`);

      await page.goto(isNextPage);
      await page.waitForTimeout(1000);

      break;
    } catch (error) {
      times++;
    }
  }

  return page;
};
