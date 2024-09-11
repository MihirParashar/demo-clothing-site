// Normally this would be an API, but I don't want to run a web server 24/7.
// I also can't make it a JSON file because that gives me the CORS error.

const products = [
    {
      "id": 1,
      "title": "OG Special Edition \"Whiteout\" Hoodie",
      "price": 74.99,
      "image": "assets/whiteout_hoodie.png"
    },
    {
      "id": 2,
      "title": "Core Collection \"Arctic White\" Windbreaker",
      "price": 92.99,
      "image": "assets/arctic_white_windbreaker.png"
    },
    {
      "id": 3,
      "title": "Neon Vibe \"Sunset Orange\" Track Pants",
      "price": 38.99,
      "image": "assets/sunset_orange_trackpants.png"
    },
    {
      "id": 4,
      "title": "Graffiti Canvas \"Urban Gray\" Hoodie",
      "price": 44.99,
      "image": "assets/urban_gray_hoodie.png"
    },
    {
      "id": 5,
      "title": "Retro Revival \"Electric Blue\" Crewneck",
      "price": 103.99,
      "image": "assets/electric_blue_crewneck.png"
    },
    {
      "id": 6,
      "title": "Midnight Runner \"Crimson Red\" Joggers",
      "price": 39.99,
      "image": "assets/crimson_red_joggers.png"
    }
  ]

  export {products}
  