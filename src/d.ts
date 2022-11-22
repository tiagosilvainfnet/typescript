// class FrontEndDeveloper{
//     public writeHtmlCode(): void {

//     }
// }

// class BackEndDeveloper{
//     public writeTypeScriptCode(): void{

//     }
// }

// class MobileDeveloper{
//     public writeMobileApp(): void{

//     }
// }

// class SoftwareProject{
//     public frontEndDev: FrontEndDeveloper;
//     public backEndDev: BackEndDeveloper;
//     public mobileDev: MobileDeveloper;

//     constructor(){
//         this.frontEndDev = new FrontEndDeveloper();
//         this.backEndDev = new BackEndDeveloper();
//         this.mobileDev = new MobileDeveloper();
//     }

//     public createProject(): void {
//         this.frontEndDev.writeHtmlCode();
//         this.backEndDev.writeTypeScriptCode();
//         this.mobileDev.writeMobileApp();
//     }
// }

interface Developer{
    develop(): void;
}

class FrontEndDeveloper implements Developer{
    public develop(): void{
        this.writeHtmlCode();
    }

    private writeHtmlCode(): void{
        console.log("Estou escrevendo HTML...")
    }
}

class BackEndDeveloper implements Developer{
    public develop(): void {
        this.writeTypeScriptCode();
    }

    private writeTypeScriptCode(): void{
        console.log("Estou escrevendo TYPESCRIPT...")
    }
}

class MobileDeveloper implements Developer{
    public develop(): void {
        this.writeMobileApp();
    }

    private writeMobileApp(): void{
        throw("Um erro forçado aconteceu.")
        // console.log("Estou criando um app mobile.")
    }
}

class DevOpsDeveloper implements Developer{
    public develop(): void {
        this.devOpsOperation()
    }

    private devOpsOperation(): void{
        console.log("Criando microserviços...")
    }
}

class TesterDeveloper implements Developer{
    public develop(): void {
        this.test();
    }

    private test(): void{
        console.log("Testando...")
    }
}

class SoftwareProject{
    public developers: Developer[];

    constructor(developers: Developer[] = []){
        this.developers = developers;
    }

    addDeveloper(developer: Developer): void{
        this.developers.push(developer);
    }

    public createProject(): void{
        this.developers.forEach(developer => {
            try{
                developer.develop();
            }catch(err){
                console.log(`Um erro ocorreu ao rodar o processo ${developer.constructor.name}. Erro: ${err}`)
            }
        })
    }
}

const devFront1 = new FrontEndDeveloper();
const devBack1 = new BackEndDeveloper();
const mob1 = new MobileDeveloper();
const devops1 = new DevOpsDeveloper();
const tester1 = new TesterDeveloper();

const software1 = new SoftwareProject();
software1.addDeveloper(devFront1)
software1.addDeveloper(devBack1)
software1.addDeveloper(mob1)
software1.addDeveloper(devops1)
software1.addDeveloper(tester1)
software1.createProject();