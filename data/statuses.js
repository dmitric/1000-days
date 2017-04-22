const statuses = [
	{
		status: "I'm Dmitri Cherniak. This is a project highlighting things I posted to social media about San Francisco while living there for 1,000 days.",
		date: new Date(2016, 9, 1)
	},
	{
		status: "Some people boo bad guys when they watch movies, I just boo establishing shots of San Francisco.",
		date: new Date(2016, 8, 30)
	},
	{
		status: "At least after the next big earthquake there will be lots of sick new places to go bouldering in SF.",
		date: new Date(2016, 8 ,20)
	},
	{
		status: "The activities that shape the culture in San Francisco require you to leave the city all together in order to partake in them.",
		date: new Date(2016, 8, 20)
	},
	{
		status: "The only real Giant in San Francisco is financial disparity",
		date: new Date(2016, 8, 12)
	},
	{
		status: "I think the lack of seasonal weather + temperature fluctuations is what draws so many sociopaths to the Bay Area.",
		date: new Date(2016, 8, 10)
	},
	{
		status: "[A picture of shelf with two kinds of flour, one white and labeled as white flour, and one dark labeled as minority flour]\n" + 
			"Why San Francisco is the worst place on earth: Exhibit A.",
		date: new Date(2016, 7, 20)
	},
	{
		status: "Finally, a wealthy role model has emerged from Silicon Valley that deserves some actual respect — Colin Kaepernick.",
		date: new Date(2016, 7, 30)
	},
	{
		status: "Gangsters don't die, they get corporate, and move to Silicon Valley.",
		date: new Date(2016, 7, 23)
	},
	{
		status: "San Francisco might be okay in ~350 years",
		date: new Date(2016, 7, 3)
	},
	{
		status : "Yesterday someone in San Francisco called a pizza box a “junk food” box and then complained that it had been left in the recycling. This city has absolutely no hope.",
		date : new Date(2016, 6, 25)
	},
	{
		status: "Pokemon Go + Homelessness in SF + Tech workers = Page views for one of those viral content companies",
		date: new Date(2016, 6, 10)
	},
	{
		status: "Pokemon Go in San Francisco is just like it is in real life — full of Zubats.",
		date: new Date(2016, 6, 10)
	},
	{
		status: "It's really nice to see all these folks in San Francisco talking about how a bill in New York is going to ruin the city and how clueless + backwards it is. Especially since, you know, San Francisco is such a great city ;)",
		date: new Date(2016, 5, 17)
	},
	{
		status: "Mac OS San Fran",
		date: new Date(2016, 5, 13)
	},
	{
		status: "My actual worst nightmare: Waiting hours in line to watch a Quentin Tarantino movie about eating seafood in San Francisco, and it's scored by Dave Matthews Band.",
		date: new Date(2016, 5, 9)
	},
	{
		status: "Ugh, I hate “San Fran” so much!",
		date: new Date(2016, 4, 30)
	},
	{
		status: "San Francisco is the Donald Trump of cities",
		date: new Date(2016, 2, 24)
	},
	{
		status: "I bet there are more people on the streets of New York despite the blizzard than there are in “San Fran”",
		date: new Date(2016, 0, 23)
	},
	{
		status: "Here's an idea for a project at the intersection of art and technology that is perfect for “San Fran”:\n"+
						"1) Use deep machine learning to imitate the works of a local artist. [Continued...]",
		date: new Date(2015, 11, 27)
	},
	{
		status:  "2) Use feedback from the likes you get by posting those works on social networks, and iterate to the point that the AI's work gets more likes than the original artist. [Continued...]",
		date: new Date(2015, 11, 27)
	},
	{
		status:  "3) Integrate a module into that program to automate the production of eviction notices. [Continued...]",
		date: new Date(2015, 11, 27)
	},
	{
		status:  "4) Use the program to help the original artist's landlord evict the artist. [Continued...]",
		date: new Date(2015, 11, 27)
	},
	{
		status:  "5) Use the money you're making from the sales of the AI's work to rent the evicted artists space at 2x the rent and just put a single computer running the algorithm in it's place. [Continued...]",
		date: new Date(2015, 11, 27)
	},
	{
		status:  "6) Repeat the process until you've created an army of AI artist robots that are more beloved than the original artists. [END]",
		date: new Date(2015, 11, 27)
	},
	{
		status: "Tried to order a Chicken Parm in San Francisco and they asked me what kind of cheese I wanted on it...",
		date: new Date(2015, 11, 24)
	},
	{
		status: "[Traveling from SFO to NYC]\nI went to the International Terminal because I'm pretty sure NYC is in an entirely different country.",
		date: new Date(2015, 11, 17)
	},
	{
		status: "In 10 years they are going to make the Silicon Valley version of the film “Boiler Room” and they better call it “Nerd Aquarium”.",
		date: new Date(2015, 11, 10)
	},
	{
		status: "[Link to an article with title “Hillary Clinton Urges Silicon Valley to 'Disrupt' ISIS”]\n"+
							"“Silicon Valley Startup raises $10M Series A to disrupt ISIS”",
		date: new Date(2015, 11, 7)
	},
	{
		status: "Shutting down Alcatraz makes perfect sense once you realize that the Bay Area is the maximum security prison of one's own mind.",
		date: new Date(2015, 10, 12)
	},
	{
		status: "I hate when people don't call it San Fran. San Fran is the proper way to say it!",
		date: new Date(2015, 10, 12)
	},
	{
		status: "Somehow Silicon Valley gets away with gender discrimination, racial discrimination and age discrimination; but if someone were to discriminate against “burners” shit would hit the fucking fan.",
		date: new Date(2015, 10, 3)
	},
	{
		status: "Cheers to San Francisco, which is — without a doubt — the worst city I have or will ever live in.",
		date: new Date(2015, 8, 18)
	},
	{
		status: "There is no correlation between good and popular in the Bay Area.",
		date: new Date(2015, 8, 15)
	},
	{
		status: "[Traveling from SFO to NYC]\nLiterally the happiest day of my life.",
		date: new Date(2015, 8, 15)
	},
	{
		status: "Dear Magic 8-ball, who is the ghetto fabulous Kurt Cobain of Silicon Valley?",
		date: new Date(2015, 6, 3)
	},
	{
		status: "Does a regular curtain become a shower curtain if one hangs it inside of a shower? Does a shower curtain become a regular curtain if one hangs it outside of a shower? These are the kinds of questions Silicon Valley should be addressing!",
		date: new Date(2015, 5, 27)
	},
	{
		status: "Maybe capsule hotels would solve the San Francisco housing crisis?",
		date: new Date(2015, 5, 24)
	},
	{
		status: "San Fransucksco, 'Sans' Francisco, Worst Francisco... It's all the same to me.",
		date: new Date(2015, 5, 4)
	},
	{
		status: "San Francisco has ruined me.",
		date: new Date(2015, 4, 23)
	},
	{
		status: "It's actually impossible to make new memories in the Bay Area because there's nothing to do besides working out and all the blood from your hippocampus goes to your muscles.",
		date: new Date(2015, 4, 20)
	},
	{
		status: "Just watched the movie “The Game” and it's exactly what living in San Francisco is like.",
		date: new Date(2015, 3, 8)
	},
	{
		status: "Daly City is the worst. Don't ever walk there.",
		date: new Date(2015, 2, 21)
	},
	{
		status: "[A google maps screenshot on Clement St in the Inner Richmond]\nThis part of San Francisco isn't horrible. Note: that's a compliment.",
		date: new Date(2015, 2, 15)
	},
	{
		status: "When I wake up early in San Francisco and can't go back to sleep I read the wikipedia entry for New York City and sigh lustfully.",
		date: new Date(2015, 1, 11)
	},
	{
		status: "[A picture of a champagne bottle with 3 used hypodermic needles]\n"+
						"“Nothing says San Francisco like a champagne bottle full of used needles.”\n"+
						"Dom Perignon none the less.",
		date: new Date(2014, 12, 28)
	},
	{
		status: "Elon Musk has done a lot of great things, but personally I think the smartest thing he's ever done is move from the Bay Area to LA.",
		date: new Date(2014, 12, 26)
	},
	{
		status: "First time “going out” to an event in the Bay Area and the gender disparity is closing in on 10:1 male to female.",
		date: new Date(2014, 11, 14)
	},
	{
		status: "Please refer to San Francisco as “The West Bay” from now on. It's what it deserves.",
		date: new Date(2014, 12, 6)
	},
	{
		status: "[A pitch black panoramic photo, with a few tiny dots from street lights]\nSan Francisco at 5:40pm",
		date: new Date(2014, 11, 9)
	},
	{
		status: "If startups are the equivalent of Silicon Valley rock bands, I'm pretty pumped for the first big posthumous launch.",
		date: new Date(2014, 10, 23)
	},
	{
		status: "All of the natural beauty in the Bay Area is handily put to shame by one or two seats in a subway car, on a Monday night, in New York.",
		date: new Date(2014, 10, 10)
	}
];

export default statuses;