app.controller('AddController', ['$http', '$scope', 'settings', 'localization', '$log', function($http, $scope, settings, localization, $log){

    $scope.submit = function(){
        var url = settings.endpoint + 'logged-area/add';
        $log.log(url);
        localization.init().then(function(){
             $http.post(url, 
                       {'content': $scope.diese, 
                        'lat': localization.lat(), 
                        'lon' : localization.lon()
                       }
            )
            .success(function(data){
                if(data.success){
                    $log.log('#@T written');
                }else{
                
                }
            })
          .error(function(data){
            $log.log(data);
           });

        }, function(erro){
            $log.log('localization error',error);
        });
    };

}]);
