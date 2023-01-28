const eventList = {
  "four": [
    {
      "id": "inauguration",
      "name": "INAUGURATION",
      "time": "4 PM - 6 PM",
      "venue": "Open Audi"
    }
  ],
  "five": [
    {
      "id": "nothing",
      "type": "noevent"
    }
  ],
  "six": [
    {
      "id": "openmic",
      "name": "OPEN MIC",
      "time": "4 PM - 6 PM",
      "venue": "Open Audi",
      "register": "https://forms.gle/Zdng2YqDUob2vYh28",
      "more": ""
    }
  ],
  "seven": [
    {
      "id": "ai",
      "name": "AI HACKATHON",
      "time": "4 PM - 6 PM",
      "venue": "",
      "register": "https://forms.gle/KAp4ERDtBzBLaXwL6",
      "more": ""
    }
  ],
  "eight": [
    {
      "id": "query",
      "name": "BREAK THE QUERY",
      "time": "4 PM - 6 PM",
      "venue": "",
      "register": "https://forms.gle/4uipUXZzcTAyomL47",
      "more": ""
    }
  ],
  "nine": [
    {
      "id": "codeathon",
      "name": "CODEATHON",
      "time": "4 PM - 6 PM",
      "venue": "",
      "register": "https://forms.gle/hRJEKMbe4sBo5XjMA",
      "more": ""
    }
  ],
  "ten": [
    {
      "id": "webally",
      "name": "WEBALLY",
      "time": "1 PM",
      "venue": "",
      "register": "https://forms.gle/oMhrSXaodaFe6EYF9",
      "more": ""
    },
    {
      "id": "blind",
      "name": "BLIND TYPING",
      "time": "2 PM - 4 PM",
      "venue": "",
      "register": "https://forms.gle/kpkvRDHMNGVejeUi7",
      "more": ""
    },
    {
      "id": "ideathon",
      "name": "IDEATHON",
      "time": "4 PM - 6 PM",
      "venue": "",
      "register": "https://forms.gle/wJP7ZkktAWFFLyZ36",
      "more": ""
    }
  ],
  "eleven": [
    {
      "id": "ace",
      "name": "ACE CLUTCH",
      "time": "10 PM - 4 PM",
      "venue": "",
      "register": "",
      "more": ""
    }
  ],
  "tweleve": [
    {
      "id": "nothing",
      "type": "noevent"
    }
  ],
  "thirteen": [
    {
      "id": "image",
      "name": "IMAGE BRUSH",
      "time": "4 PM - 6 PM",
      "venue": "",
      "register": "https://forms.gle/MdH5oZED5BVrstwg8",
      "more": ""
    }
  ],
  "fourteen": [
    {
      "id": "short",
      "name": "SHORT GAME DEVELOPMENT",
      "time": "2 PM - 4 PM",
      "venue": "",
      "register": "https://forms.gle/JdbweAN2XhjreXou8",
      "more": ""
    },
    {
      "id": "flix",
      "name": "FLIX n MANGA",
      "time": "4 PM - 6 PM",
      "venue": "",
      "register": "https://forms.gle/KJF9j3QGJLUcU4v5A",
      "more": ""
    }
  ],
  "fifteen": [
    {
      "id": "illustra",
      "name": "ILLUSTRA",
      "time": "4 PM - 6 PM",
      "venue": "",
      "register": "https://forms.gle/Q8ioT35J7Aybjbpx7",
      "more": ""
    }
  ],
  "sixteen": [
    {
      "id": "css",
      "name": "CSS BATTLE",
      "time": "4 PM - 6 PM",
      "venue": "",
      "register": "https://forms.gle/fTD8DzgAsz9d6RyZ8",
      "more": ""
    }
  ],
  "seventeen": [
    {
      "id": "quiz",
      "name": "TECH QUIZ",
      "time": "2 PM - 4 PM",
      "venue": "OPen Audi",
      "register": "https://forms.gle/GW4jrHXvGkgaXngD6",
      "more": ""
    }
  ],
  "eighteen": [
    {
      "id": "nothing",
      "type": "noevent"
    }
  ],
  "nineteen": [
    {
      "id": "nothing",
      "type": "noevent"
    }
  ],
  "twenty": [
    {
      "id": "accio",
      "name": "ACCIO LA NOCIEN",
      "time": "4 PM - 6 PM",
      "venue": "",
      "register": "https://forms.gle/5Us54QTy62CMNCUd6",
      "more": ""
    }
  ],
  "twentyone": [
    {
      "id": "Workshop"
    }
  ],
  "twentytwo": [
    {
      "id": "java",
      "name": "JAVA WORKSHOP",
      "time": "",
      "venue": "",
      "register": "",
      "more": ""
    }
  ],
  "twentythree": [
    {
      "id": "java",
      "name": "JAVA WORKSHOP",
      "time": "",
      "venue": "",
      "register": "",
      "more": ""
    }
  ],
  "twentyfour": [
    {
      "id": "c",
      "name": "C WORKSHOP",
      "time": "",
      "venue": "",
      "register": "",
      "more": ""
    }
  ],
  "twentyfive": [
    {
      "id": "web",
      "name": "WEB DEVELOPMENT WORKSHOP",
      "time": "",
      "venue": "",
      "register": "",
      "more": ""
    }
  ],
  "twentysix": [
    {
      "id": "nothing",
      "type": "noevent"
    }
  ],
  "twentyseven": [
    {
      "id": "web",
      "name": "WEB DEVELOPMENT WORKSHOP",
      "time": "",
      "venue": "",
      "register": "",
      "more": ""
    }
  ]
}


