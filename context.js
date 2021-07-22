const me = {
    name: {
      first: "Brian",
      last: "Holt"
    },
    location: {
      streetNumber: 500,
      street: "Fakestreet",
      city: "Seattle",
      state: "WA",
      zipCode: 55555,
      country: "USA"
    },
    getAddress() {
      return `${this.name.first} ${this.location.city} ${this} ${this.location.streetNumber} ${this.location.street}
      ${this.location.city}, ${this.location.state} ${this.location.zipCode}`
    }
  };
  console.log(me.getAddress());
  console.log(me)