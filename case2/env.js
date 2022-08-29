class Env {

    PORT;
    MODE;

    DB_HOST;
    DB_PWD;
    DB_NAME;
    DB_ACCOUNT;
    
    constructor() {

        this.PORT = +this.getEnvNumberValue('PORT');
        this.MODE = this.getEnvStringValue('MODE');
        
        this.DB_HOST = this.getEnvStringValue('DB_HOST');
        this.DB_PWD = this.getEnvStringValue('DB_PWD');
        this.DB_NAME = this.getEnvStringValue('DB_NAME');
        this.DB_ACCOUNT = this.getEnvStringValue('DB_ACCOUNT');
    }
    
    getEnvStringValue(KEY) {

        /** @type { string | undefined } */
        const VALUE = process.env[KEY];
        if (VALUE === undefined) throw new Error(`환경변수 ${KEY} 는 undefined 일 수 없습니다.`);

        return VALUE;

    }

    getEnvNumberValue(KEY) {

        /** @type { string | undefined } */
        const VALUE = process.env[KEY];
        if (VALUE === undefined) throw new Error(`환경변수 ${KEY} 는 undefined 일 수 없으며, number 이여야 합니다.`);
        
        const isNaNValue = +VALUE;
        if (isNaN(isNaNValue) === false) return +VALUE;
        
        throw new Error('야호');

    }

}

module.exports = Env;
