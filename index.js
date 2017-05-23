const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.onAddingNewEvent = functions.database.ref('/events/{eventId}')
	.onWrite(event => {
		// Grab the current value of what was written to the Realtime Database.
		const danceEvent = event.data.val();
		console.log('Uppercasing', event.params.pushId, danceEvent);
		const uppercase = danceEvent.title.toUpperCase();
		// You must return a Promise when performing asynchronous tasks inside a Functions such as
		// writing to the Firebase Realtime Database.
		// Setting an "uppercase" sibling in the Realtime Database returns a Promise.
		return event.data.ref.parent.child('uppercase').set(uppercase);
	});
