const cambodiaDatabase = {
    cities: [
        {
            id: 1,
            cityName: "Phnom Penh",
            cityImage: '/scripts/cambodia/images/Phnom_Penh.jpg',
            cityPopulation: "2,281,951",
            cityFounded: "5th Century"

        },{
            id: 2,
            cityName: "Siem Reap",
            cityImage: '/scripts/cambodia/images/Siem_Reap.jpg',
            cityPopulation: "245,494",
            cityFounded: "802"

        },{
            id: 3,
            cityName: "Battambang",
            cityImage: '/scripts/cambodia/images/Battambang.JPG',
            cityPopulation: "119,251",
            cityFounded: "11th Century"



        },    
    ],
    landmarks: [
        {
        id: 1,
        landmarkName: "Angkor Wat",
        landmarkImage: '/scripts/cambodia/images/Angkor_Wat.jpg',
        landmarkFunFact: "Widely known as a location in Lara Croft: Tomb Raider"
        }, 
        {
         id: 2,
         landmarkName: "Tuol Sleng Genocide Museum",
        landmarkImage: '/scripts/cambodia/images/Tuol_Sleng.jpg',
         landmarkFunFact: "See Kissinger's contribution to a dark time in Cambodian history"
         },
         {
         id: 3,
         landmarkName: "Royal Palace",
         landmarkImage: '/scripts/cambodia/images/Royal_Palace_Phnom_Penh.jpg',
         landmarkFunFact: "Cambodia's Royal Palace since 1866"
        },
    ],
    celebrities: [
        {
            id: 1,
            celebName: "Rithy Panh",
            celebImage: '/scripts/cambodia/images/Rithy_Panh.jpg',
            celebQuote: "I have only one life, and I can't do all. If I do one thing well, I'm happy.",
            celebKnownFor: "Rithy Panh is a Cambodian documentary film director and screenwriter",
        },
	{
            id: 2,
            celebName: "Norodom Sihamoni",
            celebImage: '/scripts/cambodia/images/Norodom_Sihamoni.jpg',
            celebQuote: "I will devote my body and soul to the service of the people and the nation.",
            celebKnownFor: "Elected King of Cambodia",
        },
	{
            id: 3,
            celebName: "Yubin Shin",
            celebImage: '/scripts/cambodia/images/Yubin_Shin.jpg',
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
            cityImage: 'scripts/greenland/images/nuuk-image.jpg',
            cityPopulation: "19279",
            cityFounded: "1728"

        },{
            id: 2,
            cityName: "Sisimiut",
            cityImage: 'scripts/greenland/images/sisimiut-image.jpg',
            cityPopulation: "5620",
            cityFounded: "1756"

        },{
            id: 3,
            cityName: "Ilulissat",
            cityImage: 'scripts/greenland/images/ilulissat-image.jpg',
            cityPopulation: "4737",
            cityFounded: "1741"

        },
    ],
    landmarks: [
        {
        id: 1,
        landmarkName: "Brattahlíð",
        landmarkImage: 'scripts/greenland/images/bratt-image.jpg',
        landmarkFunFact: "Former home of Erik the Red"
        }, 
        {
         id: 2,
         landmarkName: "Hvalsey Church",
        landmarkImage: 'scripts/greenland/images/hvalsey-image.jpg',
         landmarkFunFact: "Last known Viking presence in Greenland"
         },
         {
         id: 3,
         landmarkName: "Etah",
         landmarkImage: 'scripts/greenland/images/etah-image.jpg',
         landmarkFunFact: "Beautiful land and former staging site for North Pole expeditions"
        },
    ],
    celebrities: [
        {
            id: 1,
            celebName: "Maliina Abelsen",
            celebImage: 'scripts/greenland/images/maliina-image.jpg',
            celebQuote: "It does not matter what one says here, few will bother looking it up anyway.",
            celebKnownFor: "Minister of Finance",
        },{
            id: 2,
            celebName: "Rasmus Lyberth",
            celebImage: 'scripts/greenland/images/rasmus-image.jpg',
            celebQuote: "Getting bored is much more pleasant than getting harmed",
            celebKnownFor: "Musician and actor",
        },{
            id: 3,
            celebName: "Nukâka Coster-Waldau",
            celebImage: 'scripts/greenland/images/nukaka-image.jpg',
            celebQuote: "The key to living profoundly is found in vague instructions about living your best life. That's what I do.",
            celebKnownFor: "Singer and actress",
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
            cityName: "Schaan",
            cityImage: '/scripts/stein/images/schaan.jpg',
            cityPopulation: "5,748",
            cityFounded: "1st century AD"

        },{
            id: 3,
            cityName: "Triesen",
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
            celebName: "Stephanie Vogt",
            celebImage: '/scripts/stein/images/stephanieVogt.jpg',
            celebQuote: "UUUUUUGH!!! (backhand power tennis shot)",
            celebKnownFor: "Being a professional tennis player. Won several singles and doubles titles on the International Tennis Federation (ITF) tour.",
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
            cityImage: '/scripts/vietnam/images/hanoi.webp',
            cityPopulation: "5,432,000",
            cityFounded: "257 BC"

        },{
            id: 2,
            cityName: "Cao Bang",
            cityImage: '/scripts/vietnam/images/bang.webp',
            cityPopulation: "73,549",
            cityFounded: "Between 300 BC to 201 BC"

        },{
            id: 3,
            cityName: "Hue",
            cityImage: '/scripts/vietnam/images/hue.jpg',
            cityPopulation: "455,230",
            cityFounded: "1687"

        }, 
    ],
    landmarks: [
        {
        id: 1,
        landmarkName: "Ban Gioc Waterfall",
        landmarkImage: '/scripts/vietnam/images/waterfall.jpg',
        landmarkFunFact: "It's the fourth-largest waterfall in the world along a national border, after Niagara, Victoria, and Iguazu Falls"
        }, 
        {
         id: 2,
         landmarkName: "Son Doong Cave",
         landmarkImage: '/scripts/vietnam/images/cave.webp',
         landmarkFunFact: "Largest Natural Cave on the planet"
         },
         {
         id: 3,
         landmarkName: "Cu Chi Tunnel",
         landmarkImage: '/scripts/vietnam/images/tunnels.png',
         landmarkFunFact: "These tunnels can now be explored by tourists. Whether that be crawling through the safe areas, firing an AK-47 on the grounds, or sampling the typical foods that soldiers ate at the time the tunnels were used."
        },
    ],
    celebrities: [
        {
            id: 1,
            celebName: "Phan Thị Mỹ Tâm",
            celebImage: '/scripts/vietnam/images/tam.jpg',
            celebQuote: "Don’t let them break you",
            celebKnownFor: "Being one of the most successful Vietnamese singers for two decades",
        },{
            id: 2,
            celebName: "Hương Giang",
            celebImage: '/scripts/vietnam/images/giang.jpg',
            celebQuote: "Where there’s a will, there’s a way”—” This is true for you, for me, for everyone",
            celebKnownFor: "Being the first Vietnamese representative to participate in Miss International Transgender in Thailand",
        },{
            id: 3,
            celebName: "Linh Ngọc Đàm",
            celebImage: '/scripts/vietnam/images/ngoc.webp',
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
