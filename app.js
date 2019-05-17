// important: only add lines at the bottom in order to avoid breaking links
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
    , "Would've been very unfortunate not to have been on a red."
    , "He's on the yellow."
    , "He's nicely on this red."
    , "Nicely on reds to both middles."
    , "He's playing for the black."
    , "Would've liked to be a little straighter on the blue."
    , "He doesn't want to catch those reds on the way down, though."
    , "Well, he's the favourite to take this frame now!"
    , "Found the angle."
    , "He's of course going to need the black."
    , "Now do you think he'll play for the double?"
    , "That was so close!"
    , "What a fantastic long black!"
    , "Just a little bit more left-hand side on the cue ball."
    , "Well, he caught them a little thick."
    , "Just made the shot a little bit more difficult, with the cue ball being closer to the cusion."
    , "Generous round of applause for a good safety shot."
    , "Brilliant snooker!"
    , "Just needed the cue ball to hold up, just a fraction."
    , "It's difficult to see what he could play."
    , "Just a little touch on the two reds, developing them."

    // suggested by /u/enilkcals, see https://www.reddit.com/r/snooker/comments/53o2hc/snooker_commentary_generator/d7urdbj
    , "He's blessed with wonderful cue action."
    , "He's blessed with powerful cue action."

    // suggested by /u/inflameswetrustsss, see https://www.reddit.com/r/snooker/comments/53o2hc/snooker_commentary_generator/d7utyhb
    , "He might be going for that difficult brown, or the easy pink."

    // via https://twitter.com/bbcsnooker/status/556213288707825664
    , "If he picked it up with his hand, he couldn't have placed it any better."
    , "This game is all about fractions."

    // based on an old Reddit thread, see https://www.reddit.com/r/snooker/comments/2oogay/snooker_commentary_drinking_game_just_for_fun/
    , "The black's tied up now."
    , "The pink's tied up now."
    , "With the blue and pink out of commission, he has to pot the black to clinch the frame."
    , "He's left it in the jaws of the pocket!"
    , "He's hampered by the green."
    , "He's hampered by this cluster of reds."
    , "A slight cannon into the pink could lead to a frame-winning opportunity."
    , "A little wry smile on his face."
    , "It's amazing, isn't it?"
    , "A total clearance looks a formality now."

    // from the first hour of https://www.youtube.com/watch?v=0j4ng7PL5yc
    , "Well, this could be a real cracker."
    , "He's made a bit of a mess of that, it would seem."
    , "Oh, did that kick?"
    , "He's left the cue ball very close to the cushion."
    , "I think he's just rolling into this one deadweight."
    , "Now, that's a bit unlucky."
    , "That will do."
    , "I think he can get through to this red near the middle pocket, it's definitely cuttable."
    , "Nice cannon as well."
    , "Well, I'm not sure whether this loose red goes into the right corner."
    , "Well, I said he needed some luck, and he hasn't got any."
    , "That was well played."
    , "It's on, and he could stun through for the pink to the middle."
    , "I don't think there's any value to taking the brown on, he can't get himself onto a red."
    , "It's close..."
    , "Needs to slow up!"
    , "Needs to slow down!"

    // suggested by /u/1amarr, see https://www.reddit.com/r/snooker/comments/53o2hc/snooker_commentary_generator/d7v49ka
    , "Absolutely inch perfect!"
    , "I've never seen anything like that before."

    // suggested by /u/I_tend_to_correct_u, see https://www.reddit.com/r/snooker/comments/53o2hc/snooker_commentary_generator/d7vbheh
    , "We have a knowledgable crowd in this evening."
    , "You're never settled until you've got a frame on the board."
    , "A crucial frame, this one!"
    , "He's given himself a lot to do here."
    , "Helpful little kiss on the pink there."
    , "He's ended up on the wrong side of the blue, now he's going to have to go in and out of baulk."

    // suggested by @slackline, see https://github.com/doersino/snooker-commentary-generator/issues/2
    , "He's had a result there."

    // from the middle of https://www.youtube.com/watch?v=0j4ng7PL5yc
    , "There's a red to the left corner on here, but I'm not quite sure where the white would finish."
    , "That's good cueing off the side cushion there."
    , "Well, he was trying to get on the red near the green, but didn't quite get enough check side on the cue ball."
    , "Nicely held for the black."
    , "We know that these boys think two, three, four, possibly five shots ahead when they're at the table."
    , "Well, that's a nice little nudge off the pink."
    , "He can't continue the break, but he can put his opponent in trouble."
    , "Trying to make something happen, but it's not quite happening."
    , "I just thought for a few seconds there that he might snooker himself behind the black."
    , "There's plenty of room, but it's no gimme."
    , "He wasn't enjoying the scrappy frames."
    , "Might get the double!"
    , "He's left a half-chance to the middle."
    , "He's caught that a bit thin."
    , "He's caught that quite thick."

    // from https://www.youtube.com/watch?v=ANjmLfoLiA0
    , "Well, somehow he's got to disturb that yellow and brown."
    , "Somehow he's got to fluke the yellow."
    , "You never know, there's six pockets on the table!"

    // from https://www.youtube.com/watch?v=zGWmZ_pZyKs
    , "He likes these thin cuts."

    // suggested by Ken Doherty, see https://twitter.com/kendoherty1997/status/778984382765957122
    , "That was careless!<span>suggested by <a href='https://twitter.com/kendoherty1997/status/778984382765957122'>Ken Doherty</a></span>"

    // suggested by @BigNoiseSneezer, see https://twitter.com/bignoisesneezer/status/779005674151895040
    , "He missed that by a country mile!"

    // suggested by @SimonPkcjones, see https://twitter.com/simonpkcjones/status/779016611206406145
    , "There's always a gap!"

    // suggested by Ken Doherty, see https://twitter.com/kendoherty1997/status/779073983849304064
    , "Whatever you do, don't hit the blue!<span>suggested by <a href='https://twitter.com/kendoherty1997/status/779073983849304064'>Ken Doherty</a></span>"

    // from the last half-hour of https://www.youtube.com/watch?v=0j4ng7PL5yc
    , "Could be a bit of a cheer if this red goes in."
    , "It's not been big breaks, but he's really stuck to the task well."
    , "He's blocked off the right-hand side of the pack."
    , "What about that!"
    , "Unbelievable cueing to get back for the pink."

    // from the final session of the 2013 world snooker championship final, see https://www.youtube.com/watch?v=LkebXhPnEbM
    , "Excellent pot!"
    , "Needs to go past the blue!"
    , "He couldn't've played it any better."
    , "An excellent chance to go into the pack."
    , "Played two great shots in this break and has not been rewarded."

    // from https://www.youtube.com/watch?v=ZwOQgwiMHKM
    , "Wasn't easy for him, hampered over the green there."
    , "He's looking at the angle, I think he's going for the green here."

    // from https://www.youtube.com/watch?v=IhnqvquD_yo
    , "Well, that could've been better."
    , "This is one of those, just make sure to pot and let the rest happen."
    , "He's been picking up the pieces in frames and winning them that way."
    , "Last evening he hardly missed one."
    , "Only one more red required."
    , "He's not finished ideal – now this has to go in."
    , "He has to be careful here."
    , "If this goes in, it's even."
    , "There's no doubt that these two frames could've gone either way."
    , "A kick on the breakoff shot – now that's a rarity!"
    , "Now is this red too thin?"
    , "There's been some great stuff already from these two in this final."
    , "Nicely controlled there."
    , "Just got the right side of the blue."
    , "Possible plant on here to the right corner."

    // from https://www.youtube.com/watch?v=EXF2_IusKdM
    , "It's there."
    , "He's got it."
    , "He's inch-perfect on the black."
    , "Oh my goodness, what a pot that is!"
    , "What a shot this could be if he misses the blue!"
    , "Have a look at that for a shot."
    , "The line is good, but how's the pace?"
    , "What a shot this could be!"
    , "Needs to pull up a little bit."
    , "Have you ever seen a split like that?"
    , "That was an unbelievable positional shot he's just played there."

    , "He's one of the nicest lads you could ever wish to meet."
    , "Doesn't matter about the blue."
    , "Doesn't matter about the green."
    , "This is frame ball."

    // from the last session of the 2019 wc final, see https://www.youtube.com/watch?v=uD72UHuevWI
    , "That needs to pull up."
    , "That needs to pull up or run a bit further."
    , "He may have an angle on the yellow to get back to the reds."
    , "He's done precious little wrong in this match, but his opponent has just been outstanding."
    , "He needs 42 more points to take the frame."
    , "Didn't want to leave this angle on the blue."
    , "Beautiful little cannon."
    , "He only needs this red and a colour."
    , "Didn't want the cannon on this yellow."
    , "This brown is a thin cut."
    , "Tough shot, this."

    , "That's inch-perfect!"
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

// avoid showing the same line twice in a row
function nextShot() {
    nextLine = currentLine
    while (nextLine == currentLine) {
        nextLine = Math.floor(Math.random() * lines.length) + 1
    }
    currentLine = nextLine
    location.hash = '#' + currentLine
}

// make back button work
window.onhashchange = breakOff

function render() {
    document.getElementById("quote").innerHTML = lines[currentLine-1]
    pad = "000"
    currentLine = (pad + currentLine).slice(-pad.length)
}
