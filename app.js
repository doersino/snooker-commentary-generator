// important: only add lines at the bottom in order to avoid breaking links
const lines =
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
    , "We have a knowledgeable crowd in this evening."
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

    // from ronnie vs selby, wolds 2020, semi-final, second half of session 1 (eurosport)
    , "That's a great recovery shot."
    , "He was looking good."
    , "Very tight, that."
    , "Now, will that red go to the right middle?"
    , "He decided he didn't like it, and played that one."
    , "Good recovery shot."
    , "And a nice angle on the red to get back to the bunch."
    , "Look at that for a shot!"
    , "I'm not saying he will, but he could play that cannon to the red near the left middle."
    , "Now, he could play for the red on the cushion here."
    , "Decided against it."
    , "What a frame!"
    , "Wrong side of the blue."
    , "A chance to play a good safety shot there – in fact, he could play the double."
    , "Misjudged the speed of the shot there, but he had the line."
    , "There's lots of variations here."
    , "He's missed the brown!"
    , "Very good safety, acknowledged by his opponent."
    , "Just didn't catch it full enough."
    , "So close – now where's it gonna finish?"
    , "He hasn't left it on."
    , "It will go to the left corner."
    , "Another chance."
    , "Didn't want the kiss."
    , "32 points the difference."
    , "25 points the difference."
    , "12 points the difference."
    , "Both players could have won this frame."
    , "He's keeping himself in the picture with this frame."
    , "Two more frames to come in this absorbing semifinal."
    , "That's an attacking safety!"
    , "That could've gone wrong so easily."
    , "Very attacking safety shot, that."
    , "That's a belter!"
    , "That safety's gone wrong."
    , "That's a very difficult shot to take on."
    , "What a terrific shot."
    , "Nowhere to go here but a little tippy-tappy."
    , "He'd be on the green if it went in."
    , "He's done well to get the cue ball back to there."
    , "He can screw the cue ball back in behind the black."
    , "That was so controlled!"
    , "Doubly pleasing that he won that little safety battle."
    , "Choice of yellow or green."
    , "Nicely on to the red."
    , "He's potted three yellows, a green, and a black."
    , "He's underhit that one by quite a distance."
    , "Look at the check on that cue ball there!"
    , "Those three loose reds should be enough to clinch the frame."
    , "What a wonderful shot."
    , "He's gonna need another red to get the frame safe."
    , "Just needs the red to leave his opponent needing two snookers."
    , "Three snookers to win the frame – the four-point variety, in any case."
    , "He's overcut it by a week!"
    , "That looks just about right."
    , "That only just went in."

    // from the second session of the same match (eurosport)
    , "He's certainly on one to the left corner, but I think he's on one to the right, as well."
    , "Look at the right-hand side on the cue ball there!"
    , "He'll want to hit right back after losing the opening two frames."
    , "A difficult green, this."
    , "Nicely played."
    , "Will he risk playing for the black?"
    , "He's playing for the black!"
    , "Just potted the red a little thick, otherwise the cue ball would've been two or three inches closer to the black."
    , "This isn't straightforward, either."
    , "Just looking to see if the pink will go into that left corner – if it does, he'll be in business."
    , "He'd like to be absolutely straight on this pink."
    , "Just a little pacey."
    , "This is where he needs good position on the pink to be able to get on that red."
    , "That could have gone anywhere."
    , "Now what?"
    , "I don't expect him to take this red on."
    , "It's an easy safety."
    , "He's knocked it in, and what a great pot it was!"
    , "Excellent pot."
    , "Half-ball on the red, and he should be on one of those two."
    , "He's in total control at the moment – not just of the match, but of himself."
    , "Needs to slow down."
    , "Could've played that one better, though."
    , "Doesn't need to go into them."
    , "Now he's back in prime position."
    , "Could ask for a re-rack."
    , "He doesn't want it on the cushion... that's okay."
    , "Excellent cueing, excellent cueing – just overhit it slightly."
    , "One thing he doesn't lack is determination."
    , "Lots of pressure on this one."
    , "The next frame is not a formality."
    , "I think he'll accept that it's gone wrong, push the green safe, and play the safety."
    , "Hit it a bit thick, that's why the cue ball hasn't reached the baulk line."
    , "I'm surprised he took that on!"
    , "He's 62 behind, one snooker needed."
    , "Why so hard?"
    , "He's going for shots, but they're not going in."
    , "Good break-off, look where the cue ball is."
    , "Got enough side on the cue ball not to leave the red over the right corner."
    , "Surely this red doesn't go."
    , "Little standoff then at the start of this frame."
    , "That could have been a frame-winner, had he got it."
    , "Nudging more reds out."
    , "Holding for the red over the corner pocket."
    , "More reds being developed."
    , "Perfectly played!"

    // suggested by /u/pinkfairyboy_, see https://www.reddit.com/r/snooker/comments/i92ea4/snooker_commentary_generator/g1dqz7y/
    , "How's your luck?"
    , "Bit short of pace."
    , "He'd like to win this frame in one visit."

    // suggested by /u/georgemccauley, see https://www.reddit.com/r/snooker/comments/i92ea4/snooker_commentary_generator/g1etllo/
    , "That's gone right into the heart of the pocket."
    , "He's used all of the pocket there."

    // from the third session of the o'sullivan-selby match above (eurosport)
    , "He needs to do some damage here."
    , "Four reds, four blacks."
    , "That's not a good shot."
    , "This match has really come alive."
    , "Hit that almost too well – the cue ball has raced up the table."
    , "Had to catch the red just right there to keep things relatively safe."
    , "Well then, here's a possible twist."
    , "That's not great – all the reds have gone in each other's way."
    , "Another weak safety."
    , "If this goes in, you'd fancy him to win the frame."
    , "That couldn't have been struck more sweetly."
    , "I'm not surprised he's missed this – horrid shot."
    , "Good shot."
    , "He's in the mood to do some serious damage tonight."
    , "He's having a look at the bunch."
    , "That'll do."
    , "Still work to do."
    , "Looks a good angle on the brown to get the reds open."
    , "This is the biggest shot of the evening so far."
    , "Very well played."
    , "He's played that particularly well."
    , "He played the old hit and hope there."
    , "Magnificent!"
    , "Superb pot."
    , "What a split that is!"
    , "Hit the pink smack on the nose."
    , "He's missed it!"
    , "This would be some clearance!"
    , "This is awkward cueing."
    , "But! That red stays out!"
    , "This green is not straightforward – he's on a stretch."
    , "That was a fantastic shot."
    , "He'll have to force it to get enough on the cue ball to go into the bunch."
    , "The cue ball plowed through them, but strangely the reds didn't open up."
    , "30 the difference."
    , "That's much more like it!"
    , "Stroked that in nicely."
    , "25 the difference, 43 on."

    // suggested by /u/https://www.reddit.com/r/snooker/comments/i92ea4/snooker_commentary_generator/g1h64sm/?context=3, see https://www.reddit.com/r/snooker/comments/i92ea4/snooker_commentary_generator/g1h64sm/?context=3 and https://www.reddit.com/r/snooker/comments/i92ea4/snooker_commentary_generator/g1h4wfm/?context=3
    , "I don’t think he can win the frame at this visit, but he can certainly get right back into it."
    , "This is a big pocket."

    // from the 2020 worlds final (bbc)
    , "Maybe this will settle him down."
    , "An early chance!"
    , "And once again, he's missed a pot to that right corner."
    , "Look at his safety success rate – it's 86 percent."
    , "Once good positional shot here, and he'll have a great chance."
    , "He might just be okay."
    , "He's got them where he wants them now!"
    , "He's prefer to do it without playing a cannon, but he might have to here."
    , "He'll need two of these six reds on the top cushion to win the frame."
    , "Bit unlucky there, he's got a nudge from that red."
    , "Is this end of break?"
    , "He's got an easy safety shot off the loose red."
    , "If he's gonna go into the pack, it's going to be from the top cushion now."
    , "The pink just seemed to drift a bit towards the left there."
    , "I thought we were going to drift into 10 minutes all about the nap of the cloth there, but we've held back."
    , "It will take some shot to get to the yellow."
    , "Has to power this in."
    , "The green and the brown are inviting."
    , "He's completely mishit that – surely he didn't play that?"
    , "That wasn't in the heart of the pocket, that's why he's not on the pink."
    , "He can cut the blue in, then in and out of baulk."
    , "Can you believe it?"
    , "That's terrible cueing from him there."
    , "Didn't really get much action on the cue ball there, so he's a bit wider than he would've wanted."
    , "Hasn't gone far enough – it's difficult now."
    , "He'll settle for that."
    , "What a clever shot!"
    , "Caught it too thin."
    , "That was the best he could do without sending the cue ball up and down the table."
    , "This might be cuttable."
    , "This feels like the most important frame of the session, doesn't it?"
    , "That was tough!"
    ];

var currentLine = -1;
var recentLines = [-1];

// set things up
function breakOff() {
    if (location.hash) {
        currentLine = location.hash.slice(1);
        render();
        recentLines.push(currentLine);
    } else {
        nextShot();
    }
}

// generate new line, avoid showing the same line again for a while
function nextShot() {
    recentLines.splice(0, recentLines.length - 50 + 1);
    let nextLine = currentLine;
    while (recentLines.includes(nextLine)) {
        nextLine = Math.floor(Math.random() * lines.length) + 1;
    }
    currentLine = nextLine;
    history.replaceState({}, '', '#' + currentLine);
    breakOff();
}

// render current line
function render() {
    document.getElementById("number").innerHTML = "#" + currentLine;
    document.getElementById("quote").innerHTML = lines[currentLine-1];
}
