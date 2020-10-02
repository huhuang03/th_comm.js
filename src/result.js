class Result {
    constructor(code, msg) {
        this.code = code;
        this.msg = msg;
    }

    static error(msg) {
        return Result(-1, "")
    }
}

export default Result