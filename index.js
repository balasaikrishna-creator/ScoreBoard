let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let matchResult = document.getElementById("match-result")
let match = false
document.getElementById("match-result").style.display = "none"
document.getElementById("end-match").disabled = true

homeScore.textContent = 0
guestScore.textContent = 0

function addNumber(scoreInc, scoreID) {
    matchResult.textContent = ""
    match = true
    document.getElementById("end-match").disabled = false
    document.getElementById("new-match").disabled = true
    if (scoreID === 'home-score') {
        let score = parseInt(homeScore.textContent)
        score += scoreInc
        homeScore.textContent = score
    } else {
        let score = parseInt(guestScore.textContent)
        score += scoreInc
        guestScore.textContent = score
    }
}

function endMatch() {
    if ( match === true ) {
        if( parseInt(homeScore.textContent) < parseInt(guestScore.textContent) ) {
            matchResult.textContent = `GUEST Team won the match by ${(parseInt(guestScore.textContent) - parseInt(homeScore.textContent))} points!!`
        } else if ( parseInt(guestScore.textContent) < parseInt(homeScore.textContent) ) {
            matchResult.textContent = `HOME Team won the match by ${(parseInt(homeScore.textContent) - parseInt(guestScore.textContent))} points!!`
        } else if(parseInt(homeScore.textContent) === parseInt(guestScore.textContent)){
            matchResult.textContent = `Match Tied!!`
        }
        document.getElementById("match-result").style.display = "flex"
        document.getElementById("end-match").disabled = true
        document.getElementById("new-match").disabled = false
        document.getElementById("home-button1").disabled = true
        document.getElementById("home-button2").disabled = true
        document.getElementById("home-button3").disabled = true
        document.getElementById("guest-button1").disabled = true
        document.getElementById("guest-button2").disabled = true
        document.getElementById("guest-button3").disabled = true
    }
    match = false
}

function newMatch() {
    if( match === false ) {
        match = true
        homeScore.textContent = 0
        guestScore.textContent = 0
        document.getElementById("match-result").style.display = "none"
        document.getElementById("end-match").disabled = true
        document.getElementById("home-button1").disabled = false
        document.getElementById("home-button2").disabled = false
        document.getElementById("home-button3").disabled = false
        document.getElementById("guest-button1").disabled = false
        document.getElementById("guest-button2").disabled = false
        document.getElementById("guest-button3").disabled = false
    }
}
