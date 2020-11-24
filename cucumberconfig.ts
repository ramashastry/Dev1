import {Config} from "protractor";
import * as reporter from "cucumber-html-reporter";


export let config: Config = {
    // The address of a running selenium server.
   // seleniumAddress: 'http://localhost:4444/wd/hub',
   directConnect:true,
   framework:'custom',
   frameworkPath: require.resolve('protractor-cucumber-framework'),
  //  restartBrowserBetweenTests:true,

  
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/*.feature'],
    cucumberOpts: {
    
        format:'json:./cucumberreport.json', 
        require: [
          './stepDefinations/*.js', // accepts a glob,
        
        ]
        
      },

      onComplete: () =>{
        var options = {
          theme: 'bootstrap',
          jsonFile: './cucumberreport.json',
          output: './TestReport/cucumber_report.html',
          reportSuiteAsScenarios: true,
          launchReport: false,
          metadata: {
              "App Version":"2.5.8",
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
  