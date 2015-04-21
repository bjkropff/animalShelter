animalList.factory("AnimalFactory", function AnimalFactory() {
  var factory = {};
  factory.animals = [];


  factory.addAnimal= function(name, species){
    var  animal = { name: name, species: species };
    factory.animals.push(animal);
  };
  return factory;
});
