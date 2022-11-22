interface Talker{
    talk(): void;
}
interface Shooter{
    shoot(): void;
}
interface Swimmer{
    swim(): void;
}
interface Dancer{
    dance(): void;
}
interface Bark{
    bark(): void;
}

class Pessoa implements Talker, Shooter, Swimmer, Dancer{
   public talk(): void {
       
   }
   public shoot(): void {
       
   }
   public swim(): void {
       
   }
   public dance(): void {
       
   }
}

class Cachorro implements Talker, Swimmer, Dancer, Bark{
    public talk(): void {
        
    }
    public swim(): void {
        
    }
    public dance(): void {
        
    }
    public bark(): void {
        
    }
}