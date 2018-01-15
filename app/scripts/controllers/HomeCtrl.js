(function(){
        function HomeCtrl(Room, $scope, $uibModal, Message){
              var home = this;
                home.rooms = Room.all;
                // $scope.currentRoom = null;
                home.currentRoom = null;

                home.addRoom = function() {
                        $uibModal.open({
                              animation: false,
                              templateUrl: '/templates/modal.html',
                              controller: 'ModalCtrl as modal',
                              size: 'sm'

                      });
                };
                home.setCurrentRoom = function(room){
                        home.currentRoom = room;
                        home.messages = Message.getByRoomId(home.currentRoom.$id);
                        console.log(home.messages)

                };
}
  angular
       .module('blocChat')
       .controller('HomeCtrl', ['Room', '$scope', '$uibModal', 'Message', HomeCtrl]);
})();
