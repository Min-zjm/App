angular.module('starter.controllers',[])

//选项卡*******
.controller('homeCtrl', function($scope){})
.controller('homeIndexCtrl', function($scope,$state,$interval,$ionicSlideBoxDelegate){
	  $scope.backClass=function(){
	  	  $state.go('home.class.list') 
	  }
	  $interval(function(){
	  	 if($ionicSlideBoxDelegate.slidesCount()-1==$ionicSlideBoxDelegate.currentIndex()){
	  	 	  $ionicSlideBoxDelegate.slide(0)
	  	 }else{
	  	 	  $ionicSlideBoxDelegate.next()
	  	 }
	     
	  },1000)
})
   .controller('hiCommentCtrl', function($scope,$state){   
	          
   })
   


.controller('homeClassCtrl', function($scope){ })
    .controller('hcListCtrl', function($scope){ })
    .controller('hcPriceCtrl', function($scope){ })
//删除按钮--遍历
.controller('homeMylessonCtrl', function($scope,$state){
	      
//	      var arr=[]
//	      for(var a=0;a<5;a++){
//	      	  arr.push(a)
//	      }
//	      $scope.items=arr;
          $scope.attr[
		          {src:'img/li.jpg',name1:'1',name2:'web前端',name3:'$20'},
		          {src:'img/li.jpg',name1:'1',name2:'web前端',name3:'$20'},
		          {src:'img/li.jpg',name1:'1',name2:'web前端',name3:'$20'}
          ]
	     
})
   .controller('hmMyCtrl', function($scope){ 
        $scope.hide=function(){
        	
        }
   })
   .controller('hmGetCtrl', function($scope){
   	     $scope.arr=
                  [{'imgs':'img1'},
                  {'imgs':'img1'},
                  {'imgs':'img1'}];
         
   })

.controller('homeCenterCtrl', function($scope,$state){
	 $state.go('home.center.login')      //
})
   .controller('hcLoginCtrl', function($scope,$state,$http){   
	       $scope.user={              //获取user
	       	     userName:'',
	       	     passWord:''
	       }
	       $scope.log=function(){
	       	    $http({
	       	    	   method:'POST',
	       	    	   url:'http://www.esayscript.com/student/login',  //
	       	    	   params:$scope.user
	       	    }).then(function successCallback(res){
	       	    	   var data=res.data.data;           //res.data.data
	       	    	   localStorage.id=data.id;
	       	    	   localStorage.username=data.userName;
	       	    	   localStorage.passWord=data.passWord;
	       	    	   localStorage.mobile=data.mobile;
	       	    	   localStorage.email=data.email;
	       	    	 //  console.log(res)
	       	    	  if(res.data.status==1){     //成功 ：***==1
	       	    	   	   $state.go('home.center.user')
	       	    	   	   
	       	    	  }
	       	    },function errorCallback(err){
	       	    	       console.log(err.data)
	       	    })
	       	 //localStorage.clear() 
	       }
	       $scope.backReg=function(){
	       	   $state.go('home.center.register')
	      }
  })
  .controller('hcRegisterCtrl', function($scope,$state,$http,$ionicPopup){   
	       $scope.user={              //获取user
	       	     userName:'',
	       	     passWord:'',
	       	     email:'',
	       	     mobile:''
	       }
	       $scope.reg=function(){
	       	    $http({
	       	    	   method:'POST',
	       	    	   url:'http://www.esayscript.com/student/add',  //
	       	    	   params:$scope.user
	       	    }).then(function successCallback(res){
	       	    	   var data=res.data;             //res.data
	       	    	  // console.log(res)
	       	    	   if(data.status==1){        
	       	    	   		$ionicPopup.alert({       //弹出窗口$ionicPopup.alert
	       	    	   			  title:'注册成功',
	       	    	   			  template:data.info  //？
	       	    	   		}).then(function(){
	       	    	   			  $state.go('home.center.login')
	       	    	   		})
	       	    	   }
	       	    	   else{
	       	    	   		$ionicPopup.alert({          
	       	    	   			 title:'注册失败',
	       	    	   			 template:data.info        //？
	       	    	   		})
	       	    	   }
	       	    },function errorCallback(err){
	       	    	   console.log(err.data)
	       	    })
	       }
	       $scope.backLog=function(){
	       	    $state.go('home.center.login')
	       }
	      
  })
  .controller('hcUserCtrl', function($scope,$state,$http){
		  	$scope.user={                   
			  		userName:localStorage.username,   //{{遍历-login--localStorage}}
			  		email:localStorage.email,
			  		mobile:localStorage.mobile,
		  	}
		  	$scope.userclick=function(){
		  		 // localStorage.clear()         //退出后--清除之前的记录
		  		  $state.go('home.center.login')
		  	}
	     
  })






