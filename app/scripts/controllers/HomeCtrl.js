(function(){
        function HomeCtrl(Room, $uibModal){
                this.rooms = Room.all;
        }

  angular
       .module('blocChat')
       .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl] );
})();
