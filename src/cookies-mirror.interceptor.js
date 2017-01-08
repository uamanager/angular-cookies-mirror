/* globals angular */
(function () {
    angular
        .module('cookiesMirror')
        .config(cookiesMirrorInterceptorConfig);

    /* @ngInject */
    function cookiesMirrorInterceptorConfig($httpProvider) {
        $httpProvider
            .interceptors
            .push(cookiesMirrorInterceptor);

        /* @ngInject */
        function cookiesMirrorInterceptor($q, $cookiesMirror) {
            return {
                'request': function (config) {
                    var cookies = $cookiesMirror.get(true);
                    if(cookies !== ''){
                        config.headers['Cookie'] = cookies;
                    }
                    return $q.when(config);
                },
                'requestError': function (rejection) {
                    return $q.reject(rejection);
                },
                'response': function (response) {
                    $cookiesMirror.parse(response.headers('set-cookie'));
                    return $q.when(response);
                },
                'responseError': function (rejection) {
                    return $q.reject(rejection);
                }
            };
        }
    }
})();