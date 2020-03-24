var myObj = [
  {
    name: 'Joe',
    age: '25',
    hometown: 'Mumbai, India',
    gender: 'male'
  },
  {
    name: 'Tom',
    age: '23',
    hometown: 'Chandigarh',
    gender: 'male'
  },
  {
    name: 'Toni',
    age: '26',
    howntown: 'Mohali',
    gender: 'female'
  },
  {
    name: 'Jiya',
    age: '22',
    hometown: 'Usa',
    gender: 'female'
  },
  {
    name: 'Betti',
    age: '24',
    hometown: 'Uk',
    gender: 'female'
  }
];

var friends_name = document.getElementById('name');
friends_age = document.getElementById('age');
friends_hometown = document.getElementById('hometown');
friends_gender = document.getElementById('gender');
friends_table = document.getElementById('table');
events = [];

function submitNewEvent() {
  var eventObj = {
    name: friends_name.value,
    age: friends_age.value,
    hometown: friends_hometown.value,
    gender: friends_gender.value
  };

  var row = `<tr>
                 <td>${eventObj.name}</td>
                 <td>${eventObj.age}</td>
                 <td>${eventObj.hometown}</td>
                 <td>${eventObj.gender}</td>
               </tr>`;

  //   // Clear inputs
  //   friends_name.value = friends_age.value = friends_hometown.value = friends_gender.value =
  //     '';

  // Store into Array
  events.push(eventObj);

  // Insert row into table
  friends_table.insertAdjacentHTML('beforeend', row);
}

// console.log(myObj);
