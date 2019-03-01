// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {
        
        menu: {
            background_image: "hiki.jpeg",
            music: "Zelda-Intro.mp3",
            message: "Hikikomoris are recluses that never leave the house. Begin the game to begin your life as one!",
            choices: [
                {
                    text: "Start game",
                    nextLevel: "home",
                },
            ]
        },
        
        home: {
            message: "It's time to play video games! What do you want to snack on?",
            choices: [
                {
                    text: "Eat nothing.",
                    nextLevel: "starve",
                },

                {
                    text: "Cup noodles",
                    nextLevel: "manga",
                },
            ]
        },

        starve: {
            background_image: "black.jpg",
            message: "You starve to death",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "menu",
                },
            ]
        },

        manga: {
            message: "After making your cup noodles, you come across a stack of manga.",
            choices: [
                {
                    text: "Walk around.",
                    nextLevel: "safe",
                },
                {
                    text: "Walk over.",
                    nextLevel: "spill",
                },
            ]
        },
        
        safe: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You safely make it to your seat. You begin playing video games. You are on a different planet. Do you want to move your character to the right or left?",
            choices: [
                {
                    text: "Right",
                    nextLevel: "boss",
                },
                
                {
                    text: "Left",
                    nextLevel: "menu",
                },
            ]
        },
        
        spill: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "As you attempt to walk over the stack of manga, you trip, and the soup from your cup noodles spills all over your keyboard. Now you can't play games!",
            choices: [
                {
                    text: "Order a keyboard on Amazon.",
                    nextLevel: "happy",
                },
                
                {
                    text: "Go buy a keyboard outside.",
                    nextLevel: "vampire",
                },
                
            ]
        }, 
        
        happy: {
            background_image: "happy.jpg",
            music: "happy.mp3",
            message: "Your keyboard arrives the next day. You happily start playing video games.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "menu",
                },
            ]
        },
        
        vampire: {
            background_image: "black.jpg",
            message: "As soon as you step outside, you are overwhelmed by the sunlight. You perish. ",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "menu",
                },
            ]
        },
        
        boss: {
            background_image: "fire.gif",
            music: "tyrant.mp3",
            message: "You encounter a tyrant, a stronger version of a typical monster.",
            choices: [
                {
                    text: "Fight!",
                    nextLevel: "menu",
                },
            ]
        },

    }
};
