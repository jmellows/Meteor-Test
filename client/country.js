if(Meteor.isClient) {
    Meteor.subscribe("country");
    Template.country.countries = function () {
    return Country.find();
  };
}