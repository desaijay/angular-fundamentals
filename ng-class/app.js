
var app  = angular.module("app",[]);

app.controller("UserController", UserController);

function UserController(){
		
	this.person = [{
		firstName: "john",
		lastName:"doe",
		birthYear: "1990"

	},{
		firstName: "emily",
		lastName:"mayer",
		birthYear: "2005"	
	},
	{
		firstName: "jay",
		lastName:"d",
		birthYear: "1992"
	}];
}