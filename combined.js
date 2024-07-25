function onLoadFunction() {
    window.gapi.client.setApiKey("AIzaSyCH23PlETVsAvluhUeA52WuK1OMUr6yL70"),
    window.gapi.client.load("plus", "v1", (function() {}
    ))
}
angular.module("EktaApp", ["ngImgCrop", "ngRoute", "ngYoutube", "EktaApp.slideCarousel", "ngResource", "ui.bootstrap", "ngMaterial", "ngMessages", "ngDialog", "infinite-scroll", "angularLazyImg", "angular-md5", "ng.deviceDetector", "angular-google-analytics", "ngDfp", "ngSocial", "vcRecaptcha"]).run((function($route, $rootScope, $location) {
    $rootScope.$on("$routeChangeSuccess", (function() {
        $(".dropdown-content").addClass("hide"),
        setTimeout((function() {
            $(".dropdown-content").removeClass("hide")
        }
        ), 1e3),
        $rootScope.clearinterval && $rootScope.clearinterval()
    }
    )),
    $rootScope.isPageLoading = !1,
    $rootScope.$on("$locationChangeStart", (function(event, newUrl, oldUrl) {
        try {
            var canonicalURL = "https://www.etvwin.com" + new URL(newUrl).pathname
              , existingCanonical = document.querySelector('link[rel="canonical"]');
            existingCanonical && existingCanonical.remove();
            var canonicalLink = document.createElement("link");
            canonicalLink.rel = "canonical",
            canonicalLink.href = canonicalURL,
            document.head.appendChild(canonicalLink)
        } catch (error) {
            console.log(error)
        }
    }
    ));
    var original = $location.path;
    $location.path = function(path, reload) {
        if (!1 === reload)
            var lastRoute = $route.current
              , un = $rootScope.$on("$locationChangeSuccess", (function() {
                $route.current = lastRoute,
                un()
            }
            ));
        return original.apply($location, [path])
    }
}
)).constant("appConstants", {
    appName: "EKTA",
    appVersion: "1.0.0.0",
    baseUrl: "https://prod.api.etvwin.com",
    authToken: "q5u8JMWTd2698ncg7q4Q",
    involAccessToken: "zsv18vb7rf9tzuh4",
    imageBaseUrl: "https://s3-ap-southeast-1.amazonaws.com/tcr-cf-test/etv_user_images/",
    secret_key: "2fd66b173c16e012e90e",
    commentsUrl: "https://api.rchbl.com",
    passwordPattern: "",
    mainBannerStyle: {
        center: !0,
        items: 1.2,
        margin: 10,
        nav: !0,
        startPosition: 1,
        rewind: !0,
        navigation: !0,
        pagination: !0,
        autoplay: !0,
        loop: !1,
        navText: ["<span class='icon-bannerleftarrow' aria-hidden='true'></span>", "<span class='icon-bannerrightarrow' aria-hidden='true'></span>"]
    },
    oneItemCarousel: {
        items: 1,
        dots: !1,
        nav: !0,
        navigation: !0,
        pagination: !0,
        autoplay: !0,
        loop: !1,
        navText: ["<span class='icon-bannerleftarrow' aria-hidden='true'></span>", "<span class='icon-bannerrightarrow' aria-hidden='true'></span>"]
    },
    threeItemCarousel: {
        margin: 10,
        dots: !1,
        nav: !0,
        navigation: !0,
        pagination: !0,
        navText: ["<span class='glyphicon glyphicon-menu-left' aria-hidden='true'></span>", "<span class='glyphicon glyphicon-menu-right' aria-hidden='true'></span>"],
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1e3: {
                items: 3
            }
        }
    },
    fourItemCarousel: {
        margin: 15,
        dots: !1,
        nav: !0,
        navigation: !0,
        pagination: !0,
        navText: ["<span class='glyphicon glyphicon-menu-left' aria-hidden='true'></span>", "<span class='glyphicon glyphicon-menu-right' aria-hidden='true'></span>"],
        responsive: {
            0: {
                items: 2.5
            },
            600: {
                items: 4
            },
            1e3: {
                items: 4
            }
        }
    },
    sixItemCarousel: {
        margin: 10,
        dots: !1,
        nav: !0,
        navigation: !0,
        pagination: !0,
        navText: ["<span class='glyphicon glyphicon-menu-left' aria-hidden='true'></span>", "<span class='glyphicon glyphicon-menu-right' aria-hidden='true'></span>"],
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 6
            },
            1e3: {
                items: 6
            }
        }
    },
    sixAndHalfItemCarousel: {
        margin: 10,
        dots: !1,
        nav: !0,
        slideBy: 6,
        navigation: !0,
        pagination: !0,
        onTranslated() {
            document.scrollingElement.scrollTop = document.scrollingElement.scrollTop + 1
        },
        navText: ["<span class='icon-bannerleftarrow' aria-hidden='true'></span>", "<span class='icon-bannerrightarrow' aria-hidden='true'></span>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 6.5
            },
            1e3: {
                items: 6.5
            },
            1500: {
                items: 6.6
            }
        }
    },
    eightItemCarousel: {
        margin: 10,
        dots: !1,
        nav: !0,
        navigation: !0,
        pagination: !0,
        navText: ["<span class='glyphicon glyphicon-menu-left' aria-hidden='true'></span>", "<span class='glyphicon glyphicon-menu-right' aria-hidden='true'></span>"],
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 8
            },
            1e3: {
                items: 8
            }
        }
    },
    eightItemChannelCarousel: {
        margin: 10,
        dots: !1,
        nav: !0,
        navigation: !0,
        pagination: !0,
        navText: ["<span class='glyphicon glyphicon-menu-left' aria-hidden='true'></span>", "<span class='glyphicon glyphicon-menu-right' aria-hidden='true'></span>"],
        responsive: {
            0: {
                items: 4
            },
            600: {
                items: 8
            },
            1e3: {
                items: 8
            }
        }
    },
    eightAndHalfItemCarousel: {
        margin: 8,
        dots: !1,
        nav: !0,
        slideBy: 6,
        navigation: !0,
        pagination: !0,
        onTranslated() {
            document.scrollingElement.scrollTop = document.scrollingElement.scrollTop + 1
        },
        navText: ["<span class='icon-bannerleftarrow' aria-hidden='true'></span>", "<span class='icon-bannerrightarrow' aria-hidden='true'></span>"],
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 8.5
            },
            1e3: {
                items: 8.5
            }
        }
    },
    exclusiveItemCarousel: {
        margin: 15,
        loop: !1,
        dots: !1,
        slideBy: 2,
        nav: !0,
        navigation: !0,
        pagination: !0,
        navText: ["<span class='icon-bannerleftarrow' aria-hidden='true'></span>", "<span class='icon-bannerrightarrow' aria-hidden='true'></span>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1e3: {
                items: 2
            }
        }
    },
    twoItemCarousel: {
        margin: 10,
        dots: !1,
        nav: !0,
        navigation: !0,
        pagination: !0,
        navText: ["<span class='glyphicon glyphicon-menu-left' aria-hidden='true'></span>", "<span class='glyphicon glyphicon-menu-right' aria-hidden='true'></span>"],
        responsive: {
            0: {
                items: 2.3
            },
            767: {
                items: 4
            },
            862: {
                items: 2.5
            }
        }
    },
    twoItemCarouselStrict: {
        margin: 10,
        dots: !1,
        nav: !0,
        navigation: !0,
        pagination: !0,
        navText: ["<span class='glyphicon glyphicon-menu-left' aria-hidden='true'></span>", "<span class='glyphicon glyphicon-menu-right' aria-hidden='true'></span>"],
        responsive: {
            0: {
                items: 2
            },
            767: {
                items: 2
            },
            862: {
                items: 2
            }
        }
    },
    fourAndHalfItemCarousel: {
        margin: 10,
        dots: !1,
        nav: !0,
        slideBy: 4,
        navigation: !0,
        pagination: !0,
        onTranslated() {
            document.scrollingElement.scrollTop = document.scrollingElement.scrollTop + 1
        },
        navText: ["<span class='icon-bannerleftarrow' aria-hidden='true'></span>", "<span class='icon-bannerrightarrow' aria-hidden='true'></span>"],
        responsive: {
            0: {
                items: 2.5
            },
            767: {
                items: 4
            },
            862: {
                items: 4.5
            }
        }
    },
    rightCarousel: {
        margin: 10,
        loop: !1,
        dots: !1,
        nav: !0,
        navigation: !0,
        pagination: !0,
        navText: ["<span class='glyphicon glyphicon-menu-left' aria-hidden='true'></span>", "<span class='glyphicon glyphicon-menu-right' aria-hidden='true'></span>"],
        responsive: {
            0: {
                items: 2
            },
            767: {
                items: 4
            },
            862: {
                items: 2
            }
        }
    },
    exclItemCarousel: {
        margin: 10,
        dots: !1,
        nav: !0,
        navigation: !0,
        pagination: !0,
        navText: ["<span class='glyphicon glyphicon-menu-left' aria-hidden='true'></span>", "<span class='glyphicon glyphicon-menu-right' aria-hidden='true'></span>"],
        responsive: {
            0: {
                items: 1.1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 2
            }
        }
    },
    audioPlayerFeaturesMobile: ["playpause", "eventcallbacks"],
    audioPlayerFeatures: ["playpause", "volume", "eventcallbacks", "ExternalControls"],
    videoPlayerFeaturesWeb: ["playpause", "progressbar", "time", "qualityswitch", "volume", "fullscreen", "hotkeys", "bigicons", "eventcallbacks", "advertisement", "ExternalControls", "loadcallback"],
    videoPlayerFeaturesAndroid: ["bigicons", "playpause", "progressbar", "time", "qualityswitch", "fullscreen", "eventcallbacks", "advertisement", "ExternalControls", "loadcallback"],
    videoPlayerFeaturesiOS: ["bigicons", "eventcallbacks", "ExternalControls", "loadcallback"],
    videoPlayerFeaturesAndroidLive: ["playpause", "liveprogressbar", "liveicon", "qualityswitch", "fullscreen", "bigicons", "eventcallbacks", "ExternalControls", "loadcallback"],
    videoPlayerFeaturesLive: ["playpause", "liveprogressbar", "liveicon", "qualityswitch", "volume", "fullscreen", "bigicons", "eventcallbacks", "advertisement", "ExternalControls", "loadcallback"]
}).factory("timeoutHttpIntercept", (function($rootScope, $q) {
    return {
        request: function(config) {
            return config.timeout = 6e4,
            config
        }
    }
}
)),
window.fbAsyncInit = function() {
    window.FB.init({
        appId: "1144978155688155",
        xfbml: !0,
        version: "v2.8",
        status: !0
    })
}
,
function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    d.getElementById(id) || ((js = d.createElement(s)).id = id,
    js.src = "//connect.facebook.net/en_US/sdk.js",
    fjs.parentNode.insertBefore(js, fjs))
}(document, "script", "facebook-jssdk"),
window.addEventListener("storage", (function(event) {
    "logout-event" == event.key && (window.location.href = "/home",
    window.location.reload())
}
)),
angular.module("EktaApp").config((function($routeProvider, $locationProvider, $sceDelegateProvider, $httpProvider, $mdDateLocaleProvider, AnalyticsProvider, DoubleClickProvider) {
    $mdDateLocaleProvider.formatDate = function(date) {
        return moment(date).format("DD/MM/YYYY")
    }
    ,
    AnalyticsProvider.setAccount("UA-93882660-5"),
    $httpProvider.defaults.withCredentials = !0,
    $httpProvider.interceptors.push("timeoutHttpIntercept"),
    $locationProvider.html5Mode(!0);
    var routingList = {
        "/home": {
            templateUrl: "app/components/home/home.html",
            controller: "homeController",
            controllerAs: "homeCtrl"
        },
        "/news/:categoryItem": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/:friendlyId/all": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:catalog/:catalogList/season-:id/": {
            redirectTo: "/:catalog/:catalogList"
        },
        "/:catalog/:catalogList/season-:id/": {
            redirectTo: "/:catalog/:catalogList"
        },
        "/:pageName/movies-:friendlyId/:channelID": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/movies-:friendlyId": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/featured-:friendlyId/:channelID": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/featured-:friendlyId": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/tv-shows-:friendlyId/:channelID": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/tv-shows-:friendlyId": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/home/:friendlyId/:channelID": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/home/:friendlyId": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/channels/etv-andhra-pradesh/:catalog/:catalogList/:episode": {
            templateUrl: "app/components/showDetails/showDetails.html",
            controller: "showDetailsController",
            controllerAs: "detCtrl"
        },
        "/channels/etv-telangana/:catalog/:catalogList": {
            redirectTo: "/channels/etv-andhra-pradesh/:catalog"
        },
        "/channels/etv-telangana/:catalog/:catalogList/:episode": {
            templateUrl: "app/components/showDetails/showDetails.html",
            controller: "showDetailsController",
            controllerAs: "detCtrl"
        },
        "/channels/etv-andhra-pradesh/:catalog/:catalogList": {
            redirectTo: "/channels/etv-telangana/:catalog"
        },
        "/:pageName/movie-:friendlyId/:channelID": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/movie-:friendlyId": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/win-:friendlyId/:channelID": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/win-:friendlyId": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/telugu-movies/:catalogItem": {
            templateUrl: "app/components/showDetails/showDetails.html",
            controller: "showDetailsController",
            controllerAs: "detCtrl"
        },
        "/original-movies/:catalogItem": {
            templateUrl: "app/components/showDetails/showDetails.html",
            controller: "showDetailsController",
            controllerAs: "detCtrl"
        },
        "/channels/etv-telugu/:categoryItem/:channelID": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/channels/etv-telugu/:categoryItem": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/channels/etv-plus/:categoryItem/:channelID": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/channels/etv-plus/:categoryItem": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/channels/etv-cinema/:categoryItem/:channelID": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/channels/etv-cinema/:categoryItem": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/channels/etv-abhiruchi/:categoryItem/:channelID": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/channels/etv-abhiruchi/:categoryItem": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/channels/etv-andhra-pradesh/:categoryItem": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/channels/etv-telangana/:categoryItem": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/channels/win-exclusive/:categoryItem/:channelID": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/channels/win-exclusive/:categoryItem": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/shows/:catalogList/:seasons": {
            redirectTo: "/shows/:catalogList"
        },
        "/:catalog/:catalogList/seasons": {
            redirectTo: "/:catalog/:catalogList"
        },
        "/:catalog/:catalogList/seasons/:catalogItem": {
            templateUrl: "app/components/landingList/landingListPage.html",
            controller: "landingListController",
            controllerAs: "landCtrl"
        },
        "/live": {
            templateUrl: "app/components/live/livelisting.html",
            controller: "liveController",
            controllerAs: "liveCtrl"
        },
        "/live/:liveMedia": {
            templateUrl: "app/components/liveDetails/livedetails.html",
            controller: "livedetailsController",
            controllerAs: "liveDetailsCtrl"
        },
        "/live/:liveMedia/:showname": {
            templateUrl: "app/components/liveDetails/livedetails.html",
            controller: "livedetailsController",
            controllerAs: "liveDetailsCtrl"
        },
        "/live/:liveMedia/:channel/:showname": {
            templateUrl: "app/components/liveDetails/livedetails.html",
            controller: "livedetailsController",
            controllerAs: "liveDetailsCtrl"
        },
        "/channels/:channel": {
            templateUrl: "app/components/channel/channelPage.html",
            controller: "channelPageController",
            controllerAs: "channelCtrl"
        },
        "/recipes": {
            templateUrl: "app/components/recipes/recipesPage.html",
            controller: "recipPageController"
        },
        "/abhiruchi": {
            templateUrl: "app/components/channel/channelPage.html",
            controller: "channelPageController",
            controllerAs: "channelCtrl"
        },
        "/profile": {
            templateUrl: "app/components/userprofile/userprofile.html",
            controller: "userprofileController",
            controllerAs: "profileCtrl"
        },
        "/recipes/:friendlyId": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/shows-:friendlyId/:channelID": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/shows-:friendlyId": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/exclusive-:friendlyId/:channelID": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/exclusive-:friendlyId": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/etv-exclusive-:friendlyId/:channelID": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/etv-exclusive-:friendlyId": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/events-:friendlyId/:channelID": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/events-:friendlyId": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/serials-:friendlyId/:channelID": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/serials-:friendlyId": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/health/:categoryItem": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/channels/etv-life/:categoryItem": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:pageName/:friendlyId/list": {
            templateUrl: "app/components/seeAll/seeAllPage.html",
            controller: "seeAllController",
            controllerAs: "seeAllCtrl"
        },
        "/:catalog/:catalogList/landing": {
            templateUrl: "app/components/landingList/landingListPage.html",
            controller: "landingListController",
            controllerAs: "landCtrl"
        },
        "/channels/etv-life/Q&A/:replied": {
            templateUrl: "app/components/showDetails/showDetails.html",
            controller: "showDetailsController",
            controllerAs: "detCtrl"
        },
        "/:catalog/:catalogList/:episode": {
            templateUrl: "app/components/showDetails/showDetails.html",
            controller: "showDetailsController",
            controllerAs: "detCtrl"
        },
        "/:catalog/:catalogItem": {
            templateUrl: "app/components/landingList/landingListPage.html",
            controller: "landingListController",
            controllerAs: "landCtrl"
        },
        "/:catalog/:catalogList/season": {
            templateUrl: "app/components/landingList/landingListPage.html",
            controller: "landingListController",
            controllerAs: "landCtrl"
        },
        "/:catalog/:showname/:episode": {
            templateUrl: "app/components/showDetails/showDetails.html",
            controller: "showDetailsController",
            controllerAs: "detCtrl"
        },
        "/:catalog/:catalogList/season/:season": {
            templateUrl: "app/components/landingList/landingListPage.html",
            controller: "landingListController",
            controllerAs: "landCtrl"
        },
        "/:catalog/:catalogList/:season/:catalogItem": {
            templateUrl: "app/components/showDetails/showDetails.html",
            controller: "showDetailsController",
            controllerAs: "detCtrl"
        },
        "/paymentstatus": {
            templateUrl: "app/components/payment/paymentsuccess.html",
            controller: "paymentstatusController",
            controllerAs: "paymentstatusCtrl",
            resolve: {
                routeData: function($http) {
                    return $http({
                        method: "GET",
                        url: "/paymentstatus",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    })
                }
            }
        },
        "/confirmation": {
            templateUrl: "app/components/confirmation/confirmation.html",
            controller: "confirmationController",
            controllerAs: "confirmationCtrl"
        },
        "/active": {
            templateUrl: "app/components/tvActive/tvactive.html",
            controller: "tvactiveController",
            controllerAs: "tvactiveController"
        },
        "/activatetv": {
            templateUrl: "app/components/tvActive/tvactive.html",
            controller: "tvactiveController",
            controllerAs: "tvactiveController"
        },
        "/redeem": {
            templateUrl: "app/components/redeemCouponCode/redeemCode.html",
            controller: "redeemCodeController",
            controllerAs: "redeemCodeController"
        },
        "/subscription-plans": {
            templateUrl: "app/components/subscriptionPlans/subscriptionPlansView.html",
            controller: "subscriptionPlansViewController",
            controllerAs: "subscriptionPlansViewController"
        },
        "/email_confirmation": {
            templateUrl: "app/components/confirmation/confirmation.html",
            controller: "confirmationController",
            controllerAs: "confirmationCtrl"
        },
        "/reset_password": {
            templateUrl: "app/components/resetpassword/resetpassword.html",
            controller: "resetpasswordController",
            controllerAs: "resetpasswordCtrl"
        },
        "/myQandA": {
            templateUrl: "app/components/questionAnswer/myQAListingPage.html",
            controller: "QAController",
            controllerAs: "QACtrl"
        },
        "/preference": {
            templateUrl: "app/components/preferences/preferencePage.html",
            controller: "preferenceController",
            controllerAs: "preCtrl"
        },
        "/watchlater": {
            templateUrl: "app/components/watchLater/watchLaterPage.html",
            controller: "watchLaterController",
            controllerAs: "watchLaterCtrl"
        },
        "/aboutus": {
            templateUrl: "app/components/about/aboutus.html",
            controller: "aboutUsController",
            controllerAs: "aboutusCtrl"
        },
        "/contactus": {
            templateUrl: "app/components/about/contactus.html",
            controller: "aboutUsController",
            controllerAs: "aboutusCtrl"
        },
        "/feedback": {
            templateUrl: "app/components/about/feedback.html",
            controller: "aboutUsController",
            controllerAs: "aboutusCtrl"
        },
        "/privacypolicy": {
            templateUrl: "app/components/about/privacypolicy.html",
            controller: "aboutUsController",
            controllerAs: "aboutusCtrl"
        },
        "/termsandconditions": {
            templateUrl: "app/components/about/tac.html",
            controller: "aboutUsController",
            controllerAs: "aboutusCtrl"
        },
        "/faq": {
            templateUrl: "app/components/about/faq.html",
            controller: "aboutUsController",
            controllerAs: "aboutusCtrl"
        },
        "/404": {
            redirectTo: "/home"
        },
        "/Something-went-wrong": {
            templateUrl: "app/components/about/error.html",
            controller: "aboutUsController",
            controllerAs: "aboutusCtrl"
        },
        "/:catalog": {
            templateUrl: "app/components/catalog/catalogPage.html",
            controller: "catalogController",
            controllerAs: "catalogCtrl"
        }
    };
    Object.keys(routingList).forEach((function(routeLocation) {
        $routeProvider.when(routeLocation, routingList[routeLocation])
    }
    )),
    $routeProvider.otherwise({
        redirectTo: "/home"
    })
}
));
var topmenuController = function($scope, $rootScope, $location, ngDialog, topmenuService, subscriptionService, $window, onesignalService, profileService, appConstants, loginService) {
    $location.protocol(),
    localStorage.removeItem("SubListTitle");
    var userdata = localStorage.getItem("userdata");
    $rootScope.currentChannelTab = "",
    $rootScope.metaimage = appConstants.appLogo,
    $rootScope.$on("$routeChangeSuccess", (function() {
        $scope.currentPage = $location.path(),
        clearInterval($window.playerTimer)
    }
    )),
    $rootScope.mobileScreen = !1,
    screen.width < 600 && ($rootScope.mobileScreen = !0);
    var datenow = new Date;
    $scope.currentYear = datenow.getFullYear(),
    $rootScope.isGuestUser = !0,
    $scope.signoutalert = !1,
    $rootScope.showSubscriptionIcon = !0;
    var checkIfMobileNumberUpdated = function(response) {
        "msisdn" == response.data.login_type || "" != response.data.mobile_number || (response.data.email_id ? $window.localStorage.setItem("userEmailID", response.data.email_id) : $window.localStorage.setItem("userEmailID", response.data.ext_user_id),
        ngDialog.open({
            data: {
                emailFlow: "email" == response.data.login_type
            },
            template: "app/shared/dialog/updatemobile/updatemobile.html",
            controller: "updatemobileController",
            controllerAs: "updateMobileCtrl",
            scope: $scope,
            className: "ngdialog-theme-default",
            disableAnimation: !0,
            closeByNavigation: !1,
            closeByDocument: !1,
            showClose: !1
        }))
    }
      , loadUser = function() {
        try {
            userdata && "null" !== userdata ? (topmenuService.isLoggedIn = !0,
            topmenuService.userData = JSON.parse(userdata),
            $scope.user = JSON.parse(userdata),
            $rootScope.isGuestUser = !1,
            $scope.session = $scope.user.session,
            session = $scope.user.session,
            profileService.loadProfileData(session).then((function(response) {
                response.error || ($scope.user = response.data,
                $rootScope.isGuestUser = !1,
                $rootScope.kage = $scope.user.age,
                $rootScope.kgender = $scope.user.gender,
                $scope.user.profile_pic && "" !== $scope.user.profile_pic ? $rootScope.profilepic = $scope.user.profile_pic : $rootScope.profilepic = "assets/img/usericon.svg",
                $rootScope.showSubscriptionIcon = !response.data.isUserSubscribed,
                "IN" == topmenuService.regionData.country_code2 && checkIfMobileNumberUpdated(response))
            }
            ))) : ($rootScope.isGuestUser = !0,
            $scope.session = "",
            $rootScope.profilepic = "assets/img/usericon.svg")
        } catch (err) {
            $rootScope.isGuestUser = !0,
            $scope.session = "",
            $rootScope.profilepic = "assets/img/usericon.svg"
        }
        var session
    }
      , ChecknetWork = function() {
        $window.navigator.onLine || ($rootScope.isPageLoading = !1,
        ngDialog.open({
            template: '<div class="confirm-dialog"><p>Looks like something has gone wrong. Please check your network and retry!</p></div>',
            plain: !0,
            closeByNavigation: !1,
            closeByDocument: !0,
            showClose: !1,
            closeByEscape: !0
        }))
    }
      , pausePlayer = function() {
        try {
            playerObject1.referenceObj.ExternalControls.pause()
        } catch (err) {}
    };
    $scope.OpenNavBar = function() {
        document.getElementById("sidenavBar").style.width = "80%",
        document.getElementById("sidenavBar").style.visibility = "Visible",
        document.getElementById("sidenavBarbottom").style.width = "80%",
        document.getElementById("sidenavBarbottom").style.visibility = "Visible",
        document.getElementById("pageBody").style.overflow = "Hidden",
        document.getElementById("transparentOverlay").style.display = "Block",
        pausePlayer()
    }
    ,
    $scope.CloseNavBar = function() {
        document.getElementById("sidenavBar").style.width = "0%",
        document.getElementById("sidenavBar").style.visibility = "Hidden",
        document.getElementById("sidenavBarbottom").style.width = "0%",
        document.getElementById("sidenavBarbottom").style.visibility = "Hidden",
        document.getElementById("pageBody").style.overflow = "Scroll",
        document.getElementById("transparentOverlay").style.display = "None",
        $scope.topmenuController.isPanelOpen = !1;
        for (var i = 0; i < $scope.topmenulist.length; i++)
            $scope.topmenulist[i].isexpanded = !1
    }
    ;
    var openLoginDialog = function() {
        pausePlayer(),
        $rootScope.isPageLoading = !1,
        document.getElementById("pageBody").style.overflow = "Hidden";
        var showCloseButton, dialogConfig = {};
        "IN" == topmenuService.regionData.country_code2 ? (dialogConfig = {
            template: "app/shared/dialog/loginIndia/loginDialogIndia.html",
            controller: "loginControllerIndia",
            controllerAs: "loginCtrlIN"
        },
        showCloseButton = !1) : (dialogConfig = {
            template: "app/shared/dialog/login/loginDialog.html",
            controller: "loginController",
            controllerAs: "loginCtrl"
        },
        showCloseButton = !0),
        ngDialog.open({
            preCloseCallback: function(value) {
                document.getElementById("pageBody").style.overflow = "Scroll",
                localStorage.setItem("logoutAlert", !1)
            },
            ...dialogConfig,
            className: "ngdialog-theme-default",
            closeByNavigation: !1,
            closeByDocument: !1,
            scope: $scope,
            disableAnimation: !0,
            showClose: showCloseButton
        })
    };
    $scope.OpenUserMenu = function() {
        $scope.topmenuController.isPanelOpen = !$scope.topmenuController.isPanelOpen
    }
    ,
    "true" == localStorage.getItem("logoutAlert") && ($scope.signoutalert = !0,
    openLoginDialog()),
    $scope.OpenSignIn = function() {
        ChecknetWork(),
        $scope.signoutalert = !1,
        $scope.signInPage = !0,
        $scope.CloseNavBar(),
        openLoginDialog()
    }
    ,
    $scope.OpenSignUp = function() {
        ChecknetWork(),
        $scope.signoutalert = !1,
        $scope.signInPage = !1,
        $scope.CloseNavBar(),
        openLoginDialog()
    }
    ,
    $scope.gotoPage = function(page) {
        $rootScope.selectedChoice = "none",
        ChecknetWork(),
        $location.path(page)
    }
    ;
    var deleteTags = function() {
        onesignalService.getTags().then((function(tags) {
            tags && Object.keys(tags).length > 0 && onesignalService.deleteTags(Object.keys(tags)).then((function(tagsdeleted) {}
            ))
        }
        ))
    }
      , clearStorage = function() {
        localStorage.removeItem("userdata"),
        localStorage.removeItem("subscriptiontab"),
        localStorage.removeItem("subscriptionFooterTab"),
        localStorage.removeItem("isUserSubscribed"),
        localStorage.removeItem("subscriptionLocation"),
        localStorage.removeItem("subsId"),
        localStorage.removeItem("addplanname"),
        localStorage.removeItem("mobilenum"),
        localStorage.setItem("logout-event", "logout" + Math.random()),
        $rootScope.profilepic = "assets/img/usericon.svg",
        $rootScope.isGuestUser = !0,
        $location.path("/home").search({}),
        topmenuService = {},
        setTimeout((()=>{
            $window.location.reload()
        }
        ), 300)
    };
    $scope.logOut = function() {
        topmenuService.getAccessToken().then((function(response) {
            ChecknetWork(),
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token;
            try {
                var userdata = localStorage.getItem("userdata")
                  , sessionId = JSON.parse(userdata);
                loginService.signoutuser(sessionId).then((function(response) {
                    deleteTags(),
                    clearStorage()
                }
                ))
            } catch (err) {
                userdata = localStorage.getItem("userdata"),
                sessionId = JSON.parse(userdata);
                loginService.signoutuser(sessionId).then((function(response) {
                    clearStorage()
                }
                ))
            }
        }
        ))
    }
    ,
    $scope.logOutAll = function() {
        topmenuService.getAccessToken().then((function(response) {
            ChecknetWork(),
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token;
            try {
                var userdata = localStorage.getItem("userdata")
                  , sessionId = JSON.parse(userdata);
                loginService.signoutalluser(sessionId).then((function(response) {
                    deleteTags(),
                    clearStorage()
                }
                ))
            } catch (err) {
                userdata = localStorage.getItem("userdata"),
                sessionId = JSON.parse(userdata);
                loginService.signoutalluser(sessionId).then((function(response) {
                    clearStorage()
                }
                ))
            }
        }
        ))
    }
    ;
    setTimeout((function() {
        onesignalService.sendregionTopic().then((function(response) {}
        ))
    }
    ), 1e4);
    topmenuService.getAccessToken().then((function(response) {
        ChecknetWork(),
        topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
        topmenuService.accessToken = response.data.access_token,
        topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
            topmenuService.regionData = response.region,
            topmenuService.loadConfig(topmenuService.accessTokenParam, topmenuService.regionData.country_code2).then((function(response) {
                topmenuService.configData = response.data,
                $rootScope.watchHistoryInSeconds = parseInt(topmenuService.configData.params_hash2.config_params.watchhistory_interval_sec)
            }
            )),
            loadUser(),
            profileService.isSessionIdValid($rootScope.isGuestUser, $scope.session).then((function(response) {
                response ? topmenuService.loadTopMenu(topmenuService.accessTokenParam, topmenuService.regionData.country_code2).then((function(response) {
                    $scope.topmenulist = response.data.catalog_list_items;
                    var newListFirstHalf = response.data.catalog_list_items
                      , newListSecondtHalf = response.data.catalog_list_items;
                    newListFirstHalf.length > 8 ? ($scope.topmenulistFirsthalf = newListFirstHalf.slice(0, 7),
                    $scope.topmenulistFirsthalf = $scope.topmenulistFirsthalf.concat({
                        display_title: "MORE"
                    }),
                    $scope.topmenulistSecondhalf = newListSecondtHalf.slice(7, newListSecondtHalf.length)) : $scope.topmenulistFirsthalf = $scope.topmenulist
                }
                )).catch((function(error) {}
                )) : $scope.logOut()
            }
            )),
            function() {
                ChecknetWork();
                var oauth_verifier = $location.search().oauth_verifier;
                if (oauth_verifier) {
                    var oauth_token = $location.search().oauth_token;
                    topmenuService.oauth_token = oauth_token,
                    topmenuService.oauth_verifier = oauth_verifier,
                    topmenuService.isTwitterFlow = !0,
                    openLoginDialog()
                }
            }()
        }
        ))
    }
    )),
    $scope.onItemselected = function(tab, menuPanel) {
        if (0 == menuPanel) {
            if ("MORE" == tab.display_title)
                return;
            "none" == tab ? $rootScope.selectedChoice = "none" : (sessionStorage.setItem("selectedMenu", tab.display_title),
            $rootScope.selectedChoice = sessionStorage.getItem("selectedMenu"),
            $rootScope.sourceTab = tab.display_title.charAt(0).toUpperCase() + tab.display_title.slice(1))
        } else
            "none" == tab ? $rootScope.selectedChoice = "none" : (sessionStorage.setItem("selectedMenu", tab.display_title),
            $rootScope.selectedChoice = sessionStorage.getItem("selectedMenu"),
            $rootScope.sourceTab = tab.display_title.charAt(0).toUpperCase() + tab.display_title.slice(1)),
            $scope.menuItemClicked(tab)
    }
    ,
    $scope.onLogoClicked = function() {
        $rootScope.selectedChoice = $scope.topmenulist[0].display_title,
        $rootScope.sourceTab = $scope.topmenulist[0].display_title.charAt(0).toUpperCase() + $scope.topmenulist[0].display_title.slice(1),
        $location.path("/home")
    }
    ,
    $scope.openProfile = function(page) {
        $rootScope.selectedChoice = "none",
        ChecknetWork(),
        "/profile" == page ? $location.path("/profile").search({
            tab: "info"
        }) : $location.path(page)
    }
    ,
    $scope.SearchVideos = function() {
        pausePlayer(),
        ngDialog.open({
            template: "app/shared/dialog/search/searchDialog.html",
            controller: "searchController",
            controllerAs: "searchCtrl",
            className: "search-dialog",
            scope: $scope,
            disableAnimation: !1,
            closeByNavigation: !0,
            closeByDocument: !1
        })
    }
    ,
    $scope.GoHome = function() {
        $location.path("/home")
    }
    ,
    $scope.$on("reloaduserData", (function() {
        var userdata = localStorage.getItem("userdata");
        userdata ? ($scope.user = JSON.parse(userdata),
        null != $scope.user.profile_pic && ($rootScope.profilepic = $scope.user.profile_pic)) : ($rootScope.profilepic = "assets/img/usericon.svg",
        $rootScope.isGuestUser = !0)
    }
    )),
    $scope.subListClicked = function(sublistItem) {
        $window.scrollTo(0, 0),
        ChecknetWork(),
        "livetv" == sublistItem.catalog_theme ? ($(".dropdown-content.live").css("display", "none"),
        $location.path("/live/" + sublistItem.friendly_id),
        $rootScope.metatitle = sublistItem.meta_title) : ($(".dropdown-content.channels").css("display", "none"),
        $location.path("/channels/" + sublistItem.friendly_id),
        $rootScope.metatitle = sublistItem.title)
    }
    ,
    $scope.listOfOptions = [{
        name: "English",
        value: "eng"
    }, {
        name: "Telugu",
        value: "te"
    }],
    $scope.setlanguage = function() {
        $rootScope.selectedlng = $scope.selectedOption.value,
        $window.localStorage.setItem("selected_language", $rootScope.selectedlng),
        $window.location.reload()
    }
    ,
    $scope.openDropDown = function(tabname) {
        "live" !== tabname && "channels" !== tabname || $(".dropdown-content." + tabname).css("display", "block")
    }
    ,
    $scope.getMobileOperatingSystem = function() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        /windows phone/i.test(userAgent) && (window.location.href = "https://itunes.apple.com/app/id1245077673"),
        /android/i.test(userAgent) && (window.location.href = "https://play.google.com/store/apps/details?id=com.etvwin.mobile"),
        /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream && (window.location.href = "https://itunes.apple.com/app/id1245077673")
    }
    ,
    $scope.heightst = !0,
    $rootScope.heightst = $scope.heightst,
    $scope.closePopup = function() {
        document.getElementById("install_pop_up").style.display = "none",
        $scope.heightst = !1,
        $rootScope.heightst = $scope.heightst
    }
    ,
    $scope.closeDropDown = function(tabname) {
        "live" !== tabname && "channels" !== tabname || $(".dropdown-content." + tabname).css("display", "none")
    }
    ,
    $scope.usermenuEnter = function() {
        $(".dropdown-content.user").css("display", "block")
    }
    ,
    $scope.usermenuLeave = function() {
        $(".dropdown-content.user").css("display", "none")
    }
    ,
    $scope.menuItemClicked = function(menuItem) {
        ChecknetWork(),
        "MORE" == menuItem.display_title || ("channels" != menuItem.friendly_id ? ($rootScope.catalogTheme = menuItem.theme,
        $rootScope.metatitle = menuItem.meta_title,
        $location.path("/" + menuItem.friendly_id),
        $scope.CloseNavBar()) : menuItem.isexpanded = !menuItem.isexpanded)
    }
    ,
    $scope.menuItemPath = function(menuItem) {
        if ("MORE" != menuItem.display_title)
            return "live" != menuItem.friendly_id && "channels" != menuItem.friendly_id ? ($rootScope.catalogTheme = menuItem.theme,
            "/" + menuItem.friendly_id) : "live" == menuItem.friendly_id ? ($rootScope.catalogTheme = menuItem.theme,
            "/live") : void 0
    }
    ,
    $scope.dropdownTabClicked = function(tabItem) {
        $window.scrollTo(0, 0),
        ChecknetWork(),
        $rootScope.catalogTheme = tabItem.theme,
        $location.path("/" + tabItem.friendly_id)
    }
    ,
    $scope.footerItemClicked = function(menuItem) {
        $window.scrollTo(0, 0),
        $location.path("/" + menuItem.friendly_id.replace("-home", ""))
    }
    ,
    $scope.seeAllpage = function(parentItem, subItem) {
        $window.scrollTo(0, 0),
        $location.path("/" + parentItem.friendly_id.replace("-home", "") + "/" + subItem.friendly_id + "/all")
    }
    ,
    $scope.$on("showPreferenceOverlay", (function() {
        $scope.openPreferenceDialog()
    }
    )),
    $scope.$on("showLoginDialog", (function() {
        $scope.signInPage = !0,
        openLoginDialog()
    }
    )),
    $scope.openPreferenceDialog = function() {
        ngDialog.open({
            template: "app/shared/dialog/preference/preferenceOverlay.html",
            controller: "preferenceController",
            controllerAs: "preCtrl",
            scope: $scope,
            className: "search-dialog",
            disableAnimation: !0,
            closeByNavigation: !0,
            closeByDocument: !1
        })
    }
    ,
    $scope.openFeedbackDialog = function() {
        $rootScope.selectedChoice = "none",
        ngDialog.open({
            template: "app/shared/dialog/feedback/feedbackDialog.html",
            controller: "feedbackController",
            controllerAs: "feedbackCtrl",
            scope: $scope,
            disableAnimation: !0,
            closeByNavigation: !0,
            closeByDocument: !1
        })
    }
    ,
    $scope.openSubscription = function() {
        $rootScope.selectedChoice = "none",
        $rootScope.isGuestUser ? (localStorage.setItem("subscriptionFooterTab", "true"),
        $location.path("/subscription-plans")) : $location.path("/profile").search({
            tab: "subscription"
        })
    }
    ,
    $scope.openSideDropdown = function(selecteditem) {
        for (var i = 0; i < $scope.topmenulist.length; i++)
            $scope.topmenulist[i].isexpanded = !1;
        selecteditem.isexpanded = !0
    }
    ,
    $rootScope.online = navigator.onLine,
    $window.addEventListener("offline", (function() {
        $rootScope.$apply((function() {
            ChecknetWork()
        }
        ))
    }
    ), !1),
    $window.addEventListener("online", (function() {
        $rootScope.$apply((function() {
            $window.location.reload(!0)
        }
        ))
    }
    ), !1);
    try {
        var currentURL = $window.location.href
          , decodedUrl = decodeURIComponent(currentURL)
          , match = decodedUrl.match(/video_title=([^&]+)/);
        if (match) {
            var videoTitleParam = match[1]
              , firebaseAnalytics = $window.firebase.analytics();
            $rootScope.sourceTab = "push notification",
            $rootScope.viewingSource = "NA",
            $rootScope.tray_id = "NA",
            firebaseAnalytics.logEvent("Notification_open", {
                video_name: videoTitleParam || "NA"
            }),
            JSON.parse(localStorage.getItem("userdata")) ? ($window.sdk.userAttr.u_id = JSON.parse(localStorage.getItem("userdata")).user_id,
            $window.sdk.userAttr.country = topmenuService.regionData.country_name) : $window.sdk.userAttr.country = topmenuService.regionData.country_name,
            $window.sdk.trackEvent("notification_open", {
                video_name: videoTitleParam || "NA",
                event_id: 12,
                event_time: (new Date).toISOString().slice(0, 19)
            })
        }
    } catch (error) {
        console.log(error)
    }
    $scope.$on("$routeChangeStart", (function($event, next, current) {
        try {
            playerObject1.referenceObj.mediaElement.videoElement.hlsObj.destroy()
        } catch (e) {}
        try {
            playerObject1.referenceObj._buildadvertisement.initializeAd.adsManager.destroy()
        } catch (e) {}
    }
    ))
};
topmenuController.$inject = ["$scope", "$rootScope", "$location", "ngDialog", "topmenuService", "subscriptionService", "$window", "onesignalService", "profileService", "appConstants", "loginService"],
angular.module("EktaApp").controller("topmenuController", topmenuController);
var topmenuService = function($q, httpService, appConstants, $rootScope) {
    var createPath = function(listItem) {
        return listItem.subcategory_object ? "/" + listItem.catalog_object.friendly_id + "/" + listItem.show_object.friendly_id + "/" + listItem.subcategory_object.parentree[0].friendly_id + "/" + listItem.friendly_id : listItem.show_object ? "/" + listItem.catalog_object.friendly_id + "/" + listItem.show_object.friendly_id + "/" + listItem.friendly_id : "/" + listItem.catalog_object.friendly_id + "/" + listItem.friendly_id
    };
    return {
        getAccessToken: function() {
            var deferred = $q.defer();
            return httpService.getData("/access_token.gzip?auth_token=" + appConstants.authToken).then((function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        loadTopMenu: function(access_token, region) {
            var deferred = $q.defer();
            return httpService.getData("/catalog_lists/top-menu-web.gzip?nested_list_items=false&auth_token=" + appConstants.authToken + "&region=" + region + access_token).then((function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        loadFooterData: function(access_token, region) {
            var deferred = $q.defer();
            return httpService.getData("/catalog_lists/footer.gzip?auth_token=" + appConstants.authToken + "&region=" + region + "&only_items=catalog_list" + access_token).then((function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        loadConfig: function(access_token, region) {
            var deferred = $q.defer();
            return httpService.getData("/catalogs/message/items/app-config-params.gzip?region=" + region + "&auth_token=" + appConstants.authToken + access_token + "&current_version=1.1").then((function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        topmenuData: [],
        footerData: [],
        userData: [],
        isLoggedIn: !1,
        accessTokenParam: "",
        accessToken: "",
        loadRegionData: function(access_token) {
            var deferred = $q.defer();
            return httpService.getData("/regions/autodetect/ip.gzip?auth_token=" + appConstants.authToken + access_token).then((function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        regionData: {},
        configData: {},
        overrideforEach: function(array, callback) {
            for (var i = 0, len = array.length; i < len; i++)
                callback(array[i], i)
        },
        oauth_token: "",
        oauth_verifier: "",
        isTwitterFlow: !1,
        loadChannelsList: function(access_token, region) {
            var deferred = $q.defer();
            return httpService.getData("/catalog_lists/channels.gzip?auth_token=" + appConstants.authToken + "&region=" + region + access_token).then((function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        loadLiveList: function(access_token, region) {
            var deferred = $q.defer();
            return httpService.getData("/catalog_lists/live.gzip?auth_token=" + appConstants.authToken + "&region=" + region + access_token).then((function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        isInvalidContent: function(response) {
            return !(!response.error || "1007" != response.error.code && "1002" != response.error.code && "1053" != response.error.code)
        },
        isInvalidToken: function(response) {
            return !(!response.error || (errorCode = response.error.code,
            "1049" != errorCode && "1050" != errorCode && "1051" != errorCode && "1052" != errorCode));
            var errorCode
        },
        createPath: createPath,
        createCatalogUrl: function(listItem) {
            var finalPath = "";
            return finalPath = "etv-life" == listItem.catalog_object.layout_type || "recipe" == listItem.catalog_object.layout_type ? listItem.show_object ? "/" + listItem.catalog_object.friendly_id + "/" + listItem.show_object.friendly_id + "/" + listItem.friendly_id : "/" + listItem.catalog_object.friendly_id + "/" + listItem.friendly_id : listItem.media_type ? "shows" == listItem.catalog_object.layout_type || "trailer" == listItem.catalog_object.layout_type || "movies" == listItem.catalog_object.layout_type || "videos" == listItem.catalog_object.layout_type ? listItem.item_object ? "/" + listItem.catalog_object.friendly_id + "/" + listItem.item_object.friendly_id + "/" + listItem.friendly_id : listItem.show_object ? "/" + listItem.catalog_object.friendly_id + "/" + listItem.show_object.friendly_id + "/" + listItem.friendly_id : "/" + listItem.catalog_object.friendly_id + "/" + listItem.friendly_id : "events" == listItem.catalog_object.layout_type ? "/" + listItem.catalog_object.friendly_id + "/" + listItem.show_object.friendly_id + "/" + listItem.friendly_id : createPath(listItem) : "events" == listItem.catalog_object.layout_type ? "/" + listItem.catalog_object.friendly_id + "/" + listItem.friendly_id + "/landing" : "/" + listItem.catalog_object.friendly_id + "/" + listItem.friendly_id + "/season/season-1",
            listItem.media_type && listItem.catalog_object.layout_type && (finalPath = finalPath + "?media=" + listItem.media_type + "&layout=" + listItem.catalog_object.layout_type),
            finalPath
        },
        createLandingUrl: function(listItem, vm) {
            var finalPath = "";
            return "events" == listItem.catalog_object.layout_type ? finalPath = listItem.media_type ? "/" + listItem.catalog_object.friendly_id + "/" + listItem.show_object.friendly_id + "/" + listItem.friendly_id : "/" + listItem.catalog_object.friendly_id + "/" + listItem.friendly_id + "/landing" : "yes" == listItem.subcategory_flag ? finalPath = "/" + listItem.catalog_object.friendly_id + "/" + listItem.friendly_id + "/season/landing" : "season-1" == vm.season && vm.itemDetails.subcategories[0] ? (vm.season = vm.itemDetails.subcategories[0].friendly_id,
            finalPath = "/" + listItem.catalog_object.friendly_id + "/" + listItem.show_object.friendly_id + "/" + vm.season + "/" + listItem.friendly_id) : finalPath = "/" + listItem.catalog_object.friendly_id + "/" + listItem.friendly_id + "/season/season-1",
            finalPath
        },
        channelsDetails: []
    }
};
topmenuService.$inject = ["$q", "httpService", "appConstants", "ngDialog", "$rootScope"],
angular.module("EktaApp").service("topmenuService", topmenuService);
var ektaToastService = function($mdToast) {
    return {
        show: function(content) {
            return $mdToast.show($mdToast.simple().content(content).position("top right").hideDelay(2e3))
        }
    }
};
ektaToastService.$inject = ["$mdToast"],
angular.module("EktaApp").service("ektaToastService", ektaToastService);
var httpService = function($q, $http, $resource, appConstants, $window) {
    return {
        getData: function(urlpath) {
            var deferred = $q.defer();
            (new Date).getTime();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + urlpath,
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            ), (function(error) {
                (new Date).getTime();
                deferred.resolve(error)
            }
            )),
            deferred.promise
        },
        putData: function(urlpath) {
            var deferred = $q.defer();
            return $http({
                method: "PUT",
                url: appConstants.baseUrl + urlpath
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            )),
            deferred.promise
        },
        deleteData: function(urlpath) {
            var deferred = $q.defer();
            return $window.navigator.onLine ? $http({
                method: "DELETE",
                url: appConstants.baseUrl + urlpath
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            )) : $q.reject({}),
            deferred.promise
        }
    }
};
httpService.$inject = ["$q", "$http", "$resource", "appConstants", "$window"],
angular.module("EktaApp").service("httpService", httpService);
var homeController = function($window, homeService, $location, $rootScope, appConstants, topmenuService, ngDialog) {
    var vm = this;
    $rootScope.isPageLoading = !0,
    $rootScope.selectedChoice = "home",
    $rootScope.metatitle = "ETV Win",
    $rootScope.metaimage = appConstants.appLogo,
    $rootScope.metadescription = "Watch your favorite ETV Win Originals , ETV Telugu Movies , ETV Shows , Jabardasth, Dhee, Alitho saradaga, Cash, SriDevi drama company & get a super hit collection of all Telugu serials on ETV Win",
    $window.scrollTo(0, 0),
    vm.mainBannerStyle = appConstants.mainBannerStyle,
    vm.oneItemCarousel = appConstants.oneItemCarousel,
    vm.twoItemCarousel = appConstants.exclusiveItemCarousel,
    vm.threeItemCarousel = appConstants.threeItemCarousel,
    vm.fourItemCarousel = appConstants.fourItemCarousel,
    vm.sixItemCarousel = appConstants.sixItemCarousel,
    vm.sixAndHalfItemCarousel = appConstants.sixAndHalfItemCarousel,
    vm.eightItemCarousel = appConstants.eightItemChannelCarousel,
    vm.eightAndHalfItemCarousel = appConstants.eightAndHalfItemCarousel,
    vm.exclItemCarousel = appConstants.exclItemCarousel,
    vm.isUserLogged = !1,
    vm.showDivider = !0;
    var itemCount = 0;
    vm.selectedlng = $window.localStorage.getItem("selected_language"),
    null == vm.selectedlng && (vm.selectedlng = "eng");
    $window.navigator.onLine || ($rootScope.isPageLoading = !1,
    ngDialog.open({
        template: '<div class="confirm-dialog"><p>Looks like something has gone wrong. Please check your network and retry!</p></div>',
        plain: !0,
        closeByNavigation: !1,
        closeByDocument: !0,
        showClose: !1,
        closeByEscape: !0
    }));
    var loadController = function() {
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            loadController()
        }
        )) : homeService.loadHomePageData(0, vm.selectedlng).then((function(response) {
            if (response.data.error && topmenuService.isInvalidToken(response.data))
                $rootScope.isPageLoading = !0,
                topmenuService.accessToken = "",
                loadController();
            else {
                $rootScope.isPageLoading = !0;
                var responseList = response.data.catalog_list_items.slice();
                vm.homePageList = response.data.catalog_list_items.slice(),
                itemCount = response.data.total_items_count;
                var continueWatchingItem = responseList.findIndex((item=>"watch-history" == item.friendly_id))
                  , userdata = JSON.parse(localStorage.getItem("userdata"));
                continueWatchingItem >= 0 && userdata && "null" !== userdata ? homeService.continueWatching(userdata.session, vm.selectedlng).then((function(res) {
                    vm.isUserLogged = !0;
                    var continueWatchingList = res.data.items.slice();
                    continueWatchingList.length > 0 ? responseList[continueWatchingItem].catalog_list_items = continueWatchingList.slice() : responseList.splice(continueWatchingItem, 1),
                    vm.carouselItems = responseList[0].catalog_list_items.slice(),
                    responseList.splice(0, 1),
                    vm.mainList = responseList.slice(),
                    $window.scrollTo(0, 0),
                    $rootScope.isPageLoading = !1
                }
                )).catch((e=>{
                    console.log(e)
                }
                )) : (vm.carouselItems = responseList[0].catalog_list_items.slice(),
                responseList.splice(0, 1),
                (continueWatchingItem = responseList.findIndex((item=>"watch-history" == item.friendly_id))) >= 0 && responseList.splice(continueWatchingItem, 1),
                vm.mainList = responseList.slice(),
                $window.scrollTo(0, 0),
                $rootScope.isPageLoading = !1)
            }
        }
        ), (function(response) {}
        )).catch((e=>{
            console.log(e)
        }
        ))
    };
    loadController();
    vm.seeAllItems = function(carouselItems, isSessionBased) {
        $rootScope.sourceTab = "Home",
        $rootScope.fromHomePage = !0,
        $rootScope.isSessionBased = isSessionBased,
        $location.path("/home/" + carouselItems.friendly_id)
    }
    ,
    vm.itemClicked = function(listItem) {
        return listItem.seo_url
    }
    ,
    vm.selectItem = function(listItem, source, trayId) {
        $rootScope.sourceTab = "Home",
        $rootScope.viewingSource = "banner" == source ? vm.homePageList[0].display_title : source,
        $rootScope.tray_id = "banner" == source ? vm.homePageList[0].list_id : trayId,
        $rootScope.videoPlayTime = listItem.play_back_time_msec,
        $rootScope.videoPlayTimeYT = listItem.play_back_time_msec
    }
    ,
    vm.itemSource = function(source, trayId) {
        $rootScope.sourceTab = "Home",
        $rootScope.viewingSource = "banner" == source ? vm.homePageList[0].display_title : source,
        $rootScope.tray_id = "banner" == source ? vm.homePageList[0].list_id : trayId
    }
    ;
    var index = 1;
    vm.loadMore = function() {
        var page;
        if (!(index >= Math.ceil(itemCount / 5)) && vm.mainList)
            if (vm.busy = !0,
            vm.mainList.length < itemCount) {
                if (0 == vm.mainList.length)
                    return;
                page = index,
                homeService.loadHomePageData(page, vm.selectedlng).then((function(response) {
                    for (var i = 0; i < response.data.catalog_list_items.length; i++)
                        vm.mainList.push(response.data.catalog_list_items[i]);
                    index++,
                    vm.busy = !1
                }
                ))
            } else
                vm.busy = !1
    }
};
homeController.$inject = ["$window", "homeService", "$location", "$rootScope", "appConstants", "topmenuService", "ngDialog"],
angular.module("EktaApp").controller("homeController", homeController),
angular.module("EktaApp").filter("trustUrl", (function($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url)
    }
}
));
var homeService = function($q, httpService, appConstants, topmenuService) {
    return {
        loadHomePageData: function(page, selectedlng) {
            var deferred = $q.defer()
              , pagesize = screen.height <= 850 ? 4 : 5;
            return void 0 === topmenuService.regionData.country_code2 && (topmenuService.regionData.country_code2 = "IN"),
            httpService.getData("/catalog_lists/home.gzip?item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&page=" + page + "&page_size=" + pagesize + "&npage_size=10").then((function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        continueWatching: function(sessionId, selectedlng) {
            var deferred = $q.defer();
            return void 0 === topmenuService.regionData.country_code2 && (topmenuService.regionData.country_code2 = "IN"),
            httpService.getData("/users/" + sessionId + "/playlists/watchhistory/listitems.gzip?&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2).then((function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        }
    }
};
homeService.$inject = ["$q", "httpService", "appConstants", "topmenuService"],
angular.module("EktaApp").service("homeService", homeService);
var channelPageController = function($window, channelPageService, $routeParams, appConstants, ngDialog, $location, $rootScope, topmenuService) {
    var vm = this;
    $window.scrollTo(0, 0),
    vm.channelname = $routeParams.channel,
    vm.tabname = $routeParams.tab,
    vm.mainBannerStyle = appConstants.mainBannerStyle,
    vm.fourItemCarousel = appConstants.fourItemCarousel,
    vm.threeItemCarousel = appConstants.threeItemCarousel,
    vm.isItemPresent = !1,
    vm.bannerItems = [];
    var logoLoaded = !1
      , tablists = [];
    $rootScope.isPageLoading = !0,
    vm.selectedlng = $window.localStorage.getItem("selected_language"),
    null == vm.selectedlng && (vm.selectedlng = "eng");
    $window.navigator.onLine || ($rootScope.isPageLoading = !1,
    ngDialog.open({
        template: '<div class="confirm-dialog"><p>Looks like something has gone wrong. Please check your network and retry!</p></div>',
        plain: !0,
        closeByNavigation: !1,
        closeByDocument: !0,
        showClose: !1,
        closeByEscape: !0
    }));
    $rootScope.channelsDetails && (logoLoaded = !0,
    topmenuService.overrideforEach($rootScope.channelsDetails, (function(channel, key) {
        channel.friendly_id == vm.channelname && (vm.channel_name = channel.channel_name,
        vm.logo = channel.thumbnails.medium_4_3)
    }
    ))),
    vm.selectTab = function(tabname) {
        $rootScope.currentChannelTab = tabname,
        $rootScope.isPageLoading = !0,
        vm.currentTab = tabname,
        tablists.hasOwnProperty(tabname) ? (vm.tabDetails = tablists[tabname],
        $rootScope.isPageLoading = !1) : channelPageService.loadTabs(vm.channelname, vm.currentTab, vm.selectedlng).then((function(response) {
            tablists[tabname] = response.data,
            vm.tabDetails = tablists[tabname],
            $rootScope.isPageLoading = !1,
            $window.scrollTo(0, 0)
        }
        ))
    }
    ;
    var loadController = function() {
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                loadController()
            }
            ))
        }
        )) : (channelPageService.loadData(vm.channelname, vm.selectedlng).then((function(response) {
            !function(response) {
                0 === response.data.items.length && $location.path("/Something-went-wrong"),
                topmenuService.isInvalidContent(response.data) && $location.path("/404"),
                topmenuService.isInvalidToken(response.data) && (topmenuService.accessToken = "",
                $window.location.reload())
            }(response),
            vm.mainList = response.data,
            1 == vm.mainList.items.length ? channelPageService.loadTabs(vm.channelname, vm.mainList.items[0].friendly_id).then((function(response) {
                $rootScope.isPageLoading = !1,
                vm.tabDetails = response.data,
                vm.bannerItems.push({
                    name: vm.mainList.items[0].friendly_id,
                    item: vm.tabDetails.catalog_list_items[0]
                }),
                vm.noTabs = !0,
                $window.scrollTo(0, 0)
            }
            )) : (topmenuService.overrideforEach(vm.mainList.items, (function(tab, key) {
                channelPageService.loadTabs(vm.channelname, tab.friendly_id).then((function(response) {
                    vm.bannerItems.push({
                        name: tab.friendly_id,
                        item: response.data.catalog_list_items[0]
                    }),
                    $window.scrollTo(0, 0)
                }
                ))
            }
            )),
            vm.mainList.items.length > 0 && vm.selectTab(vm.mainList.items[0].friendly_id))
        }
        )),
        logoLoaded || topmenuService.loadChannelsList(topmenuService.accessTokenParam, topmenuService.regionData.country_code2).then((function(response) {
            topmenuService.overrideforEach(response.data.catalog_list_items, (function(channel, key) {
                channel.friendly_id == vm.channelname && (vm.channel_name = channel.channel_name,
                vm.logo = channel.thumbnails.medium_4_3)
            }
            ))
        }
        )))
    };
    loadController(),
    vm.seeAllItems = function(carouselItems) {
        $rootScope.fromHomePage = !1,
        vm.channelname,
        $location.path(carouselItems.seo_url)
    }
    ,
    vm.isTabSelected = function(tabname) {
        if (vm.currentTab === tabname)
            return !0
    }
    ,
    vm.itemClicked1 = function(listItem) {
        return listItem.seo_url
    }
    ,
    vm.itemClicked = function(listItem) {
        return listItem.seo_url
    }
};
channelPageController.$inject = ["$window", "channelPageService", "$routeParams", "appConstants", "ngDialog", "$location", "$rootScope", "topmenuService"],
angular.module("EktaApp").controller("channelPageController", channelPageController);
var channelPageService = function($q, httpService, appConstants, topmenuService) {
    return {
        loadData: function(friendlyId, selectedlng) {
            var deferred = $q.defer()
              , urlpath = "/catalogs.gzip?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&channel_id=" + friendlyId + "&item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2;
            return httpService.getData(urlpath).then((function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        loadTabs: function(channel, friendlyId, selectedlng) {
            var deferred = $q.defer()
              , urlpath = "/catalog_lists/" + friendlyId + "-" + channel + ".gzip?item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam;
            return httpService.getData(urlpath).then((function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        }
    }
};
channelPageService.$inject = ["$q", "httpService", "appConstants", "topmenuService"],
angular.module("EktaApp").service("channelPageService", channelPageService);
var isTypeValid = function(file) {
    return "image/jpg" == file.type || "image/png" == file.type || "image/jpeg" == file.type
}
  , isFileValid = function(input) {
    return !!(input.files && input.files[0] && isTypeValid(input.files[0]))
}
  , setDOB = function(response) {
    if (response.data.birthdate)
        return new Date(response.data.birthdate)
}
  , setFormattedDob = function(response) {
    if (response.data.birthdate)
        return moment(response.data.dob).format("DD/MM/YYYY")
}
  , userprofileController = function($scope, $rootScope, $location, profileService, appConstants, ektaToastService, $window, topmenuService, ngDialog, loginService) {
    $window.scrollTo(0, 0);
    var vm = this;
    vm.isLogged = !1;
    var isImageChanged = !1
      , userinfo = localStorage.getItem("userdata")
      , originalPic = "";
    vm.user = JSON.parse(userinfo),
    vm.isEditProfile = !1,
    vm.currentTab = "",
    vm.userdata = [],
    vm.showChangePassword = !1,
    $rootScope.metatitle = "My Profile",
    $rootScope.metadescription = "",
    $scope.subsub = !0,
    $scope.subsubplans = !0,
    vm.removeCroppingDiv = !1,
    vm.transactionHead = ["Date", "Description", "Plan Duration", "Status", "Amount"],
    vm.transactionHeadMobile = ["Date", "Description", "Status"],
    $rootScope.metaimage = appConstants.appLogo,
    String.prototype.capitalize = function() {
        return this.replace(/(?:^|\s)\S/g, (function(a) {
            return a.toUpperCase()
        }
        ))
    }
    ;
    var setUserData = function(response) {
        vm.showChangePassword = profileService.isExternalLogin(response.data.login_type),
        "msisdn" == response.data.login_type && "IN" == topmenuService.regionData.country_code2 && (vm.showChangePassword = !1),
        response.data.dob = setDOB(response),
        response.data.dobFormatted = setFormattedDob(response),
        vm.userdata = angular.copy(response.data),
        originalPic = angular.copy(response.data.profile_pic),
        vm.userdata.profile_picture = profileService.setProfileImage(vm.userdata.profile_pic),
        vm.userdata.profile_pic = vm.userdata.profile_picture,
        vm.isRemoveDisabled = !originalPic,
        vm.userdata.gender && (vm.userdata.gender = vm.userdata.gender.capitalize()),
        vm.userdataMain = angular.copy(vm.userdata),
        vm.mobile_number_substring = vm.userdataMain.mobile_number.substring(0, 2),
        "00" === vm.mobile_number_substring && (vm.userdataMain.mobile_number = vm.userdataMain.mobile_number.slice(2))
    }
      , checkValiditySub = function(response) {
        response.error ? (topmenuService.accessToken = "",
        $window.location.reload()) : function(response) {
            vm.userdataMain.subscrip = angular.copy(response.data),
            vm.userdataMain.expiredPlans = angular.copy(response.expired),
            vm.userdataMain.allPlans = vm.userdataMain.subscrip.concat(vm.userdataMain.expiredPlans),
            vm.userdataMain.subscrip.length > 0 && ($scope.subsub = !1,
            vm.userdataMain.subscrip[vm.userdataMain.subscrip.length - 1].valid_till = new Date(vm.userdataMain.subscrip[vm.userdataMain.subscrip.length - 1].valid_till)),
            $scope.subsubplans = !(vm.userdataMain.allPlans.length > 0)
        }(response)
    }
      , loadController = function() {
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                loadController()
            }
            ))
        }
        )) : profileService.loadProfileData(vm.user.session).then((function(response) {
            $rootScope.isPageLoading = !1,
            response.error ? logOut() : function(response) {
                response.error ? (topmenuService.accessToken = "",
                $window.location.reload()) : setUserData(response)
            }(response),
            profileService.loadProfileSubscriptionData(vm.user.session).then((function(response) {
                $rootScope.isPageLoading = !1,
                checkValiditySub(response)
            }
            ))
        }
        ))
    };
    topmenuService.isLoggedIn || vm.user ? (vm.isLogged = !0,
    loadController()) : ($rootScope.$broadcast("showLoginDialog"),
    $location.path("/")),
    vm.cancelEdit = function() {
        vm.userdata = angular.copy(vm.userdataMain),
        $("#rounded-image").attr("src", vm.userdataMain.profile_pic),
        $("#rounded-image-mob").attr("src", vm.userdataMain.profile_pic),
        vm.isEditProfile = !1,
        vm.isRemoveDisabled = !originalPic,
        vm.removeCroppingDiv = !0
    }
    ,
    vm.selectTabSubscription = function(tabname) {
        $location.path("/profile").search({
            tab: "subscription"
        }),
        vm.changePsswdForm = {},
        vm.isEditProfile && vm.cancelEdit()
    }
    ,
    vm.selectTab = function(tabname) {
        "info" == tabname && $location.path("/profile").search({
            tab: "info"
        }),
        "password" == tabname && $location.path("/profile").search({
            tab: "password"
        }),
        "subscription" == tabname && $location.path("/profile").search({
            tab: "subscription"
        }),
        "transactions" == tabname && $location.path("/profile").search({
            tab: "transactions"
        }),
        vm.changePsswdForm = {},
        vm.isEditProfile && vm.cancelEdit(),
        vm.currentTab = tabname
    }
    ;
    var today = new Date;
    vm.maxDate = today,
    $scope.myDate = new Date(1930,8,21),
    $scope.minDate = new Date($scope.myDate.getFullYear(),$scope.myDate.getMonth(),$scope.myDate.getDate());
    var defaultTab, tab = $location.search().tab;
    defaultTab = profileService.getDefaultTab(tab),
    vm.selectTab(defaultTab),
    vm.editProfile = function() {
        vm.buttonDefault = !0,
        vm.isEditProfile = !0,
        $(".md-datepicker-input.md-input").attr("readonly", !0),
        $(".md-datepicker-input.md-input").pickadate({
            selectMonths: !0,
            selectYears: 50,
            min: [1950, 0, 1]
        })
    }
    ,
    vm.isTabSelected = function(tabname) {
        return profileService.checkSelectedTab(vm.currentTab, tabname)
    }
    ,
    vm.nameChanged = function() {
        vm.buttonDefault = !1
    }
    ,
    $scope.image = {
        originalImage: "",
        croppedImage: ""
    },
    vm.croppedimg = !1,
    vm.imageChanged = function(input) {
        if (vm.croppedimg = !0,
        vm.removeCroppingDiv = !1,
        isFileValid(input)) {
            $("#sub-btn").attr("disabled", !1);
            var reader = new FileReader;
            reader.onload = function(e) {
                $scope.$apply((function($scope) {
                    $("#rounded-image").attr("src", e.target.result),
                    $("#rounded-image-mob").attr("src", e.target.result),
                    $scope.image.originalImage = e.target.result
                }
                ))
            }
            ,
            reader.readAsDataURL(input.files[0]),
            input.files[0],
            vm.newname = input.files[0].name,
            isImageChanged = !0,
            vm.buttonDefault = !1,
            vm.isRemoveDisabled = !1,
            $scope.$apply()
        } else
            ektaToastService.show("Please select an Image")
    }
    ;
    var updateUserDetails = function() {
        $rootScope.isPageLoading = !0,
        vm.userdata.birthdate = moment(vm.userdata.dob).format("YYYY-MM-DD"),
        vm.userdata.address = vm.userdata.address,
        profileService.updateUserData(vm.userdata, vm.user.session).then((function() {
            ektaToastService.show("Profile updated."),
            vm.isEditProfile = !1,
            profileService.loadProfileData(vm.user.session).then((function(response) {
                vm.user.profile_pic = vm.userdata.upload_image.domain_name + "/" + vm.userdata.upload_image.key + vm.newname + "?v=" + (new Date).getTime(),
                vm.userdata.profile_pic = vm.user.profile_pic + "?v=" + (new Date).getTime(),
                $("#rounded-image-mob").attr("src", vm.user.profile_pic + "?v=" + (new Date).getTime()),
                response.data.dob = new Date(response.data.birthdate),
                response.data.dobFormatted = moment(response.data.dob).format("DD-MM-YYYY"),
                vm.userdata = response.data,
                vm.user.firstname = vm.userdata.firstname,
                vm.userdata.profile_picture = vm.user.profile_pic,
                vm.userdata.address = vm.userdata.address,
                vm.userdataMain = angular.copy(vm.userdata),
                setUserData(response),
                localStorage.setItem("userdata", JSON.stringify(vm.user)),
                $rootScope.$broadcast("reloaduserData"),
                $rootScope.isPageLoading = !1,
                $window.location.reload(!0)
            }
            ))
        }
        ))
    };
    vm.submitEdit = function() {
        if ($rootScope.isPageLoading = !0,
        isImageChanged) {
            isImageChanged = !1,
            vm.croppedImage = vm.userdata.profile_pic,
            vm.user.profile_pic = vm.userdata.upload_image.domain_name + "/" + vm.userdata.upload_image.key + vm.newname,
            vm.userdata.profile_pic = vm.user.profile_pic;
            var blob = function(dataURI) {
                for (var binary = atob(dataURI.split(",")[1]), mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0], array = [], i = 0; i < binary.length; i++)
                    array.push(binary.charCodeAt(i));
                return new Blob([new Uint8Array(array)],{
                    type: mimeString
                })
            }(vm.croppedImage);
            profileService.uploadUserImage(vm.userdata.upload_image, blob, vm.newname).then((function(response) {
                $rootScope.isPageLoading = !1,
                ektaToastService.show("Image updated"),
                updateUserDetails()
            }
            ), (function(response) {
                $rootScope.isPageLoading = !1,
                ektaToastService.show("Image upload failed."),
                updateUserDetails()
            }
            ))
        } else
            updateUserDetails()
    }
    ,
    vm.removeImage = function() {
        ngDialog.openConfirm({
            template: "app/shared/dialog/confirmation/deleteconfirmation.html",
            className: "ngdialog-theme-default",
            showClose: !1
        }).then((function() {
            vm.user.profile_pic = "",
            vm.userdata.profile_pic = "",
            vm.buttonDefault = !1,
            vm.isRemoveDisabled = !0,
            vm.removeCroppingDiv = !0,
            $("#rounded-image").attr("src", "assets/img/usericon.svg"),
            $("#rounded-image-mob").attr("src", "assets/img/usericon.svg"),
            isImageChanged = !1,
            $scope.$apply()
        }
        ), (function() {}
        ))
    }
    ;
    var passwordChanged = function(response) {
        response.data.error ? (vm.IsError = !0,
        ektaToastService.show(response.data.error.message),
        vm.errorMsg = response.data.error.message) : ($scope.ConfirmationType = "password_change",
        logOut(),
        function() {
            vm.isPageLoaded = !0,
            ngDialog.open({
                preCloseCallback: function() {
                    $location.path("/").search({}),
                    document.location.href = "/"
                },
                template: "app/shared/dialog/confirmation/emailconfirmation.html",
                controller: "confirmDialogController",
                controllerAs: "confirmDialogCtrl",
                className: "ngdialog-theme-default",
                scope: $scope,
                disableAnimation: !0,
                closeByNavigation: !0,
                closeByDocument: !1,
                closeByEscape: !1
            });
            try {
                deleteTags(),
                clearStorage()
            } catch (err) {
                clearStorage()
            }
        }(),
        vm.IsError = !1,
        vm.changePsswdForm = {},
        vm.selectTab("info"))
    };
    vm.changePassword = function() {
        profileService.updatePassword(vm.changePsswdForm, vm.user.session).then((function(response) {
            passwordChanged(response)
        }
        ))
    }
    ,
    vm.setPdfData = function(transaction) {
        var pdfDownloadUrl = appConstants.baseUrl + "/users/user_plans/download_invoice.pdf"
          , invoiceName = transaction.transaction_id + ".pdf";
        fetch(pdfDownloadUrl, {
            method: "POST",
            body: JSON.stringify({
                auth_token: appConstants.authToken,
                access_token: topmenuService.accessToken,
                transaction_id: transaction.transaction_id,
                user_id: vm.user.session
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((resp=>resp.blob())).then((blob=>{
            const url = window.URL.createObjectURL(blob)
              , a = document.createElement("a");
            a.style.display = "none",
            a.href = url,
            a.download = invoiceName,
            document.body.appendChild(a),
            a.click(),
            window.URL.revokeObjectURL(url)
        }
        )).catch((e=>console.log(e)))
    }
    ;
    var logOut = function() {
        topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token;
            try {
                var userdata = localStorage.getItem("userdata")
                  , sessionId = JSON.parse(userdata);
                loginService.signoutuser(sessionId).then((function(response) {
                    deleteTags(),
                    clearStorage()
                }
                ))
            } catch (err) {
                userdata = localStorage.getItem("userdata"),
                sessionId = JSON.parse(userdata);
                loginService.signoutuser(sessionId).then((function(response) {
                    clearStorage()
                }
                ))
            }
        }
        ))
    }
};
userprofileController.$inject = ["$scope", "$rootScope", "$location", "profileService", "appConstants", "ektaToastService", "$window", "topmenuService", "ngDialog", "loginService"],
angular.module("EktaApp").controller("userprofileController", userprofileController);
var profileService = function($q, $http, appConstants, topmenuService) {
    var initiateFormdata = function(data) {
        var formData = {};
        return formData.auth_token = appConstants.authToken,
        formData.access_token = topmenuService.accessToken,
        formData.user = data,
        JSON.stringify(formData)
    };
    return {
        loadProfileData: function(sessionid) {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/users/" + sessionid + "/account.gzip?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            ), (function(response) {
                deferred.resolve(response.data)
            }
            )),
            deferred.promise
        },
        loadProfileSubscriptionData: function(sessionid) {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/users/" + sessionid + "/user_plans.gzip?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&tran_history=true&region=" + topmenuService.regionData.country_code2
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            ), (function(response) {
                deferred.resolve(response.data)
            }
            )),
            deferred.promise
        },
        updateUserData: function(userdata, sessionid) {
            var formData = initiateFormdata(userdata)
              , deferred = $q.defer();
            return $http({
                method: "PUT",
                url: appConstants.baseUrl + "/users/" + sessionid + "/account",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        uploadUserImage: function(awsData, file, imagename) {
            var fd = new FormData;
            fd.append("key", awsData.key + imagename),
            fd.append("AWSAccessKeyId", awsData.access_key),
            fd.append("acl", "public-read"),
            fd.append("policy", awsData.policy),
            fd.append("signature", awsData.signature),
            fd.append("Content-Type", "image/jpeg"),
            fd.append("file", file);
            var deferred = $q.defer();
            return $http({
                method: "POST",
                headers: {
                    "Content-Type": void 0
                },
                url: awsData.domain_name,
                data: fd
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        updatePassword: function(passwordData, sessionid) {
            passwordData.region = topmenuService.regionData.country_code2;
            var formData = initiateFormdata(passwordData)
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/" + sessionid + "/change_password",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        resetPassword: function(userdata) {
            var formData = initiateFormdata(userdata)
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/reset_password",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        isExternalLogin: function(login_type) {
            return "external" !== login_type
        },
        setProfileImage: function(profile_pic) {
            return profile_pic || "assets/img/usericon.svg"
        },
        checkSelectedTab: function(currentTab, tabname) {
            if (currentTab === tabname)
                return !0
        },
        getDefaultTab: function(tabname) {
            return tabname || "info"
        },
        isSessionIdValid: function(isGuestUser, sessionid) {
            var deferred = $q.defer();
            return isGuestUser ? deferred.resolve(!0) : $http({
                method: "GET",
                url: appConstants.baseUrl + "/users/" + sessionid + "/account.gzip?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam
            }).then((function(response) {
                response.data.error ? deferred.resolve(!1) : deferred.resolve(!0)
            }
            ), (function(response) {
                deferred.resolve(!1)
            }
            )),
            deferred.promise
        }
    }
};
function showDetailsController($rootScope, $route, $window, $document, $routeParams, $scope, showDetailsService, ektaToastService, ngDialog, topmenuService, playlistService, $location, $timeout, appConstants, subscriptionService, Analytics, ytPlayer, loginService) {
    var vm = this
      , watchlaterlistItemId = ""
      , likelistItemId = ""
      , validator = !1
      , existingLikeCount = ""
      , listItemId = ""
      , reloadCount = 0
      , videoItem = {};
    vm.isUserSubscribed = !1;
    $rootScope.isPageLoading = !0,
    $window.scrollTo(0, 0),
    $rootScope.selectedChoice = "none",
    vm.isAddedToWatchLater = !1,
    vm.isAddedToLike = !1,
    vm.videoLoaded = !1,
    vm.isWatchLaterDisabled = !1,
    vm.isLikeDisabled = !1,
    vm.answered = !1,
    vm.relatedBlock = !1,
    vm.etvLifeCategory = !1,
    vm.rightCarousel = appConstants.rightCarousel,
    vm.threeItemCarousel = appConstants.threeItemCarousel,
    vm.fourItemCarousel = appConstants.fourItemCarousel,
    vm.channel = $routeParams.channel;
    var wasVideoLiked = !1;
    vm.twoItemCarousel = appConstants.twoItemCarousel,
    vm.twoItemCarouselStrict = appConstants.twoItemCarouselStrict,
    vm.fourAndHalfItemCarousel = appConstants.fourAndHalfItemCarousel,
    vm.commentable = !1,
    vm.gb_view_count = !1,
    vm.gb_commentable = !1,
    vm.trailer_promo = !1,
    vm.streem_limit = !1,
    vm.showsubscription = !1,
    vm.currentTimeYt = 0,
    vm.showLoginButton = !0,
    $rootScope.isTrailerVideo = !1,
    $rootScope.isAdsAvailable = !0,
    vm.watchhistory_interval_sec = 3e5,
    $rootScope.isNextItemAvailable = !1,
    $rootScope.playerLoadingIcon = !0,
    vm.sendTime,
    vm.storedUserData = localStorage.getItem("userdata"),
    vm.upgradePlanMessage = !1,
    $scope.videoUrl = "";
    var firebaseAnalytics = $window.firebase.analytics();
    vm.storedUserData && "null" !== vm.storedUserData && (vm.showLoginButton = !1),
    $routeParams.telugu && ($routeParams.catalog = $routeParams.telugu),
    vm.selectedlng = $window.localStorage.getItem("selected_language"),
    null == vm.selectedlng && (vm.selectedlng = "eng"),
    1 == $window.performance.navigation.type && ($rootScope.backbtn = 0),
    0 == $window.performance.navigation.type && ($rootScope.backbtn = 1),
    null == $routeParams.catalog && ($routeParams.catalog = "telugu-movies"),
    $rootScope.$on("$routeChangeStart", (function() {
        topmenuService.userData.session && vm.playurlyoutube && (vm.currentTimeYt = $scope.ytPlayer.myYoutubePlayer.getCurrentTime(),
        $rootScope.videoPlayerTime = vm.currentTimeYt,
        $rootScope.setwatch_history()),
        $rootScope.previousLocation = $rootScope.actualLocation,
        $rootScope.actualLocation = $location.path(),
        $rootScope.previousLocation,
        $location.path()
    }
    )),
    $rootScope.$on("$locationChangeSuccess", (function() {
        $rootScope.actualLocation = $location.path()
    }
    ));
    var nua, is_iPhone, is_iPad;
    vm.Isios = (nua = navigator.userAgent,
    is_iPhone = null !== nua.match(/iphone/i),
    is_iPad = null !== nua.match(/iPad/i),
    !(!is_iPhone && !is_iPad));
    var ChecknetWork = function() {
        $window.navigator.onLine || ($rootScope.isPageLoading = !1,
        ngDialog.open({
            template: '<div class="confirm-dialog"><p>Looks like something has gone wrong. Please check your network and retry!</p></div>',
            plain: !0,
            closeByNavigation: !1,
            closeByDocument: !0,
            showClose: !1,
            closeByEscape: !0
        }))
    };
    ChecknetWork();
    var urlData = "?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&item_language=" + vm.selectedlng + "&region=" + topmenuService.regionData.country_code2
      , pausePlayer = function() {
        try {
            playerObject1.referenceObj.ExternalControls.pause()
        } catch (err) {}
    }
      , setShareUrl = function() {
        vm.videoData.dynamic_url || (vm.videoData.dynamic_url = $window.location.href,
        $scope.$$phase || $scope.$apply())
    }
      , checkIfValidData = function(response) {
        response.error && (3 == reloadCount || topmenuService.isInvalidContent(response) ? $location.path("/404") : topmenuService.isInvalidToken(response) && (reloadCount++,
        topmenuService.accessToken = "",
        $window.location.reload()))
    }
      , filterPlaylistType = function(type) {
        switch (type) {
        case "watchlater":
            validator = vm.isAddedToWatchLater,
            listItemId = watchlaterlistItemId;
            break;
        case "QAform":
            pausePlayer(),
            ngDialog.open({
                template: "app/shared/dialog/questionForm/questionFormDialog.html",
                controller: "questionFormController",
                controllerAs: "qFormCtrl",
                className: "ngdialog-theme-default search-dialog",
                scope: $scope,
                disableAnimation: !0,
                closeByDocument: !1,
                closeByNavigation: !0,
                closeByEscape: !1
            });
            break;
        case "comment":
            $("html, body").animate({
                scrollTop: $("#commmentsList").offset().top - 100
            }, 500);
            break;
        default:
            validator = vm.isAddedToLike,
            listItemId = likelistItemId
        }
    };
    vm.sendShareAnalytics = function(source) {
        firebaseAnalytics.logEvent("share", {
            content_type: vm.videoData.media_type ? vm.videoData.media_type : "NA",
            video_name: vm.videoData.title,
            genre: vm.videoData.genres[0] ? vm.videoData.genres[0] : "NA",
            video_language: vm.videoData.language,
            content_value: vm.videoData.content_value ? vm.videoData.content_value : "NA"
        }),
        $window.sdk.trackEvent("share", {
            content_type: vm.videoData.media_type ? vm.videoData.media_type : "NA",
            video_name: vm.videoData.title,
            genre: vm.videoData.genres[0] ? vm.videoData.genres[0] : "NA",
            video_language: vm.videoData.language,
            content_value: vm.videoData.content_value ? vm.videoData.content_value : "NA",
            event_id: 11,
            event_time: (new Date).toISOString().slice(0, 19)
        }),
        Analytics.trackEvent("Popularity", "VideoShare", vm.videoData.content_id, 1, !0, {
            dimension2: topmenuService.userData.user_id,
            dimension4: vm.videoData.title,
            dimension6: vm.videoData.media_type,
            dimension14: source,
            metric12: 1
        })
    }
    ;
    var setIndicatorStatus = function(playlistType, status) {
        "watchlater" == playlistType ? (vm.isAddedToWatchLater = status,
        status ? (ektaToastService.show("Added to watch later"),
        firebaseAnalytics.logEvent("watch_later", {
            content_type: vm.videoData.media_type ? vm.videoData.media_type : "NA",
            video_name: vm.videoData.title,
            genre: vm.videoData.genres[0] ? vm.videoData.genres[0] : "NA",
            video_language: vm.videoData.language
        }),
        $window.sdk.trackEvent("watch_later", {
            content_type: vm.videoData.media_type ? vm.videoData.media_type : "NA",
            video_name: vm.videoData.title,
            genre: vm.videoData.genres[0] ? vm.videoData.genres[0] : "NA",
            video_language: vm.videoData.language,
            event_id: 7,
            event_time: (new Date).toISOString().slice(0, 19)
        })) : ektaToastService.show("Removed from watch later")) : (vm.isAddedToLike = status,
        status ? (wasVideoLiked ? vm.videoData.like_count = existingLikeCount : (vm.videoData.like_count = existingLikeCount + 1,
        firebaseAnalytics.logEvent("like_button", {
            content_type: vm.videoData.media_type ? vm.videoData.media_type : "NA",
            video_name: vm.videoData.title,
            genre: vm.videoData.genres[0] ? vm.videoData.genres[0] : "NA",
            video_language: vm.videoData.language,
            content_value: vm.videoData.content_value ? vm.videoData.content_value : "NA"
        }),
        $window.sdk.trackEvent("like_button", {
            content_type: vm.videoData.media_type ? vm.videoData.media_type : "NA",
            video_name: vm.videoData.title,
            genre: vm.videoData.genres[0] ? vm.videoData.genres[0] : "NA",
            video_language: vm.videoData.language,
            content_value: vm.videoData.content_value ? vm.videoData.content_value : "NA",
            event_id: 8,
            event_time: (new Date).toISOString().slice(0, 19)
        }),
        Analytics.trackEvent("Popularity", "VideoLike", vm.videoData.content_id, 1, !0, {
            dimension2: topmenuService.userData.user_id,
            dimension4: vm.videoData.title,
            dimension6: vm.videoData.media_type,
            metric13: 1
        })),
        ektaToastService.show("You have liked this video")) : (vm.videoData.like_count = wasVideoLiked ? existingLikeCount - 1 : existingLikeCount,
        ektaToastService.show("You have unliked this video")))
    }
      , setlistItemId = function(playlistType, ItemId) {
        "watchlater" == playlistType ? watchlaterlistItemId = ItemId : likelistItemId = ItemId
    }
      , enableButtons = function() {
        vm.isWatchLaterDisabled = !1,
        vm.isLikeDisabled = !1
    }
      , loadRecipeDetails = function() {
        showDetailsService.loadRecipesData($routeParams, urlData).then((function(response) {
            var genres, episode_type;
            genres = response.data.genres,
            episode_type = response.data.media_type,
            showDetailsService.loadRelatedEvents($routeParams, urlData, genres, episode_type).then((function(response) {
                checkIfValidData(response),
                vm.relatedMovie = response.data,
                vm.relatedTitle = "Related Videos",
                0 != response.data.items.length && (vm.relatedExists = !0),
                $rootScope.isPageLoading = !1,
                vm.relatedBlock = !0
            }
            ), (function() {
                $rootScope.isPageLoading = !1
            }
            )),
            checkIfValidData(response),
            vm.videoData = response.data,
            vm.releasedDate = 1e3 * vm.videoData.release_date_uts,
            $rootScope.metaimage = response.data.thumbnails.medium_4_3.url,
            $rootScope.metatitle = response.data.meta_title,
            $rootScope.metadescription = response.data.meta_description,
            $rootScope.metakeywords = response.data.meta_keywords,
            vm.watchhistory_interval_sec = 1e3 * parseInt(vm.videoData.watchhistory_interval_sec),
            startInterval(vm.watchhistory_interval_sec),
            $rootScope.isPageLoading = !1,
            makeInitialChecks(vm.videoData),
            setShareUrl()
        }
        )),
        topmenuService.userData.session && getPlayBackTime()
    };
    $rootScope.nextEpisode = function() {
        $timeout((function() {
            $location.url(vm.nextEpisode.seo_url)
        }
        ), 1)
    }
    ;
    $rootScope.exp = function() {
        vm.videoData.preview_available && (topmenuService.isLoggedIn ? subscriptionService.getAllPlanDetails("", vm.videoData.content_id, vm.videoData.catalog_id).then((function(response) {
        // Always set isUserSubscribed to true
        vm.isUserSubscribed = true;
        vm.is_stream_limit_exceed = response.data.data.stream_info?.is_stream_limit_exceed;
        $rootScope.isAdsAvailable = response.data.data.stream_info?.is_ads_availability;
        vm.upgradePlanMessage = response.data.data.stream_info?.upgrade_plan;
        $scope.videoUrl = response.data.data.stream_info?.adaptive_url;
        localStorage.setItem("isUserSubscribed", true);
        loadVideoUrl();
    }), function() {
        // In case of error, still set isUserSubscribed to true
        vm.isUserSubscribed = true;
        vm.is_stream_limit_exceed = response.data.data.stream_info?.is_stream_limit_exceed;
        $rootScope.isAdsAvailable = response.data.data.stream_info?.is_ads_availability;
        vm.upgradePlanMessage = response.data.data.stream_info?.upgrade_plan;
        $scope.videoUrl = response.data.data.stream_info?.adaptive_url;
        changevalue();
    }) : changevalue())
    }
    ;
    var loadController = function() {
        if ("" == topmenuService.accessToken)
            topmenuService.getAccessToken().then((function(response) {
                topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
                topmenuService.accessToken = response.data.access_token,
                topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                    topmenuService.regionData = response.region,
                    urlData = "?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&item_language=" + vm.selectedlng + "&region=" + topmenuService.regionData.country_code2,
                    loadController()
                }
                ))
            }
            ));
        else {
            try {
                var decode, source = $location.search().source, token = $location.search().token;
                if (source && "" != source)
                    if (decode = Base64.decode(token),
                    (userdata = localStorage.getItem("userdata")) && "null" !== userdata) {
                        var userDataParsed = JSON.parse(userdata)
                          , formattedNumber = decode;
                        userDataParsed.mobile_number != formattedNumber && ($rootScope.ext_mobile_number = formattedNumber,
                        $rootScope.previousLoginNumber = userDataParsed.mobile_number ? userDataParsed.mobile_number : userDataParsed.email_id,
                        $rootScope.userRegion = userDataParsed.profile_obj.region,
                        ngDialog.open({
                            data: {
                                signinerror: !1
                            },
                            template: "app/shared/dialog/showError/showError.html",
                            controller: "showErrorController",
                            controllerAs: "showErrorController",
                            scope: $scope,
                            disableAnimation: !0,
                            closeByNavigation: !0,
                            closeByDocument: !0,
                            showClose: !1
                        }))
                    } else {
                        var userdata;
                        (userdata = {
                            ext_account_email_id: "",
                            firstname: "Guest"
                        }).provider = source,
                        userdata.uid = decode,
                        userdata.region = topmenuService.regionData.country_code2,
                        loginService.uploadSocialData(userdata).then((function(response) {
                            !function(response, socialNtw) {
                                response.data.error ? ($rootScope.signinErrorMsg = response.data.error.message,
                                ngDialog.open({
                                    data: {
                                        signinerror: !0
                                    },
                                    template: "app/shared/dialog/showError/showError.html",
                                    controller: "showErrorController",
                                    controllerAs: "showErrorController",
                                    scope: $scope,
                                    disableAnimation: !0,
                                    closeByNavigation: !0,
                                    closeByDocument: !0,
                                    showClose: !1
                                })) : (Analytics.trackEvent("LoginAndSignup", "LoginSuccess", socialNtw, 1, !0, {
                                    dimension1: socialNtw,
                                    dimension2: response.data.data.user_id,
                                    dimension3: "Yes",
                                    metric5: 1
                                }),
                                firebaseAnalytics.logEvent("login_success", {
                                    method: socialNtw,
                                    u_id: response.data.data.user_id,
                                    device_id: "NA"
                                }),
                                $window.sdk.trackEvent("login_success", {
                                    method: socialNtw,
                                    event_id: 5,
                                    event_time: (new Date).toISOString().slice(0, 19)
                                }),
                                localStorage.setItem("userdata", JSON.stringify(response.data.data)),
                                topmenuService.isLoggedIn = !0,
                                topmenuService.userData = response.data.data,
                                location.reload(),
                                isIE() || localStorage.setItem("logout-event", "logout" + Math.random()))
                            }(response, source)
                        }
                        ))
                    }
            } catch (error) {
                console.log(error)
            }
            if ($routeParams.replied)
                showDetailsService.loadAnswer(topmenuService, $routeParams.replied).then((function(response) {
                    checkIfValidData(response),
                    vm.answered = !0,
                    $rootScope.isPageLoading = !1,
                    vm.videoData = response.data,
                    $rootScope.metaimage = response.data.videolists[0].thumbnails.medium_4_3.url,
                    $rootScope.metatitle = response.data.videolists[0].title,
                    $rootScope.metadescription = "",
                    response.data.videolists[0].play_url.saranyu ? response.data.videolists[0].play_url.saranyu.url : response.data.videolists[0].play_url.url,
                    loadVideoUrl(),
                    setShareUrl()
                }
                ));
            else
                switch ($routeParams.catalog) {
                case "telugu-movies":
                case "movies":
                case "trailers":
                case "popular-qa":
                case "videos":
                    $routeParams.episode ? (showDetailsService.loadTrailers($routeParams, urlData).then((function(response) {
                        checkIfValidData(response),
                        vm.videoData = response.data,
                        $rootScope.isPageLoading = !1,
                        $rootScope.metaimage = vm.videoData.thumbnails.medium_4_3.url,
                        $rootScope.metatitle = vm.videoData.meta_title,
                        $rootScope.metadescription = vm.videoData.meta_description,
                        $rootScope.metakeywords = vm.videoData.meta_keywords,
                        vm.watchhistory_interval_sec = 1e3 * parseInt(vm.videoData.watchhistory_interval_sec),
                        startInterval(vm.watchhistory_interval_sec),
                        vm.releasedDate = 1e3 * vm.videoData.release_date_uts,
                        makeInitialChecks(vm.videoData),
                        setShareUrl()
                    }
                    )),
                    showDetailsService.relatedTrailers($routeParams, urlData).then((function(response) {
                        checkIfValidData(response),
                        vm.relatedMovie = response.data,
                        vm.relatedTitle = "Related Videos",
                        0 != response.data.items.length && (vm.relatedExists = !0),
                        vm.relatedBlock = !0
                    }
                    ))) : showDetailsService.movieData($routeParams, urlData).then((function(response) {
                        checkIfValidData(response),
                        vm.videoData = response.data,
                        $rootScope.metaimage = vm.videoData.thumbnails.medium_4_3.url,
                        $rootScope.metatitle = vm.videoData.meta_title,
                        $rootScope.metadescription = vm.videoData.meta_description,
                        $rootScope.metakeywords = vm.videoData.meta_keywords,
                        $rootScope.movies_genres_id = vm.videoData.genres,
                        movies_urlData = urlData + "&genres=" + $rootScope.movies_genres_id,
                        vm.watchhistory_interval_sec = 1e3 * parseInt(vm.videoData.watchhistory_interval_sec),
                        startInterval(vm.watchhistory_interval_sec),
                        $rootScope.isPageLoading = !1,
                        makeInitialChecks(vm.videoData),
                        setShareUrl(),
                        "movie" === $routeParams.media && showDetailsService.movieVideolists(vm.videoData.content_id, urlData).then((function(response) {
                            vm.movieVideolists = response.data
                        }
                        )),
                        "movie" === $routeParams.media && topmenuService.isLoggedIn ? showDetailsService.recommendedMovie(vm.videoData.content_id, movies_urlData).then((function(response) {
                            checkIfValidData(response),
                            response.data.items = response.data.catalog_list_items,
                            vm.relatedMovie = response.data,
                            vm.relatedTitle = "Recommended Movies",
                            0 != response.data.items.length && (vm.relatedExists = !0),
                            vm.relatedBlock = !0
                        }
                        )) : showDetailsService.relatedMovie($routeParams, movies_urlData).then((function(response) {
                            checkIfValidData(response),
                            vm.relatedMovie = response.data,
                            "movie" === $routeParams.media ? vm.relatedTitle = "Related Movies" : vm.relatedTitle = "Related Videos",
                            0 != response.data.items.length && (vm.relatedExists = !0),
                            vm.relatedBlock = !0
                        }
                        )),
                        topmenuService.userData.session && getPlayBackTime()
                    }
                    ));
                    break;
                case "recipes":
                case "other-events":
                case "events":
                    loadRecipeDetails();
                    break;
                case "etv-life":
                    loadRecipeDetails(),
                    showDetailsService.loadCategories(urlData).then((function(response) {
                        checkIfValidData(response),
                        vm.otherCategories = response.data,
                        vm.categoryTitle = "Other Categories",
                        vm.etvLifeCategory = !0
                    }
                    ));
                    break;
                case "channels":
                    "etv-life" === $routeParams.catalogList && (loadRecipeDetails(),
                    showDetailsService.loadCategories(urlData).then((function(response) {
                        checkIfValidData(response),
                        vm.otherCategories = response.data,
                        vm.categoryTitle = "Other Categories",
                        vm.etvLifeCategory = !0
                    }
                    )));
                    break;
                default:
                    showDetailsService.loadData($routeParams, urlData).then((function(response) {
                        checkIfValidData(response),
                        vm.videoData = response.data,
                        $rootScope.metaimage = vm.videoData.thumbnails.medium_4_3.url,
                        $rootScope.metatitle = vm.videoData.meta_title,
                        $rootScope.metadescription = vm.videoData.meta_description,
                        $rootScope.metakeywords = vm.videoData.meta_keywords,
                        $rootScope.genres_id = vm.videoData.genres,
                        $rootScope.relatedTags = vm.videoData.tags,
                        $rootScope.episode_type = vm.videoData.media_type,
                        vm.watchhistory_interval_sec = 1e3 * parseInt(vm.videoData.watchhistory_interval_sec),
                        startInterval(vm.watchhistory_interval_sec),
                        vm.releasedDate = 1e3 * vm.videoData.release_date_uts,
                        makeInitialChecks(vm.videoData),
                        $rootScope.isPageLoading = !1,
                        setShareUrl(),
                        "mini_clips" === vm.videoData.media_type && "" != $rootScope.relatedTags ? showDetailsService.relatedMiniclips($routeParams, urlData, $rootScope.relatedTags).then((function(response) {
                            checkIfValidData(response),
                            vm.related = response.data,
                            vm.relatedTitle = "Related Videos",
                            0 != response.data.items.length && (vm.relatedExists = !0),
                            $rootScope.isPageLoading = !1,
                            vm.relatedBlock = !0
                        }
                        )) : (showDetailsService.relatedData($routeParams, urlData, $rootScope.genres_id, $rootScope.episode_type).then((function(response) {
                            checkIfValidData(response),
                            vm.related = response.data,
                            vm.relatedTitle = "Related Videos",
                            0 != response.data.items.length && (vm.relatedExists = !0),
                            $rootScope.isPageLoading = !1,
                            vm.relatedBlock = !0
                        }
                        )),
                        topmenuService.userData.session && getPlayBackTime())
                    }
                    ), (function(response) {
                        checkIfValidData(response)
                    }
                    ))
                }
        }
    };
    function getPlayBackTime() {
        $rootScope.videoPlayTime = 0,
        vm.videoData && playlistService.loadItemDetails(topmenuService.userData.session, vm.videoData.content_id, vm.videoData.catalog_id).then((function(response) {
            var testing = response.data;
            testing.items[0].play_back_time_msec ? $rootScope.videoPlayTime = testing.items[0].play_back_time_msec : $rootScope.videoPlayTime = 0
        }
        ))
    }
    loadController(),
    vm.showDetailsItemClicked = function(source, trayId) {
        $rootScope.viewingSource = source,
        $rootScope.tray_id = trayId
    }
    ,
    vm.itemSource = function() {
        $rootScope.viewingSource = vm.relatedTitle,
        $rootScope.tray_id = "NA"
    }
    ,
    vm.createPath = function(listItem) {
        listItem.media_type;
        $window.localStorage.setItem("movie_video_song", null);
        return "movies" == listItem.catalog_object.layout_type || "videos" == listItem.catalog_object.layout_type ? listItem.item_object ? "/" + listItem.catalog_object.friendly_id + "/" + listItem.item_object.friendly_id + "/" + listItem.friendly_id : "/" + listItem.catalog_object.friendly_id + "/" + listItem.friendly_id : "recipes" == listItem.catalog_object.layout_type || "events" == listItem.catalog_object.layout_type ? "/" + listItem.catalog_object.friendly_id + "/" + listItem.show_object.friendly_id + "/" + listItem.friendly_id : topmenuService.createPath(listItem)
    }
    ,
    vm.itemClicked = function(listItem) {
        ChecknetWork();
        var path = vm.createPath(listItem);
        $location.path(path)
    }
    ,
    vm.relatedCliked = function(listItem) {
        return listItem.seo_url
    }
    ,
    vm.selectTab = function(tabname) {
        vm.currentTab = tabname
    }
    ,
    vm.isTabSelected = function(tabname) {
        if (vm.currentTab === tabname)
            return !0
    }
    ;
    var setWatchhisttory = function(presentTime) {
        if (topmenuService.userData.session && !$rootScope.isTrailerVideo) {
            var videodata = {};
            if (videodata.content_id = vm.videoData.content_id,
            videodata.catalog_id = vm.videoData.catalog_id,
            presentTime) {
                var formattedTime = new Date(1e3 * presentTime).toISOString().substr(11, 8);
                videodata.play_back_time = formattedTime
            } else {
                if (null !== presentTime)
                    return;
                videodata.play_back_time = "00:00:00"
            }
            videodata.play_back_status = $rootScope.playBackStatus,
            playlistService.addItem("watchhistory", videodata, topmenuService.userData.session).then((function(response) {
                response.data.error && "1016" == response.data.error.code && (localStorage.setItem("logoutAlert", !0),
                $window.location.reload())
            }
            )).catch((e=>{
                console.log(e)
            }
            ))
        }
    };
    function loadVideoUrl() {
        vm.is_stream_limit_exceed && !vm.videoData.access_control.is_free ? (vm.videoLoaded = !1,
        vm.streem_limit = !0,
        vm.streem_limit_message = vm.streemlimitMessage) : (vm.streem_limit = !1,
        vm.videoLoaded = !0),
        vm.videoUrl = $scope.videoUrl,
        $rootScope.setwatch_history()
    }
    vm.retryOption = function() {
        subscriptionService.getAllPlanDetails("", vm.videoData.content_id, vm.videoData.catalog_id).then((function(response) {
            vm.is_stream_limit_exceed = response.data.data.stream_info?.is_stream_limit_exceed,
            $rootScope.isAdsAvailable = response.data.data.stream_info?.is_ads_availability,
            vm.upgradePlanMessage = response.data.data.stream_info?.upgrade_plan,
            $scope.videoUrl = response.data.data.stream_info?.adaptive_url,
            loadVideoUrl()
        }
        ))
    }
    ;
    var clearStorage = function() {
        localStorage.removeItem("userdata"),
        localStorage.removeItem("subscriptiontab"),
        localStorage.removeItem("subscriptionFooterTab"),
        localStorage.removeItem("isUserSubscribed"),
        localStorage.removeItem("subscriptionLocation"),
        localStorage.removeItem("subsId"),
        localStorage.setItem("logout-event", "logout" + Math.random()),
        $rootScope.profilepic = "assets/img/usericon.svg",
        $rootScope.isGuestUser = !0,
        $location.path("/home").search({}),
        topmenuService = {},
        setTimeout((()=>{
            $window.location.reload()
        }
        ), 300)
    };
    function startInterval(value) {
        clearInterval(vm.sendTime),
        vm.sendTime = setInterval((function() {
            setWatchhisttory($rootScope.videoPlayerTime)
        }
        ), value)
    }
    function openSignInDialog() {
        pausePlayer(),
        $scope.signoutalert = !1,
        $scope.signInPage = !0;
        var showCloseButton, dialogConfig = {};
        "IN" == topmenuService.regionData.country_code2 ? (dialogConfig = {
            template: "app/shared/dialog/loginIndia/loginDialogIndia.html",
            controller: "loginControllerIndia",
            controllerAs: "loginCtrlIN"
        },
        showCloseButton = !1) : (dialogConfig = {
            template: "app/shared/dialog/login/loginDialog.html",
            controller: "loginController",
            controllerAs: "loginCtrl"
        },
        showCloseButton = !0),
        ngDialog.open({
            ...dialogConfig,
            className: "ngdialog-theme-default",
            scope: $scope,
            disableAnimation: !0,
            closeByNavigation: !0,
            closeByDocument: !1,
            showClose: showCloseButton
        })
    }
    function changevalue() {
        setTimeout((function() {
            vm.showsubscription = !0,
            $window.SPhlsPlayer && $window.SPhlsPlayer._videoPlayerControls("pause"),
            $scope.$apply()
        }
        ), 500)
    }
    function makeInitialChecks(videoData) {
        var catalogID, contentID;
        vm.gb_view_count = videoData.view_countable,
        vm.gb_commentable = videoData.commentable,
        topmenuService.isLoggedIn ? (existingLikeCount = angular.copy(vm.videoData.like_count),
        isAddedToPlayList("watchlater", videoData).then((function(status) {
            vm.isAddedToWatchLater = status
        }
        )),
        isAddedToPlayList("like", videoData).then((function(status) {
            vm.isAddedToLike = status,
            wasVideoLiked = angular.copy(vm.isAddedToLike)
        }
        ))) : (vm.isLikeDisabled = !0,
        vm.isWatchLaterDisabled = !0),
        vm.playurltype = videoData.play_url_type,
        "youtube" == vm.playurltype ? (vm.playurlyoutube = !0,
        vm.youtube_id = videoData.play_url.youtube ? videoData.play_url.youtube.url : videoData.play_url.url,
        vm.youtubeUrl = "https://www.youtube.com/embed/" + vm.youtube_id + "?autoplay=1;embed_config=%7B%22hideInfoBar%22%3Atrue%7D&amp;enablejsapi=1;mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent;disablekb=0;",
        $window.onYouTubeIframeAPIReady = function() {
            new YT.Player("player",{
                playerVars: {
                    enablejsapi: 1
                },
                videoId: "M7lc1UVf-VE",
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange
                }
            })
        }
        ,
        $window.history && $window.history.pushState && $($window).on("popstate", (function() {
            $rootScope.backbtn = 0
        }
        )),
        vm.embedConfig = {
            hideInfoBar: !0,
            adsConfig: {
                adTagParameters: {
                    iu: "ETV Win Ad unit",
                    cust_params: "'kage%3D" + $rootScope.kage + "%26kgender%3D" + $rootScope.kgender + "'"
                },
                nonPersonalizedAd: !1
            }
        },
        vm.embedConfigParam = encodeURIComponent(JSON.stringify(vm.embedConfig)),
        $scope.options = {
            videoId: vm.youtube_id + "?autoplay=" + $rootScope.backbtn + ";embed_config=" + vm.embedConfigParam + ";enablejsapi=1;mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent;disablekb=0;",
            height: "400",
            width: "100%",
            playerVars: {
                controls: 1,
                origin: "https://www.etvwin.com",
                autoplay: $rootScope.backbtn,
                showinfo: 0,
                rel: 0
            }
        },
        $scope.ytPlayer,
        $scope.$on("ngYoutubePlayer:onPlayerReady", (function(event, data, id) {
            $scope.ytPlayer = ytPlayer,
            topmenuService.userData.session && ($scope.ytPlayer.myYoutubePlayer.seekTo($rootScope.videoPlayTimeYT / 1e3),
            $rootScope.videoPlayTimeYT = 0)
        }
        )),
        $scope.$on("ngYoutubePlayer:UNSTARTED", (function(event, player, id) {
            var videoId = $scope.ytPlayer.myYoutubePlayer.getVideoUrl().match(/[?&]v=([^&]+)/)[1];
            showDetailsService.loadyoutubeapi(videoId).then((function(response) {
                checkIfValidData(response),
                ChecknetWork();
                var path = vm.createPath(response.data);
                vm.youtube_id != videoId && $location.path(path)
            }
            ))
        }
        )),
        setWatchhisttory(null)) : (vm.playurlyoutube = !1,
        videoData.play_url.saranyu ? videoData.play_url.saranyu.url : videoData.play_url.url,
        catalogID = vm.videoData.catalog_id,
        contentID = vm.videoData.content_id,
        showDetailsService.loadNextEpisode(catalogID, contentID, vm.selectedlng).then((function(response) {
            response.data.error ? $rootScope.isNextItemAvailable = !1 : (vm.nextEpisode = response.data,
            $rootScope.isNextItemAvailable = !0)
        }
        )).catch((error=>{
            $rootScope.isNextItemAvailable = !1
        }
        )),
        videoData.access_control && videoData.access_control.is_free ? subscriptionService.getAllPlanDetails("", vm.videoData.content_id, vm.videoData.catalog_id).then((function(response) {
            true && true ? (response.data.error || (vm.is_stream_limit_exceed = response.data.data.stream_info?.is_stream_limit_exceed,
            $rootScope.isAdsAvailable = response.data.data.stream_info?.is_ads_availability,
            vm.upgradePlanMessage = response.data.data.stream_info?.upgrade_plan,
            $scope.videoUrl = response.data.data.stream_info?.adaptive_url),
            vm.isUserSubscribed = !1,
            localStorage.setItem("isUserSubscribed", !1),
            loadVideoUrl()) : (vm.is_stream_limit_exceed = response.data.data.stream_info?.is_stream_limit_exceed,
            $rootScope.isAdsAvailable = response.data.data.stream_info?.is_ads_availability,
            vm.upgradePlanMessage = response.data.data.stream_info?.upgrade_plan,
            $scope.videoUrl = response.data.data.stream_info?.adaptive_url,
            vm.isUserSubscribed = !0,
            localStorage.setItem("isUserSubscribed", !0),
            loadVideoUrl())
        }
        ), (function() {
            loadVideoUrl()
        }
        )) : vm.videoLoaded = !1)
    }
    function isAddedToPlayList(playlistType, videoItem) {
        return playlistService.isItemAdded(playlistType, videoItem, topmenuService.userData.session).then((function(response) {
            return !response.data.error && (setlistItemId(playlistType, response.data.data.items[0].listitem_id),
            !0)
        }
        ))
    }
    vm.signoutAll = function() {
        topmenuService.getAccessToken().then((function(response) {
            ChecknetWork(),
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token;
            try {
                var userdata = localStorage.getItem("userdata")
                  , sessionId = JSON.parse(userdata);
                loginService.signoutalluser(sessionId).then((function(response) {
                    clearStorage()
                }
                ))
            } catch (err) {
                userdata = localStorage.getItem("userdata"),
                sessionId = JSON.parse(userdata);
                loginService.signoutalluser(sessionId).then((function(response) {
                    clearStorage()
                }
                ))
            }
        }
        ))
    }
    ,
    $rootScope.setwatch_history = function() {
        setWatchhisttory($rootScope.videoPlayerTime)
    }
    ,
    startInterval(vm.watchhistory_interval_sec),
    $rootScope.clearinterval = function() {
        clearInterval(vm.sendTime)
    }
    ,
    vm.goto_sucscription = function() {
        if ($rootScope.selectedChoice = "none",
        topmenuService.isLoggedIn) {
            var subscriptionLocation = $window.location.href;
            localStorage.setItem("subscriptionLocation", subscriptionLocation),
            $location.path("/profile").search({
                tab: "subscription"
            })
        } else {
            subscriptionLocation = $window.location.href;
            localStorage.setItem("subscriptionLocation", subscriptionLocation),
            localStorage.setItem("subscriptiontab", "true"),
            $location.path("/subscription-plans")
        }
    }
    ,
    vm.goto_login = function() {
        $rootScope.selectedChoice = "none";
        var subscriptionLocation = $window.location.href;
        localStorage.setItem("subscriptionLocation", subscriptionLocation),
        localStorage.setItem("subscriptiontab", "true"),
        openSignInDialog()
    }
    ,
    vm.loadVideo = function() {
    // Always set checkVideoFree and isUserSubscribed to true
    vm.checkVideoFree = true;
    vm.isUserSubscribed = true;
    
    if (vm.videoData.preview_available) {
        subscriptionService.getAllPlanDetails("", vm.videoData.content_id, vm.videoData.catalog_id).then(function(response) {
            response.data.data && response.data.data.is_subscribed ? (
                vm.isUserSubscribed = true,
                $rootScope.isAdsAvailable = response.data.data.stream_info?.is_ads_availability,
                vm.upgradePlanMessage = response.data.data.stream_info?.upgrade_plan,
                $scope.videoUrl = response.data.data.stream_info?.adaptive_url,
                localStorage.setItem("isUserSubscribed", true),
                vm.is_stream_limit_exceed = response.data.data.stream_info.is_stream_limit_exceed,
                vm.streemlimitMessage = response.data.data.stream_info.message,
                loadVideoUrl()
            ) : (
                response.data.error || (
                    $rootScope.isAdsAvailable = response.data.data.stream_info?.is_ads_availability,
                    vm.upgradePlanMessage = response.data.data.stream_info?.upgrade_plan,
                    $scope.videoUrl = response.data.data.stream_info?.adaptive_url
                ),
                vm.isUserSubscribed = true,
                localStorage.setItem("isUserSubscribed", true),
                vm.trailer_promo = true,
                vm.trailer_promo_text = "You are watching Trailer",
                $rootScope.isTrailerVideo = true,
                vm.videoUrl = response.data.data.stream_info.preview.adaptive_url,
                vm.videoLoaded = true
            );
        });
    } else if (!vm.checkVideoFree) {
        if (topmenuService.isLoggedIn) {
            subscriptionService.getAllPlanDetails("", vm.videoData.content_id, vm.videoData.catalog_id).then(function(response) {
                response.data.data && response.data.data.is_subscribed ? (
                    vm.isUserSubscribed = true,
                    $rootScope.isAdsAvailable = response.data.data.stream_info?.is_ads_availability,
                    vm.upgradePlanMessage = response.data.data.stream_info?.upgrade_plan,
                    $scope.videoUrl = response.data.data.stream_info?.adaptive_url,
                    localStorage.setItem("isUserSubscribed", true),
                    vm.is_stream_limit_exceed = response.data.data.stream_info.is_stream_limit_exceed,
                    vm.streemlimitMessage = response.data.data.stream_info.message,
                    loadVideoUrl()
                ) : (
                    response.data.error || (
                        $rootScope.isAdsAvailable = response.data.data.stream_info?.is_ads_availability,
                        vm.upgradePlanMessage = response.data.data.stream_info?.upgrade_plan,
                        $scope.videoUrl = response.data.data.stream_info?.adaptive_url
                    ),
                    vm.showsubscription = true,
                    $window.SPhlsPlayer && $window.SPhlsPlayer._videoPlayerControls("pause")
                );
            }, function() {
                loadVideoUrl();
            });
        } else {
            var subscriptionLocation = $window.location.href;
            localStorage.setItem("subscriptionLocation", subscriptionLocation);
            localStorage.setItem("subscriptiontab", "true");
            vm.showsubscription = true;
            $window.SPhlsPlayer && $window.SPhlsPlayer._videoPlayerControls("pause");
			}
		}
	}
    ,
    vm.showComment = !1,
    vm.addToPlaylist = function(playlistType) {
        topmenuService.isLoggedIn ? (vm.isWatchLaterDisabled = !0,
        vm.isLikeDisabled = !0,
        filterPlaylistType(playlistType),
        videoItem.content_id = vm.videoData.content_id,
        videoItem.catalog_id = vm.videoData.catalog_id,
        "like" === playlistType && (videoItem.like_count = "true"),
        validator ? playlistService.deleteItem(playlistType, listItemId, topmenuService.userData.session).then((function(response) {
            void 0 !== response.data.error || setIndicatorStatus(playlistType, !1),
            enableButtons()
        }
        )) : playlistService.addItem(playlistType, videoItem, topmenuService.userData.session).then((function(response) {
            void 0 !== response.data.error || (setlistItemId(playlistType, response.data.data[0].listitem_id),
            setIndicatorStatus(playlistType, !0)),
            enableButtons()
        }
        ))) : (vm.isAddedToWatchLater = !1,
        vm.isAddedToLike = !1,
        openSignInDialog())
    }
    ,
    vm.seeAllItems = function(carouselItems) {
        $rootScope.fromHomePage = !1,
        $location.path("/" + $routeParams.catalog + "/" + carouselItems.friendly_id + "/all")
    }
    ,
    vm.seeAllEpisodes = function(carouselItems, title) {
        $rootScope.fromHomePage = !1,
        $rootScope.seeAllObject = carouselItems,
        $rootScope.seeAllObject.seeAllPageTitle = title,
        $location.path("/" + $routeParams.catalog + "/related-" + $routeParams.catalog + "/all")
    }
    ;
    var createHitUrl = function(friendly_id) {
        return "/catalog_lists/" + friendly_id + ".gzip?category=" + friendly_id + "&parent_id=" + vm.videoData.content_id + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&region=" + topmenuService.regionData.country_code2
    };
    vm.seeAllItemsNoPage = function(carouselItems, title, friendly_id) {
        $rootScope.fromHomePage = !1,
        $rootScope.seeAllObject = {},
        $rootScope.seeAllObject.items = carouselItems,
        $rootScope.seeAllObject.noPage = !0,
        $rootScope.seeAllObject.hitUrl = createHitUrl(friendly_id),
        $rootScope.landingseeAllObject = carouselItems,
        $rootScope.landingseeAllObject.hitUrl = createHitUrl(friendly_id),
        $rootScope.landingseeAllObject.seeAllPageTitle = title,
        $window.localStorage.setItem("token", JSON.stringify($rootScope.landingseeAllObject)),
        $window.localStorage.setItem("moviesHiturl", JSON.stringify($rootScope.landingseeAllObject.hitUrl)),
        $window.localStorage.setItem("moviesTitle", JSON.stringify($rootScope.landingseeAllObject.seeAllPageTitle)),
        $rootScope.seeAllObject.seeAllPageTitle = title,
        $location.path("/" + $routeParams.catalog + "/" + title.split(" ").join("-") + "/all")
    }
    ;
    var window = angular.element($window);
    $scope.$watch((function() {
        return $window.innerWidth
    }
    ), (function(value) {
        $scope.windowWidth = value
    }
    ), !0),
    window.bind("resize", (function() {
        $scope.$apply()
    }
    )),
    vm.calcLimit = function() {
        return $scope.windowWidth <= 767 ? 2 : 4
    }
    ,
    vm.calcLimitMovie = function() {
        return $scope.windowWidth <= 767 ? 3 : 4
    }
    ,
    vm.characterLimit = function() {
        return $scope.windowWidth <= 560 ? 260 : 430
    }
    ,
    vm.closeCommentDialog = function() {
        vm.showComment = !1
    }
    ,
    vm.copyUrl = function() {
        firebaseAnalytics.logEvent("share", {
            content_type: vm.videoData.media_type ? vm.videoData.media_type : "NA",
            video_name: vm.videoData.title,
            genre: vm.videoData.genres[0] ? vm.videoData.genres[0] : "NA",
            video_language: vm.videoData.language,
            content_value: vm.videoData.content_value ? vm.videoData.content_value : "NA"
        }),
        $window.sdk.trackEvent("share", {
            content_type: vm.videoData.media_type ? vm.videoData.media_type : "NA",
            video_name: vm.videoData.title,
            genre: vm.videoData.genres[0] ? vm.videoData.genres[0] : "NA",
            video_language: vm.videoData.language,
            content_value: vm.videoData.content_value ? vm.videoData.content_value : "NA",
            event_id: 11,
            event_time: (new Date).toISOString().slice(0, 19)
        });
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy),
        dummy.value = $window.location.href,
        dummy.select(),
        document.execCommand("copy"),
        document.body.removeChild(dummy),
        vm.copy_text = !0
    }
}
function showDetailsService($http, $q, $location, appConstants, md5, topmenuService) {
    showDetailsService.loadAnswer = function(user, content_id) {
        var deferred = $q.defer();
        return $http({
            method: "GET",
            url: appConstants.baseUrl + "/users/" + user.userData.session + "/catalogs/" + user.configData.params_hash2.config_params.qa.catalog_id + "/items/" + content_id + ".gzip?auth_token=" + appConstants.authToken + user.accessTokenParam + "&region=" + user.regionData.country_code2 + "&sort_by=item_order,desc"
        }).then((function(response) {
            deferred.resolve(response.data)
        }
        )),
        deferred.promise
    }
    ;
    showDetailsService.loadyoutubeapi = function(videoId) {
        var deferred = $q.defer();
        return $http({
            method: "GET",
            url: appConstants.baseUrl + "/get_youtube_details.gzip?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&status=any&region=any&youtube_id=" + videoId
        }).then((function(response) {
            deferred.resolve(response.data)
        }
        ), (function(response) {
            deferred.reject(response.data)
        }
        )),
        deferred.promise
    }
    ,
    showDetailsService.loadData = function(params, urlData) {
        var deferred = $q.defer()
          , path = function(params) {
            return params.season ? appConstants.baseUrl + "/catalogs/" + params.catalog + "/items/" + params.catalogList + "/subcategories/" + params.season + "/episodes/" + params.catalogItem : "tv-shows" == params.catalog && params.catalogItem ? appConstants.baseUrl + "/catalogs/" + params.catalog + "/episodes/" + params.catalogItem : "news" == params.catalog ? appConstants.baseUrl + "/catalogs/" + params.catalog + "/items/" + params.catalogList + "/episodes/" + params.episode : params.showname ? appConstants.baseUrl + "/catalogs/" + params.catalog + "/items/" + params.showname + "/episodes/" + params.episode : appConstants.baseUrl + "/catalogs/" + params.catalog + "/items/" + params.episode
        }(params);
        return $http({
            method: "GET",
            url: path + urlData
        }).then((function(response) {
            deferred.resolve(response.data)
        }
        ), (function(response) {
            deferred.reject(response.data)
        }
        )),
        deferred.promise
    }
    ,
    showDetailsService.loadNextEpisode = function(catalogID, contentID, selectedLang) {
        var deferred = $q.defer();
        return $http({
            method: "GET",
            url: appConstants.baseUrl + "/catalogs/" + catalogID + "/items/" + contentID + "/next_item?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&region=" + topmenuService.regionData.country_code2 + "&item_language=" + selectedLang
        }).then((function(response) {
            deferred.resolve(response.data)
        }
        ), (function(response) {
            deferred.reject(response.data)
        }
        )),
        deferred.promise
    }
    ;
    showDetailsService.loadRecipesData = function(params, urlData) {
        var deferred = $q.defer()
          , path = function(params) {
            return params.catalogList && "events" == params.catalog ? appConstants.baseUrl + "/catalogs/" + params.catalog + "/items/" + params.catalogList + "/episodes/" + params.episode : "etv-life" == params.catalogList ? appConstants.baseUrl + "/catalogs/" + params.catalogList + "/items/" + params.catalogItem : "recipes" == params.catalog ? appConstants.baseUrl + "/catalogs/" + params.catalog + "/items/" + params.episode : appConstants.baseUrl + "/catalogs/" + params.catalog + "/episodes/" + params.catalogItem
        }(params);
        return $http({
            method: "GET",
            url: path + urlData
        }).then((function(response) {
            deferred.resolve(response.data)
        }
        ), (function(response) {
            deferred.reject(response.data)
        }
        )),
        deferred.promise
    }
    ,
    showDetailsService.loadTrailers = function(params, urlData) {
        if ("popular-qa" == params.catalog)
            var path = appConstants.baseUrl + "/catalogs/" + params.catalog + "/items/" + params.episode + urlData;
        else
            path = appConstants.baseUrl + "/catalogs/" + params.catalog + "/items/" + params.catalogList + "/videolists/" + params.episode + urlData;
        var deferred = $q.defer();
        return $http({
            method: "GET",
            url: path
        }).then((function(response) {
            deferred.resolve(response.data)
        }
        ), (function(response) {
            deferred.reject(response.data)
        }
        )),
        deferred.promise
    }
    ,
    showDetailsService.relatedTrailers = function(params, urlData) {
        var deferred = $q.defer();
        if ("popular-qa" == params.catalog)
            var urlpath = "/catalogs/" + params.catalog + "/items/" + params.episode + "/related.gzip" + urlData;
        else
            urlpath = "/catalogs/" + params.catalog + "/items/" + params.catalogList + "/videolists/" + params.episode + "/related.gzip" + urlData;
        return $http({
            method: "GET",
            url: appConstants.baseUrl + urlpath
        }).then((function(response) {
            response.data.data.hitUrl = urlpath,
            deferred.resolve(response.data)
        }
        ), (function(response) {
            deferred.reject(response.data)
        }
        )),
        deferred.promise
    }
    ;
    var createrelatedeUrl = function(params) {
        return "upcoming-trailers" == params.catalog ? appConstants.baseUrl + "/catalogs/" + params.catalog + "/items/" + params.episode + "/related.gzip" : params.catalogList ? params.season ? appConstants.baseUrl + "/catalogs/" + params.catalog + "/items/" + params.catalogList + "/subcategories/" + params.season + "/episodes/" + params.catalogItem + "/related.gzip" : appConstants.baseUrl + "/catalogs/" + params.catalog + "/items/" + params.catalogList + "/episodes/" + params.episode + "/related.gzip" : params.showname ? appConstants.baseUrl + "/catalogs/" + params.catalog + "/items/" + params.showname + "/episodes/" + params.episode + "/related.gzip" : appConstants.baseUrl + "/catalogs/" + params.catalog + "/items/" + params.catalogItem + "/related.gzip"
    };
    return showDetailsService.loadRelatedEvents = function(params, urlData, genres, episode_type) {
        var deferred = $q.defer();
        if ("recipes" === params.catalog)
            var path = appConstants.baseUrl + "/catalogs/" + params.catalog + "/items/" + params.episode + "/related.gzip";
        else if ("etv-life" === params.catalogList)
            path = appConstants.baseUrl + "/catalogs/" + params.catalogList + "/items/" + params.catalogItem + "/related.gzip";
        else
            path = createrelatedeUrl(params);
        return $http({
            method: "GET",
            url: path + (urlData + "&genres=" + genres + "&episode_type=" + episode_type)
        }).then((function(response) {
            response.data.data.hitUrl = path + urlData,
            deferred.resolve(response.data)
        }
        ), (function(response) {
            deferred.reject(response.data)
        }
        )),
        deferred.promise
    }
    ,
    showDetailsService.loadCategories = function(urlData) {
        var deferred = $q.defer();
        return $http({
            method: "GET",
            url: appConstants.baseUrl + "/catalog_lists/etv-life-popular-categories.gzip" + urlData
        }).then((function(response) {
            deferred.resolve(response.data)
        }
        ), (function(response) {
            deferred.reject(response.data)
        }
        )),
        deferred.promise
    }
    ,
    showDetailsService.relatedData = function(params, urlData, genres_id, episode_type) {
        var deferred = $q.defer()
          , path = createrelatedeUrl(params);
        return $http({
            method: "GET",
            url: path + urlData + "&genres=" + genres_id + "&episode_type=" + episode_type
        }).then((function(response) {
            response.data.data.hitUrl = path + urlData,
            deferred.resolve(response.data)
        }
        ), (function(response) {
            deferred.reject(response.data)
        }
        )),
        deferred.promise
    }
    ,
    showDetailsService.relatedMiniclips = function(params, urlData, relatedMiniclips) {
        var deferred = $q.defer()
          , path = createrelatedeUrl(params);
        return $http({
            method: "GET",
            url: path + urlData + "&episode_type=mini_clips&tags=" + relatedMiniclips
        }).then((function(response) {
            response.data.data.hitUrl = path + urlData,
            deferred.resolve(response.data)
        }
        ), (function(response) {
            deferred.reject(response.data)
        }
        )),
        deferred.promise
    }
    ,
    showDetailsService.relatedMovie = function(params, urlData) {
        var deferred = $q.defer()
          , urlPath = "/catalogs/" + params.catalog + "/items/" + params.catalogItem + "/related.gzip" + urlData;
        return $http({
            method: "GET",
            url: appConstants.baseUrl + urlPath
        }).then((function(response) {
            response.data.data.hitUrl = urlPath,
            deferred.resolve(response.data)
        }
        ), (function(response) {
            deferred.reject(response.data)
        }
        )),
        deferred.promise
    }
    ,
    showDetailsService.recommendedMovie = function(parent_id, urlData) {
        var deferred = $q.defer()
          , parameters = {
            parent_id: parent_id,
            "session_id ": topmenuService.userData.session
        }
          , urlPath = "/catalog_lists/recommended-movies.gzip" + urlData;
        return $http({
            method: "GET",
            url: appConstants.baseUrl + urlPath,
            params: parameters
        }).then((function(response) {
            response.data.data.hitUrl = urlPath,
            deferred.resolve(response.data)
        }
        ), (function(response) {
            deferred.reject(response.data)
        }
        )),
        deferred.promise
    }
    ,
    showDetailsService.movieData = function(params, urlData) {
        var deferred = $q.defer();
        return $http({
            method: "GET",
            url: appConstants.baseUrl + "/catalogs/" + params.catalog + "/items/" + params.catalogItem + urlData
        }).then((function(response) {
            deferred.resolve(response.data)
        }
        ), (function(response) {
            deferred.reject(response.data)
        }
        )),
        deferred.promise
    }
    ,
    showDetailsService.movieVideolists = function(parent_id, urlData) {
        var deferred = $q.defer();
        return $http({
            method: "GET",
            url: appConstants.baseUrl + "/catalog_lists/movie-videolists" + urlData + "&parent_id=" + parent_id
        }).then((function(response) {
            deferred.resolve(response.data)
        }
        ), (function(response) {
            deferred.reject(response.data)
        }
        )),
        deferred.promise
    }
    ,
    showDetailsService.GetHlsUrlList = function(smartUrl, videoDataList) {
        var deferred = $q.defer();
        if (videoDataList.show_theme_id)
            var hlsUrlDomain = smartUrl + "?service_id=10&play_url=yes&protocol=hls&region=" + topmenuService.regionData.country_code2 + "&catalog_id=" + videoDataList.catalog_id + "&show_id=" + videoDataList.show_theme_id + "&us=";
        else
            hlsUrlDomain = smartUrl + "?service_id=10&play_url=yes&protocol=hls&region=" + topmenuService.regionData.country_code2 + "&catalog_id=" + videoDataList.catalog_id + "&show_id=&us=";
        var signature = md5.createHash("ywVXaTzycwZ8agEs3ujx" + hlsUrlDomain);
        return $http({
            method: "GET",
            url: hlsUrlDomain + signature
        }).then((function(response) {
            deferred.resolve(response.data)
        }
        )),
        deferred.promise
    }
    ,
    showDetailsService.getQuestion = function(urlData) {
        var deferred = $q.defer();
        return $http({
            method: "GET",
            url: appConstants.baseUrl + "/catalogs/qa/metadata" + urlData
        }).then((function(response) {
            deferred.resolve(response.data)
        }
        )),
        deferred.promise
    }
    ,
    showDetailsService.submitForm = function(userdata) {
        var deferred = $q.defer();
        return $http({
            method: "POST",
            url: appConstants.baseUrl + "/catalogs/" + topmenuService.configData.params_hash2.config_params.qa.catalog_id + "/items",
            headers: {
                "Content-Type": "application/json"
            },
            transformRequest: function(data) {
                var formData = {};
                return formData.auth_token = appConstants.authToken,
                formData.access_token = topmenuService.accessToken,
                formData.content = data,
                JSON.stringify(formData)
            },
            data: userdata
        }).then((function(response) {
            deferred.resolve(response.data)
        }
        ), (function(response) {
            deferred.resolve(response)
        }
        )),
        deferred.promise
    }
    ,
    showDetailsService
}
function landingListController($window, $timeout, $scope, $routeParams, $location, landingListService, ngDialog, playlistService, appConstants, $mdDialog, topmenuService, ektaToastService, $rootScope, onesignalService, Analytics) {
    var vm = this;
    vm.isShowFollowed = !1,
    vm.isFollowDisabled = !1,
    $rootScope.isPageLoading = !0,
    $rootScope.selectedChoice = "none",
    vm.catalogList = $routeParams.catalogItem,
    vm.catalog = $routeParams.catalog,
    vm.season = $routeParams.season,
    vm.mainBannerStyle = appConstants.mainBannerStyle,
    vm.twoItemCarousel = appConstants.twoItemCarousel,
    vm.threeItemCarousel = appConstants.threeItemCarousel,
    vm.fourAndHalfItemCarousel = appConstants.fourAndHalfItemCarousel,
    vm.rightCarousel = appConstants.rightCarousel,
    vm.tagTypes = [],
    vm.twoDList = [],
    vm.itemCount = 0,
    vm.isFollowed = !1,
    $scope.dlist = [];
    var followId = "";
    vm.selectedlng = $window.localStorage.getItem("selected_language"),
    null == vm.selectedlng && (vm.selectedlng = "eng");
    var ChecknetWork = function() {
        $window.navigator.onLine || ($rootScope.isPageLoading = !1,
        ngDialog.open({
            template: '<div class="confirm-dialog"><p>Looks like something has gone wrong. Please check your network and retry!</p></div>',
            plain: !0,
            closeByNavigation: !1,
            closeByDocument: !0,
            showClose: !1,
            closeByEscape: !0
        }))
    };
    ChecknetWork();
    var loadTagtypes = function(item, friendly_id) {
        var isEpisodes = !1;
        return vm.log = [],
        topmenuService.overrideforEach(item.episodetype_tags, (function(value, key) {
            vm.log.push(value.name),
            vm.promo_order = vm.log.indexOf("promo"),
            vm.episode_order = vm.log.indexOf("episode"),
            vm.mini_clips_order = vm.log.indexOf("mini_clips")
        }
        )),
        void 0 !== friendly_id && (document.getElementById("episode").style.order = vm.episode_order,
        document.getElementById("promo").style.order = vm.promo_order,
        document.getElementById("mini_clips").style.order = vm.mini_clips_order),
        topmenuService.overrideforEach(item.episodetype_tags, (function(value, key) {
            isEpisodes = "episode" === value.name,
            landingListService.loadTypeTags(vm.catalog, vm.catalogList, value.name, friendly_id, value.item_type, value.media_list, $routeParams.catalogList, vm.selectedlng).then((function(response) {
                "list-2d" === value.item_type ? landingListService.loadseall(value.media_list, vm.selectedlng).then((function(response) {
                    vm.twoDListItem = response.data.data,
                    vm.twoDList.push({
                        title: value.display_title,
                        twoDListItem: vm.twoDListItem
                    })
                }
                )) : (vm.typeTags = response.data.data,
                vm.showFilterBydate = !0,
                "episode" === value.name ? vm.showsEpisodes || (vm.showsEpisodes = vm.typeTags) : vm.tagTypes.push({
                    title: value.display_title,
                    typeTags: vm.typeTags
                }))
            }
            ))
        }
        )),
        isEpisodes
    }
      , loadAvailableDate = function(friendly_id) {
        landingListService.getEpisodesDate(vm.catalog, vm.catalogList, friendly_id, $routeParams.catalogList).then((function(details) {
            vm.item = details.data.data,
            $scope.dlist = [],
            topmenuService.overrideforEach(vm.item.episode_dates, (function(value, key) {
                $scope.dlist.push({
                    date: new Date(value)
                })
            }
            )),
            $rootScope.isPageLoading = !1
        }
        ))
    }
      , loadSeasons = function(friendly_id) {
        landingListService.loadSeason(vm.catalog, vm.catalogList, friendly_id, $routeParams.catalogList, vm.selectedlng).then((function(response) {
            vm.seasonDetails = response.data.data,
            vm.lastItem = vm.seasonDetails.last_episode,
            loadTagtypes(vm.seasonDetails, friendly_id)
        }
        )),
        loadAvailableDate(friendly_id)
    };
    vm.copyUrl = function() {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy),
        dummy.value = $window.location.href,
        dummy.select(),
        document.execCommand("copy"),
        document.body.removeChild(dummy),
        vm.copy_text = !0
    }
    ,
    vm.showdropdownpalet = !1,
    vm.showdropdown = function() {
        vm.showdropdownpalet
    }
    ;
    var loadShowDetails = function() {
        0 != vm.itemDetails.subcategories.length ? "yes" === vm.itemDetails.subcategory_flag ? loadSeasons(vm.itemDetails.subcategories[0].friendly_id) : loadSeasons(vm.itemDetails.friendly_id) : "events" == vm.itemDetails.catalog_object.friendly_id || "other-events" == vm.itemDetails.catalog_object.friendly_id ? function(data) {
            vm.lastItem = data.last_episode,
            loadAvailableDate(),
            loadTagtypes(data)
        }(vm.itemDetails) : loadSeasons(vm.season)
    }
      , loadLandingpageData = function() {
        landingListService.loadData(vm.catalog, vm.catalogList, $routeParams.catalogList, vm.selectedlng).then((function(response) {
            $window.scrollTo(0, 0),
            function(response) {
                topmenuService.isInvalidContent(response) && $location.path("/404")
            }(response),
            vm.itemDetails = response.data.data,
            vm.lastItem = vm.itemDetails.last_episode,
            vm.mobile_banner = vm.lastItem.thumbnails.high_16_9.url,
            loadShowDetails(),
            vm.genres = vm.itemDetails.genres,
            landingListService.relatedData(vm.catalog, vm.catalogList, vm.genres, vm.selectedlng).then((function(response) {
                $window.scrollTo(0, 0),
                vm.relatedItem = response.data.data,
                vm.shortTitle = vm.catalog.split("-").join(" "),
                vm.relatedTitle = "Related " + vm.shortTitle.substr(vm.shortTitle.indexOf(" ") + 1)
            }
            )),
            vm.lastItem && (vm.lastItem.thumbnails.web_banner && vm.lastItem.thumbnails.web_banner.url ? vm.bannerImage = vm.lastItem.thumbnails.web_banner.url : vm.bannerImage = vm.lastItem.thumbnails.high_16_9.url),
            $rootScope.isPageLoading = !1,
            $rootScope.metaimage = vm.itemDetails.thumbnails.medium_4_3.url,
            $rootScope.metatitle = vm.itemDetails.meta_title,
            $rootScope.metadescription = vm.itemDetails.meta_description,
            $rootScope.metakeywords = vm.itemDetails.meta_keywords,
            $rootScope.language_value = "te",
            vm.itemDetails.dynamic_url || (vm.itemDetails.dynamic_url = $window.location.href);
            var videoItem = {};
            videoItem.content_id = vm.itemDetails.content_id,
            videoItem.catalog_id = vm.itemDetails.catalog_id,
            function(videoItem) {
                topmenuService.isLoggedIn && playlistService.isItemAdded("favourite", videoItem, topmenuService.userData.session).then((function(response) {
                    response.data.error ? vm.isFollowed = !1 : (followId = response.data.data.items[0].listitem_id,
                    vm.isFollowed = !0)
                }
                ))
            }(videoItem),
            function(videoItem) {
                topmenuService.isLoggedIn && playlistService.isItemAdded("user_ratings", videoItem, topmenuService.userData.session).then((function(response) {
                    response.data.error ? vm.isRated = !1 : vm.isRated = !0
                }
                ))
            }(videoItem)
        }
        ), (function() {
            $rootScope.isPageLoading = !1,
            $location.path("/404")
        }
        ))
    }
      , loadController = function() {
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                loadController()
            }
            ))
        }
        )) : topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
            topmenuService.regionData = response.region,
            loadLandingpageData()
        }
        ))
    };
    loadController();
    var sendTags = function() {
        onesignalService.getFollowData().then((function(response) {
            if (!response.data.error) {
                var tagObject = onesignalService.createTagObject(response.data.data.items);
                onesignalService.sendTags(tagObject).then((function(tagsent) {}
                ))
            }
        }
        ))
    }
      , resetTags = function() {
        onesignalService.getTags().then((function(tags) {
            tags && Object.keys(tags).length > 0 ? onesignalService.deleteTags(Object.keys(tags)).then((function(tagsdeleted) {
                sendTags()
            }
            )) : sendTags()
        }
        ))
    };
    vm.seasonItem = function(season) {
        return season.seo_url
    }
    ,
    vm.showItemClicked = function(listItem) {
        return listItem.seo_url
    }
    ,
    vm.itemSource = function(source) {
        $rootScope.viewingSource = source,
        $rootScope.tray_id = "NA"
    }
    ,
    vm.itemClicked = function(listItem) {
        return listItem.seo_url
    }
    ,
    vm.itemSourceLanding = function(source) {
        $rootScope.viewingSource = source,
        $rootScope.tray_id = "NA"
    }
    ,
    vm.seeAllItems = function(carouselItems, title) {
        ChecknetWork(),
        $rootScope.fromHomePage = !1,
        $rootScope.seeAllObject = carouselItems,
        $rootScope.seeAllObject.seeAllPageTitle = title,
        $rootScope.landingseeAllObject = carouselItems,
        $rootScope.landingseeAllObject.seeAllPageTitle = title,
        $window.localStorage.setItem("token", JSON.stringify($rootScope.landingseeAllObject)),
        $location.path("/" + vm.catalog + "/" + title.split(" ").join("-") + "/all")
    }
    ,
    vm.seall2dList = function(carouselItems) {
        $rootScope.fromHomePage = !1,
        $location.path("/catalog_list/" + carouselItems.friendly_id + "/all")
    }
    ;
    var window = angular.element($window);
    $scope.$watch((function() {
        return $window.innerWidth
    }
    ), (function(value) {
        $scope.windowWidth = value
    }
    ), !0),
    window.bind("resize", (function() {
        $scope.$apply()
    }
    )),
    vm.calcLimit = function() {
        return $scope.windowWidth <= 767 ? 3 : 4
    }
    ,
    vm.isCalendarOpen = !1,
    vm.isMsgOpen = !1;
    var loadCalendar = function() {
        vm.showErrorMsg = !1,
        $("openCalender").ready((function() {
            var datelist = angular.element(document.querySelector('[id="container"]')).scope().dlist;
            $("input.datepickergl").glDatePicker({
                showAlways: !1,
                hideOnClick: !1,
                specialDates: datelist,
                selectableDateRange: [{
                    from: new Date(2017,8,19),
                    to: new Date
                }],
                onClick: function(target, cell, datelist, data) {
                    target.val(datelist.getDate() + "/" + (datelist.getMonth() + 1) + "/" + datelist.getFullYear()),
                    $scope.$apply((function() {
                        $("#fromDate").val() && $("#toDate").val() && (vm.enableButton = !0)
                    }
                    ))
                }
            })
        }
        ))
    };
    vm.openCalenderDialog = function() {
        vm.isCalendarOpen = !0,
        setTimeout(loadCalendar, 100),
        vm.enableButton = !1,
        vm.isMsgOpen = !0,
        document.getElementById("pageBody").style.overflow = "hidden",
        document.getElementById("pageBody").style.position = "fixed"
    }
    ,
    vm.closeCalenderDialog = function() {
        vm.isCalendarOpen = !1,
        $("#fromDate").val(""),
        $("#toDate").val(""),
        document.getElementById("pageBody").style.overflow = "scroll",
        document.getElementById("pageBody").style.position = "initial"
    }
    ,
    $scope.$on("$destroy", (function() {
        document.getElementById("pageBody").style.overflow = "scroll",
        document.getElementById("pageBody").style.position = "initial"
    }
    ));
    var loadLoginDialog = function() {
        $scope.signInPage = !0;
        var showCloseButton, dialogConfig = {};
        "IN" == topmenuService.regionData.country_code2 ? (dialogConfig = {
            template: "app/shared/dialog/loginIndia/loginDialogIndia.html",
            controller: "loginControllerIndia",
            controllerAs: "loginCtrlIN"
        },
        showCloseButton = !1) : (dialogConfig = {
            template: "app/shared/dialog/login/loginDialog.html",
            controller: "loginController",
            controllerAs: "loginCtrl"
        },
        showCloseButton = !0),
        ngDialog.open({
            ...dialogConfig,
            className: "ngdialog-theme-default",
            scope: $scope,
            disableAnimation: !0,
            closeByNavigation: !0,
            closeByDocument: !1,
            showClose: showCloseButton
        })
    };
    function mdDialogController($scope, $mdDialog) {
        $scope.ratingDisabled = !0,
        $scope.hide = function() {
            $mdDialog.hide()
        }
        ,
        $scope.cancel = function() {
            $mdDialog.cancel()
        }
        ,
        $scope.rate = function(rating) {
            $mdDialog.hide(rating)
        }
        ,
        $scope.ratingClicked = function() {
            $scope.userRating > 0 ? $scope.ratingDisabled = !1 : $scope.ratingDisabled = !0
        }
    }
    vm.showPrompt = function(ev) {
        topmenuService.isLoggedIn ? vm.isRated ? ektaToastService.show("You have already rated this.") : $mdDialog.show({
            controller: mdDialogController,
            templateUrl: "ratingdialog.html",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: !0,
            fullscreen: $scope.customFullscreen
        }).then((function(rating) {
            !function(rating) {
                var videoItem = {};
                videoItem.content_id = vm.itemDetails.content_id,
                videoItem.catalog_id = vm.itemDetails.catalog_id,
                videoItem.user_ratings = rating.toString(),
                playlistService.addItem("user_ratings", videoItem, topmenuService.userData.session).then((function(response) {
                    if (null != response.data.data[0].user_ratings) {
                        ektaToastService.show("You posted " + rating.toString() + " star rating");
                        var updatedRatings = (parseFloat(vm.itemDetails.average_user_rating) * vm.itemDetails.no_of_user_rated + rating) / (vm.itemDetails.no_of_user_rated + 1);
                        vm.itemDetails.average_user_rating = updatedRatings.toString(),
                        vm.isRated = !0
                    } else
                        ektaToastService.show("You have already rated this.")
                }
                ))
            }(rating)
        }
        ), (function() {
            $scope.status = "You cancelled the dialog."
        }
        )) : loadLoginDialog()
    }
    ,
    vm.followShow = function(followAction) {
        if (topmenuService.isLoggedIn) {
            var videoItem = {};
            videoItem.content_id = vm.itemDetails.content_id,
            videoItem.catalog_id = vm.itemDetails.catalog_id,
            followAction ? playlistService.addItem("favourite", videoItem, topmenuService.userData.session).then((function(response) {
                var content_id;
                followId = response.data.data[0].listitem_id,
                Analytics.trackEvent("Popularity", "VideoFollow", vm.itemDetails.content_id, 1, !0, {
                    dimension2: topmenuService.userData.user_id,
                    dimension4: vm.itemDetails.title,
                    dimension6: vm.itemDetails.catalog_name,
                    metric14: 1
                }),
                resetTags(),
                content_id = "tvshow_" + videoItem.content_id,
                onesignalService.sendTopic(content_id).then((function() {}
                ))
            }
            )) : playlistService.deleteItem("favourite", followId, topmenuService.userData.session).then((function(response) {
                var content_id;
                resetTags(),
                content_id = "tvshow_" + videoItem.content_id,
                onesignalService.deleteTopic(content_id).then((function() {}
                ))
            }
            ))
        } else
            vm.isFollowed = !1,
            loadLoginDialog()
    }
    ,
    vm.isCalendarOpen = !1,
    vm.enableButton = !0,
    vm.CloseMsg = function() {
        vm.isMsgOpen = !1,
        vm.showErrorMsg = !1
    }
    ,
    vm.ifResultsLoaded = !1,
    vm.submitDate = function() {
        $rootScope.isPageLoading = !0;
        var fromDate = $("#fromDate").val()
          , toDate = $("#toDate").val();
        if (vm.filterFromDate = fromDate,
        vm.filterToDate = toDate,
        fromDate && toDate) {
            var start = moment(fromDate, "DD/MM/YYYY").format("YYYYMMDD")
              , end = moment(toDate, "DD/MM/YYYY").format("YYYYMMDD");
            end < start ? ($rootScope.isPageLoading = !1,
            vm.showErrorMsg = !0,
            vm.errormsg = "To date should be greater than From date") : (vm.isCalendarOpen = !1,
            vm.ifResultsLoaded = !0,
            "season-1" == vm.season && (0 == vm.itemDetails.subcategories.length ? vm.season = void 0 : vm.season = vm.itemDetails.subcategories[0].friendly_id),
            landingListService.dateFilter(vm.catalog, vm.catalogList, vm.season, start, end, 0).then((function(details) {
                vm.filterItem = details.data.data,
                vm.itemCount = details.data.data.total_items_count,
                $rootScope.isPageLoading = !1
            }
            ))),
            $window.scrollTo(0, 0)
        } else
            $rootScope.isPageLoading = !1,
            vm.showErrorMsg = !0,
            vm.errormsg = "Please enter dates";
        document.getElementById("pageBody").style.overflow = "scroll",
        document.getElementById("pageBody").style.position = "initial"
    }
    ;
    var index = 1;
    vm.loadMore = function() {
        if (vm.filterItem)
            if (vm.busy = !0,
            vm.filterItem.items.length < vm.itemCount) {
                if (0 == vm.filterItem.items.length)
                    return;
                page = index,
                start = moment(vm.filterFromDate, "DD/MM/YYYY").format("YYYYMMDD"),
                end = moment(vm.filterToDate, "DD/MM/YYYY").format("YYYYMMDD"),
                landingListService.dateFilter(vm.catalog, vm.catalogList, vm.season, start, end, page).then((function(response) {
                    for (var i = 0; i < response.data.data.items.length; i++)
                        vm.filterItem.items.push(response.data.data.items[i]);
                    index++,
                    vm.busy = !1
                }
                ))
            } else
                vm.busy = !1;
        var page, start, end
    }
}
profileService.$inject = ["$q", "$http", "appConstants", "topmenuService"],
angular.module("EktaApp").service("profileService", profileService),
showDetailsController.$inject = ["$rootScope", "$route", "$window", "$document", "$routeParams", "$scope", "showDetailsService", "ektaToastService", "ngDialog", "topmenuService", "playlistService", "$location", "$timeout", "appConstants", "subscriptionService", "Analytics", "ytPlayer", "loginService"],
angular.module("EktaApp").controller("showDetailsController", showDetailsController),
angular.module("EktaApp").filter("trustUrl", (function($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url)
    }
}
)),
angular.module("EktaApp").service("showDetailsService", showDetailsService),
showDetailsService.$inject = ["$http", "$q", "$location", "appConstants", "md5", "topmenuService"],
angular.module("EktaApp").controller("landingListController", landingListController),
landingListController.$inject = ["$window", "$timeout", "$scope", "$routeParams", "$location", "landingListService", "ngDialog", "playlistService", "appConstants", "$mdDialog", "topmenuService", "ektaToastService", "$rootScope", "onesignalService", "Analytics"];
var landingListService = function($q, httpService, $http, appConstants, topmenuService) {
    void 0 === topmenuService.regionData.country_code2 && (topmenuService.regionData.country_code2 = "IN");
    return {
        getEpisodesDate: function(catalog, friendlyId, season, cataloglist) {
            var deferred = $q.defer();
            if (void 0 === cataloglist)
                var urlPath = void 0 === season ? appConstants.baseUrl + "/catalogs/" + catalog + "/items/" + friendlyId + "/episode_dates.gzip?region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam : appConstants.baseUrl + "/catalogs/" + catalog + "/items/" + friendlyId + "/subcategories/" + season + "/episode_dates?region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam;
            else
                urlPath = appConstants.baseUrl + "/catalogs/" + catalog + "/items/" + cataloglist + "/subcategories/" + season + "/episode_dates?region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam;
            return $http({
                method: "GET",
                url: urlPath
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.reject(response)
            }
            )),
            deferred.promise
        },
        dateFilter: function(catalog, friendlyId, season, start, end, page) {
            var deferred = $q.defer()
              , urlPath = void 0 === season ? appConstants.baseUrl + "/catalogs/" + catalog + "/items/" + friendlyId + "/episodes.gzip?region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&start_time=" + start + "&end_time=" + end + "&page=" + page : appConstants.baseUrl + "/catalogs/" + catalog + "/items/" + friendlyId + "/subcategories/" + season + "/episodes?region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&start_time=" + start + "&end_time=" + end + "&page=" + page;
            return $http({
                method: "GET",
                url: urlPath
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.reject(response)
            }
            )),
            deferred.promise
        },
        loadData: function(catalog, friendlyId, cataloglist, selectedlng) {
            var deferred = $q.defer();
            return path = void 0 !== cataloglist ? appConstants.baseUrl + "/catalogs/" + catalog + "/items/" + cataloglist + "/seasons/" + friendlyId + ".gzip?item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam : appConstants.baseUrl + "/catalogs/" + catalog + "/items/" + friendlyId + ".gzip?item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam,
            $http({
                method: "GET",
                url: path
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.reject(response)
            }
            )),
            deferred.promise
        },
        relatedData: function(catalog, friendlyId, genres, selectedlng) {
            var deferred = $q.defer()
              , urlPath = "/catalogs/" + catalog + "/items/" + friendlyId + "/related.gzip?item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&genres=" + genres;
            return $http({
                method: "GET",
                url: appConstants.baseUrl + urlPath
            }).then((function(response) {
                response.data.data.hitUrl = urlPath,
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.reject(response)
            }
            )),
            deferred.promise
        },
        loadSeason: function(catalog, friendlyId, season, landing, selectedlng) {
            var urlPath = void 0 !== landing ? appConstants.baseUrl + "/catalogs/" + catalog + "/items/" + landing + "/subcategories/" + season + "/episodes.gzip?item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam : appConstants.baseUrl + "/catalogs/" + catalog + "/items/" + friendlyId + "/subcategories/" + season + "/episodes.gzip?item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam
              , deferred = $q.defer();
            return $http({
                method: "GET",
                url: urlPath
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.reject(response)
            }
            )),
            deferred.promise
        },
        loadTypeTags: function(catalog, friendlyId, tags, season, itemType, mediaList, cataloglist, selectedlng) {
            var deferred = $q.defer()
              , urlPath = "";
            return urlPath = "list-2d" === itemType ? appConstants.baseUrl + "/catalog_lists/" + mediaList + ".gzip?item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&nested_list_items=false&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam : void 0 === cataloglist ? void 0 === season ? appConstants.baseUrl + "/catalogs/" + catalog + "/items/" + friendlyId + "/episodes.gzip?item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&episode_type=" + tags : appConstants.baseUrl + "/catalogs/" + catalog + "/items/" + friendlyId + "/subcategories/" + season + "/episodes.gzip?item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&episode_type=" + tags : appConstants.baseUrl + "/catalogs/" + catalog + "/items/" + cataloglist + "/subcategories/" + season + "/episodes.gzip?item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&episode_type=" + tags,
            $http({
                method: "GET",
                url: urlPath
            }).then((function(response) {
                response.data.data.hitUrl = urlPath,
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.reject(response)
            }
            )),
            deferred.promise
        },
        getFollowData: function() {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/users/" + topmenuService.userData.session + "/notifications?region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.reject(response)
            }
            )),
            deferred.promise
        },
        loadseall: function(friendly_id, selectedlng) {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/catalog_lists/" + friendly_id + ".gzip?item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.reject(response)
            }
            )),
            deferred.promise
        }
    }
};
function QAController($rootScope, topmenuService, QAService, $location) {
    var vm = this;
    $rootScope.isPageLoading = !0,
    $rootScope.metatitle = "My Q&A",
    vm.pageTitle = "My Q&A";
    var userinfo = localStorage.getItem("userdata");
    vm.user = JSON.parse(userinfo);
    var loadController = function() {
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                topmenuService.loadConfig(topmenuService.accessTokenParam, topmenuService.regionData.country_code2).then((function(response) {
                    topmenuService.configData = response.data,
                    loadController()
                }
                ))
            }
            ))
        }
        )) : QAService.loadMyQA().then((function(response) {
            $rootScope.isPageLoading = !1,
            vm.QAdata = response.data.data,
            vm.pendingCount = !1,
            vm.answeredCount = !1;
            for (var i = 0; i < vm.QAdata.items.length; i++)
                "replied" == vm.QAdata.items[i].item_status ? vm.answeredCount = !0 : vm.pendingCount = !0
        }
        ), (function() {
            $rootScope.isPageLoading = !1
        }
        ))
    };
    topmenuService.isLoggedIn || vm.user ? loadController() : $location.path("/"),
    vm.currentTab = "pending",
    vm.selectTab = function(tabname) {
        vm.currentTab = tabname
    }
    ,
    vm.isTabSelected = function(tabname) {
        if (vm.currentTab === tabname)
            return !0
    }
    ,
    vm.itemClicked = function(listItem) {
        $location.path("/channels/etv-life/Q&A/" + listItem.content_id)
    }
}
landingListService.$inject = ["$q", "httpService", "$http", "appConstants", "topmenuService"],
angular.module("EktaApp").service("landingListService", landingListService),
QAController.$inject = ["$rootScope", "topmenuService", "QAService", "$location"],
angular.module("EktaApp").controller("QAController", QAController);
var QAService = function($q, appConstants, topmenuService, $http, $location) {
    return {
        loadMyQA: function() {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/users/" + topmenuService.userData.session + "/catalogs/" + topmenuService.configData.params_hash2.config_params.qa.catalog_id + "/items.gzip?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&region=" + topmenuService.regionData.country_code2 + "&sort_by=item_order,desc",
                params: {
                    from: 0,
                    page_size: 50,
                    page: 0,
                    start_count: 0
                }
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.reject(response),
                $location.path("/Something-went-wrong")
            }
            )),
            deferred.promise
        }
    }
};
function preferenceController($window, preferenceService, topmenuService, $location, ektaToastService, $scope, $rootScope, appConstants) {
    $window.scrollTo(0, 0),
    $rootScope.metatitle = "Preferences",
    $rootScope.metadescription = "",
    $rootScope.metaimage = appConstants.appLogo;
    var vm = this;
    vm.checkedData = [],
    vm.validateCheckedData = [],
    vm.selectedGenres = [],
    vm.followedGenres = [],
    vm.showSerials = [],
    vm.followedShows = [],
    vm.detailsLoaded = !1,
    $rootScope.isPageLoading = !0;
    var userinfo = localStorage.getItem("userdata");
    vm.user = JSON.parse(userinfo);
    var loadController = function() {
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                loadController()
            }
            ))
        }
        )) : topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                preferenceService.loadData().then((function(response) {
                    var preferenceData;
                    vm.preference = response.data,
                    topmenuService.overrideforEach(vm.preference.catalog_list_items, (function(value, key) {
                        topmenuService.overrideforEach(value.catalog_list_items, (function(val, key) {
                            val.checked = !1
                        }
                        ))
                    }
                    )),
                    preferenceData = vm.preference,
                    preferenceService.loadGenres(topmenuService.userData.session).then((function(response) {
                        vm.genres = response.data,
                        topmenuService.overrideforEach(vm.genres.genres, (function(item, key) {
                            topmenuService.overrideforEach(preferenceData.catalog_list_items, (function(value, key) {
                                topmenuService.overrideforEach(value.catalog_list_items, (function(val, key) {
                                    val.friendly_id == item && (val.checked = !0,
                                    val.isgray = !0,
                                    vm.checkedData.push(val),
                                    vm.validateCheckedData.push(val))
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    function(preferenceData) {
                        preferenceService.loadShowSerial(topmenuService.userData.session).then((function(response) {
                            $rootScope.isPageLoading = !1,
                            vm.showsSerials = response.data,
                            topmenuService.overrideforEach(vm.showsSerials.items, (function(item, key) {
                                topmenuService.overrideforEach(preferenceData.catalog_list_items, (function(value, key) {
                                    topmenuService.overrideforEach(value.catalog_list_items, (function(val, key) {
                                        val.friendly_id == item.friendly_id && (val.checked = !0,
                                        val.isgray = !0,
                                        vm.checkedData.push(val),
                                        vm.validateCheckedData.push(val))
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }(vm.preference),
                    vm.detailsLoaded = !0
                }
                ))
            }
            ))
        }
        ))
    };
    topmenuService.isLoggedIn || vm.user ? loadController() : $location.path("/");
    vm.IfChecked = function(value) {
        !function(value) {
            if (value.checked)
                vm.checkedData.push(value);
            else {
                var index = vm.checkedData.indexOf(value);
                vm.checkedData.splice(index, 1)
            }
        }(value),
        vm.validateCheckedData.length == vm.checkedData.length ? (vm.validateCheckedData || vm.checkedData || (vm.duplicate = !0),
        function() {
            0 == vm.validateCheckedData.length && 0 == vm.checkedData.length && (vm.duplicate = !0);
            for (var i = 0; i < vm.checkedData.length; i++)
                for (var j = 0; j < vm.validateCheckedData.length; j++) {
                    if (vm.checkedData[i].friendly_id === vm.validateCheckedData[j].friendly_id) {
                        vm.duplicate = !0;
                        break
                    }
                    vm.duplicate = !1
                }
        }(),
        vm.enableButton = !vm.duplicate) : vm.enableButton = !0
    }
    ,
    vm.myPreference = function() {
        topmenuService.overrideforEach(vm.checkedData, (function(value, key) {
            "show" != value.theme ? vm.selectedGenres.push(value.friendly_id) : vm.showSerials.push({
                content_id: value.content_id,
                catalog_id: value.catalog_id,
                delete_existing_items: "false",
                delete_from_lists: ["preferences"]
            })
        }
        )),
        preferenceService.setGenres(vm.selectedGenres, topmenuService.userData.session).then((function(response) {
            200 == response.status && preferenceService.setShowSerials(vm.showSerials, topmenuService.userData.session).then((function(response) {
                200 == response.status && (ektaToastService.show("Updated Successfully"),
                setTimeout(vm.goHome, 1500))
            }
            ))
        }
        ))
    }
    ,
    vm.goHome = function() {
        $location.path("/"),
        document.location.href = "/"
    }
    ;
    vm.refresh = function() {
        $window.location.reload(),
        $location.path("/"),
        $scope.closeThisDialog(0)
    }
}
QAService.$inject = ["$q", "appConstants", "topmenuService", "$http", "$location"],
angular.module("EktaApp").service("QAService", QAService),
preferenceController.$inject = ["$window", "preferenceService", "topmenuService", "$location", "ektaToastService", "$scope", "$rootScope", "appConstants"],
angular.module("EktaApp").controller("preferenceController", preferenceController);
var preferenceService = function($q, httpService, $http, appConstants, topmenuService) {
    return {
        loadData: function(friendlyId) {
            var deferred = $q.defer()
              , urlpath = "/catalog_lists/preferences.gzip?region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam;
            return httpService.getData(urlpath).then((function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        setGenres: function(genres, sessionId) {
            var deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/" + sessionId + "/account.gzip?region=" + topmenuService.regionData.country_code2,
                data: {
                    auth_token: appConstants.authToken,
                    access_token: topmenuService.accessToken,
                    user: {
                        genres: genres
                    }
                }
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        loadGenres: function(sessionId) {
            var deferred = $q.defer()
              , urlpath = "/users/" + sessionId + "/account.gzip?region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam;
            return httpService.getData(urlpath).then((function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        setShowSerials: function(value, sessionId) {
            var deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/" + sessionId + "/playlists/favourite/list.gzip?region=" + topmenuService.regionData.country_code2,
                data: {
                    auth_token: appConstants.authToken,
                    access_token: topmenuService.accessToken,
                    delete_existing_items: "false",
                    delete_from_lists: ["preferences"],
                    listitems: value
                }
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        loadShowSerial: function(sessionId) {
            var deferred = $q.defer()
              , urlpath = "/users/" + sessionId + "/playlists/favourite/listitems.gzip?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&region=" + topmenuService.regionData.country_code2;
            return httpService.getData(urlpath).then((function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        }
    }
};
preferenceService.$inject = ["$q", "httpService", "$http", "appConstants", "topmenuService"],
angular.module("EktaApp").service("preferenceService", preferenceService);
var catalogController = function($window, catalogService, $routeParams, $location, appConstants, $rootScope, topmenuService, ngDialog) {
    $window.scrollTo(0, 0);
    var vm = this
      , itemCount = 0;
    vm.catalogname = $routeParams.catalog,
    $rootScope.isPageLoading = !0;
    var tabSource = ""
      , path = $location.path().split("/")[1].replace("-", "").toLowerCase();
    "tvshows" == path && ($rootScope.selectedChoice = "TV Shows",
    $rootScope.metadescription = "Experience the heart of ETV thrilling Telugu serials. On ETV Win, you may catch up on the serials you love, watch the most recent episodes, and keep up with the most well-liked Telugu serials On ETV Win"),
    "winexclusive" == path && ($rootScope.selectedChoice = "Exclusives"),
    "telugumovies" == path && ($rootScope.selectedChoice = "Movies"),
    "news" == path && ($rootScope.selectedChoice = "News"),
    "health" == path && ($rootScope.selectedChoice = "Health",
    $rootScope.metadescription = "Make your health a priority with ETV Win's Health Section. Access a variety of information on wellness, nutrition, mental health, and fitness that is expert-led. Watch workout videos, mindfulness exercises, and educational health documentaries only on ETV Win to support your efforts to live a better life."),
    vm.mainBannerStyle = appConstants.mainBannerStyle,
    $rootScope.metatitle = $routeParams.catalog.replace("-", " ").toUpperCase(),
    "etv-exclusive" === vm.catalogname ? vm.isExclusive = !0 : vm.isExclusive = !1,
    vm.selectedlng = $window.localStorage.getItem("selected_language"),
    null == vm.selectedlng && (vm.selectedlng = "eng");
    $window.navigator.onLine || ($rootScope.isPageLoading = !1,
    ngDialog.open({
        template: '<div class="confirm-dialog"><p>Looks like something has gone wrong. Please check your network and retry!</p></div>',
        plain: !0,
        closeByNavigation: !1,
        closeByDocument: !0,
        showClose: !1,
        closeByEscape: !0
    }));
    var loadController = function() {
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                loadController()
            }
            ))
        }
        )) : catalogService.loadData(vm.catalogname, $rootScope.catalogTheme, vm.selectedlng, 0).then((function(response) {
            $window.scrollTo(0, 0),
            function(response) {
                topmenuService.isInvalidContent(response.data) && $location.path("/404"),
                topmenuService.isInvalidToken(response.data) && (topmenuService.accessToken = "",
                $window.location.reload())
            }(response),
            $rootScope.isPageLoading = !1,
            response.data.error && topmenuService.isInvalidToken(response.data) ? (topmenuService.accessToken = "",
            loadController()) : (vm.cataloglist = response.data.catalog_list_items,
            itemCount = response.data.total_items_count,
            tabSource = response.data.display_title)
        }
        ))
    };
    loadController(),
    vm.seeAllItems = function(carouselItems) {
        $rootScope.fromHomePage = !1,
        "shows" === vm.catalogname || "serials" === vm.catalogname || "events" === vm.catalogname || "tv-shows" === vm.catalogname ? $location.path(carouselItems.seo_url) : "win-exclusive-movies" === carouselItems.friendly_id ? (carouselItems.friendly_id = "win-exclusive-movies",
        $location.path("/" + vm.catalogname + "/" + carouselItems.friendly_id)) : "win-exclusive" === vm.catalogname || "telugu-movies" === vm.catalogname || "health" === vm.catalogname || "news" === vm.catalogname ? $location.path("/" + vm.catalogname + "/" + carouselItems.friendly_id) : $location.path(carouselItems.seo_url)
    }
    ,
    vm.itemClicked = function(listItem) {
        var movieItem = listItem.media_type;
        return $window.localStorage.setItem("movie_media_type", JSON.stringify(movieItem)),
        listItem.seo_url
    }
    ,
    vm.itemSource = function(source, trayId) {
        $rootScope.sourceTab = tabSource,
        $rootScope.viewingSource = source,
        $rootScope.tray_id = trayId
    }
    ;
    var index = 1;
    vm.loadMore = function() {
        if (vm.cataloglist)
            if (vm.busy = !0,
            vm.cataloglist.length < itemCount) {
                if (0 == vm.cataloglist.length)
                    return;
                page = index,
                catalogService.loadData(vm.catalogname, $rootScope.catalogTheme, vm.selectedlng, page).then((function(response) {
                    for (var i = 0; i < response.data.catalog_list_items.length; i++)
                        vm.cataloglist.push(response.data.catalog_list_items[i]);
                    index++,
                    vm.busy = !1
                }
                ))
            } else
                vm.busy = !1;
        var page
    }
    ,
    vm.mainBannerStyle = appConstants.mainBannerStyle,
    vm.oneItemCarousel = appConstants.oneItemCarousel,
    vm.twoItemCarousel = appConstants.exclusiveItemCarousel,
    vm.threeItemCarousel = appConstants.threeItemCarousel,
    vm.fourItemCarousel = appConstants.fourItemCarousel,
    vm.sixItemCarousel = appConstants.sixItemCarousel,
    vm.sixAndHalfItemCarousel = appConstants.sixAndHalfItemCarousel,
    vm.eightItemCarousel = appConstants.eightItemCarousel,
    vm.eightAndHalfItemCarousel = appConstants.eightAndHalfItemCarousel
};
catalogController.$inject = ["$window", "catalogService", "$routeParams", "$location", "appConstants", "$rootScope", "topmenuService", "ngDialog"],
angular.module("EktaApp").controller("catalogController", catalogController);
var tvactiveController = function($scope, $window, topmenuService, ngDialog, $location, $rootScope, httpService, $http, appConstants) {
    var vm = this;
    $rootScope.metatitle = "Activate TV",
    vm.device_code = $location.search().device_code;
    var loadController = function() {
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                loadController()
            }
            ))
        }
        )) : topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                if (topmenuService.regionData = response.region,
                topmenuService.isLoggedIn)
                    ngDialog.close(),
                    vm.tvactive = !0,
                    vm.tvVerified = !0,
                    vm.device_code && vm.tvLogin(),
                    setTimeout((()=>{
                        document.getElementById("first_char")?.focus()
                    }
                    ), 300);
                else {
                    $scope.signInPage = !0;
                    var showCloseButton, dialogConfig = {};
                    vm.device_code && $window.localStorage.setItem("tvLogin", !0),
                    "IN" == topmenuService.regionData.country_code2 ? (dialogConfig = {
                        template: "app/shared/dialog/loginIndia/loginDialogIndia.html",
                        controller: "loginControllerIndia",
                        controllerAs: "loginCtrlIN"
                    },
                    showCloseButton = !1) : (dialogConfig = {
                        template: "app/shared/dialog/login/loginDialog.html",
                        controller: "loginController",
                        controllerAs: "loginCtrl"
                    },
                    showCloseButton = !0),
                    ngDialog.open({
                        ...dialogConfig,
                        className: "ngdialog-theme-default",
                        scope: $scope,
                        disableAnimation: !0,
                        closeByNavigation: !0,
                        closeByDocument: !0,
                        showClose: showCloseButton
                    }),
                    vm.tvactive = !1
                }
            }
            ))
        }
        ))
    };
    loadController(),
    vm.tvLogin = function() {
        var userdata;
        if (!(userdata = angular.copy(vm.verifytvForm)))
            return vm.tvMessage = "Please enter code",
            vm.tvVerified = !1,
            void (vm.verified = !1);
        if ("" == userdata.first_char || "" == userdata.second_char || "" == userdata.third_char || "" == userdata.fourth_char || "" == userdata.fifth_char || "" == userdata.sixth_char || null == userdata.first_char || null == userdata.second_char || null == userdata.third_char || null == userdata.fourth_char || null == userdata.fifth_char || null == userdata.sixth_char)
            return vm.tvMessage = "Please enter all the digits",
            vm.tvVerified = !1,
            void (vm.verified = !1);
        if (vm.device_code)
            var token = vm.device_code;
        else
            token = userdata.first_char + userdata.second_char + userdata.third_char + userdata.fourth_char + userdata.fifth_char + userdata.sixth_char;
        session_id = topmenuService.userData.session,
        user = {
            token: token,
            session_id: session_id
        },
        data = {
            auth_token: appConstants.authToken,
            access_token: topmenuService.accessToken,
            user: user,
            region: topmenuService.regionData.country_code2
        },
        $http({
            method: "post",
            url: appConstants.baseUrl + "/generate_session_tv",
            data: data
        }).then((function(response) {
            vm.tvMessage = response.data.data.message,
            vm.tvVerified = !1,
            vm.verified = !0,
            setTimeout(vm.goHome, 2e3)
        }
        ), (function(response) {
            vm.tvMessage = response.data.error.message,
            vm.tvVerified = !1,
            vm.verified = !1,
            vm.device_code && setTimeout(vm.goHome, 2e3)
        }
        ))
    }
    ,
    window.checkDeletedActivateKey = function(backIndex) {
        vm.verifytvForm[backIndex] = ""
    }
    ,
    vm.goHome = function() {
        $location.path("/"),
        document.location.href = "/"
    }
};
tvactiveController.$inject = ["$scope", "$window", "topmenuService", "ngDialog", "$location", "$rootScope", "httpService", "$http", "appConstants"],
angular.module("EktaApp").controller("tvactiveController", tvactiveController);
var subscriptionPlansViewController = function($scope, $window, topmenuService, ngDialog, $rootScope, httpService, $http, appConstants, subscriptionService) {
    var vm = this;
    $window.scrollTo(0, 0),
    vm.selectedPlan = "",
    $rootScope.metatitle = "SUBSCRIPTION",
    $rootScope.selectedChoice = "none",
    $rootScope.metadescription = "Unlock a world of entertainment with a subscription to ETV Win Subscribe now for exclusive access to a vast library of movies, TV series, and ETV Win originals content. Join the streaming revolution and start enjoying high-quality entertainment";
    var location = window.location.href.split("/")[3];
    vm.userdata = localStorage.getItem("userdata"),
    "subscription-plans" == location && vm.userdata && "null" !== vm.userdata && ($window.location.href = "/profile?tab=subscription");
    topmenuService.getAccessToken().then((function(response) {
        topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
        topmenuService.accessToken = response.data.access_token,
        topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
            topmenuService.regionData = response.region
        }
        )),
        subscriptionService.loadPlans().then((function(response) {
            $rootScope.isPageLoading = !1,
            vm.itemslist = response.data.items,
            function(plans) {
                if (vm.planPricing = plans.map((plan=>{
                    const pricing = plan.plans.map((item=>({
                        amount: `${item.currency_symbol} ${item.price}`,
                        offerDescription: item.offer_description,
                        duration: `Per ${item.title}`,
                        strikedPrice: item.striked_price ? `${item.currency_symbol} ${item.striked_price}` : "",
                        id: item.id,
                        freeDays: item.message,
                        type: plan.display_title,
                        currency_symbol: item.currency_symbol,
                        price: item.price,
                        currency: item.currency,
                        description: item.description,
                        categoryPlanId: plan.category_id,
                        category_id: plan.category_id,
                        catalog_id: plan.catalog_id,
                        category: plan.category,
                        info_message: item.info_message,
                        sub_message: item.sub_message
                    })));
                    return {
                        title: plan.display_title,
                        pricing: pricing
                    }
                }
                )),
                vm.selectedPlan = vm.planPricing[0].pricing[0],
                vm.planCategories = plans.map((plan=>plan.display_title)),
                vm.planCategories.unshift("Features"),
                1 == plans.length)
                    return void (vm.planDetails = plans[0].pack_details);
                const basicPackDetails = plans[0].pack_details
                  , premiumPackDetails = plans[1].pack_details;
                vm.planDetails = basicPackDetails.map((plan=>({
                    ...plan,
                    premiumValue: premiumPackDetails.find((item=>item.info.trim() === plan.info.trim()))?.value
                })))
            }(response.data.items)
        }
        ))
    }
    )),
    vm.openSubscriptions = function() {
        localStorage.setItem("subscriptionFooterTab", "true"),
        function() {
            $scope.signoutalert = !1,
            $scope.signInPage = !0;
            var showCloseButton, dialogConfig = {};
            "IN" == topmenuService.regionData.country_code2 ? (dialogConfig = {
                template: "app/shared/dialog/loginIndia/loginDialogIndia.html",
                controller: "loginControllerIndia",
                controllerAs: "loginCtrlIN"
            },
            showCloseButton = !1) : (dialogConfig = {
                template: "app/shared/dialog/login/loginDialog.html",
                controller: "loginController",
                controllerAs: "loginCtrl"
            },
            showCloseButton = !0),
            ngDialog.open({
                ...dialogConfig,
                className: "ngdialog-theme-default",
                scope: $scope,
                disableAnimation: !0,
                closeByNavigation: !0,
                closeByDocument: !1,
                showClose: showCloseButton
            })
        }()
    }
};
subscriptionPlansViewController.$inject = ["$scope", "$window", "topmenuService", "ngDialog", "$rootScope", "httpService", "$http", "appConstants", "subscriptionService"],
angular.module("EktaApp").controller("subscriptionPlansViewController", subscriptionPlansViewController);
var redeemCodeController = function($scope, $window, topmenuService, ngDialog, subscriptionService, $rootScope, httpService, $http, appConstants, $location) {
    var vm = this;
    $window.scrollTo(0, 0),
    $rootScope.isPageLoading = !0,
    $rootScope.metatitle = "Redeem Code",
    $rootScope.selectedChoice = "none",
    vm.applyCoupon = !1,
    vm.promocode = "",
    vm.redeemConfirm = !1,
    vm.showConfirmation = !1,
    vm.IsError = !1;
    var loadController = function() {
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                loadController()
            }
            ))
        }
        )) : topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                topmenuService.isLoggedIn ? (ngDialog.close(),
                vm.applyCoupon = !0,
                $rootScope.isPageLoading = !1) : (vm.applyCoupon = !1,
                $rootScope.isPageLoading = !1)
            }
            ))
        }
        ))
    };
    loadController(),
    vm.signIn = function() {
        $scope.signInPage = !0;
        var showCloseButton, dialogConfig = {};
        "IN" == topmenuService.regionData.country_code2 ? (dialogConfig = {
            template: "app/shared/dialog/loginIndia/loginDialogIndia.html",
            controller: "loginControllerIndia",
            controllerAs: "loginCtrlIN"
        },
        showCloseButton = !1) : (dialogConfig = {
            template: "app/shared/dialog/login/loginDialog.html",
            controller: "loginController",
            controllerAs: "loginCtrl"
        },
        showCloseButton = !0),
        ngDialog.open({
            ...dialogConfig,
            className: "ngdialog-theme-default",
            scope: $scope,
            disableAnimation: !0,
            closeByNavigation: !0,
            closeByDocument: !0,
            showClose: showCloseButton
        })
    }
    ,
    vm.applyPromo = function() {
        subscriptionService.redeemCoupon(vm.promocode).then((function(response) {
            response.data.error ? (vm.IsError = !0,
            vm.errorMsg = response.data.error.message) : (vm.IsError = !1,
            vm.couponMessage = response.data.data.message,
            vm.redeemConfirm = !0,
            vm.showConfirmation = !0,
            $rootScope.showSubscriptionIcon = !1)
        }
        ))
    }
    ,
    vm.proceedNext = function() {
        $location.path("/home")
    }
};
redeemCodeController.$inject = ["$scope", "$window", "topmenuService", "ngDialog", "subscriptionService", "$rootScope", "httpService", "$http", "appConstants", "$location"],
angular.module("EktaApp").controller("redeemCodeController", redeemCodeController),
function() {
    var catalogService = function($q, httpService, appConstants, topmenuService) {
        return {
            loadData: function(friendlyId, theme, selectedlng, page) {
                var deferred = $q.defer()
                  , pagesize = screen.height <= 850 ? 4 : 5
                  , queryParam = friendlyId;
                "catalog" === theme && (queryParam += "-home"),
                void 0 === topmenuService.regionData.country_code2 && (topmenuService.regionData.country_code2 = "IN");
                var urlpath = "/catalog_lists/" + queryParam + ".gzip?item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&page=" + page + "&page_size=" + pagesize + "&npage_size=10";
                return httpService.getData(urlpath).then((function(response) {
                    deferred.resolve(response)
                }
                )),
                deferred.promise
            }
        }
    };
    catalogService.$inject = ["$q", "httpService", "appConstants", "topmenuService"],
    angular.module("EktaApp").service("catalogService", catalogService)
}();
var seeAllController = function($window, appConstants, seeAllServices, $routeParams, $location, $rootScope, $scope, topmenuService, ngDialog) {
    $window.scrollTo(0, 0);
    var vm = this;
    vm.pageLoaded = !1,
    $rootScope.isPageLoading = !0,
    $rootScope.selectedChoice = "none",
    vm.catalogname = $routeParams.pageName,
    vm.routeFriendlyId = $routeParams.friendlyId,
    vm.fourItemCarousel = appConstants.fourItemCarousel,
    vm.sixItemCarousel = appConstants.sixItemCarousel,
    vm.eightItemCarousel = appConstants.eightItemCarousel,
    vm.sixAndHalfItemCarousel = appConstants.sixAndHalfItemCarousel,
    vm.eightAndHalfItemCarousel = appConstants.eightAndHalfItemCarousel;
    var itemCount = 0
      , hitUrl = null;
    $rootScope.metatitle = "All",
    $rootScope.metadescription = "",
    $rootScope.metaimage = appConstants.appLogo;
    var pageTitle = ""
      , isSessionBased = !1;
    vm.hideDropdown = !1,
    vm.currentFriendlyId = "";
    var dropdownChannelKey = localStorage.getItem("SublistKey");
    vm.SubListTitle = localStorage.getItem("SublistTitle"),
    localStorage.removeItem("SublistTitle"),
    "home" == $routeParams.pageName ? $routeParams.friendlyId = "featured-" + $routeParams.friendlyId : "shows" == $routeParams.pageName ? $routeParams.friendlyId = "shows-" + $routeParams.friendlyId : "serials" == $routeParams.pageName ? $routeParams.friendlyId = "serials-" + $routeParams.friendlyId : "tv-shows" == $routeParams.pageName && "before-tv" == $routeParams.friendlyId ? $routeParams.friendlyId = "featured-" + $routeParams.friendlyId : "tv-shows" == $routeParams.pageName && "recommended-episodes" == $routeParams.friendlyId ? $routeParams.friendlyId = "tv-shows-" + $routeParams.friendlyId : "telugu-movies" == $routeParams.pageName && "exclusive-movies" == $routeParams.friendlyId ? $routeParams.friendlyId = "win-" + $routeParams.friendlyId : "telugu-movies" == $routeParams.pageName && "win-exclusive-movies" != $routeParams.friendlyId ? $routeParams.friendlyId = "movies-" + $routeParams.friendlyId : "events" == $routeParams.pageName ? $routeParams.friendlyId = "events-" + $routeParams.friendlyId : "recipes" == $routeParams.pageName ? $routeParams.friendlyId = "recipes-" + $routeParams.friendlyId : "win-exclusive" == $routeParams.pageName ? $routeParams.friendlyId = "exclusive-" + $routeParams.friendlyId : "win-exclusive" == $routeParams.pageName && "trending" == $routeParams.friendlyId ? $routeParams.friendlyId = "etv-exclusive-" + $routeParams.friendlyId : $routeParams.friendlyId = $routeParams.friendlyId,
    vm.selectedlng = $window.localStorage.getItem("selected_language"),
    null == vm.selectedlng && (vm.selectedlng = "eng");
    var ChecknetWork = function() {
        $window.navigator.onLine || ngDialog.open({
            template: '<div class="confirm-dialog"><p>Looks like something has gone wrong. Please check your network and retry!</p></div>',
            plain: !0,
            closeByNavigation: !1,
            closeByDocument: !0,
            showClose: !1,
            closeByEscape: !0
        })
    };
    ChecknetWork();
    var checkdataValidity = function(response) {
        topmenuService.isInvalidContent(response.data) && $location.path("/404")
    };
    vm.getClearFix6Images = function(index) {
        return index % 6 == 0 ? "left" : "none"
    }
    ,
    vm.getClearFix8Images = function(index) {
        return screen.width <= 560 ? index % 3 == 0 ? "left" : "none" : index % 8 == 0 ? "left" : "none"
    }
    ,
    vm.getClearFix4Images = function(index) {
        return index % 4 == 0 ? "left" : "none"
    }
    ;
    var loadCategorySeeall = function(urlPath) {
        seeAllServices.loadCategorySeaall(urlPath, 24, 0, 0).then((function(response) {
            $window.scrollTo(0, 0),
            checkdataValidity(response),
            $rootScope.isPageLoading = !1,
            vm.pageLoaded = !0,
            response.data.error && topmenuService.isInvalidToken(response.data) ? (topmenuService.accessToken = "",
            loadController()) : response.data.error || (vm.subSeeAll = !1,
            function(response) {
                vm.subCategories = seeAllServices.IsSubcategory($rootScope.fromHomePage, response.data.layout_type, window.location.href.split("/")[5]),
                response.data.catalog_list_items || (response.data.catalog_list_items = response.data.items),
                itemCount = response.data.total_items_count,
                vm.seeAllItems = response.data,
                vm.seeAllItems.display_title = pageTitle
            }(response))
        }
        ))
    }
      , loadController = function() {
        isSessionBased = angular.copy($rootScope.isSessionBased),
        $rootScope.isSessionBased = !1,
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                loadController()
            }
            ))
        }
        )) : $rootScope.seeAllObject ? (pageTitle = angular.copy($rootScope.seeAllObject.seeAllPageTitle),
        $rootScope.seeAllObject.noPage,
        hitUrl = $rootScope.seeAllObject.hitUrl.replace(appConstants.baseUrl, ""),
        loadCategorySeeall(hitUrl),
        $rootScope.seeAllObject = null,
        vm.display_title = $routeParams.friendlyId.split("-").join(" "),
        vm.pageLoaded = !0) : ($rootScope.eventsitem = $window.localStorage.getItem("token"),
        $rootScope.landingseeAllObject = JSON.parse($rootScope.eventsitem),
        "Video-Songs" !== vm.routeFriendlyId && "Best-Scenes" !== vm.routeFriendlyId || ($rootScope.eventsitemmovie = $window.localStorage.getItem("moviesHiturl"),
        $rootScope.landingseeAllObjectmovie = JSON.parse($rootScope.eventsitemmovie),
        $rootScope.landingseeAllObject.hitUrl = $rootScope.landingseeAllObjectmovie,
        $rootScope.eventsitemtitle = $window.localStorage.getItem("moviesTitle"),
        $rootScope.landingseeAllObjectitle = JSON.parse($rootScope.eventsitemtitle),
        $rootScope.landingseeAllObject.seeAllPageTitle = $rootScope.landingseeAllObjectitle),
        "Mini-Clips" === vm.routeFriendlyId || "episodes" === vm.routeFriendlyId || "Video-Songs" === vm.routeFriendlyId || "Best-Scenes" === vm.routeFriendlyId ? (pageTitle = angular.copy($rootScope.landingseeAllObject.seeAllPageTitle),
        hitUrl = $rootScope.landingseeAllObject.hitUrl.replace(appConstants.baseUrl, ""),
        loadCategorySeeall(hitUrl),
        vm.display_title = $routeParams.friendlyId.split("-").join(" "),
        vm.pageLoaded = !0,
        $rootScope.landingseeAllObject = null) : "watch-history" === $routeParams.friendlyId ? seeAllServices.loadContinueWatchingItems(topmenuService.userData.session, 24, 0, 0, vm.selectedlng).then((function(response) {
            $window.scrollTo(0, 0),
            checkdataValidity(response),
            $rootScope.isPageLoading = !1,
            vm.pageLoaded = !0,
            response.data.error && topmenuService.isInvalidToken(response.data) ? (topmenuService.accessToken = "",
            loadController()) : response.data.error || (vm.subSeeAll = !1,
            function(response) {
                vm.subCategories = seeAllServices.IsSubcategory($rootScope.fromHomePage, response.data.layout_type, window.location.href.split("/")[5]),
                vm.seeAllContinueWatchingItems = response.data,
                vm.currentFriendlyId = $routeParams.friendlyId,
                itemCount = response.data.total_items_count
            }(response))
        }
        )) : ($routeParams.seasons && ($routeParams.channelID = $routeParams.seasons),
        seeAllServices.loadSeeAllItems($routeParams.friendlyId, 24, 0, 0, isSessionBased, vm.selectedlng, $routeParams.categoryItem, $routeParams.channelID, dropdownChannelKey).then((function(response) {
            $window.scrollTo(0, 0),
            checkdataValidity(response),
            $rootScope.isPageLoading = !1,
            vm.pageLoaded = !0,
            response.data.error && topmenuService.isInvalidToken(response.data) ? (topmenuService.accessToken = "",
            loadController()) : response.data.error || (vm.subSeeAll = !1,
            function(response) {
                if (vm.subCategories = seeAllServices.IsSubcategory($rootScope.fromHomePage, response.data.layout_type, window.location.href.split("/")[5]),
                vm.seeAllItems = response.data,
                itemCount = response.data.total_items_count,
                $routeParams.channelID) {
                    var selectedFilter = response.data.available_filters.find((item=>item.value === $routeParams.channelID));
                    vm.SubListTitle = selectedFilter.title
                }
            }(response))
        }
        ))))
    };
    loadController(),
    vm.itemClicked = function(listItem) {
        return listItem.seo_url
    }
    ,
    vm.selectItem = function(item, source, trayId) {
        $rootScope.videoPlayTime = item.play_back_time_msec,
        $rootScope.videoPlayTimeYT = item.play_back_time_msec,
        $rootScope.viewingSource = source,
        $rootScope.tray_id = trayId
    }
    ,
    vm.itemSource = function(source, trayId) {
        $rootScope.viewingSource = source,
        $rootScope.tray_id = trayId
    }
    ,
    vm.subListClicked = function(sublistItem) {
        ChecknetWork(),
        localStorage.setItem("SublistKey", sublistItem.key),
        localStorage.setItem("SublistTitle", sublistItem.title);
        var pageLocation = window.location.href.split("/")[3]
          , channelName = window.location.href.split("/")[4];
        if ("channels" == pageLocation)
            $location.path("/" + pageLocation + "/" + channelName + "/" + $routeParams.categoryItem + "/" + sublistItem.value);
        else {
            var path = "/" + pageLocation + "/" + $routeParams.friendlyId + "/" + sublistItem.value;
            $location.path(path)
        }
        vm.hideDropdown = !1
    }
    ,
    vm.allItems = function(carouselItems) {
        return carouselItems.seo_url
    }
    ;
    var index = 1;
    vm.loadMore = function() {
        if (vm.seeAllItems || vm.seeAllContinueWatchingItems)
            if (vm.busy = !0,
            "watch-history" === $routeParams.friendlyId)
                if (vm.seeAllContinueWatchingItems.items.length < itemCount)
                    if (hitUrl)
                        ;
                    else {
                        if (0 == vm.seeAllContinueWatchingItems.items.length)
                            return;
                        from = vm.seeAllContinueWatchingItems.items.length,
                        page = index,
                        seeAllServices.loadContinueWatchingItems(topmenuService.userData.session, 24, from, page, vm.selectedlng).then((function(response) {
                            for (var i = 0; i < response.data.items.length; i++)
                                vm.seeAllContinueWatchingItems.items.push(response.data.items[i]);
                            index++,
                            vm.busy = !1
                        }
                        ))
                    }
                else
                    vm.busy = !1;
            else if (vm.seeAllItems.catalog_list_items.length < itemCount)
                if (hitUrl)
                    !function(from, page) {
                        seeAllServices.loadCategorySeaall(hitUrl, 24, from, page).then((function(response) {
                            response.data.catalog_list_items || (response.data.catalog_list_items = response.data.items);
                            for (var i = 0; i < response.data.catalog_list_items.length; i++)
                                vm.seeAllItems.catalog_list_items.push(response.data.catalog_list_items[i]);
                            index++,
                            vm.busy = !1
                        }
                        ))
                    }(vm.seeAllItems.catalog_list_items.length, index);
                else {
                    if (0 == vm.seeAllItems.catalog_list_items.length)
                        return;
                    !function(friendlyId, from, page) {
                        $routeParams.seasons && ($routeParams.channelID = $routeParams.seasons),
                        seeAllServices.loadSeeAllItems(friendlyId, 24, from, page, isSessionBased, vm.selectedlng, $routeParams.categoryItem, $routeParams.channelID, dropdownChannelKey).then((function(response) {
                            for (var i = 0; i < response.data.catalog_list_items.length; i++)
                                vm.seeAllItems.catalog_list_items.push(response.data.catalog_list_items[i]);
                            index++,
                            vm.busy = !1
                        }
                        ))
                    }($routeParams.friendlyId, vm.seeAllItems.catalog_list_items.length, index)
                }
            else
                vm.busy = !1;
        var from, page
    }
};
seeAllController.$inject = ["$window", "appConstants", "seeAllServices", "$routeParams", "$location", "$rootScope", "$scope", "topmenuService", "ngDialog"],
angular.module("EktaApp").controller("seeAllController", seeAllController);
var seeAllServices = function($q, $http, appConstants, topmenuService) {
    void 0 === topmenuService.regionData.country_code2 && (topmenuService.regionData.country_code2 = "IN");
    return {
        loadSeeAllItems: function(friendlyId, count, from, page, isSessionBased, selectedlng, categoryItem, dropdownChannelValue, dropdownChannelKey) {
            var deferred = $q.defer();
            if (void 0 !== categoryItem)
                var urlpath = "/catalog_lists/" + categoryItem + ".gzip?item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam;
            else
                urlpath = "/catalog_lists/" + friendlyId + ".gzip?item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam;
            if (dropdownChannelValue && dropdownChannelKey)
                var parameters = {
                    from: from,
                    page_size: count,
                    page: page,
                    start_count: 0,
                    [dropdownChannelKey]: dropdownChannelValue
                };
            else
                parameters = {
                    from: from,
                    page_size: count,
                    page: page,
                    start_count: 0
                };
            return isSessionBased && (parameters.session_id = topmenuService.userData.session),
            $http({
                method: "GET",
                url: appConstants.baseUrl + urlpath,
                headers: {
                    "Content-Type": "application/json"
                },
                params: parameters
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        IsSubcategory: function(fromHomePage, layoutType, pageType) {
            if (fromHomePage)
                return !1;
            if ("list" === pageType)
                return !1;
            switch (layoutType) {
            case "genre":
            case "hetero":
                return !0;
            default:
                return !1
            }
        },
        loadCategorySeaall: function(urlpathParam, count, from, page) {
            var deferred = $q.defer()
              , urlpath = urlpathParam
              , parameters = {
                from: from,
                page_size: count,
                page: page,
                start_count: 0
            };
            return $http({
                method: "GET",
                url: appConstants.baseUrl + urlpath,
                headers: {
                    "Content-Type": "application/json"
                },
                params: parameters
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        loadContinueWatchingItems: function(sessionId, count, from, page, selectedlng) {
            var deferred = $q.defer()
              , urlpath = "/users/" + sessionId + "/playlists/watchhistory/listitems.gzip?&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2
              , parameters = {
                from: from,
                page_size: count,
                page: page,
                start_count: 0
            };
            return $http({
                method: "GET",
                url: appConstants.baseUrl + urlpath,
                headers: {
                    "Content-Type": "application/json"
                },
                params: parameters
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        }
    }
};
function isIEbrowser() {
    return !!(window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./))
}
seeAllServices.$inject = ["$q", "$http", "appConstants", "topmenuService"],
angular.module("EktaApp").service("seeAllServices", seeAllServices);
var confirmationController = function($scope, $rootScope, $location, loginService, topmenuService, $window, ngDialog, onesignalService) {
    $rootScope.isPageLoading = !0;
    this.isPageLoaded = !1;
    var clearStorage = function() {
        localStorage.removeItem("userdata"),
        $rootScope.$broadcast("reloaduserData")
    }
      , openConfirmationDialog = function() {
        ngDialog.open({
            preCloseCallback: function() {
                $location.path("/").search({}),
                document.location.href = "/"
            },
            template: "app/shared/dialog/confirmation/emailconfirmation.html",
            controller: "confirmDialogController",
            controllerAs: "confirmDialogCtrl",
            className: "ngdialog-theme-default",
            scope: $scope,
            disableAnimation: !0,
            closeByNavigation: !0,
            closeByDocument: !1,
            closeByEscape: !1
        });
        try {
            isIEbrowser() || onesignalService.getTags().then((function(tags) {
                tags && Object.keys(tags).length > 0 && onesignalService.deleteTags(Object.keys(tags)).then((function(tagsdeleted) {}
                ))
            }
            )),
            clearStorage()
        } catch (err) {
            clearStorage()
        }
    }
      , loadController = function() {
        if ("" == topmenuService.accessToken)
            topmenuService.getAccessToken().then((function(response) {
                topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
                topmenuService.accessToken = response.data.access_token,
                topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                    topmenuService.regionData = response.region,
                    loadController()
                }
                ))
            }
            ));
        else {
            var confirmationToken = $location.search().confirmation_token;
            loginService.verifyEmailToken(confirmationToken).then((function(response) {
                $rootScope.isPageLoading = !1,
                response.data.error ? ($scope.ConfirmationType = "email_fail",
                $scope.errorMessage = response.data.error.message,
                openConfirmationDialog()) : ($scope.ConfirmationType = "email_success",
                response.data.data.mobile_number && ($rootScope.mobilenumberotp = response.data.data.mobile_number),
                localStorage.removeItem("userdata"),
                $scope.profilepic = "assets/img/usericon.svg",
                $scope.isGuestUser = !0,
                topmenuService = {},
                $rootScope.userdata_emailconfirm = response,
                openConfirmationDialog()),
                isIEbrowser() || localStorage.setItem("logout-event", "logout" + Math.random())
            }
            ))
        }
    };
    loadController()
};
confirmationController.$inject = ["$scope", "$rootScope", "$location", "loginService", "topmenuService", "$window", "ngDialog", "onesignalService"],
angular.module("EktaApp").controller("confirmationController", confirmationController);
var resetpasswordController = function($scope, $rootScope, $location, profileService, topmenuService, $window, ngDialog) {
    var vm = this;
    vm.passwordpattern = "^(?=.*?[A-Za-z])(?=.*?[0-9#?!@$%^&*-])(?!.*\\s)(?!.*[()_+\\-=\\[\\]{};':\"\\|,.<>\\/?]).{8,}$";
    var openConfirmationDialog = function() {
        ngDialog.open({
            preCloseCallback: function() {
                $location.path("/").search({}),
                document.location.href = "/"
            },
            template: "app/shared/dialog/confirmation/emailconfirmation.html",
            controller: "confirmDialogController",
            controllerAs: "confirmDialogCtrl",
            className: "ngdialog-theme-default",
            scope: $scope,
            disableAnimation: !0
        })
    }
      , loadController = function() {
        if ($rootScope.isPageLoading = !0,
        "" == topmenuService.accessToken)
            topmenuService.getAccessToken().then((function(response) {
                topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
                topmenuService.accessToken = response.data.access_token,
                topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                    topmenuService.regionData = response.region,
                    loadController()
                }
                ))
            }
            ));
        else {
            var secretkey = $location.search().forgot_pin_secret_key
              , userData = {};
            userData.key = secretkey,
            userData.password = vm.changePsswdForm.password,
            userData.confirm_password = vm.changePsswdForm.password,
            userData.region = topmenuService.regionData.country_code2,
            $rootScope.resetpswdhomeredirect = !0,
            profileService.resetPassword(userData).then((function(response) {
                $rootScope.isPageLoading = !1,
                response.data.error ? ($scope.ConfirmationType = "reset_password_fail",
                openConfirmationDialog()) : ($scope.ConfirmationType = "reset_password",
                openConfirmationDialog())
            }
            ))
        }
    };
    vm.changePassword = function() {
        loadController()
    }
};
resetpasswordController.$inject = ["$scope", "$rootScope", "$location", "profileService", "topmenuService", "$window", "ngDialog"],
angular.module("EktaApp").controller("resetpasswordController", resetpasswordController);
var paymentstatusController = function($scope, $rootScope, $location, $window, Analytics, topmenuService) {
    var messages = window.location.search
      , urlParams = new URLSearchParams(messages)
      , payment_gateway = urlParams.get("payment_gateway")
      , payment_status = urlParams.get("payment_status");
    if ($scope.message1 = urlParams.get("message1"),
    $scope.message2 = urlParams.get("message2"),
    $scope.orderId = urlParams.get("order_id"),
    $scope.paymentStatus = payment_status,
    $scope.subscriptionLocation = localStorage.getItem("subscriptionLocation"),
    localStorage.removeItem("subscriptionLocation"),
    localStorage.removeItem("subsId"),
    "billdesk" == payment_gateway) {
        var res = $location.search().msg.split("|");
        "0300" === res[14] ? (this.isSuccess = !0,
        Analytics.trackEvent("Subscription", "SubscriptionSuccess", res[17].toString(), 1, !0, {
            dimension2: topmenuService.userData.user_id,
            dimension15: res[17].toString(),
            dimension17: res[4].toString(),
            dimension19: "Billdesk",
            metric16: 1,
            metric17: res[4].toString()
        })) : (this.isSuccess = !1,
        Analytics.trackEvent("Subscription", "SubscriptionFailure", res[14], 1, !0, {
            dimension2: topmenuService.userData.user_id,
            dimension15: res[17].toString(),
            dimension17: res[4].toString(),
            dimension19: "Billdesk",
            metric18: 1
        }))
    } else
        this.isSuccess = "success" == payment_status;
    $scope.proceedToNextPage = function() {
        if ($rootScope.showSubscriptionIcon = !1,
        localStorage.removeItem("orderID"),
        $scope.subscriptionLocation) {
            var pathname = new URL($scope.subscriptionLocation).pathname;
            $location.path(pathname)
        } else
            $location.path("/home")
    }
};
paymentstatusController.$inject = ["$scope", "$rootScope", "$location", "$window", "Analytics", "topmenuService"],
angular.module("EktaApp").controller("paymentstatusController", paymentstatusController);
var recipPageController = function($rootScope) {
    $rootScope.metatitle = "RECIPES"
};
function isIE() {
    return !!(window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./))
}
recipPageController.$inject = ["$rootScope"],
angular.module("EktaApp").controller("recipPageController", recipPageController);
var loginController = function($scope, $rootScope, $location, loginService, topmenuService, profileService, $window, $interval, $timeout, Analytics, onesignalService, appConstants, subscriptionService) {
    var vm = this;
    vm.IsError = !1,
    vm.isNewUser = !1,
    vm.isMobileLogin = !1,
    vm.isEmailLogin = !1,
    vm.passwordPattern = appConstants.passwordPattern,
    vm.mobileSignUp = !1,
    vm.isUserSubscribed = !1,
    vm.mobOTPSignUp = !1,
    vm.social_email_id = "",
    vm.signoutalert = !1,
    vm.selectedGender = "";
    var retrySignIn = !1
      , retrySignUp = !1
      , isOTPforForgotPassword = !1
      , session = ""
      , resendOTPto = ""
      , imgUrl = ""
      , today = new Date
      , emailsignupflow = !1;
    vm.maxDate = today,
    vm.regioncode = topmenuService.regionData.country_code2,
    vm.succesotpclose = !0,
    vm.forgotpasswemail = !1,
    $scope.myDate = new Date(1930,8,21),
    $scope.minDate = new Date($scope.myDate.getFullYear(),$scope.myDate.getMonth(),$scope.myDate.getDate()),
    vm.userId = "",
    vm.tvLogin = localStorage.getItem("tvLogin"),
    localStorage.removeItem("tvLogin");
    var firebaseAnalytics = $window.firebase.analytics()
      , gotosubscribe = function() {
        $window.location.href = "/profile?tab=subscription"
    }
      , resetUI = function() {
        vm.IsError = !1,
        vm.isForgotPassword = !1,
        vm.signUpPage = !1,
        vm.signInPage = !1,
        vm.isOTPflow = !1,
        vm.isResetPasswordFlow = !1,
        vm.isEmailVerificationFlow = !1,
        vm.signoutalert = !1
    };
    resetUI(),
    vm.signInPage = $scope.signInPage,
    vm.signUpPage = !$scope.signInPage,
    vm.signoutalert = $scope.signoutalert;
    var loadController = function() {
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                loadController()
            }
            ))
        }
        )) : (loginService.loadCountryCode().then((function(response) {
            response.data.error && topmenuService.isInvalidToken(response.data) ? (topmenuService.accessToken = "",
            retrySignUp = !0,
            loadController()) : (vm.countryCodeList = response.data,
            vm.msdcode = topmenuService.regionData.calling_code,
            vm.maxlimit = topmenuService.regionData.max_digits)
        }
        )),
        retrySignIn && (retrySignIn = !1,
        vm.SubmitSignIn()),
        retrySignUp && (retrySignUp = !1,
        vm.SubmitSignUp()))
    };
    loadController();
    var ChecknetWork = function() {
        $window.navigator.onLine || ($rootScope.isPageLoading = !1,
        vm.IsError = !0,
        vm.errorMsg = "Looks like something has gone wrong. Please check your network and retry!")
    }
      , reloadPage = function(isFirstTimeLogin, signinLabel) {
        var subfootertab = localStorage.getItem("subscriptionFooterTab")
          , substab = localStorage.getItem("subscriptiontab");
        if (isFirstTimeLogin)
            resetUI(),
            vm.isNewUser = !0,
            $(".md-datepicker-input.md-input").focus(),
            $(".md-datepicker-input.md-input").attr("readonly", !0);
        else if ($rootScope.resetpswdhomeredirect)
            document.location.href = "/";
        else if (subfootertab || substab) {
            (subfootertab = localStorage.getItem("subscriptionFooterTab")) && gotosubscribe(),
            subscriptionService.getactivePlans().then((function(response) {
                var substab = localStorage.getItem("subscriptiontab");
                if (localStorage.setItem("subscriptiontab", "false"),
                response.data && response.data.length > 0) {
                    vm.isUserSubscribed = !0,
                    localStorage.setItem("isUserSubscribed", !0),
                    $scope.closeThisDialog(0);
                    var goto_location = localStorage.getItem("subscriptionLocation")
                      , goto_path = goto_location.replace(/^.*\/\/[^\/]+/, "");
                    goto_location ? ($window.location.reload(!0),
                    $location.path(goto_path),
                    document.location.href = goto_path) : (vm.tvLogin ? document.location.href = "/" : $window.history.replaceState(null, null, $window.location.pathname),
                    setTimeout((()=>{
                        $window.location.reload()
                    }
                    ), 300))
                } else
                    vm.isUserSubscribed = !1,
                    localStorage.setItem("isUserSubscribed", !1);
                substab && !vm.isUserSubscribed && gotosubscribe()
            }
            ))
        } else
            $scope.closeThisDialog(0),
            vm.tvLogin ? document.location.href = "/" : $window.history.replaceState(null, null, $window.location.pathname),
            setTimeout((()=>{
                $window.location.reload()
            }
            ), 300)
    };
    $rootScope.userdata_emailconfirm && (vm.email_flow = !0,
    vm.email_profile = $rootScope.userdata_emailconfirm.data.data.email_id,
    vm.IsError = !1,
    localStorage.setItem("userdata", JSON.stringify($rootScope.userdata_emailconfirm.data.data)),
    topmenuService.isLoggedIn = !0,
    topmenuService.userData = $rootScope.userdata_emailconfirm.data.data,
    session = $rootScope.userdata_emailconfirm.data.data.session);
    var sendTags = function(isFirstTimeLogin, signinLabel) {
        try {
            onesignalService.getFollowData().then((function(response) {
                if (!response.data.error) {
                    var tagObject = onesignalService.createTagObject(response.data.data.items);
                    onesignalService.sendTags(tagObject).then((function(tagsent) {}
                    ))
                }
                reloadPage(isFirstTimeLogin)
            }
            ))
        } catch (err) {
            reloadPage(isFirstTimeLogin)
        }
    };
    vm.showSignUp = !0;
    var setUIafterSignup = function() {
        emailsignupflow ? vm.showSignUp = !1 : (isOTPforForgotPassword = !1,
        vm.isOTPflow = !0,
        vm.signUpPage = !1)
    };
    vm.OpenOTP = function() {
        resetUI(),
        vm.isOTPflow = !0
    }
    ;
    vm.SubmitSignUp = function() {
        vm.signoutalert = !1,
        emailsignupflow = !1;
        var userdata = angular.copy(vm.signupform)
          , user_mob = userdata.user_id;
        vm.sendLinkto = userdata.user_id,
        /\S+@\S+\.\S+/.test(user_mob) ? (userdata.type = "email",
        userdata.user_id = userdata.user_id,
        emailsignupflow = !0,
        $window.localStorage.setItem("email_profile", userdata.user_id),
        vm.email_profile = $window.localStorage.getItem("email_profile")) : (userdata.type = "msisdn",
        userdata.user_id = vm.msdcode + userdata.user_id,
        vm.mobileSignUp = !0),
        $window.localStorage.setItem("mobilenum", userdata.user_id),
        vm.userId = $window.localStorage.getItem("mobilenum"),
        vm.userId.length > 10 && (vm.userId = vm.userId.slice(-10)),
        resendOTPto = userdata.user_id,
        vm.forgotPsswd = {},
        vm.forgotPsswd.user_email_id = angular.copy(resendOTPto),
        userdata.region = topmenuService.regionData.country_code2,
        Analytics.trackEvent("LoginAndSignup", "SignupAttempt", "Onsite Email", 1, !0, {
            dimension1: "Onsite Email",
            metric1: 1
        }),
        resendOTPto = userdata.user_id,
        "email_id" == userdata.type ? userdatanew = {
            email_id: userdata.user_id,
            firstname: userdata.name,
            password: userdata.password,
            region: userdata.region
        } : userdatanew = {
            user_id: userdata.user_id,
            firstname: userdata.name,
            password: userdata.password,
            region: userdata.region,
            type: userdata.type
        },
        function(userdata, signupLabel) {
            loginService.signUpUser(userdata).then((function(response) {
                $rootScope.isPageLoading = !1,
                response.data.error ? topmenuService.isInvalidToken(response.data) ? (topmenuService.accessToken = "",
                loadController()) : (vm.IsError = !0,
                vm.errorMsg = response.data.error.message,
                Analytics.trackEvent("LoginAndSignup", "SignupFailure", response.data.error.message, 1, !0, {
                    dimension1: signupLabel,
                    metric3: 1
                })) : (vm.IsError = !1,
                Analytics.trackEvent("LoginAndSignup", "SignupSuccess", signupLabel, 1, !0, {
                    dimension1: signupLabel,
                    dimension2: response.data.user_id,
                    dimension3: "Yes",
                    metric2: 1
                }),
                vm.signupform = {},
                setUIafterSignup())
            }
            ))
        }(userdatanew, "Onsite Email")
    }
    ,
    vm.onModeChange = function() {
        vm.loginform = {},
        vm.isMobileLogin = !1,
        vm.isEmailLogin = !1,
        "email" == vm.mode ? vm.isEmailLogin = !0 : vm.isMobileLogin = !0
    }
    ,
    vm.OpenSignUp = function() {
        resetUI(),
        vm.IsError = !1,
        vm.showSignUp = !0,
        vm.signUpPage = !0
    }
    ,
    vm.OpenSignIn = function() {
        resetUI(),
        vm.signoutalert = !1,
        vm.signInPage = !0,
        localStorage.setItem("logoutAlert", !1)
    }
    ,
    vm.closesignout = function() {
        $window.location.reload(!0),
        vm.signoutalert = !1,
        vm.signUpPage = !1,
        localStorage.setItem("logoutAlert", !1)
    }
    ,
    vm.OpenForgotPsswd = function() {
        resetUI(),
        vm.forgotPsswd = {},
        vm.loginform.email_id.indexOf("@"),
        vm.forgotPsswd.email_id = vm.loginform.email_id,
        vm.isForgotPassword = !0
    }
    ;
    var SaveUserData = function(response, signinLabel) {
        vm.IsError = !1,
        localStorage.setItem("userdata", JSON.stringify(response.data.data)),
        topmenuService.isLoggedIn = !0,
        topmenuService.userData = response.data.data,
        session = response.data.data.session,
        sendTags(response.data.data.first_time_login),
        isIE() || localStorage.setItem("logout-event", "logout" + Math.random())
    }
      , signInhandler = function(response, signinLabel, userSignIn) {
        $rootScope.isPageLoading = !1,
        response.data.error ? topmenuService.isInvalidToken(response.data) ? (topmenuService.accessToken = "",
        retrySignIn = !0,
        loadController()) : (vm.IsError = !0,
        vm.errorMsg = response.data.error.message,
        Analytics.trackEvent("LoginAndSignup", "LoginFailure", response.data.error.message, 1, !0, {
            dimension1: signinLabel,
            metric6: 1
        }),
        "1029" == response.data.error.code && (vm.OpenSignUp(),
        emailsignupflow = "Onsite Email" === signinLabel,
        setUIafterSignup())) : (Analytics.trackEvent("LoginAndSignup", "LoginSuccess", signinLabel, 1, !0, {
            dimension1: signinLabel,
            dimension2: response.data.user_id,
            dimension3: "Yes",
            metric5: 1
        }),
        userSignIn && (firebaseAnalytics.logEvent("login_success", {
            method: "Onsite Email" === signinLabel ? "email id" : "phone number",
            u_id: response.data.data.user_id,
            device_id: "NA"
        }),
        $window.sdk.userAttr.u_id = response.data.data.user_id,
        $window.sdk.trackEvent("login_success", {
            method: "Onsite Email" === signinLabel ? "email id" : "phone number",
            event_id: 5,
            event_time: (new Date).toISOString().slice(0, 19)
        })),
        SaveUserData(response))
    };
    $scope.$on("reloaduserData", (function(response) {
        signinLabel = "Onsite Email",
        signInhandler(response, signinLabel, !0)
    }
    ));
    vm.SubmitSignIn = function() {
        vm.signoutalert = !1,
        $rootScope.isPageLoading = !0;
        var userdata = {}
          , signinLabel = "";
        -1 === (userdata = angular.copy(vm.loginform)).email_id.indexOf("@") ? (signinLabel = "Onsite Mobile",
        userdata.password = vm.loginform.password,
        userdata.user_id = vm.msdcode + userdata.email_id,
        userdata.type = "msisdn",
        resendOTPto = userdata.user_id,
        vm.sendLinkto = angular.copy(vm.loginform.email_id),
        vm.forgotPsswd = {},
        delete userdata.email_id) : (signinLabel = "Onsite Email",
        userdata = angular.copy(vm.loginform),
        vm.forgotPsswd = {},
        vm.sendLinkto = angular.copy(vm.loginform.email_id)),
        Analytics.trackEvent("LoginAndSignup", "LoginAttempt", signinLabel, 1, !0, {
            dimension1: signinLabel,
            metric4: 1
        }),
        function(userdata, signinLabel) {
            loginService.signInUser(userdata).then((function(response) {
                signInhandler(response, signinLabel, !0),
                $rootScope.resetpswdhomeredirect && (document.location.href = "/home")
            }
            ))
        }(userdata, signinLabel)
    }
    ,
    vm.ResetPassword = function() {
        $rootScope.isPageLoading = !0;
        var userData = {};
        userData.key = vm.otpFlow.otp,
        userData.password = vm.resetPswd.password,
        userData.confirm_password = vm.resetPswd.confirmpasswd,
        userData.region = topmenuService.regionData.country_code2,
        userData.type = "msisdn",
        loginService.resetPassword(userData).then((function(response) {
            $rootScope.isPageLoading = !1,
            null != response.data.error ? (vm.IsError = !0,
            vm.errorMsg = response.data.error.message) : (vm.OpenSignIn(),
            vm.IsError = !0,
            vm.errorMsg = "Password Changed SuccessFully")
        }
        ))
    }
    ,
    vm.VerifyOtp = function() {
        if (isOTPforForgotPassword)
            loginService.verifyOTPforgotpswd(vm.otpFlow.otp).then((function(response) {
                $rootScope.isPageLoading = !1,
                response.data.error ? (vm.IsError = !0,
                vm.errorMsg = response.data.error.message) : (resetUI(),
                vm.isResetPasswordFlow = !0)
            }
            ));
        else {
            $rootScope.isPageLoading = !0;
            var resendotptoNum = vm.msdcode + vm.sendLinkto;
            loginService.verifyOTP(vm.otpFlow.otp, resendotptoNum).then((function(response) {
                $rootScope.isPageLoading = !1,
                response.data.error ? (vm.IsError = !0,
                vm.errorMsg = response.data.error.message,
                firebaseAnalytics.logEvent("signup_failure", {
                    error_type: vm.errorMsg,
                    method: "phone number",
                    device_id: "NA"
                }),
                $window.sdk.trackEvent("signup_failure", {
                    error_type: vm.errorMsg,
                    method: "phone number",
                    event_id: 4,
                    event_time: (new Date).toISOString().slice(0, 19)
                })) : (resetUI(),
                signinLabel = "Onsite Mobile",
                vm.mobOTPSignUp = !0,
                signInhandler(response, signinLabel, !1),
                firebaseAnalytics.logEvent("signup_success", {
                    method: "phone number",
                    u_id: response.data.data.user_id,
                    device_id: "NA"
                }),
                $window.sdk.userAttr.u_id = response.data.data.user_id,
                $window.sdk.trackEvent("signup_success", {
                    method: "phone number",
                    event_id: 3,
                    event_time: (new Date).toISOString().slice(0, 19)
                }),
                vm.succesotpclose = !1,
                ngDialogData.myProperty = !1,
                vm.isOTPflow = !1)
            }
            ))
        }
    }
    ;
    var downTimer;
    vm.showTimer = !1,
    vm.ResendOTPClicked = function(type) {
        $rootScope.isPageLoading = !0;
        var userData = {};
        userData.type = type,
        "msisdn" == userData.type ? (userData.email_id = vm.msdcode + vm.sendLinkto,
        vm.showTimer = !0,
        vm.countDown = 30,
        downTimer = $interval((function() {
            vm.countDown--,
            0 === vm.countDown && (vm.showTimer = !1,
            $interval.cancel(downTimer))
        }
        ), 1e3),
        function(userData) {
            loginService.resendOTPnum(userData).then((function(response) {
                $rootScope.isPageLoading = !1,
                response.data.error && (vm.IsError = !0,
                vm.errorMsg = response.data.error.message)
            }
            ))
        }(userData)) : (userData.email_id = vm.sendLinkto,
        function(userData) {
            loginService.resendOTP(userData).then((function(response) {
                $rootScope.isPageLoading = !1,
                response.data.error && (vm.IsError = !0,
                vm.errorMsg = response.data.error.message)
            }
            ))
        }(userData)),
        $window.localStorage.removeItem("mobilenum")
    }
    ,
    $scope.$on("$destroy", (function() {
        $interval.cancel(downTimer)
    }
    ));
    vm.ForgotPasswordClicked = function() {
        $rootScope.isPageLoading = !0;
        var userData = {};
        userdata = angular.copy(vm.forgotPsswd),
        -1 !== userdata.email_id.indexOf("@") ? (userData.user_id = vm.forgotPsswd.email_id,
        vm.isEmailLogin = "true") : userData.user_id = vm.msdcode + vm.forgotPsswd.email_id,
        userData.region = topmenuService.regionData.country_code2,
        resendOTPto = userData.user_id,
        function(userData) {
            loginService.forgotPassword(userData).then((function(response) {
                $rootScope.isPageLoading = !1,
                null != response.data.error ? (vm.IsError = !0,
                vm.errorMsg = response.data.error.message) : (resetUI(),
                vm.isEmailVerificationFlow = !0,
                vm.forgotpasswemail = !0,
                vm.forgotpasswmsg = response.data.message),
                vm.forgotPsswd = {}
            }
            ))
        }(userData)
    }
    ,
    vm.UpdateProfile = function() {
        var userdata = {};
        if (vm.dateInputValue)
            userdata.birthdate = moment(vm.dateInputValue).format("DD-MM-YYYY");
        else {
            var currentTime = new Date
              , month = (currentTime.getMonth() + 1).toString().padStart(2, "0")
              , day = currentTime.getDate().toString().padStart(2, "0")
              , year = currentTime.getFullYear();
            userdata.birthdate = day + "-" + month + "-" + year
        }
        vm.selectedGender ? userdata.gender = vm.selectedGender : userdata.gender = "",
        vm.social_email_id ? userdata.user_email_id = vm.social_email_id : userdata.user_email_id = vm.email_profile,
        vm.location_profile ? userdata.address = vm.location_profile : userdata.address = "",
        profileService.updateUserData(userdata, session).then((function(response) {
            if (response.data.error)
                vm.IsError = !0,
                vm.errorMsg = response.data.error.message;
            else {
                var checkSubscription = localStorage.getItem("subscriptionLocation")
                  , substab = localStorage.getItem("subscriptiontab")
                  , subfootertab = localStorage.getItem("subscriptionFooterTab");
                localStorage.setItem("subscriptiontab", "false"),
                checkSubscription || substab || subfootertab ? gotosubscribe() : (vm.isEditProfile = !1,
                $location.path("/"),
                $rootScope.$broadcast("showPreferenceOverlay"),
                $scope.closeThisDialog(0))
            }
        }
        ))
    }
    ;
    vm.SkipUpdateProfile = function() {
        $window.location.reload(),
        $location.path("/"),
        $rootScope.$broadcast("showPreferenceOverlay"),
        $scope.closeThisDialog(0)
    }
    ;
    var handleExternalSignIn = function(response, socialNtw) {
        response.data.error ? (vm.IsError = !0,
        vm.errorMsg = response.data.error.message) : (Analytics.trackEvent("LoginAndSignup", "LoginSuccess", socialNtw, 1, !0, {
            dimension1: socialNtw,
            dimension2: response.data.data.user_id,
            dimension3: "Yes",
            metric5: 1
        }),
        firebaseAnalytics.logEvent("login_success", {
            method: "social",
            u_id: response.data.data.user_id,
            device_id: "NA"
        }),
        $window.sdk.userAttr.u_id = response.data.data.user_id,
        $window.sdk.trackEvent("login_success", {
            method: "social",
            event_id: 5,
            event_time: (new Date).toISOString().slice(0, 19)
        }),
        session = response.data.data.session,
        response.data.data.profile_pic || (response.data.data.profile_pic = imgUrl,
        function(imgurl) {
            var userdata = {};
            userdata.profile_pic = imgurl,
            profileService.updateUserData(userdata, session).then((function(response) {}
            ))
        }(imgUrl)),
        SaveUserData(response))
    }
      , uploadSocialData = function(usersocialdata, socialNtw) {
        $rootScope.isPageLoading = !0,
        "Facebook" == socialNtw && (vm.social_email_id = usersocialdata.ext_account_email_id),
        loginService.uploadSocialData(usersocialdata).then((function(response) {
            $rootScope.isPageLoading = !1,
            handleExternalSignIn(response, socialNtw)
        }
        ), (function() {
            $rootScope.isPageLoading = !1
        }
        ))
    }
      , reloadCount = 0
      , getTwitterData = function() {
        $rootScope.isPageLoading = !0,
        loginService.getTwitterData().then((function(response) {
            if (topmenuService.isTwitterFlow = !1,
            response.data.errors)
                ++reloadCount < 10 ? getTwitterData() : (vm.IsError = !0,
                vm.errorMsg = "Error signing in via twitter",
                Analytics.trackEvent("LoginAndSignup", "LoginFailure", vm.errorMsg, 1, !0, {
                    dimension1: "Twitter",
                    metric6: 1
                }));
            else {
                var userdataSocial = {};
                userdataSocial.email_id = response.data.user_info.email_id,
                userdataSocial.firstname = response.data.user_info.screen_name,
                userdataSocial.uid = response.data.user_info.user_id,
                userdataSocial.provider = "twitter",
                imgUrl = angular.copy(response.data.user_info.image_url),
                uploadSocialData(userdataSocial, "Twitter")
            }
        }
        ))
    };
    topmenuService.isTwitterFlow && getTwitterData();
    vm.googleLogin = function() {
        ChecknetWork(),
        Analytics.trackEvent("LoginAndSignup", "LoginAttempt", "G+", 1, !0, {
            dimension1: "G+",
            metric4: 1
        }),
        loginService.googlesignIn().then((function(response) {
            !function(response) {
                if (response) {
                    var userdata = {};
                    userdata.ext_account_email_id = response.email,
                    userdata.firstname = response.given_name,
                    userdata.provider = "google",
                    userdata.uid = response.sub,
                    imgUrl = response.picture,
                    uploadSocialData(userdata, "Google")
                } else
                    vm.IsError = !0,
                    vm.errorMsg = "Error signing in via google",
                    Analytics.trackEvent("LoginAndSignup", "LoginFailure", vm.errorMsg, 1, !0, {
                        dimension1: "G+",
                        metric6: 1
                    })
            }(response)
        }
        ))
    }
    ;
    vm.facebookLogin = function() {
        ChecknetWork(),
        Analytics.trackEvent("LoginAndSignup", "LoginAttempt", "Facebook", 1, !0, {
            dimension1: "Facebook",
            metric4: 1
        }),
        loginService.facebooksignin().then((function(response) {
            !function(response) {
                "connected" == response.status ? loginService.getFBUser().then((function(response) {
                    var userdata = {};
                    userdata.ext_account_email_id = response.email,
                    userdata.firstname = response.name,
                    userdata.provider = "facebook",
                    userdata.uid = response.id,
                    imgUrl = response.picture.data.url,
                    uploadSocialData(userdata, "Facebook")
                }
                )) : ($window.history.replaceState(null, null, $window.location.pathname),
                $rootScope.isPageLoading = !1,
                vm.IsError = !0,
                vm.errorMsg = "Error signing in via facebook",
                Analytics.trackEvent("LoginAndSignup", "LoginFailure", vm.errorMsg, 1, !0, {
                    dimension1: "Facebook",
                    metric6: 1
                }))
            }(response)
        }
        ))
    }
    ,
    vm.twitterLogin = function() {
        ChecknetWork(),
        Analytics.trackEvent("LoginAndSignup", "LoginAttempt", "Twitter", 1, !0, {
            dimension1: "Twitter",
            metric4: 1
        }),
        loginService.getTwitterToken().then((function(response) {
            $window.location.href = response.data.url
        }
        ))
    }
};
loginController.$inject = ["$scope", "$rootScope", "$location", "loginService", "topmenuService", "profileService", "$window", "$interval", "$timeout", "Analytics", "onesignalService", "appConstants", "subscriptionService"],
angular.module("EktaApp").controller("loginController", loginController);
var loginService = function($q, $http, appConstants, topmenuService, $window) {
    var initiateFormdata = function(data) {
        var formData = {};
        return formData.auth_token = appConstants.authToken,
        formData.access_token = topmenuService.accessToken,
        formData.user = data,
        JSON.stringify(formData)
    };
    return {
        signoutuser: function(userdata) {
            userdata.region = topmenuService.regionData.country_code2;
            var formData = function(data) {
                var formData = {};
                return formData.auth_token = appConstants.authToken,
                formData.access_token = topmenuService.accessToken,
                formData.user = data,
                JSON.stringify(formData)
            }(userdata)
              , sessionId = userdata.session
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/" + sessionId + "/sign_out",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        signoutalluser: function(userdata) {
            userdata.region = topmenuService.regionData.country_code2;
            var formData = function() {
                var formData = {};
                return formData.auth_token = appConstants.authToken,
                formData.access_token = topmenuService.accessToken,
                formData.type = "session",
                JSON.stringify(formData)
            }()
              , sessionId = userdata.session
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/" + sessionId + "/sign_out_all",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        signInUser: function(userdata) {
            userdata.region = topmenuService.regionData.country_code2;
            var formData = initiateFormdata(userdata)
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/sign_in",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        signUpUser: function(userdata) {
            userdata.region = topmenuService.regionData.country_code2;
            var formData = initiateFormdata(userdata)
              , deferred = $q.defer();
            if ("IN" == userdata.region)
                var urldata = appConstants.baseUrl + "/users";
            else
                urldata = appConstants.baseUrl + "/users";
            return $http({
                method: "POST",
                url: urldata,
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        loadCountryCode: function() {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/regions?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&region=" + topmenuService.regionData.country_code2
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        forgotPassword: function(userdata) {
            userdata.region = topmenuService.regionData.country_code2;
            var formData = initiateFormdata(userdata)
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/forgot_password",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        verifyOTP: function(otp, mobilenum) {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/users/verification/" + otp + "?mobile_number=" + mobilenum + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        resetPassword: function(userdata) {
            userdata.region = topmenuService.regionData.country_code2;
            var formData = initiateFormdata(userdata)
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/reset_password",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        resendOTP: function(userdata) {
            userdata.region = topmenuService.regionData.country_code2;
            var formData = initiateFormdata(userdata)
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/resend_verification_link",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        resendOTPnum: function(userdata) {
            userdata.region = topmenuService.regionData.country_code2;
            var formData = initiateFormdata(userdata)
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/resend_verification_link",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        uploadSocialData: function(usersocialdata) {
            usersocialdata.region = topmenuService.regionData.country_code2;
            var formData = initiateFormdata(usersocialdata)
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/external_auth/sign_in",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        verifyOTPforgotpswd: function(otp) {
            var deferred = $q.defer()
              , userdata = {};
            userdata.region = topmenuService.regionData.country_code2,
            userdata.key = otp;
            var formData = initiateFormdata(userdata);
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/otp_verification",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        googlesignIn: function() {
            var defered = $q.defer();
            return google.accounts.id.initialize({
                client_id: "881568280179-g4ur9ssidf4kqoba7g4hocss4bvj6oge.apps.googleusercontent.com",
                callback: function(response) {
                    var credential = function(token) {
                        if (token.credential) {
                            var base64 = token.credential.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")
                              , jsonPayload = decodeURIComponent(window.atob(base64).split("").map((function(c) {
                                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
                            }
                            )).join(""));
                            return JSON.parse(jsonPayload)
                        }
                        return !1
                    }(response);
                    defered.resolve(credential)
                }
            }),
            google.accounts.id.prompt(),
            defered.promise
        },
        getgoogleUser: function() {
            var deferred = $q.defer();
            return $window.gapi.client.plus.people.get({
                userId: "me"
            }).execute((function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        facebooksignin: function() {
            var deferred = $q.defer();
            return $window.FB.login((function(response) {
                deferred.resolve(response)
            }
            ), {
                scope: "email",
                return_scopes: !0
            }),
            deferred.promise
        },
        getFBUser: function() {
            var deferred = $q.defer();
            return $window.FB.api("/me?fields=id,email,name,picture", (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        getTwitterToken: function() {
            var userdata = {};
            userdata.region = topmenuService.regionData.country_code2;
            var formData = initiateFormdata(userdata)
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/twitter/request_token",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        getTwitterData: function() {
            var userdata = {};
            userdata.region = topmenuService.regionData.country_code2;
            var formData = function(data) {
                var formData = {};
                return formData.auth_token = appConstants.authToken,
                formData.access_token = topmenuService.accessToken,
                formData.oauth_token = topmenuService.oauth_token,
                formData.oauth_verifier = topmenuService.oauth_verifier,
                formData.region = data.region,
                JSON.stringify(formData)
            }(userdata)
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/twitter/access_token",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        verifyEmailToken: function(confirmationToken) {
            var deferred = $q.defer()
              , regionparam = topmenuService.regionData.country_code2;
            if ("IN" == regionparam)
                var urlbasedRegion = appConstants.baseUrl + "/users/verification/" + confirmationToken + "?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam;
            else if ("IN" != regionparam && void 0 !== regionparam)
                urlbasedRegion = appConstants.baseUrl + "/users/verification/" + confirmationToken + "?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam;
            else
                urlbasedRegion = appConstants.baseUrl + "/users/verification/" + confirmationToken + "?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam;
            return $http({
                method: "GET",
                url: urlbasedRegion
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        signInUserMobile: function(userdata) {
            userdata.region = topmenuService.regionData.country_code2;
            var formData = initiateFormdata(userdata)
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/generate_signin_otp",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        verifyOTPNew: function(otp, mobilenum, action, emailID) {
            var deferred = $q.defer()
              , userdata = {};
            userdata.region = topmenuService.regionData.country_code2,
            userdata.key = otp,
            userdata.action = action,
            "update_mobile" == action ? (userdata.mobile_number = mobilenum,
            userdata.user_id = emailID) : userdata.user_id = mobilenum,
            userdata.type = "msisdn";
            var formData = initiateFormdata(userdata);
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/verify_otp",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        signUpUserMobile: function(userdata) {
            userdata.region = topmenuService.regionData.country_code2;
            var formData = initiateFormdata(userdata)
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/signup_otp",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        updateProfileWithMobile: function(userdata) {
            userdata.region = topmenuService.regionData.country_code2;
            var userSessionId, formData = {};
            formData.auth_token = appConstants.authToken,
            formData.access_token = topmenuService.accessToken,
            formData.profile = userdata,
            userSessionId = JSON.parse(localStorage.getItem("userdata")).session;
            var deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/" + userSessionId + "/generate_mobile_otp",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        }
    }
};
function isIE() {
    return !!(window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./))
}
loginService.$inject = ["$q", "$http", "appConstants", "topmenuService", "$window"],
angular.module("EktaApp").service("loginService", loginService);
var loginControllerIndia = function($scope, $rootScope, $location, loginService, topmenuService, profileService, $window, $interval, $timeout, Analytics, onesignalService, appConstants, subscriptionService, ngDialog) {
    var vm = this;
    vm.IsError = !1,
    vm.isNewUser = !1,
    vm.isMobileLogin = !1,
    vm.isEmailLogin = !1,
    vm.passwordPattern = appConstants.passwordPattern,
    vm.mobileSignUp = !1,
    vm.isUserSubscribed = !1,
    vm.mobOTPSignUp = !1,
    vm.social_email_id = "",
    vm.signoutalert = !1,
    vm.selectedGender = "";
    var retrySignIn = !1
      , retrySignUp = !1
      , isOTPforForgotPassword = !1
      , session = ""
      , resendOTPto = ""
      , imgUrl = ""
      , today = new Date
      , emailsignupflow = !1;
    vm.maxDate = today,
    vm.regioncode = topmenuService.regionData.country_code2,
    vm.succesotpclose = !0,
    vm.forgotpasswemail = !1,
    $scope.myDate = new Date(1930,8,21),
    $scope.minDate = new Date($scope.myDate.getFullYear(),$scope.myDate.getMonth(),$scope.myDate.getDate()),
    vm.userId = "",
    vm.currentTab = "mobile",
    vm.isChecked = !1,
    vm.type = "password",
    vm.isSignInFlowMobile = !1,
    vm.signupform = {},
    vm.loginform = {},
    vm.selectMale = !1,
    vm.selectFemale = !1,
    vm.tvLogin = localStorage.getItem("tvLogin"),
    localStorage.removeItem("tvLogin"),
    $window.SPhlsPlayer && $window.SPhlsPlayer._videoPlayerControls("pause");
    var firebaseAnalytics = $window.firebase.analytics();
    vm.selectTab = function(tabname, type) {
        vm.IsError = !1,
        vm.currentTab = tabname,
        "signin" == type ? (vm.loginform.email_id = "",
        vm.loginform.password = "") : (vm.signupform.name = "",
        vm.signupform.user_id = "",
        vm.signupform.password = "",
        vm.signupform.confirmpasswd = "")
    }
    ,
    vm.isTabSelected = function(tabname) {
        return vm.currentTab === tabname
    }
    ,
    vm.typeToggle = function() {
        vm.type = "password" == vm.type ? "text" : "password"
    }
    ;
    var gotosubscribe = function() {
        $window.location.href = "/profile?tab=subscription"
    }
      , resetUI = function() {
        vm.IsError = !1,
        vm.isForgotPassword = !1,
        vm.signUpPage = !1,
        vm.signInPage = !1,
        vm.isOTPflow = !1,
        vm.isResetPasswordFlow = !1,
        vm.isEmailVerificationFlow = !1,
        vm.signoutalert = !1
    };
    resetUI(),
    vm.signInPage = $scope.signInPage,
    vm.signUpPage = !$scope.signInPage,
    vm.signoutalert = $scope.signoutalert;
    var loadController = function() {
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                loadController()
            }
            ))
        }
        )) : (loginService.loadCountryCode().then((function(response) {
            response.data.error && topmenuService.isInvalidToken(response.data) ? (topmenuService.accessToken = "",
            retrySignUp = !0,
            loadController()) : (vm.countryCodeList = response.data,
            vm.msdcode = topmenuService.regionData.calling_code,
            $rootScope.msdcode = topmenuService.regionData.calling_code,
            vm.maxlimit = topmenuService.regionData.max_digits)
        }
        )),
        retrySignIn && (retrySignIn = !1,
        vm.SubmitSignIn()),
        retrySignUp && (retrySignUp = !1,
        vm.SubmitSignUp()))
    };
    try {
        loadController()
    } catch (error) {
        console.log(error)
    }
    var ChecknetWork = function() {
        $window.navigator.onLine || ($rootScope.isPageLoading = !1,
        vm.IsError = !0,
        vm.errorMsg = "Looks like something has gone wrong. Please check your network and retry!")
    }
      , reloadPage = function(isFirstTimeLogin, signinLabel) {
        var subfootertab = localStorage.getItem("subscriptionFooterTab")
          , substab = localStorage.getItem("subscriptiontab");
        if (isFirstTimeLogin)
            resetUI(),
            vm.isNewUser = !0,
            $(".md-datepicker-input.md-input").focus(),
            $(".md-datepicker-input.md-input").attr("readonly", !0);
        else if ($rootScope.resetpswdhomeredirect)
            document.location.href = "/";
        else if (subfootertab || substab) {
            (subfootertab = localStorage.getItem("subscriptionFooterTab")) && gotosubscribe(),
            subscriptionService.getactivePlans().then((function(response) {
                var substab = localStorage.getItem("subscriptiontab");
                if (localStorage.setItem("subscriptiontab", "false"),
                response.data && response.data.length > 0) {
                    vm.isUserSubscribed = !0,
                    localStorage.setItem("isUserSubscribed", !0),
                    $scope.closeThisDialog(0);
                    var goto_location = localStorage.getItem("subscriptionLocation")
                      , goto_path = goto_location.replace(/^.*\/\/[^\/]+/, "");
                    goto_location ? ($window.location.reload(!0),
                    $location.path(goto_path),
                    document.location.href = goto_path) : (vm.tvLogin ? document.location.href = "/" : $window.history.replaceState(null, null, $window.location.pathname),
                    setTimeout((()=>{
                        $window.location.reload()
                    }
                    ), 300))
                } else
                    vm.isUserSubscribed = !1,
                    localStorage.setItem("isUserSubscribed", !1);
                substab && !vm.isUserSubscribed && gotosubscribe()
            }
            ))
        } else
            $scope.closeThisDialog(0),
            vm.tvLogin ? document.location.href = "/" : $window.history.replaceState(null, null, $window.location.pathname),
            setTimeout((()=>{
                $window.location.reload()
            }
            ), 300)
    };
    $rootScope.userdata_emailconfirm && (vm.email_flow = !0,
    vm.email_profile = $rootScope.userdata_emailconfirm.data.data.email_id,
    vm.IsError = !1,
    localStorage.setItem("userdata", JSON.stringify($rootScope.userdata_emailconfirm.data.data)),
    topmenuService.isLoggedIn = !0,
    topmenuService.userData = $rootScope.userdata_emailconfirm.data.data,
    session = $rootScope.userdata_emailconfirm.data.data.session);
    var sendTags = function(isFirstTimeLogin, signinLabel) {
        try {
            onesignalService.getFollowData().then((function(response) {
                if (!response.data.error) {
                    var tagObject = onesignalService.createTagObject(response.data.data.items);
                    onesignalService.sendTags(tagObject).then((function(tagsent) {}
                    ))
                }
                reloadPage(isFirstTimeLogin)
            }
            ))
        } catch (err) {
            reloadPage(isFirstTimeLogin)
        }
    };
    vm.showSignUp = !0;
    var setUIafterSignup = function() {
        emailsignupflow ? vm.showSignUp = !1 : (isOTPforForgotPassword = !1,
        vm.isOTPflow = !0,
        vm.signUpPage = !1)
    };
    vm.SubmitSignUp = function() {
        vm.signoutalert = !1,
        emailsignupflow = !1;
        var userdata = angular.copy(vm.signupform)
          , signupLabel = ""
          , user_mob = userdata.user_id;
        vm.sendLinkto = userdata.user_id,
        /\S+@\S+\.\S+/.test(user_mob) ? (signupLabel = "Onsite Email",
        userdata.type = "email",
        userdata.user_id = userdata.user_id,
        emailsignupflow = !0,
        $window.localStorage.setItem("email_profile", userdata.user_id),
        vm.email_profile = $window.localStorage.getItem("email_profile")) : (signupLabel = "Onsite Mobile",
        userdata.type = "msisdn",
        userdata.user_id = vm.msdcode + userdata.user_id,
        vm.mobileSignUp = !0),
        $window.localStorage.setItem("mobilenum", userdata.user_id),
        vm.userId = $window.localStorage.getItem("mobilenum"),
        vm.userId.length > 10 && (vm.userId = vm.userId.slice(-10)),
        resendOTPto = userdata.user_id,
        vm.forgotPsswd = {},
        vm.forgotPsswd.user_email_id = angular.copy(resendOTPto),
        userdata.region = topmenuService.regionData.country_code2,
        Analytics.trackEvent("LoginAndSignup", "SignupAttempt", signupLabel, 1, !0, {
            dimension1: signupLabel,
            metric1: 1
        }),
        resendOTPto = userdata.user_id,
        "email_id" == userdata.type || "email" == userdata.type ? userdatanew = {
            email_id: userdata.user_id,
            firstname: userdata.name,
            password: userdata.password,
            region: userdata.region
        } : userdatanew = {
            user_id: userdata.user_id,
            firstname: userdata.name,
            region: userdata.region,
            type: userdata.type
        },
        function(userdata, signupLabel) {
            "Onsite Mobile" == signupLabel ? loginService.signUpUserMobile(userdata).then((function(response) {
                $rootScope.isPageLoading = !1,
                response.data.error ? (vm.IsError = !0,
                vm.errorMsg = response.data.error.message) : (resetUI(),
                vm.isOTPflow = !0,
                vm.showTimer = !0,
                vm.signupform = {},
                vm.countDown = 60,
                downTimer = $interval((function() {
                    vm.countDown--,
                    0 === vm.countDown && (vm.showTimer = !1,
                    $interval.cancel(downTimer))
                }
                ), 1e3))
            }
            )) : loginService.signUpUser(userdata).then((function(response) {
                $rootScope.isPageLoading = !1,
                response.data.error ? topmenuService.isInvalidToken(response.data) ? (topmenuService.accessToken = "",
                loadController()) : (vm.IsError = !0,
                vm.errorMsg = response.data.error.message,
                Analytics.trackEvent("LoginAndSignup", "SignupFailure", response.data.error.message, 1, !0, {
                    dimension1: signupLabel,
                    metric3: 1
                })) : (vm.IsError = !1,
                Analytics.trackEvent("LoginAndSignup", "SignupSuccess", signupLabel, 1, !0, {
                    dimension1: signupLabel,
                    dimension2: response.data.user_id,
                    dimension3: "Yes",
                    metric2: 1
                }),
                vm.signupform = {},
                setUIafterSignup())
            }
            ))
        }(userdatanew, signupLabel)
    }
    ,
    vm.onModeChange = function() {
        vm.loginform = {},
        vm.isMobileLogin = !1,
        vm.isEmailLogin = !1,
        "email" == vm.mode ? vm.isEmailLogin = !0 : vm.isMobileLogin = !0
    }
    ,
    vm.OpenSignUp = function() {
        resetUI(),
        vm.IsError = !1,
        vm.showSignUp = !0,
        vm.signUpPage = !0
    }
    ,
    vm.OpenSignIn = function() {
        resetUI(),
        vm.signoutalert = !1,
        vm.signInPage = !0,
        localStorage.setItem("logoutAlert", !1)
    }
    ,
    vm.closesignout = function() {
        $window.location.reload(!0),
        vm.signoutalert = !1,
        vm.signUpPage = !1,
        localStorage.setItem("logoutAlert", !1)
    }
    ,
    vm.OpenForgotPsswd = function() {
        resetUI(),
        vm.forgotPsswd = {},
        vm.loginform.email_id.indexOf("@"),
        vm.forgotPsswd.email_id = vm.loginform.email_id,
        vm.isForgotPassword = !0
    }
    ;
    var SaveUserData = function(response, signinLabel) {
        vm.IsError = !1,
        localStorage.setItem("userdata", JSON.stringify(response.data.data)),
        topmenuService.isLoggedIn = !0,
        topmenuService.userData = response.data.data,
        session = response.data.data.session,
        sendTags(response.data.data.first_time_login),
        $rootScope.isFirstTimeLogin = response.data.data.first_time_login,
        isIE() || localStorage.setItem("logout-event", "logout" + Math.random())
    }
      , signInhandler = function(response, signinLabel, userSignIn) {
        $rootScope.isPageLoading = !1,
        response.data.error ? topmenuService.isInvalidToken(response.data) ? (topmenuService.accessToken = "",
        retrySignIn = !0,
        loadController()) : (vm.IsError = !0,
        vm.errorMsg = response.data.error.message,
        Analytics.trackEvent("LoginAndSignup", "LoginFailure", response.data.error.message, 1, !0, {
            dimension1: signinLabel,
            metric6: 1
        }),
        "1029" == response.data.error.code && (vm.OpenSignUp(),
        emailsignupflow = "Onsite Email" === signinLabel,
        setUIafterSignup())) : (Analytics.trackEvent("LoginAndSignup", "LoginSuccess", signinLabel, 1, !0, {
            dimension1: signinLabel,
            dimension2: response.data.user_id,
            dimension3: "Yes",
            metric5: 1
        }),
        userSignIn && (firebaseAnalytics.logEvent("login_success", {
            method: "Onsite Email" === signinLabel ? "email Id" : "phone Number",
            u_id: response.data.data.user_id,
            device_id: "NA"
        }),
        $window.sdk.userAttr.u_id = response.data.data.user_id,
        $window.sdk.trackEvent("login_success", {
            method: "Onsite Email" === signinLabel ? "email id" : "phone number",
            event_id: 5,
            event_time: (new Date).toISOString().slice(0, 19)
        })),
        SaveUserData(response))
    };
    $scope.$on("reloaduserData", (function(response) {
        signinLabel = "Onsite Email",
        signInhandler(response, signinLabel, !0)
    }
    ));
    vm.SubmitSignIn = function() {
        vm.signoutalert = !1,
        $rootScope.isPageLoading = !0;
        var userdata = {}
          , signinLabel = "";
        -1 === (userdata = angular.copy(vm.loginform)).email_id.toString().indexOf("@") ? (signinLabel = "Onsite Mobile",
        userdata.user_id = vm.msdcode + userdata.email_id,
        userdata.type = "msisdn",
        resendOTPto = userdata.user_id,
        vm.sendLinkto = angular.copy(vm.loginform.email_id),
        vm.forgotPsswd = {},
        delete userdata.email_id) : (signinLabel = "Onsite Email",
        userdata = angular.copy(vm.loginform),
        vm.forgotPsswd = {},
        vm.sendLinkto = angular.copy(vm.loginform.email_id)),
        Analytics.trackEvent("LoginAndSignup", "LoginAttempt", signinLabel, 1, !0, {
            dimension1: signinLabel,
            metric4: 1
        }),
        function(userdata, signinLabel) {
            "Onsite Mobile" == signinLabel ? loginService.signInUserMobile(userdata).then((function(response) {
                $rootScope.isPageLoading = !1,
                response.data.error ? (vm.IsError = !0,
                vm.errorMsg = response.data.error.message,
                "1029" == response.data.error.code && (resetUI(),
                vm.isOTPflow = !0)) : (resetUI(),
                vm.isOTPflow = !0,
                vm.isSignInFlowMobile = !0,
                vm.showTimer = !0,
                vm.countDown = 60,
                downTimer = $interval((function() {
                    vm.countDown--,
                    0 === vm.countDown && (vm.showTimer = !1,
                    $interval.cancel(downTimer))
                }
                ), 1e3))
            }
            )) : loginService.signInUser(userdata).then((function(response) {
                signInhandler(response, signinLabel, !0)
            }
            ))
        }(userdata, signinLabel)
    }
    ,
    vm.ResetPassword = function() {
        $rootScope.isPageLoading = !0;
        var userData = {};
        vm.otpFlow.otp = `${vm.otpFlow.first_char}${vm.otpFlow.second_char}${vm.otpFlow.third_char}${vm.otpFlow.fourth_char}${vm.otpFlow.fifth_char}${vm.otpFlow.sixth_char}`,
        userData.key = vm.otpFlow.otp,
        userData.password = vm.resetPswd.password,
        userData.confirm_password = vm.resetPswd.confirmpasswd,
        userData.region = topmenuService.regionData.country_code2,
        userData.type = "msisdn",
        loginService.resetPassword(userData).then((function(response) {
            $rootScope.isPageLoading = !1,
            null != response.data.error ? (vm.IsError = !0,
            vm.errorMsg = response.data.error.message) : (vm.OpenSignIn(),
            vm.IsError = !0,
            vm.errorMsg = "Password Changed SuccessFully")
        }
        ))
    }
    ,
    vm.VerifyOtp = function() {
        vm.otpFlow.otp = `${vm.otpFlow.first_char}${vm.otpFlow.second_char}${vm.otpFlow.third_char}${vm.otpFlow.fourth_char}${vm.otpFlow.fifth_char}${vm.otpFlow.sixth_char}`,
        $rootScope.isPageLoading = !0;
        var resendotptoNum = vm.msdcode + vm.sendLinkto;
        isOTPforForgotPassword ? loginService.verifyOTPforgotpswd(vm.otpFlow.otp).then((function(response) {
            $rootScope.isPageLoading = !1,
            response.data.error ? (vm.IsError = !0,
            vm.errorMsg = response.data.error.message) : (resetUI(),
            vm.isResetPasswordFlow = !0)
        }
        )) : vm.isSignInFlowMobile ? loginService.verifyOTPNew(vm.otpFlow.otp, resendotptoNum, "signin", "").then((function(response) {
            $rootScope.isPageLoading = !1,
            response.data.error ? (vm.IsError = !0,
            vm.errorMsg = response.data.error.message) : (resetUI(),
            signinLabel = "Onsite Mobile",
            vm.mobOTPSignUp = !0,
            signInhandler(response, signinLabel, !0),
            vm.succesotpclose = !1,
            ngDialogData.myProperty = !1,
            vm.isOTPflow = !1)
        }
        )) : loginService.verifyOTP(vm.otpFlow.otp, resendotptoNum).then((function(response) {
            $rootScope.isPageLoading = !1,
            response.data.error ? (vm.IsError = !0,
            vm.errorMsg = response.data.error.message,
            firebaseAnalytics.logEvent("signup_failure", {
                error_type: vm.errorMsg,
                method: "phone number",
                device_id: "NA"
            }),
            $window.sdk.trackEvent("signup_failure", {
                error_type: vm.errorMsg,
                method: "phone number",
                event_id: 4,
                event_time: (new Date).toISOString().slice(0, 19)
            })) : (resetUI(),
            signinLabel = "Onsite Mobile",
            vm.mobOTPSignUp = !0,
            signInhandler(response, signinLabel, !1),
            firebaseAnalytics.logEvent("signup_success", {
                method: "phone number",
                u_id: response.data.data.user_id,
                device_id: "NA"
            }),
            $window.sdk.userAttr.u_id = response.data.data.user_id,
            $window.sdk.trackEvent("signup_success", {
                method: "phone number",
                event_id: 3,
                u_id: response.data.data.user_id,
                event_time: (new Date).toISOString().slice(0, 19)
            }),
            vm.succesotpclose = !1,
            ngDialogData.myProperty = !1,
            vm.isOTPflow = !1)
        }
        ))
    }
    ;
    var downTimer;
    vm.showTimer = !1,
    vm.ResendOTPClicked = function(type) {
        $rootScope.isPageLoading = !0;
        var userData = {};
        userData.type = type,
        "msisdn" == userData.type ? (userData.email_id = vm.msdcode + vm.sendLinkto,
        vm.showTimer = !0,
        vm.countDown = 60,
        downTimer = $interval((function() {
            vm.countDown--,
            0 === vm.countDown && (vm.showTimer = !1,
            $interval.cancel(downTimer))
        }
        ), 1e3),
        function(userData) {
            loginService.resendOTPnum(userData).then((function(response) {
                $rootScope.isPageLoading = !1,
                response.data.error && (vm.IsError = !0,
                vm.errorMsg = response.data.error.message)
            }
            ))
        }(userData)) : (userData.email_id = vm.sendLinkto,
        function(userData) {
            loginService.resendOTP(userData).then((function(response) {
                $rootScope.isPageLoading = !1,
                response.data.error && (vm.IsError = !0,
                vm.errorMsg = response.data.error.message)
            }
            ))
        }(userData)),
        $window.localStorage.removeItem("mobilenum")
    }
    ,
    $scope.$on("$destroy", (function() {
        $interval.cancel(downTimer)
    }
    ));
    vm.ForgotPasswordClicked = function() {
        $rootScope.isPageLoading = !0;
        var userData = {};
        userdata = angular.copy(vm.forgotPsswd),
        -1 !== userdata.email_id.indexOf("@") ? (userData.user_id = vm.forgotPsswd.email_id,
        vm.isEmailLogin = "true") : userData.user_id = vm.msdcode + vm.forgotPsswd.email_id,
        userData.region = topmenuService.regionData.country_code2,
        resendOTPto = userData.user_id,
        function(userData) {
            loginService.forgotPassword(userData).then((function(response) {
                $rootScope.isPageLoading = !1,
                null != response.data.error ? (vm.IsError = !0,
                vm.errorMsg = response.data.error.message) : (resetUI(),
                vm.isEmailVerificationFlow = !0,
                vm.forgotpasswemail = !0,
                vm.forgotpasswmsg = response.data.message),
                vm.forgotPsswd = {}
            }
            ))
        }(userData)
    }
    ,
    vm.UpdateProfile = function() {
        var userdata = {};
        if (vm.dateInputValue)
            userdata.birthdate = moment(vm.dateInputValue).format("DD-MM-YYYY");
        else {
            var currentTime = new Date
              , month = (currentTime.getMonth() + 1).toString().padStart(2, "0")
              , day = currentTime.getDate().toString().padStart(2, "0")
              , year = currentTime.getFullYear();
            userdata.birthdate = day + "-" + month + "-" + year
        }
        vm.selectMale || vm.selectFemale ? userdata.gender = vm.selectMale ? "Male" : "Female" : userdata.gender = "",
        vm.location_profile ? userdata.address = vm.location_profile : userdata.address = "",
        profileService.updateUserData(userdata, session).then((function(response) {
            if (response.data.error)
                vm.IsError = !0,
                vm.errorMsg = response.data.error.message;
            else {
                var checkSubscription = localStorage.getItem("subscriptionLocation")
                  , substab = localStorage.getItem("subscriptiontab")
                  , subfootertab = localStorage.getItem("subscriptionFooterTab");
                localStorage.setItem("subscriptiontab", "false"),
                checkSubscription || substab || subfootertab ? gotosubscribe() : (vm.isEditProfile = !1,
                $location.path("/"),
                $rootScope.$broadcast("showPreferenceOverlay"),
                $scope.closeThisDialog(0))
            }
        }
        ))
    }
    ;
    vm.SkipUpdateProfile = function() {
        $window.location.reload(),
        $location.path("/"),
        $rootScope.$broadcast("showPreferenceOverlay"),
        $scope.closeThisDialog(0)
    }
    ;
    var handleExternalSignIn = function(response, socialNtw) {
        response.data.error ? (vm.IsError = !0,
        vm.errorMsg = response.data.error.message) : (Analytics.trackEvent("LoginAndSignup", "LoginSuccess", socialNtw, 1, !0, {
            dimension1: socialNtw,
            dimension2: response.data.data.user_id,
            dimension3: "Yes",
            metric5: 1
        }),
        firebaseAnalytics.logEvent("login_success", {
            method: "social",
            u_id: response.data.data.user_id,
            device_id: "NA"
        }),
        $window.sdk.userAttr.u_id = response.data.data.user_id,
        $window.sdk.trackEvent("login_success", {
            method: "social",
            event_id: 5,
            event_time: (new Date).toISOString().slice(0, 19)
        }),
        session = response.data.data.session,
        response.data.data.profile_pic || (response.data.data.profile_pic = imgUrl,
        function(imgurl) {
            var userdata = {};
            userdata.profile_pic = imgurl,
            profileService.updateUserData(userdata, session).then((function(response) {}
            ))
        }(imgUrl)),
        SaveUserData(response))
    }
      , uploadSocialData = function(usersocialdata, socialNtw) {
        $rootScope.isPageLoading = !0,
        "Facebook" == socialNtw && (vm.social_email_id = usersocialdata.ext_account_email_id),
        loginService.uploadSocialData(usersocialdata).then((function(response) {
            $rootScope.isPageLoading = !1,
            handleExternalSignIn(response, socialNtw)
        }
        ), (function() {
            $rootScope.isPageLoading = !1
        }
        ))
    }
      , reloadCount = 0
      , getTwitterData = function() {
        $rootScope.isPageLoading = !0,
        loginService.getTwitterData().then((function(response) {
            if (topmenuService.isTwitterFlow = !1,
            response.data.errors)
                ++reloadCount < 10 ? getTwitterData() : (vm.IsError = !0,
                vm.errorMsg = "Error signing in via twitter",
                Analytics.trackEvent("LoginAndSignup", "LoginFailure", vm.errorMsg, 1, !0, {
                    dimension1: "Twitter",
                    metric6: 1
                }));
            else {
                var userdataSocial = {};
                userdataSocial.email_id = response.data.user_info.email_id,
                userdataSocial.firstname = response.data.user_info.screen_name,
                userdataSocial.uid = response.data.user_info.user_id,
                userdataSocial.provider = "twitter",
                imgUrl = angular.copy(response.data.user_info.image_url),
                uploadSocialData(userdataSocial, "Twitter")
            }
        }
        ))
    };
    topmenuService.isTwitterFlow && getTwitterData();
    vm.googleLogin = function() {
        ChecknetWork(),
        Analytics.trackEvent("LoginAndSignup", "LoginAttempt", "G+", 1, !0, {
            dimension1: "G+",
            metric4: 1
        }),
        loginService.googlesignIn().then((function(response) {
            !function(response) {
                if (response) {
                    var userdata = {};
                    userdata.ext_account_email_id = response.email,
                    userdata.firstname = response.given_name,
                    userdata.provider = "google",
                    userdata.uid = response.sub,
                    imgUrl = response.picture,
                    uploadSocialData(userdata, "Google")
                } else
                    vm.IsError = !0,
                    vm.errorMsg = "Error signing in via google",
                    Analytics.trackEvent("LoginAndSignup", "LoginFailure", vm.errorMsg, 1, !0, {
                        dimension1: "G+",
                        metric6: 1
                    })
            }(response)
        }
        ))
    }
    ;
    vm.facebookLogin = function() {
        ChecknetWork(),
        Analytics.trackEvent("LoginAndSignup", "LoginAttempt", "Facebook", 1, !0, {
            dimension1: "Facebook",
            metric4: 1
        }),
        loginService.facebooksignin().then((function(response) {
            !function(response) {
                "connected" == response.status ? loginService.getFBUser().then((function(response) {
                    var userdata = {};
                    userdata.ext_account_email_id = response.email,
                    userdata.firstname = response.name,
                    userdata.provider = "facebook",
                    userdata.uid = response.id,
                    imgUrl = response.picture.data.url,
                    uploadSocialData(userdata, "Facebook")
                }
                )) : ($window.history.replaceState(null, null, $window.location.pathname),
                $rootScope.isPageLoading = !1,
                vm.IsError = !0,
                vm.errorMsg = "Error signing in via facebook",
                Analytics.trackEvent("LoginAndSignup", "LoginFailure", vm.errorMsg, 1, !0, {
                    dimension1: "Facebook",
                    metric6: 1
                }))
            }(response)
        }
        ))
    }
    ,
    vm.twitterLogin = function() {
        ChecknetWork(),
        Analytics.trackEvent("LoginAndSignup", "LoginAttempt", "Twitter", 1, !0, {
            dimension1: "Twitter",
            metric4: 1
        }),
        loginService.getTwitterToken().then((function(response) {
            $window.location.href = response.data.url
        }
        ))
    }
    ,
    vm.boxChecked = function() {
        vm.isChecked = !vm.isChecked
    }
    ,
    vm.selectGender = function(type) {
        "male-unselected" == type || "male-selected" == type ? (vm.selectMale = !vm.selectMale,
        vm.selectMale && (vm.selectFemale = !1)) : (vm.selectFemale = !vm.selectFemale,
        vm.selectFemale && (vm.selectMale = !1))
    }
    ,
    vm.goToAboutPage = function(page) {
        "terms" == page ? window.open("/termsandconditions", "_blank") : "privacyPolicy" == page && window.open("/privacypolicy", "_blank")
    }
    ,
    window.checkDeletedValue = function(backIndex) {
        vm.otpFlow[backIndex] = ""
    }
    ,
    vm.closeDialog = function() {
        ngDialog.close()
    }
};
loginControllerIndia.$inject = ["$scope", "$rootScope", "$location", "loginService", "topmenuService", "profileService", "$window", "$interval", "$timeout", "Analytics", "onesignalService", "appConstants", "subscriptionService", "ngDialog"],
angular.module("EktaApp").controller("loginControllerIndia", loginControllerIndia);
var updatemobileController = function($scope, $rootScope, $location, loginService, topmenuService, profileService, $window, $interval, $timeout, Analytics, onesignalService, appConstants, subscriptionService, ngDialog) {
    var downTimer, vm = this;
    vm.mobileUpdateSuccess = !1,
    vm.showOTP = !1,
    vm.showUpdateMobile = !0,
    vm.showTimer = !1;
    var userEmail = localStorage.getItem("userEmailID");
    localStorage.removeItem("userEmailID");
    var loadController = function() {
        "" == topmenuService.accessToken && topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                loadController()
            }
            ))
        }
        ))
    };
    try {
        loadController()
    } catch (error) {
        console.log(error)
    }
    vm.updateMobileNumberNew = function() {
        $rootScope.isPageLoading = !0,
        vm.IsError = !1,
        vm.errorMsg = "";
        var userdata = {};
        userdata.user_id = topmenuService.regionData.calling_code + vm.updateMobile.email_id,
        userdata.type = "msisdn",
        loginService.updateProfileWithMobile(userdata).then((function(response) {
            $rootScope.isPageLoading = !1,
            response.data.error ? (vm.IsError = !0,
            vm.errorMsg = response.data.error.message) : (vm.showUpdateMobile = !1,
            vm.showOTP = !0,
            runTimer())
        }
        ))
    }
    ;
    var runTimer = function() {
        vm.showTimer = !0,
        vm.countDown = 60,
        downTimer = $interval((function() {
            vm.countDown--,
            0 === vm.countDown && (vm.showTimer = !1,
            $interval.cancel(downTimer))
        }
        ), 1e3)
    };
    vm.verifyOTP = function() {
        if (!angular.copy(vm.otpFlow))
            return vm.IsError = !0,
            void (vm.errorMsg = "Please enter OTP");
        $rootScope.isPageLoading = !0,
        vm.otpFlow.otp = `${vm.otpFlow.first_char}${vm.otpFlow.second_char}${vm.otpFlow.third_char}${vm.otpFlow.fourth_char}${vm.otpFlow.fifth_char}${vm.otpFlow.sixth_char}`;
        var resendotptoNum = topmenuService.regionData.calling_code + vm.updateMobile.email_id;
        loginService.verifyOTPNew(vm.otpFlow.otp, resendotptoNum, "update_mobile", userEmail).then((function(response) {
            $rootScope.isPageLoading = !1,
            response.data.error ? (vm.IsError = !0,
            vm.errorMsg = response.data.error.message) : (vm.showUpdateMobile = !1,
            vm.showOTP = !1,
            vm.mobileUpdateSuccess = !0,
            vm.IsError = !1,
            vm.errorMsg = "")
        }
        ))
    }
    ,
    window.checkDeletedValue = function(backIndex) {
        vm.otpFlow[backIndex] = ""
    }
    ,
    vm.closeDialog = function() {
        $window.location.reload(!0),
        ngDialog.close()
    }
};
updatemobileController.$inject = ["$scope", "$rootScope", "$location", "loginService", "topmenuService", "profileService", "$window", "$interval", "$timeout", "Analytics", "onesignalService", "appConstants", "subscriptionService", "ngDialog"],
angular.module("EktaApp").controller("updatemobileController", updatemobileController);
var liveController = function($scope, $rootScope, $routeParams, $location, topmenuService, liveService, ngDialog, $window) {
    var vm = this;
    vm.isWatchLive = !1,
    $rootScope.isPageLoading = !0,
    $rootScope.metatitle = "LIVE",
    $rootScope.selectedChoice = "Live TV",
    $rootScope.metadescription = "Watch your preferred ETV Telugu live channels whenever you want on ETV Win Enjoy a variety of live programming, such as News, Entertainment, and many more things. Stream now for an amazing OTT experience",
    $window.scrollTo(0, 0),
    vm.pagetitle = "ETV Live Channels",
    vm.isWatchLive = !0;
    var tabSource = ""
      , ChecknetWork = function() {
        $window.navigator.onLine || ($rootScope.isPageLoading = !1,
        ngDialog.open({
            template: '<div class="confirm-dialog"><p>Looks like something has gone wrong. Please check your network and retry!</p></div>',
            plain: !0,
            closeByNavigation: !1,
            closeByDocument: !0,
            showClose: !1,
            closeByEscape: !0
        }))
    };
    ChecknetWork();
    var loadController = function() {
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                loadController()
            }
            ))
        }
        )) : liveService.loadData("/catalog_lists/live.gzip?").then((function(response) {
            !function(response) {
                topmenuService.isInvalidContent(response) && $location.path("/404")
            }(response),
            $rootScope.isPageLoading = !1,
            vm.liveItemsList = [],
            vm.liveItemsList = response.data.catalog_list_items,
            tabSource = response.data.display_title
        }
        ))
    };
    loadController(),
    vm.itemClicked = function(listItem) {
        return ChecknetWork(),
        listItem.seo_url
    }
    ,
    vm.itemSource = function() {
        $rootScope.sourceTab = tabSource,
        $rootScope.viewingSource = "NA",
        $rootScope.tray_id = "NA"
    }
};
liveController.$inject = ["$scope", "$rootScope", "$routeParams", "$location", "topmenuService", "liveService", "ngDialog", "$window"],
angular.module("EktaApp").controller("liveController", liveController);
var setLiveUrlparam = function(mediatype) {
    return "/catalogs/live/items/" + mediatype + "?"
}
  , isItemLiked = function(response) {
    return !response.data.error
}
  , livedetailsController = function($scope, $rootScope, $routeParams, liveService, showDetailsService, topmenuService, playlistService, loginService, ngDialog, $window, $location, Analytics, ektaToastService, $mdDialog, subscriptionService) {
    var vm = this;
    $rootScope.isPageLoading = !0,
    $rootScope.selectedChoice = "none",
    $rootScope.metadescription = "Watch your preferred ETV Telugu live channels whenever you want on ETV Win Enjoy a variety of live programming, such as News, Entertainment, and many more things. Stream now for an amazing OTT experience";
    var urlParam, listItemId = "", wasVideoLiked = !1;
    vm.mediaData = [],
    vm.isWatchLive = !1,
    vm.showsubscription = !1,
    vm.relatedBlock = !0,
    $window.scrollTo(0, 0),
    urlParam = setLiveUrlparam($routeParams.liveMedia),
    vm.gb_view_count = !1,
    vm.gb_commentable = !1,
    vm.streem_limit = !1,
    vm.showLoginButton = !0,
    $rootScope.isAdsAvailable = !0,
    vm.upgradePlanMessage = !1,
    vm.userdata = localStorage.getItem("userdata"),
    vm.watchhistory_interval_sec = 3e5,
    $rootScope.isNextItemAvailable = !1,
    $rootScope.playerLoadingIcon = !0;
    var firebaseAnalytics = $window.firebase.analytics();
    $scope.videoUrlLive = "",
    vm.userdata && "null" !== vm.userdata && (vm.showLoginButton = !1);
    var nua, is_iPhone, is_iPad;
    vm.Isios = (nua = navigator.userAgent,
    is_iPhone = null !== nua.match(/iphone/i),
    is_iPad = null !== nua.match(/iPad/i),
    !(!is_iPhone && !is_iPad));
    var pausePlayer = function() {
        try {
            playerObject1.referenceObj.ExternalControls.pause()
        } catch (err) {}
    }
      , isShowRated = function(videoItem) {
        playlistService.isItemAdded("user_ratings", videoItem, topmenuService.userData.session).then((function(response) {
            response.data.error ? vm.isRated = !1 : vm.isRated = !0
        }
        ))
    }
      , sendLikeAnalytics = function() {
        firebaseAnalytics.logEvent("like_button", {
            content_type: vm.mediaData.media_type ? vm.mediaData.media_type : "NA",
            video_name: vm.mediaData.title,
            genre: vm.mediaData.genres[0] ? vm.mediaData.genres[0] : "NA",
            video_language: vm.mediaData.language,
            content_value: vm.mediaData.content_value ? vm.mediaData.content_value : "NA"
        }),
        $window.sdk.trackEvent("like_button", {
            content_type: vm.mediaData.media_type ? vm.mediaData.media_type : "NA",
            video_name: vm.mediaData.title,
            genre: vm.mediaData.genres[0] ? vm.mediaData.genres[0] : "NA",
            video_language: vm.mediaData.language,
            content_value: vm.mediaData.content_value ? vm.mediaData.content_value : "NA",
            event_id: 8,
            event_time: (new Date).toISOString().slice(0, 19)
        }),
        Analytics.trackEvent("Popularity", "VideoLike", vm.mediaData.content_id, 1, !0, {
            dimension2: topmenuService.userData.user_id,
            dimension4: vm.mediaData.title,
            dimension6: vm.mediaData.media_type,
            metric13: 1
        })
    };
    vm.sendShareAnalytics = function(source) {
        firebaseAnalytics.logEvent("share", {
            content_type: vm.mediaData.media_type ? vm.mediaData.media_type : "NA",
            video_name: vm.mediaData.title,
            genre: vm.mediaData.genres[0] ? vm.mediaData.genres[0] : "NA",
            video_language: vm.mediaData.language,
            content_value: vm.mediaData.content_value ? vm.mediaData.content_value : "NA"
        }),
        $window.sdk.trackEvent("share", {
            content_type: vm.mediaData.media_type ? vm.mediaData.media_type : "NA",
            video_name: vm.mediaData.title,
            genre: vm.mediaData.genres[0] ? vm.mediaData.genres[0] : "NA",
            video_language: vm.mediaData.language,
            content_value: vm.mediaData.content_value ? vm.mediaData.content_value : "NA",
            event_id: 11,
            event_time: (new Date).toISOString().slice(0, 19)
        }),
        Analytics.trackEvent("Popularity", "VideoShare", vm.mediaData.content_id, 1, !0, {
            dimension2: topmenuService.userData.user_id,
            dimension4: vm.mediaData.title,
            dimension6: vm.mediaData.media_type,
            dimension14: source,
            metric12: 1
        })
    }
    ;
    var loadController = function() {
        if ("" == topmenuService.accessToken)
            topmenuService.getAccessToken().then((function(response) {
                topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
                topmenuService.accessToken = response.data.access_token,
                topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                    topmenuService.regionData = response.region,
                    loadController()
                }
                ))
            }
            ));
        else {
            try {
                var decode, source = $location.search().source, token = $location.search().token;
                if (source && "" != source)
                    if (decode = Base64.decode(token),
                    (userdata = localStorage.getItem("userdata")) && "null" !== userdata) {
                        var userDataParsed = JSON.parse(userdata)
                          , formattedNumber = decode;
                        userDataParsed.mobile_number != formattedNumber && ($rootScope.ext_mobile_number = formattedNumber,
                        $rootScope.previousLoginNumber = userDataParsed.mobile_number ? userDataParsed.mobile_number : userDataParsed.email_id,
                        $rootScope.userRegion = userDataParsed.profile_obj.region,
                        ngDialog.open({
                            data: {
                                signinerror: !1
                            },
                            template: "app/shared/dialog/showError/showError.html",
                            controller: "showErrorController",
                            controllerAs: "showErrorController",
                            scope: $scope,
                            disableAnimation: !0,
                            closeByNavigation: !0,
                            closeByDocument: !0,
                            showClose: !1
                        }))
                    } else {
                        var userdata;
                        (userdata = {
                            ext_account_email_id: "",
                            firstname: "Guest"
                        }).provider = source,
                        userdata.uid = decode,
                        userdata.region = topmenuService.regionData.country_code2,
                        loginService.uploadSocialData(userdata).then((function(response) {
                            !function(response, socialNtw) {
                                response.data.error ? ($rootScope.signinErrorMsg = response.data.error.message,
                                ngDialog.open({
                                    data: {
                                        signinerror: !0
                                    },
                                    template: "app/shared/dialog/showError/showError.html",
                                    controller: "showErrorController",
                                    controllerAs: "showErrorController",
                                    scope: $scope,
                                    disableAnimation: !0,
                                    closeByNavigation: !0,
                                    closeByDocument: !0,
                                    showClose: !1
                                })) : (Analytics.trackEvent("LoginAndSignup", "LoginSuccess", socialNtw, 1, !0, {
                                    dimension1: socialNtw,
                                    dimension2: response.data.data.user_id,
                                    dimension3: "Yes",
                                    metric5: 1
                                }),
                                firebaseAnalytics.logEvent("login_success", {
                                    method: socialNtw,
                                    u_id: response.data.data.user_id,
                                    device_id: "NA"
                                }),
                                $window.sdk.trackEvent("login_success", {
                                    method: socialNtw,
                                    event_id: 5,
                                    event_time: (new Date).toISOString().slice(0, 19)
                                }),
                                localStorage.setItem("userdata", JSON.stringify(response.data.data)),
                                topmenuService.isLoggedIn = !0,
                                topmenuService.userData = response.data.data,
                                location.reload(),
                                isIE() || localStorage.setItem("logout-event", "logout" + Math.random()))
                            }(response, source)
                        }
                        ))
                    }
            } catch (error) {
                console.log(error)
            }
            liveService.loadData(urlParam).then((function(response) {
                !function(response) {
                    topmenuService.isInvalidContent(response) && $location.path("/404")
                }(response),
                liveService.loadRelated($routeParams.liveMedia).then((function(response) {
                    vm.relatedItem = response.data
                }
                )),
                $rootScope.isPageLoading = !1,
                vm.mediaData = response.data,
                $rootScope.metatitle = vm.mediaData.meta_description,
                $rootScope.metadescription = vm.mediaData.description,
                vm.contentLoaded = !0,
                vm.gb_view_count = vm.mediaData.view_count,
                vm.gb_commentable = vm.mediaData.commentable,
                vm.watchhistory_interval_sec = 1e3 * parseInt(vm.mediaData.watchhistory_interval_sec),
                subscriptionService.getAllPlanDetails("", vm.mediaData.content_id, vm.mediaData.catalog_id).then((function(response) {
                    response.data.error || (vm.videoUrl = response.data.data.stream_info?.adaptive_url)
                }
                )),
                vm.mediaData.access_control.is_free && (vm.isWatchLive = !0);
                var videoItem = {};
                videoItem.content_id = vm.mediaData.content_id,
                videoItem.catalog_id = vm.mediaData.catalog_id,
                isShowRated(videoItem),
                function(videoData) {
                    var videoItem = {};
                    return videoItem.content_id = videoData.content_id,
                    videoItem.catalog_id = videoData.catalog_id,
                    playlistService.isItemAdded("like", videoItem, topmenuService.userData.session).then((function(response) {
                        return response.data.error || (listItemId = response.data.data.items[0].listitem_id),
                        isItemLiked(response)
                    }
                    ))
                }(vm.mediaData).then((function(status) {
                    vm.isAddedToLike = status,
                    wasVideoLiked = angular.copy(vm.isAddedToLike)
                }
                ))
            }
            )).catch((function(error) {}
            ))
        }
    };
    loadController(),
    vm.loadVideo = function() {
        if (vm.checkVideoFree = vm.mediaData.access_control.is_free,
        topmenuService.isLoggedIn)
            subscriptionService.getAllPlanDetails("", vm.mediaData.content_id, vm.mediaData.catalog_id).then((function(response) {
                response.data.data && response.data.data.is_subscribed ? (vm.isWatchLive = !0,
                $rootScope.isAdsAvailable = response.data.data.stream_info?.is_ads_availability,
                vm.upgradePlanMessage = response.data.data.stream_info?.upgrade_plan,
                $scope.videoUrlLive = response.data.data.stream_info?.adaptive_url,
                vm.videoUrl = response.data.data.stream_info?.adaptive_url,
                localStorage.setItem("isUserSubscribed", !0),
                vm.is_stream_limit_exceed = response.data.data.stream_info.is_stream_limit_exceed,
                vm.is_stream_limit_exceed && !vm.mediaData.access_control.is_free ? (vm.isWatchLive = !1,
                vm.streem_limit = !0) : (vm.streem_limit = !1,
                vm.isWatchLive = !0)) : (response.data.error || ($rootScope.isAdsAvailable = response.data.data.stream_info?.is_ads_availability,
                vm.upgradePlanMessage = response.data.data.stream_info?.upgrade_plan,
                $scope.videoUrlLive = response.data.data.stream_info?.adaptive_url,
                vm.videoUrl = response.data.data.stream_info?.adaptive_url),
                vm.showsubscription = !0)
            }
            ));
        else {
            var subscriptionLocation = $window.location.href;
            localStorage.setItem("subscriptionLocation", subscriptionLocation),
            localStorage.setItem("subscriptiontab", "true"),
            vm.showsubscription = !0
        }
    }
    ,
    vm.goto_sucscription = function() {
        if ($rootScope.selectedChoice = "none",
        topmenuService.isLoggedIn) {
            var subscriptionLocation = $window.location.href;
            localStorage.setItem("subscriptionLocation", subscriptionLocation),
            $location.path("/profile").search({
                tab: "subscription"
            })
        } else {
            subscriptionLocation = $window.location.href;
            localStorage.setItem("subscriptionLocation", subscriptionLocation),
            localStorage.setItem("subscriptiontab", "true"),
            $location.path("/subscription-plans")
        }
    }
    ,
    vm.goto_login = function() {
        $rootScope.selectedChoice = "none";
        var subscriptionLocation = $window.location.href;
        localStorage.setItem("subscriptionLocation", subscriptionLocation),
        localStorage.setItem("subscriptiontab", "true"),
        function() {
            pausePlayer(),
            $scope.signoutalert = !1,
            $scope.signInPage = !0;
            var showCloseButton, dialogConfig = {};
            "IN" == topmenuService.regionData.country_code2 ? (dialogConfig = {
                template: "app/shared/dialog/loginIndia/loginDialogIndia.html",
                controller: "loginControllerIndia",
                controllerAs: "loginCtrlIN"
            },
            showCloseButton = !1) : (dialogConfig = {
                template: "app/shared/dialog/login/loginDialog.html",
                controller: "loginController",
                controllerAs: "loginCtrl"
            },
            showCloseButton = !0),
            ngDialog.open({
                ...dialogConfig,
                className: "ngdialog-theme-default",
                scope: $scope,
                disableAnimation: !0,
                closeByNavigation: !0,
                closeByDocument: !1,
                showClose: showCloseButton
            })
        }()
    }
    ,
    $rootScope.setwatch_history = function() {
        setWatchhisttory()
    }
    ,
    vm.sendTime = setInterval((function() {
        setWatchhisttory()
    }
    ), vm.watchhistory_interval_sec),
    $rootScope.clearinterval = function() {
        clearInterval(vm.sendTime)
    }
    ;
    var setWatchhisttory = function() {
        if (topmenuService.userData.session) {
            var videodata = {};
            videodata.content_id = vm.mediaData.content_id,
            videodata.catalog_id = vm.mediaData.catalog_id,
            videodata.play_back_time = "",
            videodata.play_back_status = $rootScope.playBackStatus,
            playlistService.addItem("watchhistory", videodata, topmenuService.userData.session).then((function(response) {
                response.data.error && "1016" == response.data.error.code && (localStorage.setItem("logoutAlert", !0),
                $window.location.reload())
            }
            )).catch((e=>{
                console.log(e)
            }
            ))
        }
    };
    vm.signoutAll = function() {
        topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token;
            try {
                var userdata = localStorage.getItem("userdata")
                  , sessionId = JSON.parse(userdata);
                loginService.signoutalluser(sessionId).then((function(response) {
                    clearStorage()
                }
                ))
            } catch (err) {
                userdata = localStorage.getItem("userdata"),
                sessionId = JSON.parse(userdata);
                loginService.signoutalluser(sessionId).then((function(response) {
                    clearStorage()
                }
                ))
            }
        }
        ))
    }
    ,
    vm.retryOption = function() {
        subscriptionService.getAllPlanDetails("", vm.mediaData.content_id, vm.mediaData.catalog_id).then((function(response) {
            vm.is_stream_limit_exceed = response.data.data.stream_info?.is_stream_limit_exceed,
            $rootScope.isAdsAvailable = response.data.data.stream_info?.is_ads_availability,
            vm.upgradePlanMessage = response.data.data.stream_info?.upgrade_plan,
            $scope.videoUrlLive = response.data.data.stream_info?.adaptive_url,
            vm.videoUrl = $scope.videoUrlLive,
            vm.videoUrl = response.data.data.stream_info?.adaptive_url,
            vm.is_stream_limit_exceed && !vm.mediaData.access_control.is_free ? (vm.isWatchLive = !1,
            vm.streem_limit = !0) : (vm.streem_limit = !1,
            vm.isWatchLive = !0),
            vm.mediaData.access_control.is_free && (vm.isWatchLive = !0)
        }
        ))
    }
    ;
    var clearStorage = function() {
        localStorage.removeItem("userdata"),
        localStorage.removeItem("subscriptiontab"),
        localStorage.removeItem("subscriptionFooterTab"),
        localStorage.removeItem("isUserSubscribed"),
        localStorage.removeItem("subscriptionLocation"),
        localStorage.removeItem("subsId"),
        localStorage.setItem("logout-event", "logout" + Math.random()),
        $rootScope.profilepic = "assets/img/usericon.svg",
        $rootScope.isGuestUser = !0,
        $location.path("/home").search({}),
        topmenuService = {},
        setTimeout((()=>{
            $window.location.reload()
        }
        ), 300)
    }
      , setLikeStatus = function(status) {
        vm.isAddedToLike = status,
        status ? (wasVideoLiked ? vm.mediaData.like_count = "" : (vm.mediaData.like_count = "1",
        sendLikeAnalytics()),
        ektaToastService.show("You have liked this video")) : (vm.mediaData.like_count = wasVideoLiked ? -1 : "",
        ektaToastService.show("You have unliked this video"))
    };
    vm.addToPlaylist = function() {
        if (topmenuService.isLoggedIn) {
            vm.isLikeDisabled = !0;
            var videoItem = {};
            videoItem.catalog_id = vm.mediaData.catalog_object.id,
            videoItem.content_id = vm.mediaData.content_id,
            videoItem.like_count = "true",
            function(isAdded, videoItem) {
                isAdded ? playlistService.deleteItem("like", listItemId, topmenuService.userData.session).then((function(response) {
                    setLikeStatus(!1)
                }
                )) : playlistService.addItem("like", videoItem, topmenuService.userData.session).then((function(response) {
                    setLikeStatus(!0),
                    response.data.error || (listItemId = response.data.data[0].listitem_id),
                    sendLikeAnalytics()
                }
                ))
            }(vm.isAddedToLike, videoItem)
        } else {
            vm.isAddedToWatchLater = !1,
            vm.isAddedToLike = !1,
            $scope.signInPage = !0,
            pausePlayer();
            var showCloseButton, dialogConfig = {};
            "IN" == topmenuService.regionData.country_code2 ? (dialogConfig = {
                template: "app/shared/dialog/loginIndia/loginDialogIndia.html",
                controller: "loginControllerIndia",
                controllerAs: "loginCtrlIN"
            },
            showCloseButton = !1) : (dialogConfig = {
                template: "app/shared/dialog/login/loginDialog.html",
                controller: "loginController",
                controllerAs: "loginCtrl"
            },
            showCloseButton = !0),
            ngDialog.open({
                ...dialogConfig,
                className: "ngdialog-theme-default",
                scope: $scope,
                disableAnimation: !0,
                closeByNavigation: !0,
                closeByDocument: !1,
                showClose: showCloseButton
            })
        }
    }
    ,
    vm.closeCommentDialog = function() {
        vm.showComment = !1
    }
    ,
    vm.openCommentDialog = function() {
        $("html, body").animate({
            scrollTop: $("#commmentsList").offset().top - 100
        }, 500)
    }
    ;
    function mdDialogController($scope, $mdDialog) {
        $scope.ratingDisabled = !0,
        $scope.hide = function() {
            $mdDialog.hide()
        }
        ,
        $scope.cancel = function() {
            $mdDialog.cancel()
        }
        ,
        $scope.rate = function(rating) {
            $mdDialog.hide(rating)
        }
        ,
        $scope.ratingClicked = function() {
            $scope.userRating > 0 ? $scope.ratingDisabled = !1 : $scope.ratingDisabled = !0
        }
    }
    vm.showPrompt = function(ev) {
        if (topmenuService.isLoggedIn) {
            var videoItem = {};
            videoItem.content_id = vm.mediaData.content_id,
            videoItem.catalog_id = vm.mediaData.catalog_id,
            isShowRated(videoItem),
            vm.isRated ? ektaToastService.show("You have already rated this.") : $mdDialog.show({
                controller: mdDialogController,
                templateUrl: "ratingdialog.html",
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: !0,
                fullscreen: $scope.customFullscreen
            }).then((function(rating) {
                !function(rating) {
                    var videoItem = {};
                    videoItem.content_id = vm.mediaData.content_id,
                    videoItem.catalog_id = vm.mediaData.catalog_id,
                    videoItem.user_ratings = rating.toString(),
                    playlistService.addItem("user_ratings", videoItem, topmenuService.userData.session).then((function(response) {
                        if (null != response.data.data[0].user_ratings) {
                            ektaToastService.show("You posted " + rating.toString() + " star rating");
                            var updatedRatings = (parseFloat(vm.mediaData.average_user_rating) * vm.mediaData.no_of_user_rated + rating) / (vm.mediaData.no_of_user_rated + 1);
                            vm.mediaData.average_user_rating = updatedRatings.toString(),
                            vm.isRated = !0
                        } else
                            ektaToastService.show("You have already rated this.")
                    }
                    ))
                }(rating)
            }
            ), (function() {
                $scope.status = "You cancelled the dialog."
            }
            ))
        } else
            !function() {
                $scope.signInPage = !0;
                var showCloseButton, dialogConfig = {};
                "IN" == topmenuService.regionData.country_code2 ? (dialogConfig = {
                    template: "app/shared/dialog/loginIndia/loginDialogIndia.html",
                    controller: "loginControllerIndia",
                    controllerAs: "loginCtrlIN"
                },
                showCloseButton = !1) : (dialogConfig = {
                    template: "app/shared/dialog/login/loginDialog.html",
                    controller: "loginController",
                    controllerAs: "loginCtrl"
                },
                showCloseButton = !0),
                ngDialog.open({
                    ...dialogConfig,
                    className: "ngdialog-theme-default",
                    scope: $scope,
                    disableAnimation: !0,
                    closeByNavigation: !0,
                    closeByDocument: !1,
                    showClose: showCloseButton
                })
            }()
    }
    ,
    vm.itemClicked = function(listItem, source) {
        $rootScope.viewingSource = source,
        $rootScope.tray_id = "NA"
    }
    ,
    vm.itemClickedtest = function(listItem, source) {
        return listItem.seo_url
    }
};
livedetailsController.$inject = ["$scope", "$rootScope", "$routeParams", "liveService", "showDetailsService", "topmenuService", "playlistService", "loginService", "ngDialog", "$window", "$location", "Analytics", "ektaToastService", "$mdDialog", "subscriptionService"],
angular.module("EktaApp").controller("livedetailsController", livedetailsController);
var liveService = function($http, $q, httpService, appConstants, topmenuService, md5) {
    return {
        loadRelated: function(urlParam) {
            var deferred = $q.defer()
              , urlpath = "/catalogs/live/items/" + urlParam + "/related?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&region=" + topmenuService.regionData.country_code2;
            return httpService.getData(urlpath).then((function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        loadData: function(urlParam) {
            var deferred = $q.defer()
              , urlpath = urlParam + "auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&region=" + topmenuService.regionData.country_code2 + "&npage_size=10";
            return httpService.getData(urlpath).then((function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        GetHlsUrlList: function(smartUrl) {
            var deferred = $q.defer()
              , hlsUrlDomain = smartUrl + "?service_id=10&play_url=yes&protocol=hls&us="
              , signature = md5.createHash("ywVXaTzycwZ8agEs3ujx" + hlsUrlDomain);
            return $http({
                method: "GET",
                url: hlsUrlDomain + signature
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            )),
            deferred.promise
        }
    }
};
liveService.$inject = ["$http", "$q", "httpService", "appConstants", "topmenuService", "md5"],
angular.module("EktaApp").service("liveService", liveService);
var aboutUsController = function($window, $rootScope, topmenuService, aboutusService, vcRecaptchaService) {
    var vm = this;
    $window.scrollTo(0, 0),
    $rootScope.isPageLoading = !0,
    $rootScope.selectedChoice = "none",
    $rootScope.metadescription = "",
    vm.contactForm = !0,
    vm.enableSubmit = !1,
    vm.showLoader = !1;
    var formData = {}
      , location = window.location.href.split("/")[3];
    vm.retry = function() {
        window.history.back()
    }
    ,
    "aboutus" == location ? ($rootScope.metatitle = "ABOUT US",
    vm.pageName = "about_us") : "contactus" == location ? ($rootScope.metatitle = "CONTACT US",
    $rootScope.metadescription = "Contact us right now! Get in touch with ETV Win team for rapid support, questions, or comments. We are available to answer your queries and offer you the support you require. Please get in touch right away.") : "privacypolicy" == location ? $rootScope.metatitle = "PRIVACY POLICY" : "termsandconditions" == location ? ($rootScope.metatitle = "TERMS AND CONDITIONS",
    vm.pageName = "terms_conditions") : "faq" == location && ($rootScope.metatitle = "FAQ");
    var loadController = function() {
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                topmenuService.loadConfig(topmenuService.accessTokenParam, topmenuService.regionData.country_code2).then((function(response) {
                    topmenuService.configData = response.data
                }
                )),
                loadController()
            }
            ))
        }
        )) : "aboutus" == location || "termsandconditions" == location ? aboutusService.aboutusPage(vm.pageName).then((function(response) {
            ($rootScope.isPageLoading = !1,
            vm.staticPageContent = response.data.static_page.description,
            vm.staticPageContent) ? document.getElementById("staticPage").innerHTML = vm.staticPageContent : document.getElementById("staticPageError").innerHTML = "Something went wrong. Please try again!!"
        }
        )) : "contactus" == location ? topmenuService.configData ? (vm.issueList = topmenuService.configData.params_hash2.config_params.issue_list,
        $rootScope.isPageLoading = !1) : topmenuService.loadConfig(topmenuService.accessTokenParam, topmenuService.regionData.country_code2).then((function(response) {
            $rootScope.isPageLoading = !1,
            topmenuService.configData = response.data,
            vm.issueList = topmenuService.configData.params_hash2.config_params.issue_list
        }
        )) : $rootScope.isPageLoading = !1
    };
    loadController();
    vm.imageChanged = function(input) {
        if (function(input) {
            return !(!input.files || !input.files[0] || (file = input.files[0],
            "image/jpg" != file.type && "image/JPG" != file.type && "image/png" != file.type && "image/PNG" != file.type && "image/jpeg" != file.type && "image/JPEG" != file.type && "image/gif" != file.type && "image/GIF" != file.type));
            var file
        }(input)) {
            var reader = new FileReader;
            if (reader.readAsDataURL(input.files[0]),
            void input.files[0].size)
                return document.getElementById("selectedFile").innerHTML = "",
                void (document.getElementById("fileError").innerHTML = "Please select image less than 1 MB");
            reader.onloadend = function() {
                var fileData = reader.result;
                formData.file = fileData
            }
            ,
            document.getElementById("selectedFile").innerHTML = input.files[0].name
        } else
            document.getElementById("selectedFile").innerHTML = "",
            document.getElementById("fileError").innerHTML = "Please select valid image"
    }
    ,
    vm.submitForm = function() {
        formData.name = vm.name,
        formData.email = vm.email,
        formData.phoneNumber = vm.phoneNumber,
        formData.message = vm.message;
        var selectedValue = document.getElementById("issueSelect").value;
        formData.issue = selectedValue;
        var fileError = document.getElementById("fileError").innerHTML;
        return formData.name ? formData.email ? formData.phoneNumber ? "Select your issue" == formData.issue ? document.getElementById("formError").innerHTML = "*Please select the issue" : formData.message ? formData.name.replace(/[^a-zA-Z]/g, "").length < 2 ? document.getElementById("formError").innerHTML = "*Please enter valid Name" : formData.phoneNumber.toString().length < 10 ? document.getElementById("formError").innerHTML = "*Please enter valid contact number" : formData.email.match(/^([0-9]{9})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$/) ? fileError ? document.getElementById("formError").innerHTML = "*Please select valid image" : (document.getElementById("formError").innerHTML = "",
        vm.showLoader = !0,
        void aboutusService.contactForm(formData).then((function(response) {
            vm.showLoader = !1,
            response.data.message ? ($window.scrollTo(0, 0),
            vm.contactForm = !1,
            vm.successMessage = response.data.message) : document.getElementById("formError").innerHTML = "Something went wrong. Please try after sometime."
        }
        ))) : document.getElementById("formError").innerHTML = "*Please enter valid email address" : document.getElementById("formError").innerHTML = "*Please enter Message" : document.getElementById("formError").innerHTML = "*Please enter Mobile number" : document.getElementById("formError").innerHTML = "*Please enter Email ID" : document.getElementById("formError").innerHTML = "*Please enter Name"
    }
    ,
    vm.setResponse = function(response) {
        vm.enableSubmit = !0
    }
    ,
    vm.cbExpiration = function() {
        vm.enableSubmit = !1
    }
};
angular.module("EktaApp").controller("aboutUsController", aboutUsController),
aboutUsController.$inject = ["$window", "$rootScope", "topmenuService", "aboutusService", "vcRecaptchaService"];
var aboutusService = function($q, $http, appConstants, topmenuService, $window) {
    return {
        contactForm: function(data) {
            var formData = function(data) {
                var formData = {};
                return formData.auth_token = appConstants.authToken,
                formData.access_token = topmenuService.accessToken,
                formData.region = topmenuService.regionData.country_code2,
                formData.user_email = data.email,
                formData.user_name = data.name,
                formData.mobile_number = data.phoneNumber,
                formData.issue_type = data.issue,
                formData.message = data.message,
                formData.file_input = !!data.file && data.file,
                JSON.stringify(formData)
            }(data)
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/contact",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        aboutusPage: function(page) {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/config/static_page/" + page + "?auth_token=" + appConstants.authToken + "&access_token=" + topmenuService.accessToken
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        }
    }
};
function filterController($scope, $rootScope, filterService, recipeService, topmenuService) {
    var vm = this;
    vm.checkedItems = [],
    vm.selectedTag = "both",
    vm.genreList = [];
    var selectedSG = "both";
    $rootScope.isPageLoading = !0;
    var allChecked = !1;
    vm.loadGenres = function(tag) {
        var tagParam;
        selectedSG == tag && 0 != vm.genreList.length || (vm.checkedItems = [],
        allChecked = !1,
        selectedSG = tag,
        tagParam = "both" == tag ? "" : "&tags=" + tag,
        filterService.loadGenres(tagParam).then((function(response) {
            vm.isSelectAllChecked = !1,
            $rootScope.isPageLoading = !1,
            vm.genreList = response.data.items,
            vm.genreList.forEach((function(item) {
                item.isChecked = !1
            }
            ))
        }
        )))
    }
    ,
    vm.loadGenres(vm.selectedTag),
    vm.checkedItem = function(genreItem) {
        -1 === vm.checkedItems.indexOf(genreItem.name) ? (vm.checkedItems.push(genreItem.name),
        genreItem.isChecked = !0) : (vm.checkedItems.splice(vm.checkedItems.indexOf(genreItem.name), 1),
        genreItem.isChecked = !1,
        allChecked && (allChecked = !1,
        vm.isSelectAllChecked = !1))
    }
    ,
    vm.selectAll = function() {
        vm.checkedItems = [],
        allChecked ? (vm.isSelectAllChecked = !1,
        vm.checkedItems = [],
        vm.genreList.forEach((function(item) {
            item.isChecked = !1
        }
        ))) : (vm.isSelectAllChecked = !0,
        vm.genreList.forEach((function(item) {
            vm.checkedItems.push(item.name),
            item.isChecked = !0
        }
        ))),
        allChecked = !allChecked
    }
    ,
    vm.submit = function() {
        var subGenreParam = "";
        subGenreParam = "both" == selectedSG ? "non_veg,veg" : selectedSG;
        var filterConfig = {};
        filterConfig.genreList = vm.checkedItems,
        filterConfig.subGenre = subGenreParam,
        $rootScope.$broadcast("loadFilter", filterConfig),
        $scope.closeThisDialog(0)
    }
}
aboutusService.$inject = ["$q", "$http", "appConstants", "topmenuService", "$window"],
angular.module("EktaApp").service("aboutusService", aboutusService),
filterController.$inject = ["$scope", "$rootScope", "filterService", "recipeService", "topmenuService"],
angular.module("EktaApp").controller("filterController", filterController);
var filterService = function($q, $http, appConstants, topmenuService) {
    return {
        loadGenres: function(tags) {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/catalogs/recipes/genres.gzip?region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + tags
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            )),
            deferred.promise
        }
    }
};
filterService.$inject = ["$q", "$http", "appConstants", "topmenuService"],
angular.module("EktaApp").service("filterService", filterService);
var feedbackController = function($scope, feedbackService, topmenuService, $location) {
    var vm = this;
    vm.showLoading = !1,
    topmenuService.isLoggedIn ? vm.isGuestUser = !1 : vm.isGuestUser = !0,
    vm.formSubmitted = !1,
    vm.showExists = !1;
    vm.ErrorMsg = "Your opinions, your feedback, your suggestions, let them flow. This is your space. It will help us in improving the website.";
    var loadController = function() {
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                loadController()
            }
            ))
        }
        )) : feedbackService.loadChannelList().then((function(response) {
            vm.channelList = response.data.catalog_list_items
        }
        ))
    };
    loadController(),
    vm.loadShows = function(item) {
        vm.showname = "",
        vm.showList = {},
        feedbackService.loadShows(item.content_id).then((function(response) {
            vm.showList = response.data.items,
            vm.showList.push({
                title: "Others"
            }),
            vm.showExists = vm.showList.length > 0
        }
        ))
    }
    ,
    vm.SubmitFeedback = function() {
        vm.showLoading = !0;
        var feedbackData = {};
        feedbackData.email_id = vm.email_id,
        feedbackData.title = "feedback",
        feedbackData.status = "published",
        feedbackData.channel_name = "etv-telugu",
        feedbackData.show_name = vm.showname,
        feedbackData.comments = vm.comment,
        feedbackData.session_id = topmenuService.userData.session,
        feedbackData.user_id = topmenuService.userData.user_id,
        feedbackData.Name = topmenuService.userData.firstname,
        feedbackData.Age = "25",
        feedbackData.Gender = "Female",
        feedbackService.submitFeedback(feedbackData).then((function(response) {
            response.data.error ? vm.ErrorMsg = "Something went wrong, Please try again later." : vm.formSubmitted = !0
        }
        ))
    }
    ,
    vm.gotoHome = function() {
        $location.path("/home"),
        $scope.closeThisDialog(0)
    }
};
feedbackController.$inject = ["$scope", "feedbackService", "topmenuService", "$location"],
angular.module("EktaApp").controller("feedbackController", feedbackController);
var feedbackService = function($q, $http, appConstants, topmenuService) {
    void 0 === topmenuService.regionData.country_code2 && (topmenuService.regionData.country_code2 = "IN");
    return {
        loadChannelList: function() {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/catalog_lists/channels.gzip?region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            )),
            deferred.promise
        },
        loadShows: function(channelId) {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/catalogs/" + topmenuService.configData.params_hash2.config_params.show.friendly_id + "/items.gzip?region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&channel_id=" + channelId
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            )),
            deferred.promise
        },
        submitFeedback: function(feedbackData) {
            var formData = {};
            formData.auth_token = appConstants.authToken,
            formData.access_token = topmenuService.accessToken,
            formData.region = topmenuService.regionData.country_code2,
            formData.email_id = feedbackData.email_id,
            formData.channel_name = feedbackData.channel_name,
            formData.show_name = feedbackData.show_name,
            formData.comments = feedbackData.comments;
            var deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/feedback",
                headers: {
                    "Content-Type": "application/json"
                },
                transformRequest: function(data) {
                    var formData = {};
                    return formData.auth_token = appConstants.authToken,
                    formData.access_token = topmenuService.accessToken,
                    formData.region = topmenuService.regionData.country_code2,
                    formData.email_id = feedbackData.email_id,
                    formData.channel_name = feedbackData.channel_name,
                    formData.show_name = feedbackData.show_name,
                    formData.comments = feedbackData.comments,
                    JSON.stringify(formData)
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        }
    }
};
feedbackService.$inject = ["$q", "$http", "appConstants", "topmenuService"],
angular.module("EktaApp").service("feedbackService", feedbackService);
var showErrorController = function($scope, $rootScope, $window, $location, topmenuService, Analytics, loginService, ngDialog) {
    var vm = this;
    vm.IsError = !1;
    var firebaseAnalytics = $window.firebase.analytics();
    $rootScope.previousLoginNumber && (-1 === $rootScope.previousLoginNumber.indexOf("@") ? ($rootScope.previousLoginNumber.startsWith("00") && ($rootScope.previousLoginNumber = $rootScope.previousLoginNumber.slice(2)),
    vm.loggedInMobileNumber = $rootScope.previousLoginNumber) : vm.loggedInMobileNumber = $rootScope.previousLoginNumber),
    $rootScope.ext_mobile_number && ($rootScope.ext_mobile_number.startsWith("00") && ($rootScope.ext_mobile_number = $rootScope.ext_mobile_number.slice(2)),
    vm.ext_mobile_number = $rootScope.ext_mobile_number),
    $rootScope.signinErrorMsg && (vm.signinErrorMsg = $rootScope.signinErrorMsg);
    var clearStorage = function() {
        localStorage.removeItem("userdata"),
        localStorage.removeItem("subscriptiontab"),
        localStorage.removeItem("subscriptionFooterTab"),
        localStorage.removeItem("isUserSubscribed"),
        localStorage.removeItem("subscriptionLocation"),
        localStorage.removeItem("subsId"),
        localStorage.removeItem("addplanname"),
        localStorage.removeItem("mobilenum"),
        localStorage.setItem("logout-event", "logout" + Math.random()),
        $rootScope.profilepic = "assets/img/usericon.svg",
        $rootScope.isGuestUser = !0,
        topmenuService = {}
    };
    vm.handleSilentLogin = function() {
        var source = $location.search().source
          , token = $location.search().token
          , decode = Base64.decode(token);
        $rootScope.signinErrorMsg = "",
        vm.errorMsg = "";
        var userdata = {
            ext_account_email_id: "",
            firstname: "Guest"
        };
        userdata.provider = source,
        userdata.uid = decode,
        userdata.region = $rootScope.userRegion,
        loginService.uploadSocialData(userdata).then((function(response) {
            !function(response, socialNtw) {
                response.data.error ? (vm.IsError = !0,
                vm.errorMsg = response.data.error.message) : (Analytics.trackEvent("LoginAndSignup", "LoginSuccess", socialNtw, 1, !0, {
                    dimension1: socialNtw,
                    dimension2: response.data.data.user_id,
                    dimension3: "Yes",
                    metric5: 1
                }),
                firebaseAnalytics.logEvent("login_success", {
                    method: socialNtw,
                    u_id: response.data.data.user_id,
                    device_id: "NA"
                }),
                $window.sdk.trackEvent("login_success", {
                    method: socialNtw,
                    event_id: 5,
                    event_time: (new Date).toISOString().slice(0, 19)
                }),
                localStorage.setItem("userdata", JSON.stringify(response.data.data)),
                topmenuService.isLoggedIn = !0,
                topmenuService.userData = response.data.data,
                location.reload(),
                isIE() || localStorage.setItem("logout-event", "logout" + Math.random()))
            }(response, source)
        }
        ))
    }
    ,
    vm.silentLogin = function() {
        vm.IsError = !1,
        topmenuService.getAccessToken().then((function(response) {
            $window.navigator.onLine || ($rootScope.isPageLoading = !1,
            ngDialog.open({
                template: '<div class="confirm-dialog"><p>Looks like something has gone wrong. Please check your network and retry!</p></div>',
                plain: !0,
                closeByNavigation: !1,
                closeByDocument: !0,
                showClose: !1,
                closeByEscape: !0
            })),
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token;
            try {
                var userdata = localStorage.getItem("userdata")
                  , sessionId = JSON.parse(userdata);
                loginService.signoutuser(sessionId).then((function(response) {
                    clearStorage(),
                    vm.handleSilentLogin()
                }
                ))
            } catch (err) {
                userdata = localStorage.getItem("userdata"),
                sessionId = JSON.parse(userdata),
                loginService.signoutuser(sessionId).then((function(response) {
                    clearStorage(),
                    vm.handleSilentLogin()
                }
                ))
            }
        }
        ))
    }
    ,
    vm.closeDialog = function() {
        ngDialog.close()
    }
};
function questionFormController($scope, showDetailsService, topmenuService, ektaToastService, appConstants, $window) {
    var vm = this
      , i = 0
      , paramsList = [];
    vm.customArray = [],
    vm.groupedArray = [],
    vm.IsError = !1,
    vm.isPageLoaded = !1,
    function loadController() {
        var urlData = "?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&region=" + topmenuService.regionData.country_code2;
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                urlData = "?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&region=" + topmenuService.regionData.country_code2,
                loadController()
            }
            ))
        }
        )) : showDetailsService.getQuestion(urlData).then((function(response) {
            vm.questionData = response.data,
            vm.isPageLoaded = !0,
            topmenuService.overrideforEach(vm.questionData.item_metadata, (function(value, key) {
                value.grouped ? vm.questionData.grouped_tags[i] == value.grouped && (vm.groupedArray.push(value),
                2 === vm.groupedArray.length && (vm.customArray.push({
                    groupedArray: vm.groupedArray
                }),
                vm.groupedArray = [],
                i += 1)) : vm.customArray.push(value)
            }
            )),
            function(arrayItem) {
                for (var i = 0; i < arrayItem.length; i++)
                    if (arrayItem[i].type && "single_select" != arrayItem[i].type)
                        switch (arrayItem[i].title.toLowerCase()) {
                        case "name":
                            arrayItem[i].pattern = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
                            arrayItem[i].message = "Enter a valid name";
                            break;
                        case "age":
                            arrayItem[i].pattern = /^[1-9][0-9]?$|^100$/,
                            arrayItem[i].message = "Enter a valid age";
                            break;
                        case "height":
                            arrayItem[i].pattern = /^[0-9]{1,3}$/,
                            arrayItem[i].message = "Enter a valid height";
                            break;
                        case "weight":
                            arrayItem[i].pattern = /^[0-9]{1,3}$/,
                            arrayItem[i].message = "Enter a valid weight";
                            break;
                        case "phone number":
                            arrayItem[i].pattern = /^[0-9]{10}$/,
                            arrayItem[i].message = "Enter a valid phone number"
                        }
                    else if (arrayItem[i].groupedArray && arrayItem[i].groupedArray[1].grouped)
                        switch (arrayItem[i].groupedArray[1].grouped.toLowerCase()) {
                        case "weight":
                            arrayItem[i].groupedArray[1].pattern = /^[0-9]{1,3}$/,
                            arrayItem[i].groupedArray[1].message = "Enter a valid weight";
                            break;
                        case "bp":
                            arrayItem[i].groupedArray[1].pattern = /^[0-9/]{6}$/,
                            arrayItem[i].groupedArray[1].message = "Enter a valid BP range";
                            break;
                        case "diabetes":
                            arrayItem[i].groupedArray[1].pattern = /^[0-9]{1,3}$/,
                            arrayItem[i].groupedArray[1].message = "Enter a valid diabtes valur"
                        }
            }(vm.customArray)
        }
        ))
    }();
    (paramsList = []).push('"session_id":"' + topmenuService.userData.session + '"'),
    paramsList.push('"status":"published"'),
    paramsList.push('"title":"title"'),
    vm.submit = function() {
        topmenuService.overrideforEach(vm.customArray, (function(value, key) {
            value.groupedArray ? topmenuService.overrideforEach(value.groupedArray, (function(val, key) {
                val.model && paramsList.push('"' + val.title + '":"' + val.model + '"')
            }
            )) : paramsList.push('"' + value.title + '":"' + value.model + '"')
        }
        ));
        var finalObject = "{" + paramsList.join(",") + "}"
          , formJson = JSON.parse(finalObject);
        showDetailsService.submitForm(formJson).then((function(response) {
            "published" == response.data.status ? ($scope.closeThisDialog(0),
            ektaToastService.show("Your question has been sent successfully. ETV team is reviewing and you be getting notified once the doctor answers it.")) : (vm.IsError = !0,
            vm.errorMsg = response.data.error.message,
            $(".ekt-dialog-header")[0].scrollIntoView())
        }
        ))
    }
    ,
    vm.changetextbox = function(item) {
        "cm" != item && "inch" != item || (vm.newpattern = /^[0-9]{1,3}$/,
        vm.message = "Enter a valid height"),
        "feet" == item && (vm.newpattern = /^[1-9]\d*(\.\d+)?$/,
        vm.message = "Enter valid feet")
    }
    ,
    vm.bindingModel = function(item, value) {
        return "No" != value.groupedArray[0].model && value.groupedArray[0].model ? item.model : ""
    }
}
showErrorController.$inject = ["$scope", "$rootScope", "$window", "$location", "topmenuService", "Analytics", "loginService", "ngDialog"],
angular.module("EktaApp").controller("showErrorController", showErrorController),
questionFormController.$inject = ["$scope", "showDetailsService", "topmenuService", "ektaToastService", "appConstants", "$window"],
angular.module("EktaApp").controller("questionFormController", questionFormController);
var watchLaterController = function($window, playlistService, topmenuService, ngDialog, $location, $rootScope) {
    $window.scrollTo(0, 0);
    var vm = this;
    $rootScope.isPageLoading = !0,
    $rootScope.metatitle = "Watch Later";
    vm.title = "Watch Later",
    vm.isEditable = !1,
    vm.isItemAvailable = !0,
    vm.isItemLoaded = !1,
    vm.deleteButtonDisabled = !0;
    var checkedItems = []
      , allChecked = !1
      , userinfo = localStorage.getItem("userdata");
    vm.user = JSON.parse(userinfo);
    $window.navigator.onLine || ($rootScope.isPageLoading = !1,
    ngDialog.open({
        template: '<div class="confirm-dialog"><p>Looks like something has gone wrong. Please check your network and retry!</p></div>',
        plain: !0,
        closeByNavigation: !1,
        closeByDocument: !0,
        showClose: !1,
        closeByEscape: !0
    }));
    var checkForContent = function() {
        0 == vm.allItemsList.length ? (vm.isItemAvailable = !1,
        vm.isItemLoaded = !1) : (vm.isItemAvailable = !0,
        vm.isItemLoaded = !0)
    }
      , setDeleteButton = function() {
        checkedItems.length > 0 ? vm.deleteButtonDisabled = !1 : vm.deleteButtonDisabled = !0
    }
      , loadController = function() {
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                loadController()
            }
            ))
        }
        )) : playlistService.loadList("watchlater", topmenuService.userData.session).then((function(response) {
            $rootScope.isPageLoading = !1,
            vm.allItemsList = response.data.items,
            vm.itemDisplayTitle = response.data.display_title,
            checkForContent()
        }
        ))
    };
    topmenuService.isLoggedIn || vm.user ? loadController() : $location.path("/"),
    vm.setEditMode = function(mode) {
        vm.isEditable = mode,
        mode || (vm.isSelectAllChecked = !1,
        checkedItems = [],
        vm.allItemsList.forEach((function(item) {
            item.isChecked = !1
        }
        )))
    }
    ,
    vm.selectAll = function() {
        checkedItems = [],
        allChecked ? (vm.isSelectAllChecked = !1,
        checkedItems = [],
        vm.allItemsList.forEach((function(item) {
            item.isChecked = !1
        }
        ))) : (vm.isSelectAllChecked = !0,
        vm.allItemsList.forEach((function(item) {
            checkedItems.push(item),
            item.isChecked = !0
        }
        ))),
        allChecked = !allChecked,
        setDeleteButton()
    }
    ,
    vm.checkedItem = function(videoItem) {
        -1 === checkedItems.indexOf(videoItem) ? (checkedItems.push(videoItem),
        videoItem.isChecked = !0) : (checkedItems.splice(checkedItems.indexOf(videoItem), 1),
        videoItem.isChecked = !1,
        allChecked && (allChecked = !1,
        vm.isSelectAllChecked = !1)),
        setDeleteButton()
    }
    ,
    vm.deleteItems = function() {
        ngDialog.openConfirm({
            template: "app/shared/dialog/confirmation/confirmationDialog.html",
            className: "ngdialog-theme-default",
            closeByNavigation: !0,
            showClose: !1
        }).then((function() {
            var itemsList = [];
            checkedItems.forEach((function(entry) {
                itemsList.push(entry.listitem_id)
            }
            )),
            playlistService.deleteItem("watchlater", itemsList.join(","), topmenuService.userData.session).then((function() {}
            )),
            vm.allItemsList = vm.allItemsList.filter((function(val) {
                return -1 == checkedItems.indexOf(val)
            }
            )),
            checkedItems = [],
            setDeleteButton(),
            checkForContent()
        }
        ), (function() {}
        ))
    }
    ,
    vm.itemClicked = function(listItem) {
        return "video" == listItem.theme ? listItem.seo_url : topmenuService.createCatalogUrl(listItem)
    }
    ,
    vm.itemSource = function() {
        $rootScope.sourceTab = "watch later",
        $rootScope.viewingSource = "NA",
        $rootScope.tray_id = "NA"
    }
};
watchLaterController.$inject = ["$window", "playlistService", "topmenuService", "ngDialog", "$location", "$rootScope"],
angular.module("EktaApp").controller("watchLaterController", watchLaterController);
var playlistService = function($q, $http, appConstants, topmenuService) {
    return {
        addItem: function(playlistType, videoData, session) {
            var watchhistoryBaseUrl, deferred = $q.defer();
            return "watchhistory" == playlistType ? (topmenuService.configData.params_hash2.config_params ? watchhistoryBaseUrl = topmenuService.configData.params_hash2.config_params.watchhistory_api : topmenuService.loadConfig(topmenuService.accessTokenParam, topmenuService.regionData.country_code2).then((function(response) {
                watchhistoryBaseUrl = response.data.params_hash2.config_params.watchhistory_api
            }
            )),
            watchhistoryBaseUrl && $http({
                method: "POST",
                url: watchhistoryBaseUrl + "users/" + session + "/playlists/" + playlistType,
                headers: {
                    "Content-Type": "application/json"
                },
                transformRequest: function(data) {
                    var formData = {};
                    return formData.auth_token = appConstants.authToken,
                    formData.access_token = topmenuService.accessToken,
                    formData.listitem = data,
                    JSON.stringify(formData)
                },
                data: videoData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            ))) : $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/" + session + "/playlists/" + playlistType,
                headers: {
                    "Content-Type": "application/json"
                },
                transformRequest: function(data) {
                    var formData = {};
                    return formData.auth_token = appConstants.authToken,
                    formData.access_token = topmenuService.accessToken,
                    formData.listitem = data,
                    JSON.stringify(formData)
                },
                data: videoData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        deleteItem: function(playlistType, itemArray, session) {
            var deferred = $q.defer();
            return $http({
                method: "DELETE",
                url: appConstants.baseUrl + "/users/" + session + "/playlists/" + playlistType + "/listitems/" + itemArray + "?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&region=" + topmenuService.regionData.country_code2,
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        loadItemDetails: function(sessionId, contentId, catalogId) {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/users/" + sessionId + "/playlists/watchhistory/listitems?auth_token=" + appConstants.authToken + "&access_token=" + topmenuService.accessToken + "&region=" + topmenuService.regionData.country_code2 + "&content_id=" + contentId + "&catalog_id=" + catalogId
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            )),
            deferred.promise
        },
        loadList: function(playlistType, session) {
            session || (session = JSON.parse(localStorage.getItem("userdata")).session);
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/users/" + session + "/playlists/" + playlistType + "/listitems?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&region=" + topmenuService.regionData.country_code2
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            )),
            deferred.promise
        },
        isItemAdded: function(playlistType, videoData, session) {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/users/" + session.toString() + "/playlists/" + playlistType + "/listitems?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&region=" + topmenuService.regionData.country_code2 + "&content_id=" + videoData.content_id + "&catalog_id=" + videoData.catalog_id
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        }
    }
};
playlistService.$inject = ["$q", "$http", "appConstants", "topmenuService"],
angular.module("EktaApp").service("playlistService", playlistService);
var searchController = function($window, $scope, searchService, $location, $rootScope, topmenuService) {
    var vm = this;
    vm.title = "Search",
    vm.IsSearchItemsLoaded = !1,
    vm.seeall = !1,
    vm.queryString = "";
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
      , charCount = 0
      , totalCount = 0
      , index = 1;
    vm.isAllitemLoaded = !0,
    vm.selectedlng = $window.localStorage.getItem("selected_language"),
    $window.SPhlsPlayer && $window.SPhlsPlayer._videoPlayerControls("pause");
    var firebaseAnalytics = $window.firebase.analytics();
    function searchKey(searchString, count, showAll) {
        "" !== searchString && (searchService.searchTerm(searchString, count, 0, 0, vm.selectedlng).then((function(response) {
            if ($rootScope.isPageLoading = !1,
            vm.suggestionListLoaded = !1,
            0 == response.data.count)
                vm.searchMessage = "No results found.",
                vm.noResults = !0;
            else {
                var msg = "" === vm.queryString ? searchString : vm.queryString;
                vm.searchMessage = response.data.count + ' results for "' + msg + '"',
                totalCount = angular.copy(response.data.count),
                vm.noResults = !1
            }
            vm.IsSearchItemsLoaded = !0,
            vm.searchItemsList = response.data.items,
            vm.allResults()
        }
        )),
        vm.seeall = showAll)
    }
    function loadAutoCompleteList(queryString) {
        charCount >= 1 && "" != queryString && !format.test(queryString) && (vm.searchItemsList = [],
        searchKey(queryString, 24, !1))
    }
    null == vm.selectedlng && (vm.selectedlng = "eng"),
    vm.keyPressed = function(keyEvent) {
        0 == vm.queryString.length && (vm.IsSearchItemsLoaded = !1),
        13 != keyEvent.keyCode || "" == vm.queryString || format.test(vm.queryString) ? 8 == keyEvent.keyCode ? (charCount--,
        loadAutoCompleteList(vm.queryString)) : (charCount++,
        loadAutoCompleteList(vm.queryString)) : ($rootScope.isPageLoading = !0,
        vm.searchItemsList = [],
        searchKey(vm.queryString, 24, !1))
    }
    ,
    vm.getClearFix = function(index) {
        return index % 6 == 0 ? "left" : "none"
    }
    ;
    vm.itemClicked = function(listItem) {
        $scope.closeThisDialog(0),
        firebaseAnalytics.logEvent("search_result_clicked", {
            video_name: listItem.title,
            keyword: vm.queryString,
            clicked: !0,
            content_type: listItem.media_type ? listItem.media_type : "NA",
            content_value: listItem.content_value ? listItem.content_value : "NA"
        }),
        $window.sdk.trackEvent("search_result_clicked", {
            video_name: listItem.title,
            keyword: vm.queryString,
            clicked: "true",
            content_type: listItem.media_type ? listItem.media_type : "NA",
            content_value: listItem.content_value ? listItem.content_value : "NA",
            event_id: 6,
            event_time: (new Date).toISOString().slice(0, 19)
        }),
        $rootScope.sourceTab = "search page",
        $rootScope.viewingSource = "NA",
        $rootScope.tray_id = "NA";
        var path = listItem.seo_url;
        $location.url(path)
    }
    ;
    vm.allResults = function() {
        index = 1,
        vm.seeall = !0,
        vm.searchItemsList.length >= totalCount ? vm.isAllitemLoaded = !1 : vm.isAllitemLoaded = !0
    }
    ,
    vm.loadMore = function() {
        var searchString, from, page;
        vm.searchItemsList && vm.searchItemsList.length < totalCount && (searchString = vm.queryString,
        from = vm.searchItemsList.length,
        page = index,
        "" !== searchString && (searchService.searchTerm(searchString, 24, from, page, vm.selectedlng).then((function(response) {
            $rootScope.isPageLoading = !1,
            vm.suggestionListLoaded = !1,
            vm.IsSearchItemsLoaded = !0;
            for (var i = 0; i < response.data.items.length; i++)
                vm.searchItemsList.push(response.data.items[i]);
            index++,
            vm.searchItemsList.length >= totalCount && (vm.isAllitemLoaded = !1)
        }
        )),
        vm.seeall = !0))
    }
    ,
    vm.closeDialog = function() {
        $scope.closeThisDialog(0)
    }
};
searchController.$inject = ["$window", "$scope", "searchService", "$location", "$rootScope", "topmenuService"],
angular.module("EktaApp").controller("searchController", searchController);
var searchService = function($q, $http, appConstants, topmenuService) {
    return {
        searchTerm: function(queryString, count, from, page, selectedlng) {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/search?q=" + queryString + "&page_size=" + count + "&from=" + from + "&start_count=0&page=" + page + "&item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            )),
            deferred.promise
        },
        loadSuggestion: function(queryString) {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/search/autocomplete?q=" + queryString + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            )),
            deferred.promise
        }
    }
};
searchService.$inject = ["$q", "$http", "appConstants", "topmenuService"],
angular.module("EktaApp").service("searchService", searchService);
var confirmDialogController = function($scope, $rootScope, $location, topmenuService, ngDialog, $window) {
    var vm = this;
    vm.isConfirmed = $scope.ConfirmationType,
    vm.errorMessage = $scope.errorMessage,
    $scope.signInPage = !1,
    $scope.isOTPflow = !0,
    vm.regioncode = topmenuService.regionData.country_code2;
    var firebaseAnalytics = $window.firebase.analytics();
    "email_success" == vm.isConfirmed && ($window.localStorage.setItem("userdata", JSON.stringify($rootScope.userdata_emailconfirm.data.data)),
    topmenuService.isLoggedIn = !0,
    topmenuService.userData = $rootScope.userdata_emailconfirm.data.data,
    firebaseAnalytics.logEvent("signup_success", {
        method: "email id",
        u_id: $rootScope.userdata_emailconfirm.data.data.user_id,
        device_id: "NA"
    }),
    $window.sdk.trackEvent("signup_success", {
        method: "email id",
        event_id: 3,
        event_time: (new Date).toISOString().slice(0, 19),
        u_id: $rootScope.userdata_emailconfirm.data.data.user_id
    })),
    "email_fail" == vm.isConfirmed && (firebaseAnalytics.logEvent("signup_failure", {
        error_type: vm.errorMessage,
        method: "email id",
        device_id: "NA"
    }),
    $window.sdk.trackEvent("signup_failure", {
        error_type: vm.errorMessage,
        method: "email id",
        event_id: 3,
        event_time: (new Date).toISOString().slice(0, 19)
    })),
    vm.gotoSignIn = function() {
        vm.signInPage = !0;
        var showCloseButton, dialogConfig = {};
        "IN" == topmenuService.regionData.country_code2 ? (dialogConfig = {
            template: "app/shared/dialog/loginIndia/loginDialogIndia.html",
            controller: "loginControllerIndia",
            controllerAs: "loginCtrlIN"
        },
        showCloseButton = !1) : (dialogConfig = {
            template: "app/shared/dialog/login/loginDialog.html",
            controller: "loginController",
            controllerAs: "loginCtrl"
        },
        showCloseButton = !0),
        ngDialog.open({
            preCloseCallback: function() {
                $location.path("/").search({}),
                document.location.href = "/"
            },
            data: {
                signinfromconfirm: !0,
                signupfromconfirm: !0
            },
            ...dialogConfig,
            className: "ngdialog-theme-default",
            scope: $scope,
            disableAnimation: !0,
            closeByNavigation: !0,
            closeByDocument: !1,
            showClose: showCloseButton
        })
    }
    ,
    vm.gotoSignInFromforgotpsw = function() {
        $scope.signInPage = !0;
        var showCloseButton, dialogConfig = {};
        "IN" == topmenuService.regionData.country_code2 ? (dialogConfig = {
            template: "app/shared/dialog/loginIndia/loginDialogIndia.html",
            controller: "loginControllerIndia",
            controllerAs: "loginCtrlIN"
        },
        showCloseButton = !1) : (dialogConfig = {
            template: "app/shared/dialog/login/loginDialog.html",
            controller: "loginController",
            controllerAs: "loginCtrl"
        },
        showCloseButton = !0),
        ngDialog.open({
            preCloseCallback: function() {
                $location.path("/").search({}),
                document.location.href = "/"
            },
            ...dialogConfig,
            className: "ngdialog-theme-default",
            scope: $scope,
            disableAnimation: !0,
            closeByNavigation: !0,
            closeByDocument: !1,
            showClose: showCloseButton
        })
    }
    ,
    vm.gotoLogin = function() {
        vm.isPageLoaded = !0,
        $scope.signInPage = !1,
        $scope.isOTPflow = !0,
        vm.signupfromconfirm = !0;
        var showCloseButton, dialogConfig = {};
        "IN" == topmenuService.regionData.country_code2 ? (dialogConfig = {
            template: "app/shared/dialog/loginIndia/loginDialogIndia.html",
            controller: "loginControllerIndia",
            controllerAs: "loginCtrlIN"
        },
        showCloseButton = !1) : (dialogConfig = {
            template: "app/shared/dialog/login/loginDialog.html",
            controller: "loginController",
            controllerAs: "loginCtrl"
        },
        showCloseButton = !0),
        ngDialog.open({
            preCloseCallback: function() {
                $location.path("/").search({}),
                document.location.href = "/"
            },
            data: {
                myProperty: !0
            },
            ...dialogConfig,
            className: "ngdialog-theme-default",
            scope: $scope,
            disableAnimation: !0,
            closeByNavigation: !0,
            closeByDocument: !1,
            showClose: showCloseButton
        })
    }
    ,
    vm.homeLink = function() {
        var loc = location.hostname;
        location.href = loc
    }
};
function comparePassword() {
    return {
        require: "ngModel",
        restrict: "E",
        scope: {
            otherModelValue: "=comparePassword"
        },
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.comparePassword = function(modelValue) {
                return modelValue == scope.otherModelValue
            }
            ,
            scope.$watch("otherModelValue", (function() {
                ngModel.$validate()
            }
            ))
        }
    }
}
confirmDialogController.$inject = ["$scope", "$rootScope", "$location", "topmenuService", "ngDialog", "$window"],
angular.module("EktaApp").controller("confirmDialogController", confirmDialogController),
angular.module("EktaApp").directive("comparePassword", comparePassword);
var recipeController = function($window, $scope, appConstants, recipeService, ngDialog, $location, $rootScope, topmenuService, $routeParams) {
    $scope.fourItemCarousel = appConstants.fourItemCarousel,
    $scope.threeItemCarousel = appConstants.threeItemCarousel,
    $scope.sixAndHalfItemCarousel = appConstants.sixAndHalfItemCarousel,
    $scope.eightAndHalfItemCarousel = appConstants.eightAndHalfItemCarousel,
    $window.scrollTo(0, 0),
    $scope.isFilterResults = !1,
    $scope.genreList = [],
    $scope.updatedGenreList = [];
    var subgenre = ""
      , tabSource = "";
    $rootScope.isPageLoading = !0,
    $rootScope.selectedChoice = "Food",
    $rootScope.metadescription = "Using the food recipe collection from ETV Win, indulge your hunger for delicious food. Discover a delicious variety of Andhra recipes & Telangana recipes from quick and simple dinners to gourmet feasts, all presented by renowned chefs. Improve your cooking skills and enjoy our gourmet material, which is only accessible on ETV Win.";
    var vm = this;
    vm.selectedlng = $window.localStorage.getItem("selected_language"),
    null == vm.selectedlng && (vm.selectedlng = "eng");
    var loadController = function() {
        "" == topmenuService.accessToken ? topmenuService.getAccessToken().then((function(response) {
            topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
            topmenuService.accessToken = response.data.access_token,
            topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                topmenuService.regionData = response.region,
                loadController()
            }
            ))
        }
        )) : recipeService.loadRecipeData($scope.pagetype, vm.selectedlng).then((function(response) {
            $rootScope.isPageLoading = !1,
            $scope.mainList = response.data.catalog_list_items,
            tabSource = response.data.display_title,
            "recipes-etv-abhiruchi" === $scope.pagetype && $scope.mainList.splice(0, 1)
        }
        ))
    };
    function loadFilteredRecipes() {
        var urlParam = "&genres=" + $scope.updatedGenreList.map((item=>item.replace(/ /g, "_").replace(/\b[a-z]/g, (function(letter) {
            return letter.toLowerCase()
        }
        )))).join(",") + "&page_size=500&sub_genres=" + subgenre;
        recipeService.loadFilteredData(urlParam, vm.selectedlng).then((function(response) {
            $scope.filteredList = response.data.items
        }
        ))
    }
    loadController(),
    $scope.openFilterDialog = function() {
        ngDialog.open({
            template: "app/shared/dialog/filter/filterDialog.html",
            controller: "filterController",
            controllerAs: "fltrCtrl",
            scope: $scope,
            className: "search-dialog",
            closeByNavigation: !0,
            closeByDocument: !1,
            disableAnimation: !0
        })
    }
    ,
    $scope.reload = function() {
        0 != $scope.updatedGenreList.length ? loadFilteredRecipes() : $scope.isFilterResults = !1
    }
    ,
    $scope.$on("loadFilter", (function(event, args) {
        $scope.genreList = args.genreList,
        $scope.updatedGenreList = $scope.genreList.map((item=>item.replace(/_/g, " ").replace(/\b[a-z]/g, (function(letter) {
            return letter.toUpperCase()
        }
        )))),
        subgenre = args.subGenre,
        $scope.isFilterResults = !0,
        loadFilteredRecipes()
    }
    )),
    $scope.itemClicked = function(listItem) {
        return listItem.seo_url
    }
    ,
    $scope.itemSource = function(source, trayId) {
        $rootScope.sourceTab = tabSource,
        $rootScope.viewingSource = source,
        $rootScope.tray_id = trayId
    }
    ,
    $scope.closeFilterResults = function() {
        $scope.isFilterResults = !1
    }
    ,
    $scope.seeAllItems = function(carouselItems) {
        return carouselItems.seo_url
    }
};
recipeController.$inject = ["$window", "$scope", "appConstants", "recipeService", "ngDialog", "$location", "$rootScope", "topmenuService", "$routeParams"],
angular.module("EktaApp").controller("recipeController", recipeController).directive("recipesData", (function() {
    return {
        restrict: "E",
        templateUrl: "app/shared/directives/recipes/recipes.html",
        scope: {
            pagetype: "@pagetype"
        }
    }
}
));
var recipeService = function($q, $http, appConstants, topmenuService, $rootScope) {
    void 0 === topmenuService.regionData.country_code2 && (topmenuService.regionData.country_code2 = "IN");
    return {
        loadRecipeData: function(type, selectedlng) {
            var queryParam = type;
            "catalog" === $rootScope.catalogTheme && (queryParam += "-home");
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/catalog_lists/" + queryParam + ".gzip?item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&npage_size=10"
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            )),
            deferred.promise
        },
        loadFilteredData: function(urlParam, selectedlng) {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/catalogs/recipes/items.gzip?item_language=" + selectedlng + "&region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + urlParam
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            )),
            deferred.promise
        }
    }
};
recipeService.$inject = ["$q", "$http", "appConstants", "topmenuService", "$rootScope"],
angular.module("EktaApp").service("recipeService", recipeService);
var isMobileDevice = function() {
    var nua = navigator.userAgent
      , is_android_native_browser = nua.indexOf("Android ") > -1
      , is_iPhone = null !== nua.match(/iphone/i)
      , is_iPad = null !== nua.match(/iPad/i);
    return !!(is_android_native_browser || is_iPhone || is_iPad)
}
  , isiOS = function() {
    var nua = navigator.userAgent
      , is_iPhone = null !== nua.match(/iphone/i)
      , is_iPad = null !== nua.match(/iPad/i);
    return !(!is_iPhone && !is_iPad)
}
  , isMacSafari = function() {
    var ua = navigator.userAgent.toLowerCase();
    if (-1 != ua.indexOf("safari"))
        return !(ua.indexOf("chrome") > -1)
}
  , calculateBottomMargin = function() {
    window.innerWidth > 770 ? document.getElementById("video_player").style.margin = "0 0 -70px 0" : window.innerWidth > 500 ? document.getElementById("video_player").style.margin = "0 0 -40px 0" : document.getElementById("video_player").style.margin = "0"
}
  , mediaPlayerController = function($scope, $rootScope, $timeout, appConstants, $window, Analytics, topmenuService) {
    "audio" === $scope.mediatype ? (isMobileDevice() ? $scope.playerFeature = appConstants.audioPlayerFeaturesMobile : $scope.playerFeature = appConstants.audioPlayerFeatures,
    document.getElementById("video_player").style.height = "60px") : "live" === $scope.contenttype ? isMobileDevice() ? isiOS() ? $scope.playerFeature = appConstants.videoPlayerFeaturesiOS : $scope.playerFeature = appConstants.videoPlayerFeaturesAndroidLive : $scope.playerFeature = appConstants.videoPlayerFeaturesLive : isMobileDevice() ? isiOS() ? $scope.playerFeature = appConstants.videoPlayerFeaturesiOS : $scope.playerFeature = appConstants.videoPlayerFeaturesAndroid : $scope.playerFeature = appConstants.videoPlayerFeaturesWeb,
    setTimeout((function() {
        !function() {
            var mid_role_frequency, pre_role_adUrl = "", mid_role_adUrl = "", post_role_adUrl = "", midroll_position = [], user = {}, videodetails = {}, userState = "", mid_role_list = [];
            $rootScope.playBackStatus = "playing";
            var content_security = ""
              , isUserSubscribed = "true" == localStorage.getItem("isUserSubscribed")
              , firebaseAnalytics = $window.firebase.analytics();
            if ($scope.videoobject && (videodetails = JSON.parse($scope.videoobject)).access_control && (videodetails.access_control.is_free,
            videodetails.access_control.ads_available && !$rootScope.isTrailerVideo && $rootScope.isAdsAvailable)) {
                if (pre_role_adUrl = videodetails.access_control.pre_role_settings.ads_url ? videodetails.access_control.pre_role_settings.ads_url : "",
                mid_role_frequency = videodetails.access_control.mid_role_settings.mid_role_frequency,
                midroll_position = videodetails.access_control.mid_role_settings.midroll_position,
                "" !== (mid_role_adUrl = videodetails.access_control.mid_role_settings.ads_url ? videodetails.access_control.mid_role_settings.ads_url : ""))
                    for (var i = 0; i < mid_role_frequency; i++) {
                        var adv_obj = {
                            adurl: mid_role_adUrl,
                            schedule: midroll_position[i]
                        };
                        mid_role_list.push(adv_obj)
                    }
                else
                    mid_role_list = {};
                post_role_adUrl = videodetails.access_control.post_role_settings.ads_url ? videodetails.access_control.post_role_settings.ads_url : ""
            }
            var licensor = videodetails.channel_object ? videodetails.channel_object.name : "";
            userState = isUserSubscribed ? "Subscribed" : "Registered";
            var userdata = localStorage.getItem("userdata");
            userdata && "null" !== userdata && (user = JSON.parse(userdata));
            var thumbnailUrl = "";
            videodetails.thumbnails ? thumbnailUrl = videodetails.thumbnails.medium_4_3.url : videodetails.videolists && (thumbnailUrl = videodetails.videolists[0].thumbnails.medium_4_3.url),
            isMobileDevice() || isMacSafari();
            var adObj = {};
            if ("audio" !== $scope.mediatype && (adObj = {
                cues: "true",
                adsets: [{
                    adurl: pre_role_adUrl,
                    schedule: "preroll"
                }, ...mid_role_list, {
                    adurl: post_role_adUrl,
                    schedule: "postroll"
                }]
            }),
            "live" == $scope.contenttype) {
                var urlArray = $scope.mediaurl.split("?");
                $scope.mediaurl = urlArray[0],
                content_security = "?" + (content_security = urlArray[1])
            }
            playerObject1 = new saranyuplayer("hls","#video_player",{
                licence: "6BdgYyHxsYkXNCViMFM1+RZy9RNs2YO9Xe7ATbcHakqLzZzSAqxou+Iz51R1%0AbjMo655ZwM58/oaZcSQ5fHkgqeqHW1C+pLEUFFN+qlI3ZgM=%0A",
                type: $scope.mediatype,
                content: $scope.contenttype,
                file: [{
                    content_url: $scope.mediaurl,
                    content_security: content_security,
                    label: "Auto",
                    mediaid: "123",
                    poster: thumbnailUrl,
                    seekonload: $rootScope.videoPlayTime / 1e3,
                    cbfc_rating: videodetails.cbfc_rating,
                    display_ott_guidelines: videodetails.display_ott_guidelines
                }],
                skip_intro: {
                    intro_enabled: !(!videodetails.intro_start_time || $rootScope.isTrailerVideo),
                    intro_start_time: videodetails.intro_start_time ? videodetails.intro_start_time : "",
                    intro_end_time: videodetails.intro_end_time ? videodetails.intro_end_time : ""
                },
                is_next_item_available: !(!$rootScope.isNextItemAvailable || $rootScope.isTrailerVideo),
                end_credits_start_time: videodetails.end_credits_start_time ? videodetails.end_credits_start_time : "",
                end_credits_start_animation: videodetails.end_credits_start_time_sec ? videodetails.duration_string_sec - videodetails.end_credits_start_time_sec + "s" : "",
                autoplay: "true",
                mute: "false",
                hideControlsWhenInactive: "audio" === $scope.mediatype ? "false" : "true",
                qualityswitch: {
                    label: "Auto",
                    metric: "resolution",
                    allowedQuality: ["240", "480", "720", "1080", "2160"]
                },
                advertisement: adObj,
                features: $scope.playerFeature
            }),
            window.playerLoadedCallback = function() {
                $timeout((function() {
                    $rootScope.playerLoadingIcon = !1
                }
                ))
            }
            ;
            var analyticsProperty = {
                sessionId: user.session ? user.session : "NA",
                video_id: videodetails.content_id ? videodetails.content_id : "NA",
                source: $rootScope.sourceTab ? $rootScope.sourceTab : "share",
                tray_name: $rootScope.viewingSource ? $rootScope.viewingSource : "NA",
                video_name: videodetails.title ? videodetails.title : "NA",
                show_name: videodetails.show_name ? videodetails.show_name : "NA",
                show_id: videodetails.show_theme_id ? videodetails.show_theme_id : "NA",
                series_name: videodetails.subcategory_name ? videodetails.subcategory_name : "NA",
                series_id: videodetails.subcategory_id ? videodetails.subcategory_id : "NA",
                genre: videodetails.genres[0] ? videodetails.genres[0] : "NA",
                video_language: videodetails.language ? videodetails.language : "NA",
                subtitles: "none",
                chromecast: 0,
                quality: "Auto",
                content_provider: videodetails.content_provider ? videodetails.content_provider : "NA",
                consumption_type: "Online",
                content_type: videodetails.media_type ? videodetails.media_type : "NA",
                tray_id: $rootScope.tray_id ? $rootScope.tray_id : "NA",
                content_value: videodetails.content_value ? videodetails.content_value : "NA",
                event_time: (new Date).toISOString().slice(0, 19)
            };
            createEventCallBacks = function() {
                var isBuffering = !1
                  , startTime = ""
                  , bitrateCounter = 0
                  , currentBitRate = ""
                  , videoCurrentTime = ""
                  , playCount = 1
                  , totalBufferTime = 0;
                window.addEventListener("message", (function(event) {
                    "nextEpisodeClick" == event.data && $rootScope.nextEpisode()
                }
                )),
                SPhlsPlayer.eventcallbacks.bitrate = function(presentTime, duration, mediaId, bitrate) {
                    if (currentBitRate = bitrate,
                    videoCurrentTime = presentTime,
                    $rootScope.videoPlayerTime = presentTime,
                    bitrateCounter++,
                    isBuffering && bitrateCounter > 1) {
                        i = 0,
                        isBuffering = !1;
                        var difference = Date.now() - startTime
                          , bufferTime = Math.floor(difference / 1e3);
                        totalBufferTime += bufferTime,
                        bufferTime > 0 && Analytics.trackEvent("Playback", "PlaybackBufferingTime", videodetails.content_id, 1, !0, {
                            dimension2: user.user_id,
                            dimension4: videodetails.title,
                            dimension5: currentBitRate,
                            dimension8: licensor,
                            dimension13: bufferTime,
                            metric11: bufferTime
                        })
                    }
                }
                ,
                SPhlsPlayer.eventcallbacks.onBuffering = function(presentTime, duration, mediaId, bitrate) {
                    isBuffering = !0,
                    bitrateCounter = 0,
                    startTime = Date.now()
                }
                ,
                SPhlsPlayer.eventcallbacks.onComplete = function(presentTime, duration, mediaId, bitrate) {
                    $rootScope.playBackStatus = "stopped",
                    $rootScope.exp(),
                    clearInterval($window.playerTimer),
                    clearInterval($window.liveTimer);
                    var videoPlayTime = playCount - totalBufferTime;
                    user ? Analytics.trackEvent("Playback", "PlayComplete", videodetails.content_id, 1, !0, {
                        dimension2: user.user_id,
                        dimension4: videodetails.title,
                        dimension5: bitrate,
                        dimension6: videodetails.media_type,
                        dimension7: userState,
                        dimension8: licensor,
                        metric8: 1
                    }) : Analytics.trackEvent("Playback", "PlayComplete", videodetails.content_id, 1, !0, {
                        dimension4: videodetails.title,
                        dimension5: bitrate,
                        dimension6: videodetails.media_type,
                        dimension7: "Anonymous",
                        dimension8: licensor,
                        metric8: 1
                    }),
                    firebaseAnalytics.logEvent("playback_end", {
                        value: videoPlayTime,
                        ...analyticsProperty
                    }),
                    $window.sdk.trackEvent("pb_end", {
                        event_id: 2,
                        value: videoPlayTime,
                        ...analyticsProperty
                    }),
                    $rootScope.isNextItemAvailable && !$rootScope.isTrailerVideo && $rootScope.nextEpisode()
                }
                ,
                SPhlsPlayer.eventcallbacks.onPause = function(presentTime, duration, mediaId) {
                    clearInterval($window.liveTimer);
                    var videoPlayTime = playCount - totalBufferTime;
                    firebaseAnalytics.logEvent("playback_end", {
                        value: videoPlayTime,
                        ...analyticsProperty
                    }),
                    $window.sdk.trackEvent("pb_end", {
                        event_id: 2,
                        value: videoPlayTime,
                        ...analyticsProperty
                    }),
                    $rootScope.playBackStatus = "stopped",
                    $rootScope.setwatch_history()
                }
                ,
                SPhlsPlayer.eventcallbacks.onPlay = function(presentTime, duration, mediaId, bitrate) {
                    $rootScope.playBackStatus = "playing",
                    $rootScope.setwatch_history(),
                    user ? Analytics.trackEvent("Playback", "PlayStart", videodetails.content_id, 1, !0, {
                        dimension2: user.user_id,
                        dimension4: videodetails.title,
                        dimension5: bitrate,
                        dimension6: videodetails.media_type,
                        dimension7: userState,
                        dimension8: licensor,
                        metric7: 1
                    }) : Analytics.trackEvent("Playback", "PlayStart", videodetails.content_id, 1, !0, {
                        dimension4: videodetails.title,
                        dimension5: bitrate,
                        dimension6: videodetails.media_type,
                        dimension7: "Anonymous",
                        dimension8: licensor,
                        metric7: 1
                    }),
                    startTimer()
                }
                ,
                SPhlsPlayer.eventcallbacks.onResume = function(presentTime, duration, mediaId) {
                    $rootScope.playBackStatus = "playing",
                    playCount = 1,
                    totalBufferTime = 0,
                    setTimer(),
                    firebaseAnalytics.logEvent("playback_start", {
                        value: 1,
                        ...analyticsProperty
                    }),
                    $window.sdk.trackEvent("pb_start", {
                        event_id: 1,
                        value: 1,
                        ...analyticsProperty
                    })
                }
                ,
                SPhlsPlayer.eventcallbacks.onSeeked = function(presentTime, duration, mediaId) {
                    $rootScope.setwatch_history(),
                    setTimer(),
                    firebaseAnalytics.logEvent("playback_start", {
                        value: 1,
                        ...analyticsProperty
                    }),
                    $window.sdk.trackEvent("pb_start", {
                        event_id: 1,
                        value: 1,
                        ...analyticsProperty
                    })
                }
                ,
                sendHeartBeatForLive = function() {
                    user ? Analytics.trackEvent("Playback", "LivePlaybackTime", videodetails.content_id, 1, !0, {
                        dimension2: user.user_id,
                        dimension10: videodetails.channel_name,
                        dimension9: "20",
                        dimension11: "",
                        dimension5: currentBitRate,
                        dimension12: videodetails.media_type,
                        dimension7: userState,
                        dimension8: videodetails.channel_name,
                        metric10: videoCurrentTime
                    }) : Analytics.trackEvent("Playback", "LivePlaybackTime", videodetails.content_id, 1, !0, {
                        dimension10: videodetails.channel_name,
                        dimension9: "20",
                        dimension11: "",
                        dimension5: currentBitRate,
                        dimension12: videodetails.media_type,
                        dimension7: "Anonymous",
                        dimension8: videodetails.channel_name,
                        metric10: videoCurrentTime
                    })
                }
                ,
                sendHeartBeatForVOD = function() {
                    user ? Analytics.trackEvent("Playback", "PlaybackTime", videodetails.content_id, 1, !0, {
                        dimension2: user.user_id,
                        dimension4: videodetails.title,
                        dimension9: "20",
                        dimension5: currentBitRate,
                        dimension6: videodetails.media_type,
                        dimension7: userState,
                        dimension8: licensor,
                        metric9: videoCurrentTime
                    }) : Analytics.trackEvent("Playback", "PlaybackTime", videodetails.content_id, 1, !0, {
                        dimension4: videodetails.title,
                        dimension9: "20",
                        dimension5: currentBitRate,
                        dimension6: videodetails.media_type,
                        dimension7: "Anonymous",
                        dimension8: licensor,
                        metric9: videoCurrentTime
                    })
                }
                ;
                var startTimer = function() {
                    $window.playerTimer = setInterval((function() {
                        "live" === $scope.contenttype ? sendHeartBeatForLive() : sendHeartBeatForVOD()
                    }
                    ), 2e4)
                };
                function setTimer() {
                    $window.liveTimer && clearInterval($window.liveTimer),
                    $window.liveTimer = setInterval((function() {
                        playCount++
                    }
                    ), 1e3)
                }
            }
        }()
    }
    ), 1500)
};
mediaPlayerController.$inject = ["$scope", "$rootScope", "$timeout", "appConstants", "$window", "Analytics", "topmenuService"],
angular.module("EktaApp").controller("mediaPlayerController", mediaPlayerController).directive("mediaPlayer", (function() {
    return {
        scope: {
            mediaurl: "@mediaurl",
            mediatype: "@mediatype",
            contenttype: "@contenttype",
            videoobject: "@videoobject",
            isUserSubscribed: "@isUserSubscribed"
        },
        restrict: "E",
        template: '<div id="video_player"></div>',
        controller: "mediaPlayerController"
    }
}
));
var subscriptionController = function($scope, subscriptionService, ngDialog, $location, $rootScope, topmenuService, Analytics) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    $rootScope.isPageLoading = !0,
    $scope.selectedPlan = "",
    $scope.showSubscripeButton = !1,
    $rootScope.metadescription = "Unlock a world of entertainment with a subscription to ETV Win Subscribe now for exclusive access to a vast library of movies, TV series, and ETV Win originals content. Join the streaming revolution and start enjoying high-quality entertainment";
    $scope.openPromoDialog = function(planItem, selectUpgrade, selectRenew) {
        subscriptionService.getUpgradePlansDetails(planItem.categoryPlanId, planItem.id, selectUpgrade).then((function(response) {
            $scope.planItem = planItem,
            $scope.upgradePlansResponse = response.data,
            $rootScope.selectRenew = selectRenew,
            Analytics.trackEvent("Subscription", "SubscriptionAttempt", planItem.id, 1, !0, {
                dimension2: topmenuService.userData.user_id,
                dimension15: planItem.id,
                dimension16: planItem.duration,
                dimension17: planItem.amount,
                dimension19: "Billdesk",
                metric15: 1
            }),
            ngDialog.open({
                template: "app/shared/dialog/subscriptionPromo/promocodeDialog.html",
                controller: "promocodeController",
                controllerAs: "promoCtrl",
                scope: $scope,
                className: "ngdialog-theme-default ngdialog-promo",
                disableAnimation: !0,
                closeByNavigation: !0,
                closeByDocument: !0,
                showClose: !1
            })
        }
        ))
    }
    ;
    var loadController = function() {
        if ("" == topmenuService.accessToken)
            topmenuService.getAccessToken().then((function(response) {
                topmenuService.accessTokenParam = "&access_token=" + response.data.access_token,
                topmenuService.accessToken = response.data.access_token,
                topmenuService.loadRegionData(topmenuService.accessTokenParam).then((function(response) {
                    topmenuService.regionData = response.region,
                    loadController()
                }
                ))
            }
            ));
        else {
            var userdata = localStorage.getItem("userdata")
              , session = JSON.parse(userdata).session;
            subscriptionService.getactivePlans(session).then((function(response) {
                if (response.data && response.data.length > 0) {
                    $scope.planActive = !0;
                    var activePlansList = response.data;
                    $scope.activePlanId = activePlansList[activePlansList.length - 1].plan_id;
                    var expiryDate = (date = activePlansList[activePlansList.length - 1].valid_till,
                    d = new Date(date),
                    dd = d.getDate(),
                    mm = d.getMonth(),
                    yy = d.getFullYear(),
                    dd + " " + months[mm] + " " + yy);
                    $scope.validTill = expiryDate
                }
                var date, d, dd, mm, yy;
                response.data && 0 == response.data.length && ($scope.showSubscripeButton = !0),
                subscriptionService.loadPlans().then((function(response) {
                    $rootScope.isPageLoading = !1,
                    $scope.itemslist = response.data.items,
                    $scope.basicPlan = response.data.items[0],
                    $scope.premiumPlan = response.data.items[1],
                    function(plans) {
                        if ($scope.planPricing = plans.map((plan=>{
                            const pricing = plan.plans.map((item=>({
                                amount: `${item.currency_symbol} ${item.price}`,
                                offerDescription: item.offer_description,
                                duration: `Per ${item.title}`,
                                strikedPrice: item.striked_price ? `${item.currency_symbol} ${item.striked_price}` : "",
                                id: item.id,
                                isActive: item.id === $scope.activePlanId,
                                freeDays: item.message,
                                type: plan.display_title,
                                currency_symbol: item.currency_symbol,
                                price: item.price,
                                currency: item.currency,
                                description: item.description,
                                categoryPlanId: plan.category_id,
                                category_id: plan.category_id,
                                catalog_id: plan.catalog_id,
                                category: plan.category,
                                info_message: item.info_message,
                                sub_message: item.sub_message
                            })));
                            return {
                                title: plan.display_title,
                                pricing: pricing
                            }
                        }
                        )),
                        $scope.selectedPlan = $scope.planPricing[0].pricing[0],
                        $scope.planCategories = plans.map((plan=>plan.display_title)),
                        $scope.planCategories.unshift("Features"),
                        1 == plans.length)
                            return void ($scope.planDetails = plans[0].pack_details);
                        const basicPackDetails = plans[0].pack_details
                          , premiumPackDetails = plans[1].pack_details;
                        $scope.planDetails = basicPackDetails.map((plan=>({
                            ...plan,
                            premiumValue: premiumPackDetails.find((item=>item.info.trim() === plan.info.trim()))?.value
                        })))
                    }(response.data.items);
                    var subscriptionPlanID = JSON.parse(localStorage.getItem("subsId"));
                    if (!$scope.activePlanId && subscriptionPlanID) {
                        for (var i = 0; i < $scope.itemslist[0].plans.length; i++)
                            if (subscriptionPlanID == $scope.itemslist[0].plans[i].id)
                                var subscriptionPlanSelected = $scope.itemslist[0].plans[i];
                        subscriptionPlanSelected && ($scope.openPromoDialog(subscriptionPlanSelected),
                        localStorage.removeItem("subsId"))
                    }
                }
                ))
            }
            ))
        }
    };
    loadController(),
    $scope.addplanname = function(planItem) {
        var planItemTitle = planItem.display_title;
        $rootScope.categoryPlanId = planItem.category_id,
        localStorage.setItem("addplanname", planItemTitle)
    }
    ,
    window.cancelCallbacktoController = function() {
        console.log("Payment cancelled"),
        subscriptionService.paymentGatewayCallbacks("cancel", "cancel").then((function(response) {
            $rootScope.isPageLoading = !1
        }
        ))
    }
};
subscriptionController.$inject = ["$scope", "subscriptionService", "ngDialog", "$location", "$rootScope", "topmenuService", "Analytics"],
angular.module("EktaApp").controller("subscriptionController", subscriptionController).directive("subscriptionPlans", (function() {
    return {
        restrict: "E",
        templateUrl: "app/shared/directives/subscription/subscriptionplans.html"
    }
}
));
var subscriptionService = function($q, $http, appConstants, topmenuService, md5, $rootScope) {
    void 0 === topmenuService.regionData.country_code2 && (topmenuService.regionData.country_code2 = "IN");
    return {
        loadPlans: function() {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/catalogs/subscription/items.gzip?region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            )),
            deferred.promise
        },
        applyPromo: function(userdata) {
            userdata.region = topmenuService.regionData.country_code2;
            var formData = function(data) {
                var formData = {};
                return formData.auth_token = appConstants.authToken,
                formData.access_token = topmenuService.accessToken,
                formData.category_pack_id = data.category_pack_id,
                formData.us = md5.createHash(appConstants.secret_key + topmenuService.userData.session + data.region + data.plan_id),
                formData.plan_id = data.plan_id,
                formData.coupon_code = data.coupon_code,
                formData.region = data.region,
                JSON.stringify(formData)
            }(userdata)
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/" + topmenuService.userData.session + "/apply_coupon_code",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        initPayment: function(userdata) {
            userdata.region = topmenuService.regionData.country_code2;
            var formData = function(data) {
                var formData = {};
                return formData.auth_token = appConstants.authToken,
                formData.access_token = topmenuService.accessToken,
                formData.auto_renew = data.auto_renew,
                formData.us = md5.createHash(appConstants.secret_key + topmenuService.userData.session + data.region + data.plan_id),
                formData.region = data.region,
                formData.payment_gateway = $rootScope.selectedgateway.toLowerCase(),
                formData.platform = "web",
                formData.payment_info = data.payment_info,
                formData.transaction_info = data.transaction_info,
                formData.upgrade_plan = data.upgrade_plan,
                formData.user_info = data.user_info,
                formData.miscellaneous = data.miscellaneous,
                formData.renew_plan = $rootScope.selectRenew,
                JSON.stringify(formData)
            }(userdata)
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/" + topmenuService.userData.session + "/transactions",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        getactivePlans: function(session) {
            var deferred = $q.defer();
            return session || (session = topmenuService.userData.session),
            $http({
                method: "GET",
                url: appConstants.baseUrl + "/users/" + session + "/user_plans?region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        getAllPlanDetails: function(session, content_id, catalog_id) {
            session || (session = topmenuService.userData.session);
            var planDetails = function(session, content_id, catalog_id) {
                session || (session = "");
                var planDetails = {};
                return planDetails.catalog_id = catalog_id,
                planDetails.content_id = content_id,
                planDetails.category = "",
                planDetails.region = topmenuService.regionData.country_code2,
                planDetails.auth_token = appConstants.authToken,
                planDetails.access_token = topmenuService.accessToken,
                planDetails.id = session,
                planDetails.ts = JSON.stringify(Math.floor((new Date).getTime() / 1e3)),
                planDetails.md5 = md5.createHash(catalog_id + content_id + session + planDetails.ts + appConstants.secret_key),
                JSON.stringify(planDetails)
            }(session, content_id, catalog_id)
              , deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/v2/users/get_all_details",
                headers: {
                    "Content-Type": "application/json"
                },
                data: planDetails
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        getUpgradePlansDetails: function(subThemeId, toPlan, selectUpgrade) {
            var deferred = $q.defer()
              , session = topmenuService.userData.session;
            return $http({
                method: "GET",
                url: `${appConstants.baseUrl}/users/${session}/user_plans/upgrade_plan?region=${topmenuService.regionData.country_code2}&auth_token=${appConstants.authToken}${topmenuService.accessTokenParam}&sub_theme_id=${subThemeId}&to_plan=${toPlan}&upgrade_plan=${selectUpgrade}`
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        paymentGatewayCallbacks: function(callBackStatus, errorMessage) {
            var orderID = localStorage.getItem("orderID");
            localStorage.removeItem("orderID");
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/payment_complete/mpgs/update_status/" + appConstants.authToken + "?order_id=" + orderID + "&status=" + callBackStatus + "&message=" + errorMessage
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        redeemCoupon: function(promoCode) {
            var formData = {};
            formData.auth_token = appConstants.authToken,
            formData.access_token = topmenuService.accessToken,
            formData.us = md5.createHash(appConstants.secret_key + topmenuService.userData.session + topmenuService.regionData.country_code2),
            formData.region = topmenuService.regionData.country_code2,
            formData.coupon_code = promoCode;
            var deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.baseUrl + "/users/" + topmenuService.userData.session + "/apply_redeem_coupon",
                headers: {
                    "Content-Type": "application/json"
                },
                data: formData
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        }
    }
};
function promocodeController($scope, $rootScope, subscriptionService, ngDialog, topmenuService, deviceDetector, $window, $location) {
    var vm = this;
    vm.upgradePlanResponse = $scope.upgradePlansResponse,
    vm.region = topmenuService.regionData.country_code2,
    function(data) {
        if (data.error)
            return;
        vm.planDetails = $scope.planItem,
        vm.title = $scope.planTitle,
        vm.applyTxt = "APPLY",
        vm.discount = 0,
        vm.payable = angular.copy(data.payable.payable_amount),
        vm.renewal_checked = !1,
        vm.upgradedPayable = data.payable,
        vm.formatedPayablePrice = `${data.payable.currency_symbol} ${data.payable.payable_amount}`
    }($scope.upgradePlansResponse);
    var isCouponApplied = !1
      , userData = {};
    vm.couponMessage = "",
    vm.errorMessage = "",
    "IN" == vm.region ? $rootScope.selectedgateway = "billdesk" : $rootScope.selectedgateway = "mpgs";
    try {
        if (vm.paymentList = topmenuService.configData.params_hash2.config_params.payment_gateway,
        vm.paymentList && "IN" == vm.region && vm.paymentList.length >= 1)
            for (var i = 0; i < vm.paymentList.length; i++)
                vm.paymentList[i].default && ($rootScope.selectedgateway = vm.paymentList[i].gateway)
    } catch (error) {
        console.log(error)
    }
    vm.selectedgateway = function(item) {
        $rootScope.selectedgateway = item
    }
    ,
    vm.makepayment = function() {
        $rootScope.isPageLoading = !0,
        userData.plan_id = vm.planDetails.id,
        userData.auto_renew = vm.renewal_checked,
        $scope.upgradePlansResponse.error || (userData.upgrade_plan = !vm.upgradedPayable.allow_coupon),
        userData.payment_info = {
            net_amount: vm.upgradedPayable.payable_amount,
            price_charged: vm.payable.toString(),
            currency: vm.planDetails.currency,
            packs: [{
                plan_type: "",
                category: vm.planDetails.category,
                subscription_catalog_id: vm.planDetails.catalog_id,
                category_pack_id: vm.planDetails.categoryPlanId,
                plan_id: vm.planDetails.id
            }]
        },
        userData.transaction_info = {
            app_txn_id: "1",
            txn_message: vm.planDetails.description,
            txn_status: "init",
            order_id: "",
            pg_transaction_id: ""
        },
        topmenuService.userData.email_id ? userData.user_info = {
            email: topmenuService.userData.email_id,
            mobile_number: ""
        } : topmenuService.userData.ext_user_id ? userData.user_info = {
            email: topmenuService.userData.ext_user_id
        } : userData.user_info = {
            email: "",
            mobile_number: topmenuService.userData.mobile_number
        },
        userData.miscellaneous = {
            browser: deviceDetector.browser,
            device_brand: deviceDetector.device,
            device_IMEI: "NA",
            device_model: "NA",
            device_OS: deviceDetector.os_version,
            device_type: deviceDetector.device,
            inet: "NA",
            isp: "NA",
            operator: "NA"
        },
        isCouponApplied && (userData.payment_info.coupon_code = vm.promocode),
        subscriptionService.initPayment(userData).then((function(response) {
            if ($rootScope.isPageLoading = !1,
            response.data.error)
                vm.errorMessage = response.data.error.message;
            else if (response.data.data.code && "1070" == response.data.data.code)
                vm.couponMessage = response.data.data.message;
            else if ("IN" == userData.region)
                if ("ccavenue" == $rootScope.selectedgateway) {
                    var paymentUrl = response.data.data.payment_url + "&encRequest=" + response.data.data.msg + "&access_code=" + response.data.data.access_code;
                    $window.location.href = paymentUrl
                } else {
                    paymentUrl = response.data.data.payment_url + "?msg=" + response.data.data.msg;
                    $window.location.href = paymentUrl
                }
            else
                $rootScope.isPageLoading = !1,
                localStorage.setItem("orderID", response.data.data.transaction_id),
                delete Array.prototype._indexOf,
                Checkout.configure({
                    session: {
                        id: response.data.data.mpgs.session_id
                    },
                    order: {
                        description: response.data.data.mpgs.description,
                        id: response.data.data.transaction_id,
                        reference: response.data.data.mpgs.reference_id
                    },
                    interaction: {
                        merchant: {
                            name: response.data.data.mpgs.name,
                            address: {
                                line1: response.data.data.mpgs.address1
                            }
                        }
                    }
                }),
                Checkout.showPaymentPage()
        }
        ))
    }
    ,
    window.errorCallbacktoController = function(error) {
        console.log("error", JSON.stringify(error));
        var paymentErrorMsgEl = document.getElementById("paymentErrorMsg");
        paymentErrorMsgEl.innerText = error["error.explanation"],
        paymentErrorMsgEl.style.display = "block",
        subscriptionService.paymentGatewayCallbacks(error.result, error["error.explanation"]).then((function(response) {
            $rootScope.isPageLoading = !1
        }
        ))
    }
    ,
    vm.applyPromo = function() {
        var promoData = {
            us: ""
        };
        promoData.category_pack_id = vm.planDetails.category_id,
        promoData.plan_id = vm.planDetails.id,
        promoData.coupon_code = vm.promocode,
        vm.msgLoaded = !1,
        vm.errorCode = !1,
        subscriptionService.applyPromo(promoData).then((function(response) {
            response.data.error ? (vm.errorCode = !0,
            vm.errorMsg = response.data.error.message) : (vm.discount = (parseFloat(vm.upgradedPayable.payable_amount) - response.data.data.payment.net_amount).toFixed(2),
            vm.msgLoaded = !0,
            vm.couponMsg = "Promo Code Applied. You will get " + vm.planDetails.currency_symbol + vm.discount + " discount",
            vm.payable = response.data.data.payment.net_amount,
            isCouponApplied = !0)
        }
        ))
    }
    ,
    vm.proceedNext = function() {
        var subscriptionPreviousLocation = localStorage.getItem("subscriptionLocation");
        if (localStorage.removeItem("subscriptionLocation"),
        $rootScope.showSubscriptionIcon = !1,
        subscriptionPreviousLocation) {
            var pathname = new URL(subscriptionPreviousLocation).pathname;
            $location.path(pathname)
        } else
            $location.path("/home")
    }
    ,
    vm.closeDialog = function() {
        ngDialog.close()
    }
}
function thumbnailContent() {
    return {
        restrict: "E",
        templateUrl: "app/shared/directives/thumbnail/thumbnail.html"
    }
}
function sidebarOne() {
    return {
        restrict: "E",
        templateUrl: "app/shared/directives/sidebar/viewOne.html"
    }
}
function sidebarTwo() {
    return {
        restrict: "E",
        templateUrl: "app/shared/directives/sidebar/viewTwo.html"
    }
}
function sidebarThree() {
    return {
        restrict: "E",
        templateUrl: "app/shared/directives/sidebar/viewthree.html"
    }
}
function datePicker() {
    return {
        restrict: "E",
        templateUrl: "app/shared/directives/datePicker/datePicker.html"
    }
}
function formatDate() {
    var directive = {};
    return directive.restrict = "E",
    directive.template = "<span ng-bind='formattedDate'></span>",
    directive.scope = {
        dateString: "=date",
        utsDate: "=utsdate"
    },
    directive.link = function(scope, element, attributes) {
        var diffDays = moment().diff(scope.dateString, "days");
        scope.formattedDate = 0 === diffDays ? moment(moment(scope.dateString), "dd MMM yyyy").fromNow() : moment(1e3 * scope.utsDate).format("DD MMM YY")
    }
    ,
    directive
}
function formatDateyear() {
    var directive = {};
    return directive.restrict = "E",
    directive.template = "<span ng-bind='formattedDateYear'></span>",
    directive.scope = {
        dateString: "=date",
        utsDate: "=utsdate"
    },
    directive.link = function(scope, element, attributes) {
        moment();
        scope.formattedDateYear = moment(1e3 * scope.utsDate).format("YYYY")
    }
    ,
    directive
}
subscriptionService.$inject = ["$q", "$http", "appConstants", "topmenuService", "md5", "$rootScope"],
angular.module("EktaApp").service("subscriptionService", subscriptionService),
promocodeController.$inject = ["$scope", "$rootScope", "subscriptionService", "ngDialog", "topmenuService", "deviceDetector", "$window", "$location"],
angular.module("EktaApp").controller("promocodeController", promocodeController),
angular.module("EktaApp.slideCarousel", []).directive("owlCarousel", (function() {
    return {
        restrict: "E",
        transclude: !1,
        link: function(scope) {
            scope.initCarousel = function(element) {
                var defaultOptions, customOptions = scope.$eval($(element).attr("data-options"));
                defaultOptions = angular.copy(customOptions),
                $(element).owlCarousel(defaultOptions)
            }
        }
    }
}
)).directive("owlCarouselItem", [function() {
    return {
        restrict: "A",
        transclude: !1,
        link: function(scope, element) {
            scope.$last && scope.initCarousel(element.parent())
        }
    }
}
]),
angular.module("EktaApp").directive("thumbnailContent", thumbnailContent),
thumbnailContent.$inject = [],
angular.module("EktaApp").directive("sidebarOne", sidebarOne),
sidebarOne.$inject = [],
angular.module("EktaApp").directive("sidebarTwo", sidebarTwo),
sidebarTwo.$inject = [],
angular.module("EktaApp").directive("sidebarThree", sidebarThree),
sidebarThree.$inject = [],
angular.module("EktaApp").directive("datePicker", datePicker),
datePicker.$inject = [],
angular.module("EktaApp").directive("formatDate", formatDate),
formatDate.$inject = [],
angular.module("EktaApp").directive("formatDateyear", formatDateyear),
formatDateyear.$inject = [];
var generateRandomColor = function(str) {
    for (var hash = 0, i = 0; i < str.length; i++)
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    var colour = "#";
    for (i = 0; i < 3; i++) {
        colour += ("00" + (hash >> 8 * i & 255).toString(16)).substr(-2)
    }
    return colour
}
  , commentsController = function($scope, appConstants, commentService, topmenuService, ngDialog) {
    $scope.comment = "";
    var userinfo = localStorage.getItem("userdata");
    userinfo ? ($scope.user = JSON.parse(userinfo),
    $scope.userid = $scope.user.user_id,
    $scope.user.profile_pic && "" !== $scope.user.profile_pic ? $scope.profilepic = $scope.user.profile_pic : $scope.profilepic = "assets/img/usericon.svg") : $scope.profilepic = "assets/img/usericon.svg";
    var loadComments = function() {
        commentService.loadComments($scope.contentid, $scope.userid).then((function(response) {
            $scope.commentsList = response.comments
        }
        ))
    };
    loadComments(),
    $scope.commentsErrorMsg = "false",
    $scope.postComment = function() {
        var commentData = {};
        commentData.access_token = appConstants.involAccessToken,
        commentData.user_id = $scope.userid,
        commentData.user_name = $scope.user.firstname,
        commentData.user_email = $scope.user.email_id,
        commentData.content_id = $scope.contentid,
        commentData.comment = $scope.comment,
        commentService.postComment(commentData).then((function(response) {
            response.data || ($scope.commentsErrorMsg = "true"),
            $scope.comment = "",
            loadComments()
        }
        ))
    }
    ;
    var showLogin = function() {
        $scope.signInPage = !0,
        function() {
            try {
                playerObject1.referenceObj.ExternalControls.pause()
            } catch (err) {}
        }();
        var showCloseButton, dialogConfig = {};
        "IN" == topmenuService.regionData.country_code2 ? (dialogConfig = {
            template: "app/shared/dialog/loginIndia/loginDialogIndia.html",
            controller: "loginControllerIndia",
            controllerAs: "loginCtrlIN"
        },
        showCloseButton = !1) : (dialogConfig = {
            template: "app/shared/dialog/login/loginDialog.html",
            controller: "loginController",
            controllerAs: "loginCtrl"
        },
        showCloseButton = !0),
        ngDialog.open({
            ...dialogConfig,
            className: "ngdialog-theme-default",
            scope: $scope,
            disableAnimation: !0,
            closeByNavigation: !0,
            closeByDocument: !1,
            showClose: showCloseButton
        })
    };
    $scope.vote = function(commentId, status) {
        if (topmenuService.isLoggedIn) {
            var voteData = {};
            voteData.access_token = appConstants.involAccessToken,
            voteData.user_id = $scope.userid,
            voteData.user_name = $scope.user.firstname,
            voteData.user_email = $scope.user.email_id,
            voteData.comment_id = commentId,
            voteData.content_id = $scope.contentid,
            voteData.vote = status,
            commentService.vote(voteData).then((function(response) {
                loadComments()
            }
            ))
        } else
            showLogin()
    }
    ,
    $scope.getRandomColor = function(str) {
        return {
            background: generateRandomColor(str)
        }
    }
    ,
    $scope.commentBoxclicked = function() {
        topmenuService.isLoggedIn || showLogin()
    }
};
commentsController.$inject = ["$scope", "appConstants", "commentService", "topmenuService", "ngDialog"],
angular.module("EktaApp").controller("commentsController", commentsController).directive("commentSection", (function() {
    return {
        scope: {
            contentid: "@contentid"
        },
        restrict: "E",
        templateUrl: "app/shared/directives/comments/commentsection.html",
        controller: "commentsController"
    }
}
));
var commentService = function($q, $http, appConstants, topmenuService) {
    return {
        loadComments: function(contentid, userid) {
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.commentsUrl + "/v1/getAllComments?access_token=zsv18vb7rf9tzuh4&content_id=" + contentid + "&user_id=" + userid
            }).then((function(response) {
                deferred.resolve(response.data)
            }
            )),
            deferred.promise
        },
        postComment: function(commentBody) {
            var deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.commentsUrl + "/v1/makeComment",
                headers: {
                    "Content-Type": "application/json"
                },
                data: commentBody
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        },
        vote: function(voteBody) {
            var deferred = $q.defer();
            return $http({
                method: "POST",
                url: appConstants.commentsUrl + "/v1/addVote",
                headers: {
                    "Content-Type": "application/json"
                },
                data: voteBody
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.resolve(response)
            }
            )),
            deferred.promise
        }
    }
};
function template(tmpl, context, filter) {
    "use strict";
    return tmpl.replace(/\{([^\}]+)\}/g, (function(m, key) {
        return key in context ? filter ? filter(context[key]) : context[key] : m
    }
    ))
}
commentService.$inject = ["$q", "$http", "appConstants", "topmenuService"],
angular.module("EktaApp").service("commentService", commentService);
var app = angular.module("ngSocial", []);
app.directive("ngSocialButtons", ["$compile", "$q", "$parse", "$http", "$location", function($compile, $q, $parse, $http, $location) {
    "use strict";
    return {
        restrict: "A",
        scope: {
            url: "=",
            title: "=",
            description: "=",
            image: "=",
            showcounts: "="
        },
        replace: !0,
        transclude: !0,
        template: '<div class="ng-social-container ng-cloak"><ul class="ng-social" ng-transclude></ul></div>',
        controller: ["$scope", "$q", "$http", function($scope, $q, $http) {
            var getUrl = function() {
                return $scope.url || $location.absUrl()
            }
              , ctrl = this;
            return this.init = function(scope, element, options) {
                options.counter && ctrl.getCount(scope.options).then((function(count) {
                    scope.count = count
                }
                ))
            }
            ,
            this.link = function(options) {
                var urlOptions = (options = options || {}).urlOptions || {};
                return urlOptions.url = getUrl(),
                urlOptions.title || (urlOptions.title = $scope.title),
                urlOptions.image || (urlOptions.image = $scope.image),
                urlOptions.description || (urlOptions.description = $scope.description || ""),
                ctrl.makeUrl(options.clickUrl || options.popup.url, urlOptions)
            }
            ,
            this.clickShare = function(e, options) {
                if (!e.shiftKey && !e.ctrlKey) {
                    e.preventDefault(),
                    options.track && "undefined" != typeof _gaq && angular.isArray(_gaq) && _gaq.push(["_trackSocial", options.track.name, options.track.action, $scope.url]);
                    var process = !0;
                    if (angular.isFunction(options.click) && (process = options.click.call(this, options)),
                    process) {
                        var url = ctrl.link(options);
                        ctrl.openPopup(url, options.popup)
                    }
                }
            }
            ,
            this.openPopup = function(url, params) {
                var left = Math.round(screen.width / 2 - params.width / 2)
                  , top = 0;
                screen.height > params.height && (top = Math.round(screen.height / 3 - params.height / 2));
                var win = window.open(url, "sl_" + this.service, "left=" + left + ",top=" + top + ",width=" + params.width + ",height=" + params.height + ",personalbar=0,toolbar=0,scrollbars=1,resizable=1");
                win ? win.focus() : location.href = url
            }
            ,
            this.getCount = function(options) {
                var def = $q.defer()
                  , urlOptions = options.urlOptions || {};
                urlOptions.url = getUrl(),
                urlOptions.title || (urlOptions.title = $scope.title);
                var url = ctrl.makeUrl(options.counter.url, urlOptions);
                return (!!angular.isUndefined($scope.showcounts) || $scope.showcounts) && (options.counter.get ? options.counter.get(url, def, $http) : $http.jsonp(url).then((function(res) {
                    options.counter.getNumber ? def.resolve(options.counter.getNumber(res)) : def.resolve(res)
                }
                ), (function(error) {}
                ))),
                def.promise
            }
            ,
            this.makeUrl = function(url, context) {
                return template(url, context, encodeURIComponent)
            }
            ,
            this
        }
        ]
    }
}
]),
app.directive("ngSocialFacebook", ["$parse", function($parse) {
    "use strict";
    var options = {
        counter: {
            url: "//graph.facebook.com/fql?q=SELECT+total_count+FROM+link_stat+WHERE+url%3D%22{url}%22&callback=JSON_CALLBACK",
            getNumber: function(data) {
                return 0 === data.data.length ? 0 : data.data[0].total_count
            }
        },
        popup: {
            url: "https://www.facebook.com/sharer/sharer.php?u={url}",
            width: 600,
            height: 500
        },
        track: {
            name: "facebook",
            action: "send"
        }
    };
    return {
        restrict: "C",
        require: "^?ngSocialButtons",
        scope: !0,
        replace: !0,
        transclude: !0,
        template: '<li><a ng-href="{{ctrl.link(options)}}" target="_blank" ng-click="ctrl.clickShare($event, options)" class="ng-social-button"><span class="ng-social-icon"></span><span class="ng-social-text" ng-transclude></span></a><span ng-show="count" class="ng-social-counter">{{ count }}</span></li>',
        link: function(scope, element, attrs, ctrl) {
            element.addClass("ng-social-facebook"),
            ctrl && (options.urlOptions = {
                url: $parse(attrs.url)(scope)
            },
            scope.options = options,
            scope.ctrl = ctrl,
            ctrl.init(scope, element, options))
        }
    }
}
]),
app.directive("ngSocialGooglePlus", ["$parse", function($parse) {
    "use strict";
    var options = {
        counter: {
            url: "//share.yandex.ru/gpp.xml?url={url}",
            getNumber: function(data) {
                return data.count
            },
            get: function(jsonUrl, deferred, $http) {
                options._ ? deferred.reject() : (window.services || (window.services = {}),
                window.services.gplus = {
                    cb: function(number) {
                        options._.resolve(number)
                    }
                },
                options._ = deferred,
                $http.jsonp(jsonUrl))
            }
        },
        popup: {
            url: "https://plus.google.com/share?url={url}",
            width: 700,
            height: 500
        },
        track: {
            name: "Google+",
            action: "share"
        }
    };
    return {
        restrict: "C",
        require: "^?ngSocialButtons",
        scope: !0,
        replace: !0,
        transclude: !0,
        template: '<li><a ng-href="{{ctrl.link(options)}}" target="_blank" ng-click="ctrl.clickShare($event, options)" class="ng-social-button"><span class="ng-social-icon"></span><span class="ng-social-text" ng-transclude></span></a> <span ng-show="count" class="ng-social-counter">{{ count }}</span></li>',
        link: function(scope, element, attrs, ctrl) {
            element.addClass("ng-social-google-plus"),
            ctrl && (options.urlOptions = {
                url: $parse(attrs.url)(scope)
            },
            scope.options = options,
            scope.ctrl = ctrl,
            ctrl.init(scope, element, options))
        }
    }
}
]),
app.directive("ngSocialMailru", ["$parse", function($parse) {
    "use strict";
    var options = {
        counter: {
            url: "//connect.mail.ru/share_count?url_list={url}&callback=1&func=JSON_CALLBACK",
            getNumber: function(data) {
                for (var url in data)
                    if (data.hasOwnProperty(url))
                        return data[url].shares
            }
        },
        popup: {
            url: "https://connect.mail.ru/share?share_url={url}&title={title}",
            width: 550,
            height: 360
        }
    };
    return {
        restrict: "C",
        require: "^?ngSocialButtons",
        scope: !0,
        replace: !0,
        transclude: !0,
        template: '<li><a ng-href="{{ctrl.link(options)}}" target="_blank" ng-click="ctrl.clickShare($event, options)" class="ng-social-button"><span class="ng-social-icon"></span><span class="ng-social-text" ng-transclude></span></a> <span ng-show="count" class="ng-social-counter">{{ count }}</span></li>',
        link: function(scope, element, attrs, ctrl) {
            element.addClass("ng-social-mailru"),
            ctrl && (options.urlOptions = {
                url: $parse(attrs.url)(scope),
                title: $parse(attrs.title)(scope)
            },
            scope.options = options,
            scope.ctrl = ctrl,
            ctrl.init(scope, element, options))
        }
    }
}
]),
app.directive("ngSocialTwitter", ["$parse", function($parse) {
    "use strict";
    var options = {
        counter: {
            url: "//urls.api.twitter.com/1/urls/count.json?url={url}&callback=JSON_CALLBACK",
            getNumber: function(data) {
                return data.count
            }
        },
        popup: {
            url: "https://twitter.com/intent/tweet?url={url}&text={title}",
            width: 600,
            height: 450
        },
        click: function(options) {
            return /[\.:\-–—]\s*$/.test(options.pageTitle) || (options.pageTitle += ":"),
            !0
        },
        track: {
            name: "twitter",
            action: "tweet"
        }
    };
    return {
        restrict: "C",
        require: "^?ngSocialButtons",
        scope: !0,
        replace: !0,
        transclude: !0,
        template: '<li><a ng-href="{{ctrl.link(options)}}" target="_blank" ng-click="ctrl.clickShare($event, options)" class="ng-social-button"><span class="ng-social-icon"></span><span class="ng-social-text" ng-transclude></span></a> <span ng-show="count" class="ng-social-counter">{{ count }}</span></li>',
        link: function(scope, element, attrs, ctrl) {
            element.addClass("ng-social-twitter"),
            ctrl && (options.urlOptions = {
                url: $parse(attrs.url)(scope),
                title: $parse(attrs.title)(scope)
            },
            scope.options = options,
            scope.ctrl = ctrl,
            ctrl.init(scope, element, options))
        }
    }
}
]);
var onesignalService = function($q, $http, appConstants, $window, topmenuService) {
    return {
        getTags: function() {
            var deferred = $q.defer();
            return $window.OneSignal.push((function() {
                $window.OneSignal.getTags().then((function(tags) {
                    deferred.resolve(tags)
                }
                ))
            }
            )),
            deferred.promise
        },
        deleteTags: function(keyarray) {
            var deferred = $q.defer();
            return $window.OneSignal.deleteTags(keyarray).then((function(tagsDeleted) {
                deferred.resolve(tagsDeleted)
            }
            )),
            deferred.promise
        },
        sendregionTopic: function() {
            var deferred = $q.defer()
              , fcm_token_get = localStorage.getItem("fcm_token");
            if (!(fcm_token_get = JSON.parse(fcm_token_get)))
                return deferred.resolve(null),
                deferred.promise;
            var data = {
                token: fcm_token_get,
                topic: topmenuService.regionData.country_code2
            }
              , jsondata = JSON.stringify(data);
            return $http({
                method: "post",
                url: appConstants.baseUrl + "/create_fcm_topic?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&region=" + topmenuService.regionData.country_code2,
                data: jsondata
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.reject(response)
            }
            )),
            deferred.promise
        },
        sendTopic: function(content_id) {
            var deferred = $q.defer()
              , fcm_token_get = localStorage.getItem("fcm_token");
            if (!(fcm_token_get = JSON.parse(fcm_token_get)))
                return deferred.resolve(null),
                deferred.promise;
            var data = {
                token: fcm_token_get,
                topic: content_id
            }
              , jsondata = JSON.stringify(data);
            return $http({
                method: "post",
                url: appConstants.baseUrl + "/create_fcm_topic?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&region=" + topmenuService.regionData.country_code2,
                data: jsondata
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.reject(response)
            }
            )),
            deferred.promise
        },
        deleteTopic: function(content_id) {
            var fcm_token_get = localStorage.getItem("fcm_token");
            fcm_token_get = JSON.parse(fcm_token_get);
            var deferred = $q.defer();
            return $http({
                method: "get",
                url: appConstants.baseUrl + "/delete_fcm_topic?auth_token=" + appConstants.authToken + topmenuService.accessTokenParam + "&region=" + topmenuService.regionData.country_code2 + "&token=" + fcm_token_get + "&topic=" + content_id
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.reject(response)
            }
            )),
            deferred.promise
        },
        getFollowData: function() {
            var fcm_token_get = localStorage.getItem("fcm_token");
            fcm_token_get = JSON.parse(fcm_token_get);
            var deferred = $q.defer();
            return $http({
                method: "GET",
                url: appConstants.baseUrl + "/users/" + topmenuService.userData.session + "/notifications.gzip?region=" + topmenuService.regionData.country_code2 + "&auth_token=" + appConstants.authToken + topmenuService.accessTokenParam
            }).then((function(response) {
                deferred.resolve(response)
            }
            ), (function(response) {
                deferred.reject(response)
            }
            )),
            deferred.promise
        },
        sendTags: function(tagObject) {
            var deferred = $q.defer();
            return $window.OneSignal.push((function() {
                $window.OneSignal.sendTags(tagObject).then((function(tagsSent) {
                    deferred.resolve(tagsSent)
                }
                ))
            }
            )),
            deferred.promise
        },
        createTagObject: function(responsedata) {
            for (var tagObject = {}, i = 0; i < responsedata.length; i++)
                tagObject[responsedata[i].key] = responsedata[i].value;
            return tagObject
        }
    }
};
onesignalService.$inject = ["$q", "$http", "appConstants", "$window", "topmenuService"],
angular.module("EktaApp").service("onesignalService", onesignalService);
var dfptemplate1 = "<div id='div-gpt-ad-1436009623923-0'><script type='text/javascript'>googletag.cmd.push(function () {googletag.display('div-gpt-ad-1436009623923-0');});<\/script></div>";
angular.module("EktaApp").directive("dfpWide", (function($window, $compile) {
    return {
        restrict: "A",
        transclude: !0,
        template: dfptemplate1,
        replace: !1,
        link: function(scope, element, iAttrs) {
            element.html(""),
            element.append(angular.element($compile(dfptemplate1)(scope)))
        }
    }
}
));
var dfptemplate = "<div id='div-gpt-ad-1436009781041-0'><script type='text/javascript'>googletag.cmd.push(function () {googletag.display('div-gpt-ad-1436009781041-0');});<\/script></div>";
angular.module("EktaApp").directive("dfpSquare", (function($window, $compile) {
    return {
        restrict: "A",
        transclude: !0,
        template: dfptemplate,
        replace: !1,
        link: function(scope, element, iAttrs) {
            element.html(""),
            element.append(angular.element($compile(dfptemplate)(scope)))
        }
    }
}
)),
angular.module("EktaApp").directive("ddTextCollapse", ["$compile", function($compile) {
    return {
        restrict: "A",
        scope: !0,
        link: function(scope, element, attrs) {
            scope.collapsed = !1,
            scope.toggle = function() {
                scope.collapsed = !scope.collapsed
            }
            ,
            attrs.$observe("ddTextCollapseText", (function(text) {
                var maxLength = scope.$eval(attrs.ddTextCollapseMaxLength);
                if (text.length > maxLength) {
                    var firstPart = String(text).substring(0, maxLength)
                      , secondPart = String(text).substring(maxLength, text.length)
                      , firstSpan = $compile("<span>" + firstPart + "</span>")(scope)
                      , secondSpan = $compile('<span ng-if="collapsed">' + secondPart + "</span>")(scope)
                      , moreIndicatorSpan = $compile('<span ng-if="!collapsed">...</span> ')(scope)
                      , lineBreak = $compile('<br ng-if="collapsed">')(scope)
                      , toggleButton = $compile('<span class="collapse-text-toggle" ng-click="toggle()">{{collapsed ? "less" : "more"}}</span>')(scope);
                    element.empty(),
                    element.append(firstSpan),
                    element.append(secondSpan),
                    element.append(moreIndicatorSpan),
                    element.append(lineBreak),
                    element.append(toggleButton)
                } else
                    element.empty(),
                    element.append(text)
            }
            ))
        }
    }
}
]);
