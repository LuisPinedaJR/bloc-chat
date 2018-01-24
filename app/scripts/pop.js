(function(){
        function BlocChatCookies($cookies, $uibModal){
                var currentUser = $cookies.get('blocChatCurrentUser');
                if (!currentUser || currentUser === ' '){
                            $uibModal.open({
                              templateUrl: '/templates/username.html',
                              controller: 'UserCtrl as modal',
                              size: 'sm',
                              backdrop: 'static',
                              animation: false
                            })
                }
        }

        angular
              .module('blocChat')
              .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
