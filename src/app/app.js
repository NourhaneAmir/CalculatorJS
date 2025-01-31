import AppService from "../service/app.js";

class AppComponents{
    static #AppIsRunning=false;

    constructor(){
        throw new Error("Cannot initialize");

    }
    static run(){
        if(this.#AppIsRunning){
            console.error("Application is already running");
        }else{
            this.#AppIsRunning=true;
            AppService.build();
        }
    }
}

AppComponents.run();