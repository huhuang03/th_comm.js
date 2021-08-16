class Result {
    code: number = 0;
    msg: string = "";

    constructor(code: number = 0, msg: string = "") {
        this.code = code;
        this.msg = msg;
    }

    static error(msg: string) {
        return new Result(-1, "")
    }

    isOk() {
        return this.code === 0;
    }
}

export default Result
