export class log4jsconfig{

    static Logger(): any{
        var log4js= require('log4js');
        log4js.configure('./Logging/log4js.json');
        let log = log4js.getLogger("default");
        return log;
    }
}


