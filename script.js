console.log(document.querySelector('.countries'))
document.querySelector('.countries').addEventListener('click', () => {
   console.log('hello world')
   document.querySelector('.ul').innerHTML = ''

   const filterRegion = randomPersonData.map(item => {
      return item.region
   });
   const uniq = [...new Set(filterRegion)].sort();
   uniq.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = item
      document.querySelector('.ul').appendChild(li);
   });
})

console.log(document.querySelector('.capricorn-women'))
document.querySelector('.capricorn-women').addEventListener('click', () => {
   const capricornWomen = randomPersonData
      .filter(data => (data.gender === 'female'))
      .filter(data => (data.age >= 30))
      .filter(data => (new Date(data.birthday.mdy).getMonth() === 11 && new Date(data.birthday.mdy).getDate() > 21) || (new Date(data.birthday.mdy).getMonth() === 0 && new Date(data.birthday.mdy).getDate() < 20));
   capricornWomen.forEach(item => {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`naam: ${item.name} ${item.surname}`));
      document.querySelector('.ul').appendChild(li);
   });
})





// operators  - n
// maak eerst functies werkend

// 1 filter met operator; vrouw - ouder > 30 > capricorn