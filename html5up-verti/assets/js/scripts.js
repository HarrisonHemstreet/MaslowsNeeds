const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScores = document.querySelector("[computer-score]")
const yourScores = document.querySelector("[your-score]")
const SELECTIONS = [{
    name: "rock",
    image: "rock.png",
    beats: "scissors"
}, {
    name: "paper",
    image: "paper.png",
    beats: "rock"
}, {
    name: "scissors",
    image: "Sizzar.png",
    beats: "paper"
}]
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)

    })
})


function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)

    addResults(computerSelection, computerWinner)
    addResults(selection, yourWinner)

    if (yourWinner) scoreCounter(yourScores)
    if (computerWinner) scoreCounter(computerScores)
}

function scoreCounter(scoreCount) {
    scoreCount.innerText = parseInt(scoreCount.innerText) + 1
}

function addResults(selection, winner) {
    const div = document.createElement("div")
    clearInterval(div)
    div.innerText = selection.image
    selection.image.hover;
    div.classList.add("result-selection")
    if (winner) div.classList.add("winner")
    finalColumn.after(div)

}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}