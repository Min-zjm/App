// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){   //方法: .config(){}
  $stateProvider                   //配置route
 
//侧栏菜单


//选项卡**********
  .state('home',{
    url: '/home',
    templateUrl: 'templates/home.html',
    abstract:true ,            //默认显示
    controller:'homeCtrl'
  })
  
  .state('home.index',{
    url: '/index',
    views:{
    	  'home-index':{
    	  	   templateUrl: 'templates/home/index.html',
             controller: 'homeIndexCtrl'
    	  }
    }
  })
 //好评页面
 .state('home.index.comment',{
    url: '/comment',
    templateUrl: 'templates/home/index/comment.html',
    controller:'hiCommentCtrl'
  })
 

.state('home.class',{
    url: '/class',
    views:{
    	  'home-class':{
    	  	   templateUrl: 'templates/home/class.html',
             controller: 'homeClassCtrl'
    	  }
    }
  })
  //课程列表页面
	.state('home.class.list',{
    url: '/list',
    templateUrl: 'templates/home/class/list.html',
    controller: 'hcListCtrl'
  })
  //价格页面
	.state('home.class.price',{
    url: '/price',
    templateUrl: 'templates/home/class/price.html',
    controller: 'hcPriceCtrl'
  })
.state('home.mylesson',{
    url: '/mylesson',
    views:{
    	  'home-mylesson':{
    	  	   templateUrl: 'templates/home/mylesson.html',
             controller: 'homeMylessonCtrl'
    	  }
    }
  })
	//我的课程页面
	.state('home.mylesson.my',{
    url: '/my',
    templateUrl: 'templates/home/mylesson/my.html',
    controller: 'hmMyCtrl'
  })
	//收藏课程页面
	.state('home.mylesson.get',{
    url: '/get',
    templateUrl: 'templates/home/mylesson/get.html',
    controller: 'hmGetCtrl'
  })

.state('home.center',{
    url: '/center',
    views:{
    	  'home-center':{
    	  	   templateUrl: 'templates/home/center.html',
             controller: 'homeCenterCtrl'
    	  }
    }
  })
	//登陆页面
	 .state('home.center.login',{
	    url: '/login',
	    templateUrl: 'templates/home/center/login.html',
	    controller:'hcLoginCtrl'
	  })
	//注册页面
	.state('home.center.register',{
	    url: '/register',
	    templateUrl: 'templates/home/center/register.html',
	    controller:'hcRegisterCtrl'
	  })
	//退出登录
	.state('home.center.user',{
	    url: '/user',
	    templateUrl: 'templates/home/center/user.html',
	    controller:'hcUserCtrl'
	 })	

 
 $urlRouterProvider.otherwise('home/index/comment');

})

