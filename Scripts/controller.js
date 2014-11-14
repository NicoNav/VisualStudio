var phonecatApp = angular.module('phonecatApp',[]);


phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
  var obj = {content:null};

    $http.get('content.json').success(function(data) {
        // you can do some processing here
        obj.content = data;
        $scope.phones = data;
    });    

  $scope.orderPhone = 'age';
});
