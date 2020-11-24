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
exports.Utility = void 0;
const protractor_1 = require("protractor");
const MBO_LoginPage_1 = require("../pageObjects/MBO_LoginPage");
const MBO_TalentHomePage_1 = require("../pageObjects/MBO_TalentHomePage");
const mboTalentHomePage = new MBO_TalentHomePage_1.MBO_TalentHomePage;
const mboLoginPage = new MBO_LoginPage_1.MBO_LoginPage;
const until = protractor_1.protractor.ExpectedConditions;
class Utility {
    waitForInvisibilityOfSpinner() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(until.invisibilityOf(mboTalentHomePage.talent_Home_Page_Spinner));
        });
    }
    waitForInvisibilityOfLoginPageSpinner() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(until.visibilityOf(mboLoginPage.talent_login_page_spinner_image));
        });
    }
}
exports.Utility = Utility;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL3V0aWxpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBaUQ7QUFDakQsZ0VBQTZEO0FBQzdELDBFQUF1RTtBQUN2RSxNQUFPLGlCQUFpQixHQUFHLElBQUksdUNBQWtCLENBQUM7QUFDbEQsTUFBTyxZQUFZLEdBQUcsSUFBSSw2QkFBYSxDQUFDO0FBQ3hDLE1BQU0sS0FBSyxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFNUMsTUFBYSxPQUFPO0lBRVYsNEJBQTRCOztZQUU5QixNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLENBQUM7S0FBQTtJQUVLLHFDQUFxQzs7WUFFdkMsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDekYsQ0FBQztLQUFBO0NBR0o7QUFiRCwwQkFhQyJ9