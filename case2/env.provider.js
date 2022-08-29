const dotenv = require('dotenv');
const Env = require("./env");


class EnvProvider {

    static isInit = false;

    static init (NODE_ENV) {

        EnvProvider.isInit = true;
        const value = dotenv.config({
            path: NODE_ENV === 'dev'
                ? '.env.dev' : NODE_ENV === 'test'
                ? '.env.test' : '.env.prod'
        });

    }

    /** @returns { Env } */
    getEnvInstance() {
        if (EnvProvider.isInit === false) throw new Error('EnvProvider 는 init 되어야 합니다.');

        return new Env();
    }
}

module.exports = EnvProvider;
