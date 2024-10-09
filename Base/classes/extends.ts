() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("constructor Avenger llamado");
    }

    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("constructor Xmen llamado");
    }

    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error("El nombre es menor a 3 caracteres");
      }
      this.name = name;
    }

    getFullnameDesdeXmen() {
      console.log(super.getFullName());
    }
  }

  //const wolverine = new Xmen("wolverine", "Logan", true);

  //console.log(wolverine);
  // wolverine.getFullnameDesdeXmen();

  //   wolverine.fullName = "fernando";
  //   console.log(wolverine.fullName);
};
