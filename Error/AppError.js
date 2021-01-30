class AppError{
    constructor(){
        this.errorMessages;
    }
    getError(){
        return this.errorMessages;
    }
    setError(errorMessages){
        this.errorMessages = errorMessages;
    }
}

module.exports = AppError