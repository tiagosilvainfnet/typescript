"use strict";
// class FrontEndDeveloper{
//     public writeHtmlCode(): void {
class FrontEndDeveloper {
    develop() {
        this.writeHtmlCode();
    }
    writeHtmlCode() {
        console.log("Estou escrevendo HTML...");
    }
}
class BackEndDeveloper {
    develop() {
        this.writeTypeScriptCode();
    }
    writeTypeScriptCode() {
        console.log("Estou escrevendo TYPESCRIPT...");
    }
}
class MobileDeveloper {
    develop() {
        this.writeMobileApp();
    }
    writeMobileApp() {
        throw ("Um erro forçado aconteceu.");
        // console.log("Estou criando um app mobile.")
    }
}
class DevOpsDeveloper {
    develop() {
        this.devOpsOperation();
    }
    devOpsOperation() {
        console.log("Criando microserviços...");
    }
}
class TesterDeveloper {
    develop() {
        this.test();
    }
    test() {
        console.log("Testando...");
    }
}
class SoftwareProject {
    constructor(developers = []) {
        this.developers = developers;
    }
    addDeveloper(developer) {
        this.developers.push(developer);
    }
    createProject() {
        this.developers.forEach(developer => {
            try {
                developer.develop();
            }
            catch (err) {
                console.log(`Um erro ocorreu ao rodar o processo ${developer.constructor.name}. Erro: ${err}`);
            }
        });
    }
}
const devFront1 = new FrontEndDeveloper();
const devBack1 = new BackEndDeveloper();
const mob1 = new MobileDeveloper();
const devops1 = new DevOpsDeveloper();
const tester1 = new TesterDeveloper();
const software1 = new SoftwareProject();
software1.addDeveloper(devFront1);
software1.addDeveloper(devBack1);
software1.addDeveloper(mob1);
software1.addDeveloper(devops1);
software1.addDeveloper(tester1);
software1.createProject();
