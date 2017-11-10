var app=angular.module("myapp",[]);
app.controller("showuserCTRL",function($scope,$http){

    $http({
        method:"GET",
        url:"/show-user"
    }).then(function successResponse(response){
        console.log(response.data);
    });
    $scope.name="sahar";
    console.log($scope.name);
    
})