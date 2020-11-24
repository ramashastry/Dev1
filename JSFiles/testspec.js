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
const protractor_1 = require("protractor");
const calculator_1 = require("./pageObjects/calculator");
const angularHomePage_1 = require("./pageObjects/angularHomePage");
describe('Chain locat ors demo', () => {
    it('Open Angular js website', () => __awaiter(void 0, void 0, void 0, function* () {
        let calc = new calculator_1.calculator();
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater ,  chain locators, And css for identical tags
        yield calc.firstEditBox.sendKeys("3");
        yield calc.secondEditBox.sendKeys("5");
        yield calc.go.click();
        calc.getResult.getText().then(function (text) {
            console.log(text);
        });
        //	element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
    }));
    it('Angular home page title validation', () => __awaiter(void 0, void 0, void 0, function* () {
        let ah = new angularHomePage_1.angularHomePage();
        yield protractor_1.browser.get("https://angularjs.org/");
        yield ah.angularLink.click();
        yield protractor_1.browser.sleep(3000);
        yield ah.search.sendKeys("hello");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUdyQyx5REFBc0Q7QUFDdEQsbUVBQWdFO0FBRWhFLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUU7SUFHbEMsRUFBRSxDQUFDLHlCQUF5QixFQUFFLEdBQVMsRUFBRTtRQUVyQyxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUc1QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDL0Qsd0RBQXdEO1FBQ3hELE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7UUFHRixnRkFBZ0Y7SUFXcEYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUdGLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFTLEVBQUU7UUFDaEQsSUFBSSxFQUFFLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7UUFDL0IsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFdEMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=