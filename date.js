//ini file utk date module yg mana kita create utk digunakan di app.js (require module)

module.exports.getDate = function(){  //getDate tu sendirian pnyer declare
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  let today = new Date();
  return today.toLocaleDateString("en-US", options);
}

module.exports.getDay = function(){  //getDay tu sendirian pnyer declare
  let options = {
    weekday: 'long'
  };
  let today = new Date();
  return today.toLocaleDateString("en-US", options);
};

console.log(module.exports);
