Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { return Meteor.subscribe('country'); }
});

Router.map(function() {
  this.route('home', {
    path: '/',
    yieldTemplates: {
          'home': {to: 'index'},
          'about': {to: 'about'}
        },
  });
  
  this.route('ironrouter', {
    path: '/ironrouter',
    template: 'home',
    yieldTemplates: {
          'home': {to: 'index'},
          'ironrouter': {to: 'iron'}
        },
  });

  this.route('video', {
    path: '/video',
    template: 'home',
    yieldTemplates: {
          'home': {to: 'index'},
          'video': {to: 'vid'}
        },
  });

  this.route('doublepath',{path: '/home/double'});
  this.route('paramone',{path: '/home/:_id'});
  this.route('oproutepath',{path: '/home/:_id/oproute'});
  
  this.route('passeddata', {
  path: '/ironrouter/passeddata',
  template: 'ironrouter',
  yieldTemplates: {
      'home': {to: 'index'},
      'ironrouter': {to: 'iron'},
      'passeddata': {to: 'data'}
    },
  data: function(){
	return {
			title: 'Data Test',
			description:'The code to make this possible'
    };
  }
});

  this.route('country', {
	path: 'country',
    data: function() {
		return Country.find();
    },
  });
});