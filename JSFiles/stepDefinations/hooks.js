"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const utilities_1 = require("./utilities");
const util = new utilities_1.Utility;
const logger = require("../Logging/letlog").default;
// Before({tags: "@Regression"}, async () => {
//   // This hook will be executed before scenarios tagged with @foo
//   browser.manage().window().maximize();
// });
cucumber_1.Before(() => __awaiter(void 0, void 0, void 0, function* () {
    // This hook will be executed before scenarios tagged with @foo
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.manage().window().maximize();
    // await browser.get('https://connect-release.mbopartners.com/');
    // util.waitForInvisibilityOfLoginPageSpinner();
    // logger.debug("user is in Release Environment");
    // browser.launchSession();
    // browser.restart();
}));
// After({tags: "@Regression"}, function () {
//     // This hook will be executed before scenarios tagged with @foo
//     console.log("Test is completed");
//   });
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed before scenarios tagged with @foo
        console.log("Test is completed");
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            //code to take screesnhot
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
        // util.appLogOut();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSx1Q0FBNEQ7QUFDNUQsMkNBQW1FO0FBQ25FLDJDQUFzQztBQUV0QyxNQUFNLElBQUksR0FBRyxJQUFJLG1CQUFPLENBQUM7QUFDekIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxDQUFDO0FBRXBELDhDQUE4QztBQUM5QyxvRUFBb0U7QUFDcEUsMENBQTBDO0FBQzFDLE1BQU07QUFFTixpQkFBTSxDQUFDLEdBQVMsRUFBRTtJQUNoQiwrREFBK0Q7SUFDL0QsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQyxpRUFBaUU7SUFDakUsZ0RBQWdEO0lBQ2hELGtEQUFrRDtJQUNsRCwyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3ZCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCw2Q0FBNkM7QUFDN0Msc0VBQXNFO0FBQ3RFLHdDQUF3QztBQUN4QyxRQUFRO0FBRVIsZ0JBQUssQ0FBQyxVQUFnQixRQUFROztRQUM1QiwrREFBK0Q7UUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssaUJBQU0sQ0FBQyxNQUFNLEVBQUU7WUFDNUMseUJBQXlCO1lBQ3pCLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUVsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN0QztRQUNELG9CQUFvQjtJQUN0QixDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=