angular.module("side_menu", ["ionic","ionMdInput","ionic-material","ionic.rating", "side_menu.controllers", "side_menu.services"])
	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}

			if(window.StatusBar) {
				StatusBar.styleDefault();
			}

			setTimeout(function() {
			}, 100);

		});
	})


	.filter("to_trusted", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])




.config(function($stateProvider, $urlRouterProvider) {
$stateProvider

	.state("side_menu",{
		url: "/side_menu",
			abstract: true,
			templateUrl: "templates/side_menu-side_menus.html",
			controller: "side_menusCtrl",
	})

	.state("side_menu.dashboard", {
		url: "/dashboard",
		views: {
			"side_menu-side_menus" : {
						templateUrl:"templates/side_menu-dashboard.html",
						controller: "dashboardCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("side_menu.photo_editor", {
		url: "/photo_editor",
		views: {
			"side_menu-side_menus" : {
						templateUrl:"templates/side_menu-photo_editor.html",
						controller: "photo_editorCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	$urlRouterProvider.otherwise("/side_menu/dashboard");
});
