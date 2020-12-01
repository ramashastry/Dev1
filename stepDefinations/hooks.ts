

import { After, Before, BeforeAll, Status } from "cucumber";
import { browser, ProtractorBrowser, WebDriver } from "protractor";
import { Utility } from "./utilities";
import { log4jsconfig } from "../Logging/log4jsconfig";
const util = new Utility;
const logger = require("../Logging/letlog").default;

// Before({tags: "@Regression"}, async () => {
//   // This hook will be executed before scenarios tagged with @foo
//   browser.manage().window().maximize();
// });

Before(async () => {
  // This hook will be executed before scenarios tagged with @foo
  await browser.waitForAngularEnabled(false);
  await browser.manage().window().maximize();
  // await browser.get('https://connect-release.mbopartners.com/');
  // util.waitForInvisibilityOfLoginPageSpinner();
  // logger.debug("user is in Release Environment");
  // browser.launchSession();
  // browser.restart();
});


// After({tags: "@Regression"}, function () {
//     // This hook will be executed before scenarios tagged with @foo
//     console.log("Test is completed");
//   });

After(async function (scenario) {
  // This hook will be executed before scenarios tagged with @foo
  console.log("Test is completed");
  if (scenario.result.status === Status.FAILED) {
    //code to take screesnhot
    const screenshot = await browser.takeScreenshot();

    this.attach(screenshot, "image/png");
  }
  // util.appLogOut();
});





