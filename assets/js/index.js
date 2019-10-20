// Initialize Firebase
var config = {
    apiKey: "AIzaSyCJApA1Q2fwTkCeWFD0M_1EBPSXawnB758",
    authDomain: "train-scheduler-7525a.firebaseapp.com",
    databaseURL: "https://train-scheduler-7525a.firebaseio.com",
    projectId: "train-scheduler-7525a",
    messagingSenderId: "768471784199"
    };
    firebase.initializeApp(config);
    // Create a variable to reference the database
    var database = firebase.database();
    //Run Time
    setInterval(function(startTime) {
    $("#timer").html(moment().format('hh:mm a'))
    }, 1000);
    // Capture Button Click
    $("#add-train").on("click", function() {
    // refresh the page!
    event.preventDefault();
    // Code in the index for storing and retrieving the most recent train information
    var train = $("#trainname-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
    var firstTime = $("#firsttime-input").val().trim();
    //  initial data to your Firebase database. - set replaces old data
    //use push database.ref().set({
    var trainInfo = {
    formtrain: train,
    formdestination: destination,
    formfrequency: frequency,
    formfirsttime: firstTime,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
    };
    //added to get most resent user to change the listener
    database.ref().push(trainInfo);
    console.log(formtrain);
    console.log(formdestination);
    console.log(formfrequency);
    console.log(formfirsttime);
    console.log(dateAdded);
    // Alert
    // alert("Train was successfully added");
    // Clears all of the text-boxes
    $("#trainname-input").val("");
    $("#destination-input").val("");
    $("#frequency-input").val("");
    $("#firsttime-input").val("");
    });
    // Firebase watcher + initial loader
    database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    var train = childSnapshot.val().formtrain;
    var destination = childSnapshot.val().