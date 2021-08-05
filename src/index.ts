class Result {
    constructor(code, msg) {
        this.code = code;
        this.msg = msg;
    }

    static error(msg) {
        return new Result(-1, "")
    }

    isOk() {
        return this.code == 0;
    }
}

module.exports = {
    "Result": Result
}