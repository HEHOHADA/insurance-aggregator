export const scroll = async (page: any, scrollContainer: string, maxTimes: number) => {
  let times = 0;
  let previousHeight = await page.evaluate("document.body.scrollHeight");

  while (times < maxTimes) {
    await page.evaluate(
      `document.querySelector('${scrollContainer}').scrollTo(0, document.body.scrollHeight)`,
    );
    await page.waitForTimeout(1000);
    const newHeight = await page.evaluate("document.body.scrollHeight");

    if (previousHeight === newHeight) {
      break;
    }
    previousHeight = newHeight;
    times++;
  }

  return page;
};
