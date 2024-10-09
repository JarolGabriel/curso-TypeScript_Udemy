(() => {
  class Avenger {
    // private name: string;
    // private team: string;
    // public realName?: string;
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name;
    }

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  // Avenger.avgAge = 35;
  // const antman = new Avenger("Antman", "capitan", "Scot Lang");
  //   console.log(antman);

  //   console.log(Avenger.getAvgAge());
})();
