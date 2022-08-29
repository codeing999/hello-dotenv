const App = require("./app");
const EnvProvider = require('./env.provider');
/**
 * IIFE, 즉시 실행함수
 */
(
    () => {

        EnvProvider.init(process.env.NODE_ENV);
        const envProvider = new EnvProvider();
        const env = envProvider.getEnvInstance();

        App.init(env.PORT);
        new App().getAppInstance();
    }
)();


// 익명함수
// function () {}
// 익명함수, 이름 이 없는 화살표 함수를 바로 호출하는 것.
// 이름을 모르기 때문에,
// (() => {}) 감싸고, ... (()=>{})() 실행기호를 붙여서 실행
