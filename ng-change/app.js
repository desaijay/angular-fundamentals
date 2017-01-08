var app  = angular.module("app",[]);
app.controller("UserController", UserController);
function UserController(MathService){
	this.firstno = 0;
	this.secondno = 0;
	this.onToggle = function(Input){
		switch(Input){
			case 1 : {
				if(this.Calc == 1){
					this.abc = MathService.add(parseFloat(this.firstno), parseFloat(this.secondno ));
				}else if(this.Calc == 2){
					this.abc = MathService.sub(parseFloat(this.firstno), parseFloat(this.secondno ));
				}else if(this.Calc == 3){
					this.abc = MathService.div(parseFloat(this.firstno), parseFloat(this.secondno ));
				}else if(this.Calc == 4){
					this.abc = MathService.mul(parseFloat(this.firstno), parseFloat(this.secondno ));
				}
				}
			break;
		}
	};
	this.rsMathCal = {
		"0": "Select ",
		"1": "+",
		"2":"-",
		"3":"/",
		"4":"*"
	} ;
}