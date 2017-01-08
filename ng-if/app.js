
var app  = angular.module("app",[]);

app.controller("UserController", UserController);

function UserController(){
	this.person = [{
		firstName: "john",
		lastName:"doe",
		profession:"painter"
	},{
		firstName: "emily",
		lastName:"mayer",
		profession:"singer	"	
	},
	{
		firstName: "jay",
		lastName:"d",
		profession:"developer"
	}];
}