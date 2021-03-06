"use strict";

var aerogearDevnexusApp = angular.module( "aerogearDevnexusApp", [ "ngSanitize" ])
        .config( [ "$routeProvider", function( $routeProvider ) {
            $routeProvider
                .when( "/", {
                    templateUrl: "views/home.html",
                    controller: "HomeCtrl"
                })
                .when( "/speakers", {
                    templateUrl: "views/speakers.html",
                    controller: "SpeakersPresentationsCtrl"
                })
                .when( "/speakers/:id", {
                    templateUrl: "views/speakers.html",
                    controller: "SpeakersPresentationsCtrl"
                })
                .when("/presentations", {
                    templateUrl: "views/presentations.html",
                    controller: "SpeakersPresentationsCtrl"
                })
                .when( "/presentations/:id", {
                    templateUrl: "views/presentations.html",
                    controller: "SpeakersPresentationsCtrl"
                })
                .when("/twitter", {
                    templateUrl: "views/twitter.html",
                    controller: "TwitterCtrl"
                })
                .when( "/twitter/:id", {
                    templateUrl: "views/tweet.html",
                    controller: "TweetCtrl"
                })
                .otherwise({
                    redirectTo: "/"
                });
        }]);
