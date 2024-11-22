// Name Surname u12345678
var pets = [
  { name: "Polly", species: "bird", age: 1, adopted: false, adoptedDate: "", adoptionFee: 560 },
  { name: "Fluffy", species: "dog", age: 4, adopted: true, adoptedDate: "2023-03-27",adoptionFee: 890 },
  { name: "Daisy", species: "dog", age: 9, adopted: true, adoptedDate: "2021-01-05", adoptionFee: 780 },
  { name: "Coco", species: "rabbit", age: 3, adopted: true, adoptedDate: "2019-01-30", adoptionFee: 615 },
  { name: "Simba", species: "cat", age: 4, adopted: true, adoptedDate: "2019-09-30", adoptionFee: 995 },
  { name: "Oreo", species: "rabbit", age: 4, adopted: false, adoptedDate: "", adoptionFee: 605 },
  { name: "Bella", species: "cat", age: 6, adopted: false, adoptedDate: "", adoptionFee: 810 },
  { name: "Milo", species: "bird", age: 3, adopted: false, adoptedDate: "", adoptionFee: 740 },
  { name: "Buddy", species: "dog", age: 10, adopted: true, adoptedDate: "2021-02-01", adoptionFee: 735 },
  { name: "Pebbles", species: "bird", age: 4, adopted: false, adoptedDate: "", adoptionFee: 505 },
];

class PetHandler {
  constructor(props) {
    this.petList = props;
  }

  listPets(...pets) {
    // or use arguments instead of spread operator (...)
    // const pets = Array.from(arguments); // or [...arguments] or Array.prototype.slice.apply(arguments)
    const createPetItem = ({ name, species, age, adopted }) => {
      return `${name} | ${species} | Age: ${age} ${adopted ? "| Adopted!" : ""}`;
    };
    if (pets.length) { // or if (arguments.length) or if (arguments[0]) etc.
      return pets.map(createPetItem);
    }
    return this.petList.map(createPetItem);
  }

  findPetsInAgeRange(minAge, maxAge) {
    return this.petList.filter((pet) => pet.age >= minAge && pet.age <= maxAge);
  }

  listAdoptedPetsByDate() {
    return this.petList
      .filter((pet) => pet.adopted)
      .sort((a, b) => new Date(b.adoptedDate) - new Date(a.adoptedDate));
  }

  calculateUniqueAdoptionFee(...petNames) {
    // or use arguments instead of spread operator (...)
    // const petNames = Array.from(arguments); // or [...arguments] or Array.prototype.slice.apply(arguments)
    petNames.reduce((accumulator, name) => { // or do this after filter
      if (!accumulator.includes(name)) {
        accumulator.push(name);
      }
      return accumulator;
    }, []);

    return this.petList
      .filter((pet) => petNames.includes(pet.name))
      .reduce((total, pet) => total + pet.adoptionFee, 0);
  }
}

Array.prototype.listPets = function (...args) {
  return new PetHandler(this).listPets(...args);
}

Array.prototype.findPetsInAgeRange = function (minAge, maxAge) {
  return new PetHandler(this).findPetsInAgeRange(minAge, maxAge);
}

Array.prototype.listAdoptedPetsByDate = function (...args) {
  return new PetHandler(this).listAdoptedPetsByDate(...args);
}

Array.prototype.calculateUniqueAdoptionFee = function (...args) {
  return new PetHandler(this).calculateUniqueAdoptionFee(...args);
}