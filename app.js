
var app  = angular.module("app",[]);

app.controller("UserController", UserController);

function UserController(){
	this.person = [{
		firstName: "john",
		lastName:"doe"
	},{
		firstName: "emily",
		lastName:"mayer"	
	},
	{
		firstName: "jay",
		lastName:"d"
	}];
}