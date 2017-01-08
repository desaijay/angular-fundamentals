
var app  = angular.module("app",[]);

app.controller("UserController", UserController);

function UserController(){
	this.NewfirstName = '';
	this.NewlastName = '';
	this.AddPerson = function(){
		// alert(this.NewlastName); // sorting via push and unshift
		this.person.unshift({
			firstName : this.NewfirstName,
			lastName : this.NewlastName
		})
	};
	this.person = [{
		firstName: "john",
		lastName:"doe",
		

	},{
		firstName: "emily",
		lastName:"mayer",
		
	},
	{
		firstName: "jay",
		lastName:"d",
		
	}];
}