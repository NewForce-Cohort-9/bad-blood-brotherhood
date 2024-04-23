const cambodiaDatabase = {
    cities: [
        {
            id: 1,
            cityName: "Phnom Penh",
            cityImage: "PutImageHere",
            cityPopulation: "2,281,951",
            cityFounded: "5th Century"

        },{
            id: 2,
            name: "Siem Reap",
            cityImage: "PutImageHere",
            cityPopulation: "245,494",
            cityFounded: "802"

        },{
            id: 3,
            name: "Battambang",
            cityImage: "PutImageHere",
            cityPopulation: "119,251",
            cityFounded: "11th Century"



        },    
    ],
    landmarks: [
        {
        id: 1,
        landmarkName: "Angkor Wat",
        landmarkImage: "PutImageHere",
        landmarkFunFact: "Widely known as a location in Lara Croft: Tomb Raider"
        }, 
        {
         id: 2,
         landmarkName: "Tuol Sleng Genocide Museum",
        landmarkImage: "PutImageHere",
         landmarkFunFact: "See Kissinger's contribution to a dark time in Cambodian history"
         },
         {
         id: 3,
         landmarkName: "Royal Palace",
         landmarkImage: "PutImageHere",
         landmarkFunFact: "Cambodia's Royal Palace since 1866"
        },
    ],
    celebrities: [
        {
            id: 1,
            celebName: "Rithy Panh",
            celebImage: "PutImageHere",
            celebQuote: "I have only one life, and I can't do all. If I do one thing well, I'm happy.",
            celebKnownFor: "Rithy Panh is a Cambodian documentary film director and screenwriter",
        },
	{
            id: 2,
            celebName: "Norodom Sihamoni",
            celebImage: "PutImageHere",
            celebQuote: "I will devote my body and soul to the service of the people and the nation.",
            celebKnownFor: "Elected King of Cambodia",
        },
	{
            id: 3,
            celebName: "Yubin Shin",
            celebImage: "PutImageHere",
            celebQuote: "Every achievement I made is only a step to success. Success has no boundary.",
            celebKnownFor: "Well known actress",
        },
    ]
}

//put cambodia exports here
export const getCambodiaCities = () => {
    return cambodiaDatabase.cities.map(cities => ({...cities}))
}

export const getCambodiaLandmarks = () => {
    return cambodiaDatabase.landmarks.map(landmarks => ({...landmarks}))
}

export const getCambodiaCelebrities = () => {
    return cambodiaDatabase.celebrities.map(celebrities =>({...celebrities}))
}

//end exports

const greenlandDatabase = {
 cities: [
        {
            id: 1,
            cityName: "Nuuk",
            cityImage: "PutImageHere",
            cityPopulation: "19279",
            cityFounded: "1728"

        },{
            id: 2,
            name: "Sisimiut",
            cityImage: "PutImageHere",
            cityPopulation: "5620",
            cityFounded: "1756"

        },{
            id: 3,
            name: "Ilulissat",
            cityImage: "PutImageHere",
            cityPopulation: "4737",
            cityFounded: "1741"

        },
    ],
    landmarks: [
        {
        id: 1,
        landmarkName: "Name",
        landmarkImage: "PutImageHere",
        landmarkFunFact: "Wow, this fact sure is fun"
        }, 
        {
         id: 2,
         landmarkName: "Name",
        landmarkImage: "PutImageHere",
         landmarkFunFact: "Wow, this fact sure is fun"
         },
         {
         id: 3,
         landmarkName: "Name",
         landmarkImage: "PutImageHere",
         landmarkFunFact: "Wow, this fact sure is fun"
        },
    ],
    celebrities: [
        {
            id: 1,
            celebName: "NameOfCelebrity",
            celebImage: "PutImageHere",
            celebQuote: "How did I get here?",
            celebKnownFor: "Inventor of the Fork",
        },
    ]
}

//put greenland exports here

export const getGreenlandCities = () => {
    return greenlandDatabase.cities.map(cities => ({...cities}))
}

export const getGreenlandLandmarks = () => {
    return greenlandDatabase.landmarks.map(landmarks => ({...landmarks}))
}

export const getGreenlandCelebrities = () => {
    return greenlandDatabase.celebrities.map(celebrities =>({...celebrities}))
}



//end greenland exports

