function content() {
	return {
		transclude: {
			name:'=name',
			desc:'=desc'
		},
		template: `<div>
				<h4>Contact</h4>
				<div ng-transclude></div>
			</div>`
	}
}

angular
.module('app')
.directive('content', content);