import logger from "pino";
import dayjs from "dayjs";
import PinoPretty from "pino-pretty"

const log = logger(PinoPretty());

export default log;
