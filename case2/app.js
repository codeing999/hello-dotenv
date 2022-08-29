class App {

    static isInit = false;
    static PORT;

    static init (PORT) {
        App.PORT = PORT;
        App.isInit = true;
    }

    getAppInstance = (PORT) => {

        if (App.isInit === false) throw new Error('App 은 init 되어야 합니다.');

        const Express = () => {};

        const app = Express();

        console.log('express 가 켜졌어요');

        return app;

    }

}


module.exports = App;
