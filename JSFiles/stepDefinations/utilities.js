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
            yield protractor_1.browser.wait(until.invisibilityOf(mboTalentHomePage.talent_Home_Page_PreLoadingAppContainer));
        });
    }
    waitForInvisibilityOfLoginPageSpinner() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(until.visibilityOf(mboLoginPage.talent_login_page_spinner_image));
        });
    }
    appLogOut() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_My_Account));
            mboTalentHomePage.talent_Home_Page_My_Account.click();
            yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Logout_link));
            mboTalentHomePage.talent_Home_Page_Logout_link.click();
        });
    }
}
exports.Utility = Utility;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL3V0aWxpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBaUQ7QUFDakQsZ0VBQTZEO0FBQzdELDBFQUF1RTtBQUN2RSxNQUFNLGlCQUFpQixHQUFHLElBQUksdUNBQWtCLENBQUM7QUFDakQsTUFBTSxZQUFZLEdBQUcsSUFBSSw2QkFBYSxDQUFDO0FBQ3ZDLE1BQU0sS0FBSyxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFNUMsTUFBYSxPQUFPO0lBRVYsNEJBQTRCOztZQUU5QixNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1lBQ3JGLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUM7UUFDeEcsQ0FBQztLQUFBO0lBRUsscUNBQXFDOztZQUV2QyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUN6RixDQUFDO0tBQUE7SUFFSyxTQUFTOztZQUVYLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7WUFDdEYsaUJBQWlCLENBQUMsMkJBQTJCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEQsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztZQUN2RixpQkFBaUIsQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzRCxDQUFDO0tBQUE7Q0FHSjtBQXRCRCwwQkFzQkMifQ==