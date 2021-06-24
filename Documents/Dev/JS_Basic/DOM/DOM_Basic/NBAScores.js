

// eventually, we can do sth with API or other data
// pretty gross code... need to refactor it.
const warriorsGames = [{
    awayTeam: {
        team: 'Golden State',
        points: 119,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 106,
        isWinner: false
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 105,
        isWinner: false
    },
    homeTeam: {
        team: 'Houston',
        points: 127,
        isWinner: true
    }
},
{
    homeTeam: {
        team: 'Golden State',
        points: 126,
        isWinner: true
    },
    awayTeam: {
        team: 'Houston',
        points: 85,
        isWinner: false
    }
},
{
    homeTeam: {
        team: 'Golden State',
        points: 92,
        isWinner: false
    },
    awayTeam: {
        team: 'Houston',
        points: 95,
        isWinner: true
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 94,
        isWinner: false
    },
    homeTeam: {
        team: 'Houston',
        points: 98,
        isWinner: true
    }
},
{
    homeTeam: {
        team: 'Golden State',
        points: 115,
        isWinner: true
    },
    awayTeam: {
        team: 'Houston',
        points: 86,
        isWinner: false
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 101,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 92,
        isWinner: false
    }
}
]




// *******************************************
// STEP 1 - UGLY, UN-REFACTORED CODE! (but it works!)
// *******************************************

/*
// make a new element... an empty ul
const ulParent = document.createElement('ul');
for (let game of warriorsGames) {
    // extract homeTeam and awayTeam using destructuring
    const { homeTeam, awayTeam } = game;
    // console.log(awayTeam.team, homeTeam.team);

    // new li
    const gameLi = document.createElement('li');

    // destructure
    const { team: hTeam, points: hPoints } = homeTeam;
    const { team: aTeam, points: aPoints } = awayTeam;

    const teamNames = `${aTeam} @ ${hTeam}`;

    // 점수는 string으로 만들자.
    // const scoreLine = `${aPoints}-${hPoints}`;
    // console.log(scoreLine)


    // winning score with <b> around it... compare the points

    let scoreLine;
    if (aPoints > hPoints) {
        //const scoreLine = `<b>${aPoints}</b>-${hPoints}`;
        //const는 block scope이라서 여기서 선언해버리면 .. 바깥에서 쓸 수 없음
        scoreLine = `<b>${aPoints}</b>-${hPoints}`;
    } else {
        scoreLine = `${aPoints}-<b>${hPoints}</b>`;
    }


    // check if one of the temas is a winner and if it's golden state

    const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
    //console.log(warriors);

    // add a class
    gameLi.classList.add(warriors.isWinner ? 'win' : 'loss'); // true or false

    //gameLi.innerText = `${teamNames} ${scoreLine}`; // doens't work
    gameLi.innerHTML = `${teamNames} ${scoreLine}`;
    // we need to append each li to the ul! appendChild() or append()


    // ulParent exists in js but it's not on the page yet!
    ulParent.appendChild(gameLi);


}

// append them to the body
document.body.prepend(ulParent);


*/




//*********************************************
// STEP 2 - REFACTOR IT
//*********************************************


// I can append it wherever i want
const makeChart = (games, targetTeam) => {

    const ulParent = document.createElement('ul');

    // hard coding 하지 않기 위해 이름은 games로 설정
    for (let game of games) {
        const { homeTeam, awayTeam } = game;

        // gameLi represents each lis
        const gameLi = document.createElement('li');
        gameLi.innerHTML = getScoreLine(game);

        //isWinner(game, targetTeam);
        // const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;

        gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');

        ulParent.appendChild(gameLi);

    }

    return ulParent; // contains all of lis, all of data
};


const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
    const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
    return target.isWinner;
}

const getScoreLine = ({ homeTeam, awayTeam }) => {

    // destructure
    const { team: hTeam, points: hPoints } = homeTeam;
    const { team: aTeam, points: aPoints } = awayTeam;

    const teamNames = `${aTeam} @ ${hTeam}`;

    let scoreLine;
    if (aPoints > hPoints) {
        scoreLine = `<b>${aPoints}</b>-${hPoints}`;
    } else {
        scoreLine = `${aPoints}-<b>${hPoints}</b>`;
    }

    return `${teamNames} ${scoreLine}`;
}

const gsSection = document.querySelector('#gs');
const hrSection = document.querySelector('#hr');
const gsChart = makeChart(warriorsGames, 'Golden State');
const hrChart = makeChart(warriorsGames, 'Houston');
gsSection.appendChild(gsChart);
hrSection.appendChild(hrChart);