const steinDatabase = {
    cities: [
        {
            id: 1,
            cityName: "Vaduz",
            cityImage: '/scripts/stein/images/vaduz.jpg',
            cityPopulation: "5,197",
            cityFounded: "1st century AD"

        },{
            id: 2,
            name: "Schaan",
            cityImage: '/scripts/stein/images/schaan.jpg',
            cityPopulation: "5,748",
            cityFounded: "1st century AD"

        },{
            id: 3,
            name: "Triesen",
            cityImage: '/scripts/stein/images/triesen.jpg',
            cityPopulation: "4,701",
            cityFounded: "12th century"
        },
    ],
    landmarks: [
        {
            id: 1,
            landmarkName: "Kunstmuseum Liechtenstein",
            landmarkImage: '/scripts/stein/images/kunstmuseumLiechtenstein.jpg',
            landmarkFunFact: "Houses an impressive collection of contemporary and modern artworks, including pieces by renowned artists like Marc Chagall and Max Ernst."
        }, 
        {
            id: 2,
            landmarkName: "Vaduz Castle",
            landmarkImage: '/scripts/stein/images/vaduzCastle.jpg',
            landmarkFunFact: "Vaduz Castle is the official residence of the Prince of Liechtenstein and offers picturesque views of the surrounding area."
         },
         {
            id: 3,
            landmarkName: "Alte Rheinbrucke (Old Rhine Bridge)",
            landmarkImage: '/scripts/stein/images/alteRheinbrucke.jpg',
            landmarkFunFact: "Provides stunning views of Vaduz Castle from the Swiss side and is a charming spot to enjoy the scenic beauty of the region."
        },
    ],
    celebrities: [
        {
            id: 1,
            celebName: '"Stephanie Vogt"',
            celebImage: '/scripts/stein/images/stephanieVogt.jpg',
            celebQuote: "UUUUUUGH!!! (backhand power tennis shot)",
            celebKnownFor: "A professional tennis player. Won several singles and doubles titles on the International Tennis Federation (ITF) tour.",
        },
    ]
}

//put stein exports here

export const getSteinCities = () => {
    return steinDatabase.cities.map(cities => ({...cities}))
}

export const getSteinLandmarks = () => {
    return steinDatabase.landmarks.map(landmarks => ({...landmarks}))
}

export const getSteinCelebrities = () => {
    return steinDatabase.celebrities.map(celebrities =>({...celebrities}))
}






//end stein exports
const vietnamDatabase = {
    cities: [
        {
            id: 1,
            cityName: "Hanoi",
            cityImage: "PutImageHere",
            cityPopulation: "5,432,000",
            cityFounded: "257 BC"

        },{
            id: 2,
            name: "Cao Bang",
            cityImage: "PutImageHere",
            cityPopulation: "73,549",
            cityFounded: "Between 300 BC to 201 BC"

        },{
            id: 3,
            name: "Hue",
            cityImage: "PutImageHere",
            cityPopulation: "455,230",
            cityFounded: "1687"

        }, 
    ],
    landmarks: [
        {
        id: 1,
        landmarkName: "Ban Gioc Waterfall",
        landmarkImage: "PutImageHere",
        landmarkFunFact: "It's the fourth-largest waterfall in the world along a national border, after Niagara, Victoria, and Iguazu Falls"
        }, 
        {
         id: 2,
         landmarkName: "Son Doong Cave",
        landmarkImage: "PutImageHere",
         landmarkFunFact: "Largest Natural Cave on the planet"
         },
         {
         id: 3,
         landmarkName: "Cu Chi Tunnel",
         landmarkImage: "PutImageHere",
         landmarkFunFact: "These tunnels can now be explored by tourists. Whether that be crawling through the safe areas, firing an AK-47 on the grounds, or sampling the typical foods that soldiers ate at the time the tunnels were used."
        },
    ],
    celebrities: [
        {
            id: 1,
            celebName: "Phan Thị Mỹ Tâm",
            celebImage: "PutImageHere",
            celebQuote: "Don’t let them break you",
            celebKnownFor: "Being one of the most successful Vietnamese singers for two decades",
        },{
            id: 2,
            celebName: "Hương Giang",
            celebImage: "PutImageHere",
            celebQuote: "Where there’s a will, there’s a way”—” This is true for you, for me, for everyone",
            celebKnownFor: "Being the first Vietnamese representative to participate in Miss International Transgender in Thailand",
        },{
            id: 3,
            celebName: "Linh Ngọc Đàm",
            celebImage: "PutImageHere",
            celebQuote: "She's got oceans tucked away in her hair, poems swim under her skin",
            celebKnownFor: "Being a famous game streamer, YouTuber, and model",
        },
    ]
}

export const getVietnamCities = () => {
    return vietnamDatabase.cities.map(cities => ({...cities}))
}

export const getVietnamLandmarks = () => {
    return vietnamDatabase.landmarks.map(landmarks => ({...landmarks}))
}

export const getVietnamCelebrities = () => {
    return vietnamDatabase.celebrities.map(celebrities =>({...celebrities}))
}
