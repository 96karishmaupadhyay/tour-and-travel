const cardsData = [
    {
      "id": 1,
      "name": "Goa",
      "state": "Goa",
      "price": 15000,
      "description": "A tropical paradise known for beaches, parties, and Portuguese heritage.",
      "image": "images/goa.jpg",
      "hotels": [
        {
          "name": "Taj Exotica Goa",
          "rating": 4.7,
          "price_per_night": 8500,
          "amenities": ["Beach Access", "Spa", "Pool", "Free Breakfast"],
          "image": "images/taj_exotica.jpg"
        },
        {
          "name": "Cidade de Goa",
          "rating": 4.3,
          "price_per_night": 6000,
          "amenities": ["Beach View", "Gym", "Restaurant"],
          "image": "images/cidade_goa.jpg"
        }
      ]
    },
    {
      "id": 2,
      "name": "Manali",
      "state": "Himachal Pradesh",
      "price": 12000,
      "description": "A popular hill station surrounded by mountains, snow, and adventure.",
      "image": "images/manali.jpg",
      "hotels": [
        {
          "name": "Snow Valley Resorts",
          "rating": 4.5,
          "price_per_night": 4000,
          "amenities": ["Mountain View", "Free Parking", "Heater"],
          "image": "images/snow_valley.jpg"
        },
        {
          "name": "The Himalayan",
          "rating": 4.8,
          "price_per_night": 7500,
          "amenities": ["Luxury Rooms", "Indoor Games", "Garden"],
          "image": "images/the_himalayan.jpg"
        }
      ]
    },
    {
      "id": 3,
      "name": "Udaipur",
      "state": "Rajasthan",
      "price": 14000,
      "description": "The city of lakes, known for palaces, heritage, and royal vibes.",
      "image": "images/udaipur.jpg",
      "hotels": [
        {
          "name": "The Oberoi Udaivilas",
          "rating": 5.0,
          "price_per_night": 18000,
          "amenities": ["Lake View", "Luxury Spa", "Boat Ride"],
          "image": "images/udaivilas.jpg"
        },
        {
          "name": "Trident Udaipur",
          "rating": 4.6,
          "price_per_night": 9500,
          "amenities": ["Heritage Decor", "Garden", "Fine Dining"],
          "image": "images/trident_udaipur.jpg"
        }
      ]
    },
    {
      "id": 4,
      "name": "Darjeeling",
      "state": "West Bengal",
      "price": 11000,
      "description": "Famous for tea plantations, toy train, and the view of Kanchenjunga.",
      "image": "images/darjeeling.jpg",
      "hotels": [
        {
          "name": "Mayfair Darjeeling",
          "rating": 4.7,
          "price_per_night": 6000,
          "amenities": ["Tea Lounge", "Library", "Himalayan View"],
          "image": "images/mayfair_darjeeling.jpg"
        },
        {
          "name": "Windamere Hotel",
          "rating": 4.4,
          "price_per_night": 5000,
          "amenities": ["Colonial Rooms", "Old World Charm", "Bonfire"],
          "image": "images/windamere.jpg"
        }
      ]
    },
    {
      "id": 5,
      "name": "Andaman & Nicobar",
      "state": "Andaman & Nicobar",
      "price": 18000,
      "description": "Pristine beaches, water sports, and coral reefs await in this island paradise.",
      "image": "images/andaman.jpg",
      "hotels": [
        {
          "name": "SeaShell Havelock",
          "rating": 4.8,
          "price_per_night": 10000,
          "amenities": ["Snorkeling", "Beach Huts", "Scuba Diving"],
          "image": "images/seashell_havelock.jpg"
        },
        {
          "name": "Symphony Palms Beach Resort",
          "rating": 4.5,
          "price_per_night": 8000,
          "amenities": ["Beachfront", "Water Activities", "Eco Cottages"],
          "image": "images/symphony_palms.jpg"
        }
      ]
    },
    {
      "id": 6,
      "name": "Jaipur",
      "state": "Rajasthan",
      "price": 13000,
      "description": "The Pink City famous for forts, palaces, and vibrant culture.",
      "image": "images/jaipur.jpg",
      "hotels": [
        {
          "name": "Rambagh Palace",
          "rating": 4.9,
          "price_per_night": 20000,
          "amenities": ["Heritage Walk", "Luxury Spa", "Fine Dining"],
          "image": "images/rambagh_palace.jpg"
        },
        {
          "name": "ITC Rajputana",
          "rating": 4.6,
          "price_per_night": 9500,
          "amenities": ["Traditional Decor", "Pool", "Fitness Center"],
          "image": "images/itc_rajputana.jpg"
        }
      ]
    },
    {
      "id": 7,
      "name": "Munnar",
      "state": "Kerala",
      "price": 10000,
      "description": "Known for tea gardens, misty hills, and scenic beauty.",
      "image": "images/munnar.jpg",
      "hotels": [
        {
          "name": "Parakkat Nature Resort",
          "rating": 4.7,
          "price_per_night": 7500,
          "amenities": ["Tea Garden View", "Infinity Pool", "Luxury Rooms"],
          "image": "images/parakkat_munnar.jpg"
        },
        {
          "name": "The Fog Resort & Spa",
          "rating": 4.5,
          "price_per_night": 6800,
          "amenities": ["Spa", "Restaurant", "Outdoor Activities"],
          "image": "images/fog_resort.jpg"
        }
      ]
    },
    {
      "id": 8,
      "name": "Rishikesh",
      "state": "Uttarakhand",
      "price": 9000,
      "description": "The yoga capital of the world, also famous for adventure sports.",
      "image": "images/rishikesh.jpg",
      "hotels": [
        {
          "name": "Aloha On The Ganges",
          "rating": 4.7,
          "price_per_night": 7000,
          "amenities": ["River View", "Yoga Retreat", "Spa"],
          "image": "images/aloha_rishikesh.jpg"
        },
        {
          "name": "Ganga Kinare",
          "rating": 4.6,
          "price_per_night": 7500,
          "amenities": ["Riverside Walk", "Spiritual Retreat", "Restaurant"],
          "image": "images/ganga_kinare.jpg"
        }
      ]
    },
    {
      "id": 9,
      "name": "Kodaikanal",
      "state": "Tamil Nadu",
      "price": 9500,
      "description": "The Princess of Hill Stations with lakes, gardens, and scenic beauty.",
      "image": "images/kodaikanal.jpg",
      "hotels": [
        {
          "name": "The Carlton",
          "rating": 4.7,
          "price_per_night": 8000,
          "amenities": ["Lake View", "Cycling", "Restaurant"],
          "image": "images/carlton_kodaikanal.jpg"
        },
        {
          "name": "Sterling Kodai Valley",
          "rating": 4.3,
          "price_per_night": 5500,
          "amenities": ["Nature Walks", "Spa", "Kids Play Area"],
          "image": "images/sterling_kodai.jpg"
        }
      ]
    },
    {
      "id": 10,
      "name": "Alleppey",
      "state": "Kerala",
      "price": 10500,
      "description": "Famous for houseboat cruises in the backwaters of Kerala.",
      "image": "images/alleppey.jpg",
      "hotels": [
        {
          "name": "Punnamada Resort",
          "rating": 4.5,
          "price_per_night": 9500,
          "amenities": ["Houseboat Stay", "Lake View", "Spa"],
          "image": "images/punnamada.jpg"
        },
        {
          "name": "Lake Palace Resort",
          "rating": 4.6,
          "price_per_night": 8500,
          "amenities": ["Boat Rides", "Outdoor Pool", "Waterfront Dining"],
          "image": "images/lake_palace.jpg"
        }
      ]
    },
    {
      "id": 11,
      "name": "Pondicherry",
      "state": "Puducherry",
      "price": 11500,
      "description": "A quaint town with French architecture, beaches, and cafes.",
      "image": "images/pondicherry.jpg",
      "hotels": [
        {
          "name": "The Promenade",
          "rating": 4.4,
          "price_per_night": 7000,
          "amenities": ["Beachfront", "Cafe", "Spa"],
          "image": "images/promenade.jpg"
        },
        {
          "name": "Le Pondy",
          "rating": 4.5,
          "price_per_night": 8500,
          "amenities": ["Beach Villas", "Pool", "Restaurant"],
          "image": "images/le_pondy.jpg"
        }
      ]
    }
  ];
  
  export default cardsData;
  