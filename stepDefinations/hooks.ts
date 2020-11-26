

import {After,Before, Status} from "cucumber";
import { browser } from "protractor";
import { Utility } from "./utilities";
import { log4jsconfig } from "../Logging/log4jsconfig";
const util = new Utility;

// Before({tags: "@Regression"}, async () => {
//   // This hook will be executed before scenarios tagged with @foo
//   browser.manage().window().maximize();
// });

Before( async () => {
  // This hook will be executed before scenarios tagged with @foo
  await browser.manage().window().maximize();
});


// After({tags: "@Regression"}, function () {
//     // This hook will be executed before scenarios tagged with @foo
//     console.log("Test is completed");
//   });

After(async function (scenario){
  // This hook will be executed before scenarios tagged with @foo
  console.log("Test is completed");
  if (scenario.result.status=== Status.FAILED)
  {
    //code to take screesnhot
   const screenshot= await browser.takeScreenshot();
 
        this.attach(screenshot,"image/png");
  }


});





