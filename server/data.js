if(Meteor.isServer) {
    Meteor.publish("country", function() {
    return Country.find();
    });
}