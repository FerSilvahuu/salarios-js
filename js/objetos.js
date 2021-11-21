// Comprobar la propiedad de un objeto

const myObj = {
    top: 'hat',
    bottom: 'pants'
};

myObj.hasOwnProperty('top'); // true

// Acceder a objetos anidados
const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
  
  ourStorage.cabinet["top drawer"].folder2; // secrets
  ourStorage.desk.drawer;  // stapler

// Arreglos anidados
const ourPets = [
    {
      animalType: "cat",
      names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
      ]
    },
    {
      animalType: "dog",
      names: [
        "Spot",
        "Bowser",
        "Frankie"
      ]
    }
  ];
  
  ourPets[0].names[1]; // Fluffy
  ourPets[1].names[0]; // Spot