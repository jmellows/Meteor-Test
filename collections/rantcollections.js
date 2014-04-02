Country = new Meteor.Collection("country");

Country.allow({
  insert: function(country) {
    return true;
  }
});
