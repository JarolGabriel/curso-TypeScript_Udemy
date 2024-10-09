(() => {
  interface Clients {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Clients = {
    name: "fernando",
    age: 25,
    address: {
      id: 125,
      zip: "45673",
      city: "Ottawa",
    },
    getFullAddress(id: string) {
      return this.address.zip;
    },
  };

  const client2: Clients = {
    name: "Melisa",
    age: 30,
    address: {
      id: 125,
      zip: "45673",
      city: "toronto",
    },
    getFullAddress(id: string) {
      return this.address.zip;
    },
  };
})();
