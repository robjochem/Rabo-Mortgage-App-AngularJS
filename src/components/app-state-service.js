    angular.module('components').factory('AppStateService', function() {
    var currentId;

    return {
        getCurrentId: function() {
            return currentId;
        },

        setCurrentId: function(id){
            currentId = id;
        }

    }

})