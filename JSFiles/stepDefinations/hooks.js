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
// Before({tags: "@Regression"}, async () => {
//   // This hook will be executed before scenarios tagged with @foo
//   browser.manage().window().maximize();
// });
cucumber_1.Before(() => __awaiter(void 0, void 0, void 0, function* () {
    // This hook will be executed before scenarios tagged with @foo
    yield protractor_1.browser.manage().window().maximize();
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
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSx1Q0FBOEM7QUFDOUMsMkNBQXFDO0FBQ3JDLDJDQUFzQztBQUV0QyxNQUFNLElBQUksR0FBRyxJQUFJLG1CQUFPLENBQUM7QUFFekIsOENBQThDO0FBQzlDLG9FQUFvRTtBQUNwRSwwQ0FBMEM7QUFDMUMsTUFBTTtBQUVOLGlCQUFNLENBQUUsR0FBUyxFQUFFO0lBQ2pCLCtEQUErRDtJQUMvRCxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILDZDQUE2QztBQUM3QyxzRUFBc0U7QUFDdEUsd0NBQXdDO0FBQ3hDLFFBQVE7QUFFUixnQkFBSyxDQUFDLFVBQWdCLFFBQVE7O1FBQzVCLCtEQUErRDtRQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSSxpQkFBTSxDQUFDLE1BQU0sRUFDM0M7WUFDRSx5QkFBeUI7WUFDMUIsTUFBTSxVQUFVLEdBQUUsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRTVDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3pDO0lBR0gsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9