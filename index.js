// Gather data for users
var community = function() {
  var nameArr =['Lisa Smith', 'Terry Jones', 'Dan Ableton', 'Natasha Perry', 'Larry Wilson', 'Tina Berry'];
  var jobArr = ['Mortician', 'Painter', 'Mailman', 'Teacher', 'Software Developer', 'Dentist'];
  var cityArr = ['Memphis, TN', 'Dublin, MN', 'Scottsdale, AZ', 'Little Rock, AR', 'New York City, NY', 'Kansas City, Mo'];
  var emptyNetwork = [];

  // Generate random info for users
  function createNetwork(collection) {

    for(var i = 0; i < nameArr.length; i++) {
      var randomJob = jobArr[Math.floor(Math.random() * jobArr.length)];
      var randomCity = cityArr[Math.floor(Math.random() * cityArr.length)];

      collection.push(createNewUser(nameArr[i], randomJob, randomCity));
    }
    return collection;
  }
  return createNetwork(emptyNetwork);
};

// Create new user
function createNewUser(username, job, city) {
  var newUser = {
    username: username,
    job: job,
    city: city,
    friends: [],
    family: [],
    coworkers: []
  };
  return newUser;
};

// New users
var tedProfile = createNewUser('Teddy Collins', 'Baker', 'Leeds, AL');
var allUsers = community();

console.log(tedProfile);
console.log(community());
