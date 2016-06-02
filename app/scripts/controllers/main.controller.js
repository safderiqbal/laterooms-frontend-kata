(function () {
    'use strict';

    function Controller() {
        var vm = this,
            rawData = [
                {
                    'Name': 'hotelone',
                    'StarRating': 5,
                    'Facilities': ['car park', 'pool']
                },
                {
                    'Name': 'hoteltwo',
                    'StarRating': 3,
                    'Facilities': ['car park', 'gym']
                },
                {
                    'Name': 'hotelthree',
                    'StarRating': 3,
                    'Facilities': []
                }
            ];

        vm.data = rawData;
    }

    angular
        .module('laterooms-kata')
        .controller('MainController', Controller);
})();