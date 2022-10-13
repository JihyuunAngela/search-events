document.querySelector('#keywordButton').addEventListener('click', getKeywordEvents)



function getKeywordEvents() {
  const keyword = document.querySelector('#keyword').value
  const ul = document.querySelector('ul')

  const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&apikey=SSPMs4skFiAdqUtAOqmO7XeTglZfZEAG`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data._embedded.events[0])
        document.querySelector("p").innerHTML = ""
        document.querySelector("ul").innerHTML = ""

          data._embedded.events.forEach ( obj => {
            const li = document.createElement('li')

            li.innerHTML = `${obj.name} - ${obj.dates.start.localDate}, ${obj.dates.start.localTime} - <a href='${obj.url}'>buy</a>`

            document.querySelector('ul').appendChild(li)
          })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


}

