import angular from "angular";
import { headerTemplate } from "./modules/header";
import { footerTemplate } from "./directives";
import { spinnerTemplate } from "./modules/spinner";
import { asideTemplate } from "./modules/aside";
import { modalTemplate } from "./modules/modal";
import { productListTemplate } from "./modules/productList";
import { favoritesTemplate } from "./modules/favorites";
import { addToCartTemplate } from "./modules/addToCart";

import { loginCtrl } from "./pages/Login";
import { modalCtrl } from "./modules/modal";
import { headerCtrl } from "./modules/header";
import { asideCtrl } from "./modules/aside";
import { productListCtrl } from "./modules/productList";
import { httpCtrl } from "./services";
import { productPageCtrl } from "./pages/ProductPage";
import { favoritesCtrl} from "./modules/favorites";
import { addToCartCtrl } from "./modules/addToCart";
import { cartCtrl } from "./pages/Cart";
import {articlePageCtrl} from './pages/ArticlePage'

import logo from './assets/img/logo.svg'
import './style/main.scss';

const app = angular.module("myApp", [require('angular-route'), require('angular-sanitize')]);

app.controller('mainCtrl', ['$rootScope', '$scope', '$controller', function($rootScope, $scope, $controller){
    $controller('modalCtrl', {$scope: $scope})
    $rootScope.logo = logo;
    $rootScope.isLoading = false;
    if(localStorage.getItem('isLogin')){
        $rootScope.isLogin = JSON.parse(localStorage.getItem('isLogin'));
    } else{
        $rootScope.isLogin = false;
    }

    if(localStorage.getItem('user')){
        $rootScope.user = JSON.parse(localStorage.getItem('user'));
    } else{
        $rootScope.user = {};
    }

    if(localStorage.getItem('accessToken')){
        $rootScope.token = JSON.parse(localStorage.getItem('accessToken'));
    } else{
        $rootScope.token = '';
    }

    $rootScope.message = 'Ooops try later';
}]);

app.controller('loginCtrl', ['$rootScope','$scope', '$http', '$controller', '$location', loginCtrl]);
app.controller('modalCtrl', ['$rootScope','$scope', '$controller', modalCtrl]);
app.controller('headerCtrl', ['$rootScope', '$scope', headerCtrl]);
app.controller('asideCtrl', ['$scope', asideCtrl]);
app.controller('productListCtrl', ['$rootScope', '$scope', '$controller', '$location', productListCtrl]);
app.controller('httpCtrl', ['$rootScope', '$scope', '$http', '$controller', '$location', httpCtrl]);
app.controller('productPageCtrl', ['$rootScope', '$scope', '$controller', '$routeParams', '$location', '$http', productPageCtrl]);
app.controller('favoritesCtrl', ['$rootScope', '$scope', '$controller', '$routeParams', favoritesCtrl])
app.controller('addToCartCtrl', ['$rootScope', '$scope', '$controller', '$routeParams', '$location', addToCartCtrl])
app.controller('cartCtrl', ['$rootScope', '$scope', '$controller', cartCtrl]);
app.controller('articlePageCtrl', ['$rootScope', '$scope', '$location', '$anchorScroll', articlePageCtrl]);

app.directive('headerTemplate', [headerTemplate]);
app.directive('footerTemplate', [footerTemplate]);
app.directive('modalTemplate', [modalTemplate]);
app.directive('spinnerTemplate', [spinnerTemplate]);
app.directive('asideTemplate', [asideTemplate]);
app.directive('productListTemplate', [productListTemplate]);
app.directive('favoritesTemplate', [favoritesTemplate]);
app.directive('addToCartTemplate', [addToCartTemplate]);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        template: require('./pages/Main/main.html').default
    });
    $routeProvider
        .when('/login', {
        controller: 'loginCtrl',
        template: require('./pages/Login/login.html').default
    })
    $routeProvider
        .when('/products/:id', {
        controller: 'productPageCtrl',
        template: require('./pages/ProductPage/productPage.html').default
    })
    $routeProvider
        .when('/cart', {
        controller: 'cartCtrl',
        template: require('./pages/Cart/cart.html').default
    })
    // $routeProvider
    //     .when('/acticlePage', {
    //     template: require('./pages/ArticlePage/articlePage.html').default,
    //     controller: 'articlePageCtrl'
    // })
    .otherwise({
        redirectTo: '/error'
    })
});