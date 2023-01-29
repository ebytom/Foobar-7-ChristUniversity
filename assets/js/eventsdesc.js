const events = {
    breakthequery:{
        name:"Break the query",
        tagline:"Query to Victory",
        rounds:2,
        duration:"Round 1- 30 mins, Round 2-45mins",
        type:"Technical",
        eventsize:"Team Event",
        date:"Feb 8",
        time:"4:15 pm – 5:45 pm",
        venue:"345, Block II",
        club:"Coders Club",
        poster: "assets/imgs/pos1.png",
        desc:"Break the query – a DBMS event to put your query solving skills to the test",
        plan:"The event will consist of 2 rounds. The first round will be an aptitude round where the participants will be tested on their knowledge of various DBMS concepts. The questions will be projected and the participants will have to write down the answers on the A4 sheets provided. The second round will consist of solving SQL queries. All the queries will be judged after the end of the allotted time.",
        rubrics:[
            {
                round:1,
                name:"Aptitude round",
                desc:[
                    "Top 10 teams will qualify for the next round",
                    "In case of a tie the team that submits the solution first wins."
                ]
            },
            {
                round:2,
                name:"Solving queries",
                desc:[
                    "On solving the query the corresponding score will be awarded",
                    "The team that scores the most points wins"
                ]
            }
        ],
        rules:[
            "Each team will consist of 2 members.",
            "All participants must report to the venue 5 minutes before the competition begins. Latecomers will not be entertained. ",
            "Questions can be attempted in any order.",
            "Participants must bring their own laptops. A team must have only one laptop between both members.",
            "No extensions to the deadline will be provided.",
            "Participants are allowed to use OracleDB/PostgreSQL/MySQL. Participants have to ensure that they have it installed prior to the competition.",
            "Participants will be provided an additional 5 minutes after the allotted time to submit the spool files and presentation for the queries to be judged.",
            "Usage of the internet and other reference materials, or any other form of malpractice, will lead to disqualification."
        ],
        contact:{
            name:"Alan Sabu Mathew",
            design:"Club head-Coders Club",
            phno: "+91 8904652571",
            email:"alan.mathew@btech.christuniveristy.in"
        }
    },
    breakthequery:{
        name:"Break the query",
        tagline:"Query to Victory",
        rounds:2,
        duration:"Round 1- 30 mins, Round 2-45mins",
        type:"Technical",
        eventsize:"Team Event",
        date:"Feb 8",
        time:"4:15 pm – 5:45 pm",
        venue:"345, Block II",
        club:"Coders Club",
        poster: "assets/imgs/pos1.png",
        desc:"Break the query – a DBMS event to put your query solving skills to the test",
        plan:"The event will consist of 2 rounds. The first round will be an aptitude round where the participants will be tested on their knowledge of various DBMS concepts. The questions will be projected and the participants will have to write down the answers on the A4 sheets provided. The second round will consist of solving SQL queries. All the queries will be judged after the end of the allotted time.",
        rubrics:[
            {
                round:1,
                name:"Aptitude round",
                desc:[
                    "Top 10 teams will qualify for the next round",
                    "In case of a tie the team that submits the solution first wins."
                ]
            },
            {
                round:2,
                name:"Solving queries",
                desc:[
                    "On solving the query the corresponding score will be awarded",
                    "The team that scores the most points wins"
                ]
            }
        ],
        rules:[
            "Each team will consist of 2 members.",
            "All participants must report to the venue 5 minutes before the competition begins. Latecomers will not be entertained. ",
            "Questions can be attempted in any order.",
            "Participants must bring their own laptops. A team must have only one laptop between both members.",
            "No extensions to the deadline will be provided.",
            "Participants are allowed to use OracleDB/PostgreSQL/MySQL. Participants have to ensure that they have it installed prior to the competition.",
            "Participants will be provided an additional 5 minutes after the allotted time to submit the spool files and presentation for the queries to be judged.",
            "Usage of the internet and other reference materials, or any other form of malpractice, will lead to disqualification."
        ],
        contact:{
            name:"Alan Sabu Mathew",
            design:"Club head-Coders Club",
            phno: "+91 8904652571",
            email:"alan.mathew@btech.christuniveristy.in"
        }
    }
}


const currentevent = events[window.location.search.split('=')[1]] 

document.getElementById("eventname").innerText = currentevent.name;
document.getElementById("eventtagline").innerText = currentevent.tagline;
document.getElementById("eventdesc").innerText = currentevent.desc;

document.getElementById("eventdate").innerText = currentevent.date;
document.getElementById("eventtime").innerText = currentevent.time;
document.getElementById("eventvenue").innerText = currentevent.venue;
document.getElementById("eventsize").innerText = currentevent.tagline;
document.getElementById("eventtype").innerText = currentevent.type;
document.getElementById("eventrounds").innerText = `${currentevent.rounds} rounds`;

document.getElementById("eventactionplan").innerText = currentevent.plan;


const eventrules = document.getElementById('eventrules')
currentevent.rules.map(rule=>{
    var lili = document.createElement('li');
    lili.innerText = rule;
    eventrules.appendChild(lili)
})

document.getElementById("eventposter").setAttribute('src',currentevent.poster);

document.getElementById("eventcontactname").innerText = currentevent.contact.name;
document.getElementById("eventcontactdesign").innerText = currentevent.contact.design;
document.getElementById("eventcontactnumber").innerText = currentevent.contact.phno;
document.getElementById("eventcontactemail").innerText = currentevent.contact.email;