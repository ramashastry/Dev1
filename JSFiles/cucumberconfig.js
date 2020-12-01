"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // 
    // params:
    // {
    //   releaseurl:'https://connect-release.mbopartners.com/'
    // },
    capabilities: {
        browserName: 'chrome',
    },
    specs: ['../features/Talent.feature'],
    cucumberOpts: {
        format: 'json:./cucumberreport.json',
        require: [
            './stepDefinations/*.js',
        ]
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            output: './TestReport/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: false,
            metadata: {
                "App Version": "2.5.8",
                "Test Environment": "RELEASE",
                "Browser": "Chrome  86",
                "Platform": "MACOS",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUVBQW1EO0FBR3hDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDRDQUE0QztJQUM3QyxtREFBbUQ7SUFDbkQsYUFBYSxFQUFDLElBQUk7SUFDbEIsU0FBUyxFQUFDLFFBQVE7SUFDbEIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDaEUsR0FBRztJQUVILFVBQVU7SUFDVixJQUFJO0lBQ0osMERBQTBEO0lBQzFELEtBQUs7SUFDSCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUl0QjtJQUNELEtBQUssRUFBRSxDQUFDLDRCQUE0QixDQUFDO0lBQ3JDLFlBQVksRUFBRTtRQUVWLE1BQU0sRUFBQyw0QkFBNEI7UUFDbkMsT0FBTyxFQUFFO1lBQ1Asd0JBQXdCO1NBRXpCO0tBRUY7SUFFRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2YsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLE1BQU0sRUFBRSxtQ0FBbUM7WUFDM0Msc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsS0FBSztZQUNuQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFDLE9BQU87Z0JBQ3JCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLFNBQVMsRUFBRSxZQUFZO2dCQUN2QixVQUFVLEVBQUUsT0FBTztnQkFDbkIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2FBQ3ZCO1NBQ0osQ0FBQztRQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNKLENBQUMifQ==