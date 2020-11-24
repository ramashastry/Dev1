"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log4jsconfig = void 0;
class log4jsconfig {
    static Logger() {
        var log4js = require('log4js');
        log4js.configure('./Logging/log4js.json');
        let log = log4js.getLogger("default");
        return log;
    }
}
exports.log4jsconfig = log4jsconfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpzY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vTG9nZ2luZy9sb2c0anNjb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxZQUFZO0lBRXJCLE1BQU0sQ0FBQyxNQUFNO1FBQ1QsSUFBSSxNQUFNLEdBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMxQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztDQUNKO0FBUkQsb0NBUUMifQ==