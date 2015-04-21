animalList.controller('ShelterCtrl', function ShelterCtrl($scope, AnimalFactory){
  $scope.name = AnimalFactory.name;
});
