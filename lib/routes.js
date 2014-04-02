Router.configure({
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('country'); }
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('about');
  this.route('doublepath',{path: '/home/double'});
  this.route('paramone',{path: '/home/:_id'});
  this.route('oproutepath',{path: '/home/:_id/oproute'});
  
  this.route('datatest', {
  path: 'data',
  data: function(){
	return {
			title: 'Data Test',
			description:'This page has rendered passed data'
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

Router.onBeforeAction('loading');