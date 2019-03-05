//Register `PhoneList` component, along with its associated controller and template
angular.
	module('phoneList').
	component('phoneList', {
		templateUrl: 'phone-list/phone-list.template.html',
		// template: 
		// 	'<ul>' +
		// 		'<li ng-repeat="phone in $ctrl.phones">' +
		// 			'<span>{{phone.name}}</span>' +
		// 			'<p>{{phone.snippet}}</p>' +
		// 		'</li>' + 
		// 	'</ul>',
		controller: function PhoneListController(){
			this.phones = [
				{
					name: 'Nexus S',
					snippet: 'Fast just got faster with Nexus S.'
				},{
					name: 'Motorola XOOM with wi-fi',
					snippet: 'The Next, Next Generation tablet.'
				},{
					name: 'MOTOROLA XOOM',
					snippet: 'The Next, Next Generation tablet.'
				}
			];
		}
	}); 