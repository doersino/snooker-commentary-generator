lines =
    [ "Where's the cue ball going?!"
    , "It's okay."
    , "Quick glance at the scoreboard, 46 points behind."
    , "That's a bad miss."
    , "That was a bad miss."
    , "Bit of pressure on this one."
    , "This is a frame-winning opportunity!"
    , "He's got a kick there."
    , "He left a red to the left middle."
    , "He left the red to the right middle."
    , "That's a little bit careless!"
    , "Great shot!"
    , "He's inch-perfect on this red."
    , "He's inch-perfect on this colour."
    , "It's not bad, it's not bad at all!"
    , "Is he gonna knock this in?"
    , "This blue is missable!"
    , "Right in the heart of the pocket and cued it like a dream."
    , "He was concentrating on the safety and took his eye off the pot."
    , "Quick glance at the scoreboard just to see how many he needs to secure the frame."
    , "Watch out, there's a rocket about!"
    , "He's underhit that!"
    , "Doesn't appear to have left anything."
    , "Well, the shot would have been safe if the red hadn't ended up over the pocket."
    , "From this position you've got to fancy either yourself or your opponent winning."
    , "Just needs one more red."
    , "Needless to say, this is far and away the best snooker in the match."
    , "He's missed the frame ball!"
    , "Why did he play it at that pace?"
    , "Good pot."
    , "He's still on this black, but it's a bit trickier than it should've been."
    , "Anywhere near that side cushion will do."
    , "That was a terrific pot, bang in the middle."
    , "He's got a massive kick there, but he's okay."
    , "Caught the red just a little thick."
    , "Caught it just a little thick on the way back up the table."
    , "He could take this red on to the corner."
    , "He's going for the blue."
    , "He's going for the pink."
    , "That was a pretty good pot."
    , "He's just got a little angle there."
    , "Look at that right-hand side on the cue ball!"
    , "Just watch the cue ball. Look at that side!"
    , "Would've been very unfortunage not to have been on a red."
    , "He's on the yellow."
    , "He's nicely on this red."
    , "Nicely on reds to both middles."
    , "He's playing for the black."
    , "Would've liked to be a little straighter on the blue."
    , "He doesn't want to catch those reds on the way down, though."
    , "Well, he's the favourite to take this frame now!"
    , "Found the angle."
    , "He's of cours going to need the black."
    , "Now do you think he'll play for the double?"
    , "That was so close!"
    , "What a fantastic long black!"
    , "Just a little bit more left-hand side on the cue ball."
    , "Well, he caught them a little thick."
    , "Just made the shot a little bit more difficult, with the cue ball being closer to the cusion."
    , "Generous round of applause for a good safety shot."
    , "Brilliant snooker!"
    , "Just needed the cue ball to hold up, just a fraction."
    , "It's dificult to see what he could play."
    , "Just a little touch on the two reds, developing them."

    // suggested by /u/enilkcals, see https://www.reddit.com/r/snooker/comments/53o2hc/snooker_commentary_generator/d7urdbj
    , "He's blessed with wonderful cue action."
    , "He's blessed with powerful cue action."

    // suggested by /u/inflameswetrustsss, see https://www.reddit.com/r/snooker/comments/53o2hc/snooker_commentary_generator/d7utyhb
    , "He might be going for that difficult brown, or the easy pink."
    ]

function breakOff() {
    if (location.hash) {
        currentLine = location.hash.slice(1)
        render()
    } else {
        currentLine = -1
        nextShot()
    }
}

// avoids showing the same line twice in a row
function nextShot() {
    nextLine = currentLine
    while (nextLine == currentLine) {
        nextLine = Math.floor(Math.random() * lines.length) + 1
    }
    currentLine = nextLine
    render()
}

function render() {
    document.getElementById("quote").innerHTML = lines[currentLine-1]
    pad = "000"
    currentLine = (pad + currentLine).slice(-pad.length)
    location.hash = '#' + currentLine
}
