const exportsOnly = require("./exports")
const moduleExports = require("./moduleExports")
const fileLogger = require("./fileLogger")
const logger = require("./exportingFunction")
const constructorLogger = require("./exportingConstructor")
const constructorLogger2015 = require("./exportingContsructor2015")
const constructornotUsed = require("./protectingAgainstNotUsingNew")
const constructornotUsed2015 = require("./protectingAgainstNotUsingNew")
const defaultLogger = require("./exportingInstance")

exportsOnly.hello() //logs hello
moduleExports.hello() //logs hello

fileLogger.info("Info Message") //info: Info Message
fileLogger.verbose("Verbose message") //verbose: Verbose message

logger("Info Message") //info: Info Message
logger.verbose("Verbose message") //verbose: Verbose message

const dbLogger = new constructorLogger("DB")
const accessLogger = new constructorLogger("Access")

dbLogger.info("Info message") //[DB] info: Info message
dbLogger.verbose("Verbose Message")//[DB] verbose: Verbose Message

accessLogger.info("Info message") //[Access] info: Info message
accessLogger.verbose("Verbose Message") //[Access] verbose: Verbose Message

const dbLogger2015 = new constructorLogger2015("DB")
const accessLogger2015 = new constructorLogger2015("Access")

dbLogger2015.info("Info message") //[DB] info: Info message
dbLogger2015.verbose("Verbose Message")//[DB] verbose: Verbose Message

accessLogger2015.info("Info message") //[Access] info: Info message
accessLogger2015.verbose("Verbose Message") //[Access] verbose: Verbose Message

dbLoggerNoConstructor = constructornotUsed("DB")
dbLoggerNoConstructor.info("Info message") //[DB] info: Info message

accessLoggerNoConstructor = new constructornotUsed("Access")
accessLoggerNoConstructor.info("Info message") //[Access] info: Info message

dbLoggerNoConstructor2015 = constructornotUsed2015("DB")
dbLoggerNoConstructor2015.info("Info message") //[DB] info: Info message

accessLoggerNoConstructor2015 = new constructornotUsed2015("Access")
accessLoggerNoConstructor2015.info("Info message") //[Access] info: Info message

defaultLogger.log("A default log message")//[DEFAULT] A default log message
const customLogger = new defaultLogger.Logger('Custom');
customLogger.log("The is a message with custom logger") //[Custom] The is a message with custom logger