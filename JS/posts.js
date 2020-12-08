var post = [
    {
        postNumber: 6,

        title: "Bitcoin For People Who Don't Give A Shit",

        content: [
            ["What is bitcoin"],
            
            ["According to the creator, bitcoin is “peer to peer electronic cash.” There’s a lot of meaning in those five words, so let’s break it down."],
            
            ["Peer to peer:"],
            
           ["Bitcoin is peer to peer. This is how bitcoin is organized and the rules are decided on. With a currency like the Dollar, there is a 3rd party called the Federal Reserve who is in charge of how many Dollars there are, how they are secured, the rate that they are produced & lent, and much more. Bitcoin is not like that at all."],
            
            ["Put simply, Bitcoin exists because people use it. Imagine an excel spreadsheet of transactions that you share with a billion people in the cloud. You can edit the spreadsheet (make a transaction), but only if the majority of people think that the new transaction is following the rules. If it does, the edit is accepted, if not it is rejected."],
           
            ["If a new feature comes out, or if someone wants to change the rules for how transactions are accepted by the network, anyone can make a change to their copy of Bitcoin, but it only becomes a change for everyone if the majority of users accept the change and use it for their copy of Bitcoin too."],
            
            ["It’s very similar to voting on a law. But instead of having police enforce the new rule, enforcement is based on usage. If you use a new feature or stick with the old version of Bitcoin, that is your vote for how the network should work."],
            
            ["Electronic:"],
            
            ["Bitcoin is electronic cash. There is no physical thing it is tied to, it is not pegged to the value of gold, and you are not buying shares in a company. What gives it value is that it is used, and that it is secure (it cannot be counterfeited and transactions cannot be undone)."],
            
            ["Cash:"],
            
            ["Bitcoin is cash. Bitcoin is not a share, stock, check, or IOU. It is used the same way that you use paper money. If you’re selling pizzas and I give you a $20 bill, maybe you check for the watermark, or use an anti counterfeit marker to check that it is real, but once you’re convinced that the bill is real, you give me the pizza. Physical possession allows you to use bitcoin."],
            
            ["With Bitcoin, ownership is irrelevant for usage in the same way it is for paper money. As a legal matter, obviously there can be consequences for theft, just like with paper money. But as a matter of security, treat your Bitcoin wallet the same way you would treat your normal wallet. If you lose it, it’s possible you might not get it back. If someone steals it, it’s possible that you won’t get it back."],
            
            ["Bitcoin can be very safe to use. And it can also be very unsafe to use. This is not a dedicated article on security, but a few good rules of thumb are:"],
            
            ["Be aware of general online safety. If you would’t trust the internet connection or website to enter in your banking details or credit card info, don’t use it for Bitcoin either."],
            
            ["Don’t send Bitcoin to people you’ve never met or before you’ve received a good/service."],
            
            [`There are many ways to keep bitcoin safe. If you don’t know what you’re doing, a custodial exchange is a good place to start. A service like Coinbase is basically a Bitcoin bank and your deposits are FDIC insured.`],
            
            ["If you are more advanced and want to embrace the crypto ethos of 'be your own bank' using a hardware wallet like a Trezor or Ledger is a great place to start. These devices make all the secret keys on the device itself so the sensitive info is never on the internet."],
            
            ["How they interplay"],
            
            ["Bitcoin is a financial system where the rules are decided democratically, that is completely digital, that should be used like paper money. Peer to peer electronic cash."],
            
            ["Where does it come from"],
            
            ["Bitcoin is created very much like how gold is mined. If you want some gold, there’s 3 ways you could get it."],
            
            ["For most people, the easiest way is to buy it. You’d figure out the kind of gold you’d like—physical bullion, jewelry, or paper gold—and go to whoever sells the kind you’re looking for and purchase it."],
            
            ["For Bitcoin, there are all sorts of sellers. Which one you go it is decided by why you are buying. There are all sorts of financial instruments for investors. Hedge funds for people who want some exposure. Places where you can buy tiny amounts. Places where you can buy huge amounts."],
            
            ["The second way is to work for it. Bitcoin’s primary purpose is to be a medium of exchange. And if you are a creator or employer—much like how there is no reason why you couldn’t accept gold as payment—you can accept Bitcoin for payment too. You can obviously use Bitcoin to transact directly, but there are all sorts of services, like BitPay, that allow merchants to accept Bitcoin  and have it converted to Dollars, which is a great way to attract new kinds of customers without having to expose your business to the price volatility of Bitcoin."],
            
            ["The last way to get Bitcoin is to mine it. Much like how mining gold requires specialized hardware and has a ton of competing miners, Bitcoin uses specialized equipment to mine it too. Whether this is a way you’d be interested in using to obtain Bitcoin depends on things like the price of electricity in your region and the scale at which you’d like to do it."],
            
            ["Small scale mining is pretty much dead for Bitcoin. Other cryptocurrencies like Ethereum and Monero can definitely be mined with graphics cards and cpu’s on consumer grade computers. Don't expect to make a ton of money, but it can be a fun hobby that gets your computer to pay for its own upgrades."],
            
            ["Bitcoin mining uses ASIC’s (application specific integrated circuits), which are basically computers that are really good at mining Bitcoin, but bad at everything else a computer does. They can cost thousands of dollars, take weeks to arrive from China, and when the new model comes out, are paperweights."],
            
            ["For large scale operations, talk directly to a manufacturer of ASICs like Bitamain. That’s beyond the scope of this article and if you’re considering starting a mining farm you’re probably more advanced than this guide anyway."],
            
            ["How does it work"],
            
            ["Bitcoin is a network of computers. When you make a transaction, someone’s computer is working to validate and broadcast the transaction to everyone else in the network. Having a lot of people do this is what keeps the network secure because the more people making sure that transactions are valid, the harder it is to cheat."],
            
            ["Doing this takes up a lot of space and uses a lot of electricity. So, to make sure there are a lot of miners, they are paid two ways. The person making the transaction is charged a fee. This is sort of like how a bank charges a fee to do a wire transfer, Venmo charges a few dollars to make withdrawals, or how credit cards charge merchants a few percent every transaction."],
            
            ["The other way miners are paid, is called a “block reward.” When a new batch of transactions are broadcast to the network (about every 10 minutes), some new Bitcoins are created in the process and given to the miner who broadcasts them first. It’s like a lottery."],
            
            ["This is like how if you went digging for gold, it’s pretty random because you don’t know exactly where it is. But, you can increase the odds of finding gold by hiring a lot of people to dig for you."],
            
            ["Bitcoin miners usually have many computers working together to increase their luck. Because it is a winner take all system, many smaller miners team up in what is called a “mining pool” to work with each other. When one of them is successful, they all split the reward."],
            
            ["The block reward was originally 50 Bitcoins. Every 210,000 blocks (roughly 4 years of transactions), the reward is cut in half. At the time of writing it is 12.5 Bitcoin and is estimated to be 0 in the year 2140. This means that there will never be more than 21 million Bitcoins."],
            
            ["Why is it secure"],
            
            ["There are many dry, mathematical reasons why Bitcoin is secure, but the most important thing to know about is something called “proof of work.”"],
            
            ["When you mine Bitcoin, your computer is doing some complex math to prove that what you are doing is following the rules. Think of a Rubik’s cube. It takes a long time to solve one, but seconds to mess it up into a unique pattern. The work that is done for each Bitcoin transaction is a lot like this. Computers spends about ten minutes trying to find the correct number (solve the Rubik’s cube), and when one of the computers gets the correct solution the one who solved it gets the Block Reward and they start working on the next one (the Rubik’s cube gets randomly shuffled again)."],
            
            ["This is called “proof of work.” The key thing to remember is that to make more Bitcoins, you always have to do this each time, which takes time and electricity."],
            
           [ "In theory, someone with 51% of the computer power of the Bitcoin network could rewrite the history of transactions to give themselves as many Bitcoins as they wanted. But this is never going to happen because of the time and electricity cost of mining."],
            
            ["If I wanted to rewrite the most recent transaction, I would have to rewrite that transaction, the current transaction, and the next few transactions to get ahead of the 49% honest miners. It might take an hour to rewrite the previous 10 minutes. I would be redoing work that had already been done and using electricity without making any money until I got ahead. If I wanted to rewrite a transaction from yesterday, it could take a week. A transaction from last week, a month. A transaction from last year, a decade. All without making a profit until I was in the lead, and all in public where everyone can see."],
            
            ["It is more profitable for Bitcoin miners to play by the rules than to cheat. Because even if someone had the computer power to highjack the network and the money to sustain an attack for weeks or months, people would abandon the network. No one would use Bitcoin if one person had the ability to undo any transaction and give themselves as many as they wanted. Their stolen Bitcoins would be worthless."],
            
            ["Why should I care"],
            
            ["If you live in the west, you don’t really need Bitcoin. You have access to global finance, live in a country with a relatively stable, uncorrupt government, with robust legal systems, and use currencies with relatively low levels of inflations."],
            
            ["However, this is not the case for everyone globally. This is not an exhaustive critique of banking, but some of the biggest problems with western banking is that it relies on having an uncorrupt, stable government, robust legal systems, and low levels of inflation."],
            
            ["We can do accounting in Dollars or Euros because the value of these currencies are relatively stable. We could have a decade long lease, and while there is some amount of inflation, it is small and predictable. You could charge me $1000 + 2%/year as a monthly rent and be pretty certain that in a decade the amount of purchasing power will be about the same."],
            
            ["If for some reason I break our agreement and stop paying, you have access to a legal system that—despite it’s many, many faults—at it’s core is designed to protect the rights of the individual and works for most people most of the time. In spite of all its expense, slowness, and bias, if I break a legal contract you can be confident that there will be consequences."],
            
            ["And if you’re not breaking a law, you can rest easy knowing that the government is not going to confiscate your deposits and you have insurance to protect you even if your bank fails. You can transact with anyone you wish, for any legal reason you wish, with no thought of the government or any third party for that matter. If you want to invest, you can do it in any foreign market. And if at the end of the day you want to start fresh in a new country, you can take your money with you."],
            
            ["This isn’t a defence of western banking; this is merely to say for all of its flaws—of which there are many—westerners have no need for Bitcoin. For most westerners it is another kind of exotic investment. People who actually use Bitcoin in the west are probably ideologically motivated, because it is a slow, expensive system, that you have to go out of your way to use, that opens you up to all kinds of fraud."],
            
            ["But there are places in this world where the government is corrupt. There are places in this world where the legal system is designed to protect those in power. There are places in this world where the currency has wild, unpredictable inflation."],
            
            ["There are places where you cannot easily invest outside of your own country. There are places where it is illegal to leave the country with your lifesavings, so, being persecuted, people have no choice but to abandon everything that they own to be able to make it through a checkpoint. There are entire classes of people that it is illegal for them to own property."],

            ["It is for these people, in these places, for whom Bitcoin was created. If you can memorize 12 words, there is no border that can stop you from crossing it with your money. There is no law that can prevent you from owning it, or tell you who you can or cannot trade with. And while prices do swing drastically with the market, there is never going to be more than 21 million Bitcoins; after all, there are people in places where losing 50% of their banks value overnight would be a breath of fresh air."],
            
            ["Bitcoin is peer to peer electronic cash."],
        ]
    },
    {
        postNumber: 5,

        title: "Humans Are The Weakest Link",

        content: [
            ["I watched a lecture on cryptography the other day. Not realizing just how big of a number 2^256 is, I decided surely it can’t be that hard to make a program to solve for any random number between 0 and 115, 792, 089, 237, 316, 195, 423, 570, 985, 008, 687, 907, 853, 269, 984, 665, 640, 564, 039, 457, 584, 007, 913, 129, 639, 936. (This is what we call foreshadowing.)"],
            
            ["Now, in all fairness, it is actually very simple to make a program to do that(https://github.com/Mark-DeLong/Passcode-Guesser).  This is 20 odd lines of C including brackets and whitespace."],
            
            ["The problem is, of course, that 2^256 is a stupidly huge number. Solving for every possible combination would take until the heat death of the universe, so even if you assume the average solve happens somewhere around the 50% mark, that still leaves billions of years to wait for an answer."],
            
            ["Even still, assuming someone who was actually good at math was doing this instead of myself who cannot add his way out of a paper bag, it is much easier to create a new cryptographic algorithm than it is to break it."],
            
            ["This finally gets us to optimization and the weakest link in any secure system: us humans. You may have noticed that my program doesn’t solve for 2^256 combinations, it solves for 55 trillion (~2^45.65 ). This is because while encryption uses obscenely large, fairly random numbers to protect data, systems are often protected by much less secure passcodes."],
            
            ["A standard American keyboard has about 92 unique keys. A-Z, a-z, 0-9, and a variety of special characters. So if instead of trying to solve a 256 digit passcode in binary, we instead try to solve a 7 digit passcode in base 92, we have ~55 trillion total possible combinations in base 10."],
            
            ["I did not make a custom dictionary for this program by design since I’m not trying to help people break into their ex lover’s Facebook. So basically, instead of passing through all 92 characters for 7 digits, it passes through 14 digits with 0-9 instead. The time it takes to solve is roughly the same, but the output is essentially worthless for anything other than learning purposes."],
            
            ["And all in all, the solve time is shockingly quick. With absolutely no optimization, it takes my shitty laptop 48 hours to attempt all possible combinations. But we’re not dealing with robots, we’re dealing with people, and people tend to act in predictable unrandom ways."],
            
            ["92^7 is all possible combinations, but how likely is someone to make their password “AAAAAAA”? In a true random system this is acceptable, but in a human system, this would never happen. Most people would only have 2 repeating digits in a row. So 92^7 becomes (92^2) * (91^2)*(90^2)*89, or reduction of 10%."],
            
            ["But that is just the tip of the iceberg. Of all the characters, some are almost certainly never used. Of “+_)(*&^%$#@!~`{}|[]\;’:”,./<>?”, some are certainly used since many websites require a special character, but how many are likely used? If we remove the characters “~`#$%^&*()_+-=[]\{}|;’:”,./<>” from the check, we reduce from 92 to characters to 63."],
            
            ["This brings us down to 3.9 trillion total combinations, or 3.4 trillion with a sequential character limit of 2, dropping the solve time down to 3.5-4 hours to check all possible combos."],

            ["Is this a practical thing to do? No. But the point is to illustrate that we are the weakest link in our own security. If you’re just a dumb human like me, stop thinking that your unique password that you’ve been reusing for a decade is anything but a liability."],
            
            ["With 20 lines of code I could brute force any human likely password in a few hours. This is a reduction in security to 0.000000000000000000000000000000000000000 00000000000000000000000000002590850566528333% of what modern encryption offers."],
            
            ["So for the love of god, start using a password manager like lastpass that automatically generates long, unique passwords and syncs them across all your devices. This isn’t even as optimized as I could make it. This program just starts at zero and counts up, but I could easily reduce the solve time by another 99% by giving preference to characters over numbers and symbols, and starting with a dictionary of the most common human words and names."],
        ]
    },
    {
        postNumber: 4,

        title: "An Alternative To Our Impending WALL-E Future",

        content: [
            ["There is not such thing as the past or future. There is only the present. What we call past and future are a series of presents strung together."],
            
            ["It is often said, by people who have not studied history, that it repeats. This could not be further from the truth. Consider what would happen if you went to the fridge, took out an egg, and dropped it on the floor. Now consider what would happen if you took out a second egg and dropped it on the floor too. What happened when you dropped the first egg had no effect on what happened when you dropped the second."],
            
            ["Likewise, people say that they did some thing because of some other thing that came before, this is untrue in the same way that it would be untrue to say that dropping the first egg caused you to drop the second. In short, we think our previous presents causally effect our current present, when in reality the second egg broke because we chose to drop it—only drawing the connection to the first egg as a justification after the fact. We do what we want to do, then make up our reasons later."],
            
            ["When it comes to technology, we are rapidly approaching a WALL-E future. Apps are designed to be as addictive as possible with as little content provided as possible. They’re skinner boxes designed to highjack our brain’s ancient reward structure for profit. They use variable reward structures to literally addict us. They are often free because our data is stripped to sell to the highest bidder. They claim to be for promoting connection, when they really create conflict. What garners the most attention? Conflict, violence, antagonization. It is no wonder that despite the world never being safer statistically, when asked people describe it as much more dangerous than the past."],
            
            ["It’s not hard to figure out the end stage of this. What happens with any addiction, left untreated, is dependance. Being dependent is not in itself a bad thing. We depend on our friends, family, and loved ones, which is healthy. But it becomes harmful when the goals of the dependent and the dependee are not the same."],
            
            ["When I fill my car with gasoline, my goal is to convert my money into fuel and the goal of Exxon is to convert their fuel into money. The only misalignment is that I want to get as much fuel for as little money and they want as much money for as little fuel, which is more or less solved through competition and regulation. All things considered, this is a symbiotic relationship. I get fuel because I want fuel more than money, and they get money because they want money more than fuel."],
            
            ["Where this relationship becomes perverse is when our goals are not the same. Take for instance online dating. My goal is to find a partner and the company’s goal is to maximize profitability for shareholders. A dating app could actually lose money by if they match people together too well."],
            
            ["If I designed an app that you put all your information into and it found your perfect lover on the first try, I would lose money compared to if I instead designed my app to sprinkle enough almost matches so that you would go on dates, and perhaps have a relationship for some months, but it would almost certainly end because you were matched with the wrong person. I would make sure to divvy out the matches at random, unpredictable intervals, to get you addicted in the same way slot machines work, and finally I would try to sell you a premium subscription that would of course improve the number of dates you had, but since I want you to be subscribed forever, the dates never will be too good."],
            
           ["Let me be clear. I’m not against making money. I want to make a ton of it. I want to have so much money I start throwing it away because it’s taking up too much space. But if it cannot be done in a beneficent way, I firmly believe that it should not be done. Your wallet is a reflection of your values. If you earn your money through war, do not expect it to bring you peace."],
            
            ["So, while the problem is complex, the solution is simple. This is how we avoid the WALL-E future that anyone with eyes can see coming: Design products in a way that if the consumer had the same expert knowledge that you have, they would use your product gladly, and charge them for it. If you don’t want to break any more eggs, stop dropping them on the ground."]
        ]
    },
    {
        postNumber: 3,

        title: "JavaScript Classes",

        content: [
            ["JavaScript has been kicking my ass lately, but in a good way. I have been learning to manipulate data. It’s still in the abstract phase now. However, I can confidently manipulate all sorts of data in arrays and objects, create classes and sub/pseudo classes."],
            
            ["The key for me has been realizing that whenever you are referencing existing data, you aren’t copying the data into the new function. The computer is going back to that section of the code and running it there in that context."],
            
            ["For example:"],
            
            [`Class thisClass {`],
            [`function thisThing(doThing) {`],
            [`this.thing = doThing`],
            [`}`],
            [`}`],
            
            [`Class newClass extends thisClass {`],
            [`super.thisThing`],
            [`}`],
            
            ["The code “super.thisThing,” isn’t copying the function from the parent class to child class. It is actually going back and running the code within the parent class. This means that the code actually gets to use all the methods of the class too."],
            
            ["I’m not sure if I’m belaboring the obvious, but for me once I realized that was happening under the hood the flow of the language started to click."]
        ]
    },
    {
        postNumber: 2,
        
        title: "JavaScript",

        content: [
        
        ["I have spent the last week learning the basics of JavaScript. It's been difficult to get into the flow of it."],
            
        ["My background is in python. It has its drawbacks (what doesn't?) but it's flow is very intuitive. You tell the computer do this, then that. It's essentially a flowchart."],
            
        ["JavaScript is different. The focus is on creating objects, then having the objects do things. The benefit is obvious for large data sets."],
          
        ["Eventually I'll be able to automate large portions of this blog like making posts and having the data pushed into a predefined format. There is more to come, but for now I must master the basics."]
        ]
    },
    {
    postNumber: 1,

    title: "Hello World",
    
    content: [
    
        ["Welcome to my blog. I've been messing around for years with programming - html/css, java, and python mostly. But now I want to get serious. It is a fun hobby, but I want to actually get good enough to get work doing it."],
                
        ["I updated the color scheme from a generic place holder to white on blue on red. It's gaudy as all hell, but its mine and I like it."],
        
        ["I feel like I understand web development technically, but so much of this is design oriented. I have a very functional mindset, so this will be hard for me. 'Does it work?' has been my driving question, but now I must ask myself 'Does it also look attractive?'"],
        
        ["I definitly need to study up on some color theory. But look at those damn navigation buttons! They pop up and just barely kiss! I used 'transition: transform' and 'transition: scale' to get it so they pop up super fast and gently fall back down."],
        
        ["The tree of life image I used for the logo is just a stock image now. In the future I'll put something more topical or at least crop out the borders."],
        
        ["I decided to use netlify for hosting because its free and you can just push changes to github and they automatically get updated. It's super cool and I'd highly recommend it. Perhaps in the future I'll get a custom domain and learn how to host it myself if this ever get's enough traffic to warrant that, but for now free is the name of the game, and it just works."],
        
        ["I'm gonna start learning javascrip soon. I'm pretty excited because you can create much more powerful websites compared to html/css. So look forward to that! I'm not sure what I'll do with it, but I'm sure I'll figure something out."],
        
        ["Edit: I updated the color scheme to be a slightly less hideous white on black on red."]
        ]
    }
]