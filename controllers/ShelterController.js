animalList.controller('ShelterCtrl', function ShelterCtrl($scope, AnimalFactory){
  $scope.animals = AnimalFactory.animals;
  $scope.AnimalsFactory = AnimalFactory;

  $scope.addAnimal = function() {
    var name = $scope.animalName;
    var species = $scope.animalSpecies;

    AnimalFactory.addAnimal(name, species);

    $scope.animalName = null;
    $scope.animalSpecies = null;
  }
});
