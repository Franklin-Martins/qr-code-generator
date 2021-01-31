class AppError{
    constructor(){
        this.errorMessage
    }
    getError(){
        return this.errorMessage;
    }
    setError(errorMessage){
        this.errorMessage = errorMessage;
    }
}

module.exports = AppError