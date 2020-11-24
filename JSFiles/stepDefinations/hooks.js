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
cucumber_1.Before({ tags: "@Regression" }, () => __awaiter(void 0, void 0, void 0, function* () {
    // This hook will be executed before scenarios tagged with @foo
    protractor_1.browser.manage().window().maximize();
}));
cucumber_1.After({ tags: "@Regression" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is completed");
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed before scenarios tagged with @foo
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            //code to take screesnhot
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSx1Q0FBOEM7QUFDOUMsMkNBQXFDO0FBQ3JDLDJDQUFzQztBQUV0QyxNQUFNLElBQUksR0FBRyxJQUFJLG1CQUFPLENBQUM7QUFFekIsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUMsRUFBRSxHQUFTLEVBQUU7SUFDdkMsK0RBQStEO0lBQy9ELG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFDLEVBQUU7SUFDekIsK0RBQStEO0lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUMsQ0FBQztBQUVMLGdCQUFLLENBQUMsVUFBZ0IsUUFBUTs7UUFDNUIsK0RBQStEO1FBQy9ELElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUksaUJBQU0sQ0FBQyxNQUFNLEVBQzNDO1lBQ0UseUJBQXlCO1lBQzFCLE1BQU0sVUFBVSxHQUFFLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUU1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQztTQUN6QztJQUdILENBQUM7Q0FBQSxDQUFDLENBQUMifQ==