// eventList[v].map(eventList=>{
//   var elem = `<div class="elecard">${event}</div>`
//   document.getElementById('childdiv1').innerHTML += elem;
// })
// const [key, value] of Object.entries(dataGood)
for (const [key, value] of Object.entries(eventList)) {

  const mid = document.createElement("div");
  mid.setAttribute('class', `events-container ${key}`)
  const midspan = document.createElement("span");
  midspan.setAttribute('class', 'events__title')

  const elem = document.createElement("ul");
  elem.setAttribute('class', 'events__list')
  value.map(event => {
    var child = document.createElement("li");
    child.setAttribute('class', 'events__item')

    if (event.type != undefined && event.type == "noevent") {
      const h3h3 = document.createElement('h3');
      h3h3.setAttribute('class', 'noevents__title')
      h3h3.innerText = "No events found";
      child.appendChild(h3h3);

    } else {

      var spanname = document.createElement("span");
      spanname.setAttribute('class', 'events__name')
      spanname.innerText = event.name;

      var spantag = document.createElement("span");
      spantag.setAttribute('class', 'events__tag')
      spantag.innerText = event.time;

      var divtag = document.createElement("div");
      divtag.setAttribute('class', 'events__item--left')

      divtag.appendChild(spanname);
      divtag.appendChild(spantag);



      //
      var atag1 = document.createElement("span");
      atag1.setAttribute('href', event.register)
      atag1.innerText = "Register"

      var atag2 = document.createElement("span");
      atag2.setAttribute('href', event.more)
      atag2.innerText = "More Info"

      var spantag2a = document.createElement("span");
      spantag2a.setAttribute('class', 'events__tag regbtn')
      spantag2a.appendChild(atag1);

      var spantag2b = document.createElement("span");
      spantag2b.setAttribute('class', 'events__tag regbtn')
      spantag2b.appendChild(atag2);

      var divtag2 = document.createElement("div");
      divtag2.setAttribute('class', 'dispflex')
      divtag2.appendChild(spantag2a)
      divtag2.appendChild(spantag2b)

      child.appendChild(divtag);
      child.appendChild(divtag2);
    }
    elem.appendChild(child);
  })

  midspan.innerText = "Upcoming events today";
  mid.appendChild(midspan)
  mid.appendChild(elem);
  document.getElementsByClassName('portfolio-container')[0].appendChild(mid)
}


