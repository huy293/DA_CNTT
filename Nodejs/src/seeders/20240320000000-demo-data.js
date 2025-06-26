'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try { 
    // Thêm thể loại phim
    await queryInterface.bulkInsert('Genres', [
      {
        "id": 1,
        "name": "Action",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 2,
        "name": "Adventure",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 3,
        "name": "Animation",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 4,
        "name": "Art-house",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 5,
        "name": "Comedy",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 6,
        "name": "Crime",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 7,
        "name": "Drama",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 8,
        "name": "Family",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 9,
        "name": "Fantasy",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 10,
        "name": "Historical",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 11,
        "name": "Horror",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 12,
        "name": "Music",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 13,
        "name": "Musical",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 14,
        "name": "Mystery",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 15,
        "name": "Psychological",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 16,
        "name": "Romance",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 17,
        "name": "Science Fiction",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 18,
        "name": "Spy",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 19,
        "name": "Superhero",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 20,
        "name": "Teen",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 21,
        "name": "Thriller",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 22,
        "name": "Tragedy",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 23,
        "name": "War",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 24,
        "name": "Supernatural",
        "createdAt": "2024-01-01T00:00:00+00:00",
        "updatedAt": "2024-01-01T00:00:00+00:00"
      },
      {
        "id": 25,
        "name": "Youth",
        "createdAt": "2024-01-01T00:00:00+00:00",
        "updatedAt": "2024-01-01T00:00:00+00:00"
      },
      {
        "id": 26,
        "name": "School",
        "createdAt": "2024-01-01T00:00:00+00:00",
        "updatedAt": "2024-01-01T00:00:00+00:00"
      },
      {
        "id": 27,
        "name": "Slice of life",
        "createdAt": "2024-01-01T00:00:00+00:00",
        "updatedAt": "2024-01-01T00:00:00+00:00"
      },
      {
        "id": 28,
        "name": "Military",
        "createdAt": "2024-01-01T00:00:00+00:00",
        "updatedAt": "2024-01-01T00:00:00+00:00"
      },
      {
        "id": 29,
        "name": "Sports",
        "createdAt": "2024-01-01T00:00:00+00:00",
        "updatedAt": "2024-01-01T00:00:00+00:00"
      },
      {
        "id": 30,
        "name": "Legal",
        "createdAt": "2024-01-01T00:00:00+00:00",
        "updatedAt": "2024-01-01T00:00:00+00:00"
      },
      {
        "id": 31,
        "name": "Political",
        "createdAt": "2024-01-01T00:00:00+00:00",
        "updatedAt": "2024-01-01T00:00:00+00:00"
      },
      {
        "id": 32,
        "name": "Social",
        "createdAt": "2024-01-01T00:00:00+00:00",
        "updatedAt": "2024-01-01T00:00:00+00:00"
      },
      {
        "id": 33,
        "name": "Reincarnation",
        "createdAt": "2024-01-01T00:00:00+00:00",
        "updatedAt": "2024-01-01T00:00:00+00:00"
      }
    ]);

    // Lấy tất cả genres đã thêm
    const genres = await queryInterface.sequelize.query(
      'SELECT * FROM Genres;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    // Thêm phim
    await queryInterface.bulkInsert('Movies', [
      {
        "id": 1,
        "title": "Harry Potter and the Sorcerer's Stone",
        "type": "movie",
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 2,
        "title": "Harry Potter and the Chamber of Secrets",
        "type": "movie",
        "createdAt": "2002-11-15T00:00:00+00:00",
        "updatedAt": "2002-11-15T00:00:00+00:00"
      },
      {
        "id": 3,
        "title": "Harry Potter and the Prisoner of Azkaban",
        "type": "movie",
        "createdAt": "2004-06-04T00:00:00+00:00",
        "updatedAt": "2004-06-04T00:00:00+00:00"
      },
      {
        "id": 4,
        "title": "Harry Potter and the Goblet of Fire",
        "type": "movie",
        "createdAt": "2005-11-18T00:00:00+00:00",
        "updatedAt": "2005-11-18T00:00:00+00:00"
      },
      {
        "id": 5,
        "title": "Harry Potter and the Order of the Phoenix",
        "type": "movie",
        "createdAt": "2007-07-11T00:00:00+00:00",
        "updatedAt": "2007-07-11T00:00:00+00:00"
      },
      {
        "id": 6,
        "title": "Harry Potter and the Half-Blood Prince",
        "type": "movie",
        "createdAt": "2009-07-15T00:00:00+00:00",
        "updatedAt": "2009-07-15T00:00:00+00:00"
      },
      {
        "id": 7,
        "title": "Spider-Man",
        "type": "movie",
        "createdAt": "2002-05-03T00:00:00+00:00",
        "updatedAt": "2002-05-03T00:00:00+00:00"
      },
      {
        "id": 8,
        "title": "Spider-Man 2",
        "type": "movie",
        "createdAt": "2004-06-30T00:00:00+00:00",
        "updatedAt": "2004-06-30T00:00:00+00:00"
      },
      {
        "id": 9,
        "title": "Spider-Man 3",
        "type": "movie",
        "createdAt": "2007-05-04T00:00:00+00:00",
        "updatedAt": "2007-05-04T00:00:00+00:00"
      },
      {
        "id": 10,
        "title": "X-Men",
        "type": "movie",
        "createdAt": "2000-07-14T00:00:00+00:00",
        "updatedAt": "2000-07-14T00:00:00+00:00"
      },
      {
        "id": 11,
        "title": "X2: X-Men United",
        "type": "movie",
        "createdAt": "2003-05-02T00:00:00+00:00",
        "updatedAt": "2003-05-02T00:00:00+00:00"
      },
      {
        "id": 12,
        "title": "X-Men: The Last Stand",
        "type": "movie",
        "createdAt": "2006-05-26T00:00:00+00:00",
        "updatedAt": "2006-05-26T00:00:00+00:00"
      },
      {
        "id": 13,
        "title": "X-Men Origins: Wolverine",
        "type": "movie",
        "createdAt": "2009-05-01T00:00:00+00:00",
        "updatedAt": "2009-05-01T00:00:00+00:00"
      },
      {
        "id": 14,
        "title": "The Fellowship of the Ring",
        "type": "movie",
        "createdAt": "2001-12-19T00:00:00+00:00",
        "updatedAt": "2001-12-19T00:00:00+00:00"
      },
      {
        "id": 15,
        "title": "The Two Towers",
        "type": "movie",
        "createdAt": "2002-12-18T00:00:00+00:00",
        "updatedAt": "2002-12-18T00:00:00+00:00"
      },
      {
        "id": 16,
        "title": "The Return of the King",
        "type": "movie",
        "createdAt": "2003-12-17T00:00:00+00:00",
        "updatedAt": "2003-12-17T00:00:00+00:00"
      },
      {
        "id": 17,
        "title": "The Curse of the Black Pearl",
        "type": "movie",
        "createdAt": "2003-07-09T00:00:00+00:00",
        "updatedAt": "2003-07-09T00:00:00+00:00"
      },
      {
        "id": 18,
        "title": "Dead Man's Chest",
        "type": "movie",
        "createdAt": "2006-07-07T00:00:00+00:00",
        "updatedAt": "2006-07-07T00:00:00+00:00"
      },
      {
        "id": 19,
        "title": "At World's End",
        "type": "movie",
        "createdAt": "2007-05-25T00:00:00+00:00",
        "updatedAt": "2007-05-25T00:00:00+00:00"
      },
      {
        "id": 20,
        "title": "The Bourne Identity",
        "type": "movie",
        "createdAt": "2002-06-14T00:00:00+00:00",
        "updatedAt": "2002-06-14T00:00:00+00:00"
      },
      {
        "id": 21,
        "title": "The Bourne Supremacy",
        "type": "movie",
        "createdAt": "2004-07-23T00:00:00+00:00",
        "updatedAt": "2004-07-23T00:00:00+00:00"
      },
      {
        "id": 22,
        "title": "The Bourne Ultimatum",
        "type": "movie",
        "createdAt": "2007-08-03T00:00:00+00:00",
        "updatedAt": "2007-08-03T00:00:00+00:00"
      },
      {
        "id": 23,
        "title": "Shrek",
        "type": "movie",
        "createdAt": "2001-05-18T00:00:00+00:00",
        "updatedAt": "2001-05-18T00:00:00+00:00"
      },
      {
        "id": 24,
        "title": "Shrek 2",
        "type": "movie",
        "createdAt": "2004-05-19T00:00:00+00:00",
        "updatedAt": "2004-05-19T00:00:00+00:00"
      },
      {
        "id": 25,
        "title": "Shrek the Third",
        "type": "movie",
        "createdAt": "2007-05-18T00:00:00+00:00",
        "updatedAt": "2007-05-18T00:00:00+00:00"
      },
      {
        "id": 26,
        "title": "Shrek Forever After",
        "type": "movie",
        "createdAt": "2010-05-21T00:00:00+00:00",
        "updatedAt": "2010-05-21T00:00:00+00:00"
      },
      {
        "id": 27,
        "title": "Transformers",
        "type": "movie",
        "createdAt": "2007-07-03T00:00:00+00:00",
        "updatedAt": "2007-07-03T00:00:00+00:00"
      },
      {
        "id": 28,
        "title": "Transformers: Revenge of the Fallen",
        "type": "movie",
        "createdAt": "2009-06-24T00:00:00+00:00",
        "updatedAt": "2009-06-24T00:00:00+00:00"
      },
       {
        "id": 29,
        "title": "Batman Begins",
        "type": "movie",
        "createdAt": "2005-06-15T00:00:00+00:00",
        "updatedAt": "2005-06-15T00:00:00+00:00"
      },
      {
        "id": 30,
        "title": "The Dark Knight",
        "type": "movie",
        "createdAt": "2008-07-18T00:00:00+00:00",
        "updatedAt": "2008-07-18T00:00:00+00:00"
      },
      {
        "id": 31,
        "title": "Iron Man",
        "type": "movie",
        "createdAt": "2008-05-02T00:00:00+00:00",
        "updatedAt": "2008-05-02T00:00:00+00:00"
      },
      {
        "id": 32,
        "title": "Iron Man 2",
        "type": "movie",
        "createdAt": "2010-05-07T00:00:00+00:00",
        "updatedAt": "2010-05-07T00:00:00+00:00"
      },
      {
        "id": 33,
        "title": "Audition",
        "type": "movie",
        "createdAt": "2000-03-03T00:00:00+00:00",
        "updatedAt": "2000-03-03T00:00:00+00:00"
      },
      {
        "id": 34,
        "title": "Battle Royale",
        "type": "movie",
        "createdAt": "2000-12-16T00:00:00+00:00",
        "updatedAt": "2000-12-16T00:00:00+00:00"
      },
      {
        "id": 35,
        "title": "Joint Security Area",
        "type": "movie",
        "createdAt": "2000-09-20T00:00:00+00:00",
        "updatedAt": "2000-09-20T00:00:00+00:00"
      },
      {
        "id": 36,
        "title": "Avalon",
        "type": "movie",
        "createdAt": "2001-01-20T00:00:00+00:00",
        "updatedAt": "2001-01-20T00:00:00+00:00"
      },
      {
        "id": 37,
        "title": "My Sassy Girl",
        "type": "movie",
        "createdAt": "2001-07-27T00:00:00+00:00",
        "updatedAt": "2001-07-27T00:00:00+00:00"
      },
      {
        "id": 38,
        "title": "Memories of Murder",
        "type": "movie",
        "createdAt": "2003-04-24T00:00:00+00:00",
        "updatedAt": "2003-04-24T00:00:00+00:00"
      },
      {
        "id": 39,
        "title": "A Tale of Two Sisters",
        "type": "movie",
        "createdAt": "2003-06-13T00:00:00+00:00",
        "updatedAt": "2003-06-13T00:00:00+00:00"
      },
      {
        "id": 40,
        "title": "Spring, Summer, Fall, Winter... and Spring",
        "type": "movie",
        "createdAt": "2003-09-19T00:00:00+00:00",
        "updatedAt": "2003-09-19T00:00:00+00:00"
      },
      {
        "id": 41,
        "title": "Oldboy",
        "type": "movie",
        "createdAt": "2003-11-21T00:00:00+00:00",
        "updatedAt": "2003-11-21T00:00:00+00:00"
      },
      {
        "id": 42,
        "title": "Tokyo Godfathers",
        "type": "movie",
        "createdAt": "2003-11-08T00:00:00+00:00",
        "updatedAt": "2003-11-08T00:00:00+00:00"
      },
      {
        "id": 43,
        "title": "Nobody Knows",
        "type": "movie",
        "createdAt": "2004-08-07T00:00:00+00:00",
        "updatedAt": "2004-08-07T00:00:00+00:00"
      },
      {
        "id": 44,
        "title": "Howl’s Moving Castle",
        "type": "movie",
        "createdAt": "2004-11-20T00:00:00+00:00",
        "updatedAt": "2004-11-20T00:00:00+00:00"
      },
      {
        "id": 45,
        "title": "Always: Sunset on Third Street",
        "type": "movie",
        "createdAt": "2005-11-05T00:00:00+00:00",
        "updatedAt": "2005-11-05T00:00:00+00:00"
      },
      {
        "id": 46,
        "title": "Memories of Matsuko",
        "type": "movie",
        "createdAt": "2006-05-27T00:00:00+00:00",
        "updatedAt": "2006-05-27T00:00:00+00:00"
      },
      {
        "id": 47,
        "title": "The Host",
        "type": "movie",
        "createdAt": "2006-07-27T00:00:00+00:00",
        "updatedAt": "2006-07-27T00:00:00+00:00"
      },
      {
        "id": 48,
        "title": "Secret Sunshine",
        "type": "movie",
        "createdAt": "2007-05-24T00:00:00+00:00",
        "updatedAt": "2007-05-24T00:00:00+00:00"
      },
      {
        "id": 49,
        "title": "20th Century Boys 1",
        "type": "movie",
        "createdAt": "2008-08-30T00:00:00+00:00",
        "updatedAt": "2008-08-30T00:00:00+00:00"
      },
      {
        "id": 50,
        "title": "The Chaser",
        "type": "movie",
        "createdAt": "2008-02-14T00:00:00+00:00",
        "updatedAt": "2008-02-14T00:00:00+00:00"
      },
      {
        "id": 51,
        "title": "Confessions",
        "type": "movie",
        "createdAt": "2010-06-05T00:00:00+00:00",
        "updatedAt": "2010-06-05T00:00:00+00:00"
      },
      {
        "id": 52,
        "title": "The Man from Nowhere",
        "type": "movie",
        "createdAt": "2010-08-04T00:00:00+00:00",
        "updatedAt": "2010-08-04T00:00:00+00:00"
      },
      {
        "id": 53,
        "title": "Hai bến một dòng sông",
        "type": "movie",
        "createdAt": "2000-09-15T00:00:00+00:00",
        "updatedAt": "2000-09-15T00:00:00+00:00"
      },
      {
        "id": 54,
        "title": "Rồng xanh",
        "type": "movie",
        "createdAt": "2001-11-10T00:00:00+00:00",
        "updatedAt": "2001-11-10T00:00:00+00:00"
      },
      {
        "id": 55,
        "title": "Mùa len trâu",
        "type": "movie",
        "createdAt": "2004-09-01T00:00:00+00:00",
        "updatedAt": "2004-09-01T00:00:00+00:00"
      },
      {
        "id": 56,
        "title": "Những cô gái chân dài",
        "type": "movie",
        "createdAt": "2004-12-03T00:00:00+00:00",
        "updatedAt": "2004-12-03T00:00:00+00:00"
      },
      {
        "id": 57,
        "title": "Sống trong sợ hãi",
        "type": "movie",
        "createdAt": "2005-10-10T00:00:00+00:00",
        "updatedAt": "2005-10-10T00:00:00+00:00"
      },
      {
        "id": 58,
        "title": "Thời xa vắng",
        "type": "movie",
        "createdAt": "2005-12-16T00:00:00+00:00",
        "updatedAt": "2005-12-16T00:00:00+00:00"
      },
      {
        "id": 59,
        "title": "Áo lụa Hà Đông",
        "type": "movie",
        "createdAt": "2006-10-20T00:00:00+00:00",
        "updatedAt": "2006-10-20T00:00:00+00:00"
      },
      {
        "id": 60,
        "title": "Dòng máu anh hùng",
        "type": "movie",
        "createdAt": "2007-04-27T00:00:00+00:00",
        "updatedAt": "2007-04-27T00:00:00+00:00"
      },
      {
        "id": 61,
        "title": "Cú và chim se sẻ",
        "type": "movie",
        "createdAt": "2007-11-16T00:00:00+00:00",
        "updatedAt": "2007-11-16T00:00:00+00:00"
      },
      {
        "id": 62,
        "title": "Trăng nơi đáy giếng",
        "type": "movie",
        "createdAt": "2008-09-29T00:00:00+00:00",
        "updatedAt": "2008-09-29T00:00:00+00:00"
      },
      {
        "id": 63,
        "title": "Nụ hôn thần chết",
        "type": "movie",
        "createdAt": "2008-01-25T00:00:00+00:00",
        "updatedAt": "2008-01-25T00:00:00+00:00"
      },
      {
        "id": 64,
        "title": "Giải cứu thần chết",
        "type": "movie",
        "createdAt": "2009-01-23T00:00:00+00:00",
        "updatedAt": "2009-01-23T00:00:00+00:00"
      },
      {
        "id": 65,
        "title": "Chơi vơi",
        "type": "movie",
        "createdAt": "2009-10-09T00:00:00+00:00",
        "updatedAt": "2009-10-09T00:00:00+00:00"
      },
      {
        "id": 66,
        "title": "14 ngày phép",
        "type": "movie",
        "createdAt": "2009-12-04T00:00:00+00:00",
        "updatedAt": "2009-12-04T00:00:00+00:00"
      },
      {
        "id": 67,
        "title": "Passport to Love",
        "type": "movie",
        "createdAt": "2009-03-06T00:00:00+00:00",
        "updatedAt": "2009-03-06T00:00:00+00:00"
      },
      {
        "id": 68,
        "title": "Đẹp từng centimét",
        "type": "movie",
        "createdAt": "2009-02-13T00:00:00+00:00",
        "updatedAt": "2009-02-13T00:00:00+00:00"
      },
      {
        "id": 69,
        "title": "Bẫy rồng",
        "type": "movie",
        "createdAt": "2009-12-18T00:00:00+00:00",
        "updatedAt": "2009-12-18T00:00:00+00:00"
      },
      {
        "id": 70,
        "title": "Cánh đồng bất tận",
        "type": "movie",
        "createdAt": "2010-10-22T00:00:00+00:00",
        "updatedAt": "2010-10-22T00:00:00+00:00"
      },
      {
        "id": 71,
        "title": "Để Mai Tính",
        "type": "movie",
        "createdAt": "2010-04-23T00:00:00+00:00",
        "updatedAt": "2010-04-23T00:00:00+00:00"
      },
      {
        "id": 72,
        "title": "Nụ hôn rực rỡ",
        "type": "movie",
        "createdAt": "2010-03-26T00:00:00+00:00",
        "updatedAt": "2010-03-26T00:00:00+00:00"
      },
      {
        "id": 73,
        "title": "Captain America",
        "type": "movie",
        "createdAt": "2011-07-22T00:00:00+00:00",
        "updatedAt": "2011-07-22T00:00:00+00:00"
      },
      {
        "id": 74,
        "title": "Captain America",
        "type": "movie",
        "createdAt": "2014-04-04T00:00:00+00:00",
        "updatedAt": "2014-04-04T00:00:00+00:00"
      },
      {
        "id": 75,
        "title": "Captain America",
        "type": "movie",
        "createdAt": "2016-05-06T00:00:00+00:00",
        "updatedAt": "2016-05-06T00:00:00+00:00"
      },
      {
        "id": 76,
        "title": "The Hunger Games",
        "type": "movie",
        "createdAt": "2012-03-23T00:00:00+00:00",
        "updatedAt": "2012-03-23T00:00:00+00:00"
      },
      {
        "id": 77,
        "title": "The Hunger Games",
        "type": "movie",
        "createdAt": "2013-11-22T00:00:00+00:00",
        "updatedAt": "2013-11-22T00:00:00+00:00"
      },
      {
        "id": 78,
        "title": "The Hunger Games",
        "type": "movie",
        "createdAt": "2014-11-21T00:00:00+00:00",
        "updatedAt": "2014-11-21T00:00:00+00:00"
      },
      {
        "id": 79,
        "title": "The Hunger Games",
        "type": "movie",
        "createdAt": "2015-11-20T00:00:00+00:00",
        "updatedAt": "2015-11-20T00:00:00+00:00"
      },
      {
        "id": 80,
        "title": "John Wick",
        "type": "movie",
        "createdAt": "2014-10-24T00:00:00+00:00",
        "updatedAt": "2014-10-24T00:00:00+00:00"
      },
      {
        "id": 81,
        "title": "John Wick",
        "type": "movie",
        "createdAt": "2017-02-10T00:00:00+00:00",
        "updatedAt": "2017-02-10T00:00:00+00:00"
      },
      {
        "id": 82,
        "title": "John Wick",
        "type": "movie",
        "createdAt": "2019-05-17T00:00:00+00:00",
        "updatedAt": "2019-05-17T00:00:00+00:00"
      },
      {
        "id": 83,
        "title": "Mission: Impossible",
        "type": "movie",
        "createdAt": "2011-12-16T00:00:00+00:00",
        "updatedAt": "2011-12-16T00:00:00+00:00"
      },
      {
        "id": 84,
        "title": "Mission: Impossible",
        "type": "movie",
        "createdAt": "2015-07-31T00:00:00+00:00",
        "updatedAt": "2015-07-31T00:00:00+00:00"
      },
      {
        "id": 85,
        "title": "Mission: Impossible",
        "type": "movie",
        "createdAt": "2018-07-27T00:00:00+00:00",
        "updatedAt": "2018-07-27T00:00:00+00:00"
      },
      {
        "id": 86,
        "title": "Mission: Impossible",
        "type": "movie",
        "createdAt": "2023-07-12T00:00:00+00:00",
        "updatedAt": "2023-07-12T00:00:00+00:00"
      },
      {
        "id": 87,
        "title": "Mission: Impossible",
        "type": "movie",
        "createdAt": "2025-05-23T00:00:00+00:00",
        "updatedAt": "2025-05-23T00:00:00+00:00"
      },
      {
        "id": 88,
        "title": "Scream",
        "type": "movie",
        "createdAt": "2011-04-15T00:00:00+00:00",
        "updatedAt": "2011-04-15T00:00:00+00:00"
      },
      {
        "id": 89,
        "title": "Scream",
        "type": "movie",
        "createdAt": "2022-01-14T00:00:00+00:00",
        "updatedAt": "2022-01-14T00:00:00+00:00"
      },
      {
        "id": 90,
        "title": "Scream",
        "type": "movie",
        "createdAt": "2023-03-10T00:00:00+00:00",
        "updatedAt": "2023-03-10T00:00:00+00:00"
      },
      {
        "id": 91,
        "title": "Black Panther",
        "type": "movie",
        "createdAt": "2018-02-16T00:00:00+00:00",
        "updatedAt": "2018-02-16T00:00:00+00:00"
      },
      {
        "id": 92,
        "title": "F1",
        "type": "movie",
        "createdAt": "2025-06-27T00:00:00+00:00",
        "updatedAt": "2025-06-27T00:00:00+00:00"
      },
      {
        "id": 93,
        "title": "Kaiji",
        "type": "movie",
        "createdAt": "2011-11-05T00:00:00+00:00",
        "updatedAt": "2011-11-05T00:00:00+00:00"
      },
      {
        "id": 94,
        "title": "Kaiji",
        "type": "movie",
        "createdAt": "2020-01-10T00:00:00+00:00",
        "updatedAt": "2020-01-10T00:00:00+00:00"
      },
      {
        "id": 95,
        "title": "Rurouni Kenshin",
        "type": "movie",
        "createdAt": "2021-04-23T00:00:00+00:00",
        "updatedAt": "2021-04-23T00:00:00+00:00"
      },
      {
        "id": 96,
        "title": "Detective Conan",
        "type": "movie",
        "createdAt": "2024-04-12T00:00:00+00:00",
        "updatedAt": "2024-04-12T00:00:00+00:00"
      },
      {
        "id": 97,
        "title": "Detective Conan",
        "type": "movie",
        "createdAt": "2025-04-11T00:00:00+00:00",
        "updatedAt": "2025-04-11T00:00:00+00:00"
      },
      {
        "id": 98,
        "title": "The Outlaws",
        "type": "movie",
        "createdAt": "2017-10-03T00:00:00+00:00",
        "updatedAt": "2017-10-03T00:00:00+00:00"
      },
      {
        "id": 99,
        "title": "The Roundup",
        "type": "movie",
        "createdAt": "2022-05-18T00:00:00+00:00",
        "updatedAt": "2022-05-18T00:00:00+00:00"
      },
      {
        "id": 100,
        "title": "The Roundup",
        "type": "movie",
        "createdAt": "2023-05-31T00:00:00+00:00",
        "updatedAt": "2023-05-31T00:00:00+00:00"
      },
      {
        "id": 101,
        "title": "The Roundup",
        "type": "movie",
        "createdAt": "2024-04-24T00:00:00+00:00",
        "updatedAt": "2024-04-24T00:00:00+00:00"
      },
      {
        "id": 102,
        "title": "Veteran",
        "type": "movie",
        "createdAt": "2024-12-25T00:00:00+00:00",
        "updatedAt": "2024-12-25T00:00:00+00:00"
      },
      {
        "id": 103,
        "title": "The Priests",
        "type": "movie",
        "createdAt": "2015-11-05T00:00:00+00:00",
        "updatedAt": "2015-11-05T00:00:00+00:00"
      },
      {
        "id": 104,
        "title": "Dark Nuns",
        "type": "movie",
        "createdAt": "2025-01-10T00:00:00+00:00",
        "updatedAt": "2025-01-10T00:00:00+00:00"
      },
      {
        "id": 105,
        "title": "Hitman",
        "type": "movie",
        "createdAt": "2020-01-22T00:00:00+00:00",
        "updatedAt": "2020-01-22T00:00:00+00:00"
      },
      {
        "id": 106,
        "title": "Hitman",
        "type": "movie",
        "createdAt": "2025-06-15T00:00:00+00:00",
        "updatedAt": "2025-06-15T00:00:00+00:00"
      },
      {
        "id": 107,
        "title": "Omniscient Reader",
        "type": "movie",
        "createdAt": "2025-12-05T00:00:00+00:00",
        "updatedAt": "2025-12-05T00:00:00+00:00"
      },
      {
        "id": 108,
        "title": "Harbin",
        "type": "movie",
        "createdAt": "2023-12-25T00:00:00+00:00",
        "updatedAt": "2023-12-25T00:00:00+00:00"
      },
      {
        "id": 109,
        "title": "Decision to Leave",
        "type": "movie",
        "createdAt": "2022-06-29T00:00:00+00:00",
        "updatedAt": "2022-06-29T00:00:00+00:00"
      },
      {
        "id": 110,
        "title": "Broker",
        "type": "movie",
        "createdAt": "2022-06-08T00:00:00+00:00",
        "updatedAt": "2022-06-08T00:00:00+00:00"
      },
      {
        "id": 111,
        "title": "Drive My Car",
        "type": "movie",
        "createdAt": "2021-08-20T00:00:00+00:00",
        "updatedAt": "2021-08-20T00:00:00+00:00"
      },
      {
        "id": 112,
        "title": "Sekigahara",
        "type": "movie",
        "createdAt": "2017-08-26T00:00:00+00:00",
        "updatedAt": "2017-08-26T00:00:00+00:00"
      },
      {
        "id": 113,
        "title": "Lật Mặt 3",
        "type": "movie",
        "createdAt": "2018-04-20T00:00:00+00:00",
        "updatedAt": "2018-04-20T00:00:00+00:00"
      },
      {
        "id": 114,
        "title": "Lật Mặt 6",
        "type": "movie",
        "createdAt": "2023-04-28T00:00:00+00:00",
        "updatedAt": "2023-04-28T00:00:00+00:00"
      },
      {
        "id": 115,
        "title": "Lật Mặt 8",
        "type": "movie",
        "createdAt": "2025-04-25T00:00:00+00:00",
        "updatedAt": "2025-04-25T00:00:00+00:00"
      },
      {
        "id": 116,
        "title": "Battle of the Brides",
        "type": "movie",
        "createdAt": "2011-01-28T00:00:00+00:00",
        "updatedAt": "2011-01-28T00:00:00+00:00"
      },
      {
        "id": 117,
        "title": "Lost in Paradise",
        "type": "movie",
        "createdAt": "2011-10-14T00:00:00+00:00",
        "updatedAt": "2011-10-14T00:00:00+00:00"
      },
      {
        "id": 118,
        "title": "Scandal",
        "type": "movie",
        "createdAt": "2012-10-12T00:00:00+00:00",
        "updatedAt": "2012-10-12T00:00:00+00:00"
      },
      {
        "id": 119,
        "title": "Bụi Đời Chợ Lớn",
        "type": "movie",
        "createdAt": "2013-06-07T00:00:00+00:00",
        "updatedAt": "2013-06-07T00:00:00+00:00"
      },
      {
        "id": 120,
        "title": "Để Mai Tính 2",
        "type": "movie",
        "createdAt": "2014-12-12T00:00:00+00:00",
        "updatedAt": "2014-12-12T00:00:00+00:00"
      },
      {
        "id": 121,
        "title": "Em Là Bà Nội Của Anh",
        "type": "movie",
        "createdAt": "2015-12-11T00:00:00+00:00",
        "updatedAt": "2015-12-11T00:00:00+00:00"
      },
      {
        "id": 122,
        "title": "Vu Quy Đại Náo",
        "type": "movie",
        "createdAt": "2019-02-22T00:00:00+00:00",
        "updatedAt": "2019-02-22T00:00:00+00:00"
      },
      {
        "id": 123,
        "title": "Hai Phượng",
        "type": "movie",
        "createdAt": "2019-02-22T00:00:00+00:00",
        "updatedAt": "2019-02-22T00:00:00+00:00"
      },
      {
        "id": 124,
        "title": "Ròm",
        "type": "movie",
        "createdAt": "2020-09-25T00:00:00+00:00",
        "updatedAt": "2020-09-25T00:00:00+00:00"
      },
      {
        "id": 125,
        "title": "Tro Tàn Rực Rỡ",
        "type": "movie",
        "createdAt": "2022-12-02T00:00:00+00:00",
        "updatedAt": "2022-12-02T00:00:00+00:00"
      },
      {
        "id": 126,
        "title": "Mai",
        "type": "movie",
        "createdAt": "2024-02-10T00:00:00+00:00",
        "updatedAt": "2024-02-10T00:00:00+00:00"
      },
      {
        "id": 127,
        "title": "Nhà Bà Nữ",
        "type": "movie",
        "createdAt": "2023-01-22T00:00:00+00:00",
        "updatedAt": "2023-01-22T00:00:00+00:00"
      },
      {
        "id": 128,
        "title": "The Last Wife",
        "type": "movie",
        "createdAt": "2023-11-03T00:00:00+00:00",
        "updatedAt": "2023-11-03T00:00:00+00:00"
      },
      {
        "id": 129,
        "title": "Bí Mật Của Gió",
        "type": "movie",
        "createdAt": "2020-01-31T00:00:00+00:00",
        "updatedAt": "2020-01-31T00:00:00+00:00"
      },
      {
        "id": 130,
        "title": "Trạng Tí Phiêu Lưu Ký",
        "type": "movie",
        "createdAt": "2021-04-30T00:00:00+00:00",
        "updatedAt": "2021-04-30T00:00:00+00:00"
      },
      {
      "id": 131,
      "title": "Mắt Biếc",
      "type": "movie",
      "createdAt": "2019-12-20T00:00:00+00:00",
      "updatedAt": "2019-12-20T00:00:00+00:00"
      },
      {
        "id": 132,
        "title": "Quỷ Nhập Tràng",
        "type": "movie",
        "createdAt": "2025-10-30T00:00:00+00:00",
        "updatedAt": "2025-10-30T00:00:00+00:00"
      },
      {
        "id": 133,
        "title": "Cheese in the Trap",
        "type": "series",
        "createdAt": "2016-01-01T00:00:00",
        "updatedAt": "2016-01-01T00:00:00"
      },
      {
        "id": 134,
        "title": "Descendants of the Sun",
        "type": "series",
        "createdAt": "2016-01-01T00:00:00",
        "updatedAt": "2016-01-01T00:00:00"
      },
      {
        "id": 135,
        "title": "Signal",
        "type": "series",
        "createdAt": "2016-01-01T00:00:00",
        "updatedAt": "2016-01-01T00:00:00"
      },
      {
        "id": 136,
        "title": "The K2",
        "type": "series",
        "createdAt": "2016-01-01T00:00:00",
        "updatedAt": "2016-01-01T00:00:00"
      },
      {
        "id": 137,
        "title": "Goblin (Guardian: The Lonely and Great God)",
        "type": "series",
        "createdAt": "2016-01-01T00:00:00",
        "updatedAt": "2016-01-01T00:00:00"
      },
      {
        "id": 138,
        "title": "Legends of the Blue Sea",
        "type": "series",
        "createdAt": "2017-01-01T00:00:00",
        "updatedAt": "2017-01-01T00:00:00"
      },
      {
        "id": 139,
        "title": "The World of the Married",
        "type": "series",
        "createdAt": "2020-01-01T00:00:00",
        "updatedAt": "2020-01-01T00:00:00"
      },
      {
        "id": 140,
        "title": "It’s Okay to Not Be Okay",
        "type": "series",
        "createdAt": "2020-01-01T00:00:00",
        "updatedAt": "2020-01-01T00:00:00"
      },
      {
        "id": 141,
        "title": "Record of Youth",
        "type": "series",
        "createdAt": "2020-01-01T00:00:00",
        "updatedAt": "2020-01-01T00:00:00"
      },
      {
        "id": 142,
        "title": "Oh My Ladylord",
        "type": "series",
        "createdAt": "2021-01-01T00:00:00",
        "updatedAt": "2021-01-01T00:00:00"
      },
      {
        "id": 143,
        "title": "My Mister",
        "type": "series",
        "createdAt": "2018-01-01T00:00:00",
        "updatedAt": "2018-01-01T00:00:00"
      },
      {
        "id": 144,
        "title": "Mr. Sunshine",
        "type": "series",
        "createdAt": "2018-01-01T00:00:00",
        "updatedAt": "2018-01-01T00:00:00"
      },
      {
        "id": 145,
        "title": "Something in the Rain",
        "type": "series",
        "createdAt": "2018-01-01T00:00:00",
        "updatedAt": "2018-01-01T00:00:00"
      },
      {
        "id": 146,
        "title": "Crash Landing on You",
        "type": "series",
        "createdAt": "2019-01-01T00:00:00",
        "updatedAt": "2019-01-01T00:00:00"
      },
      {
        "id": 147,
        "title": "When the Camellia Blooms",
        "type": "series",
        "createdAt": "2019-01-01T00:00:00",
        "updatedAt": "2019-01-01T00:00:00"
      },
      {
        "id": 148,
        "title": "Vincenzo",
        "type": "series",
        "createdAt": "2021-01-01T00:00:00",
        "updatedAt": "2021-01-01T00:00:00"
      },
      {
        "id": 149,
        "title": "Hometown Cha-Cha-Cha",
        "type": "series",
        "createdAt": "2021-01-01T00:00:00",
        "updatedAt": "2021-01-01T00:00:00"
      },
      {
        "id": 150,
        "title": "Twenty-Five Twenty-One",
        "type": "series",
        "createdAt": "2022-01-01T00:00:00",
        "updatedAt": "2022-01-01T00:00:00"
      },
      {
        "id": 151,
        "title": "Extraordinary Attorney Woo",
        "type": "series",
        "createdAt": "2022-01-01T00:00:00",
        "updatedAt": "2022-01-01T00:00:00"
      },
      {
        "id": 152,
        "title": "See You in My 19th Life",
        "type": "series",
        "createdAt": "2023-01-01T00:00:00",
        "updatedAt": "2023-01-01T00:00:00"
      }
    ]);

    // Lấy tất cả movies đã thêm
    const movies = await queryInterface.sequelize.query(
      'SELECT * FROM Movies;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    await queryInterface.bulkInsert('MovieGenres', [
      { "genreId": 1, "movieId": 1 },
      { "genreId": 2, "movieId": 1 },
      { "genreId": 9, "movieId": 1 },
    
      { "genreId": 1, "movieId": 2 },
      { "genreId": 2, "movieId": 2 },
      { "genreId": 9, "movieId": 2 },
    
      { "genreId": 1, "movieId": 3 },
      { "genreId": 2, "movieId": 3 },
      { "genreId": 9, "movieId": 3 },
    
      { "genreId": 1, "movieId": 4 },
      { "genreId": 2, "movieId": 4 },
      { "genreId": 9, "movieId": 4 },
    
      { "genreId": 1, "movieId": 5 },
      { "genreId": 2, "movieId": 5 },
      { "genreId": 9, "movieId": 5 },
    
      { "genreId": 1, "movieId": 6 },
      { "genreId": 2, "movieId": 6 },
      { "genreId": 9, "movieId": 6 },
    
      { "genreId": 1, "movieId": 7 },
      { "genreId": 19, "movieId": 7 },
    
      { "genreId": 1, "movieId": 8 },
      { "genreId": 19, "movieId": 8 },
    
      { "genreId": 1, "movieId": 9 },
      { "genreId": 19, "movieId": 9 },
    
      { "genreId": 1, "movieId": 10 },
      { "genreId": 19, "movieId": 10 },
    
      { "genreId": 1, "movieId": 11 },
      { "genreId": 19, "movieId": 11 },
    
      { "genreId": 1, "movieId": 12 },
      { "genreId": 19, "movieId": 12 },
    
      { "genreId": 1, "movieId": 13 },
      { "genreId": 19, "movieId": 13 },
    
      { "genreId": 2, "movieId": 14 },
      { "genreId": 9, "movieId": 14 },
    
      { "genreId": 2, "movieId": 15 },
      { "genreId": 9, "movieId": 15 },
    
      { "genreId": 2, "movieId": 16 },
      { "genreId": 9, "movieId": 16 },
    
      { "genreId": 2, "movieId": 17 },
      { "genreId": 1, "movieId": 17 },
    
      { "genreId": 2, "movieId": 18 },
      { "genreId": 1, "movieId": 18 },
    
      { "genreId": 2, "movieId": 19 },
      { "genreId": 1, "movieId": 19 },
    
      { "genreId": 1, "movieId": 20 },
      { "genreId": 18, "movieId": 20 },
    
      { "genreId": 1, "movieId": 21 },
      { "genreId": 18, "movieId": 21 },
    
      { "genreId": 1, "movieId": 22 },
      { "genreId": 18, "movieId": 22 },
    
      { "genreId": 3, "movieId": 23 },
      { "genreId": 5, "movieId": 23 },
    
      { "genreId": 3, "movieId": 24 },
      { "genreId": 5, "movieId": 24 },
    
      { "genreId": 3, "movieId": 25 },
      { "genreId": 5, "movieId": 25 },
    
      { "genreId": 3, "movieId": 26 },
      { "genreId": 5, "movieId": 26 },
    
      { "genreId": 1, "movieId": 27 },
      { "genreId": 17, "movieId": 27 },
    
      { "genreId": 1, "movieId": 28 },
      { "genreId": 17, "movieId": 28 },
    
      { "genreId": 1, "movieId": 29 },
      { "genreId": 21, "movieId": 29 },
    
      { "genreId": 1, "movieId": 30 },
      { "genreId": 21, "movieId": 30 },
    
      { "genreId": 1, "movieId": 31 },
      { "genreId": 19, "movieId": 31 },
    
      { "genreId": 1, "movieId": 32 },
      { "genreId": 19, "movieId": 32 },
    
      { "genreId": 11, "movieId": 33 },
      { "genreId": 15, "movieId": 33 },
    
      { "genreId": 1, "movieId": 34 },
      { "genreId": 22, "movieId": 34 },
    
      { "genreId": 23, "movieId": 35 },
      { "genreId": 7, "movieId": 35 },
    
      { "genreId": 17, "movieId": 36 },
      { "genreId": 15, "movieId": 36 },
    
      { "genreId": 16, "movieId": 37 },
      { "genreId": 5, "movieId": 37 },
    
      { "genreId": 6, "movieId": 38 },
      { "genreId": 7, "movieId": 38 },
    
      { "genreId": 11, "movieId": 39 },
      { "genreId": 14, "movieId": 39 },
    
      { "genreId": 4, "movieId": 40 },
      { "genreId": 15, "movieId": 40 },
    
      { "genreId": 6, "movieId": 41 },
      { "genreId": 15, "movieId": 41 },
    
      { "genreId": 3, "movieId": 42 },
      { "genreId": 7, "movieId": 42 },
    
      { "genreId": 7, "movieId": 43 },
      { "genreId": 22, "movieId": 43 },
    
      { "genreId": 3, "movieId": 44 },
      { "genreId": 9, "movieId": 44 },
    
      { "genreId": 7, "movieId": 45 },
      { "genreId": 22, "movieId": 45 },
    
      { "genreId": 7, "movieId": 46 },
      { "genreId": 16, "movieId": 46 },
    
      { "genreId": 11, "movieId": 47 },
      { "genreId": 1, "movieId": 47 },
    
      { "genreId": 7, "movieId": 48 },
      { "genreId": 22, "movieId": 48 },
    
      { "genreId": 17, "movieId": 49 },
      { "genreId": 1, "movieId": 49 },
    
      { "genreId": 6, "movieId": 50 },
      { "genreId": 21, "movieId": 50 },
    
      { "genreId": 15, "movieId": 51 },
      { "genreId": 7, "movieId": 51 },
    
      { "genreId": 6, "movieId": 52 },
      { "genreId": 1, "movieId": 52 },
    
      { "genreId": 7, "movieId": 53 },
      { "genreId": 22, "movieId": 53 },
    
      { "genreId": 7, "movieId": 54 },
      { "genreId": 1, "movieId": 54 },
    
      { "genreId": 10, "movieId": 55 },
      { "genreId": 7, "movieId": 55 },
    
      { "genreId": 5, "movieId": 56 },
      { "genreId": 16, "movieId": 56 },
    
      { "genreId": 7, "movieId": 57 },
      { "genreId": 15, "movieId": 57 },
    
      { "genreId": 10, "movieId": 58 },
      { "genreId": 7, "movieId": 58 },
    
      { "genreId": 16, "movieId": 59 },
      { "genreId": 22, "movieId": 59 },
    
      { "genreId": 1, "movieId": 60 },
      { "genreId": 6, "movieId": 60 },
    
      { "genreId": 7, "movieId": 61 },
      { "genreId": 15, "movieId": 61 },
    
      { "genreId": 7, "movieId": 62 },
      { "genreId": 15, "movieId": 62 },
    
      { "genreId": 5, "movieId": 63 },
      { "genreId": 16, "movieId": 63 },
    
      { "genreId": 5, "movieId": 64 },
      { "genreId": 16, "movieId": 64 },
    
      { "genreId": 7, "movieId": 65 },
      { "genreId": 16, "movieId": 65 },
    
      { "genreId": 7, "movieId": 66 },
      { "genreId": 23, "movieId": 66 },
    
      { "genreId": 14, "movieId": 67 },
    
      { "genreId": 10, "movieId": 68 },
    
      { "genreId": 5, "movieId": 69 },
    
      { "genreId": 7, "movieId": 70 },
    
      { "genreId": 10, "movieId": 71 },
    
      { "genreId": 6, "movieId": 72 },
    
      { "genreId": 1, "movieId": 73 },
    
      { "genreId": 1, "movieId": 74 },
    
      { "genreId": 1, "movieId": 75 },
    
      { "genreId": 1, "movieId": 76 },
    
      { "genreId": 1, "movieId": 77 },
    
      { "genreId": 1, "movieId": 78 },
    
      { "genreId": 1, "movieId": 79 },
    
      { "genreId": 5, "movieId": 80 },
    
      { "genreId": 5, "movieId": 81 },
    
      { "genreId": 5, "movieId": 82 },
    
      { "genreId": 1, "movieId": 83 },
    
      { "genreId": 1, "movieId": 84 },
    
      { "genreId": 1, "movieId": 85 },
    
      { "genreId": 1, "movieId": 86 },
    
      { "genreId": 1, "movieId": 87 },
    
      { "genreId": 15, "movieId": 88 },
    
      { "genreId": 15, "movieId": 89 },
    
      { "genreId": 15, "movieId": 90 },
    
      { "genreId": 1, "movieId": 91 },
    
      { "genreId": 2, "movieId": 92 },
    
      { "genreId": 5, "movieId": 93 },
    
      { "genreId": 5, "movieId": 94 },
    
      { "genreId": 5, "movieId": 95 },
    
      { "genreId": 9, "movieId": 96 },
    
      { "genreId": 9, "movieId": 97 },
    
      { "genreId": 5, "movieId": 98 },
    
      { "genreId": 5, "movieId": 99 },
    
      { "genreId": 5, "movieId": 100 },
    
      { "genreId": 5, "movieId": 101 },
    
      { "genreId": 5, "movieId": 102 },
    
      { "genreId": 17, "movieId": 103 },
    
      { "genreId": 17, "movieId": 104 },
    
      { "genreId": 6, "movieId": 105 },
    
      { "genreId": 5, "movieId": 106 },
    
      { "genreId": 4, "movieId": 107 },
    
      { "genreId": 1, "movieId": 108 },
    
      { "genreId": 7, "movieId": 109 },
    
      { "genreId": 7, "movieId": 110 },
    
      { "genreId": 7, "movieId": 111 },
    
      { "genreId": 20, "movieId": 112 },
    
      { "genreId": 6, "movieId": 113 },
    
      { "genreId": 5, "movieId": 114 },
    
      { "genreId": 7, "movieId": 115 },
    
      { "genreId": 6, "movieId": 116 },
    
      { "genreId": 6, "movieId": 117 },
    
      { "genreId": 8, "movieId": 118 },
    
      { "genreId": 5, "movieId": 119 },
    
      { "genreId": 6, "movieId": 120 },
    
      { "genreId": 6, "movieId": 121 },
    
      { "genreId": 6, "movieId": 122 },
    
      { "genreId": 5, "movieId": 123 },
    
      { "genreId": 7, "movieId": 124 },
    
      { "genreId": 7, "movieId": 125 },
    
      { "genreId": 10, "movieId": 126 },
    
      { "genreId": 10, "movieId": 127 },
    
      { "genreId": 7, "movieId": 128 },
    
      { "genreId": 17, "movieId": 129 },
    
      { "genreId": 11, "movieId": 130 },
    
      { "genreId": 7, "movieId": 131 },
    
      { "genreId": 15, "movieId": 132 },
    
      { "genreId": 16, "movieId": 133 },
      { "genreId": 7, "movieId": 133 },
      { "genreId": 10, "movieId": 133 },
    
      { "genreId": 16, "movieId": 134 },
      { "genreId": 10, "movieId": 134 },
      { "genreId": 29, "movieId": 134 },
      { "genreId": 2, "movieId": 134 },
    
      { "genreId": 6, "movieId": 135 },
      { "genreId": 21, "movieId": 135 },
      { "genreId": 10, "movieId": 135 },
    
      { "genreId": 2, "movieId": 136 },
      { "genreId": 21, "movieId": 136 },
      { "genreId": 6, "movieId": 136 },
    
      { "genreId": 9, "movieId": 137 },
      { "genreId": 6, "movieId": 137 },
      { "genreId": 24, "movieId": 137 },
      { "genreId": 16, "movieId": 137 },
    
      { "genreId": 9, "movieId": 138 },
      { "genreId": 16, "movieId": 138 },
      { "genreId": 7, "movieId": 138 },
    
      { "genreId": 16, "movieId": 139 },
      { "genreId": 7, "movieId": 139 },
      { "genreId": 6, "movieId": 139 },
    
      { "genreId": 16, "movieId": 140 },
      { "genreId": 7, "movieId": 140 },
      { "genreId": 10, "movieId": 140 },
    
      { "genreId": 9, "movieId": 141 },
      { "genreId": 7, "movieId": 141 },
      { "genreId": 16, "movieId": 141 },
    
      { "genreId": 16, "movieId": 142 },
      { "genreId": 5, "movieId": 142 },
    
      { "genreId": 7, "movieId": 143 },
      { "genreId": 10, "movieId": 143 },
      { "genreId": 32, "movieId": 143 },
    
      { "genreId": 10, "movieId": 144 },
      { "genreId": 29, "movieId": 144 },
      { "genreId": 16, "movieId": 144 },
    
      { "genreId": 16, "movieId": 145 },
      { "genreId": 7, "movieId": 145 },
      { "genreId": 32, "movieId": 145 },
    
      { "genreId": 16, "movieId": 146 },
      { "genreId": 9, "movieId": 146 },
      { "genreId": 7, "movieId": 146 },
    
      { "genreId": 5, "movieId": 147 },
      { "genreId": 16, "movieId": 147 },
      { "genreId": 7, "movieId": 147 },
    
      { "genreId": 6, "movieId": 148 },
      { "genreId": 5, "movieId": 148 },
      { "genreId": 21, "movieId": 148 },
    
      { "genreId": 5, "movieId": 149 },
      { "genreId": 16, "movieId": 149 },
      { "genreId": 11, "movieId": 149 },
    
      { "genreId": 16, "movieId": 150 },
      { "genreId": 29, "movieId": 150 },
      { "genreId": 9, "movieId": 150 },
    
      { "genreId": 17, "movieId": 151 },
      { "genreId": 7, "movieId": 151 },
      { "genreId": 5, "movieId": 151 },
    
      { "genreId": 33, "movieId": 152 },
      { "genreId": 16, "movieId": 152 },
      { "genreId": 7, "movieId": 152 }
    ]);

    await queryInterface.bulkInsert('Seasons', [
      {
        "id": 1, 
        "season_number": 1,
        "title": "2001",
        "overview": "Harry discovers he is a wizard on his 11th birthday and begins his magical education at Hogwarts School of Witchcraft and Wizardry.",
        "release_date": "2001-11-16",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/I/715YKSv-XuL.jpg",
        "backdrop_url": "https://wallpapercat.com/w/full/8/2/3/720543-3840x2160-desktop-4k-the-sorcerers-stone-background.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=VyHV0BRtdxo&t=2s",
        "status": "completed",
        "runtime": 152,
        "movieId": 1,
        "createdAt": "2001-11-16T00:00:00+00:00",
        "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
        "id": 2,
        "season_number": 2,
        "title": "2002",
        "overview": "Harry returns for his second year at Hogwarts where a dark force has begun terrorizing the school.",
        "release_date": "2002-11-15",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNGJhM2M2MWYtZjIzMC00MDZmLThkY2EtOWViMDhhYjRhMzk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://wallpapercat.com/w/full/a/6/b/720760-3840x2160-desktop-4k-the-chamber-of-secrets-wallpaper-photo.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=5SnFfsi1Zj8",
        "status": "completed",
        "runtime": 161,
        "movieId": 2,
        "createdAt": "2002-11-15T00:00:00+00:00",
        "updatedAt": "2002-11-15T00:00:00+00:00"
      },
      {
        "id": 3,
        "season_number": 3,
        "title": "2004",
        "overview": "In his third year, Harry learns dangerous truths as escaped prisoner Sirius Black hunts him.",
        "release_date": "2004-06-04",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_.jpg",
        "backdrop_url": "https://wallpapercat.com/w/full/b/f/e/721074-2000x1191-desktop-hd-the-prisoner-of-azkaban-background-photo.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=lAxgztbYDbs",
        "status": "completed",
        "runtime": 142,
        "movieId": 3,
        "createdAt": "2004-06-04T00:00:00+00:00",
        "updatedAt": "2004-06-04T00:00:00+00:00"
      },
      {
        "id": 4,
        "season_number": 4,
        "title": "2005",
        "overview": "Harry competes in the Triwizard Tournament and faces grave dangers brewing at Hogwarts.",
        "release_date": "2005-11-18",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/I/71opdcUCGjL.jpg",
        "backdrop_url": "https://wallpapercat.com/w/full/3/e/a/721157-3840x2160-desktop-4k-the-goblet-of-fire-background.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=3EGojp4Hh6I",
        "status": "completed",
        "runtime": 157,
        "movieId": 4,
        "createdAt": "2005-11-18T00:00:00+00:00",
        "updatedAt": "2005-11-18T00:00:00+00:00"
      },
      {
        "id": 5,
        "season_number": 5,
        "title": "2007",
        "overview": "Harry returns to Hogwarts and finds the school under new oppressive rule amid growing threats.",
        "release_date": "2007-07-11",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BYWJmM2M1YzItMjY1Ni00YzRmLTg5YWYtNDFmNTJjNzQ0ODkyXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://images7.alphacoders.com/674/674450.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=LLAaW1EgyY8",
        "status": "completed",
        "runtime": 138,
        "movieId": 5,
        "createdAt": "2007-07-11T00:00:00+00:00",
        "updatedAt": "2007-07-11T00:00:00+00:00"
      },
      {
        "id": 6,
        "season_number": 6,
        "title": "2009",
        "overview": "Harry discovers Voldemort's dark past and must confront betrayal and tragedy at Hogwarts.",
        "release_date": "2009-07-15",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_.jpg",
        "backdrop_url": "https://images6.alphacoders.com/113/1130103.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=tAiy66Xrsz4",
        "status": "completed",
        "runtime": 153,
        "movieId": 6,
        "createdAt": "2009-07-15T00:00:00+00:00",
        "updatedAt": "2009-07-15T00:00:00+00:00"
      },
      {
        "id": 7,
        "season_number": 1,
        "title": "Season 1",
        "overview": "After being bitten by a genetically‑altered spider, Peter Parker gains spider‑like abilities and vows “With great power comes great responsibility.”",
        "release_date": "2002-05-03",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://i.pinimg.com/736x/74/6d/79/746d79553f55de04e8f9560cb35d2e41.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=t06RUxPbp_c",
        "status": "completed",
        "runtime": 116,
        "movieId": 7,
        "createdAt": "2002-05-03T00:00:00+00:00",
        "updatedAt": "2002-05-03T00:00:00+00:00"
      },
      {
        "id": 8,
        "season_number": 2,
        "title": "Season 2",
        "overview": "Peter Parker struggles to balance his personal life with his responsibilities as Spider-Man, while facing newcomer Doctor Octopus.",
        "release_date": "2004-06-30",
        "poster_url": "https://m.media-amazon.com/images/I/71tuU9YOSgL._AC_SL1000_.jpg",
        "backdrop_url": "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/2028edeaf4c0b60142550a3d6e024b6009853ceb9f51591e.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=1s9Yln0YwCw",
        "status": "completed",
        "runtime": 127,
        "movieId": 8,
        "createdAt": "2004-06-30T00:00:00+00:00",
        "updatedAt": "2004-06-30T00:00:00+00:00"
      },
      {
        "id": 9,
        "season_number": 3,
        "title": "Season 3",
        "overview": "Peter Parker faces new threats including Sandman and Venom, and struggles with his own darker impulses.",
        "release_date": "2007-05-04",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BODE2NzNhMDctYjUzMC00Y2M5LWI2Y2EtODJkZTFjN2Y5ODlmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://images5.alphacoders.com/131/1314090.jpeg",
        "trailer_url": "https://www.youtube.com/watch?v=e5wUilOeOmg",
        "status": "completed",
        "runtime": 139,
        "movieId": 9,
        "createdAt": "2007-05-04T00:00:00+00:00",
        "updatedAt": "2007-05-04T00:00:00+00:00"
      },
      {
        "id": 10,
        "season_number": 1,
        "title": "Season 1",
        "overview": "The X-Men must oppose a terrorist organization of mutants who want to forcefully mutate humans into disposing of those they see as threats.",
        "release_date": "2000-07-14",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNzNjZjQwOTAtNWQ3NC00MmJlLThlZDEtZmUyMWQ3NmE4Y2Y5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://i.ebayimg.com/images/g/L4EAAOSw76heoswP/s-l1200.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=VNxwlx6etXI",
        "status": "completed",
        "runtime": 104,
        "movieId": 10,
        "createdAt": "2000-07-14T00:00:00+00:00",
        "updatedAt": "2000-07-14T00:00:00+00:00"
      },
      {
        "id": 11,
        "season_number": 2,
        "title": "X-Men United",
        "overview": "The X-Men and Magneto form uneasy alliance to rescue Professor X and combat a military scientist who plans to destroy all mutants.",
        "release_date": "2003-05-02",
        "poster_url": "https://www.closeup-shop.com/media/oart_0/oart_x/oart_14598/1023100_G765922.JPG",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpT4FnuNXpJsD97bMJ9EASTIvTSf5PDqZoA&s",
        "trailer_url": "https://www.youtube.com/watch?v=KjzPi5hfv9cE",
        "status": "completed",
        "runtime": 134,
        "movieId": 11,
        "createdAt": "2003-05-02T00:00:00+00:00",
        "updatedAt": "2003-05-02T00:00:00+00:00"
      },
      {
        "id": 12,
        "season_number": 3,
        "title": "The Last Stand",
        "overview": "The X-Men face a cure for mutation which divides the mutant community and resurrects the Phoenix with devastating consequences.",
        "release_date": "2006-05-26",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMThmOWE3OWEtODJmNC00ZDEzLTk4MWUtNzEzM2RiNmJiZmU3XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://images3.alphacoders.com/119/1190152.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=ZQ0v5dXbw7M",
        "status": "completed",
        "runtime": 104,
        "movieId": 12,
        "createdAt": "2006-05-26T00:00:00+00:00",
        "updatedAt": "2006-05-26T00:00:00+00:00"
      },
      {
        "id": 13,
        "season_number": 4,
        "title": "Origins: Wolverine",
        "overview": "The film explores Wolverine’s early years and origin story, including his time with Team X and how he became Weapon X.",
        "release_date": "2009-05-01",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZjQwOGEzNjUtNDgwYS00NzUzLWJhZjAtNmFlNzY2YTQyOTllXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://comicbookmovie.com/images/wallpaper/150_505.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=8TQ-gD4UCmI",
        "status": "completed",
        "runtime": 107,
        "movieId": 13,
        "createdAt": "2009-05-01T00:00:00+00:00",
        "updatedAt": "2009-05-01T00:00:00+00:00"
      },
      {
        "id": 14,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Frodo Baggins and the Fellowship set out on a journey to destroy the One Ring.",
        "release_date": "2001-12-19",
        "poster_url": "https://m.media-amazon.com/images/I/81EBp0vOZZL.jpg",
        "backdrop_url": "https://wallpapercat.com/w/full/e/8/1/565453-3840x2160-desktop-4k-the-fellowship-of-the-ring-wallpaper-image.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=V75dMMIW2B4",
        "status": "completed",
        "runtime": 178,
        "movieId": 14,
        "createdAt": "2001-12-19T00:00:00+00:00",
        "updatedAt": "2001-12-19T00:00:00+00:00"
      },
      {
        "id": 15,
        "season_number": 2,
        "title": "Season 1",
        "overview": "The Fellowship faces new dangers as they continue their quest, with the war for Middle-earth escalating.",
        "release_date": "2002-12-18",
        "poster_url": "https://filmartgallery.com/cdn/shop/products/The-Lord-of-the-Rings-The-Two-Towers-Vintage-Movie-Poster-Original_b4aeb761.jpg?v=1741721037",
        "backdrop_url": "https://wallpapercat.com/w/full/b/7/1/565670-3840x2160-desktop-4k-the-two-towers-background-image.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=LbfMDwc4azU",
        "status": "completed",
        "runtime": 179,
        "movieId": 15,
        "createdAt": "2002-12-18T00:00:00+00:00",
        "updatedAt": "2002-12-18T00:00:00+00:00"
      },
      {
        "id": 16,
        "season_number": 3,
        "title": "Season 1",
        "overview": "Frodo and Sam reach Mordor and face the final challenge before the One Ring can be destroyed.",
        "release_date": "2003-12-17",
        "poster_url": "https://m.media-amazon.com/images/I/71Xle4-8u+L.jpg",
        "backdrop_url": "https://images7.alphacoders.com/112/1123161.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=r5X-hFf6Bwo",
        "status": "completed",
        "runtime": 201,
        "movieId": 16,
        "createdAt": "2003-12-17T00:00:00+00:00",
        "updatedAt": "2003-12-17T00:00:00+00:00"
      },
      {
        "id": 17,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Blacksmith Will Turner joins forces with eccentric pirate Captain Jack Sparrow to save his love, the governor’s daughter, from cursed pirates.",
        "release_date": "2003-07-09",
        "poster_url": "https://m.media-amazon.com/images/I/71zji3aER6L.jpg",
        "backdrop_url": "https://images6.alphacoders.com/695/thumb-1920-695391.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=naQr0uTrH_s",
        "status": "completed",
        "runtime": 143,
        "movieId": 17,
        "createdAt": "2003-07-09T00:00:00+00:00",
        "updatedAt": "2003-07-09T00:00:00+00:00"
      },
      {
        "id": 18,
        "season_number": 2,
        "title": "Season 1",
        "overview": "Jack Sparrow races to recover the heart of Davy Jones to avoid enslaving his soul to Jones’ service.",
        "release_date": "2006-07-07",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://images3.alphacoders.com/812/thumb-1920-81279.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=SNA-Ezahmok",
        "status": "completed",
        "runtime": 151,
        "movieId": 18,
        "createdAt": "2006-07-07T00:00:00+00:00",
        "updatedAt": "2006-07-07T00:00:00+00:00"
      },
      {
        "id": 19,
        "season_number": 3,
        "title": "Season 1",
        "overview": "Captain Jack Sparrow and his allies prepare for a final battle to save his friend and the soul of piracy itself.",
        "release_date": "2007-05-25",
        "poster_url": "https://lh5.googleusercontent.com/proxy/pxANAn-01H1DdWhURwAuJ7fGU2ajvLgsk1a65iZOq2edyNBW2NJ6yVtVzT9SDSefgqLISsWM5wQlyqxEvQ8PqpTHwjPfywCbLtQD3aN1q2vIIYm3nO_PBSB_V_Pz3cSvCqXauHs6JWg",
        "backdrop_url": "https://images8.alphacoders.com/669/thumb-1920-669878.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=HKSZtp_OGHY",
        "status": "completed",
        "runtime": 169,
        "movieId": 19,
        "createdAt": "2007-05-25T00:00:00+00:00",
        "updatedAt": "2007-05-25T00:00:00+00:00"
      },
      {
        "id": 20,
        "season_number": 1,
        "title": "Identity",
        "overview": "A man with amnesia must discover who he is while evading assassination attempts and uncovering a secret conspiracy.",
        "release_date": "2002-06-14",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BYTk1ZTcyMWMtMWUxYS00MmEzLTlmODYtOTk1MGRjOTg1ZjlmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://images3.alphacoders.com/674/674127.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=FpKaB5dvQ4g",
        "status": "completed",
        "runtime": 119,
        "movieId": 20,
        "createdAt": "2002-06-14T00:00:00+00:00",
        "updatedAt": "2002-06-14T00:00:00+00:00"
      },
      {
        "id": 21,
        "season_number": 2,
        "title": "Supremacy",
        "overview": "Jason Bourne is framed for a CIA operation gone wrong and must uncover the conspiracy while pursued by assassins.",
        "release_date": "2004-07-23",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZTU4ZDgyYjgtODA0Mi00MmE3LTgzYWQtZjc1YTFiMTczZTQ3XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://images6.alphacoders.com/339/339214.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=Y-HqyyfBbSo",
        "status": "completed",
        "runtime": 108,
        "movieId": 21,
        "createdAt": "2004-07-23T00:00:00+00:00",
        "updatedAt": "2004-07-23T00:00:00+00:00"
      },
      {
        "id": 22,
        "season_number": 3,
        "title": "Ultimatum",
        "overview": "Jason Bourne continues his global journey to learn about his past still pursued by agents and men hunting him.",
        "release_date": "2007-08-03",
        "poster_url": "https://m.media-amazon.com/images/I/51s7RrmDwFL._UF894,1000_QL80_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSS8dW6T3SzRodyQb0Tm3D_9sWlHNh3I5lg&s",
        "trailer_url": "https://www.youtube.com/watch?v=ohkW_xbPl9A",
        "status": "completed",
        "runtime": 115,
        "movieId": 22,
        "createdAt": "2007-08-03T00:00:00+00:00",
        "updatedAt": "2007-08-03T00:00:00+00:00"
      },
      {
        "id": 23,
        "season_number": 1,
        "title": "1",
        "overview": "An ogre embarks on a quest to rescue Princess Fiona, far from the aesthetic villagers’ expectations.",
        "release_date": "2001-05-18",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://image.tmdb.org/t/p/original/w0eKUOEog2ImtktCHAMUZws8qif.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=CwXOrWvPBPk",
        "status": "completed",
        "runtime": 90,
        "movieId": 23,
        "createdAt": "2001-05-18T00:00:00+00:00",
        "updatedAt": "2001-05-18T00:00:00+00:00"
      },
      {
        "id": 24,
        "season_number": 2,
        "title": "2",
        "overview": "Shrek and Fiona meet Fiona’s parents but trouble follows when a scheming Fairy Godmother sets her sights on the kingdom.",
        "release_date": "2004-05-19",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMzNmNjQ1NmUtNzhiZS00YWE2LTg4N2ItZTA2ODdmOTMwOTQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://wallpapersok.com/images/hd/shrek-2-poster-scenery-x9c7vjfd4v9j5r36.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=oW-vf54cUes",
        "status": "completed",
        "runtime": 93,
        "movieId": 24,
        "createdAt": "2004-05-19T00:00:00+00:00",
        "updatedAt": "2004-05-19T00:00:00+00:00"
      },
      {
        "id": 25,
        "season_number": 3,
        "title": "the Third",
        "overview": "Shrek sets off to find the rightful heir to the throne of Far Far Away after King Harold falls ill.",
        "release_date": "2007-05-18",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BOTgyMjc3ODk2MV5BMl5BanBnXkFtZTcwMjY0MjEzMw@@._V1_.jpg",
        "backdrop_url": "https://live.staticflickr.com/1259/557916264_bff3ea332c_b.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=_MoIr7811Bs",
        "status": "completed",
        "runtime": 93,
        "movieId": 25,
        "createdAt": "2007-05-18T00:00:00+00:00",
        "updatedAt": "2007-05-18T00:00:00+00:00"
      },
      {
        "id": 26,
        "season_number": 4,
        "title": "Forever After",
        "overview": "Shrek makes a deal with Rumpelstiltskin that changes everything, sending him to a twisted version of his world.",
        "release_date": "2010-05-21",
        "poster_url": "https://m.media-amazon.com/images/I/718yIvZosHL.jpg",
        "backdrop_url": "https://wallpapers.com/images/hd/shrek-forever-after-lead-characters-wo7zw4pts2xt5wws.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=Ma9oseKpj9g",
        "status": "completed",
        "runtime": 93,
        "movieId": 26,
        "createdAt": "2010-05-21T00:00:00+00:00",
        "updatedAt": "2010-05-21T00:00:00+00:00"
      },
      {
        "id": 27,
        "season_number": 1,
        "title": "Season 1",
        "overview": "The war between Autobots and Decepticons reaches Earth, where young Sam Witwicky becomes the key to their conflict.",
        "release_date": "2007-07-03",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZjM3ZDA2YmItMzhiMi00ZGI3LTg3ZGQtOTk3Nzk0MDY0ZDZhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://image.tmdb.org/t/p/original/77P56ZcL8M9Cw7FIptMIGjhNJoj.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=v8ItGrI-Ou0",
        "status": "completed",
        "runtime": 144,
        "movieId": 27,
        "createdAt": "2007-07-03T00:00:00+00:00",
        "updatedAt": "2007-07-03T00:00:00+00:00"
      },
      {
        "id": 28,
        "season_number": 2,
        "title": "Revenge of the Fallen",
        "overview": "The Autobots join forces with humans as a new evil threatens to destroy Earth— the Fallen has awakened.",
        "release_date": "2009-06-24",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNjk4OTczOTk0NF5BMl5BanBnXkFtZTcwNjQ0NzMzMw@@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx3peLXlHKPbkYnGdi_dXHOIqXpto8arpOBg&s",
        "trailer_url": "https://www.youtube.com/watch?v=fnXzKwUgDhg",
        "status": "completed",
        "runtime": 150,
        "movieId": 28,
        "createdAt": "2009-06-24T00:00:00+00:00",
        "updatedAt": "2009-06-24T00:00:00+00:00"
      },
      {
        "id": 29,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Bruce Wayne becomes Batman to fight crime and corruption in Gotham City after being trained by Ra’s al Ghul and the League of Shadows.",
        "release_date": "2005-06-15",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BODIyMDdhNTgtNDlmOC00MjUxLWE2NDItODA5MTdkNzY3ZTdhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://images2.alphacoders.com/361/36102.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=neY2xVmOfUM",
        "status": "completed",
        "runtime": 140,
        "movieId": 29,
        "createdAt": "2005-06-15T00:00:00+00:00",
        "updatedAt": "2005-06-15T00:00:00+00:00"
      },
      {
        "id": 30,
        "season_number": 2,
        "title": "Season 2",
        "overview": "Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice when the Joker emerges.",
        "release_date": "2008-07-18",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://wallpapercat.com/w/full/e/5/1/37793-3840x2160-desktop-4k-the-dark-knight-wallpaper-photo.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=EXeTwQWrcwY&t=4s",
        "status": "completed",
        "runtime": 152,
        "movieId": 30,
        "createdAt": "2008-07-18T00:00:00+00:00",
        "updatedAt": "2008-07-18T00:00:00+00:00"
      },
      {
        "id": 31,
        "season_number": 1,
        "title": "1",
        "overview": "After being kidnapped, billionaire Tony Stark builds a high-tech suit to escape and becomes the armored hero Iron Man.",
        "release_date": "2008-05-02",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://image.tmdb.org/t/p/original/cyecB7godJ6kNHGONFjUyVN9OX5.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=8ugaeA-nMTc",
        "status": "completed",
        "runtime": 126,
        "movieId": 31,
        "createdAt": "2008-05-02T00:00:00+00:00",
        "updatedAt": "2008-05-02T00:00:00+00:00"
      },
      {
        "id": 32,
        "season_number": 2,
        "title": "2",
        "overview": "Tony Stark struggles with his identity and faces a powerful new enemy, while revealing his Iron Man persona to the public.",
        "release_date": "2010-05-07",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BYWYyOGQzOGYtMGQ1My00ZWYxLTgzZjktZWYzN2IwYjkxYzM0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6h4QhWIr2L6t2aQOHeXbU85YZgjnS_ocR_g&s",
        "trailer_url": "https://www.youtube.com/watch?v=wKtcmiifycU",
        "status": "completed",
        "runtime": 124,
        "movieId": 32,
        "createdAt": "2010-05-07T00:00:00+00:00",
        "updatedAt": "2010-05-07T00:00:00+00:00"
      },
      {
        "id": 33,
        "season_number": 1,
        "title": "Season 1",
        "overview": "A widower seeks a new wife via a conducting a fake audition—only to find the woman he chooses harbors a terrifying and deadly secret.",
        "release_date": "2000-03-03",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZjJiZjJiNDYtZmJmYi00ZWIzLTljZGYtNjlmNjEwYTJmMmE4XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://a.ltrbxd.com/resized/sm/upload/qc/fp/8g/nx/audition-1200-1200-675-675-crop-000000.jpg?v=3b73fff95d",
        "trailer_url": "https://www.youtube.com/watch?v=EBQHp2__AVQ",
        "status": "completed",
        "runtime": 113,
        "movieId": 33,
        "createdAt": "2000-03-03T00:00:00+00:00",
        "updatedAt": "2000-03-03T00:00:00+00:00"
      },
      {
        "id": 34,
        "season_number": 1,
        "title": "Season 1",
        "overview": "In a dystopian alternate present-day Japan, high school students are randomly selected to kill each other until only one survivor remains.",
        "release_date": "2000-12-16",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNjdlYzJlYzMtMWU3Yi00Y2FjLWJhYmUtNjM3YzdjYzZkOWMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://www.alternateending.com/wp-content/uploads/2019/12/zIunndG2AYbZ7CIAwNb6SOkOb7A.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=N0p1t-dC7Ko",
        "status": "completed",
        "runtime": 114,
        "movieId": 34,
        "createdAt": "2000-12-16T00:00:00+00:00",
        "updatedAt": "2000-12-16T00:00:00+00:00"
      },
      {
        "id": 35,
        "season_number": 1,
        "title": "Season 1",
        "overview": "A mysterious shootout in the DMZ between North and South Korean soldiers prompts an investigation amid interpersonal tensions.",
        "release_date": "2000-09-20",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTI1NDA4NTMyN15BMl5BanBnXkFtZTYwNTA2ODc5._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://image.tmdb.org/t/p/original/tAxFr4RkDcRzTqRgZ0pDNvrSTrN.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=PAdyN74BZ2I&t=10s",
        "status": "completed",
        "runtime": 112,
        "movieId": 35,
        "createdAt": "2000-09-20T00:00:00+00:00",
        "updatedAt": "2000-09-20T00:00:00+00:00"
      },
      {
        "id": 36,
        "season_number": 1,
        "title": "Season 1",
        "overview": "In a dystopian future, players enter a virtual reality war game to escape bleak reality—but the line between game and life blurs dangerously.",
        "release_date": "2001-01-20",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZmY1ZDRmYTktZjVlMi00MzdiLThkZmMtZjJkMTMyZWVmZWExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwJ-vhL02OSMVrlu3nYhcEsABs6R7qxVUdg&s",
        "trailer_url": "https://www.youtube.com/watch?v=KXRXclj99Xg",
        "status": "completed",
        "runtime": 106,
        "movieId": 36,
        "createdAt": "2001-01-20T00:00:00+00:00",
        "updatedAt": "2001-01-20T00:00:00+00:00"
      },
      {
        "id": 37,
        "season_number": 1,
        "title": "Season 1",
        "overview": "A quirky young woman unexpectedly enters a man's life; together they meet love, comedy, and heartbreak in Seoul.",
        "release_date": "2001-07-27",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMjM2NTYxMTE3OV5BMl5BanBnXkFtZTgwNDgwNjgwMzE@._V1_.jpg",
        "backdrop_url": "https://www.acmodasi.in/amdb/images/movie/2/o/my-sassy-girl-2001-kFC3qj.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=4lnyW3vIGvI",
        "status": "completed",
        "runtime": 110,
        "movieId": 37,
        "createdAt": "2001-07-27T00:00:00+00:00",
        "updatedAt": "2001-07-27T00:00:00+00:00"
      },
      {
        "id": 38,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Two detectives in 1980s rural Korea struggle to solve a series of brutal serial killings against a backdrop of police incompetence.",
        "release_date": "2003-04-24",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BYmRjOWE5NmMtYTdkYS00ODFlLWJiMTMtYzE2NDZlZjlkZDQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK-JYqTIHCbb5SWbeQpPutmlWLtQvGjIsM0Q&s",
        "trailer_url": "https://www.youtube.com/watch?v=-YvWR3Bds0A",
        "status": "completed",
        "runtime": 132,
        "movieId": 38,
        "createdAt": "2003-04-24T00:00:00+00:00",
        "updatedAt": "2003-04-24T00:00:00+00:00"
      },
      {
        "id": 39,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Two sisters return to their family home, but mysterious and terrifying events unfold involving their stepmother.",
        "release_date": "2003-06-13",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTEwMTYwMGQtY2ZhNi00Y2QwLWIxYjktMGY1Mzk4YmE4ODY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://film-grab.com/wp-content/uploads/2015/09/10-34.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=GoUKtpTBqCw",
        "status": "completed",
        "runtime": 115,
        "movieId": 39,
        "createdAt": "2003-06-13T00:00:00+00:00",
        "updatedAt": "2003-06-13T00:00:00+00:00"
      },
      {
        "id": 40,
        "season_number": 1,
        "title": "Season 1",
        "overview": "A monk and his apprentice live and learn through the cycle of seasons in a floating monastery, exploring life’s stages.",
        "release_date": "2003-09-19",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTI0ODMwOTIxOV5BMl5BanBnXkFtZTcwMzE2NDUyMQ@@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://screenmusings.org/movie/blu-ray/Spring-Summer-Fall-Winter-and-Spring/images/Spring-Summer-Fall-Winter-and-Spring-013.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=3rIgudJbHek",
        "status": "completed",
        "runtime": 103,
        "movieId": 40,
        "createdAt": "2003-09-19T00:00:00+00:00",
        "updatedAt": "2003-09-19T00:00:00+00:00"
      },
      {
        "id": 41,
        "season_number": 1,
        "title": "Season 1",
        "overview": "After being inexplicably imprisoned for 15 years, a man is completed and given five days to find his captor.",
        "release_date": "2003-11-21",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://images3.alphacoders.com/112/1122047.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=hBNBpNcuQHI",
        "status": "completed",
        "runtime": 120,
        "movieId": 41,
        "createdAt": "2003-11-21T00:00:00+00:00",
        "updatedAt": "2003-11-21T00:00:00+00:00"
      },
      {
        "id": 42,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Three homeless people in Tokyo find an abandoned baby on Christmas Eve and set out to find its parents.",
        "release_date": "2003-11-08",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNmEzNDcwYzQtMzM0Zi00YWYxLTkzOWEtY2Y0ZTJiNDVjM2NkXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7fe9585d-a0e1-4125-a5b5-5665db82ce87_1132x675.png",
        "trailer_url": "https://www.youtube.com/watch?v=ZL_2E-HfIZY",
        "status": "completed",
        "runtime": 92,
        "movieId": 42,
        "createdAt": "2003-11-08T00:00:00+00:00",
        "updatedAt": "2003-11-08T00:00:00+00:00"
      },
      {
        "id": 43,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Four children are left to fend for themselves in a small Tokyo apartment, hidden from the world by their mother’s disappearance.",
        "release_date": "2004-08-07",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BYTBmMTY2ZmMtNWY2Ni00Y2I0LTgyMmUtN2ZiODdjYjExZWZhXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://m.media-amazon.com/images/M/MV5BNjVhMmExOWQtNjRmZi00MGFmLWE1YTAtOWE5YzUxMTlmNjE4XkEyXkFqcGc@._V1_.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=IvHnibXMpGk",
        "status": "completed",
        "runtime": 141,
        "movieId": 43,
        "createdAt": "2004-08-07T00:00:00+00:00",
        "updatedAt": "2004-08-07T00:00:00+00:00"
      },
      {
        "id": 44,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Sophie, transformed into an elderly woman by a witch’s curse, seeks out the wizard Howl and his magical, walking castle to break the spell.",
        "release_date": "2004-11-20",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTY1OTg0MjE3MV5BMl5BanBnXkFtZTcwNTUxMTkyMQ@@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://wallpapercat.com/w/full/6/4/7/2143021-1920x1080-desktop-1080p-howls-moving-castle-background-photo.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=iwROgK94zcM",
        "status": "completed",
        "runtime": 119,
        "movieId": 44,
        "createdAt": "2004-11-20T00:00:00+00:00",
        "updatedAt": "2004-11-20T00:00:00+00:00"
      },
      {
        "id": 45,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Set in 1958 Tokyo, a lonely ex-soldier and an orphaned girl struggle to find hope and happiness in post-war Japan.",
        "release_date": "2005-11-05",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNGM5Y2I0ODUtNGI0Ni00Y2ViLWI0MzEtZjY0ZjE5YWVkYWRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCkcygXc7aKR7aoctEv-6DmTEiqSfknBe3zQ&s",
        "trailer_url": "https://www.youtube.com/watch?v=5gdbJwf5Aww",
        "status": "completed",
        "runtime": 138,
        "movieId": 45,
        "createdAt": "2005-11-05T00:00:00+00:00",
        "updatedAt": "2005-11-05T00:00:00+00:00"
      },
      {
        "id": 46,
        "season_number": 1,
        "title": "Season 1",
        "overview": "A colorful but tragic chronicle of a woman’s life, full of dreams, regrets, and unexpected sorrow.",
        "release_date": "2006-05-27",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNmEwN2YwZjYtNDZhNC00YThjLTljYTktNDAxN2ZmM2FkMjEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://screenmusings.org/movie/blu-ray/Memories-of-Matsuko/images/Memories-of-Matsuko-107.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=14eEHsh8xQE",
        "status": "completed",
        "runtime": 133,
        "movieId": 46,
        "createdAt": "2006-05-27T00:00:00+00:00",
        "updatedAt": "2006-05-27T00:00:00+00:00"
      },
      {
        "id": 47,
        "season_number": 1,
        "title": "Season 1",
        "overview": "A monster emerges from Seoul’s Han River and a dysfunctional family bands together to rescue their youngest member.",
        "release_date": "2006-07-27",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTk3OTQ1NjUzNl5BMl5BanBnXkFtZTcwNTQyNzYzMQ@@._V1_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl71t53mVaN3vO4koFUXg1ZWnCtk4RNOGJjA&s",
        "trailer_url": "https://www.youtube.com/watch?v=xrLY0wO06l4",
        "status": "completed",
        "runtime": 119,
        "movieId": 47,
        "createdAt": "2006-07-27T00:00:00+00:00",
        "updatedAt": "2006-07-27T00:00:00+00:00"
      },
      {
        "id": 48,
        "season_number": 1,
        "title": "Season 1",
        "overview": "A recently widowed woman moves to her late husband’s hometown, facing grief, faith, and personal tragedy.",
        "release_date": "2007-05-24",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMjAzMDE5MDM5OV5BMl5BanBnXkFtZTgwMDE1NzE1MjE@._V1_.jpg",
        "backdrop_url": "https://image.tmdb.org/t/p/original/bJd4hoeLCQIqqZnyQ9W1Bh5dIY7.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=kOBEO96tJv8",
        "status": "completed",
        "runtime": 133,
        "movieId": 48,
        "createdAt": "2007-05-24T00:00:00+00:00",
        "updatedAt": "2007-05-24T00:00:00+00:00"
      },
      {
        "id": 49,
        "season_number": 1,
        "title": "Beginning of the End",
        "overview": "Childhood friends must reconnect as an apocalyptic cult surfaces, connected to their past imagination and promises.",
        "release_date": "2008-08-30",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTMxMzY4NDM2NV5BMl5BanBnXkFtZTcwMjA3MDYyMg@@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://img.rgstatic.com/content/movie/4f23e401-8c79-4cfd-94fc-3ce80a96fc92/backdrop-640.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=JY7_Ho56PcQ",
        "status": "completed",
        "runtime": 119,
        "movieId": 49,
        "createdAt": "2008-08-30T00:00:00+00:00",
        "updatedAt": "2008-08-30T00:00:00+00:00"
      },
      {
        "id": 50,
        "season_number": 1,
        "title": "Season 1",
        "overview": "A disgraced ex-detective tracks down a serial killer, but time is running out as the killer taunts him.",
        "release_date": "2008-02-14",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZGZjMDU2ODAtMzFlNy00MWU1LWE1YTEtYTFmZTE0ZmEyYjYxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnd0SNe_X76EWtBBYr7p9Njye4MvukW1boog&s",
        "trailer_url": "https://www.youtube.com/watch?v=t20zhdWoBzQ",
        "status": "completed",
        "runtime": 125,
        "movieId": 50,
        "createdAt": "2008-02-14T00:00:00+00:00",
        "updatedAt": "2008-02-14T00:00:00+00:00"
      },
      {
        "id": 51,
        "season_number": 1,
        "title": "Season 1",
        "overview": "A middle-school teacher seeks revenge after her daughter’s death through subtle psychological means against her students.",
        "release_date": "2010-06-05",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTY1NDQ1MzkzNF5BMl5BanBnXkFtZTcwNjYwNzg1NA@@._V1_.jpg",
        "backdrop_url": "https://image.tmdb.org/t/p/original/yrUUAazX95HeDPx4WGsrpfOwjWZ.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=sepHKPOwdwk",
        "status": "completed",
        "runtime": 106,
        "movieId": 51,
        "createdAt": "2010-06-05T00:00:00+00:00",
        "updatedAt": "2010-06-05T00:00:00+00:00"
      },
      {
        "id": 52,
        "season_number": 1,
        "title": "Season 1",
        "overview": "A quiet pawnshop owner goes on a violent rampage to rescue a kidnapped child he befriends.",
        "release_date": "2010-08-04",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTgzMTkxNjAxNV5BMl5BanBnXkFtZTgwMDU3MDE0MjE@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://sparks-mag.com/wp-content/uploads/2013/12/18kwn46wyw2lxjpg.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=8ykmoZaWLDI",
        "status": "completed",
        "runtime": 119,
        "movieId": 52,
        "createdAt": "2010-08-04T00:00:00+00:00",
        "updatedAt": "2010-08-04T00:00:00+00:00"
      },
      {
        "id": 53,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Chuyện tình cảm động giữa hai con người ở hai đầu chiến tuyến trong thời kỳ hậu chiến.",
        "release_date": "2000-09-15",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZmMwOGI4MjQtOGZjYi00ZWRmLTg0MDYtODAxMjIyZTIyYTIzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://png.pngtree.com/background/20230410/original/pngtree-grass-by-the-river-in-the-meadow-picture-image_2383374.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=kFqES_3lYTk",
        "status": "completed",
        "runtime": 95,
        "movieId": 53,
        "createdAt": "2000-09-15T00:00:00+00:00",
        "updatedAt": "2000-09-15T00:00:00+00:00"
      },
      {
        "id": 54,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Câu chuyện hình sự đầy kịch tính với các mối quan hệ phức tạp trong thế giới ngầm Việt Nam.",
        "release_date": "2001-11-10",
        "poster_url": "https://i.imgur.com/nRxQGi9.jpg",
        "backdrop_url": "https://i.ytimg.com/vi/TpYv3Cg5G0Y/maxresdefault.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=TpYv3Cg5G0Y",
        "status": "completed",
        "runtime": 100,
        "movieId": 54,
        "createdAt": "2001-11-10T00:00:00+00:00",
        "updatedAt": "2001-11-10T00:00:00+00:00"
      },
      {
        "id": 55,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Một hành trình gian khổ của những người chăn trâu vùng đồng bằng sông Cửu Long.",
        "release_date": "2004-09-01",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTY5NTczNTQ2M15BMl5BanBnXkFtZTcwNzcwMDIzMQ@@._V1_.jpg",
        "backdrop_url": "https://static.vieon.vn/vieplay-image/thumbnail_v4/2020/12/26/98ra0bnq_1920x1080_mualentrau.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=H8NS65wXZ5Y",
        "status": "completed",
        "runtime": 102,
        "movieId": 55,
        "createdAt": "2004-09-01T00:00:00+00:00",
        "updatedAt": "2004-09-01T00:00:00+00:00"
      },
      {
        "id": 56,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Phim về thế giới người mẫu với những khát vọng và cạm bẫy của sự nổi tiếng.",
        "release_date": "2004-12-03",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTI5YmY5NTMtMmVhNy00ZWNjLWI3ZjktYWJjYzE3ZTE1MWZlXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://m.media-amazon.com/images/M/MV5BZGVjZDRkYmItZTdmYi00NGRmLWI3ZGItYTY1ODA4MzAyOTE5XkEyXkFqcGc@._V1_.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=Kb2t_fPe0bw",
        "status": "completed",
        "runtime": 98,
        "movieId": 56,
        "createdAt": "2004-12-03T00:00:00+00:00",
        "updatedAt": "2004-12-03T00:00:00+00:00"
      },
      {
        "id": 57,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Một người lính trở về từ chiến tranh đối mặt với những ám ảnh và nỗi đau quá khứ.",
        "release_date": "2005-10-10",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BM2YwMGZhZDAtM2RkNC00MzE1LTk5NDMtNjYzYTYxNTZiMGM3XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://photo.znews.vn/w660/Uploaded/pcwvovbb/2017_07_24/cover1_1.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=-VrWshOIYQk",
        "status": "completed",
        "runtime": 100,
        "movieId": 57,
        "createdAt": "2005-10-10T00:00:00+00:00",
        "updatedAt": "2005-10-10T00:00:00+00:00"
      },
      {
        "id": 58,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Một câu chuyện cảm động về tuổi trẻ, tình yêu và thời kỳ hậu chiến tại Việt Nam.",
        "release_date": "2005-12-16",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZjNmZTEyNWQtN2U5MS00YmYyLWJhNDAtZjMzM2YwNzIzNTJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://static2.vieon.vn/vieplay-image/carousel_web_v4/2023/03/01/sfqupoo9_1920x1080-thoixavang_1920_1080.jpeg",
        "trailer_url": "https://www.youtube.com/watch?v=JzvDNb2ezQM",
        "status": "completed",
        "runtime": 96,
        "movieId": 58,
        "createdAt": "2005-12-16T00:00:00+00:00",
        "updatedAt": "2005-12-16T00:00:00+00:00"
      },
      {
        "id": 59,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Bối cảnh Việt Nam trong chiến tranh, câu chuyện cảm động về tình mẫu tử.",
        "release_date": "2006-10-20",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNDJlMTQxNTctNWYxNi00Y2Q3LWI1ZDctZGFmOWYxNmM2Yzg2XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRa-S1sIt7Nt1arjRhJ9L-_ZBshnDAGD7Ybg&s",
        "trailer_url": "https://www.youtube.com/watch?v=IqE7YuC1Qyw",
        "status": "completed",
        "runtime": 103,
        "movieId": 59,
        "createdAt": "2006-10-20T00:00:00+00:00",
        "updatedAt": "2006-10-20T00:00:00+00:00"
      },
      {
        "id": 60,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Một chiến sĩ yêu nước hoạt động trong thời Pháp thuộc, đấu tranh bảo vệ dân tộc.",
        "release_date": "2007-04-27",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMjA3NTY2NTExNV5BMl5BanBnXkFtZTcwMDI3NDU0MQ@@._V1_.jpg",
        "backdrop_url": "https://assets.glxplay.io/images/w700/title/the-rebel_web_backdrop_e479922c8d231ab5d37ef73cea1d6a0d.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=fldOtUA_1LA",
        "status": "completed",
        "runtime": 110,
        "movieId": 60,
        "createdAt": "2007-04-27T00:00:00+00:00",
        "updatedAt": "2007-04-27T00:00:00+00:00"
      },
      {
        "id": 61,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Chuyện tình yêu nhẹ nhàng giữa một cô gái mù và một chàng trai bất hạnh.",
        "release_date": "2007-11-16",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTY3MDY3NzI5MF5BMl5BanBnXkFtZTcwODQwMzc1MQ@@._V1_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDw_rJIspuh5p97CxW0FfaQNA78wuAKFeIg&s",
        "trailer_url": "https://www.youtube.com/watch?v=Vkjg8DDk62c",
        "status": "completed",
        "runtime": 92,
        "movieId": 61,
        "createdAt": "2007-11-16T00:00:00+00:00",
        "updatedAt": "2007-11-16T00:00:00+00:00"
      },
      {
        "id": 62,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Một phụ nữ Huế hi sinh bản thân để giữ danh dự gia đình, nhưng bị xã hội hiểu lầm.",
        "release_date": "2008-09-29",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BM2Q0NTVjODUtNDE5Ni00ZWVjLTlkZmYtYjRmMzk1ZDIwMDZjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://images.fptplay53.net/media/OTT/VOD/2024/07/09/trang-noi-day-gieng-fpt-play-1720510467611_Landscape.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=ICIAvJwp5Vs",
        "status": "completed",
        "runtime": 94,
        "movieId": 62,
        "createdAt": "2008-09-29T00:00:00+00:00",
        "updatedAt": "2008-09-29T00:00:00+00:00"
      },
      {
        "id": 63,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Một thiên thần chết phải lòng cô gái phàm trần và quyết định thay đổi định mệnh.",
        "release_date": "2008-01-25",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMzgwOWM0NDgtOWYwNy00MjU0LTgxY2QtMTcxZmVlMzE3Mjk2XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://images.fptplay53.net/media/OTT/VOD/2024/08/13/nu-hon-than-chet-fpt-play-1723536072724_Landscape.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=7SnKvqPGYpo",
        "status": "completed",
        "runtime": 95,
        "movieId": 63,
        "createdAt": "2008-01-25T00:00:00+00:00",
        "updatedAt": "2008-01-25T00:00:00+00:00"
      },
      {
          "id": 64,
          "season_number": 1,
          "title": "Season 1",
          "overview": "Một học sinh trung học bất ngờ gặp thần chết và cùng nhau trải qua những tình huống dở khóc dở cười.",
          "release_date": "2009-01-23",
          "poster_url": "https://m.media-amazon.com/images/M/MV5BMWE0YmRkOWItZjU4MC00NzMwLTg0MWUtOWRlNWUzYzhmMzhjXkEyXkFqcGc@._V1_.jpg",
          "backdrop_url": "https://assets.glxplay.io/images/w700/title/giai-cuu-than-chettitleOriginalVn_0f4238bf2820ccad6c80168e55a000b6.jpg",
          "trailer_url": "https://www.youtube.com/watch?v=96bJq2hPVVE",
          "status": "completed",
          "runtime": 100,
          "movieId": 64,
          "createdAt": "2009-01-23T00:00:00+00:00",
          "updatedAt": "2009-01-23T00:00:00+00:00"
        },
        {
          "id": 65,
          "season_number": 1,
          "title": "Season 1",
          "overview": "Một bộ phim tâm lý sâu sắc về sự cô đơn và những khát khao tình cảm trong xã hội hiện đại.",
          "release_date": "2009-10-09",
          "poster_url": "https://m.media-amazon.com/images/M/MV5BMjMwNTcwOTMxM15BMl5BanBnXkFtZTgwMTI5MzA2MDE@._V1_.jpg",
          "backdrop_url": "https://nld.mediacdn.vn/Images/Uploaded/Share/2009/09/04/8-9-choi%20voi_400x300.jpg",
          "trailer_url": "https://www.youtube.com/watch?v=K-61KVhx3iw",
          "status": "completed",
          "runtime": 104,
          "movieId": 65,
          "createdAt": "2009-10-09T00:00:00+00:00",
          "updatedAt": "2009-10-09T00:00:00+00:00"
        },
        {
          "id": 66,
          "season_number": 1,
          "title": "Season 1",
          "overview": "Câu chuyện nhẹ nhàng về tình yêu giữa một người lính và cô gái Sài Gòn trong thời gian nghỉ phép.",
          "release_date": "2009-12-04",
          "poster_url": "https://m.media-amazon.com/images/M/MV5BODM1NmJhZjgtN2M0ZS00ZTcxLTk3M2QtMTAxNjlkNzMwOTdjXkEyXkFqcGc@._V1_.jpg",
          "backdrop_url": "https://i.ytimg.com/vi/f4bZO6N-5rM/maxresdefault.jpg",
          "trailer_url": "https://www.youtube.com/watch?v=pmi_zwRY258",
          "status": "completed",
          "runtime": 97,
          "movieId": 66,
          "createdAt": "2009-12-04T00:00:00+00:00",
          "updatedAt": "2009-12-04T00:00:00+00:00"
        },
        {
          "id": 67,
          "season_number": 1,
          "title": "Season 1",
          "overview": "Hai chàng trai du học sinh Việt tại Mỹ phải đối mặt với lựa chọn giữa tình yêu và lý tưởng cuộc sống.",
          "release_date": "2009-03-06",
          "poster_url": "https://m.media-amazon.com/images/M/MV5BNzdmM2E5MzUtOWM2Zi00MmVhLWFjYTgtZTg4YjYyN2ExNDMwXkEyXkFqcGc@._V1_.jpg",
          "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-3VP2Q-QB13D-s7g7Ztst4p-TymYMuWksA&s",
          "trailer_url": "https://www.youtube.com/watch?v=Qj9EDnsT0QU",
          "status": "completed",
          "runtime": 106,
          "movieId": 67,
          "createdAt": "2009-03-06T00:00:00+00:00",
          "updatedAt": "2009-03-06T00:00:00+00:00"
        },
        {
          "id": 68,
          "season_number": 1,
          "title": "Season 1",
          "overview": "Chuyện tình hài hước giữa một đạo diễn và cô gái xinh đẹp thích nổi tiếng.",
          "release_date": "2009-02-13",
          "poster_url": "https://m.media-amazon.com/images/M/MV5BY2UyZmM1MGMtYjFkOS00OGZlLTk0NTUtNDMyYTc2YzE0NDZjXkEyXkFqcGc@._V1_.jpg",
          "backdrop_url": "https://i.ytimg.com/vi/7om3JZQtofI/hqdefault.jpg",
          "trailer_url": "https://www.youtube.com/watch?v=bdSzZyQazmg",
          "status": "completed",
          "runtime": 99,
          "movieId": 68,
          "createdAt": "2009-02-13T00:00:00+00:00",
          "updatedAt": "2009-02-13T00:00:00+00:00"
        },
        {
          "id": 69,
          "season_number": 1,
          "title": "Season 1",
          "overview": "Một nữ sát thủ mang bí danh Phượng Hoàng đỏ cùng hành trình tìm lại chính mình.",
          "release_date": "2009-12-18",
          "poster_url": "https://m.media-amazon.com/images/M/MV5BY2Y0ODhlMDMtZDAwYi00ZjgxLTllY2ItNDAxNzk2YzM4OTg5XkEyXkFqcGc@._V1_.jpg",
          "backdrop_url": "https://images.fptplay53.net/media/OTT/VOD/2024/05/20/bay-rong-fpt-play-1716202287984_Landscape.jpg",
          "trailer_url": "https://www.youtube.com/watch?v=K_XzuDju_E0",
          "status": "completed",
          "runtime": 102,
          "movieId": 69,
          "createdAt": "2009-12-18T00:00:00+00:00",
          "updatedAt": "2009-12-18T00:00:00+00:00"
        },
        {
          "id": 70,
          "season_number": 1,
          "title": "Season 1",
          "overview": "Câu chuyện cảm động về cuộc sống và tình cảm của một gia đình miền Tây Nam Bộ.",
          "release_date": "2010-10-22",
          "poster_url": "https://m.media-amazon.com/images/M/MV5BM2VmMzE0YmUtYjFhZC00MTNlLTljMDctZmQxMDdhOTcxZDA3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          "backdrop_url": "https://images.danet.vn/images/src/a55/68b/b192ee4583d228d9284a8f716d259b53.jpg",
          "trailer_url": "https://www.youtube.com/watch?v=OVxTkSorRyc",
          "status": "completed",
          "runtime": 105,
          "movieId": 70,
          "createdAt": "2010-10-22T00:00:00+00:00",
          "updatedAt": "2010-10-22T00:00:00+00:00"
        },
        {
          "id": 71,
          "season_number": 1,
          "title": "Season 1",
          "overview": "Một câu chuyện tình hài hước giữa một anh chàng nghèo và cô ca sĩ nổi tiếng.",
          "release_date": "2010-04-23",
          "poster_url": "https://m.media-amazon.com/images/M/MV5BZTg5NTgyODMtOTM5ZS00ZmRjLWI3YjktYzVjMjFkODRmMDIyXkEyXkFqcGc@._V1_.jpg",
          "backdrop_url": "https://images.fptplay53.net/media/OTT/VOD/2024/05/28/de-mai-tinh-fpt-play-1716890460445_Landscape.jpg",
          "trailer_url": "https://www.youtube.com/watch?v=JQPzSUqEBVQ",
          "status": "completed",
          "runtime": 100,
          "movieId": 71,
          "createdAt": "2010-04-23T00:00:00+00:00",
          "updatedAt": "2010-04-23T00:00:00+00:00"
        },
        {
          "id": 72,
          "season_number": 1,
          "title": "Season 1",
          "overview": "Một nhóm bạn trẻ tham gia chương trình truyền hình thực tế và những mối quan hệ dần nảy sinh.",
          "release_date": "2010-03-26",
          "poster_url": "https://m.media-amazon.com/images/M/MV5BNDQ3NWExOTgtMGM2Ny00ZTJiLWE4MmMtMjdjMDMzZTJhY2Y0XkEyXkFqcGc@._V1_.jpg",
          "backdrop_url": "https://i.ytimg.com/vi/3S-HepUqbv4/maxresdefault.jpg",
          "trailer_url": "https://www.youtube.com/watch?v=IQU2HF434pE",
          "status": "completed",
          "runtime": 96,
          "movieId": 72,
          "createdAt": "2010-03-26T00:00:00+00:00",
          "updatedAt": "2010-03-26T00:00:00+00:00"
        },
         {
        "id": 73,
        "season_number": 1,
        "title": "The First Avenger",
        "overview": "Steve Rogers, một thanh niên yếu ớt được biến đổi thành siêu chiến binh Captain America để chiến đấu chống lại HYDRA trong Thế chiến II.",
        "release_date": "2011-07-22",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNzUyM2YyY2MtNzNlMS00MWU5LTgxNjAtNzZlNmI2NjU2NDZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDiGjN1A-uCmJmrg8ixSFhiHNm-LDW3KhF4w&s",
        "trailer_url": "https://www.youtube.com/watch?v=qi5UTD7kEr0",
        "status": "completed",
        "runtime": 124,
        "movieId": 73,
        "createdAt": "2011-07-22T00:00:00+00:00",
        "updatedAt": "2011-07-22T00:00:00+00:00"
      },
      {
        "id": 74,
        "season_number": 2,
        "title": "The Winter Soldier",
        "overview": "Captain America tiếp tục thích nghi với thế giới hiện đại và hợp tác với Black Widow để vạch trần một âm mưu trong chính S.H.I.E.L.D.",
        "release_date": "2014-04-04",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNWY1NjFmNDItZDhmOC00NjI1LWE0ZDItMTM0MjBjZThiOTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://images.alphacoders.com/110/1108888.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=7SlILk2WMTI",
        "status": "completed",
        "runtime": 136,
        "movieId": 73,
        "createdAt": "2014-04-04T00:00:00+00:00",
        "updatedAt": "2014-04-04T00:00:00+00:00"
      },
      {
        "id": 75,
        "season_number": 3,
        "title": "Civil War",
        "overview": "Sau một nhiệm vụ thất bại, các siêu anh hùng bị chia rẽ về trách nhiệm và kiểm soát, dẫn đến một cuộc nội chiến nội bộ.",
        "release_date": "2016-05-06",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPnLgL7lhxTctNJtnr3TfMfUldzRwI15img&s",
        "trailer_url": "https://www.youtube.com/watch?v=dKrVegVI0Us",
        "status": "completed",
        "runtime": 147,
        "movieId": 73,
        "createdAt": "2016-05-06T00:00:00+00:00",
        "updatedAt": "2016-05-06T00:00:00+00:00"
      },
      {
        "id": 76,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Katniss Everdeen tình nguyện thay thế em gái mình để tham gia trò chơi sinh tử tại Panem.",
        "release_date": "2012-03-23",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMWI1OGM4YjQtNmIxNi00YmE2LWJkNTAtY2Q0YjU4NTI5NWQyXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVscAQPuOsZbG9IYy1tIO4IsLGUAQlrSmDyQ&s",
        "trailer_url": "https://www.youtube.com/watch?v=mfmrPu43DF8",
        "status": "completed",
        "runtime": 142,
        "movieId": 76,
        "createdAt": "2012-03-23T00:00:00+00:00",
        "updatedAt": "2012-03-23T00:00:00+00:00"
      },
      {
        "id": 77,
        "season_number": 2,
        "title": "Catching Fire",
        "overview": "Katniss và Peeta bị lôi kéo vào một vòng trò chơi chết người khác khi chính phủ muốn tiêu diệt họ.",
        "release_date": "2013-11-22",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTAyMjQ3OTAxMzNeQTJeQWpwZ15BbWU4MDU0NzA1MzAx._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://images6.alphacoders.com/499/499911.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=MkvUNfySGQU",
        "status": "completed",
        "runtime": 146,
        "movieId": 76,
        "createdAt": "2013-11-22T00:00:00+00:00",
        "updatedAt": "2013-11-22T00:00:00+00:00"
      },
      {
        "id": 78,
        "season_number": 3,
        "title": "Mockingjay – Part 1",
        "overview": "Katniss trở thành biểu tượng của cuộc cách mạng khi chiến đấu chống lại Capitol.",
        "release_date": "2014-11-21",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTcxNDI2NDAzNl5BMl5BanBnXkFtZTgwODM3MTc2MjE@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://images3.alphacoders.com/766/thumb-1920-766670.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=3PkkHsuMrho",
        "status": "completed",
        "runtime": 123,
        "movieId": 76,
        "createdAt": "2014-11-21T00:00:00+00:00",
        "updatedAt": "2014-11-21T00:00:00+00:00"
      },
      {
        "id": 79,
        "season_number": 4,
        "title": "Mockingjay – Part 2",
        "overview": "Cuộc chiến giữa quân nổi dậy và Capitol đạt đến đỉnh điểm khi Katniss đối mặt với Tổng thống Snow.",
        "release_date": "2015-11-20",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNjQzNDI2NTU1Ml5BMl5BanBnXkFtZTgwNTAyMDQ5NjE@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://images.alphacoders.com/691/691590.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=3zVaD7t39w8",
        "status": "completed",
        "runtime": 137,
        "movieId": 76,
        "createdAt": "2015-11-20T00:00:00+00:00",
        "updatedAt": "2015-11-20T00:00:00+00:00"
      },
      {
        "id": 80,
        "season_number": 1,
        "title": "Chapter 1",
        "overview": "Một sát thủ huyền thoại quay trở lại thế giới ngầm để trả thù cho cái chết của chú chó yêu quý.",
        "release_date": "2014-10-24",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://images2.alphacoders.com/550/550911.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=C0BMx-qxsP4",
        "status": "completed",
        "runtime": 101,
        "movieId": 80,
        "createdAt": "2014-10-24T00:00:00+00:00",
        "updatedAt": "2014-10-24T00:00:00+00:00"
      },
      {
        "id": 81,
        "season_number": 2,
        "title": "Chapter 2",
        "overview": "John Wick buộc phải quay lại thế giới ngầm do một lời thề máu từ quá khứ.",
        "release_date": "2017-02-10",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_.jpg",
        "backdrop_url": "https://i0.wp.com/thecinemafiles.com/wp-content/uploads/2017/02/John-Wick-2-Banner.jpg?fit=992%2C500&ssl=1",
        "trailer_url": "https://www.youtube.com/watch?v=XGk2EfbD_Ps",
        "status": "completed",
        "runtime": 122,
        "movieId": 80,
        "createdAt": "2017-02-10T00:00:00+00:00",
        "updatedAt": "2017-02-10T00:00:00+00:00"
      },
      {
        "id": 82,
        "season_number": 3,
        "title": "Chapter 3 – Parabellum",
        "overview": "John Wick bị săn đuổi bởi toàn bộ sát thủ thế giới sau khi bị khai trừ khỏi hội sát thủ.",
        "release_date": "2019-05-17",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BYjdlNWFlZjEtM2U0NS00ZWU5LTk1M2EtZmQxNWFiZjk0MGM5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQuHT3rfkfGaUevCKP5piIQyFIzqfJUXx3w&s",
        "trailer_url": "https://www.youtube.com/watch?v=M7XM597XO94",
        "status": "completed",
        "runtime": 131,
        "movieId": 80,
        "createdAt": "2019-05-17T00:00:00+00:00",
        "updatedAt": "2019-05-17T00:00:00+00:00"
      },
      {
        "id": 83,
        "season_number": 1,
        "title": "Ghost Protocol",
        "overview": "Ethan Hunt và nhóm IMF bị truy nã sau một cuộc điều tra sai lệch và phải ngăn chặn chiến tranh hạt nhân.",
        "release_date": "2011-12-16",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN35ec9PuIaFqTqoRSxhIIZLLsD2RP5kbbeQ&s",
        "trailer_url": "https://www.youtube.com/watch?v=EDGYVFZxsXQ",
        "status": "completed",
        "runtime": 133,
        "movieId": 83,
        "createdAt": "2011-12-16T00:00:00+00:00",
        "updatedAt": "2011-12-16T00:00:00+00:00"
      },
      {
        "id": 84,
        "season_number": 5,
        "title": "Rogue Nation",
        "overview": "Ethan Hunt và nhóm IMF đối đầu với tổ chức ngầm Syndicate đe dọa thế giới.",
        "release_date": "2015-07-31",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZjUwZjg2ZjAtY2RhZi00YmZjLTlhNGQtOWQwNDk1MjhhM2NhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://imageio.forbes.com/blogs-images/scottmendelson/files/2015/07/Mission-Impossible-Rogue-Nation-2015-Poster-HD-wallpaper.jpg?height=400&width=711&fit=bounds",
        "trailer_url": "https://www.youtube.com/watch?v=gOW_azQbOjw",
        "status": "completed",
        "runtime": 131,
        "movieId": 84,
        "createdAt": "2015-07-31T00:00:00+00:00",
        "updatedAt": "2015-07-31T00:00:00+00:00"
      },
      {
        "id": 85,
        "season_number": 6,
        "title": "Fallout",
        "overview": "Một nhiệm vụ thất bại buộc Ethan Hunt và nhóm IMF phải sửa chữa hậu quả để cứu thế giới.",
        "release_date": "2018-07-27",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVamF9jRMDuz5ZHzcAuqDcqpVUCs7FxaVOmw&s",
        "trailer_url": "https://www.youtube.com/watch?v=wb49-oV0F78",
        "status": "completed",
        "runtime": 147,
        "movieId": 85,
        "createdAt": "2018-07-27T00:00:00+00:00",
        "updatedAt": "2018-07-27T00:00:00+00:00"
      },
      {
        "id": 86,
        "season_number": 7,
        "title": "Dead Reckoning Part One",
        "overview": "Ethan Hunt phải đối mặt với một mối đe dọa toàn cầu mới và sự thật về quá khứ.",
        "release_date": "2023-07-12",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://images2.thanhnien.vn/528068263637045248/2023/7/10/paramount-1688979379266253858818.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=avz06PDqDbM",
        "status": "completed",
        "runtime": 163,
        "movieId": 86,
        "createdAt": "2023-07-12T00:00:00+00:00",
        "updatedAt": "2023-07-12T00:00:00+00:00"
      },
      {
        "id": 87,
        "season_number": 8,
        "title": "The Final Reckoning",
        "overview": "Chương cuối cùng trong loạt phim Mission: Impossible với sứ mệnh cuối cùng của Ethan Hunt.",
        "release_date": "2025-05-23",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZGQ5NGEyYTItMjNiMi00Y2EwLTkzOWItMjc5YjJiMjMyNTI0XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLN_4AmOL4EHdQQEEDNcHmma3T57XPkk8GuQ&s",
        "trailer_url": "https://www.youtube.com/watch?v=fsQgc9pCyDU",
        "status": "upcoming",
        "runtime": 160,
        "movieId": 87,
        "createdAt": "2025-05-23T00:00:00+00:00",
        "updatedAt": "2025-05-23T00:00:00+00:00"
      },
      {
        "id": 88,
        "season_number": 4,
        "title": "Season 4",
        "overview": "Mười năm sau các sự kiện ở Woodsboro, Sidney trở lại và đối mặt với những vụ giết người mới.",
        "release_date": "2011-04-15",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTk5OTcxNTUyNF5BMl5BanBnXkFtZTcwMDczMzE0NA@@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://images2.alphacoders.com/439/thumb-1920-439128.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=JKRtyVLWV-E",
        "status": "completed",
        "runtime": 111,
        "movieId": 88,
        "createdAt": "2011-04-15T00:00:00+00:00",
        "updatedAt": "2011-04-15T00:00:00+00:00"
      },
      {
        "id": 89,
        "season_number": 5,
        "title": "Season 5",
        "overview": "Một nhóm thiếu niên phải đối mặt với một Ghostface mới khi quay lại thị trấn Woodsboro.",
        "release_date": "2022-01-14",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMmE4ZmE5NTMtZTZmNi00YWZjLTk0MjYtOGViZDdhZWMyZmRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtNC11HghaPWKTLOx_fJu2p4oZabXxFfDfQ&s",
        "trailer_url": "https://www.youtube.com/watch?v=beToTslH17s",
        "status": "completed",
        "runtime": 114,
        "movieId": 89,
        "createdAt": "2022-01-14T00:00:00+00:00",
        "updatedAt": "2022-01-14T00:00:00+00:00"
      },
      {
        "id": 90,
        "season_number": 6,
        "title": "Season 6",
        "overview": "Các nạn nhân sống sót đến New York để bắt đầu lại, nhưng một Ghostface mới tiếp tục đeo bám.",
        "release_date": "2023-03-10",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZDZkYzk3YTEtYTQ5MS00MzQ5LTg0NjUtOTgzODA5N2EyYTQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjBTnlk4OYH2llBslrsnrydn8hG_SGH57cVw&s",
        "trailer_url": "https://www.youtube.com/watch?v=h74AXqw4Opc",
        "status": "completed",
        "runtime": 122,
        "movieId": 90,
        "createdAt": "2023-03-10T00:00:00+00:00",
        "updatedAt": "2023-03-10T00:00:00+00:00"
      },
      {
        "id": 91,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Sau cái chết của cha mình, T'Challa trở về Wakanda để kế vị ngai vàng và trở thành Black Panther.",
        "release_date": "2018-02-16",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iiUglk16O5yUNn35tMPS4Ega1slycAyRYQ&s",
        "trailer_url": "https://www.youtube.com/watch?v=xjDjIWPwcPU",
        "status": "completed",
        "runtime": 134,
        "movieId": 91,
        "createdAt": "2018-02-16T00:00:00+00:00",
        "updatedAt": "2018-02-16T00:00:00+00:00"
      },
      {
        "id": 92,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Bộ phim thể thao hành động xoay quanh giải đua xe Công thức 1 và cuộc sống sau tay lái của các tay đua.",
        "release_date": "2025-06-27",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BOWRiOThkM2YtYzI4NS00OWViLTk0ODMtMjNlNDYyZWQ3MzNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://images5.alphacoders.com/139/1395613.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=69ffwl-8pCU",
        "status": "upcoming",
        "runtime": 130,
        "movieId": 92,
        "createdAt": "2025-06-27T00:00:00+00:00",
        "updatedAt": "2025-06-27T00:00:00+00:00"
      },
      {
        "id": 93,
        "season_number": 2,
        "title": "Season 2",
        "overview": "Kaiji tiếp tục dấn thân vào các trò chơi sinh tử đầy rủi ro để giành lấy cơ hội đổi đời.",
        "release_date": "2011-11-05",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZDdkNDcyMjctOThiNy00M2QzLThiMmYtNWQ1YTkyN2UzYjkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://images.justwatch.com/backdrop/148723174/s640/season-2",
        "trailer_url": "https://www.youtube.com/watch?v=MkPO9lwkydc",
        "status": "completed",
        "runtime": 133,
        "movieId": 93,
        "createdAt": "2011-11-05T00:00:00+00:00",
        "updatedAt": "2011-11-05T00:00:00+00:00"
      },
      {
        "id": 94,
        "season_number": 3,
        "title": "Final Game",
        "overview": "Kaiji tham gia vào trò chơi cuối cùng với hy vọng thoát khỏi nghèo đói và giành lại cuộc sống tự do.",
        "release_date": "2020-01-10",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMDFkMjY0OWMtNThhYy00NzYwLTgxMDktYmRjYzRiMDM4NjU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://image.tmdb.org/t/p/original/137mYGBUdU9JuVppVkOD0sOpxH9.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=V9KUnjEGHMw",
        "status": "completed",
        "runtime": 128,
        "movieId": 94,
        "createdAt": "2020-01-10T00:00:00+00:00",
        "updatedAt": "2020-01-10T00:00:00+00:00"
      },
      {
        "id": 95,
        "season_number": 5,
        "title": "The Final",
        "overview": "Kenshin đối mặt với quá khứ khi kẻ thù cũ xuất hiện, mang theo mối thù chưa được giải quyết.",
        "release_date": "2021-04-23",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BYjI1NTE2MmMtOTI3YS00OGYyLTg0NmEtZTIxZjA2ODY3OTkxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://image.tmdb.org/t/p/original/fWDsvj5w7KChexy870Kt3wfBZ8u.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=eAA1ZDSCWjI",
        "status": "completed",
        "runtime": 138,
        "movieId": 95,
        "createdAt": "2021-04-23T00:00:00+00:00",
        "updatedAt": "2021-04-23T00:00:00+00:00"
      },
      {
        "id": 96,
        "season_number": 27,
        "title": "The Million-dollar Pentagram",
        "overview": "Conan phải phá giải một vụ án liên quan đến một ngôi sao năm cánh và một kho báu khổng lồ.",
        "release_date": "2024-04-12",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BYjQ4OWRiOTEtMDhjYS00YWEyLWFlNDEtNWJlYmViZjBjNjhhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://assets-in.bmscdn.com/discovery-catalog/events/et00414245-wqryuttltc-landscape.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=sz5TW2LaLPU",
        "status": "completed",
        "runtime": 111,
        "movieId": 96,
        "createdAt": "2024-04-12T00:00:00+00:00",
        "updatedAt": "2024-04-12T00:00:00+00:00"
      },
      {
        "id": 97,
        "season_number": 28,
        "title": "One-eyed Flashback",
        "overview": "Conan vướng vào một vụ án bí ẩn với manh mối liên quan đến một tên sát nhân có biệt danh 'Mắt một'.",
        "release_date": "2025-04-11",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMWRjNzRhNWItNGEzNS00ZDA4LWFmNjEtNTVmYmQ3NGJlYWNkXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://external-preview.redd.it/detective-conan-movie-28-one-eyed-flashback-main-visual-v0-3lvasG3pM3CzU321lSbC3VEieGrBcONock1ZPKAf7fE.jpg?width=1080&crop=smart&auto=webp&s=425cec73410c88cb9343d5a9abf3184be7ffeb4a",
        "trailer_url": "https://www.youtube.com/watch?v=D22Ezh_UiVM",
        "status": "completed",
        "runtime": 112,
        "movieId": 97,
        "createdAt": "2025-04-11T00:00:00+00:00",
        "updatedAt": "2025-04-11T00:00:00+00:00"
      },
      {
        "id": 98,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Thanh tra Ma Seok-do đối đầu với một băng đảng tội phạm khét tiếng tại quận Garibong, Seoul.",
        "release_date": "2017-10-03",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BOTEwNDU5MTAtYTFkOS00OGE5LThkN2MtZTcxOWFlOGQ1NDUyXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tcDFCrPkJj_lRYHiSPNiI86UN8MOu9kqKg&s",
        "trailer_url": "https://www.youtube.com/watch?v=MvPaDziB-ac",
        "status": "completed",
        "runtime": 121,
        "movieId": 98,
        "createdAt": "2017-10-03T00:00:00+00:00",
        "updatedAt": "2017-10-03T00:00:00+00:00"
      },
      {
        "id": 99,
        "season_number": 2,
        "title": "Season 2",
        "overview": "Thanh tra Ma Seok-do truy bắt một tên tội phạm nguy hiểm tại Việt Nam.",
        "release_date": "2022-05-18",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BYTlkZDk1NzUtMWFmZC00NjMzLWExNzEtZTA5N2M2ZDg5MzI2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTVVmr-c0zBmUgRfjaxHcUokzyZgzPDAM3Q&s",
        "trailer_url": "https://www.youtube.com/watch?v=PDEl1rw_Vn0",
        "status": "completed",
        "runtime": 106,
        "movieId": 99,
        "createdAt": "2022-05-18T00:00:00+00:00",
        "updatedAt": "2022-05-18T00:00:00+00:00"
      },
      {
        "id": 100,
        "season_number": 3,
        "title": "No Way Out",
        "overview": "Ma Seok-do chiến đấu chống lại một tổ chức buôn ma túy có vũ khí công nghệ cao.",
        "release_date": "2023-05-31",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMWRmZjhhMWMtNzdlMi00YWYzLTgzNzMtM2JlMmVhMjQyNDI1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKcZFm5CAOuPykD_TK7OLUTZcMvrkDX7gOg&s",
        "trailer_url": "https://www.youtube.com/watch?v=jeW1dnBXSgk",
        "status": "completed",
        "runtime": 105,
        "movieId": 100,
        "createdAt": "2023-05-31T00:00:00+00:00",
        "updatedAt": "2023-05-31T00:00:00+00:00"
      },
      {
        "id": 101,
        "season_number": 4,
        "title": "Punishment",
        "overview": "Thanh tra Ma Seok-do phải truy bắt một trùm tội phạm tàn ác đe dọa toàn Seoul.",
        "release_date": "2024-04-24",
        "poster_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5oSMmVmYt6ZzCHm6yoSYLMHBBf7xRHD7a-g&s",
        "backdrop_url": "https://image.tmdb.org/t/p/original/f8kaNFqr65vsqaqL93wncMLGi5j.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=q3D3ifQHzaY",
        "status": "completed",
        "runtime": 109,
        "movieId": 101,
        "createdAt": "2024-04-24T00:00:00+00:00",
        "updatedAt": "2024-04-24T00:00:00+00:00"
      },
      {
        "id": 102,
        "season_number": 2,
        "title": "Season 2",
        "overview": "Thanh tra Seo Do-cheol quay lại đối đầu với một thế lực mới trong giới tài phiệt.",
        "release_date": "2024-12-25",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZTJjYmE0MDYtOTk3MS00ODViLWFiNTctMWQ4ZjNjNjJlZTU1XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1syIKzV1i5aVWmrY0YgisR-RxH7Hp1NbjQ&s",
        "trailer_url": "https://www.youtube.com/watch?v=8eL_-IglIQM",
        "status": "upcoming",
        "runtime": 114,
        "movieId": 102,
        "createdAt": "2024-12-25T00:00:00+00:00",
        "updatedAt": "2024-12-25T00:00:00+00:00"
      },
      {
        "id": 103,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Hai linh mục thực hiện nghi lễ trừ tà để cứu một cô gái trẻ khỏi bị quỷ ám.",
        "release_date": "2015-11-05",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZDkwNDhhM2YtZGQ5Yi00NjA5LTkzNDYtMTFhYjllODYyN2Q2XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWc7d85-NaCdB3LIInvmutiynyKpgIDW4oA&s",
        "trailer_url": "https://www.youtube.com/watch?v=S4tBEVvSzSk",
        "status": "completed",
        "runtime": 108,
        "movieId": 103,
        "createdAt": "2015-11-05T00:00:00+00:00",
        "updatedAt": "2015-11-05T00:00:00+00:00"
      },
      {
        "id": 104,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Hai nữ tu thực hiện nghi lễ trừ tà bất hợp pháp để cứu bé trai bị quỷ ám.",
        "release_date": "2025-01-10",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BODE1MjA4ZTYtMDZlOC00ZDkzLTkwZjYtNTQ5MTY5ODNlMTU1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://major-digital-cdn.app.vista.co/media/entity/get/FilmBackdrop/HO00000279?width=1920",
        "trailer_url": "https://www.youtube.com/watch?v=hJT_zC94TjI",
        "status": "completed",
        "runtime": 114,
        "movieId": 104,
        "createdAt": "2025-01-10T00:00:00+00:00",
        "updatedAt": "2025-01-10T00:00:00+00:00"
      },
      {
        "id": 105,
        "season_number": 1,
        "title": "Agent Jun",
        "overview": "Cựu đặc vụ Jun bị kéo vào thế giới gián điệp khi bị nhắm mục tiêu qua webtoon của mình.",
        "release_date": "2020-01-22",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BODg0Y2YzOTYtZGI3OS00Y2ZhLTlhODctOGU5ZTc2OGU4MWI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://m.media-amazon.com/images/S/pv-target-images/a3a17901ff099f7d20282540e4d69178236fa7aefc9eee21c8f9d34ac09a72f6.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=q8Jez23zo5Q",
        "status": "completed",
        "runtime": 110,
        "movieId": 105,
        "createdAt": "2020-01-22T00:00:00+00:00",
        "updatedAt": "2020-01-22T00:00:00+00:00"
      },
      {
        "id": 106,
        "season_number": 2,
        "title": "Season 2",
        "overview": "Tiếp nối cuộc phiêu lưu của Jun với kẻ thù mới, nhân vật phát triển sâu sắc hơn.",
        "release_date": "2025-06-15",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNDEzODdhOTAtNDFiNS00ZWNhLTkwY2YtZTUzNDBhZDgyMmE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUV39jjSBwAoeFC3K7dhwUngKzDVVm2oNgMhcdWEaid_OwGFHFkaRb8ekzJTgBtxDnKJA&usqp=CAU",
        "trailer_url": "https://www.youtube.com/watch?v=ZKVWkoHFXhU",
        "status": "completed",
        "runtime": 115,
        "movieId": 106,
        "createdAt": "2025-06-15T00:00:00+00:00",
        "updatedAt": "2025-06-15T00:00:00+00:00"
      },
      {
        "id": 107,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Người đọc sống trong thế giới của tiểu thuyết mình từng đọc — đầy bất ngờ.",
        "release_date": "2025-12-05",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNWViMzFjYjktZDgxNi00M2EyLTg0M2YtYWI3NTYxYTI2N2Y0XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://images.justwatch.com/backdrop/332073740/s640/omniscient-reader-the-prophet",
        "trailer_url": "https://www.youtube.com/watch?v=OvgmOnfySDY",
        "status": "completed",
        "runtime": 130,
        "movieId": 107,
        "createdAt": "2025-12-05T00:00:00+00:00",
        "updatedAt": "2025-12-05T00:00:00+00:00"
      },
      {
        "id": 108,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Điệp viên Hàn Quốc hoạt động bí mật vào thời kỳ Nhật chiếm đóng.",
        "release_date": "2023-12-25",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNmY4YzM5NzUtMTg4Yy00Yzc3LThlZDktODk4YjljZmNlODA0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://s.movieinsider.com/images/p/600//840469_m1733865044.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=APwvisWxjaI",
        "status": "completed",
        "runtime": 118,
        "movieId": 108,
        "createdAt": "2023-12-25T00:00:00+00:00",
        "updatedAt": "2023-12-25T00:00:00+00:00"
      },
      {
        "id": 109,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Thám tử bị cuốn vào chuyện tình bí ẩn với nghi phạm vụ án mình điều tra.",
        "release_date": "2022-06-29",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BN2NhZjcxYjItNDhlOC00Y2U2LWE4NDktMDJhNTQ1NzNjMmNmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://m.media-amazon.com/images/S/pv-target-images/8cfe1bd95d9b85a02fd8ff70e8cde1915156c98ef1930395ed2addcad0b1606e.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=d9BR3Z_-Hh8",
        "status": "completed",
        "runtime": 138,
        "movieId": 109,
        "createdAt": "2022-06-29T00:00:00+00:00",
        "updatedAt": "2022-06-29T00:00:00+00:00"
      },
      {
        "id": 110,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Hai người đàn ông tìm cách sắp xếp bố mẹ nuôi cho một đứa trẻ bị bỏ rơi.",
        "release_date": "2022-06-08",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMjZhNDZkMmUtN2Q4ZS00N2NmLWE1ZDUtZTY2Zjg5NmI0MjdiXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WNind8NcVB2AqPmTCStBZ2rBlTEsH_jXuQ&s",
        "trailer_url": "https://www.youtube.com/watch?v=uPEUj7BPl2Q",
        "status": "completed",
        "runtime": 129,
        "movieId": 110,
        "createdAt": "2022-06-08T00:00:00+00:00",
        "updatedAt": "2022-06-08T00:00:00+00:00"
      },
      {
        "id": 111,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Đạo diễn sân khấu tìm lại ý nghĩa cuộc sống sau cái chết của vợ qua hành trình xe.",
        "release_date": "2021-08-20",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BOGE5ZWRhYjYtNzVkMS00ZGU3LTg2MTMtODYyMmJlMDMyZjU0XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://images5.alphacoders.com/128/1282093.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=wxSecn55IS8",
        "status": "completed",
        "runtime": 179,
        "movieId": 111,
        "createdAt": "2021-08-20T00:00:00+00:00",
        "updatedAt": "2021-08-20T00:00:00+00:00"
      },
      {
        "id": 112,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Phim sử thi Nhật Bản kể lại Trận Sekigahara định đoạt số phận quốc gia.",
        "release_date": "2017-08-26",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BN2VkMjg5NjEtODNhYy00OWQ4LTg3MmItMTMwNTdlOTYyYmU1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://m.media-amazon.com/images/M/MV5BY2Q5MjQ5OGQtMDFlNi00NzFhLWI4YTMtZGUyNjBiNjZjYTdhXkEyXkFqcGc@._V1_.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=Kgwgab-G2nY",
        "status": "completed",
        "runtime": 150,
        "movieId": 112,
        "createdAt": "2017-08-26T00:00:00+00:00",
        "updatedAt": "2017-08-26T00:00:00+00:00"
      },
      {
        "id": 113,
        "season_number": 3,
        "title": "Ba Chàng Khuyết",
        "overview": "Ba chàng trai khuyết tật quyết định lên đường đi tìm mẹ ruột, bắt đầu hành trình vừa cảm động vừa hài hước.",
        "release_date": "2018-04-20",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNTQzYTMzODYtYzFhYS00OTdiLTg3MTItODhkYmNkMjIzYzk2XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkiroKViBBydbsCVUbkyssxRDbFz9TzImdVA&s",
        "trailer_url": "https://www.youtube.com/watch?v=KlOa0egcp2M",
        "status": "completed",
        "runtime": 100,
        "movieId": 113,
        "createdAt": "2018-04-20T00:00:00+00:00",
        "updatedAt": "2018-04-20T00:00:00+00:00"
      },
      {
        "id": 114,
        "season_number": 6,
        "title": "Tấm Vé Định Mệnh",
        "overview": "Một nhóm bạn thân vướng vào vòng xoáy của một tấm vé số định mệnh, kéo theo những biến cố không lường trước.",
        "release_date": "2023-04-28",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNGJjZjU2MzUtNGE5YS00YjMyLTllODAtYzRhZTE2OWQxMTAyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K9qe-lvFSVCYtBmurcXxWYrLfPe5_9KRYA&s",
        "trailer_url": "https://www.youtube.com/watch?v=L-XhraxUsAs",
        "status": "completed",
        "runtime": 110,
        "movieId": 114,
        "createdAt": "2023-04-28T00:00:00+00:00",
        "updatedAt": "2023-04-28T00:00:00+00:00"
      },
      {
        "id": 115,
        "season_number": 8,
        "title": "Vòng Tay Nắng",
        "overview": "Một câu chuyện đầy nhân văn về tình thân và sự tha thứ, đan xen các tình tiết hành động kịch tính.",
        "release_date": "2025-04-25",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BYTY1Y2Q4NTItNTAzYy00N2JmLTgxMmQtZGQxYjRkY2FlYzg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://i.ytimg.com/vi/9Rj2V8qvKoc/maxresdefault.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=hUlBTt3NyGI",
        "status": "completed",
        "runtime": 112,
        "movieId": 115,
        "createdAt": "2025-04-25T00:00:00+00:00",
        "updatedAt": "2025-04-25T00:00:00+00:00"
      },
      {
        "id": 116,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Hai cô dâu bị tráo nhầm chú rể trong một cuộc chiến hài hước và rối loạn trong ngày cưới.",
        "release_date": "2011-01-28",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BOWRkYzhjYWItY2U4Ni00NjhlLTljNzgtNTU4M2JkZDI3YjdiXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://assets.glxplay.io/images/w700/title/battle-of-the-brides_backdrop_4c3217180015cb0bdd1789473098af4e.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=r-2o26_eMoY",
        "status": "completed",
        "runtime": 98,
        "movieId": 116,
        "createdAt": "2011-01-28T00:00:00+00:00",
        "updatedAt": "2011-01-28T00:00:00+00:00"
      },
      {
        "id": 117,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Một câu chuyện tình cảm giữa ba con người bị xã hội ruồng bỏ tại TP.HCM.",
        "release_date": "2011-10-14",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMDk2MGMxNDktMTk0Yy00YmY1LTlmYmMtOTIyYmM2NTA4MGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xsLQeiGGmwgt8nByl8cHspW95EELgY53EQ&s",
        "trailer_url": "https://www.youtube.com/watch?v=A9L-P1pXNmc",
        "status": "completed",
        "runtime": 103,
        "movieId": 117,
        "createdAt": "2011-10-14T00:00:00+00:00",
        "updatedAt": "2011-10-14T00:00:00+00:00"
      },
      {
        "id": 118,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Câu chuyện hồi hộp và ly kỳ trong thế giới showbiz với những bí mật rùng rợn được hé lộ.",
        "release_date": "2012-10-12",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZGJiOGQ3OWUtZWM0NS00MzhjLTgzYWQtMmVlYzZiNGY1MmFkXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://images.fptplay53.net/media/OTT/VOD/2024/07/17/scandal---bi-mat-tham-do-fpt-play-1721204246388_Landscape.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=9_TirLuxLH8",
        "status": "completed",
        "runtime": 101,
        "movieId": 118,
        "createdAt": "2012-10-12T00:00:00+00:00",
        "updatedAt": "2012-10-12T00:00:00+00:00"
      },
      {
        "id": 119,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Một bộ phim hành động mạnh mẽ lấy bối cảnh khu vực Chợ Lớn đầy rẫy tội phạm và bạo lực.",
        "release_date": "2013-06-07",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNDE5ZjhkMzItY2U3NC00NzY0LWExNmEtZmFjYzBlZjRmMmRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://afamilycdn.com/k:thumb_w/600/Tnk9vRlUgEMOa9xiFyoQdi0bvg9Omj/Image/2013/02/BDCL-A1--(3)-35aa2/bui-doi-cho-lon-goc-khuat-sai-gon-len-man-anh-viet.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=b9pw1sdwyYs",
        "status": "completed",
        "runtime": 90,
        "movieId": 119,
        "createdAt": "2013-06-07T00:00:00+00:00",
        "updatedAt": "2013-06-07T00:00:00+00:00"
      },
      {
        "id": 120,
        "season_number": 2,
        "title": "Season 2",
        "overview": "Phần tiếp theo của câu chuyện tình hài hước, khi Hội trở lại với những rắc rối mới.",
        "release_date": "2014-12-12",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZTg5NTgyODMtOTM5ZS00ZmRjLWI3YjktYzVjMjFkODRmMDIyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://media.themoviedb.org/t/p/w780/5LEuiQNzwT52c2ve3FOWbEf7lEt.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=ajtdC0Pnoa8",
        "status": "completed",
        "runtime": 98,
        "movieId": 120,
        "createdAt": "2014-12-12T00:00:00+00:00",
        "updatedAt": "2014-12-12T00:00:00+00:00"
      },
      {
        "id": 121,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Một bà lão tình cờ trẻ lại thành thiếu nữ và bắt đầu hành trình thực hiện những ước mơ dang dở của tuổi trẻ.",
        "release_date": "2015-12-11",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMDRlZGQxNTctZWM4OC00MDYwLTk4MjUtNTlmZjBkMDEzMTQ2XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://vcdn1-giaitri.vnecdn.net/2015/12/30/ba-noi-5124-1451468707.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=Kq8108YHkpFiJqdSwAGaZA",
        "trailer_url": "https://www.youtube.com/watch?v=L_iOZs6JZe0",
        "status": "completed",
        "runtime": 118,
        "movieId": 121,
        "createdAt": "2015-12-11T00:00:00+00:00",
        "updatedAt": "2015-12-11T00:00:00+00:00"
      },
      {
        "id": 122,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Ba người bạn trẻ cùng nhau bỏ trốn khỏi đám cưới sắp đặt và rong ruổi thực hiện mơ ước riêng.",
        "release_date": "2019-02-22",
        "poster_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSkYOb4bdlbH-gnANALlgH5Q3fvDMGK3vEQ&s",
        "backdrop_url": "https://i.ytimg.com/vi/8-BIvwSwOfY/maxresdefault.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=8-BIvwSwOfY",
        "status": "completed",
        "runtime": 103,
        "movieId": 122,
        "createdAt": "2019-02-22T00:00:00+00:00",
        "updatedAt": "2019-02-22T00:00:00+00:00"
      },
      {
        "id": 123,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Một người mẹ đơn thân truy đuổi những kẻ bắt cóc con gái mình trong hành trình nghẹt thở xuyên biên giới.",
        "release_date": "2019-02-22",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZGI2YzNjYmUtNDFjMS00NjAxLTljMWEtOWExN2EwYThjMDk3XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://i.ytimg.com/vi/ug7Wy_bsBDY/maxresdefault.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=THXPCF6UHh8",
        "status": "completed",
        "runtime": 98,
        "movieId": 123,
        "createdAt": "2019-02-22T00:00:00+00:00",
        "updatedAt": "2019-02-22T00:00:00+00:00"
      },
      {
        "id": 124,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Câu chuyện về một cậu bé sống trong khu ổ chuột Sài Gòn, chuyên làm môi giới số đề, phản ánh cuộc sống cơ cực của người nghèo đô thị.",
        "release_date": "2020-09-25",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BYmNjYjc2YmItYzI1Ny00ZjA3LTkyNjktYzczNTU2ZGJjM2MxXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://media.urbanistnetwork.com/saigoneer/article-images/2020/10/07/rom/rom-0b.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=XRm1P7oGpMQ",
        "status": "completed",
        "runtime": 79,
        "movieId": 124,
        "createdAt": "2020-09-25T00:00:00+00:00",
        "updatedAt": "2020-09-25T00:00:00+00:00"
      },
      {
        "id": 125,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Bộ phim kể về ba người phụ nữ sống tại một làng quê miền Nam Việt Nam và những bi kịch tình yêu trong đời họ.",
        "release_date": "2022-12-02",
        "poster_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYv-LALPRvpGXxBdaHlUdNxEHJdtwou8_wyw&s",
        "backdrop_url": "https://img.idesign.vn/2022/12/thumb_fixed.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=Sx0gdaeeGi4",
        "status": "completed",
        "runtime": 117,
        "movieId": 125,
        "createdAt": "2022-12-02T00:00:00+00:00",
        "updatedAt": "2022-12-02T00:00:00+00:00"
      },
      {
        "id": 126,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Một người phụ nữ tưởng như bình thường bỗng đối mặt với những bí mật và biến cố lớn trong cuộc sống sau khi gặp lại người cũ.",
        "release_date": "2024-02-10",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNjdiYWM0OGQtZjJjZS00NDQxLWFlZTUtMmQ0NTI4MGUxY2ZlXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://d32qys9a6wm9no.cloudfront.net/images/movies/backdrop/ac/6ab5d5f9e9254cad5019421bed61e80a_1280x720.jpg?t=1710796805",
        "trailer_url": "https://www.youtube.com/watch?v=HXWRTGbhb4U",
        "status": "completed",
        "runtime": 130,
        "movieId": 126,
        "createdAt": "2024-02-10T00:00:00+00:00",
        "updatedAt": "2024-02-10T00:00:00+00:00"
      },
      {
        "id": 127,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Chuyện gia đình của một tiệm bánh tráng trộn nổi tiếng ở Sài Gòn với những mâu thuẫn thế hệ và bí mật được tiết lộ.",
        "release_date": "2023-01-22",
        "poster_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uCLhZhboGeNYKZC9r8l2drGXkdFqwy8X6Q&s",
        "backdrop_url": "https://khenphim.com/wp-content/uploads/2023/01/Nha-Ba-Nu-5-banner.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=IkaP0KJWTsQ&t=4s",
        "status": "completed",
        "runtime": 108,
        "movieId": 127,
        "createdAt": "2023-01-22T00:00:00+00:00",
        "updatedAt": "2023-01-22T00:00:00+00:00"
      },
      {
        "id": 128,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Bối cảnh thời Nguyễn, xoay quanh câu chuyện một người phụ nữ đấu tranh với thân phận và tình yêu trong khuôn khổ xã hội phong kiến.",
        "release_date": "2023-11-03",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BM2RmNmFlZjUtMDNkZC00NTlhLWFkZTktOWE3ZGZlOWY3ZWI4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://synapsestudiovn.com/wp-content/uploads/2024/02/thelastwife-1.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=RhlCD8FAs08",
        "status": "completed",
        "runtime": 120,
        "movieId": 128,
        "createdAt": "2023-11-03T00:00:00+00:00",
        "updatedAt": "2023-11-03T00:00:00+00:00"
      },
      {
        "id": 129,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Một câu chuyện tình cảm giữa người và hồn ma đầy cảm xúc và chất thơ, lấy bối cảnh tại Đà Lạt.",
        "release_date": "2020-01-31",
        "poster_url": "https://i.imgur.com/twlqmfz.jpg",
        "backdrop_url": "https://ss-images.saostar.vn/2020/02/01/6909791/thiet-ke-khong-ten.png",
        "trailer_url": "https://www.youtube.com/watch?v=2oAuLSmJHTM",
        "status": "completed",
        "runtime": 98,
        "movieId": 129,
        "createdAt": "2020-01-31T00:00:00+00:00",
        "updatedAt": "2020-01-31T00:00:00+00:00"
      },
      {
        "id": 130,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Phim chuyển thể từ truyện tranh Thần Đồng Đất Việt, kể về hành trình khám phá thân thế của Trạng Tí và những người bạn.",
        "release_date": "2021-04-30",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BOGQ5OGRmNmEtOTczYS00ZTdhLTk5ZTMtYjc3ZTg3NTA2NzRhXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://i.ytimg.com/vi/Xv8AmZ4MIKM/maxresdefault.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=VTnGOjtaWAY",
        "status": "completed",
        "runtime": 100,
        "movieId": 130,
        "createdAt": "2021-04-30T00:00:00+00:00",
        "updatedAt": "2021-04-30T00:00:00+00:00"
      },
      {
        "id": 131,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Chuyển thể từ truyện ngắn của Nguyễn Nhật Ánh, phim kể về Ngạn và mối tình đơn phương đầy day dứt dành cho Hà Lan – cô gái có đôi mắt biếc trong sáng.",
        "release_date": "2019-12-20",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNTg0ZmQ3OTUtZDY0MC00M2MyLWIzZDktZjA2ZWM1NmRiZGJhXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://i.ytimg.com/vi/ITlQ0oU7tDA/maxresdefault.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=ITlQ0oU7tDA",
        "status": "completed",
        "runtime": 117,
        "movieId": 131,
        "createdAt": "2019-12-20T00:00:00+00:00",
        "updatedAt": "2019-12-20T00:00:00+00:00"
      },
      {
        "id": 132,
        "season_number": 1,
        "title": "Season 1",
        "overview": "Một bộ phim kinh dị mang màu sắc dân gian, xoay quanh những hiện tượng kỳ lạ xảy ra trong một ngôi làng hẻo lánh.",
        "release_date": "2025-10-30",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMGZmMTQwYzQtYjdkZS00M2I1LWFlZTUtOTRiOGUzYzU1YWM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://tintuc-divineshop.cdn.vccloud.vn/wp-content/uploads/2025/03/referenceSchemeHeadOfficeallowPlaceHoldertrueheight360ldapp-23.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=fQKxDM-hxoU",
        "status": "upcoming",
        "runtime": 122,
        "movieId": 132,
        "createdAt": "2025-10-30T00:00:00+00:00",
        "updatedAt": "2025-10-30T00:00:00+00:00"
      },
      {
        "id": 133,
        "season_number": 1,
        "title": "2016",
        "overview": "Câu chuyện tình yêu và những mối quan hệ phức tạp giữa một nữ sinh đại học và một chàng trai hoàn hảo nhưng bí ẩn.",
        "release_date": "2016-01-04",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMWVjNWJmN2ItZWM5YS00MDM2LTk1YzMtNzNhZWU0YjgyNWNlXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://images.justwatch.com/backdrop/46518882/s640/cheese-in-the-trap",
        "trailer_url": "https://www.youtube.com/watch?v=t32L06_mjKM",
        "status": "completed",
        "runtime": 60,
        "movieId": 133,
        "createdAt": "2016-01-04T00:00:00+00:00",
        "updatedAt": "2016-01-04T00:00:00+00:00"
      },
      {
        "id": 134,
        "season_number": 1,
        "title": "2016",
        "overview": "Một bác sĩ và một quân nhân gặp nhau trong hoàn cảnh đặc biệt và nảy sinh tình cảm giữa chiến tranh và nghĩa vụ.",
        "release_date": "2016-02-24",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BYTQ3MWI2MjEtM2Q3NS00YjU4LWFkZGItNDA0OTc2NjcwZWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://www.billboard.com/wp-content/uploads/media/Descendants-of-the-Sun-2016-billboard-650.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=Q27dAWOLTNs",
        "status": "completed",
        "runtime": 60,
        "movieId": 134,
        "createdAt": "2016-02-24T00:00:00+00:00",
        "updatedAt": "2016-02-24T00:00:00+00:00"
      },
      {
        "id": 135,
        "season_number": 1,
        "title": "2016",
        "overview": "Một thiết bị bộ đàm bí ẩn cho phép cảnh sát ở hiện tại liên lạc với quá khứ để giải quyết các vụ án chưa có lời giải.",
        "release_date": "2016-01-22",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BOGI3MzJjY2MtZTMzYy00OWJkLTkyOGUtNjAwNzM0YWEyODlmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABUWUVNZZZi262N4DmVunq9VBAoaT_ukq5on54gZWGupayrddPKiehvDyzHsekrMXaP0R9c2SDpPKP1ZoCAaPEtPSlCmwcYOO1fbz.jpg?r=e96",
        "trailer_url": "https://www.youtube.com/watch?v=RsdJLm7Swkw",
        "status": "completed",
        "runtime": 65,
        "movieId": 135,
        "createdAt": "2016-01-22T00:00:00+00:00",
        "updatedAt": "2016-01-22T00:00:00+00:00"
      },
      {
        "id": 136,
        "season_number": 1,
        "title": "2016",
        "overview": "Một cựu lính đánh thuê trở thành vệ sĩ cho vợ của ứng viên tổng thống và bị cuốn vào một âm mưu chính trị.",
        "release_date": "2016-09-23",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BODc4NDA2MTYtMzk1Ni00OTM1LWFhOTItMDA2OWM4NTZkYzVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://qqcdnpictest.mxplay.com/pic/7c4043e685d049da4f73837967903b92/en/16x9/1600x900/test_pic1702658874968.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=U6GELNX7Y94",
        "status": "completed",
        "runtime": 60,
        "movieId": 136,
        "createdAt": "2016-09-23T00:00:00+00:00",
        "updatedAt": "2016-09-23T00:00:00+00:00"
      },
      {
        "id": 137,
        "season_number": 1,
        "title": "2016",
        "overview": "Một yêu tinh bất tử tìm kiếm cô dâu có thể kết thúc cuộc sống bất tử của mình để được giải thoát khỏi lời nguyền.",
        "release_date": "2016-12-02",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNWIyNTA3MmItNzY5ZS00NmZhLThjMWYtZjIxYzllZWU5YWIzXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://wallpapersok.com/images/hd/goblin-kdrama-wwuo68su6g25p78r.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=y1ClsA-zt-I",
        "status": "completed",
        "runtime": 70,
        "movieId": 137,
        "createdAt": "2016-12-02T00:00:00+00:00",
        "updatedAt": "2016-12-02T00:00:00+00:00"
      },
      {
        "id": 138,
        "season_number": 1,
        "title": "2016",
        "overview": "Một nàng tiên cá thời Joseon tái sinh ở thời hiện đại và gặp lại người tình kiếp trước – giờ là một kẻ lừa đảo thiên tài.",
        "release_date": "2016-11-16",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMDlhOGNhNGQtZTM3Mi00NWJmLTg0ODItZDJkYjExZGMyNjI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://upload.wikimedia.org/wikipedia/en/6/69/Legend_of_the_Blue_Sea_Poster.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=1MJnc7vqdIQ",
        "status": "completed",
        "runtime": 60,
        "movieId": 138,
        "createdAt": "2016-11-16T00:00:00+00:00",
        "updatedAt": "2016-11-16T00:00:00+00:00"
      },
      {
        "id": 139,
        "season_number": 1,
        "title": "2020",
        "overview": "Cuộc sống hoàn hảo của một nữ bác sĩ sụp đổ khi phát hiện chồng ngoại tình, mở ra chuỗi bi kịch trả thù dữ dội.",
        "release_date": "2020-03-27",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZjJlNzUyNjYtODkxMC00ZjZmLTlkYTUtMzZkYTgxNGYzMmQ3XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://fesfas.com/cdn/shop/articles/113999568_2395696170723496_5000714336457193711_n_1600x.jpg?v=1693886456",
        "trailer_url": "https://www.youtube.com/watch?v=PAf0Cu6kKC0",
        "status": "completed",
        "runtime": 70,
        "movieId": 139,
        "createdAt": "2020-03-27T00:00:00+00:00",
        "updatedAt": "2020-03-27T00:00:00+00:00"
      },
      {
        "id": 140,
        "season_number": 1,
        "title": "2020",
        "overview": "Một nhân viên y tế tâm thần và một nữ tác giả truyện thiếu nhi vượt qua quá khứ tổn thương để chữa lành cho nhau.",
        "release_date": "2020-06-20",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNzZmOWMwNjktNzdkOC00MDcxLWE3YTItNzIwOTRjOGFlYWZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://www.hellokpop.com/wp-content/uploads/2020/06/103806753_720313971873464_8263997121750780319_o-e1592346796416.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=nOpP_RwnSi4",
        "status": "completed",
        "runtime": 70,
        "movieId": 140,
        "createdAt": "2020-06-20T00:00:00+00:00",
        "updatedAt": "2020-06-20T00:00:00+00:00"
      },
      {
        "id": 141,
        "season_number": 1,
        "title": "2020",
        "overview": "Ba người trẻ cố gắng vươn lên trong thế giới thời trang và điện ảnh, đối mặt với định kiến xã hội và gia đình.",
        "release_date": "2020-09-07",
        "poster_url": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Record_of_Youth.jpg/250px-Record_of_Youth.jpg",
        "backdrop_url": "https://images.squarespace-cdn.com/content/v1/56eb012f27d4bd29de975fae/3d2d0c1e-b8b0-473f-a904-7a69136e2469/KD_RECORD_Header.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=8mfNLiDDlL8",
        "status": "completed",
        "runtime": 65,
        "movieId": 141,
        "createdAt": "2020-09-07T00:00:00+00:00",
        "updatedAt": "2020-09-07T00:00:00+00:00"
      },
      {
        "id": 142,
        "season_number": 1,
        "title": "2021",
        "overview": "Một biên kịch lạnh lùng tình cờ sống chung với nữ diễn viên nổi tiếng và giữa họ dần nảy sinh tình cảm.",
        "release_date": "2021-03-24",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNDkwMTljNGYtNzg2NS00ZGM5LWIxMzItOTYxM2RjYzA5MDk4XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://i0.wp.com/thefangirlverdict.com/wp-content/uploads/2021/05/Oh-Master-002.jpg?resize=725%2C408&ssl=1",
        "trailer_url": "https://www.youtube.com/watch?v=SvtQBt0Hedk",
        "status": "completed",
        "runtime": 60,
        "movieId": 142,
        "createdAt": "2021-03-24T00:00:00+00:00",
        "updatedAt": "2021-03-24T00:00:00+00:00"
      },
      {
        "id": 143,
        "season_number": 1,
        "title": "2018",
        "overview": "Một người đàn ông trung niên và một cô gái trẻ cùng vượt qua nỗi đau riêng và tìm lại hy vọng trong cuộc sống.",
        "release_date": "2018-03-21",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BYzhlZTE2ZTEtYTY2YS00ZWIzLWI0ZWMtZmQzOTViODBhOGIxXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://m.media-amazon.com/images/S/pv-target-images/0b3365d64ee7907e67a1d94273c8bb26ed2a79f224d8e9cd05b26316950a55f7.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=V9tHXR2Iuzc",
        "status": "completed",
        "runtime": 70,
        "movieId": 143,
        "createdAt": "2018-03-21T00:00:00+00:00",
        "updatedAt": "2018-03-21T00:00:00+00:00"
      },
      {
        "id": 144,
        "season_number": 1,
        "title": "2018",
        "overview": "Một cậu bé trốn thoát khỏi Joseon trở thành lính Mỹ và quay lại quê nhà trong bối cảnh biến động lịch sử.",
        "release_date": "2018-07-07",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNDNhNzMxNzgtMzY2OS00NTE2LWI1ZjUtNjBhYjgwYThjZWI3XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://i0.wp.com/blog.cyrildason.com/wp-content/uploads/2021/06/Mr-Sunshine-0.jpg?fit=1200%2C800&ssl=1",
        "trailer_url": "https://www.youtube.com/watch?v=rPJSo4fhtRU",
        "status": "completed",
        "runtime": 75,
        "movieId": 144,
        "createdAt": "2018-07-07T00:00:00+00:00",
        "updatedAt": "2018-07-07T00:00:00+00:00"
      },
      {
        "id": 145,
        "season_number": 1,
        "title": "2018",
        "overview": "Một người phụ nữ độc thân tuổi 30 nảy sinh tình cảm với em trai bạn thân, vượt qua rào cản tuổi tác và xã hội.",
        "release_date": "2018-03-30",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNDgwNDQ1NzAtNzU5Yy00YWE4LWFhNWQtYjM2NGViY2E0YTFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABaeT9pjFuw2IhBxbEhAfzwvwvtQiqx778VCcwPFYg6z0KLXQVyNpeM5g2KiHNgvtkk2gYXwsr-Vp0Hguphe7k2vxx0avL2uXEjUQ.jpg?r=594",
        "trailer_url": "https://www.youtube.com/watch?v=xEiCIrDR6-I",
        "status": "completed",
        "runtime": 65,
        "movieId": 145,
        "createdAt": "2018-03-30T00:00:00+00:00",
        "updatedAt": "2018-03-30T00:00:00+00:00"
      },
      {
        "id": 146,
        "season_number": 1,
        "title": "2019",
        "overview": "Một nữ tài phiệt Hàn Quốc vô tình rơi vào Triều Tiên và được một sĩ quan cứu giúp, mở đầu mối tình cảm động.",
        "release_date": "2019-12-14",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BZjM3ZGQ4ZTMtOTNjMS00NmJlLTljMWUtNWExMzJhMGJlMWNiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://bite-mag.co.uk/wp-content/uploads/2024/01/crash1.jpeg",
        "trailer_url": "https://www.youtube.com/watch?v=2rD6BzfHvUg",
        "status": "completed",
        "runtime": 70,
        "movieId": 146,
        "createdAt": "2019-12-14T00:00:00+00:00",
        "updatedAt": "2019-12-14T00:00:00+00:00"
      },
      {
        "id": 147,
        "season_number": 1,
        "title": "2019",
        "overview": "Một bà mẹ đơn thân chuyển đến thị trấn nhỏ mở quán bar, đồng thời đối mặt với định kiến và cả sát nhân.",
        "release_date": "2019-09-18",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BOWVmNTM5ZTMtZWVlMi00MDU4LWExNzAtMDk0YzEyMmE5NjMyXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://www.yesstyle.com/blog/wp-content/uploads/2019/11/camellia_x.png",
        "trailer_url": "https://www.youtube.com/watch?v=prl2MXJQSKo",
        "status": "completed",
        "runtime": 65,
        "movieId": 147,
        "createdAt": "2019-09-18T00:00:00+00:00",
        "updatedAt": "2019-09-18T00:00:00+00:00"
      },
      {
        "id": 148,
        "season_number": 1,
        "title": "2021",
        "overview": "Một luật sư gốc Hàn làm việc cho mafia Ý quay về Hàn Quốc để thu hồi tài sản và gặp rắc rối bất ngờ.",
        "release_date": "2021-02-20",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNjA1YmJiNTMtMDc4OC00ZjlkLTgyMjctYzRmMWJhMmZhMjkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "backdrop_url": "https://www.koreatravelpost.com/wp-content/uploads/2021/12/vincenzo-locations.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=Rbj8aO7Sc4o",
        "status": "completed",
        "runtime": 70,
        "movieId": 148,
        "createdAt": "2021-02-20T00:00:00+00:00",
        "updatedAt": "2021-02-20T00:00:00+00:00"
      },
      {
        "id": 149,
        "season_number": 1,
        "title": "2021",
        "overview": "Một nha sĩ từ thành phố chuyển đến vùng quê và gặp anh chàng đa năng, tạo nên chuyện tình dễ thương.",
        "release_date": "2021-08-28",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMmIxZWZkZWUtYTc5Ni00YjZiLTk0YjYtM2JjZjAwODBkZWJjXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2021/10/20/f9d82bb5-00be-420a-9578-8307f6fbff6f_c4805789.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=z66fazyp3-M",
        "status": "completed",
        "runtime": 65,
        "movieId": 149,
        "createdAt": "2021-08-28T00:00:00+00:00",
        "updatedAt": "2021-08-28T00:00:00+00:00"
      },
      {
        "id": 150,
        "season_number": 1,
        "title": "2022",
        "overview": "Trong thời kỳ khủng hoảng IMF, một cô gái đấu kiếm quyết tâm vươn lên và gặp một chàng trai đang mất tất cả.",
        "release_date": "2022-02-12",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BYTdjZWExZmMtZTY0Yy00N2U3LTkyYmYtMGNjZjUyZTM0Njg0XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://images.summitmedia-digital.com/cosmo/images/2022/04/08/twenty-five-twenty-one-2-1649348641.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=PBCXHOskDQ4",
        "status": "completed",
        "runtime": 65,
        "movieId": 150,
        "createdAt": "2022-02-12T00:00:00+00:00",
        "updatedAt": "2022-02-12T00:00:00+00:00"
      },
      {
        "id": 151,
        "season_number": 1,
        "title": "2022",
        "overview": "Một nữ luật sư mắc chứng tự kỷ vượt qua định kiến để trở thành một trong những luật sư tài năng nhất.",
        "release_date": "2022-06-29",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BMGM4ZjU4ZWItZWNmYy00ZDZhLThjY2EtMDEyOTk0NjI3YzJiXkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://i.redd.it/ena-extraordinary-attorney-woo-special-poster-park-eun-bin-v0-mswzpgw4cp591.jpg?width=2835&format=pjpg&auto=webp&s=896e189bcd4b25ca127a3fec1c97c744d54f7c7f",
        "trailer_url": "https://www.youtube.com/watch?v=9SdYFYflVbw",
        "status": "completed",
        "runtime": 65,
        "movieId": 151,
        "createdAt": "2022-06-29T00:00:00+00:00",
        "updatedAt": "2022-06-29T00:00:00+00:00"
      },
      {
        "id": 152,
        "season_number": 1,
        "title": "2023",
        "overview": "Một cô gái có khả năng nhớ được tất cả ký ức từ kiếp trước, quyết tâm tìm lại người yêu cũ ở kiếp 18.",
        "release_date": "2023-06-17",
        "poster_url": "https://m.media-amazon.com/images/M/MV5BNTRmZjc5ODItMDMyZi00ZTk0LWIyYTItY2RjYWY5MzIyNDU0XkEyXkFqcGc@._V1_.jpg",
        "backdrop_url": "https://www.kpopmap.com/wp-content/uploads/2022/04/see-you-in-my-19th-life-cover.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=3yUYh-Rbysk",
        "status": "completed",
        "runtime": 65,
        "movieId": 152,
        "createdAt": "2023-06-17T00:00:00+00:00",
        "updatedAt": "2023-06-17T00:00:00+00:00"
      }
    ]);

    // Lấy tất cả seasons đã thêm
    const createdSeasons = await queryInterface.sequelize.query(
      'SELECT * FROM Seasons;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    await queryInterface.bulkInsert('Episodes', [
      {
          "id": 1,
          "episode_number": 1,
          "title": "Harry Potter and the Sorcerer's Stone",
          "overview": "Harry discovers he is a wizard on his 11th birthday and begins his magical education at Hogwarts School of Witchcraft and Wizardry.",
          "runtime": 152,
          "video_url": "https://www.youtube.com/watch?v=VyHV0BRtdxo&t=2s",
          "release_date": "2001-11-16",
          "seasonId": 1,
          "createdAt": "2001-11-16T00:00:00+00:00",
          "updatedAt": "2001-11-16T00:00:00+00:00"
      },
      {
          "id": 2,
          "episode_number": 1,
          "title": "Harry Potter and the Chamber of Secrets",
          "overview": "Harry returns for his second year at Hogwarts where a dark force has begun terrorizing the school.",
          "runtime": 161,
          "video_url": "https://www.youtube.com/watch?v=5SnFfsi1Zj8",
          "release_date": "2002-11-15",
          "seasonId": 2,
          "createdAt": "2002-11-15T00:00:00+00:00",
          "updatedAt": "2002-11-15T00:00:00+00:00"
      },
      {
          "id": 3,
          "episode_number": 1,
          "title": "Harry Potter and the Prisoner of Azkaban",
          "overview": "In his third year, Harry learns dangerous truths as escaped prisoner Sirius Black hunts him.",
          "runtime": 142,
          "video_url": "https://www.youtube.com/watch?v=lAxgztbYDbs",
          "release_date": "2004-06-04",
          "seasonId": 3,
          "createdAt": "2004-06-04T00:00:00+00:00",
          "updatedAt": "2004-06-04T00:00:00+00:00"
      },
      {
          "id": 4,
          "episode_number": 1,
          "title": "Harry Potter and the Goblet of Fire",
          "overview": "Harry competes in the Triwizard Tournament and faces grave dangers brewing at Hogwarts.",
          "runtime": 157,
          "video_url": "https://www.youtube.com/watch?v=3EGojp4Hh6I",
          "release_date": "2005-11-18",
          "seasonId": 4,
          "createdAt": "2005-11-18T00:00:00+00:00",
          "updatedAt": "2005-11-18T00:00:00+00:00"
      },
      {
          "id": 5,
          "episode_number": 1,
          "title": "Harry Potter and the Order of the Phoenix",
          "overview": "Harry returns to Hogwarts and finds the school under new oppressive rule amid growing threats.",
          "runtime": 138,
          "video_url": "https://www.youtube.com/watch?v=LLAaW1EgyY8",
          "release_date": "2007-07-11",
          "seasonId": 5,
          "createdAt": "2007-07-11T00:00:00+00:00",
          "updatedAt": "2007-07-11T00:00:00+00:00"
      },
      {
          "id": 6,
          "episode_number": 1,
          "title": "Harry Potter and the Half-Blood Prince",
          "overview": "Harry discovers Voldemort's dark past and must confront betrayal and tragedy at Hogwarts.",
          "runtime": 153,
          "video_url": "https://www.youtube.com/watch?v=tAiy66Xrsz4",
          "release_date": "2009-07-15",
          "seasonId": 6,
          "createdAt": "2009-07-15T00:00:00+00:00",
          "updatedAt": "2009-07-15T00:00:00+00:00"
      },
      {
          "id": 7,
          "episode_number": 1,
          "title": "Spider-Man",
          "overview": "After being bitten by a genetically‑altered spider, Peter Parker gains spider‑like abilities and vows “With great power comes great responsibility.”",
          "runtime": 116,
          "video_url": "https://www.youtube.com/watch?v=t06RUxPbp_c",
          "release_date": "2002-05-03",
          "seasonId": 7,
          "createdAt": "2002-05-03T00:00:00+00:00",
          "updatedAt": "2002-05-03T00:00:00+00:00"
      },
      {
          "id": 8,
          "episode_number": 1,
          "title": "Spider-Man 2",
          "overview": "Peter Parker struggles to balance his personal life with his responsibilities as Spider-Man, while facing newcomer Doctor Octopus.",
          "runtime": 127,
          "video_url": "https://www.youtube.com/watch?v=1s9Yln0YwCw",
          "release_date": "2004-06-30",
          "seasonId": 8,
          "createdAt": "2004-06-30T00:00:00+00:00",
          "updatedAt": "2004-06-30T00:00:00+00:00"
      },
      {
          "id": 9,
          "episode_number": 1,
          "title": "Spider-Man 3",
          "overview": "Peter Parker faces new threats including Sandman and Venom, and struggles with his own darker impulses.",
          "runtime": 139,
          "video_url": "https://www.youtube.com/watch?v=e5wUilOeOmg",
          "release_date": "2007-05-04",
          "seasonId": 9,
          "createdAt": "2007-05-04T00:00:00+00:00",
          "updatedAt": "2007-05-04T00:00:00+00:00"
      },
      {
          "id": 10,
          "episode_number": 1,
          "title": "X-Men",
          "overview": "The X-Men must oppose a terrorist organization of mutants who want to forcefully mutate humans into disposing of those they see as threats.",
          "runtime": 104,
          "video_url": "https://www.youtube.com/watch?v=VNxwlx6etXI",
          "release_date": "2000-07-14",
          "seasonId": 10,
          "createdAt": "2000-07-14T00:00:00+00:00",
          "updatedAt": "2000-07-14T00:00:00+00:00"
      },
      {
          "id": 11,
          "episode_number": 1,
          "title": "X2: X-Men United",
          "overview": "The X-Men and Magneto form uneasy alliance to rescue Professor X and combat a military scientist who plans to destroy all mutants.",
          "runtime": 134,
          "video_url": "https://www.youtube.com/watch?v=KjzPi5hfv9cE",
          "release_date": "2003-05-02",
          "seasonId": 11,
          "createdAt": "2003-05-02T00:00:00+00:00",
          "updatedAt": "2003-05-02T00:00:00+00:00"
      },
      {
          "id": 12,
          "episode_number": 1,
          "title": "X-Men: The Last Stand",
          "overview": "The X-Men face a cure for mutation which divides the mutant community and resurrects the Phoenix with devastating consequences.",
          "runtime": 104,
          "video_url": "https://www.youtube.com/watch?v=ZQ0v5dXbw7M",
          "release_date": "2006-05-26",
          "seasonId": 12,
          "createdAt": "2006-05-26T00:00:00+00:00",
          "updatedAt": "2006-05-26T00:00:00+00:00"
      },
      {
          "id": 13,
          "episode_number": 1,
          "title": "X-Men Origins: Wolverine",
          "overview": "The film explores Wolverine’s early years and origin story, including his time with Team X and how he became Weapon X.",
          "runtime": 107,
          "video_url": "https://www.youtube.com/watch?v=8TQ-gD4UCmI",
          "release_date": "2009-05-01",
          "seasonId": 13,
          "createdAt": "2009-05-01T00:00:00+00:00",
          "updatedAt": "2009-05-01T00:00:00+00:00"
      },
      {
          "id": 14,
          "episode_number": 1,
          "title": "The Fellowship of the Ring",
          "overview": "Frodo Baggins and the Fellowship set out on a journey to destroy the One Ring.",
          "runtime": 178,
          "video_url": "https://www.youtube.com/watch?v=V75dMMIW2B4",
          "release_date": "2001-12-19",
          "seasonId": 14,
          "createdAt": "2001-12-19T00:00:00+00:00",
          "updatedAt": "2001-12-19T00:00:00+00:00"
      },
      {
          "id": 15,
          "episode_number": 1,
          "title": "The Two Towers",
          "overview": "The Fellowship faces new dangers as they continue their quest, with the war for Middle-earth escalating.",
          "runtime": 179,
          "video_url": "https://www.youtube.com/watch?v=LbfMDwc4azU",
          "release_date": "2002-12-18",
          "seasonId": 15,
          "createdAt": "2002-12-18T00:00:00+00:00",
          "updatedAt": "2002-12-18T00:00:00+00:00"
      },
      {
          "id": 16,
          "episode_number": 1,
          "title": "The Return of the King",
          "overview": "Frodo and Sam reach Mordor and face the final challenge before the One Ring can be destroyed.",
          "runtime": 201,
          "video_url": "https://www.youtube.com/watch?v=r5X-hFf6Bwo",
          "release_date": "2003-12-17",
          "seasonId": 16,
          "createdAt": "2003-12-17T00:00:00+00:00",
          "updatedAt": "2003-12-17T00:00:00+00:00"
      },
      {
          "id": 17,
          "episode_number": 1,
          "title": "The Curse of the Black Pearl",
          "overview": "Blacksmith Will Turner joins forces with eccentric pirate Captain Jack Sparrow to save his love, the governor’s daughter, from cursed pirates.",
          "runtime": 143,
          "video_url": "https://www.youtube.com/watch?v=naQr0uTrH_s",
          "release_date": "2003-07-09",
          "seasonId": 17,
          "createdAt": "2003-07-09T00:00:00+00:00",
          "updatedAt": "2003-07-09T00:00:00+00:00"
      },
      {
          "id": 18,
          "episode_number": 1,
          "title": "Dead Man's Chest",
          "overview": "Jack Sparrow races to recover the heart of Davy Jones to avoid enslaving his soul to Jones’ service.",
          "runtime": 151,
          "video_url": "https://www.youtube.com/watch?v=SNA-Ezahmok",
          "release_date": "2006-07-07",
          "seasonId": 18,
          "createdAt": "2006-07-07T00:00:00+00:00",
          "updatedAt": "2006-07-07T00:00:00+00:00"
      },
      {
          "id": 19,
          "episode_number": 1,
          "title": "At World's End",
          "overview": "Captain Jack Sparrow and his allies prepare for a final battle to save his friend and the soul of piracy itself.",
          "runtime": 169,
          "video_url": "https://www.youtube.com/watch?v=HKSZtp_OGHY",
          "release_date": "2007-05-25",
          "seasonId": 19,
          "createdAt": "2007-05-25T00:00:00+00:00",
          "updatedAt": "2007-05-25T00:00:00+00:00"
      },
      {
          "id": 20,
          "episode_number": 1,
          "title": "The Bourne Identity",
          "overview": "A man with amnesia must discover who he is while evading assassination attempts and uncovering a secret conspiracy.",
          "runtime": 119,
          "video_url": "https://www.youtube.com/watch?v=FpKaB5dvQ4g",
          "release_date": "2002-06-14",
          "seasonId": 20,
          "createdAt": "2002-06-14T00:00:00+00:00",
          "updatedAt": "2002-06-14T00:00:00+00:00"
      },
      {
          "id": 21,
          "episode_number": 1,
          "title": "The Bourne Supremacy",
          "overview": "Jason Bourne is framed for a CIA operation gone wrong and must uncover the conspiracy while pursued by assassins.",
          "runtime": 108,
          "video_url": "https://www.youtube.com/watch?v=Y-HqyyfBbSo",
          "release_date": "2004-07-23",
          "seasonId": 21,
          "createdAt": "2004-07-23T00:00:00+00:00",
          "updatedAt": "2004-07-23T00:00:00+00:00"
      },
      {
          "id": 22,
          "episode_number": 1,
          "title": "The Bourne Ultimatum",
          "overview": "Jason Bourne continues his global journey to learn about his past still pursued by agents and men hunting him.",
          "runtime": 115,
          "video_url": "https://www.youtube.com/watch?v=ohkW_xbPl9A",
          "release_date": "2007-08-03",
          "seasonId": 22,
          "createdAt": "2007-08-03T00:00:00+00:00",
          "updatedAt": "2007-08-03T00:00:00+00:00"
      },
      {
          "id": 23,
          "episode_number": 1,
          "title": "Shrek",
          "overview": "An ogre embarks on a quest to rescue Princess Fiona, far from the aesthetic villagers’ expectations.",
          "runtime": 90,
          "video_url": "https://www.youtube.com/watch?v=CwXOrWvPBPk",
          "release_date": "2001-05-18",
          "seasonId": 23,
          "createdAt": "2001-05-18T00:00:00+00:00",
          "updatedAt": "2001-05-18T00:00:00+00:00"
      },
      {
          "id": 24,
          "episode_number": 1,
          "title": "Shrek 2",
          "overview": "Shrek and Fiona meet Fiona’s parents but trouble follows when a scheming Fairy Godmother sets her sights on the kingdom.",
          "runtime": 93,
          "video_url": "https://www.youtube.com/watch?v=oW-vf54cUes",
          "release_date": "2004-05-19",
          "seasonId": 24,
          "createdAt": "2004-05-19T00:00:00+00:00",
          "updatedAt": "2004-05-19T00:00:00+00:00"
      },
      {
          "id": 25,
          "episode_number": 1,
          "title": "Shrek the Third",
          "overview": "Shrek sets off to find the rightful heir to the throne of Far Far Away after King Harold falls ill.",
          "runtime": 93,
          "video_url": "https://www.youtube.com/watch?v=_MoIr7811Bs",
          "release_date": "2007-05-18",
          "seasonId": 25,
          "createdAt": "2007-05-18T00:00:00+00:00",
          "updatedAt": "2007-05-18T00:00:00+00:00"
      },
      {
          "id": 26,
          "episode_number": 1,
          "title": "Shrek Forever After",
          "overview": "Shrek makes a deal with Rumpelstiltskin that changes everything, sending him to a twisted version of his world.",
          "runtime": 93,
          "video_url": "https://www.youtube.com/watch?v=Ma9oseKpj9g",
          "release_date": "2010-05-21",
          "seasonId": 26,
          "createdAt": "2010-05-21T00:00:00+00:00",
          "updatedAt": "2010-05-21T00:00:00+00:00"
      },
      {
          "id": 27,
          "episode_number": 1,
          "title": "Transformers",
          "overview": "The war between Autobots and Decepticons reaches Earth, where young Sam Witwicky becomes the key to their conflict.",
          "runtime": 144,
          "video_url": "https://www.youtube.com/watch?v=v8ItGrI-Ou0",
          "release_date": "2007-07-03",
          "seasonId": 27,
          "createdAt": "2007-07-03T00:00:00+00:00",
          "updatedAt": "2007-07-03T00:00:00+00:00"
      },
      {
          "id": 28,
          "episode_number": 1,
          "title": "Transformers: Revenge of the Fallen",
          "overview": "The Autobots join forces with humans as a new evil threatens to destroy Earth— the Fallen has awakened.",
          "runtime": 150,
          "video_url": "https://www.youtube.com/watch?v=fnXzKwUgDhg",
          "release_date": "2009-06-24",
          "seasonId": 28,
          "createdAt": "2009-06-24T00:00:00+00:00",
          "updatedAt": "2009-06-24T00:00:00+00:00"
      },
      {
          "id": 29,
          "episode_number": 1,
          "title": "Batman Begins",
          "overview": "Bruce Wayne becomes Batman to fight crime and corruption in Gotham City after being trained by Ra’s al Ghul and the League of Shadows.",
          "runtime": 140,
          "video_url": "https://www.youtube.com/watch?v=neY2xVmOfUM",
          "release_date": "2005-06-15",
          "seasonId": 29,
          "createdAt": "2005-06-15T00:00:00+00:00",
          "updatedAt": "2005-06-15T00:00:00+00:00"
      },
      {
          "id": 30,
          "episode_number": 1,
          "title": "The Dark Knight",
          "overview": "Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice when the Joker emerges.",
          "runtime": 152,
          "video_url": "https://www.youtube.com/watch?v=EXeTwQWrcwY&t=4s",
          "release_date": "2008-07-18",
          "seasonId": 30,
          "createdAt": "2008-07-18T00:00:00+00:00",
          "updatedAt": "2008-07-18T00:00:00+00:00"
      },
      {
          "id": 31,
          "episode_number": 1,
          "title": "Iron Man",
          "overview": "After being kidnapped, billionaire Tony Stark builds a high-tech suit to escape and becomes the armored hero Iron Man.",
          "runtime": 126,
          "video_url": "https://www.youtube.com/watch?v=8ugaeA-nMTc",
          "release_date": "2008-05-02",
          "seasonId": 31,
          "createdAt": "2008-05-02T00:00:00+00:00",
          "updatedAt": "2008-05-02T00:00:00+00:00"
      },
      {
          "id": 32,
          "episode_number": 1,
          "title": "Iron Man 2",
          "overview": "Tony Stark struggles with his identity and faces a powerful new enemy, while revealing his Iron Man persona to the public.",
          "runtime": 124,
          "video_url": "https://www.youtube.com/watch?v=wKtcmiifycU",
          "release_date": "2010-05-07",
          "seasonId": 32,
          "createdAt": "2010-05-07T00:00:00+00:00",
          "updatedAt": "2010-05-07T00:00:00+00:00"
      },
      {
          "id": 33,
          "episode_number": 1,
          "title": "Audition",
          "overview": "A widower seeks a new wife via a conducting a fake audition—only to find the woman he chooses harbors a terrifying and deadly secret.",
          "runtime": 113,
          "video_url": "https://www.youtube.com/watch?v=EBQHp2__AVQ",
          "release_date": "2000-03-03",
          "seasonId": 33,
          "createdAt": "2000-03-03T00:00:00+00:00",
          "updatedAt": "2000-03-03T00:00:00+00:00"
      },
      {
          "id": 34,
          "episode_number": 1,
          "title": "Battle Royale",
          "overview": "In a dystopian alternate present-day Japan, high school students are randomly selected to kill each other until only one survivor remains.",
          "runtime": 114,
          "video_url": "https://www.youtube.com/watch?v=N0p1t-dC7Ko",
          "release_date": "2000-12-16",
          "seasonId": 34,
          "createdAt": "2000-12-16T00:00:00+00:00",
          "updatedAt": "2000-12-16T00:00:00+00:00"
      },
      {
          "id": 35,
          "episode_number": 1,
          "title": "Joint Security Area",
          "overview": "A mysterious shootout in the DMZ between North and South Korean soldiers prompts an investigation amid interpersonal tensions.",
          "runtime": 112,
          "video_url": "https://www.youtube.com/watch?v=PAdyN74BZ2I&t=10s",
          "release_date": "2000-09-20",
          "seasonId": 35,
          "createdAt": "2000-09-20T00:00:00+00:00",
          "updatedAt": "2000-09-20T00:00:00+00:00"
      },
      {
          "id": 36,
          "episode_number": 1,
          "title": "Avalon",
          "overview": "In a dystopian future, players enter a virtual reality war game to escape bleak reality—but the line between game and life blurs dangerously.",
          "runtime": 106,
          "video_url": "https://www.youtube.com/watch?v=KXRXclj99Xg",
          "release_date": "2001-01-20",
          "seasonId": 36,
          "createdAt": "2001-01-20T00:00:00+00:00",
          "updatedAt": "2001-01-20T00:00:00+00:00"
      },
      {
          "id": 37,
          "episode_number": 1,
          "title": "My Sassy Girl",
          "overview": "A quirky young woman unexpectedly enters a man's life; together they meet love, comedy, and heartbreak in Seoul.",
          "runtime": 110,
          "video_url": "https://www.youtube.com/watch?v=4lnyW3vIGvI",
          "release_date": "2001-07-27",
          "seasonId": 37,
          "createdAt": "2001-07-27T00:00:00+00:00",
          "updatedAt": "2001-07-27T00:00:00+00:00"
      },
      {
          "id": 38,
          "episode_number": 1,
          "title": "Memories of Murder",
          "overview": "Two detectives in 1980s rural Korea struggle to solve a series of brutal serial killings against a backdrop of police incompetence.",
          "runtime": 132,
          "video_url": "https://www.youtube.com/watch?v=-YvWR3Bds0A",
          "release_date": "2003-04-24",
          "seasonId": 38,
          "createdAt": "2003-04-24T00:00:00+00:00",
          "updatedAt": "2003-04-24T00:00:00+00:00"
      },
      {
          "id": 39,
          "episode_number": 1,
          "title": "A Tale of Two Sisters",
          "overview": "Two sisters return to their family home, but mysterious and terrifying events unfold involving their stepmother.",
          "runtime": 115,
          "video_url": "https://www.youtube.com/watch?v=GoUKtpTBqCw",
          "release_date": "2003-06-13",
          "seasonId": 39,
          "createdAt": "2003-06-13T00:00:00+00:00",
          "updatedAt": "2003-06-13T00:00:00+00:00"
      },
      {
          "id": 40,
          "episode_number": 1,
          "title": "Spring, Summer, Fall, Winter... and Spring",
          "overview": "A monk and his apprentice live and learn through the cycle of seasons in a floating monastery, exploring life’s stages.",
          "runtime": 103,
          "video_url": "https://www.youtube.com/watch?v=3rIgudJbHek",
          "release_date": "2003-09-19",
          "seasonId": 40,
          "createdAt": "2003-09-19T00:00:00+00:00",
          "updatedAt": "2003-09-19T00:00:00+00:00"
      },
      {
          "id": 41,
          "episode_number": 1,
          "title": "Oldboy",
          "overview": "After being inexplicably imprisoned for 15 years, a man is completed and given five days to find his captor.",
          "runtime": 120,
          "video_url": "https://www.youtube.com/watch?v=hBNBpNcuQHI",
          "release_date": "2003-11-21",
          "seasonId": 41,
          "createdAt": "2003-11-21T00:00:00+00:00",
          "updatedAt": "2003-11-21T00:00:00+00:00"
      },
      {
          "id": 42,
          "episode_number": 1,
          "title": "Tokyo Godfathers",
          "overview": "Three homeless people in Tokyo find an abandoned baby on Christmas Eve and set out to find its parents.",
          "runtime": 92,
          "video_url": "https://www.youtube.com/watch?v=ZL_2E-HfIZY",
          "release_date": "2003-11-08",
          "seasonId": 42,
          "createdAt": "2003-11-08T00:00:00+00:00",
          "updatedAt": "2003-11-08T00:00:00+00:00"
      },
      {
          "id": 43,
          "episode_number": 1,
          "title": "Nobody Knows",
          "overview": "Four children are left to fend for themselves in a small Tokyo apartment, hidden from the world by their mother’s disappearance.",
          "runtime": 141,
          "video_url": "https://www.youtube.com/watch?v=IvHnibXMpGk",
          "release_date": "2004-08-07",
          "seasonId": 43,
          "createdAt": "2004-08-07T00:00:00+00:00",
          "updatedAt": "2004-08-07T00:00:00+00:00"
      },
      {
          "id": 44,
          "episode_number": 1,
          "title": "Howl’s Moving Castle",
          "overview": "Sophie, transformed into an elderly woman by a witch’s curse, seeks out the wizard Howl and his magical, walking castle to break the spell.",
          "runtime": 119,
          "video_url": "https://www.youtube.com/watch?v=iwROgK94zcM",
          "release_date": "2004-11-20",
          "seasonId": 44,
          "createdAt": "2004-11-20T00:00:00+00:00",
          "updatedAt": "2004-11-20T00:00:00+00:00"
      },
      {
          "id": 45,
          "episode_number": 1,
          "title": "Always: Sunset on Third Street",
          "overview": "Set in 1958 Tokyo, a lonely ex-soldier and an orphaned girl struggle to find hope and happiness in post-war Japan.",
          "runtime": 138,
          "video_url": "https://www.youtube.com/watch?v=5gdbJwf5Aww",
          "release_date": "2005-11-05",
          "seasonId": 45,
          "createdAt": "2005-11-05T00:00:00+00:00",
          "updatedAt": "2005-11-05T00:00:00+00:00"
      },
      {
          "id": 46,
          "episode_number": 1,
          "title": "Memories of Matsuko",
          "overview": "A colorful but tragic chronicle of a woman’s life, full of dreams, regrets, and unexpected sorrow.",
          "runtime": 133,
          "video_url": "https://www.youtube.com/watch?v=14eEHsh8xQE",
          "release_date": "2006-05-27",
          "seasonId": 46,
          "createdAt": "2006-05-27T00:00:00+00:00",
          "updatedAt": "2006-05-27T00:00:00+00:00"
      },
      {
          "id": 47,
          "episode_number": 1,
          "title": "The Host",
          "overview": "A monster emerges from Seoul’s Han River and a dysfunctional family bands together to rescue their youngest member.",
          "runtime": 119,
          "video_url": "https://www.youtube.com/watch?v=xrLY0wO06l4",
          "release_date": "2006-07-27",
          "seasonId": 47,
          "createdAt": "2006-07-27T00:00:00+00:00",
          "updatedAt": "2006-07-27T00:00:00+00:00"
      },
      {
          "id": 48,
          "episode_number": 1,
          "title": "Secret Sunshine",
          "overview": "A recently widowed woman moves to her late husband’s hometown, facing grief, faith, and personal tragedy.",
          "runtime": 133,
          "video_url": "https://www.youtube.com/watch?v=kOBEO96tJv8",
          "release_date": "2007-05-24",
          "seasonId": 48,
          "createdAt": "2007-05-24T00:00:00+00:00",
          "updatedAt": "2007-05-24T00:00:00+00:00"
      },
      {
          "id": 49,
          "episode_number": 1,
          "title": "20th Century Boys 1: Beginning of the End",
          "overview": "Childhood friends must reconnect as an apocalyptic cult surfaces, connected to their past imagination and promises.",
          "runtime": 119,
          "video_url": "https://www.youtube.com/watch?v=JY7_Ho56PcQ",
          "release_date": "2008-08-30",
          "seasonId": 49,
          "createdAt": "2008-08-30T00:00:00+00:00",
          "updatedAt": "2008-08-30T00:00:00+00:00"
      },
      {
          "id": 50,
          "episode_number": 1,
          "title": "The Chaser",
          "overview": "A disgraced ex-detective tracks down a serial killer, but time is running out as the killer taunts him.",
          "runtime": 125,
          "video_url": "https://www.youtube.com/watch?v=t20zhdWoBzQ",
          "release_date": "2008-02-14",
          "seasonId": 50,
          "createdAt": "2008-02-14T00:00:00+00:00",
          "updatedAt": "2008-02-14T00:00:00+00:00"
      },
      {
          "id": 51,
          "episode_number": 1,
          "title": "Confessions",
          "overview": "A middle-school teacher seeks revenge after her daughter’s death through subtle psychological means against her students.",
          "runtime": 106,
          "video_url": "https://www.youtube.com/watch?v=sepHKPOwdwk",
          "release_date": "2010-06-05",
          "seasonId": 51,
          "createdAt": "2010-06-05T00:00:00+00:00",
          "updatedAt": "2010-06-05T00:00:00+00:00"
      },
      {
          "id": 52,
          "episode_number": 1,
          "title": "The Man from Nowhere",
          "overview": "A quiet pawnshop owner goes on a violent rampage to rescue a kidnapped child he befriends.",
          "runtime": 119,
          "video_url": "https://www.youtube.com/watch?v=8ykmoZaWLDI",
          "release_date": "2010-08-04",
          "seasonId": 52,
          "createdAt": "2010-08-04T00:00:00+00:00",
          "updatedAt": "2010-08-04T00:00:00+00:00"
      },
      {
          "id": 53,
          "episode_number": 1,
          "title": "Hai bến một dòng sông",
          "overview": "Chuyện tình cảm động giữa hai con người ở hai đầu chiến tuyến trong thời kỳ hậu chiến.",
          "runtime": 95,
          "video_url": "https://www.youtube.com/watch?v=kFqES_3lYTk",
          "release_date": "2000-09-15",
          "seasonId": 53,
          "createdAt": "2000-09-15T00:00:00+00:00",
          "updatedAt": "2000-09-15T00:00:00+00:00"
      },
      {
          "id": 54,
          "episode_number": 1,
          "title": "Rồng xanh",
          "overview": "Câu chuyện hình sự đầy kịch tính với các mối quan hệ phức tạp trong thế giới ngầm Việt Nam.",
          "runtime": 100,
          "video_url": "https://www.youtube.com/watch?v=TpYv3Cg5G0Y",
          "release_date": "2001-11-10",
          "seasonId": 54,
          "createdAt": "2001-11-10T00:00:00+00:00",
          "updatedAt": "2001-11-10T00:00:00+00:00"
      },
      {
          "id": 55,
          "episode_number": 1,
          "title": "Mùa len trâu",
          "overview": "Một hành trình gian khổ của những người chăn trâu vùng đồng bằng sông Cửu Long.",
          "runtime": 102,
          "video_url": "https://www.youtube.com/watch?v=H8NS65wXZ5Y",
          "release_date": "2004-09-01",
          "seasonId": 55,
          "createdAt": "2004-09-01T00:00:00+00:00",
          "updatedAt": "2004-09-01T00:00:00+00:00"
      },
      {
          "id": 56,
          "episode_number": 1,
          "title": "Những cô gái chân dài",
          "overview": "Phim về thế giới người mẫu với những khát vọng và cạm bẫy của sự nổi tiếng.",
          "runtime": 98,
          "video_url": "https://www.youtube.com/watch?v=Kb2t_fPe0bw",
          "release_date": "2004-12-03",
          "seasonId": 56,
          "createdAt": "2004-12-03T00:00:00+00:00",
          "updatedAt": "2004-12-03T00:00:00+00:00"
      },
      {
          "id": 57,
          "episode_number": 1,
          "title": "Sống trong sợ hãi",
          "overview": "Một người lính trở về từ chiến tranh đối mặt với những ám ảnh và nỗi đau quá khứ.",
          "runtime": 100,
          "video_url": "https://www.youtube.com/watch?v=-VrWshOIYQk",
          "release_date": "2005-10-10",
          "seasonId": 57,
          "createdAt": "2005-10-10T00:00:00+00:00",
          "updatedAt": "2005-10-10T00:00:00+00:00"
      },
      {
          "id": 58,
          "episode_number": 1,
          "title": "Thời xa vắng",
          "overview": "Một câu chuyện cảm động về tuổi trẻ, tình yêu và thời kỳ hậu chiến tại Việt Nam.",
          "runtime": 96,
          "video_url": "https://www.youtube.com/watch?v=JzvDNb2ezQM",
          "release_date": "2005-12-16",
          "seasonId": 58,
          "createdAt": "2005-12-16T00:00:00+00:00",
          "updatedAt": "2005-12-16T00:00:00+00:00"
      },
      {
          "id": 59,
          "episode_number": 1,
          "title": "Áo lụa Hà Đông",
          "overview": "Bối cảnh Việt Nam trong chiến tranh, câu chuyện cảm động về tình mẫu tử.",
          "runtime": 103,
          "video_url": "https://www.youtube.com/watch?v=IqE7YuC1Qyw",
          "release_date": "2006-10-20",
          "seasonId": 59,
          "createdAt": "2006-10-20T00:00:00+00:00",
          "updatedAt": "2006-10-20T00:00:00+00:00"
      },
      {
          "id": 60,
          "episode_number": 1,
          "title": "Dòng máu anh hùng",
          "overview": "Một chiến sĩ yêu nước hoạt động trong thời Pháp thuộc, đấu tranh bảo vệ dân tộc.",
          "runtime": 110,
          "video_url": "https://www.youtube.com/watch?v=fldOtUA_1LA",
          "release_date": "2007-04-27",
          "seasonId": 60,
          "createdAt": "2007-04-27T00:00:00+00:00",
          "updatedAt": "2007-04-27T00:00:00+00:00"
      },
          {
          "id": 61,
          "episode_number": 1,
          "title": "Cú và chim se sẻ",
          "overview": "Chuyện tình yêu nhẹ nhàng giữa một cô gái mù và một chàng trai bất hạnh.",
          "runtime": 92,
          "video_url": "https://www.youtube.com/watch?v=Vkjg8DDk62c",
          "release_date": "2007-11-16",
          "seasonId": 61,
          "createdAt": "2007-11-16T00:00:00+00:00",
          "updatedAt": "2007-11-16T00:00:00+00:00"
      },
      {
          "id": 62,
          "episode_number": 1,
          "title": "Trăng nơi đáy giếng",
          "overview": "Một phụ nữ Huế hi sinh bản thân để giữ danh dự gia đình, nhưng bị xã hội hiểu lầm.",
          "runtime": 94,
          "video_url": "https://www.youtube.com/watch?v=ICIAvJwp5Vs",
          "release_date": "2008-09-29",
          "seasonId": 62,
          "createdAt": "2008-09-29T00:00:00+00:00",
          "updatedAt": "2008-09-29T00:00:00+00:00"
      },
      {
          "id": 63,
          "episode_number": 1,
          "title": "Nụ hôn thần chết",
          "overview": "Một thiên thần chết phải lòng cô gái phàm trần và quyết định thay đổi định mệnh.",
          "runtime": 95,
          "video_url": "https://www.youtube.com/watch?v=7SnKvqPGYpo",
          "release_date": "2008-01-25",
          "seasonId": 63,
          "createdAt": "2008-01-25T00:00:00+00:00",
          "updatedAt": "2008-01-25T00:00:00+00:00"
      },
      {
          "id": 64,
          "episode_number": 1,
          "title": "Giải cứu thần chết",
          "overview": "Một học sinh trung học bất ngờ gặp thần chết và cùng nhau trải qua những tình huống dở khóc dở cười.",
          "runtime": 100,
          "video_url": "https://www.youtube.com/watch?v=96bJq2hPVVE",
          "release_date": "2009-01-23",
          "seasonId": 64,
          "createdAt": "2009-01-23T00:00:00+00:00",
          "updatedAt": "2009-01-23T00:00:00+00:00"
      },
      {
          "id": 65,
          "episode_number": 1,
          "title": "Chơi vơi",
          "overview": "Một bộ phim tâm lý sâu sắc về sự cô đơn và những khát khao tình cảm trong xã hội hiện đại.",
          "runtime": 104,
          "video_url": "https://www.youtube.com/watch?v=K-61KVhx3iw",
          "release_date": "2009-10-09",
          "seasonId": 65,
          "createdAt": "2009-10-09T00:00:00+00:00",
          "updatedAt": "2009-10-09T00:00:00+00:00"
      },
      {
          "id": 66,
          "episode_number": 1,
          "title": "14 ngày phép",
          "overview": "Câu chuyện nhẹ nhàng về tình yêu giữa một người lính và cô gái Sài Gòn trong thời gian nghỉ phép.",
          "runtime": 97,
          "video_url": "https://www.youtube.com/watch?v=pmi_zwRY258",
          "release_date": "2009-12-04",
          "seasonId": 66,
          "createdAt": "2009-12-04T00:00:00+00:00",
          "updatedAt": "2009-12-04T00:00:00+00:00"
      },
      {
          "id": 67,
          "episode_number": 1,
          "title": "Passport to Love",
          "overview": "Hai chàng trai du học sinh Việt tại Mỹ phải đối mặt với lựa chọn giữa tình yêu và lý tưởng cuộc sống.",
          "runtime": 106,
          "video_url": "https://www.youtube.com/watch?v=Qj9EDnsT0QU",
          "release_date": "2009-03-06",
          "seasonId": 67,
          "createdAt": "2009-03-06T00:00:00+00:00",
          "updatedAt": "2009-03-06T00:00:00+00:00"
      },
      {
          "id": 68,
          "episode_number": 1,
          "title": "Đẹp từng centimét",
          "overview": "Chuyện tình hài hước giữa một đạo diễn và cô gái xinh đẹp thích nổi tiếng.",
          "runtime": 99,
          "video_url": "https://www.youtube.com/watch?v=bdSzZyQazmg",
          "release_date": "2009-02-13",
          "seasonId": 68,
          "createdAt": "2009-02-13T00:00:00+00:00",
          "updatedAt": "2009-02-13T00:00:00+00:00"
      },
      {
          "id": 69,
          "episode_number": 1,
          "title": "Bẫy rồng",
          "overview": "Một nữ sát thủ mang bí danh Phượng Hoàng đỏ cùng hành trình tìm lại chính mình.",
          "runtime": 102,
          "video_url": "https://www.youtube.com/watch?v=K_XzuDju_E0",
          "release_date": "2009-12-18",
          "seasonId": 69,
          "createdAt": "2009-12-18T00:00:00+00:00",
          "updatedAt": "2009-12-18T00:00:00+00:00"
      },
      {
          "id": 70,
          "episode_number": 1,
          "title": "Cánh đồng bất tận",
          "overview": "Câu chuyện cảm động về cuộc sống và tình cảm của một gia đình miền Tây Nam Bộ.",
          "runtime": 105,
          "video_url": "https://www.youtube.com/watch?v=OVxTkSorRyc",
          "release_date": "2010-10-22",
          "seasonId": 70,
          "createdAt": "2010-10-22T00:00:00+00:00",
          "updatedAt": "2010-10-22T00:00:00+00:00"
      },
      {
          "id": 71,
          "episode_number": 1,
          "title": "Để Mai Tính",
          "overview": "Một câu chuyện tình hài hước giữa một anh chàng nghèo và cô ca sĩ nổi tiếng.",
          "runtime": 100,
          "video_url": "https://www.youtube.com/watch?v=JQPzSUqEBVQ",
          "release_date": "2010-04-23",
          "seasonId": 71,
          "createdAt": "2010-04-23T00:00:00+00:00",
          "updatedAt": "2010-04-23T00:00:00+00:00"
      },
      {
          "id": 72,
          "episode_number": 1,
          "title": "Nụ hôn rực rỡ",
          "overview": "Một nhóm bạn trẻ tham gia chương trình truyền hình thực tế và những mối quan hệ dần nảy sinh.",
          "runtime": 96,
          "video_url": "https://www.youtube.com/watch?v=IQU2HF434pE",
          "release_date": "2010-03-26",
          "seasonId": 72,
          "createdAt": "2010-03-26T00:00:00+00:00",
          "updatedAt": "2010-03-26T00:00:00+00:00"
      },
      {
          "id": 73,
          "episode_number": 1,
          "title": "Captain America: The First Avenger",
          "overview": "Steve Rogers, một thanh niên yếu ớt được biến đổi thành siêu chiến binh Captain America để chiến đấu chống lại HYDRA trong Thế chiến II.",
          "runtime": 124,
          "video_url": "https://www.youtube.com/watch?v=qi5UTD7kEr0",
          "release_date": "2011-07-22",
          "seasonId": 73,
          "createdAt": "2011-07-22T00:00:00+00:00",
          "updatedAt": "2011-07-22T00:00:00+00:00"
      },
      {
          "id": 74,
          "episode_number": 1,
          "title": "Captain America: The Winter Soldier",
          "overview": "Captain America tiếp tục thích nghi với thế giới hiện đại và hợp tác với Black Widow để vạch trần một âm mưu trong chính S.H.I.E.L.D.",
          "runtime": 136,
          "video_url": "https://www.youtube.com/watch?v=7SlILk2WMTI",
          "release_date": "2014-04-04",
          "seasonId": 74,
          "createdAt": "2014-04-04T00:00:00+00:00",
          "updatedAt": "2014-04-04T00:00:00+00:00"
      },
      {
          "id": 75,
          "episode_number": 1,
          "title": "Captain America: Civil War",
          "overview": "Sau một nhiệm vụ thất bại, các siêu anh hùng bị chia rẽ về trách nhiệm và kiểm soát, dẫn đến một cuộc nội chiến nội bộ.",
          "runtime": 147,
          "video_url": "https://www.youtube.com/watch?v=dKrVegVI0Us",
          "release_date": "2016-05-06",
          "seasonId": 75,
          "createdAt": "2016-05-06T00:00:00+00:00",
          "updatedAt": "2016-05-06T00:00:00+00:00"
      },
      {
          "id": 76,
          "episode_number": 1,
          "title": "The Hunger Games",
          "overview": "Katniss Everdeen tình nguyện thay thế em gái mình để tham gia trò chơi sinh tử tại Panem.",
          "runtime": 142,
          "video_url": "https://www.youtube.com/watch?v=mfmrPu43DF8",
          "release_date": "2012-03-23",
          "seasonId": 76,
          "createdAt": "2012-03-23T00:00:00+00:00",
          "updatedAt": "2012-03-23T00:00:00+00:00"
      },
      {
          "id": 77,
          "episode_number": 1,
          "title": "The Hunger Games: Catching Fire",
          "overview": "Katniss và Peeta bị lôi kéo vào một vòng trò chơi chết người khác khi chính phủ muốn tiêu diệt họ.",
          "runtime": 146,
          "video_url": "https://www.youtube.com/watch?v=MkvUNfySGQU",
          "release_date": "2013-11-22",
          "seasonId": 77,
          "createdAt": "2013-11-22T00:00:00+00:00",
          "updatedAt": "2013-11-22T00:00:00+00:00"
      },
      {
          "id": 78,
          "episode_number": 1,
          "title": "The Hunger Games: Mockingjay – Part 1",
          "overview": "Katniss trở thành biểu tượng của cuộc cách mạng khi chiến đấu chống lại Capitol.",
          "runtime": 123,
          "video_url": "https://www.youtube.com/watch?v=3PkkHsuMrho",
          "release_date": "2014-11-21",
          "seasonId": 78,
          "createdAt": "2014-11-21T00:00:00+00:00",
          "updatedAt": "2014-11-21T00:00:00+00:00"
      },
      {
          "id": 79,
          "episode_number": 1,
          "title": "The Hunger Games: Mockingjay – Part 2",
          "overview": "Cuộc chiến giữa quân nổi dậy và Capitol đạt đến đỉnh điểm khi Katniss đối mặt với Tổng thống Snow.",
          "runtime": 137,
          "video_url": "https://www.youtube.com/watch?v=3zVaD7t39w8",
          "release_date": "2015-11-20",
          "seasonId": 79,
          "createdAt": "2015-11-20T00:00:00+00:00",
          "updatedAt": "2015-11-20T00:00:00+00:00"
      },
      {
          "id": 80,
          "episode_number": 1,
          "title": "John Wick",
          "overview": "Một sát thủ huyền thoại quay trở lại thế giới ngầm để trả thù cho cái chết của chú chó yêu quý.",
          "runtime": 101,
          "video_url": "https://www.youtube.com/watch?v=C0BMx-qxsP4",
          "release_date": "2014-10-24",
          "seasonId": 80,
          "createdAt": "2014-10-24T00:00:00+00:00",
          "updatedAt": "2014-10-24T00:00:00+00:00"
      },
      {
          "id": 81,
          "episode_number": 1,
          "title": "John Wick: Chapter 2",
          "overview": "John Wick buộc phải quay lại thế giới ngầm do một lời thề máu từ quá khứ.",
          "runtime": 122,
          "video_url": "https://www.youtube.com/watch?v=XGk2EfbD_Ps",
          "release_date": "2017-02-10",
          "seasonId": 81,
          "createdAt": "2017-02-10T00:00:00+00:00",
          "updatedAt": "2017-02-10T00:00:00+00:00"
      },
      {
          "id": 82,
          "episode_number": 1,
          "title": "John Wick: Chapter 3 – Parabellum",
          "overview": "John Wick bị săn đuổi bởi toàn bộ sát thủ thế giới sau khi bị khai trừ khỏi hội sát thủ.",
          "runtime": 131,
          "video_url": "https://www.youtube.com/watch?v=M7XM597XO94",
          "release_date": "2019-05-17",
          "seasonId": 82,
          "createdAt": "2019-05-17T00:00:00+00:00",
          "updatedAt": "2019-05-17T00:00:00+00:00"
      },
      {
          "id": 83,
          "episode_number": 1,
          "title": "Mission: Impossible – Ghost Protocol",
          "overview": "Ethan Hunt và nhóm IMF bị truy nã sau một cuộc điều tra sai lệch và phải ngăn chặn chiến tranh hạt nhân.",
          "runtime": 133,
          "video_url": "https://www.youtube.com/watch?v=EDGYVFZxsXQ",
          "release_date": "2011-12-16",
          "seasonId": 83,
          "createdAt": "2011-12-16T00:00:00+00:00",
          "updatedAt": "2011-12-16T00:00:00+00:00"
      },
      {
          "id": 84,
          "episode_number": 1,
          "title": "Mission: Impossible – Rogue Nation",
          "overview": "Ethan Hunt và nhóm IMF đối đầu với tổ chức ngầm Syndicate đe dọa thế giới.",
          "runtime": 131,
          "video_url": "https://www.youtube.com/watch?v=gOW_azQbOjw",
          "release_date": "2015-07-31",
          "seasonId": 84,
          "createdAt": "2015-07-31T00:00:00+00:00",
          "updatedAt": "2015-07-31T00:00:00+00:00"
      },
      {
          "id": 85,
          "episode_number": 1,
          "title": "Mission: Impossible – Fallout",
          "overview": "Một nhiệm vụ thất bại buộc Ethan Hunt và nhóm IMF phải sửa chữa hậu quả để cứu thế giới.",
          "runtime": 147,
          "video_url": "https://www.youtube.com/watch?v=wb49-oV0F78",
          "release_date": "2018-07-27",
          "seasonId": 85,
          "createdAt": "2018-07-27T00:00:00+00:00",
          "updatedAt": "2018-07-27T00:00:00+00:00"
      },
          {
          "id": 86,
          "episode_number": 1,
          "title": "Mission: Impossible – Dead Reckoning Part One",
          "overview": "Ethan Hunt phải đối mặt với một mối đe dọa toàn cầu mới và sự thật về quá khứ.",
          "runtime": 163,
          "video_url": "https://www.youtube.com/watch?v=avz06PDqDbM",
          "release_date": "2023-07-12",
          "seasonId": 86,
          "createdAt": "2023-07-12T00:00:00+00:00",
          "updatedAt": "2023-07-12T00:00:00+00:00"
      },
      {
          "id": 87,
          "episode_number": 1,
          "title": "Mission: Impossible – The Final Reckoning",
          "overview": "Chương cuối cùng trong loạt phim Mission: Impossible với sứ mệnh cuối cùng của Ethan Hunt.",
          "runtime": 160,
          "video_url": "https://www.youtube.com/watch?v=fsQgc9pCyDU",
          "release_date": "2025-05-23",
          "seasonId": 87,
          "createdAt": "2025-05-23T00:00:00+00:00",
          "updatedAt": "2025-05-23T00:00:00+00:00"
      },
      {
          "id": 88,
          "episode_number": 1,
          "title": "Scream 4",
          "overview": "Mười năm sau các sự kiện ở Woodsboro, Sidney trở lại và đối mặt với những vụ giết người mới.",
          "runtime": 111,
          "video_url": "https://www.youtube.com/watch?v=JKRtyVLWV-E",
          "release_date": "2011-04-15",
          "seasonId": 88,
          "createdAt": "2011-04-15T00:00:00+00:00",
          "updatedAt": "2011-04-15T00:00:00+00:00"
      },
      {
          "id": 89,
          "episode_number": 1,
          "title": "Scream",
          "overview": "Một nhóm thiếu niên phải đối mặt với một Ghostface mới khi quay lại thị trấn Woodsboro.",
          "runtime": 114,
          "video_url": "https://www.youtube.com/watch?v=beToTslH17s",
          "release_date": "2022-01-14",
          "seasonId": 89,
          "createdAt": "2022-01-14T00:00:00+00:00",
          "updatedAt": "2022-01-14T00:00:00+00:00"
      },
      {
          "id": 90,
          "episode_number": 1,
          "title": "Scream VI",
          "overview": "Các nạn nhân sống sót đến New York để bắt đầu lại, nhưng một Ghostface mới tiếp tục đeo bám.",
          "runtime": 122,
          "video_url": "https://www.youtube.com/watch?v=h74AXqw4Opc",
          "release_date": "2023-03-10",
          "seasonId": 90,
          "createdAt": "2023-03-10T00:00:00+00:00",
          "updatedAt": "2023-03-10T00:00:00+00:00"
      },
          {
          "id": 91,
          "episode_number": 1,
          "title": "Black Panther",
          "overview": "Sau cái chết của cha mình, T'Challa trở về Wakanda để kế vị ngai vàng và trở thành Black Panther.",
          "runtime": 134,
          "video_url": "https://www.youtube.com/watch?v=xjDjIWPwcPU",
          "release_date": "2018-02-16",
          "seasonId": 91,
          "createdAt": "2018-02-16T00:00:00+00:00",
          "updatedAt": "2018-02-16T00:00:00+00:00"
      },
      {
          "id": 92,
          "episode_number": 1,
          "title": "F1",
          "overview": "Bộ phim thể thao hành động xoay quanh giải đua xe Công thức 1 và cuộc sống sau tay lái của các tay đua.",
          "runtime": 130,
          "video_url": "https://www.youtube.com/watch?v=69ffwl-8pCU",
          "release_date": "2025-06-27",
          "seasonId": 92,
          "createdAt": "2025-06-27T00:00:00+00:00",
          "updatedAt": "2025-06-27T00:00:00+00:00"
      },
      {
          "id": 93,
          "episode_number": 1,
          "title": "Kaiji 2",
          "overview": "Kaiji tiếp tục dấn thân vào các trò chơi sinh tử đầy rủi ro để giành lấy cơ hội đổi đời.",
          "runtime": 133,
          "video_url": "https://www.youtube.com/watch?v=MkPO9lwkydc",
          "release_date": "2011-11-05",
          "seasonId": 93,
          "createdAt": "2011-11-05T00:00:00+00:00",
          "updatedAt": "2011-11-05T00:00:00+00:00"
      },
      {
          "id": 94,
          "episode_number": 1,
          "title": "Kaiji: Final Game",
          "overview": "Kaiji tham gia vào trò chơi cuối cùng với hy vọng thoát khỏi nghèo đói và giành lại cuộc sống tự do.",
          "runtime": 128,
          "video_url": "https://www.youtube.com/watch?v=V9KUnjEGHMw",
          "release_date": "2020-01-10",
          "seasonId": 94,
          "createdAt": "2020-01-10T00:00:00+00:00",
          "updatedAt": "2020-01-10T00:00:00+00:00"
      },
      {
          "id": 95,
          "episode_number": 1,
          "title": "Rurouni Kenshin: The Final",
          "overview": "Kenshin đối mặt với quá khứ khi kẻ thù cũ xuất hiện, mang theo mối thù chưa được giải quyết.",
          "runtime": 138,
          "video_url": "https://www.youtube.com/watch?v=eAA1ZDSCWjI",
          "release_date": "2021-04-23",
          "seasonId": 95,
          "createdAt": "2021-04-23T00:00:00+00:00",
          "updatedAt": "2021-04-23T00:00:00+00:00"
      },
      {
          "id": 96,
          "episode_number": 1,
          "title": "Detective Conan: The Million-dollar Pentagram",
          "overview": "Conan phải phá giải một vụ án liên quan đến một ngôi sao năm cánh và một kho báu khổng lồ.",
          "runtime": 111,
          "video_url": "https://www.youtube.com/watch?v=sz5TW2LaLPU",
          "release_date": "2024-04-12",
          "seasonId": 96,
          "createdAt": "2024-04-12T00:00:00+00:00",
          "updatedAt": "2024-04-12T00:00:00+00:00"
      },
      {
          "id": 97,
          "episode_number": 1,
          "title": "Detective Conan: One-eyed Flashback",
          "overview": "Conan vướng vào một vụ án bí ẩn với manh mối liên quan đến một tên sát nhân có biệt danh 'Mắt một'.",
          "runtime": 112,
          "video_url": "https://www.youtube.com/watch?v=D22Ezh_UiVM",
          "release_date": "2025-04-11",
          "seasonId": 97,
          "createdAt": "2025-04-11T00:00:00+00:00",
          "updatedAt": "2025-04-11T00:00:00+00:00"
      },
      {
          "id": 98,
          "episode_number": 1,
          "title": "The Outlaws",
          "overview": "Thanh tra Ma Seok-do đối đầu với một băng đảng tội phạm khét tiếng tại quận Garibong, Seoul.",
          "runtime": 121,
          "video_url": "https://www.youtube.com/watch?v=MvPaDziB-ac",
          "release_date": "2017-10-03",
          "seasonId": 98,
          "createdAt": "2017-10-03T00:00:00+00:00",
          "updatedAt": "2017-10-03T00:00:00+00:00"
      },
      {
          "id": 99,
          "episode_number": 1,
          "title": "The Roundup",
          "overview": "Thanh tra Ma Seok-do truy bắt một tên tội phạm nguy hiểm tại Việt Nam.",
          "runtime": 106,
          "video_url": "https://www.youtube.com/watch?v=PDEl1rw_Vn0",
          "release_date": "2022-05-18",
          "seasonId": 99,
          "createdAt": "2022-05-18T00:00:00+00:00",
          "updatedAt": "2022-05-18T00:00:00+00:00"
      },
      {
          "id": 100,
          "episode_number": 1,
          "title": "The Roundup: No Way Out",
          "overview": "Ma Seok-do chiến đấu chống lại một tổ chức buôn ma túy có vũ khí công nghệ cao.",
          "runtime": 105,
          "video_url": "https://www.youtube.com/watch?v=jeW1dnBXSgk",
          "release_date": "2023-05-31",
          "seasonId": 100,
          "createdAt": "2023-05-31T00:00:00+00:00",
          "updatedAt": "2023-05-31T00:00:00+00:00"
      },
      {
          "id": 101,
          "episode_number": 1,
          "title": "The Roundup: Punishment",
          "overview": "Thanh tra Ma Seok-do phải truy bắt một trùm tội phạm tàn ác đe dọa toàn Seoul.",
          "runtime": 109,
          "video_url": "https://www.youtube.com/watch?v=q3D3ifQHzaY",
          "release_date": "2024-04-24",
          "seasonId": 101,
          "createdAt": "2024-04-24T00:00:00+00:00",
          "updatedAt": "2024-04-24T00:00:00+00:00"
      },
      {
          "id": 102,
          "episode_number": 1,
          "title": "Veteran 2",
          "overview": "Thanh tra Seo Do-cheol quay lại đối đầu với một thế lực mới trong giới tài phiệt.",
          "runtime": 114,
          "video_url": "https://www.youtube.com/watch?v=8eL_-IglIQM",
          "release_date": "2024-12-25",
          "seasonId": 102,
          "createdAt": "2024-12-25T00:00:00+00:00",
          "updatedAt": "2024-12-25T00:00:00+00:00"
      },
      {
          "id": 103,
          "episode_number": 1,
          "title": "The Priests",
          "overview": "Hai linh mục thực hiện nghi lễ trừ tà để cứu một cô gái trẻ khỏi bị quỷ ám.",
          "runtime": 108,
          "video_url": "https://www.youtube.com/watch?v=S4tBEVvSzSk",
          "release_date": "2015-11-05",
          "seasonId": 103,
          "createdAt": "2015-11-05T00:00:00+00:00",
          "updatedAt": "2015-11-05T00:00:00+00:00"
      },
      {
          "id": 104,
          "episode_number": 1,
          "title": "Dark Nuns",
          "overview": "Hai nữ tu thực hiện nghi lễ trừ tà bất hợp pháp để cứu bé trai bị quỷ ám.",
          "runtime": 114,
          "video_url": "https://www.youtube.com/watch?v=hJT_zC94TjI",
          "release_date": "2025-01-10",
          "seasonId": 104,
          "createdAt": "2025-01-10T00:00:00+00:00",
          "updatedAt": "2025-01-10T00:00:00+00:00"
      },
      {
          "id": 105,
          "episode_number": 1,
          "title": "Hitman: Agent Jun",
          "overview": "Cựu đặc vụ Jun bị kéo vào thế giới gián điệp khi bị nhắm mục tiêu qua webtoon của mình.",
          "runtime": 110,
          "video_url": "https://www.youtube.com/watch?v=q8Jez23zo5Q",
          "release_date": "2020-01-22",
          "seasonId": 105,
          "createdAt": "2020-01-22T00:00:00+00:00",
          "updatedAt": "2020-01-22T00:00:00+00:00"
      },
      {
          "id": 106,
          "episode_number": 1,
          "title": "Hitman 2",
          "overview": "Tiếp nối cuộc phiêu lưu của Jun với kẻ thù mới, nhân vật phát triển sâu sắc hơn.",
          "runtime": 115,
          "video_url": "https://www.youtube.com/watch?v=ZKVWkoHFXhU",
          "release_date": "2025-06-15",
          "seasonId": 106,
          "createdAt": "2025-06-15T00:00:00+00:00",
          "updatedAt": "2025-06-15T00:00:00+00:00"
      },
      {
          "id": 107,
          "episode_number": 1,
          "title": "Omniscient Reader",
          "overview": "Người đọc sống trong thế giới của tiểu thuyết mình từng đọc — đầy bất ngờ.",
          "runtime": 130,
          "video_url": "https://www.youtube.com/watch?v=OvgmOnfySDY",
          "release_date": "2025-12-05",
          "seasonId": 107,
          "createdAt": "2025-12-05T00:00:00+00:00",
          "updatedAt": "2025-12-05T00:00:00+00:00"
      },
      {
          "id": 108,
          "episode_number": 1,
          "title": "Harbin",
          "overview": "Điệp viên Hàn Quốc hoạt động bí mật vào thời kỳ Nhật chiếm đóng.",
          "runtime": 118,
          "video_url": "https://www.youtube.com/watch?v=APwvisWxjaI",
          "release_date": "2023-12-25",
          "seasonId": 108,
          "createdAt": "2023-12-25T00:00:00+00:00",
          "updatedAt": "2023-12-25T00:00:00+00:00"
      },
      {
          "id": 109,
          "episode_number": 1,
          "title": "Decision to Leave",
          "overview": "Thám tử bị cuốn vào chuyện tình bí ẩn với nghi phạm vụ án mình điều tra.",
          "runtime": 138,
          "video_url": "https://www.youtube.com/watch?v=d9BR3Z_-Hh8",
          "release_date": "2022-06-29",
          "seasonId": 109,
          "createdAt": "2022-06-29T00:00:00+00:00",
          "updatedAt": "2022-06-29T00:00:00+00:00"
      },
      {
          "id": 110,
          "episode_number": 1,
          "title": "Broker",
          "overview": "Hai người đàn ông tìm cách sắp xếp bố mẹ nuôi cho một đứa trẻ bị bỏ rơi.",
          "runtime": 129,
          "video_url": "https://www.youtube.com/watch?v=uPEUj7BPl2Q",
          "release_date": "2022-06-08",
          "seasonId": 110,
          "createdAt": "2022-06-08T00:00:00+00:00",
          "updatedAt": "2022-06-08T00:00:00+00:00"
      },
      {
          "id": 111,
          "episode_number": 1,
          "title": "Drive My Car",
          "overview": "Đạo diễn sân khấu tìm lại ý nghĩa cuộc sống sau cái chết của vợ qua hành trình xe.",
          "runtime": 179,
          "video_url": "https://www.youtube.com/watch?v=wxSecn55IS8",
          "release_date": "2021-08-20",
          "seasonId": 111,
          "createdAt": "2021-08-20T00:00:00+00:00",
          "updatedAt": "2021-08-20T00:00:00+00:00"
      },
      {
          "id": 112,
          "episode_number": 1,
          "title": "Sekigahara",
          "overview": "Phim sử thi Nhật Bản kể lại Trận Sekigahara định đoạt số phận quốc gia.",
          "runtime": 150,
          "video_url": "https://www.youtube.com/watch?v=Kgwgab-G2nY",
          "release_date": "2017-08-26",
          "seasonId": 112,
          "createdAt": "2017-08-26T00:00:00+00:00",
          "updatedAt": "2017-08-26T00:00:00+00:00"
      },
      {
          "id": 113,
          "episode_number": 1,
          "title": "Lật Mặt 3: Ba Chàng Khuyết",
          "overview": "Ba chàng trai khuyết tật quyết định lên đường đi tìm mẹ ruột, bắt đầu hành trình vừa cảm động vừa hài hước.",
          "runtime": 100,
          "video_url": "https://www.youtube.com/watch?v=KlOa0egcp2M",
          "release_date": "2018-04-20",
          "seasonId": 113,
          "createdAt": "2018-04-20T00:00:00+00:00",
          "updatedAt": "2018-04-20T00:00:00+00:00"
      },
      {
          "id": 114,
          "episode_number": 1,
          "title": "Lật Mặt 6: Tấm Vé Định Mệnh",
          "overview": "Một nhóm bạn thân vướng vào vòng xoáy của một tấm vé số định mệnh, kéo theo những biến cố không lường trước.",
          "runtime": 110,
          "video_url": "https://www.youtube.com/watch?v=L-XhraxUsAs",
          "release_date": "2023-04-28",
          "seasonId": 114,
          "createdAt": "2023-04-28T00:00:00+00:00",
          "updatedAt": "2023-04-28T00:00:00+00:00"
      },
      {
          "id": 115,
          "episode_number": 1,
          "title": "Lật Mặt 8: Vòng Tay Nắng",
          "overview": "Một câu chuyện đầy nhân văn về tình thân và sự tha thứ, đan xen các tình tiết hành động kịch tính.",
          "runtime": 112,
          "video_url": "https://www.youtube.com/watch?v=hUlBTt3NyGI",
          "release_date": "2025-04-25",
          "seasonId": 115,
          "createdAt": "2025-04-25T00:00:00+00:00",
          "updatedAt": "2025-04-25T00:00:00+00:00"
      },
          {
          "id": 116,
          "episode_number": 1,
          "title": "Battle of the Brides",
          "overview": "Hai cô dâu bị tráo nhầm chú rể trong một cuộc chiến hài hước và rối loạn trong ngày cưới.",
          "runtime": 98,
          "video_url": "https://www.youtube.com/watch?v=r-2o26_eMoY",
          "release_date": "2011-01-28",
          "seasonId": 116,
          "createdAt": "2011-01-28T00:00:00+00:00",
          "updatedAt": "2011-01-28T00:00:00+00:00"
      },
      {
          "id": 117,
          "episode_number": 1,
          "title": "Lost in Paradise",
          "overview": "Một câu chuyện tình cảm giữa ba con người bị xã hội ruồng bỏ tại TP.HCM.",
          "runtime": 103,
          "video_url": "https://www.youtube.com/watch?v=A9L-P1pXNmc",
          "release_date": "2011-10-14",
          "seasonId": 117,
          "createdAt": "2011-10-14T00:00:00+00:00",
          "updatedAt": "2011-10-14T00:00:00+00:00"
      },
      {
          "id": 118,
          "episode_number": 1,
          "title": "Scandal",
          "overview": "Câu chuyện hồi hộp và ly kỳ trong thế giới showbiz với những bí mật rùng rợn được hé lộ.",
          "runtime": 101,
          "video_url": "https://www.youtube.com/watch?v=9_TirLuxLH8",
          "release_date": "2012-10-12",
          "seasonId": 118,
          "createdAt": "2012-10-12T00:00:00+00:00",
          "updatedAt": "2012-10-12T00:00:00+00:00"
      },
      {
          "id": 119,
          "episode_number": 1,
          "title": "Bụi Đời Chợ Lớn",
          "overview": "Một bộ phim hành động mạnh mẽ lấy bối cảnh khu vực Chợ Lớn đầy rẫy tội phạm và bạo lực.",
          "runtime": 90,
          "video_url": "https://www.youtube.com/watch?v=b9pw1sdwyYs",
          "release_date": "2013-06-07",
          "seasonId": 119,
          "createdAt": "2013-06-07T00:00:00+00:00",
          "updatedAt": "2013-06-07T00:00:00+00:00"
      },
      {
          "id": 120,
          "episode_number": 1,
          "title": "Để Mai Tính 2",
          "overview": "Phần tiếp theo của câu chuyện tình hài hước, khi Hội trở lại với những rắc rối mới.",
          "runtime": 98,
          "video_url": "https://www.youtube.com/watch?v=ajtdC0Pnoa8",
          "release_date": "2014-12-12",
          "seasonId": 120,
          "createdAt": "2014-12-12T00:00:00+00:00",
          "updatedAt": "2014-12-12T00:00:00+00:00"
      },
          {
          "id": 121,
          "episode_number": 1,
          "title": "Em Là Bà Nội Của Anh",
          "overview": "Một bà lão tình cờ trẻ lại thành thiếu nữ và bắt đầu hành trình thực hiện những ước mơ dang dở của tuổi trẻ.",
          "runtime": 118,
          "video_url": "https://www.youtube.com/watch?v=L_iOZs6JZe0",
          "release_date": "2015-12-11",
          "seasonId": 121,
          "createdAt": "2015-12-11T00:00:00+00:00",
          "updatedAt": "2015-12-11T00:00:00+00:00"
      },
      {
          "id": 122,
          "episode_number": 1,
          "title": "Vu Quy Đại Náo",
          "overview": "Ba người bạn trẻ cùng nhau bỏ trốn khỏi đám cưới sắp đặt và rong ruỗi thực hiện mơ ước riêng.",
          "runtime": 103,
          "video_url": "https://www.youtube.com/watch?v=8-BIvwSwOfY",
          "release_date": "2019-02-22",
          "seasonId": 122,
          "createdAt": "2019-02-22T00:00:00+00:00",
          "updatedAt": "2019-02-22T00:00:00+00:00"
      },
      {
          "id": 123,
          "episode_number": 1,
          "title": "Hai Phượng",
          "overview": "Một người mẹ đơn thân truy đuổi những kẻ bắt cóc con gái mình trong hành trình nghẹt thở xuyên biên giới.",
          "runtime": 98,
          "video_url": "https://www.youtube.com/watch?v=THXPCF6UHh8",
          "release_date": "2019-02-22",
          "seasonId": 123,
          "createdAt": "2019-02-22T00:00:00+00:00",
          "updatedAt": "2019-02-22T00:00:00+00:00"
      },
      {
          "id": 124,
          "episode_number": 1,
          "title": "Ròm",
          "overview": "Câu chuyện về một cậu bé sống trong khu ổ chuột Sài Gòn, chuyên làm môi giới số đề, phản ánh cuộc sống cơ cực của người nghèo đô thị.",
          "runtime": 79,
          "video_url": "https://www.youtube.com/watch?v=XRm1P7oGpMQ",
          "release_date": "2020-09-25",
          "seasonId": 124,
          "createdAt": "2020-09-25T00:00:00+00:00",
          "updatedAt": "2020-09-25T00:00:00+00:00"
      },
      {
          "id": 125,
          "episode_number": 1,
          "title": "Tro Tàn Rực Rỡ",
          "overview": "Bộ phim kể về ba người phụ nữ sống tại một làng quê miền Nam Việt Nam và những bi kịch tình yêu trong đời họ.",
          "runtime": 117,
          "video_url": "https://www.youtube.com/watch?v=Sx0gdaeeGi4",
          "release_date": "2022-12-02",
          "seasonId": 125,
          "createdAt": "2022-12-02T00:00:00+00:00",
          "updatedAt": "2022-12-02T00:00:00+00:00"
      },
      {
          "id": 126,
          "episode_number": 1,
          "title": "Mai",
          "overview": "Một người phụ nữ tưởng như bình thường bỗng đối mặt với những bí mật và biến cố lớn trong cuộc sống sau khi gặp lại người cũ.",
          "runtime": 130,
          "video_url": "https://www.youtube.com/watch?v=HXWRTGbhb4U",
          "release_date": "2024-02-10",
          "seasonId": 126,
          "createdAt": "2024-02-10T00:00:00+00:00",
          "updatedAt": "2024-02-10T00:00:00+00:00"
      },
      {
          "id": 127,
          "episode_number": 1,
          "title": "Nhà Bà Nữ",
          "overview": "Chuyện gia đình của một tiệm bánh tráng trộn nổi tiếng ở Sài Gòn với những mâu thuẫn thế hệ và bí mật được tiết lộ.",
          "runtime": 108,
          "video_url": "https://www.youtube.com/watch?v=IkaP0KJWTsQ&t=4s",
          "release_date": "2023-01-22",
          "seasonId": 127,
          "createdAt": "2023-01-22T00:00:00+00:00",
          "updatedAt": "2023-01-22T00:00:00+00:00"
      },
      {
          "id": 128,
          "episode_number": 1,
          "title": "The Last Wife",
          "overview": "Bối cảnh thời Nguyễn, xoay quanh câu chuyện một người phụ nữ đấu tranh với thân phận và tình yêu trong khuôn khổ xã hội phong kiến.",
          "runtime": 120,
          "video_url": "https://www.youtube.com/watch?v=RhlCD8FAs08",
          "release_date": "2023-11-03",
          "seasonId": 128,
          "createdAt": "2023-11-03T00:00:00+00:00",
          "updatedAt": "2023-11-03T00:00:00+00:00"
      },
      {
          "id": 129,
          "episode_number": 1,
          "title": "Bí Mật Của Gió",
          "overview": "Một câu chuyện tình cảm giữa người và hồn ma đầy cảm xúc và chất thơ, lấy bối cảnh tại Đà Lạt.",
          "runtime": 98,
          "video_url": "https://www.youtube.com/watch?v=2oAuLSmJHTM",
          "release_date": "2020-01-31",
          "seasonId": 129,
          "createdAt": "2020-01-31T00:00:00+00:00",
          "updatedAt": "2020-01-31T00:00:00+00:00"
      },
      {
          "id": 130,
          "episode_number": 1,
          "title": "Trạng Tí Phiêu Lưu Ký",
          "overview": "Phim chuyển thể từ truyện tranh Thần Đồng Đất Việt, kể về hành trình khám phá thân thế của Trạng Tí và những người bạn.",
          "runtime": 100,
          "video_url": "https://www.youtube.com/watch?v=VTnGOjtaWAY",
          "release_date": "2021-04-30",
          "seasonId": 130,
          "createdAt": "2021-04-30T00:00:00+00:00",
          "updatedAt": "2021-04-30T00:00:00+00:00"
      },
      {
          "id": 131,
          "episode_number": 1,
          "title": "Mắt Biếc",
          "overview": "Chuyển thể từ truyện ngắn của Nguyễn Nhật Ánh, phim kể về Ngạn và mối tình đơn phương đầy day dứt dành cho Hà Lan – cô gái có đôi mắt biếc trong sáng.",
          "runtime": 117,
          "video_url": "https://www.youtube.com/watch?v=ITlQ0oU7tDA",
          "release_date": "2019-12-20",
          "seasonId": 131,
          "createdAt": "2019-12-20T00:00:00+00:00",
          "updatedAt": "2019-12-20T00:00:00+00:00"
      },
      {
          "id": 132,
          "episode_number": 1,
          "title": "Quỷ Nhập Tràng",
          "overview": "Một bộ phim kinh dị mang màu sắc dân gian, xoay quanh những hiện tượng kỳ lạ xảy ra trong một ngôi làng hẻo lánh.",
          "runtime": 122,
          "video_url": "https://www.youtube.com/watch?v=fQKxDM-hxoU",
          "release_date": "2025-10-30",
          "seasonId": 132,
          "createdAt": "2025-10-30T00:00:00+00:00",
          "updatedAt": "2025-10-30T00:00:00+00:00"
      },
      {
          "id": 133,
          "episode_number": 1,
          "title": "Cheese in the Trap - Tập 1",
          "overview": "Tập 1 của Cheese in the Trap: câu chuyện tiếp diễn giữa nhân vật chính và mối quan hệ tại trường đại học.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=t32L06_mjKM",
          "release_date": "2016-01-04",
          "seasonId": 133,
          "createdAt": "2016-01-04T00:00:00+00:00",
          "updatedAt": "2016-01-04T00:00:00+00:00"
      },
      {
          "id": 134,
          "episode_number": 2,
          "title": "Cheese in the Trap - Tập 2",
          "overview": "Tập 2 của Cheese in the Trap: câu chuyện tiếp diễn giữa nhân vật chính và mối quan hệ tại trường đại học.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=t32L06_mjKM",
          "release_date": "2016-01-11",
          "seasonId": 133,
          "createdAt": "2016-01-11T00:00:00+00:00",
          "updatedAt": "2016-01-11T00:00:00+00:00"
      },
      {
          "id": 135,
          "episode_number": 3,
          "title": "Cheese in the Trap - Tập 3",
          "overview": "Tập 3 của Cheese in the Trap: câu chuyện tiếp diễn giữa nhân vật chính và mối quan hệ tại trường đại học.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=t32L06_mjKM",
          "release_date": "2016-01-18",
          "seasonId": 133,
          "createdAt": "2016-01-18T00:00:00+00:00",
          "updatedAt": "2016-01-18T00:00:00+00:00"
      },
      {
          "id": 136,
          "episode_number": 4,
          "title": "Cheese in the Trap - Tập 4",
          "overview": "Tập 4 của Cheese in the Trap: câu chuyện tiếp diễn giữa nhân vật chính và mối quan hệ tại trường đại học.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=t32L06_mjKM",
          "release_date": "2016-01-25",
          "seasonId": 133,
          "createdAt": "2016-01-25T00:00:00+00:00",
          "updatedAt": "2016-01-25T00:00:00+00:00"
      },
      {
          "id": 137,
          "episode_number": 5,
          "title": "Cheese in the Trap - Tập 5",
          "overview": "Tập 5 của Cheese in the Trap: câu chuyện tiếp diễn giữa nhân vật chính và mối quan hệ tại trường đại học.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=t32L06_mjKM",
          "release_date": "2016-02-01",
          "seasonId": 133,
          "createdAt": "2016-02-01T00:00:00+00:00",
          "updatedAt": "2016-02-01T00:00:00+00:00"
      },
      {
          "id": 138,
          "episode_number": 6,
          "title": "Cheese in the Trap - Tập 6",
          "overview": "Tập 6 của Cheese in the Trap: câu chuyện tiếp diễn giữa nhân vật chính và mối quan hệ tại trường đại học.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=t32L06_mjKM",
          "release_date": "2016-02-08",
          "seasonId": 133,
          "createdAt": "2016-02-08T00:00:00+00:00",
          "updatedAt": "2016-02-08T00:00:00+00:00"
      },
      {
          "id": 139,
          "episode_number": 7,
          "title": "Cheese in the Trap - Tập 7",
          "overview": "Tập 7 của Cheese in the Trap: câu chuyện tiếp diễn giữa nhân vật chính và mối quan hệ tại trường đại học.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=t32L06_mjKM",
          "release_date": "2016-02-15",
          "seasonId": 133,
          "createdAt": "2016-02-15T00:00:00+00:00",
          "updatedAt": "2016-02-15T00:00:00+00:00"
      },
      {
          "id": 140,
          "episode_number": 8,
          "title": "Cheese in the Trap - Tập 8",
          "overview": "Tập 8 của Cheese in the Trap: câu chuyện tiếp diễn giữa nhân vật chính và mối quan hệ tại trường đại học.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=t32L06_mjKM",
          "release_date": "2016-02-22",
          "seasonId": 133,
          "createdAt": "2016-02-22T00:00:00+00:00",
          "updatedAt": "2016-02-22T00:00:00+00:00"
      },
      {
          "id": 141,
          "episode_number": 9,
          "title": "Cheese in the Trap - Tập 9",
          "overview": "Tập 9 của Cheese in the Trap: câu chuyện tiếp diễn giữa nhân vật chính và mối quan hệ tại trường đại học.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=t32L06_mjKM",
          "release_date": "2016-02-29",
          "seasonId": 133,
          "createdAt": "2016-02-29T00:00:00+00:00",
          "updatedAt": "2016-02-29T00:00:00+00:00"
      },
      {
          "id": 142,
          "episode_number": 10,
          "title": "Cheese in the Trap - Tập 10",
          "overview": "Tập 10 của Cheese in the Trap: câu chuyện tiếp diễn giữa nhân vật chính và mối quan hệ tại trường đại học.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=t32L06_mjKM",
          "release_date": "2016-03-07",
          "seasonId": 133,
          "createdAt": "2016-03-07T00:00:00+00:00",
          "updatedAt": "2016-03-07T00:00:00+00:00"
      },
      {
          "id": 143,
          "episode_number": 11,
          "title": "Cheese in the Trap - Tập 11",
          "overview": "Tập 11 của Cheese in the Trap: câu chuyện tiếp diễn giữa nhân vật chính và mối quan hệ tại trường đại học.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=t32L06_mjKM",
          "release_date": "2016-03-14",
          "seasonId": 133,
          "createdAt": "2016-03-14T00:00:00+00:00",
          "updatedAt": "2016-03-14T00:00:00+00:00"
      },
      {
          "id": 144,
          "episode_number": 12,
          "title": "Cheese in the Trap - Tập 12",
          "overview": "Tập 12 của Cheese in the Trap: câu chuyện tiếp diễn giữa nhân vật chính và mối quan hệ tại trường đại học.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=t32L06_mjKM",
          "release_date": "2016-03-21",
          "seasonId": 133,
          "createdAt": "2016-03-21T00:00:00+00:00",
          "updatedAt": "2016-03-21T00:00:00+00:00"
      },
      {
          "id": 145,
          "episode_number": 13,
          "title": "Cheese in the Trap - Tập 13",
          "overview": "Tập 13 của Cheese in the Trap: câu chuyện tiếp diễn giữa nhân vật chính và mối quan hệ tại trường đại học.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=t32L06_mjKM",
          "release_date": "2016-03-28",
          "seasonId": 133,
          "createdAt": "2016-03-28T00:00:00+00:00",
          "updatedAt": "2016-03-28T00:00:00+00:00"
      },
      {
          "id": 146,
          "episode_number": 14,
          "title": "Cheese in the Trap - Tập 14",
          "overview": "Tập 14 của Cheese in the Trap: câu chuyện tiếp diễn giữa nhân vật chính và mối quan hệ tại trường đại học.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=t32L06_mjKM",
          "release_date": "2016-04-04",
          "seasonId": 133,
          "createdAt": "2016-04-04T00:00:00+00:00",
          "updatedAt": "2016-04-04T00:00:00+00:00"
      },
      {
          "id": 147,
          "episode_number": 15,
          "title": "Cheese in the Trap - Tập 15",
          "overview": "Tập 15 của Cheese in the Trap: câu chuyện tiếp diễn giữa nhân vật chính và mối quan hệ tại trường đại học.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=t32L06_mjKM",
          "release_date": "2016-04-11",
          "seasonId": 133,
          "createdAt": "2016-04-11T00:00:00+00:00",
          "updatedAt": "2016-04-11T00:00:00+00:00"
      },
      {
          "id": 148,
          "episode_number": 16,
          "title": "Cheese in the Trap - Tập 16",
          "overview": "Tập 16 của Cheese in the Trap: câu chuyện tiếp diễn giữa nhân vật chính và mối quan hệ tại trường đại học.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=t32L06_mjKM",
          "release_date": "2016-04-18",
          "seasonId": 133,
          "createdAt": "2016-04-18T00:00:00+00:00",
          "updatedAt": "2016-04-18T00:00:00+00:00"
      },
      {
          "id": 149,
          "episode_number": 1,
          "title": "Descendants of the Sun - Tập 1",
          "overview": "Tập 1 của Descendants of the Sun: bác sĩ Kang Mo‑yeon và đại úy Yoo Shi‑jin tiếp tục hành trình đầy kịch tính và lãng mạn giữa chiến tranh và trách nhiệm.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=Q27dAWOLTNs",
          "release_date": "2016-02-24",
          "seasonId": 134,
          "createdAt": "2016-02-24T00:00:00+00:00",
          "updatedAt": "2016-02-24T00:00:00+00:00"
      },
      {
          "id": 150,
          "episode_number": 2,
          "title": "Descendants of the Sun - Tập 2",
          "overview": "Tập 2 của Descendants of the Sun: bác sĩ Kang Mo‑yeon và đại úy Yoo Shi‑jin tiếp tục hành trình đầy kịch tính và lãng mạn giữa chiến tranh và trách nhiệm.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=Q27dAWOLTNs",
          "release_date": "2016-03-02",
          "seasonId": 134,
          "createdAt": "2016-03-02T00:00:00+00:00",
          "updatedAt": "2016-03-02T00:00:00+00:00"
      },
      {
          "id": 151,
          "episode_number": 3,
          "title": "Descendants of the Sun - Tập 3",
          "overview": "Tập 3 của Descendants of the Sun: bác sĩ Kang Mo‑yeon và đại úy Yoo Shi‑jin tiếp tục hành trình đầy kịch tính và lãng mạn giữa chiến tranh và trách nhiệm.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=Q27dAWOLTNs",
          "release_date": "2016-03-09",
          "seasonId": 134,
          "createdAt": "2016-03-09T00:00:00+00:00",
          "updatedAt": "2016-03-09T00:00:00+00:00"
      },
      {
          "id": 152,
          "episode_number": 4,
          "title": "Descendants of the Sun - Tập 4",
          "overview": "Tập 4 của Descendants of the Sun: bác sĩ Kang Mo‑yeon và đại úy Yoo Shi‑jin tiếp tục hành trình đầy kịch tính và lãng mạn giữa chiến tranh và trách nhiệm.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=Q27dAWOLTNs",
          "release_date": "2016-03-16",
          "seasonId": 134,
          "createdAt": "2016-03-16T00:00:00+00:00",
          "updatedAt": "2016-03-16T00:00:00+00:00"
      },
      {
          "id": 153,
          "episode_number": 5,
          "title": "Descendants of the Sun - Tập 5",
          "overview": "Tập 5 của Descendants of the Sun: bác sĩ Kang Mo‑yeon và đại úy Yoo Shi‑jin tiếp tục hành trình đầy kịch tính và lãng mạn giữa chiến tranh và trách nhiệm.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=Q27dAWOLTNs",
          "release_date": "2016-03-23",
          "seasonId": 134,
          "createdAt": "2016-03-23T00:00:00+00:00",
          "updatedAt": "2016-03-23T00:00:00+00:00"
      },
      {
          "id": 154,
          "episode_number": 6,
          "title": "Descendants of the Sun - Tập 6",
          "overview": "Tập 6 của Descendants of the Sun: bác sĩ Kang Mo‑yeon và đại úy Yoo Shi‑jin tiếp tục hành trình đầy kịch tính và lãng mạn giữa chiến tranh và trách nhiệm.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=Q27dAWOLTNs",
          "release_date": "2016-03-30",
          "seasonId": 134,
          "createdAt": "2016-03-30T00:00:00+00:00",
          "updatedAt": "2016-03-30T00:00:00+00:00"
      },
      {
          "id": 155,
          "episode_number": 7,
          "title": "Descendants of the Sun - Tập 7",
          "overview": "Tập 7 của Descendants of the Sun: bác sĩ Kang Mo‑yeon và đại úy Yoo Shi‑jin tiếp tục hành trình đầy kịch tính và lãng mạn giữa chiến tranh và trách nhiệm.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=Q27dAWOLTNs",
          "release_date": "2016-04-06",
          "seasonId": 134,
          "createdAt": "2016-04-06T00:00:00+00:00",
          "updatedAt": "2016-04-06T00:00:00+00:00"
      },
      {
          "id": 156,
          "episode_number": 8,
          "title": "Descendants of the Sun - Tập 8",
          "overview": "Tập 8 của Descendants of the Sun: bác sĩ Kang Mo‑yeon và đại úy Yoo Shi‑jin tiếp tục hành trình đầy kịch tính và lãng mạn giữa chiến tranh và trách nhiệm.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=Q27dAWOLTNs",
          "release_date": "2016-04-13",
          "seasonId": 134,
          "createdAt": "2016-04-13T00:00:00+00:00",
          "updatedAt": "2016-04-13T00:00:00+00:00"
      },
      {
          "id": 157,
          "episode_number": 9,
          "title": "Descendants of the Sun - Tập 9",
          "overview": "Tập 9 của Descendants of the Sun: bác sĩ Kang Mo‑yeon và đại úy Yoo Shi‑jin tiếp tục hành trình đầy kịch tính và lãng mạn giữa chiến tranh và trách nhiệm.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=Q27dAWOLTNs",
          "release_date": "2016-04-20",
          "seasonId": 134,
          "createdAt": "2016-04-20T00:00:00+00:00",
          "updatedAt": "2016-04-20T00:00:00+00:00"
      },
      {
          "id": 158,
          "episode_number": 10,
          "title": "Descendants of the Sun - Tập 10",
          "overview": "Tập 10 của Descendants of the Sun: bác sĩ Kang Mo‑yeon và đại úy Yoo Shi‑jin tiếp tục hành trình đầy kịch tính và lãng mạn giữa chiến tranh và trách nhiệm.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=Q27dAWOLTNs",
          "release_date": "2016-04-27",
          "seasonId": 134,
          "createdAt": "2016-04-27T00:00:00+00:00",
          "updatedAt": "2016-04-27T00:00:00+00:00"
      },
      {
          "id": 159,
          "episode_number": 11,
          "title": "Descendants of the Sun - Tập 11",
          "overview": "Tập 11 của Descendants of the Sun: bác sĩ Kang Mo‑yeon và đại úy Yoo Shi‑jin tiếp tục hành trình đầy kịch tính và lãng mạn giữa chiến tranh và trách nhiệm.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=Q27dAWOLTNs",
          "release_date": "2016-05-04",
          "seasonId": 134,
          "createdAt": "2016-05-04T00:00:00+00:00",
          "updatedAt": "2016-05-04T00:00:00+00:00"
      },
      {
          "id": 160,
          "episode_number": 12,
          "title": "Descendants of the Sun - Tập 12",
          "overview": "Tập 12 của Descendants of the Sun: bác sĩ Kang Mo‑yeon và đại úy Yoo Shi‑jin tiếp tục hành trình đầy kịch tính và lãng mạn giữa chiến tranh và trách nhiệm.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=Q27dAWOLTNs",
          "release_date": "2016-05-11",
          "seasonId": 134,
          "createdAt": "2016-05-11T00:00:00+00:00",
          "updatedAt": "2016-05-11T00:00:00+00:00"
      },
      {
          "id": 161,
          "episode_number": 13,
          "title": "Descendants of the Sun - Tập 13",
          "overview": "Tập 13 của Descendants of the Sun: bác sĩ Kang Mo‑yeon và đại úy Yoo Shi‑jin tiếp tục hành trình đầy kịch tính và lãng mạn giữa chiến tranh và trách nhiệm.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=Q27dAWOLTNs",
          "release_date": "2016-05-18",
          "seasonId": 134,
          "createdAt": "2016-05-18T00:00:00+00:00",
          "updatedAt": "2016-05-18T00:00:00+00:00"
      },
      {
          "id": 162,
          "episode_number": 14,
          "title": "Descendants of the Sun - Tập 14",
          "overview": "Tập 14 của Descendants of the Sun: bác sĩ Kang Mo‑yeon và đại úy Yoo Shi‑jin tiếp tục hành trình đầy kịch tính và lãng mạn giữa chiến tranh và trách nhiệm.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=Q27dAWOLTNs",
          "release_date": "2016-05-25",
          "seasonId": 134,
          "createdAt": "2016-05-25T00:00:00+00:00",
          "updatedAt": "2016-05-25T00:00:00+00:00"
      },
      {
          "id": 163,
          "episode_number": 15,
          "title": "Descendants of the Sun - Tập 15",
          "overview": "Tập 15 của Descendants of the Sun: bác sĩ Kang Mo‑yeon và đại úy Yoo Shi‑jin tiếp tục hành trình đầy kịch tính và lãng mạn giữa chiến tranh và trách nhiệm.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=Q27dAWOLTNs",
          "release_date": "2016-06-01",
          "seasonId": 134,
          "createdAt": "2016-06-01T00:00:00+00:00",
          "updatedAt": "2016-06-01T00:00:00+00:00"
      },
      {
          "id": 164,
          "episode_number": 16,
          "title": "Descendants of the Sun - Tập 16",
          "overview": "Tập 16 của Descendants of the Sun: bác sĩ Kang Mo‑yeon và đại úy Yoo Shi‑jin tiếp tục hành trình đầy kịch tính và lãng mạn giữa chiến tranh và trách nhiệm.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=Q27dAWOLTNs",
          "release_date": "2016-06-08",
          "seasonId": 134,
          "createdAt": "2016-06-08T00:00:00+00:00",
          "updatedAt": "2016-06-08T00:00:00+00:00"
      },
      {
          "id": 165,
          "episode_number": 1,
          "title": "Signal - Tập 1",
          "overview": "Tập 1 của Signal: các thanh tra từ hiện tại và quá khứ liên lạc qua bộ đàm để giải quyết các vụ án còn tồn đọng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=RsdJLm7Swkw",
          "release_date": "2016-01-22",
          "seasonId": 135,
          "createdAt": "2016-01-22T00:00:00+00:00",
          "updatedAt": "2016-01-22T00:00:00+00:00"
      },
      {
          "id": 166,
          "episode_number": 2,
          "title": "Signal - Tập 2",
          "overview": "Tập 2 của Signal: các thanh tra từ hiện tại và quá khứ liên lạc qua bộ đàm để giải quyết các vụ án còn tồn đọng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=RsdJLm7Swkw",
          "release_date": "2016-01-29",
          "seasonId": 135,
          "createdAt": "2016-01-29T00:00:00+00:00",
          "updatedAt": "2016-01-29T00:00:00+00:00"
      },
      {
          "id": 167,
          "episode_number": 3,
          "title": "Signal - Tập 3",
          "overview": "Tập 3 của Signal: các thanh tra từ hiện tại và quá khứ liên lạc qua bộ đàm để giải quyết các vụ án còn tồn đọng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=RsdJLm7Swkw",
          "release_date": "2016-02-05",
          "seasonId": 135,
          "createdAt": "2016-02-05T00:00:00+00:00",
          "updatedAt": "2016-02-05T00:00:00+00:00"
      },
      {
          "id": 168,
          "episode_number": 4,
          "title": "Signal - Tập 4",
          "overview": "Tập 4 của Signal: các thanh tra từ hiện tại và quá khứ liên lạc qua bộ đàm để giải quyết các vụ án còn tồn đọng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=RsdJLm7Swkw",
          "release_date": "2016-02-12",
          "seasonId": 135,
          "createdAt": "2016-02-12T00:00:00+00:00",
          "updatedAt": "2016-02-12T00:00:00+00:00"
      },
      {
          "id": 169,
          "episode_number": 5,
          "title": "Signal - Tập 5",
          "overview": "Tập 5 của Signal: các thanh tra từ hiện tại và quá khứ liên lạc qua bộ đàm để giải quyết các vụ án còn tồn đọng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=RsdJLm7Swkw",
          "release_date": "2016-02-19",
          "seasonId": 135,
          "createdAt": "2016-02-19T00:00:00+00:00",
          "updatedAt": "2016-02-19T00:00:00+00:00"
      },
      {
          "id": 170,
          "episode_number": 6,
          "title": "Signal - Tập 6",
          "overview": "Tập 6 của Signal: các thanh tra từ hiện tại và quá khứ liên lạc qua bộ đàm để giải quyết các vụ án còn tồn đọng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=RsdJLm7Swkw",
          "release_date": "2016-02-26",
          "seasonId": 135,
          "createdAt": "2016-02-26T00:00:00+00:00",
          "updatedAt": "2016-02-26T00:00:00+00:00"
      },
      {
          "id": 171,
          "episode_number": 7,
          "title": "Signal - Tập 7",
          "overview": "Tập 7 của Signal: các thanh tra từ hiện tại và quá khứ liên lạc qua bộ đàm để giải quyết các vụ án còn tồn đọng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=RsdJLm7Swkw",
          "release_date": "2016-03-04",
          "seasonId": 135,
          "createdAt": "2016-03-04T00:00:00+00:00",
          "updatedAt": "2016-03-04T00:00:00+00:00"
      },
      {
          "id": 172,
          "episode_number": 8,
          "title": "Signal - Tập 8",
          "overview": "Tập 8 của Signal: các thanh tra từ hiện tại và quá khứ liên lạc qua bộ đàm để giải quyết các vụ án còn tồn đọng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=RsdJLm7Swkw",
          "release_date": "2016-03-11",
          "seasonId": 135,
          "createdAt": "2016-03-11T00:00:00+00:00",
          "updatedAt": "2016-03-11T00:00:00+00:00"
      },
      {
          "id": 173,
          "episode_number": 9,
          "title": "Signal - Tập 9",
          "overview": "Tập 9 của Signal: các thanh tra từ hiện tại và quá khứ liên lạc qua bộ đàm để giải quyết các vụ án còn tồn đọng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=RsdJLm7Swkw",
          "release_date": "2016-03-18",
          "seasonId": 135,
          "createdAt": "2016-03-18T00:00:00+00:00",
          "updatedAt": "2016-03-18T00:00:00+00:00"
      },
      {
          "id": 174,
          "episode_number": 10,
          "title": "Signal - Tập 10",
          "overview": "Tập 10 của Signal: các thanh tra từ hiện tại và quá khứ liên lạc qua bộ đàm để giải quyết các vụ án còn tồn đọng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=RsdJLm7Swkw",
          "release_date": "2016-03-25",
          "seasonId": 135,
          "createdAt": "2016-03-25T00:00:00+00:00",
          "updatedAt": "2016-03-25T00:00:00+00:00"
      },
      {
          "id": 175,
          "episode_number": 11,
          "title": "Signal - Tập 11",
          "overview": "Tập 11 của Signal: các thanh tra từ hiện tại và quá khứ liên lạc qua bộ đàm để giải quyết các vụ án còn tồn đọng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=RsdJLm7Swkw",
          "release_date": "2016-04-01",
          "seasonId": 135,
          "createdAt": "2016-04-01T00:00:00+00:00",
          "updatedAt": "2016-04-01T00:00:00+00:00"
      },
      {
          "id": 176,
          "episode_number": 12,
          "title": "Signal - Tập 12",
          "overview": "Tập 12 của Signal: các thanh tra từ hiện tại và quá khứ liên lạc qua bộ đàm để giải quyết các vụ án còn tồn đọng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=RsdJLm7Swkw",
          "release_date": "2016-04-08",
          "seasonId": 135,
          "createdAt": "2016-04-08T00:00:00+00:00",
          "updatedAt": "2016-04-08T00:00:00+00:00"
      },
      {
          "id": 177,
          "episode_number": 13,
          "title": "Signal - Tập 13",
          "overview": "Tập 13 của Signal: các thanh tra từ hiện tại và quá khứ liên lạc qua bộ đàm để giải quyết các vụ án còn tồn đọng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=RsdJLm7Swkw",
          "release_date": "2016-04-15",
          "seasonId": 135,
          "createdAt": "2016-04-15T00:00:00+00:00",
          "updatedAt": "2016-04-15T00:00:00+00:00"
      },
      {
          "id": 178,
          "episode_number": 14,
          "title": "Signal - Tập 14",
          "overview": "Tập 14 của Signal: các thanh tra từ hiện tại và quá khứ liên lạc qua bộ đàm để giải quyết các vụ án còn tồn đọng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=RsdJLm7Swkw",
          "release_date": "2016-04-22",
          "seasonId": 135,
          "createdAt": "2016-04-22T00:00:00+00:00",
          "updatedAt": "2016-04-22T00:00:00+00:00"
      },
      {
          "id": 179,
          "episode_number": 15,
          "title": "Signal - Tập 15",
          "overview": "Tập 15 của Signal: các thanh tra từ hiện tại và quá khứ liên lạc qua bộ đàm để giải quyết các vụ án còn tồn đọng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=RsdJLm7Swkw",
          "release_date": "2016-04-29",
          "seasonId": 135,
          "createdAt": "2016-04-29T00:00:00+00:00",
          "updatedAt": "2016-04-29T00:00:00+00:00"
      },
      {
          "id": 180,
          "episode_number": 16,
          "title": "Signal - Tập 16",
          "overview": "Tập 16 của Signal: các thanh tra từ hiện tại và quá khứ liên lạc qua bộ đàm để giải quyết các vụ án còn tồn đọng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=RsdJLm7Swkw",
          "release_date": "2016-05-06",
          "seasonId": 135,
          "createdAt": "2016-05-06T00:00:00+00:00",
          "updatedAt": "2016-05-06T00:00:00+00:00"
      },
      {
          "id": 181,
          "episode_number": 1,
          "title": "The K2 - Tập 1",
          "overview": "Tập 1 của The K2: cựu lính đánh thuê trở thành vệ sĩ cho vợ ứng viên tổng thống và bất ngờ dấn thân vào âm mưu chính trị.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=U6GELNX7Y94",
          "release_date": "2016-09-23",
          "seasonId": 136,
          "createdAt": "2016-09-23T00:00:00+00:00",
          "updatedAt": "2016-09-23T00:00:00+00:00"
      },
      {
          "id": 182,
          "episode_number": 2,
          "title": "The K2 - Tập 2",
          "overview": "Tập 2 của The K2: âm mưu chính trị dần lộ diện khi Kim Je-ha nhận nhiệm vụ bảo vệ Go An-na, cô gái sống ẩn dật.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=U6GELNX7Y94",
          "release_date": "2016-09-30",
          "seasonId": 136,
          "createdAt": "2016-09-30T00:00:00+00:00",
          "updatedAt": "2016-09-30T00:00:00+00:00"
      },
      {
          "id": 183,
          "episode_number": 3,
          "title": "The K2 - Tập 3",
          "overview": "Tập 3 của The K2: Go An-na bắt đầu thể hiện sự phản kháng khi bị giới hạn tự do, Je-ha trở nên đồng cảm.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=U6GELNX7Y94",
          "release_date": "2016-10-07",
          "seasonId": 136,
          "createdAt": "2016-10-07T00:00:00+00:00",
          "updatedAt": "2016-10-07T00:00:00+00:00"
      },
      {
          "id": 184,
          "episode_number": 4,
          "title": "The K2 - Tập 4",
          "overview": "Tập 4 của The K2: bí mật trong quá khứ của Je-ha được tiết lộ, kéo theo nguy cơ đe dọa đến hiện tại.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=U6GELNX7Y94",
          "release_date": "2016-10-14",
          "seasonId": 136,
          "createdAt": "2016-10-14T00:00:00+00:00",
          "updatedAt": "2016-10-14T00:00:00+00:00"
      },
      {
          "id": 185,
          "episode_number": 5,
          "title": "The K2 - Tập 5",
          "overview": "Tập 5 của The K2: Je-ha đối đầu với lực lượng chính trị đối lập, mối quan hệ giữa anh và An-na ngày càng tiến triển.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=U6GELNX7Y94",
          "release_date": "2016-10-21",
          "seasonId": 136,
          "createdAt": "2016-10-21T00:00:00+00:00",
          "updatedAt": "2016-10-21T00:00:00+00:00"
      },
      {
          "id": 186,
          "episode_number": 6,
          "title": "The K2 - Tập 6",
          "overview": "Tập 6 của The K2: âm mưu ám sát thất bại khiến Je-ha lâm vào thế nguy hiểm, nhưng cũng dần nhận được lòng tin từ An-na.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=U6GELNX7Y94",
          "release_date": "2016-10-28",
          "seasonId": 136,
          "createdAt": "2016-10-28T00:00:00+00:00",
          "updatedAt": "2016-10-28T00:00:00+00:00"
      },
      {
          "id": 187,
          "episode_number": 7,
          "title": "The K2 - Tập 7",
          "overview": "Tập 7 của The K2: mối quan hệ phức tạp giữa vợ chính trị gia và Je-ha trở nên căng thẳng, An-na bị bắt cóc.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=U6GELNX7Y94",
          "release_date": "2016-11-04",
          "seasonId": 136,
          "createdAt": "2016-11-04T00:00:00+00:00",
          "updatedAt": "2016-11-04T00:00:00+00:00"
      },
      {
          "id": 188,
          "episode_number": 8,
          "title": "The K2 - Tập 8",
          "overview": "Tập 8 của The K2: Je-ha liều mình giải cứu An-na, hé lộ những kẻ đứng sau sự kiện bi thảm trong quá khứ.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=U6GELNX7Y94",
          "release_date": "2016-11-11",
          "seasonId": 136,
          "createdAt": "2016-11-11T00:00:00+00:00",
          "updatedAt": "2016-11-11T00:00:00+00:00"
      },
      {
          "id": 189,
          "episode_number": 9,
          "title": "The K2 - Tập 9",
          "overview": "Tập 9 của The K2: An-na đối mặt với sự thật về mẹ mình, Je-ha lên kế hoạch trả thù những người đã phản bội anh.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=U6GELNX7Y94",
          "release_date": "2016-11-18",
          "seasonId": 136,
          "createdAt": "2016-11-18T00:00:00+00:00",
          "updatedAt": "2016-11-18T00:00:00+00:00"
      },
      {
          "id": 190,
          "episode_number": 10,
          "title": "The K2 - Tập 10",
          "overview": "Tập 10 của The K2: âm mưu chính trị leo thang, Je-ha buộc phải hợp tác với kẻ thù để bảo vệ An-na.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=U6GELNX7Y94",
          "release_date": "2016-11-25",
          "seasonId": 136,
          "createdAt": "2016-11-25T00:00:00+00:00",
          "updatedAt": "2016-11-25T00:00:00+00:00"
      },
      {
          "id": 191,
          "episode_number": 11,
          "title": "The K2 - Tập 11",
          "overview": "Tập 11 của The K2: Je-ha phát hiện ra những bí mật đen tối đằng sau tổ chức mà anh từng phục vụ.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=U6GELNX7Y94",
          "release_date": "2016-12-02",
          "seasonId": 136,
          "createdAt": "2016-12-02T00:00:00+00:00",
          "updatedAt": "2016-12-02T00:00:00+00:00"
      },
      {
          "id": 192,
          "episode_number": 12,
          "title": "The K2 - Tập 12",
          "overview": "Tập 12 của The K2: Go An-na bị đe dọa nghiêm trọng, buộc Je-ha phải lựa chọn giữa tình cảm và công lý.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=U6GELNX7Y94",
          "release_date": "2016-12-09",
          "seasonId": 136,
          "createdAt": "2016-12-09T00:00:00+00:00",
          "updatedAt": "2016-12-09T00:00:00+00:00"
      },
      {
          "id": 193,
          "episode_number": 13,
          "title": "The K2 - Tập 13",
          "overview": "Tập 13 của The K2: âm mưu cuối cùng bắt đầu bộc lộ, các phe phái chính trị bước vào trận chiến sinh tử.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=U6GELNX7Y94",
          "release_date": "2016-12-16",
          "seasonId": 136,
          "createdAt": "2016-12-16T00:00:00+00:00",
          "updatedAt": "2016-12-16T00:00:00+00:00"
      },
      {
          "id": 194,
          "episode_number": 14,
          "title": "The K2 - Tập 14",
          "overview": "Tập 14 của The K2: Je-ha đối mặt với kẻ thù cũ trong cuộc đấu tay đôi để giành lại sự thật.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=U6GELNX7Y94",
          "release_date": "2016-12-23",
          "seasonId": 136,
          "createdAt": "2016-12-23T00:00:00+00:00",
          "updatedAt": "2016-12-23T00:00:00+00:00"
      },
      {
          "id": 195,
          "episode_number": 15,
          "title": "The K2 - Tập 15",
          "overview": "Tập 15 của The K2: kế hoạch phản công được đẩy lên cao trào, An-na bị ép vào tình huống nguy hiểm chưa từng có.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=U6GELNX7Y94",
          "release_date": "2016-12-30",
          "seasonId": 136,
          "createdAt": "2016-12-30T00:00:00+00:00",
          "updatedAt": "2016-12-30T00:00:00+00:00"
      },
      {
          "id": 196,
          "episode_number": 16,
          "title": "The K2 - Tập 16",
          "overview": "Tập cuối của The K2: cuộc đối đầu định mệnh diễn ra, Je-ha quyết định hy sinh để An-na có được tự do và công lý được thực thi.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=U6GELNX7Y94",
          "release_date": "2017-01-06",
          "seasonId": 136,
          "createdAt": "2017-01-06T00:00:00+00:00",
          "updatedAt": "2017-01-06T00:00:00+00:00"
      },
      {
          "id": 197,
          "episode_number": 1,
          "title": "Goblin - Tập 1",
          "overview": "Tập 1 của Goblin: câu chuyện thần thoại hiện đại giữa thần chết, yêu tinh và số phận con người dần hé lộ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=y1ClsA-zt-I",
          "release_date": "2016-12-02",
          "seasonId": 137,
          "createdAt": "2016-12-02T00:00:00+00:00",
          "updatedAt": "2016-12-02T00:00:00+00:00"
      },
      {
          "id": 198,
          "episode_number": 2,
          "title": "Goblin - Tập 2",
          "overview": "Tập 2 của Goblin: câu chuyện thần thoại hiện đại giữa thần chết, yêu tinh và số phận con người dần hé lộ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=y1ClsA-zt-I",
          "release_date": "2016-12-09",
          "seasonId": 137,
          "createdAt": "2016-12-09T00:00:00+00:00",
          "updatedAt": "2016-12-09T00:00:00+00:00"
      },
      {
          "id": 199,
          "episode_number": 3,
          "title": "Goblin - Tập 3",
          "overview": "Tập 3 của Goblin: câu chuyện thần thoại hiện đại giữa thần chết, yêu tinh và số phận con người dần hé lộ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=y1ClsA-zt-I",
          "release_date": "2016-12-16",
          "seasonId": 137,
          "createdAt": "2016-12-16T00:00:00+00:00",
          "updatedAt": "2016-12-16T00:00:00+00:00"
      },
      {
          "id": 200,
          "episode_number": 4,
          "title": "Goblin - Tập 4",
          "overview": "Tập 4 của Goblin: câu chuyện thần thoại hiện đại giữa thần chết, yêu tinh và số phận con người dần hé lộ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=y1ClsA-zt-I",
          "release_date": "2016-12-23",
          "seasonId": 137,
          "createdAt": "2016-12-23T00:00:00+00:00",
          "updatedAt": "2016-12-23T00:00:00+00:00"
      },
      {
          "id": 201,
          "episode_number": 5,
          "title": "Goblin - Tập 5",
          "overview": "Tập 5 của Goblin: câu chuyện thần thoại hiện đại giữa thần chết, yêu tinh và số phận con người dần hé lộ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=y1ClsA-zt-I",
          "release_date": "2016-12-30",
          "seasonId": 137,
          "createdAt": "2016-12-30T00:00:00+00:00",
          "updatedAt": "2016-12-30T00:00:00+00:00"
      },
      {
          "id": 202,
          "episode_number": 6,
          "title": "Goblin - Tập 6",
          "overview": "Tập 6 của Goblin: câu chuyện thần thoại hiện đại giữa thần chết, yêu tinh và số phận con người dần hé lộ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=y1ClsA-zt-I",
          "release_date": "2017-01-06",
          "seasonId": 137,
          "createdAt": "2017-01-06T00:00:00+00:00",
          "updatedAt": "2017-01-06T00:00:00+00:00"
      },
      {
          "id": 203,
          "episode_number": 7,
          "title": "Goblin - Tập 7",
          "overview": "Tập 7 của Goblin: câu chuyện thần thoại hiện đại giữa thần chết, yêu tinh và số phận con người dần hé lộ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=y1ClsA-zt-I",
          "release_date": "2017-01-13",
          "seasonId": 137,
          "createdAt": "2017-01-13T00:00:00+00:00",
          "updatedAt": "2017-01-13T00:00:00+00:00"
      },
      {
          "id": 204,
          "episode_number": 8,
          "title": "Goblin - Tập 8",
          "overview": "Tập 8 của Goblin: câu chuyện thần thoại hiện đại giữa thần chết, yêu tinh và số phận con người dần hé lộ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=y1ClsA-zt-I",
          "release_date": "2017-01-20",
          "seasonId": 137,
          "createdAt": "2017-01-20T00:00:00+00:00",
          "updatedAt": "2017-01-20T00:00:00+00:00"
      },
      {
          "id": 205,
          "episode_number": 9,
          "title": "Goblin - Tập 9",
          "overview": "Tập 9 của Goblin: câu chuyện thần thoại hiện đại giữa thần chết, yêu tinh và số phận con người dần hé lộ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=y1ClsA-zt-I",
          "release_date": "2017-01-27",
          "seasonId": 137,
          "createdAt": "2017-01-27T00:00:00+00:00",
          "updatedAt": "2017-01-27T00:00:00+00:00"
      },
      {
          "id": 206,
          "episode_number": 10,
          "title": "Goblin - Tập 10",
          "overview": "Tập 10 của Goblin: câu chuyện thần thoại hiện đại giữa thần chết, yêu tinh và số phận con người dần hé lộ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=y1ClsA-zt-I",
          "release_date": "2017-02-03",
          "seasonId": 137,
          "createdAt": "2017-02-03T00:00:00+00:00",
          "updatedAt": "2017-02-03T00:00:00+00:00"
      },
      {
          "id": 207,
          "episode_number": 11,
          "title": "Goblin - Tập 11",
          "overview": "Tập 11 của Goblin: câu chuyện thần thoại hiện đại giữa thần chết, yêu tinh và số phận con người dần hé lộ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=y1ClsA-zt-I",
          "release_date": "2017-02-10",
          "seasonId": 137,
          "createdAt": "2017-02-10T00:00:00+00:00",
          "updatedAt": "2017-02-10T00:00:00+00:00"
      },
      {
          "id": 208,
          "episode_number": 12,
          "title": "Goblin - Tập 12",
          "overview": "Tập 12 của Goblin: câu chuyện thần thoại hiện đại giữa thần chết, yêu tinh và số phận con người dần hé lộ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=y1ClsA-zt-I",
          "release_date": "2017-02-17",
          "seasonId": 137,
          "createdAt": "2017-02-17T00:00:00+00:00",
          "updatedAt": "2017-02-17T00:00:00+00:00"
      },
      {
          "id": 209,
          "episode_number": 13,
          "title": "Goblin - Tập 13",
          "overview": "Tập 13 của Goblin: câu chuyện thần thoại hiện đại giữa thần chết, yêu tinh và số phận con người dần hé lộ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=y1ClsA-zt-I",
          "release_date": "2017-02-24",
          "seasonId": 137,
          "createdAt": "2017-02-24T00:00:00+00:00",
          "updatedAt": "2017-02-24T00:00:00+00:00"
      },
      {
          "id": 210,
          "episode_number": 14,
          "title": "Goblin - Tập 14",
          "overview": "Tập 14 của Goblin: câu chuyện thần thoại hiện đại giữa thần chết, yêu tinh và số phận con người dần hé lộ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=y1ClsA-zt-I",
          "release_date": "2017-03-03",
          "seasonId": 137,
          "createdAt": "2017-03-03T00:00:00+00:00",
          "updatedAt": "2017-03-03T00:00:00+00:00"
      },
      {
          "id": 211,
          "episode_number": 15,
          "title": "Goblin - Tập 15",
          "overview": "Tập 15 của Goblin: câu chuyện thần thoại hiện đại giữa thần chết, yêu tinh và số phận con người dần hé lộ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=y1ClsA-zt-I",
          "release_date": "2017-03-10",
          "seasonId": 137,
          "createdAt": "2017-03-10T00:00:00+00:00",
          "updatedAt": "2017-03-10T00:00:00+00:00"
      },
      {
          "id": 212,
          "episode_number": 16,
          "title": "Goblin - Tập 16",
          "overview": "Tập 16 của Goblin: câu chuyện thần thoại hiện đại giữa thần chết, yêu tinh và số phận con người dần hé lộ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=y1ClsA-zt-I",
          "release_date": "2017-03-17",
          "seasonId": 137,
          "createdAt": "2017-03-17T00:00:00+00:00",
          "updatedAt": "2017-03-17T00:00:00+00:00"
      },
      {
          "id": 213,
          "episode_number": 1,
          "title": "Legend of the Blue Sea - Tập 1",
          "overview": "Tập 1 của Legend of the Blue Sea: câu chuyện tình yêu kỳ lạ giữa nàng tiên cá và chàng lừa đảo tài ba xuyên không gian và thời gian.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=1MJnc7vqdIQ",
          "release_date": "2016-11-16",
          "seasonId": 138,
          "createdAt": "2016-11-16T00:00:00+00:00",
          "updatedAt": "2016-11-16T00:00:00+00:00"
      },
      {
          "id": 214,
          "episode_number": 2,
          "title": "Legend of the Blue Sea - Tập 2",
          "overview": "Tập 2 của Legend of the Blue Sea: câu chuyện tình yêu kỳ lạ giữa nàng tiên cá và chàng lừa đảo tài ba xuyên không gian và thời gian.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=1MJnc7vqdIQ",
          "release_date": "2016-11-23",
          "seasonId": 138,
          "createdAt": "2016-11-23T00:00:00+00:00",
          "updatedAt": "2016-11-23T00:00:00+00:00"
      },
      {
          "id": 215,
          "episode_number": 3,
          "title": "Legend of the Blue Sea - Tập 3",
          "overview": "Tập 3 của Legend of the Blue Sea: câu chuyện tình yêu kỳ lạ giữa nàng tiên cá và chàng lừa đảo tài ba xuyên không gian và thời gian.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=1MJnc7vqdIQ",
          "release_date": "2016-11-30",
          "seasonId": 138,
          "createdAt": "2016-11-30T00:00:00+00:00",
          "updatedAt": "2016-11-30T00:00:00+00:00"
      },
      {
          "id": 216,
          "episode_number": 4,
          "title": "Legend of the Blue Sea - Tập 4",
          "overview": "Tập 4 của Legend of the Blue Sea: câu chuyện tình yêu kỳ lạ giữa nàng tiên cá và chàng lừa đảo tài ba xuyên không gian và thời gian.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=1MJnc7vqdIQ",
          "release_date": "2016-12-07",
          "seasonId": 138,
          "createdAt": "2016-12-07T00:00:00+00:00",
          "updatedAt": "2016-12-07T00:00:00+00:00"
      },
      {
          "id": 217,
          "episode_number": 5,
          "title": "Legend of the Blue Sea - Tập 5",
          "overview": "Tập 5 của Legend of the Blue Sea: câu chuyện tình yêu kỳ lạ giữa nàng tiên cá và chàng lừa đảo tài ba xuyên không gian và thời gian.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=1MJnc7vqdIQ",
          "release_date": "2016-12-14",
          "seasonId": 138,
          "createdAt": "2016-12-14T00:00:00+00:00",
          "updatedAt": "2016-12-14T00:00:00+00:00"
      },
      {
          "id": 218,
          "episode_number": 6,
          "title": "Legend of the Blue Sea - Tập 6",
          "overview": "Tập 6 của Legend of the Blue Sea: câu chuyện tình yêu kỳ lạ giữa nàng tiên cá và chàng lừa đảo tài ba xuyên không gian và thời gian.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=1MJnc7vqdIQ",
          "release_date": "2016-12-21",
          "seasonId": 138,
          "createdAt": "2016-12-21T00:00:00+00:00",
          "updatedAt": "2016-12-21T00:00:00+00:00"
      },
      {
          "id": 219,
          "episode_number": 7,
          "title": "Legend of the Blue Sea - Tập 7",
          "overview": "Tập 7 của Legend of the Blue Sea: câu chuyện tình yêu kỳ lạ giữa nàng tiên cá và chàng lừa đảo tài ba xuyên không gian và thời gian.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=1MJnc7vqdIQ",
          "release_date": "2016-12-28",
          "seasonId": 138,
          "createdAt": "2016-12-28T00:00:00+00:00",
          "updatedAt": "2016-12-28T00:00:00+00:00"
      },
      {
          "id": 220,
          "episode_number": 8,
          "title": "Legend of the Blue Sea - Tập 8",
          "overview": "Tập 8 của Legend of the Blue Sea: câu chuyện tình yêu kỳ lạ giữa nàng tiên cá và chàng lừa đảo tài ba xuyên không gian và thời gian.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=1MJnc7vqdIQ",
          "release_date": "2017-01-04",
          "seasonId": 138,
          "createdAt": "2017-01-04T00:00:00+00:00",
          "updatedAt": "2017-01-04T00:00:00+00:00"
      },
      {
          "id": 221,
          "episode_number": 9,
          "title": "Legend of the Blue Sea - Tập 9",
          "overview": "Tập 9 của Legend of the Blue Sea: câu chuyện tình yêu kỳ lạ giữa nàng tiên cá và chàng lừa đảo tài ba xuyên không gian và thời gian.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=1MJnc7vqdIQ",
          "release_date": "2017-01-11",
          "seasonId": 138,
          "createdAt": "2017-01-11T00:00:00+00:00",
          "updatedAt": "2017-01-11T00:00:00+00:00"
      },
      {
          "id": 222,
          "episode_number": 10,
          "title": "Legend of the Blue Sea - Tập 10",
          "overview": "Tập 10 của Legend of the Blue Sea: câu chuyện tình yêu kỳ lạ giữa nàng tiên cá và chàng lừa đảo tài ba xuyên không gian và thời gian.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=1MJnc7vqdIQ",
          "release_date": "2017-01-18",
          "seasonId": 138,
          "createdAt": "2017-01-18T00:00:00+00:00",
          "updatedAt": "2017-01-18T00:00:00+00:00"
      },
      {
          "id": 223,
          "episode_number": 11,
          "title": "Legend of the Blue Sea - Tập 11",
          "overview": "Tập 11 của Legend of the Blue Sea: câu chuyện tình yêu kỳ lạ giữa nàng tiên cá và chàng lừa đảo tài ba xuyên không gian và thời gian.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=1MJnc7vqdIQ",
          "release_date": "2017-01-25",
          "seasonId": 138,
          "createdAt": "2017-01-25T00:00:00+00:00",
          "updatedAt": "2017-01-25T00:00:00+00:00"
      },
      {
          "id": 224,
          "episode_number": 12,
          "title": "Legend of the Blue Sea - Tập 12",
          "overview": "Tập 12 của Legend of the Blue Sea: câu chuyện tình yêu kỳ lạ giữa nàng tiên cá và chàng lừa đảo tài ba xuyên không gian và thời gian.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=1MJnc7vqdIQ",
          "release_date": "2017-02-01",
          "seasonId": 138,
          "createdAt": "2017-02-01T00:00:00+00:00",
          "updatedAt": "2017-02-01T00:00:00+00:00"
      },
      {
          "id": 225,
          "episode_number": 13,
          "title": "Legend of the Blue Sea - Tập 13",
          "overview": "Tập 13 của Legend of the Blue Sea: câu chuyện tình yêu kỳ lạ giữa nàng tiên cá và chàng lừa đảo tài ba xuyên không gian và thời gian.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=1MJnc7vqdIQ",
          "release_date": "2017-02-08",
          "seasonId": 138,
          "createdAt": "2017-02-08T00:00:00+00:00",
          "updatedAt": "2017-02-08T00:00:00+00:00"
      },
      {
          "id": 226,
          "episode_number": 14,
          "title": "Legend of the Blue Sea - Tập 14",
          "overview": "Tập 14 của Legend of the Blue Sea: câu chuyện tình yêu kỳ lạ giữa nàng tiên cá và chàng lừa đảo tài ba xuyên không gian và thời gian.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=1MJnc7vqdIQ",
          "release_date": "2017-02-15",
          "seasonId": 138,
          "createdAt": "2017-02-15T00:00:00+00:00",
          "updatedAt": "2017-02-15T00:00:00+00:00"
      },
      {
          "id": 227,
          "episode_number": 15,
          "title": "Legend of the Blue Sea - Tập 15",
          "overview": "Tập 15 của Legend of the Blue Sea: câu chuyện tình yêu kỳ lạ giữa nàng tiên cá và chàng lừa đảo tài ba xuyên không gian và thời gian.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=1MJnc7vqdIQ",
          "release_date": "2017-02-22",
          "seasonId": 138,
          "createdAt": "2017-02-22T00:00:00+00:00",
          "updatedAt": "2017-02-22T00:00:00+00:00"
      },
      {
          "id": 228,
          "episode_number": 16,
          "title": "Legend of the Blue Sea - Tập 16",
          "overview": "Tập 16 của Legend of the Blue Sea: câu chuyện tình yêu kỳ lạ giữa nàng tiên cá và chàng lừa đảo tài ba xuyên không gian và thời gian.",
          "runtime": 60,
          "video_url": "https://www.youtube.com/watch?v=1MJnc7vqdIQ",
          "release_date": "2017-03-01",
          "seasonId": 138,
          "createdAt": "2017-03-01T00:00:00+00:00",
          "updatedAt": "2017-03-01T00:00:00+00:00"
      },
      {
          "id": 229,
          "episode_number": 1,
          "title": "The World of the Married - Tập 1",
          "overview": "Tập 1 của The World of the Married: những rạn nứt, phản bội và bi kịch trong một cuộc hôn nhân tưởng chừng hoàn hảo.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=PAf0Cu6kKC0",
          "release_date": "2020-03-27",
          "seasonId": 139,
          "createdAt": "2020-03-27T00:00:00+00:00",
          "updatedAt": "2020-03-27T00:00:00+00:00"
      },
      {
          "id": 230,
          "episode_number": 2,
          "title": "The World of the Married - Tập 2",
          "overview": "Tập 2 của The World of the Married: những rạn nứt, phản bội và bi kịch trong một cuộc hôn nhân tưởng chừng hoàn hảo.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=PAf0Cu6kKC0",
          "release_date": "2020-04-03",
          "seasonId": 139,
          "createdAt": "2020-04-03T00:00:00+00:00",
          "updatedAt": "2020-04-03T00:00:00+00:00"
      },
      {
          "id": 231,
          "episode_number": 3,
          "title": "The World of the Married - Tập 3",
          "overview": "Tập 3 của The World of the Married: những rạn nứt, phản bội và bi kịch trong một cuộc hôn nhân tưởng chừng hoàn hảo.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=PAf0Cu6kKC0",
          "release_date": "2020-04-10",
          "seasonId": 139,
          "createdAt": "2020-04-10T00:00:00+00:00",
          "updatedAt": "2020-04-10T00:00:00+00:00"
      },
      {
          "id": 232,
          "episode_number": 4,
          "title": "The World of the Married - Tập 4",
          "overview": "Tập 4 của The World of the Married: những rạn nứt, phản bội và bi kịch trong một cuộc hôn nhân tưởng chừng hoàn hảo.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=PAf0Cu6kKC0",
          "release_date": "2020-04-17",
          "seasonId": 139,
          "createdAt": "2020-04-17T00:00:00+00:00",
          "updatedAt": "2020-04-17T00:00:00+00:00"
      },
      {
          "id": 233,
          "episode_number": 5,
          "title": "The World of the Married - Tập 5",
          "overview": "Tập 5 của The World of the Married: những rạn nứt, phản bội và bi kịch trong một cuộc hôn nhân tưởng chừng hoàn hảo.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=PAf0Cu6kKC0",
          "release_date": "2020-04-24",
          "seasonId": 139,
          "createdAt": "2020-04-24T00:00:00+00:00",
          "updatedAt": "2020-04-24T00:00:00+00:00"
      },
      {
          "id": 234,
          "episode_number": 6,
          "title": "The World of the Married - Tập 6",
          "overview": "Tập 6 của The World of the Married: những rạn nứt, phản bội và bi kịch trong một cuộc hôn nhân tưởng chừng hoàn hảo.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=PAf0Cu6kKC0",
          "release_date": "2020-05-01",
          "seasonId": 139,
          "createdAt": "2020-05-01T00:00:00+00:00",
          "updatedAt": "2020-05-01T00:00:00+00:00"
      },
      {
          "id": 235,
          "episode_number": 7,
          "title": "The World of the Married - Tập 7",
          "overview": "Tập 7 của The World of the Married: những rạn nứt, phản bội và bi kịch trong một cuộc hôn nhân tưởng chừng hoàn hảo.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=PAf0Cu6kKC0",
          "release_date": "2020-05-08",
          "seasonId": 139,
          "createdAt": "2020-05-08T00:00:00+00:00",
          "updatedAt": "2020-05-08T00:00:00+00:00"
      },
      {
          "id": 236,
          "episode_number": 8,
          "title": "The World of the Married - Tập 8",
          "overview": "Tập 8 của The World of the Married: những rạn nứt, phản bội và bi kịch trong một cuộc hôn nhân tưởng chừng hoàn hảo.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=PAf0Cu6kKC0",
          "release_date": "2020-05-15",
          "seasonId": 139,
          "createdAt": "2020-05-15T00:00:00+00:00",
          "updatedAt": "2020-05-15T00:00:00+00:00"
      },
      {
          "id": 237,
          "episode_number": 9,
          "title": "The World of the Married - Tập 9",
          "overview": "Tập 9 của The World of the Married: những rạn nứt, phản bội và bi kịch trong một cuộc hôn nhân tưởng chừng hoàn hảo.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=PAf0Cu6kKC0",
          "release_date": "2020-05-22",
          "seasonId": 139,
          "createdAt": "2020-05-22T00:00:00+00:00",
          "updatedAt": "2020-05-22T00:00:00+00:00"
      },
      {
          "id": 238,
          "episode_number": 10,
          "title": "The World of the Married - Tập 10",
          "overview": "Tập 10 của The World of the Married: những rạn nứt, phản bội và bi kịch trong một cuộc hôn nhân tưởng chừng hoàn hảo.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=PAf0Cu6kKC0",
          "release_date": "2020-05-29",
          "seasonId": 139,
          "createdAt": "2020-05-29T00:00:00+00:00",
          "updatedAt": "2020-05-29T00:00:00+00:00"
      },
      {
          "id": 239,
          "episode_number": 11,
          "title": "The World of the Married - Tập 11",
          "overview": "Tập 11 của The World of the Married: những rạn nứt, phản bội và bi kịch trong một cuộc hôn nhân tưởng chừng hoàn hảo.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=PAf0Cu6kKC0",
          "release_date": "2020-06-05",
          "seasonId": 139,
          "createdAt": "2020-06-05T00:00:00+00:00",
          "updatedAt": "2020-06-05T00:00:00+00:00"
      },
      {
          "id": 240,
          "episode_number": 12,
          "title": "The World of the Married - Tập 12",
          "overview": "Tập 12 của The World of the Married: những rạn nứt, phản bội và bi kịch trong một cuộc hôn nhân tưởng chừng hoàn hảo.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=PAf0Cu6kKC0",
          "release_date": "2020-06-12",
          "seasonId": 139,
          "createdAt": "2020-06-12T00:00:00+00:00",
          "updatedAt": "2020-06-12T00:00:00+00:00"
      },
      {
          "id": 241,
          "episode_number": 13,
          "title": "The World of the Married - Tập 13",
          "overview": "Tập 13 của The World of the Married: những rạn nứt, phản bội và bi kịch trong một cuộc hôn nhân tưởng chừng hoàn hảo.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=PAf0Cu6kKC0",
          "release_date": "2020-06-19",
          "seasonId": 139,
          "createdAt": "2020-06-19T00:00:00+00:00",
          "updatedAt": "2020-06-19T00:00:00+00:00"
      },
      {
          "id": 242,
          "episode_number": 14,
          "title": "The World of the Married - Tập 14",
          "overview": "Tập 14 của The World of the Married: những rạn nứt, phản bội và bi kịch trong một cuộc hôn nhân tưởng chừng hoàn hảo.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=PAf0Cu6kKC0",
          "release_date": "2020-06-26",
          "seasonId": 139,
          "createdAt": "2020-06-26T00:00:00+00:00",
          "updatedAt": "2020-06-26T00:00:00+00:00"
      },
      {
          "id": 243,
          "episode_number": 15,
          "title": "The World of the Married - Tập 15",
          "overview": "Tập 15 của The World of the Married: những rạn nứt, phản bội và bi kịch trong một cuộc hôn nhân tưởng chừng hoàn hảo.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=PAf0Cu6kKC0",
          "release_date": "2020-07-03",
          "seasonId": 139,
          "createdAt": "2020-07-03T00:00:00+00:00",
          "updatedAt": "2020-07-03T00:00:00+00:00"
      },
      {
          "id": 244,
          "episode_number": 16,
          "title": "The World of the Married - Tập 16",
          "overview": "Tập 16 của The World of the Married: những rạn nứt, phản bội và bi kịch trong một cuộc hôn nhân tưởng chừng hoàn hảo.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=PAf0Cu6kKC0",
          "release_date": "2020-07-10",
          "seasonId": 139,
          "createdAt": "2020-07-10T00:00:00+00:00",
          "updatedAt": "2020-07-10T00:00:00+00:00"
      },
      {
          "id": 245,
          "episode_number": 1,
          "title": "It's Okay to Not Be Okay - Tập 1",
          "overview": "Tập 1 của It's Okay to Not Be Okay: hành trình chữa lành vết thương tâm lý qua câu chuyện tình yêu giữa một nhân viên y tế tâm thần và một nữ nhà văn mắc rối loạn nhân cách.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=nOpP_RwnSi4",
          "release_date": "2020-06-20",
          "seasonId": 140,
          "createdAt": "2020-06-20T00:00:00+00:00",
          "updatedAt": "2020-06-20T00:00:00+00:00"
      },
      {
          "id": 246,
          "episode_number": 2,
          "title": "It's Okay to Not Be Okay - Tập 2",
          "overview": "Tập 2 của It's Okay to Not Be Okay: hành trình chữa lành vết thương tâm lý qua câu chuyện tình yêu giữa một nhân viên y tế tâm thần và một nữ nhà văn mắc rối loạn nhân cách.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=nOpP_RwnSi4",
          "release_date": "2020-06-27",
          "seasonId": 140,
          "createdAt": "2020-06-27T00:00:00+00:00",
          "updatedAt": "2020-06-27T00:00:00+00:00"
      },
      {
          "id": 247,
          "episode_number": 3,
          "title": "It's Okay to Not Be Okay - Tập 3",
          "overview": "Tập 3 của It's Okay to Not Be Okay: hành trình chữa lành vết thương tâm lý qua câu chuyện tình yêu giữa một nhân viên y tế tâm thần và một nữ nhà văn mắc rối loạn nhân cách.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=nOpP_RwnSi4",
          "release_date": "2020-07-04",
          "seasonId": 140,
          "createdAt": "2020-07-04T00:00:00+00:00",
          "updatedAt": "2020-07-04T00:00:00+00:00"
      },
      {
          "id": 248,
          "episode_number": 4,
          "title": "It's Okay to Not Be Okay - Tập 4",
          "overview": "Tập 4 của It's Okay to Not Be Okay: hành trình chữa lành vết thương tâm lý qua câu chuyện tình yêu giữa một nhân viên y tế tâm thần và một nữ nhà văn mắc rối loạn nhân cách.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=nOpP_RwnSi4",
          "release_date": "2020-07-11",
          "seasonId": 140,
          "createdAt": "2020-07-11T00:00:00+00:00",
          "updatedAt": "2020-07-11T00:00:00+00:00"
      },
      {
          "id": 249,
          "episode_number": 5,
          "title": "It's Okay to Not Be Okay - Tập 5",
          "overview": "Tập 5 của It's Okay to Not Be Okay: hành trình chữa lành vết thương tâm lý qua câu chuyện tình yêu giữa một nhân viên y tế tâm thần và một nữ nhà văn mắc rối loạn nhân cách.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=nOpP_RwnSi4",
          "release_date": "2020-07-18",
          "seasonId": 140,
          "createdAt": "2020-07-18T00:00:00+00:00",
          "updatedAt": "2020-07-18T00:00:00+00:00"
      },
      {
          "id": 250,
          "episode_number": 6,
          "title": "It's Okay to Not Be Okay - Tập 6",
          "overview": "Tập 6 của It's Okay to Not Be Okay: hành trình chữa lành vết thương tâm lý qua câu chuyện tình yêu giữa một nhân viên y tế tâm thần và một nữ nhà văn mắc rối loạn nhân cách.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=nOpP_RwnSi4",
          "release_date": "2020-07-25",
          "seasonId": 140,
          "createdAt": "2020-07-25T00:00:00+00:00",
          "updatedAt": "2020-07-25T00:00:00+00:00"
      },
      {
          "id": 251,
          "episode_number": 7,
          "title": "It's Okay to Not Be Okay - Tập 7",
          "overview": "Tập 7 của It's Okay to Not Be Okay: hành trình chữa lành vết thương tâm lý qua câu chuyện tình yêu giữa một nhân viên y tế tâm thần và một nữ nhà văn mắc rối loạn nhân cách.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=nOpP_RwnSi4",
          "release_date": "2020-08-01",
          "seasonId": 140,
          "createdAt": "2020-08-01T00:00:00+00:00",
          "updatedAt": "2020-08-01T00:00:00+00:00"
      },
      {
          "id": 252,
          "episode_number": 8,
          "title": "It's Okay to Not Be Okay - Tập 8",
          "overview": "Tập 8 của It's Okay to Not Be Okay: hành trình chữa lành vết thương tâm lý qua câu chuyện tình yêu giữa một nhân viên y tế tâm thần và một nữ nhà văn mắc rối loạn nhân cách.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=nOpP_RwnSi4",
          "release_date": "2020-08-08",
          "seasonId": 140,
          "createdAt": "2020-08-08T00:00:00+00:00",
          "updatedAt": "2020-08-08T00:00:00+00:00"
      },
      {
          "id": 253,
          "episode_number": 9,
          "title": "It's Okay to Not Be Okay - Tập 9",
          "overview": "Tập 9 của It's Okay to Not Be Okay: hành trình chữa lành vết thương tâm lý qua câu chuyện tình yêu giữa một nhân viên y tế tâm thần và một nữ nhà văn mắc rối loạn nhân cách.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=nOpP_RwnSi4",
          "release_date": "2020-08-15",
          "seasonId": 140,
          "createdAt": "2020-08-15T00:00:00+00:00",
          "updatedAt": "2020-08-15T00:00:00+00:00"
      },
      {
          "id": 254,
          "episode_number": 10,
          "title": "It's Okay to Not Be Okay - Tập 10",
          "overview": "Tập 10 của It's Okay to Not Be Okay: hành trình chữa lành vết thương tâm lý qua câu chuyện tình yêu giữa một nhân viên y tế tâm thần và một nữ nhà văn mắc rối loạn nhân cách.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=nOpP_RwnSi4",
          "release_date": "2020-08-22",
          "seasonId": 140,
          "createdAt": "2020-08-22T00:00:00+00:00",
          "updatedAt": "2020-08-22T00:00:00+00:00"
      },
      {
          "id": 255,
          "episode_number": 11,
          "title": "It's Okay to Not Be Okay - Tập 11",
          "overview": "Tập 11 của It's Okay to Not Be Okay: hành trình chữa lành vết thương tâm lý qua câu chuyện tình yêu giữa một nhân viên y tế tâm thần và một nữ nhà văn mắc rối loạn nhân cách.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=nOpP_RwnSi4",
          "release_date": "2020-08-29",
          "seasonId": 140,
          "createdAt": "2020-08-29T00:00:00+00:00",
          "updatedAt": "2020-08-29T00:00:00+00:00"
      },
      {
          "id": 256,
          "episode_number": 12,
          "title": "It's Okay to Not Be Okay - Tập 12",
          "overview": "Tập 12 của It's Okay to Not Be Okay: hành trình chữa lành vết thương tâm lý qua câu chuyện tình yêu giữa một nhân viên y tế tâm thần và một nữ nhà văn mắc rối loạn nhân cách.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=nOpP_RwnSi4",
          "release_date": "2020-09-05",
          "seasonId": 140,
          "createdAt": "2020-09-05T00:00:00+00:00",
          "updatedAt": "2020-09-05T00:00:00+00:00"
      },
      {
          "id": 257,
          "episode_number": 13,
          "title": "It's Okay to Not Be Okay - Tập 13",
          "overview": "Tập 13 của It's Okay to Not Be Okay: hành trình chữa lành vết thương tâm lý qua câu chuyện tình yêu giữa một nhân viên y tế tâm thần và một nữ nhà văn mắc rối loạn nhân cách.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=nOpP_RwnSi4",
          "release_date": "2020-09-12",
          "seasonId": 140,
          "createdAt": "2020-09-12T00:00:00+00:00",
          "updatedAt": "2020-09-12T00:00:00+00:00"
      },
      {
          "id": 258,
          "episode_number": 14,
          "title": "It's Okay to Not Be Okay - Tập 14",
          "overview": "Tập 14 của It's Okay to Not Be Okay: hành trình chữa lành vết thương tâm lý qua câu chuyện tình yêu giữa một nhân viên y tế tâm thần và một nữ nhà văn mắc rối loạn nhân cách.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=nOpP_RwnSi4",
          "release_date": "2020-09-19",
          "seasonId": 140,
          "createdAt": "2020-09-19T00:00:00+00:00",
          "updatedAt": "2020-09-19T00:00:00+00:00"
      },
      {
          "id": 259,
          "episode_number": 15,
          "title": "It's Okay to Not Be Okay - Tập 15",
          "overview": "Tập 15 của It's Okay to Not Be Okay: hành trình chữa lành vết thương tâm lý qua câu chuyện tình yêu giữa một nhân viên y tế tâm thần và một nữ nhà văn mắc rối loạn nhân cách.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=nOpP_RwnSi4",
          "release_date": "2020-09-26",
          "seasonId": 140,
          "createdAt": "2020-09-26T00:00:00+00:00",
          "updatedAt": "2020-09-26T00:00:00+00:00"
      },
      {
          "id": 260,
          "episode_number": 16,
          "title": "It's Okay to Not Be Okay - Tập 16",
          "overview": "Tập 16 của It's Okay to Not Be Okay: hành trình chữa lành vết thương tâm lý qua câu chuyện tình yêu giữa một nhân viên y tế tâm thần và một nữ nhà văn mắc rối loạn nhân cách.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=nOpP_RwnSi4",
          "release_date": "2020-10-03",
          "seasonId": 140,
          "createdAt": "2020-10-03T00:00:00+00:00",
          "updatedAt": "2020-10-03T00:00:00+00:00"
      },
      {
          "id": 261,
          "episode_number": 1,
          "title": "Record of Youth - Tập 1",
          "overview": "Tập 1 của Record of Youth: theo chân những người trẻ trên hành trình theo đuổi ước mơ, tình yêu và sự nghiệp giữa xã hội hiện đại khắc nghiệt.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=8mfNLiDDlL8",
          "release_date": "2020-09-07",
          "seasonId": 141,
          "createdAt": "2020-09-07T00:00:00+00:00",
          "updatedAt": "2020-09-07T00:00:00+00:00"
      },
      {
          "id": 262,
          "episode_number": 2,
          "title": "Record of Youth - Tập 2",
          "overview": "Tập 2 của Record of Youth: theo chân những người trẻ trên hành trình theo đuổi ước mơ, tình yêu và sự nghiệp giữa xã hội hiện đại khắc nghiệt.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=8mfNLiDDlL8",
          "release_date": "2020-09-14",
          "seasonId": 141,
          "createdAt": "2020-09-14T00:00:00+00:00",
          "updatedAt": "2020-09-14T00:00:00+00:00"
      },
      {
          "id": 263,
          "episode_number": 3,
          "title": "Record of Youth - Tập 3",
          "overview": "Tập 3 của Record of Youth: theo chân những người trẻ trên hành trình theo đuổi ước mơ, tình yêu và sự nghiệp giữa xã hội hiện đại khắc nghiệt.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=8mfNLiDDlL8",
          "release_date": "2020-09-21",
          "seasonId": 141,
          "createdAt": "2020-09-21T00:00:00+00:00",
          "updatedAt": "2020-09-21T00:00:00+00:00"
      },
      {
          "id": 264,
          "episode_number": 4,
          "title": "Record of Youth - Tập 4",
          "overview": "Tập 4 của Record of Youth: theo chân những người trẻ trên hành trình theo đuổi ước mơ, tình yêu và sự nghiệp giữa xã hội hiện đại khắc nghiệt.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=8mfNLiDDlL8",
          "release_date": "2020-09-28",
          "seasonId": 141,
          "createdAt": "2020-09-28T00:00:00+00:00",
          "updatedAt": "2020-09-28T00:00:00+00:00"
      },
      {
          "id": 265,
          "episode_number": 5,
          "title": "Record of Youth - Tập 5",
          "overview": "Tập 5 của Record of Youth: theo chân những người trẻ trên hành trình theo đuổi ước mơ, tình yêu và sự nghiệp giữa xã hội hiện đại khắc nghiệt.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=8mfNLiDDlL8",
          "release_date": "2020-10-05",
          "seasonId": 141,
          "createdAt": "2020-10-05T00:00:00+00:00",
          "updatedAt": "2020-10-05T00:00:00+00:00"
      },
      {
          "id": 266,
          "episode_number": 6,
          "title": "Record of Youth - Tập 6",
          "overview": "Tập 6 của Record of Youth: theo chân những người trẻ trên hành trình theo đuổi ước mơ, tình yêu và sự nghiệp giữa xã hội hiện đại khắc nghiệt.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=8mfNLiDDlL8",
          "release_date": "2020-10-12",
          "seasonId": 141,
          "createdAt": "2020-10-12T00:00:00+00:00",
          "updatedAt": "2020-10-12T00:00:00+00:00"
      },
      {
          "id": 267,
          "episode_number": 7,
          "title": "Record of Youth - Tập 7",
          "overview": "Tập 7 của Record of Youth: theo chân những người trẻ trên hành trình theo đuổi ước mơ, tình yêu và sự nghiệp giữa xã hội hiện đại khắc nghiệt.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=8mfNLiDDlL8",
          "release_date": "2020-10-19",
          "seasonId": 141,
          "createdAt": "2020-10-19T00:00:00+00:00",
          "updatedAt": "2020-10-19T00:00:00+00:00"
      },
      {
          "id": 268,
          "episode_number": 8,
          "title": "Record of Youth - Tập 8",
          "overview": "Tập 8 của Record of Youth: theo chân những người trẻ trên hành trình theo đuổi ước mơ, tình yêu và sự nghiệp giữa xã hội hiện đại khắc nghiệt.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=8mfNLiDDlL8",
          "release_date": "2020-10-26",
          "seasonId": 141,
          "createdAt": "2020-10-26T00:00:00+00:00",
          "updatedAt": "2020-10-26T00:00:00+00:00"
      },
      {
          "id": 269,
          "episode_number": 9,
          "title": "Record of Youth - Tập 9",
          "overview": "Tập 9 của Record of Youth: theo chân những người trẻ trên hành trình theo đuổi ước mơ, tình yêu và sự nghiệp giữa xã hội hiện đại khắc nghiệt.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=8mfNLiDDlL8",
          "release_date": "2020-11-02",
          "seasonId": 141,
          "createdAt": "2020-11-02T00:00:00+00:00",
          "updatedAt": "2020-11-02T00:00:00+00:00"
      },
      {
          "id": 270,
          "episode_number": 10,
          "title": "Record of Youth - Tập 10",
          "overview": "Tập 10 của Record of Youth: theo chân những người trẻ trên hành trình theo đuổi ước mơ, tình yêu và sự nghiệp giữa xã hội hiện đại khắc nghiệt.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=8mfNLiDDlL8",
          "release_date": "2020-11-09",
          "seasonId": 141,
          "createdAt": "2020-11-09T00:00:00+00:00",
          "updatedAt": "2020-11-09T00:00:00+00:00"
      },
      {
          "id": 271,
          "episode_number": 11,
          "title": "Record of Youth - Tập 11",
          "overview": "Tập 11 của Record of Youth: theo chân những người trẻ trên hành trình theo đuổi ước mơ, tình yêu và sự nghiệp giữa xã hội hiện đại khắc nghiệt.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=8mfNLiDDlL8",
          "release_date": "2020-11-16",
          "seasonId": 141,
          "createdAt": "2020-11-16T00:00:00+00:00",
          "updatedAt": "2020-11-16T00:00:00+00:00"
      },
      {
          "id": 272,
          "episode_number": 12,
          "title": "Record of Youth - Tập 12",
          "overview": "Tập 12 của Record of Youth: theo chân những người trẻ trên hành trình theo đuổi ước mơ, tình yêu và sự nghiệp giữa xã hội hiện đại khắc nghiệt.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=8mfNLiDDlL8",
          "release_date": "2020-11-23",
          "seasonId": 141,
          "createdAt": "2020-11-23T00:00:00+00:00",
          "updatedAt": "2020-11-23T00:00:00+00:00"
      },
      {
          "id": 273,
          "episode_number": 13,
          "title": "Record of Youth - Tập 13",
          "overview": "Tập 13 của Record of Youth: theo chân những người trẻ trên hành trình theo đuổi ước mơ, tình yêu và sự nghiệp giữa xã hội hiện đại khắc nghiệt.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=8mfNLiDDlL8",
          "release_date": "2020-11-30",
          "seasonId": 141,
          "createdAt": "2020-11-30T00:00:00+00:00",
          "updatedAt": "2020-11-30T00:00:00+00:00"
      },
      {
          "id": 274,
          "episode_number": 14,
          "title": "Record of Youth - Tập 14",
          "overview": "Tập 14 của Record of Youth: theo chân những người trẻ trên hành trình theo đuổi ước mơ, tình yêu và sự nghiệp giữa xã hội hiện đại khắc nghiệt.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=8mfNLiDDlL8",
          "release_date": "2020-12-07",
          "seasonId": 141,
          "createdAt": "2020-12-07T00:00:00+00:00",
          "updatedAt": "2020-12-07T00:00:00+00:00"
      },
      {
          "id": 275,
          "episode_number": 15,
          "title": "Record of Youth - Tập 15",
          "overview": "Tập 15 của Record of Youth: theo chân những người trẻ trên hành trình theo đuổi ước mơ, tình yêu và sự nghiệp giữa xã hội hiện đại khắc nghiệt.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=8mfNLiDDlL8",
          "release_date": "2020-12-14",
          "seasonId": 141,
          "createdAt": "2020-12-14T00:00:00+00:00",
          "updatedAt": "2020-12-14T00:00:00+00:00"
      },
      {
          "id": 276,
          "episode_number": 16,
          "title": "Record of Youth - Tập 16",
          "overview": "Tập 16 của Record of Youth: theo chân những người trẻ trên hành trình theo đuổi ước mơ, tình yêu và sự nghiệp giữa xã hội hiện đại khắc nghiệt.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=8mfNLiDDlL8",
          "release_date": "2020-12-21",
          "seasonId": 141,
          "createdAt": "2020-12-21T00:00:00+00:00",
          "updatedAt": "2020-12-21T00:00:00+00:00"
      },
      {
          "id": 277,
          "episode_number": 1,
          "title": "Oh My Ladylord - Tập 1",
          "overview": "Tập 1 của Oh My Ladylord: câu chuyện tình yêu giữa biên kịch lạnh lùng và nữ diễn viên hài lãng mạn sống cùng một mái nhà.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=SvtQBt0Hedk",
          "release_date": "2021-03-24",
          "seasonId": 142,
          "createdAt": "2021-03-24T00:00:00+00:00",
          "updatedAt": "2021-03-24T00:00:00+00:00"
      },
      {
          "id": 278,
          "episode_number": 2,
          "title": "Oh My Ladylord - Tập 2",
          "overview": "Tập 2 của Oh My Ladylord...",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=SvtQBt0Hedk",
          "release_date": "2021-03-31",
          "seasonId": 142,
          "createdAt": "2021-03-31T00:00:00+00:00",
          "updatedAt": "2021-03-31T00:00:00+00:00"
      },
      {
          "id": 279,
          "episode_number": 3,
          "title": "Oh My Ladylord - Tập 3",
          "overview": "Tập 3 của Oh My Ladylord...",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=SvtQBt0Hedk",
          "release_date": "2021-04-07",
          "seasonId": 142,
          "createdAt": "2021-04-07T00:00:00+00:00",
          "updatedAt": "2021-04-07T00:00:00+00:00"
      },
      {
          "id": 280,
          "episode_number": 4,
          "title": "Oh My Ladylord - Tập 4",
          "overview": "Tập 4 của Oh My Ladylord...",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=SvtQBt0Hedk",
          "release_date": "2021-04-14",
          "seasonId": 142,
          "createdAt": "2021-04-14T00:00:00+00:00",
          "updatedAt": "2021-04-14T00:00:00+00:00"
      },
      {
          "id": 281,
          "episode_number": 5,
          "title": "Oh My Ladylord - Tập 5",
          "overview": "Tập 5 của Oh My Ladylord...",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=SvtQBt0Hedk",
          "release_date": "2021-04-21",
          "seasonId": 142,
          "createdAt": "2021-04-21T00:00:00+00:00",
          "updatedAt": "2021-04-21T00:00:00+00:00"
      },
      {
          "id": 282,
          "episode_number": 6,
          "title": "Oh My Ladylord - Tập 6",
          "overview": "Tập 6 của Oh My Ladylord...",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=SvtQBt0Hedk",
          "release_date": "2021-04-28",
          "seasonId": 142,
          "createdAt": "2021-04-28T00:00:00+00:00",
          "updatedAt": "2021-04-28T00:00:00+00:00"
      },
      {
          "id": 283,
          "episode_number": 7,
          "title": "Oh My Ladylord - Tập 7",
          "overview": "Tập 7 của Oh My Ladylord...",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=SvtQBt0Hedk",
          "release_date": "2021-05-05",
          "seasonId": 142,
          "createdAt": "2021-05-05T00:00:00+00:00",
          "updatedAt": "2021-05-05T00:00:00+00:00"
      },
      {
          "id": 284,
          "episode_number": 8,
          "title": "Oh My Ladylord - Tập 8",
          "overview": "Tập 8 của Oh My Ladylord...",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=SvtQBt0Hedk",
          "release_date": "2021-05-12",
          "seasonId": 142,
          "createdAt": "2021-05-12T00:00:00+00:00",
          "updatedAt": "2021-05-12T00:00:00+00:00"
      },
      {
          "id": 285,
          "episode_number": 9,
          "title": "Oh My Ladylord - Tập 9",
          "overview": "Tập 9 của Oh My Ladylord...",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=SvtQBt0Hedk",
          "release_date": "2021-05-19",
          "seasonId": 142,
          "createdAt": "2021-05-19T00:00:00+00:00",
          "updatedAt": "2021-05-19T00:00:00+00:00"
      },
      {
          "id": 286,
          "episode_number": 10,
          "title": "Oh My Ladylord - Tập 10",
          "overview": "Tập 10 của Oh My Ladylord...",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=SvtQBt0Hedk",
          "release_date": "2021-05-26",
          "seasonId": 142,
          "createdAt": "2021-05-26T00:00:00+00:00",
          "updatedAt": "2021-05-26T00:00:00+00:00"
      },
      {
          "id": 287,
          "episode_number": 11,
          "title": "Oh My Ladylord - Tập 11",
          "overview": "Tập 11 của Oh My Ladylord...",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=SvtQBt0Hedk",
          "release_date": "2021-06-02",
          "seasonId": 142,
          "createdAt": "2021-06-02T00:00:00+00:00",
          "updatedAt": "2021-06-02T00:00:00+00:00"
      },
      {
          "id": 288,
          "episode_number": 12,
          "title": "Oh My Ladylord - Tập 12",
          "overview": "Tập 12 của Oh My Ladylord...",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=SvtQBt0Hedk",
          "release_date": "2021-06-09",
          "seasonId": 142,
          "createdAt": "2021-06-09T00:00:00+00:00",
          "updatedAt": "2021-06-09T00:00:00+00:00"
      },
      {
          "id": 289,
          "episode_number": 13,
          "title": "Oh My Ladylord - Tập 13",
          "overview": "Tập 13 của Oh My Ladylord...",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=SvtQBt0Hedk",
          "release_date": "2021-06-16",
          "seasonId": 142,
          "createdAt": "2021-06-16T00:00:00+00:00",
          "updatedAt": "2021-06-16T00:00:00+00:00"
      },
      {
          "id": 290,
          "episode_number": 14,
          "title": "Oh My Ladylord - Tập 14",
          "overview": "Tập 14 của Oh My Ladylord...",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=SvtQBt0Hedk",
          "release_date": "2021-06-23",
          "seasonId": 142,
          "createdAt": "2021-06-23T00:00:00+00:00",
          "updatedAt": "2021-06-23T00:00:00+00:00"
      },
      {
          "id": 291,
          "episode_number": 15,
          "title": "Oh My Ladylord - Tập 15",
          "overview": "Tập 15 của Oh My Ladylord...",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=SvtQBt0Hedk",
          "release_date": "2021-06-30",
          "seasonId": 142,
          "createdAt": "2021-06-30T00:00:00+00:00",
          "updatedAt": "2021-06-30T00:00:00+00:00"
      },
      {
          "id": 292,
          "episode_number": 16,
          "title": "Oh My Ladylord - Tập 16",
          "overview": "Tập 16 của Oh My Ladylord...",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=SvtQBt0Hedk",
          "release_date": "2021-07-07",
          "seasonId": 142,
          "createdAt": "2021-07-07T00:00:00+00:00",
          "updatedAt": "2021-07-07T00:00:00+00:00"
      },
      {
          "id": 293,
          "episode_number": 1,
          "title": "My Mister - Tập 1",
          "overview": "Tập 1 của My Mister: hành trình chữa lành giữa một người đàn ông trung niên chịu nhiều áp lực và một cô gái trẻ tổn thương bởi cuộc sống.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=V9tHXR2Iuzc",
          "release_date": "2018-03-21",
          "seasonId": 143,
          "createdAt": "2018-03-21T00:00:00+00:00",
          "updatedAt": "2018-03-21T00:00:00+00:00"
      },
      {
          "id": 294,
          "episode_number": 2,
          "title": "My Mister - Tập 2",
          "overview": "Tập 2 của My Mister: hành trình chữa lành giữa một người đàn ông trung niên chịu nhiều áp lực và một cô gái trẻ tổn thương bởi cuộc sống.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=V9tHXR2Iuzc",
          "release_date": "2018-03-28",
          "seasonId": 143,
          "createdAt": "2018-03-28T00:00:00+00:00",
          "updatedAt": "2018-03-28T00:00:00+00:00"
      },
      {
          "id": 295,
          "episode_number": 3,
          "title": "My Mister - Tập 3",
          "overview": "Tập 3 của My Mister: hành trình chữa lành giữa một người đàn ông trung niên chịu nhiều áp lực và một cô gái trẻ tổn thương bởi cuộc sống.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=V9tHXR2Iuzc",
          "release_date": "2018-04-04",
          "seasonId": 143,
          "createdAt": "2018-04-04T00:00:00+00:00",
          "updatedAt": "2018-04-04T00:00:00+00:00"
      },
      {
          "id": 296,
          "episode_number": 4,
          "title": "My Mister - Tập 4",
          "overview": "Tập 4 của My Mister: hành trình chữa lành giữa một người đàn ông trung niên chịu nhiều áp lực và một cô gái trẻ tổn thương bởi cuộc sống.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=V9tHXR2Iuzc",
          "release_date": "2018-04-11",
          "seasonId": 143,
          "createdAt": "2018-04-11T00:00:00+00:00",
          "updatedAt": "2018-04-11T00:00:00+00:00"
      },
      {
          "id": 297,
          "episode_number": 5,
          "title": "My Mister - Tập 5",
          "overview": "Tập 5 của My Mister: hành trình chữa lành giữa một người đàn ông trung niên chịu nhiều áp lực và một cô gái trẻ tổn thương bởi cuộc sống.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=V9tHXR2Iuzc",
          "release_date": "2018-04-18",
          "seasonId": 143,
          "createdAt": "2018-04-18T00:00:00+00:00",
          "updatedAt": "2018-04-18T00:00:00+00:00"
      },
      {
          "id": 298,
          "episode_number": 6,
          "title": "My Mister - Tập 6",
          "overview": "Tập 6 của My Mister: hành trình chữa lành giữa một người đàn ông trung niên chịu nhiều áp lực và một cô gái trẻ tổn thương bởi cuộc sống.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=V9tHXR2Iuzc",
          "release_date": "2018-04-25",
          "seasonId": 143,
          "createdAt": "2018-04-25T00:00:00+00:00",
          "updatedAt": "2018-04-25T00:00:00+00:00"
      },
      {
          "id": 299,
          "episode_number": 7,
          "title": "My Mister - Tập 7",
          "overview": "Tập 7 của My Mister: hành trình chữa lành giữa một người đàn ông trung niên chịu nhiều áp lực và một cô gái trẻ tổn thương bởi cuộc sống.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=V9tHXR2Iuzc",
          "release_date": "2018-05-02",
          "seasonId": 143,
          "createdAt": "2018-05-02T00:00:00+00:00",
          "updatedAt": "2018-05-02T00:00:00+00:00"
      },
      {
          "id": 300,
          "episode_number": 8,
          "title": "My Mister - Tập 8",
          "overview": "Tập 8 của My Mister: hành trình chữa lành giữa một người đàn ông trung niên chịu nhiều áp lực và một cô gái trẻ tổn thương bởi cuộc sống.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=V9tHXR2Iuzc",
          "release_date": "2018-05-09",
          "seasonId": 143,
          "createdAt": "2018-05-09T00:00:00+00:00",
          "updatedAt": "2018-05-09T00:00:00+00:00"
      },
      {
          "id": 301,
          "episode_number": 9,
          "title": "My Mister - Tập 9",
          "overview": "Tập 9 của My Mister: hành trình chữa lành giữa một người đàn ông trung niên chịu nhiều áp lực và một cô gái trẻ tổn thương bởi cuộc sống.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=V9tHXR2Iuzc",
          "release_date": "2018-05-16",
          "seasonId": 143,
          "createdAt": "2018-05-16T00:00:00+00:00",
          "updatedAt": "2018-05-16T00:00:00+00:00"
      },
      {
          "id": 302,
          "episode_number": 10,
          "title": "My Mister - Tập 10",
          "overview": "Tập 10 của My Mister: hành trình chữa lành giữa một người đàn ông trung niên chịu nhiều áp lực và một cô gái trẻ tổn thương bởi cuộc sống.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=V9tHXR2Iuzc",
          "release_date": "2018-05-23",
          "seasonId": 143,
          "createdAt": "2018-05-23T00:00:00+00:00",
          "updatedAt": "2018-05-23T00:00:00+00:00"
      },
      {
          "id": 303,
          "episode_number": 11,
          "title": "My Mister - Tập 11",
          "overview": "Tập 11 của My Mister: hành trình chữa lành giữa một người đàn ông trung niên chịu nhiều áp lực và một cô gái trẻ tổn thương bởi cuộc sống.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=V9tHXR2Iuzc",
          "release_date": "2018-05-30",
          "seasonId": 143,
          "createdAt": "2018-05-30T00:00:00+00:00",
          "updatedAt": "2018-05-30T00:00:00+00:00"
      },
      {
          "id": 304,
          "episode_number": 12,
          "title": "My Mister - Tập 12",
          "overview": "Tập 12 của My Mister: hành trình chữa lành giữa một người đàn ông trung niên chịu nhiều áp lực và một cô gái trẻ tổn thương bởi cuộc sống.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=V9tHXR2Iuzc",
          "release_date": "2018-06-06",
          "seasonId": 143,
          "createdAt": "2018-06-06T00:00:00+00:00",
          "updatedAt": "2018-06-06T00:00:00+00:00"
      },
      {
          "id": 305,
          "episode_number": 13,
          "title": "My Mister - Tập 13",
          "overview": "Tập 13 của My Mister: hành trình chữa lành giữa một người đàn ông trung niên chịu nhiều áp lực và một cô gái trẻ tổn thương bởi cuộc sống.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=V9tHXR2Iuzc",
          "release_date": "2018-06-13",
          "seasonId": 143,
          "createdAt": "2018-06-13T00:00:00+00:00",
          "updatedAt": "2018-06-13T00:00:00+00:00"
      },
      {
          "id": 306,
          "episode_number": 14,
          "title": "My Mister - Tập 14",
          "overview": "Tập 14 của My Mister: hành trình chữa lành giữa một người đàn ông trung niên chịu nhiều áp lực và một cô gái trẻ tổn thương bởi cuộc sống.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=V9tHXR2Iuzc",
          "release_date": "2018-06-20",
          "seasonId": 143,
          "createdAt": "2018-06-20T00:00:00+00:00",
          "updatedAt": "2018-06-20T00:00:00+00:00"
      },
      {
          "id": 307,
          "episode_number": 15,
          "title": "My Mister - Tập 15",
          "overview": "Tập 15 của My Mister: hành trình chữa lành giữa một người đàn ông trung niên chịu nhiều áp lực và một cô gái trẻ tổn thương bởi cuộc sống.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=V9tHXR2Iuzc",
          "release_date": "2018-06-27",
          "seasonId": 143,
          "createdAt": "2018-06-27T00:00:00+00:00",
          "updatedAt": "2018-06-27T00:00:00+00:00"
      },
      {
          "id": 308,
          "episode_number": 16,
          "title": "My Mister - Tập 16",
          "overview": "Tập 16 của My Mister: hành trình chữa lành giữa một người đàn ông trung niên chịu nhiều áp lực và một cô gái trẻ tổn thương bởi cuộc sống.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=V9tHXR2Iuzc",
          "release_date": "2018-07-04",
          "seasonId": 143,
          "createdAt": "2018-07-04T00:00:00+00:00",
          "updatedAt": "2018-07-04T00:00:00+00:00"
      },
      {
          "id": 309,
          "episode_number": 1,
          "title": "Mr. Sunshine - Tập 1",
          "overview": "Tập 1 của Mr. Sunshine: bối cảnh Hàn Quốc cuối thế kỷ 19, một người đàn ông trở về quê hương với thân phận lính Mỹ và mối tình định mệnh.",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=rPJSo4fhtRU",
          "release_date": "2018-07-07",
          "seasonId": 144,
          "createdAt": "2018-07-07T00:00:00+00:00",
          "updatedAt": "2018-07-07T00:00:00+00:00"
      },
      {
          "id": 310,
          "episode_number": 2,
          "title": "Mr. Sunshine - Tập 2",
          "overview": "Tập 2 của Mr. Sunshine: bối cảnh Hàn Quốc cuối thế kỷ 19...",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=rPJSo4fhtRU",
          "release_date": "2018-07-14",
          "seasonId": 144,
          "createdAt": "2018-07-14T00:00:00+00:00",
          "updatedAt": "2018-07-14T00:00:00+00:00"
      },
      {
          "id": 311,
          "episode_number": 3,
          "title": "Mr. Sunshine - Tập 3",
          "overview": "Tập 3 của Mr. Sunshine: bối cảnh Hàn Quốc cuối thế kỷ 19...",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=rPJSo4fhtRU",
          "release_date": "2018-07-21",
          "seasonId": 144,
          "createdAt": "2018-07-21T00:00:00+00:00",
          "updatedAt": "2018-07-21T00:00:00+00:00"
      },
      {
          "id": 312,
          "episode_number": 4,
          "title": "Mr. Sunshine - Tập 4",
          "overview": "Tập 4 của Mr. Sunshine: bối cảnh Hàn Quốc cuối thế kỷ 19...",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=rPJSo4fhtRU",
          "release_date": "2018-07-28",
          "seasonId": 144,
          "createdAt": "2018-07-28T00:00:00+00:00",
          "updatedAt": "2018-07-28T00:00:00+00:00"
      },
      {
          "id": 313,
          "episode_number": 5,
          "title": "Mr. Sunshine - Tập 5",
          "overview": "Tập 5 của Mr. Sunshine: bối cảnh Hàn Quốc cuối thế kỷ 19...",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=rPJSo4fhtRU",
          "release_date": "2018-08-04",
          "seasonId": 144,
          "createdAt": "2018-08-04T00:00:00+00:00",
          "updatedAt": "2018-08-04T00:00:00+00:00"
      },
      {
          "id": 314,
          "episode_number": 6,
          "title": "Mr. Sunshine - Tập 6",
          "overview": "Tập 6 của Mr. Sunshine: bối cảnh Hàn Quốc cuối thế kỷ 19...",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=rPJSo4fhtRU",
          "release_date": "2018-08-11",
          "seasonId": 144,
          "createdAt": "2018-08-11T00:00:00+00:00",
          "updatedAt": "2018-08-11T00:00:00+00:00"
      },
      {
          "id": 315,
          "episode_number": 7,
          "title": "Mr. Sunshine - Tập 7",
          "overview": "Tập 7 của Mr. Sunshine: bối cảnh Hàn Quốc cuối thế kỷ 19...",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=rPJSo4fhtRU",
          "release_date": "2018-08-18",
          "seasonId": 144,
          "createdAt": "2018-08-18T00:00:00+00:00",
          "updatedAt": "2018-08-18T00:00:00+00:00"
      },
      {
          "id": 316,
          "episode_number": 8,
          "title": "Mr. Sunshine - Tập 8",
          "overview": "Tập 8 của Mr. Sunshine: bối cảnh Hàn Quốc cuối thế kỷ 19...",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=rPJSo4fhtRU",
          "release_date": "2018-08-25",
          "seasonId": 144,
          "createdAt": "2018-08-25T00:00:00+00:00",
          "updatedAt": "2018-08-25T00:00:00+00:00"
      },
      {
          "id": 317,
          "episode_number": 9,
          "title": "Mr. Sunshine - Tập 9",
          "overview": "Tập 9 của Mr. Sunshine: bối cảnh Hàn Quốc cuối thế kỷ 19...",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=rPJSo4fhtRU",
          "release_date": "2018-09-01",
          "seasonId": 144,
          "createdAt": "2018-09-01T00:00:00+00:00",
          "updatedAt": "2018-09-01T00:00:00+00:00"
      },
      {
          "id": 318,
          "episode_number": 10,
          "title": "Mr. Sunshine - Tập 10",
          "overview": "Tập 10 của Mr. Sunshine: bối cảnh Hàn Quốc cuối thế kỷ 19...",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=rPJSo4fhtRU",
          "release_date": "2018-09-08",
          "seasonId": 144,
          "createdAt": "2018-09-08T00:00:00+00:00",
          "updatedAt": "2018-09-08T00:00:00+00:00"
      },
      {
          "id": 319,
          "episode_number": 11,
          "title": "Mr. Sunshine - Tập 11",
          "overview": "Tập 11 của Mr. Sunshine: bối cảnh Hàn Quốc cuối thế kỷ 19...",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=rPJSo4fhtRU",
          "release_date": "2018-09-15",
          "seasonId": 144,
          "createdAt": "2018-09-15T00:00:00+00:00",
          "updatedAt": "2018-09-15T00:00:00+00:00"
      },
      {
          "id": 320,
          "episode_number": 12,
          "title": "Mr. Sunshine - Tập 12",
          "overview": "Tập 12 của Mr. Sunshine: bối cảnh Hàn Quốc cuối thế kỷ 19...",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=rPJSo4fhtRU",
          "release_date": "2018-09-22",
          "seasonId": 144,
          "createdAt": "2018-09-22T00:00:00+00:00",
          "updatedAt": "2018-09-22T00:00:00+00:00"
      },
      {
          "id": 321,
          "episode_number": 13,
          "title": "Mr. Sunshine - Tập 13",
          "overview": "Tập 13 của Mr. Sunshine: bối cảnh Hàn Quốc cuối thế kỷ 19...",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=rPJSo4fhtRU",
          "release_date": "2018-09-29",
          "seasonId": 144,
          "createdAt": "2018-09-29T00:00:00+00:00",
          "updatedAt": "2018-09-29T00:00:00+00:00"
      },
      {
          "id": 322,
          "episode_number": 14,
          "title": "Mr. Sunshine - Tập 14",
          "overview": "Tập 14 của Mr. Sunshine: bối cảnh Hàn Quốc cuối thế kỷ 19...",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=rPJSo4fhtRU",
          "release_date": "2018-10-06",
          "seasonId": 144,
          "createdAt": "2018-10-06T00:00:00+00:00",
          "updatedAt": "2018-10-06T00:00:00+00:00"
      },
      {
          "id": 323,
          "episode_number": 15,
          "title": "Mr. Sunshine - Tập 15",
          "overview": "Tập 15 của Mr. Sunshine: bối cảnh Hàn Quốc cuối thế kỷ 19...",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=rPJSo4fhtRU",
          "release_date": "2018-10-13",
          "seasonId": 144,
          "createdAt": "2018-10-13T00:00:00+00:00",
          "updatedAt": "2018-10-13T00:00:00+00:00"
      },
      {
          "id": 324,
          "episode_number": 16,
          "title": "Mr. Sunshine - Tập 16",
          "overview": "Tập 16 của Mr. Sunshine: bối cảnh Hàn Quốc cuối thế kỷ 19...",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=rPJSo4fhtRU",
          "release_date": "2018-10-20",
          "seasonId": 144,
          "createdAt": "2018-10-20T00:00:00+00:00",
          "updatedAt": "2018-10-20T00:00:00+00:00"
      },
      {
          "id": 325,
          "episode_number": 1,
          "title": "Something in the Rain - Tập 1",
          "overview": "Tập 1 của Something in the Rain: chuyện tình nhẹ nhàng và sâu sắc...",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=xEiCIrDR6-I",
          "release_date": "2018-03-30",
          "seasonId": 145,
          "createdAt": "2018-03-30T00:00:00+00:00",
          "updatedAt": "2018-03-30T00:00:00+00:00"
      },
      {
          "id": 326,
          "episode_number": 2,
          "title": "Something in the Rain - Tập 2",
          "overview": "Tập 2 của Something in the Rain: chuyện tình nhẹ nhàng và sâu sắc...",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=xEiCIrDR6-I",
          "release_date": "2018-04-06",
          "seasonId": 145,
          "createdAt": "2018-04-06T00:00:00+00:00",
          "updatedAt": "2018-04-06T00:00:00+00:00"
      },
      {
          "id": 327,
          "episode_number": 3,
          "title": "Something in the Rain - Tập 3",
          "overview": "Tập 3 của Something in the Rain: chuyện tình nhẹ nhàng và sâu sắc...",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=xEiCIrDR6-I",
          "release_date": "2018-04-13",
          "seasonId": 145,
          "createdAt": "2018-04-13T00:00:00+00:00",
          "updatedAt": "2018-04-13T00:00:00+00:00"
      },
      {
          "id": 328,
          "episode_number": 4,
          "title": "Something in the Rain - Tập 4",
          "overview": "Tập 4 của Something in the Rain: chuyện tình nhẹ nhàng và sâu sắc...",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=xEiCIrDR6-I",
          "release_date": "2018-04-20",
          "seasonId": 145,
          "createdAt": "2018-04-20T00:00:00+00:00",
          "updatedAt": "2018-04-20T00:00:00+00:00"
      },
      {
          "id": 329,
          "episode_number": 5,
          "title": "Something in the Rain - Tập 5",
          "overview": "Tập 5 của Something in the Rain: chuyện tình nhẹ nhàng và sâu sắc...",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=xEiCIrDR6-I",
          "release_date": "2018-04-27",
          "seasonId": 145,
          "createdAt": "2018-04-27T00:00:00+00:00",
          "updatedAt": "2018-04-27T00:00:00+00:00"
      },
      {
          "id": 330,
          "episode_number": 6,
          "title": "Something in the Rain - Tập 6",
          "overview": "Tập 6 của Something in the Rain: chuyện tình nhẹ nhàng và sâu sắc...",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=xEiCIrDR6-I",
          "release_date": "2018-05-04",
          "seasonId": 145,
          "createdAt": "2018-05-04T00:00:00+00:00",
          "updatedAt": "2018-05-04T00:00:00+00:00"
      },
      {
          "id": 331,
          "episode_number": 7,
          "title": "Something in the Rain - Tập 7",
          "overview": "Tập 7 của Something in the Rain: chuyện tình nhẹ nhàng và sâu sắc...",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=xEiCIrDR6-I",
          "release_date": "2018-05-11",
          "seasonId": 145,
          "createdAt": "2018-05-11T00:00:00+00:00",
          "updatedAt": "2018-05-11T00:00:00+00:00"
      },
      {
          "id": 332,
          "episode_number": 8,
          "title": "Something in the Rain - Tập 8",
          "overview": "Tập 8 của Something in the Rain: chuyện tình nhẹ nhàng và sâu sắc...",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=xEiCIrDR6-I",
          "release_date": "2018-05-18",
          "seasonId": 145,
          "createdAt": "2018-05-18T00:00:00+00:00",
          "updatedAt": "2018-05-18T00:00:00+00:00"
      },
      {
          "id": 333,
          "episode_number": 9,
          "title": "Something in the Rain - Tập 9",
          "overview": "Tập 9 của Something in the Rain: chuyện tình nhẹ nhàng và sâu sắc...",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=xEiCIrDR6-I",
          "release_date": "2018-05-25",
          "seasonId": 145,
          "createdAt": "2018-05-25T00:00:00+00:00",
          "updatedAt": "2018-05-25T00:00:00+00:00"
      },
      {
          "id": 334,
          "episode_number": 10,
          "title": "Something in the Rain - Tập 10",
          "overview": "Tập 10 của Something in the Rain: chuyện tình nhẹ nhàng và sâu sắc...",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=xEiCIrDR6-I",
          "release_date": "2018-06-01",
          "seasonId": 145,
          "createdAt": "2018-06-01T00:00:00+00:00",
          "updatedAt": "2018-06-01T00:00:00+00:00"
      },
      {
          "id": 335,
          "episode_number": 11,
          "title": "Something in the Rain - Tập 11",
          "overview": "Tập 11 của Something in the Rain: chuyện tình nhẹ nhàng và sâu sắc...",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=xEiCIrDR6-I",
          "release_date": "2018-06-08",
          "seasonId": 145,
          "createdAt": "2018-06-08T00:00:00+00:00",
          "updatedAt": "2018-06-08T00:00:00+00:00"
      },
      {
          "id": 336,
          "episode_number": 12,
          "title": "Something in the Rain - Tập 12",
          "overview": "Tập 12 của Something in the Rain: chuyện tình nhẹ nhàng và sâu sắc...",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=xEiCIrDR6-I",
          "release_date": "2018-06-15",
          "seasonId": 145,
          "createdAt": "2018-06-15T00:00:00+00:00",
          "updatedAt": "2018-06-15T00:00:00+00:00"
      },
      {
          "id": 337,
          "episode_number": 13,
          "title": "Something in the Rain - Tập 13",
          "overview": "Tập 13 của Something in the Rain: chuyện tình nhẹ nhàng và sâu sắc...",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=xEiCIrDR6-I",
          "release_date": "2018-06-22",
          "seasonId": 145,
          "createdAt": "2018-06-22T00:00:00+00:00",
          "updatedAt": "2018-06-22T00:00:00+00:00"
      },
      {
          "id": 338,
          "episode_number": 14,
          "title": "Something in the Rain - Tập 14",
          "overview": "Tập 14 của Something in the Rain: chuyện tình nhẹ nhàng và sâu sắc...",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=xEiCIrDR6-I",
          "release_date": "2018-06-29",
          "seasonId": 145,
          "createdAt": "2018-06-29T00:00:00+00:00",
          "updatedAt": "2018-06-29T00:00:00+00:00"
      },
      {
          "id": 339,
          "episode_number": 15,
          "title": "Something in the Rain - Tập 15",
          "overview": "Tập 15 của Something in the Rain: chuyện tình nhẹ nhàng và sâu sắc...",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=xEiCIrDR6-I",
          "release_date": "2018-07-06",
          "seasonId": 145,
          "createdAt": "2018-07-06T00:00:00+00:00",
          "updatedAt": "2018-07-06T00:00:00+00:00"
      },
      {
          "id": 340,
          "episode_number": 16,
          "title": "Something in the Rain - Tập 16",
          "overview": "Tập 16 của Something in the Rain: chuyện tình nhẹ nhàng và sâu sắc...",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=xEiCIrDR6-I",
          "release_date": "2018-07-13",
          "seasonId": 145,
          "createdAt": "2018-07-13T00:00:00+00:00",
          "updatedAt": "2018-07-13T00:00:00+00:00"
      },
      {
          "id": 341,
          "episode_number": 1,
          "title": "Crash Landing on You - Tập 1",
          "overview": "Tập 1 của Crash Landing on You: chuyện tình giữa nữ tài phiệt Hàn Quốc và sĩ quan Triều Tiên khi cô bất ngờ đáp xuống miền Bắc.",
          "runtime": 85,
          "video_url": "https://www.youtube.com/watch?v=2rD6BzfHvUg",
          "release_date": "2019-12-14",
          "seasonId": 146,
          "createdAt": "2019-12-14T00:00:00+00:00",
          "updatedAt": "2019-12-14T00:00:00+00:00"
      },
      {
          "id": 342,
          "episode_number": 2,
          "title": "Crash Landing on You - Tập 2",
          "overview": "Tập 2 của Crash Landing on You: chuyện tình giữa nữ tài phiệt Hàn Quốc và sĩ quan Triều Tiên khi cô bất ngờ đáp xuống miền Bắc.",
          "runtime": 85,
          "video_url": "https://www.youtube.com/watch?v=2rD6BzfHvUg",
          "release_date": "2019-12-21",
          "seasonId": 146,
          "createdAt": "2019-12-21T00:00:00+00:00",
          "updatedAt": "2019-12-21T00:00:00+00:00"
      },
      {
          "id": 343,
          "episode_number": 3,
          "title": "Crash Landing on You - Tập 3",
          "overview": "Tập 3 của Crash Landing on You: chuyện tình giữa nữ tài phiệt Hàn Quốc và sĩ quan Triều Tiên khi cô bất ngờ đáp xuống miền Bắc.",
          "runtime": 85,
          "video_url": "https://www.youtube.com/watch?v=2rD6BzfHvUg",
          "release_date": "2019-12-28",
          "seasonId": 146,
          "createdAt": "2019-12-28T00:00:00+00:00",
          "updatedAt": "2019-12-28T00:00:00+00:00"
      },
      {
          "id": 344,
          "episode_number": 4,
          "title": "Crash Landing on You - Tập 4",
          "overview": "Tập 4 của Crash Landing on You: chuyện tình giữa nữ tài phiệt Hàn Quốc và sĩ quan Triều Tiên khi cô bất ngờ đáp xuống miền Bắc.",
          "runtime": 85,
          "video_url": "https://www.youtube.com/watch?v=2rD6BzfHvUg",
          "release_date": "2020-01-04",
          "seasonId": 146,
          "createdAt": "2020-01-04T00:00:00+00:00",
          "updatedAt": "2020-01-04T00:00:00+00:00"
      },
      {
          "id": 345,
          "episode_number": 5,
          "title": "Crash Landing on You - Tập 5",
          "overview": "Tập 5 của Crash Landing on You: chuyện tình giữa nữ tài phiệt Hàn Quốc và sĩ quan Triều Tiên khi cô bất ngờ đáp xuống miền Bắc.",
          "runtime": 85,
          "video_url": "https://www.youtube.com/watch?v=2rD6BzfHvUg",
          "release_date": "2020-01-11",
          "seasonId": 146,
          "createdAt": "2020-01-11T00:00:00+00:00",
          "updatedAt": "2020-01-11T00:00:00+00:00"
      },
      {
          "id": 346,
          "episode_number": 6,
          "title": "Crash Landing on You - Tập 6",
          "overview": "Tập 6 của Crash Landing on You: chuyện tình giữa nữ tài phiệt Hàn Quốc và sĩ quan Triều Tiên khi cô bất ngờ đáp xuống miền Bắc.",
          "runtime": 85,
          "video_url": "https://www.youtube.com/watch?v=2rD6BzfHvUg",
          "release_date": "2020-01-18",
          "seasonId": 146,
          "createdAt": "2020-01-18T00:00:00+00:00",
          "updatedAt": "2020-01-18T00:00:00+00:00"
      },
      {
          "id": 347,
          "episode_number": 7,
          "title": "Crash Landing on You - Tập 7",
          "overview": "Tập 7 của Crash Landing on You: chuyện tình giữa nữ tài phiệt Hàn Quốc và sĩ quan Triều Tiên khi cô bất ngờ đáp xuống miền Bắc.",
          "runtime": 85,
          "video_url": "https://www.youtube.com/watch?v=2rD6BzfHvUg",
          "release_date": "2020-01-25",
          "seasonId": 146,
          "createdAt": "2020-01-25T00:00:00+00:00",
          "updatedAt": "2020-01-25T00:00:00+00:00"
      },
      {
          "id": 348,
          "episode_number": 8,
          "title": "Crash Landing on You - Tập 8",
          "overview": "Tập 8 của Crash Landing on You: chuyện tình giữa nữ tài phiệt Hàn Quốc và sĩ quan Triều Tiên khi cô bất ngờ đáp xuống miền Bắc.",
          "runtime": 85,
          "video_url": "https://www.youtube.com/watch?v=2rD6BzfHvUg",
          "release_date": "2020-02-01",
          "seasonId": 146,
          "createdAt": "2020-02-01T00:00:00+00:00",
          "updatedAt": "2020-02-01T00:00:00+00:00"
      },
      {
          "id": 349,
          "episode_number": 9,
          "title": "Crash Landing on You - Tập 9",
          "overview": "Tập 9 của Crash Landing on You: chuyện tình giữa nữ tài phiệt Hàn Quốc và sĩ quan Triều Tiên khi cô bất ngờ đáp xuống miền Bắc.",
          "runtime": 85,
          "video_url": "https://www.youtube.com/watch?v=2rD6BzfHvUg",
          "release_date": "2020-02-08",
          "seasonId": 146,
          "createdAt": "2020-02-08T00:00:00+00:00",
          "updatedAt": "2020-02-08T00:00:00+00:00"
      },
      {
          "id": 350,
          "episode_number": 10,
          "title": "Crash Landing on You - Tập 10",
          "overview": "Tập 10 của Crash Landing on You: chuyện tình giữa nữ tài phiệt Hàn Quốc và sĩ quan Triều Tiên khi cô bất ngờ đáp xuống miền Bắc.",
          "runtime": 85,
          "video_url": "https://www.youtube.com/watch?v=2rD6BzfHvUg",
          "release_date": "2020-02-15",
          "seasonId": 146,
          "createdAt": "2020-02-15T00:00:00+00:00",
          "updatedAt": "2020-02-15T00:00:00+00:00"
      },
      {
          "id": 351,
          "episode_number": 11,
          "title": "Crash Landing on You - Tập 11",
          "overview": "Tập 11 của Crash Landing on You: chuyện tình giữa nữ tài phiệt Hàn Quốc và sĩ quan Triều Tiên khi cô bất ngờ đáp xuống miền Bắc.",
          "runtime": 85,
          "video_url": "https://www.youtube.com/watch?v=2rD6BzfHvUg",
          "release_date": "2020-02-22",
          "seasonId": 146,
          "createdAt": "2020-02-22T00:00:00+00:00",
          "updatedAt": "2020-02-22T00:00:00+00:00"
      },
      {
          "id": 352,
          "episode_number": 12,
          "title": "Crash Landing on You - Tập 12",
          "overview": "Tập 12 của Crash Landing on You: chuyện tình giữa nữ tài phiệt Hàn Quốc và sĩ quan Triều Tiên khi cô bất ngờ đáp xuống miền Bắc.",
          "runtime": 85,
          "video_url": "https://www.youtube.com/watch?v=2rD6BzfHvUg",
          "release_date": "2020-02-29",
          "seasonId": 146,
          "createdAt": "2020-02-29T00:00:00+00:00",
          "updatedAt": "2020-02-29T00:00:00+00:00"
      },
      {
          "id": 353,
          "episode_number": 13,
          "title": "Crash Landing on You - Tập 13",
          "overview": "Tập 13 của Crash Landing on You: chuyện tình giữa nữ tài phiệt Hàn Quốc và sĩ quan Triều Tiên khi cô bất ngờ đáp xuống miền Bắc.",
          "runtime": 85,
          "video_url": "https://www.youtube.com/watch?v=2rD6BzfHvUg",
          "release_date": "2020-03-07",
          "seasonId": 146,
          "createdAt": "2020-03-07T00:00:00+00:00",
          "updatedAt": "2020-03-07T00:00:00+00:00"
      },
      {
          "id": 354,
          "episode_number": 14,
          "title": "Crash Landing on You - Tập 14",
          "overview": "Tập 14 của Crash Landing on You: chuyện tình giữa nữ tài phiệt Hàn Quốc và sĩ quan Triều Tiên khi cô bất ngờ đáp xuống miền Bắc.",
          "runtime": 85,
          "video_url": "https://www.youtube.com/watch?v=2rD6BzfHvUg",
          "release_date": "2020-03-14",
          "seasonId": 146,
          "createdAt": "2020-03-14T00:00:00+00:00",
          "updatedAt": "2020-03-14T00:00:00+00:00"
      },
      {
          "id": 355,
          "episode_number": 15,
          "title": "Crash Landing on You - Tập 15",
          "overview": "Tập 15 của Crash Landing on You: chuyện tình giữa nữ tài phiệt Hàn Quốc và sĩ quan Triều Tiên khi cô bất ngờ đáp xuống miền Bắc.",
          "runtime": 85,
          "video_url": "https://www.youtube.com/watch?v=2rD6BzfHvUg",
          "release_date": "2020-03-21",
          "seasonId": 146,
          "createdAt": "2020-03-21T00:00:00+00:00",
          "updatedAt": "2020-03-21T00:00:00+00:00"
      },
      {
          "id": 356,
          "episode_number": 16,
          "title": "Crash Landing on You - Tập 16",
          "overview": "Tập 16 của Crash Landing on You: chuyện tình giữa nữ tài phiệt Hàn Quốc và sĩ quan Triều Tiên khi cô bất ngờ đáp xuống miền Bắc.",
          "runtime": 85,
          "video_url": "https://www.youtube.com/watch?v=2rD6BzfHvUg",
          "release_date": "2020-03-28",
          "seasonId": 146,
          "createdAt": "2020-03-28T00:00:00+00:00",
          "updatedAt": "2020-03-28T00:00:00+00:00"
      },
      {
          "id": 357,
          "episode_number": 1,
          "title": "When the Camellia Blooms - Tập 1",
          "overview": "Tập 1 của When the Camellia Blooms: hành trình của bà mẹ đơn thân giữa tình yêu, gia đình và những bí ẩn giết người trong thị trấn nhỏ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=prl2MXJQSKo",
          "release_date": "2019-09-18",
          "seasonId": 147,
          "createdAt": "2019-09-18T00:00:00+00:00",
          "updatedAt": "2019-09-18T00:00:00+00:00"
      },
      {
          "id": 358,
          "episode_number": 2,
          "title": "When the Camellia Blooms - Tập 2",
          "overview": "Tập 2 của When the Camellia Blooms: hành trình của bà mẹ đơn thân giữa tình yêu, gia đình và những bí ẩn giết người trong thị trấn nhỏ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=prl2MXJQSKo",
          "release_date": "2019-09-25",
          "seasonId": 147,
          "createdAt": "2019-09-25T00:00:00+00:00",
          "updatedAt": "2019-09-25T00:00:00+00:00"
      },
      {
          "id": 359,
          "episode_number": 3,
          "title": "When the Camellia Blooms - Tập 3",
          "overview": "Tập 3 của When the Camellia Blooms: hành trình của bà mẹ đơn thân giữa tình yêu, gia đình và những bí ẩn giết người trong thị trấn nhỏ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=prl2MXJQSKo",
          "release_date": "2019-10-02",
          "seasonId": 147,
          "createdAt": "2019-10-02T00:00:00+00:00",
          "updatedAt": "2019-10-02T00:00:00+00:00"
      },
      {
          "id": 360,
          "episode_number": 4,
          "title": "When the Camellia Blooms - Tập 4",
          "overview": "Tập 4 của When the Camellia Blooms: hành trình của bà mẹ đơn thân giữa tình yêu, gia đình và những bí ẩn giết người trong thị trấn nhỏ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=prl2MXJQSKo",
          "release_date": "2019-10-09",
          "seasonId": 147,
          "createdAt": "2019-10-09T00:00:00+00:00",
          "updatedAt": "2019-10-09T00:00:00+00:00"
      },
      {
          "id": 361,
          "episode_number": 5,
          "title": "When the Camellia Blooms - Tập 5",
          "overview": "Tập 5 của When the Camellia Blooms: hành trình của bà mẹ đơn thân giữa tình yêu, gia đình và những bí ẩn giết người trong thị trấn nhỏ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=prl2MXJQSKo",
          "release_date": "2019-10-16",
          "seasonId": 147,
          "createdAt": "2019-10-16T00:00:00+00:00",
          "updatedAt": "2019-10-16T00:00:00+00:00"
      },
      {
          "id": 362,
          "episode_number": 6,
          "title": "When the Camellia Blooms - Tập 6",
          "overview": "Tập 6 của When the Camellia Blooms: hành trình của bà mẹ đơn thân giữa tình yêu, gia đình và những bí ẩn giết người trong thị trấn nhỏ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=prl2MXJQSKo",
          "release_date": "2019-10-23",
          "seasonId": 147,
          "createdAt": "2019-10-23T00:00:00+00:00",
          "updatedAt": "2019-10-23T00:00:00+00:00"
      },
      {
          "id": 363,
          "episode_number": 7,
          "title": "When the Camellia Blooms - Tập 7",
          "overview": "Tập 7 của When the Camellia Blooms: hành trình của bà mẹ đơn thân giữa tình yêu, gia đình và những bí ẩn giết người trong thị trấn nhỏ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=prl2MXJQSKo",
          "release_date": "2019-10-30",
          "seasonId": 147,
          "createdAt": "2019-10-30T00:00:00+00:00",
          "updatedAt": "2019-10-30T00:00:00+00:00"
      },
      {
          "id": 364,
          "episode_number": 8,
          "title": "When the Camellia Blooms - Tập 8",
          "overview": "Tập 8 của When the Camellia Blooms: hành trình của bà mẹ đơn thân giữa tình yêu, gia đình và những bí ẩn giết người trong thị trấn nhỏ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=prl2MXJQSKo",
          "release_date": "2019-11-06",
          "seasonId": 147,
          "createdAt": "2019-11-06T00:00:00+00:00",
          "updatedAt": "2019-11-06T00:00:00+00:00"
      },
      {
          "id": 365,
          "episode_number": 9,
          "title": "When the Camellia Blooms - Tập 9",
          "overview": "Tập 9 của When the Camellia Blooms: hành trình của bà mẹ đơn thân giữa tình yêu, gia đình và những bí ẩn giết người trong thị trấn nhỏ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=prl2MXJQSKo",
          "release_date": "2019-11-13",
          "seasonId": 147,
          "createdAt": "2019-11-13T00:00:00+00:00",
          "updatedAt": "2019-11-13T00:00:00+00:00"
      },
      {
          "id": 366,
          "episode_number": 10,
          "title": "When the Camellia Blooms - Tập 10",
          "overview": "Tập 10 của When the Camellia Blooms: hành trình của bà mẹ đơn thân giữa tình yêu, gia đình và những bí ẩn giết người trong thị trấn nhỏ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=prl2MXJQSKo",
          "release_date": "2019-11-20",
          "seasonId": 147,
          "createdAt": "2019-11-20T00:00:00+00:00",
          "updatedAt": "2019-11-20T00:00:00+00:00"
      },
      {
          "id": 367,
          "episode_number": 11,
          "title": "When the Camellia Blooms - Tập 11",
          "overview": "Tập 11 của When the Camellia Blooms: hành trình của bà mẹ đơn thân giữa tình yêu, gia đình và những bí ẩn giết người trong thị trấn nhỏ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=prl2MXJQSKo",
          "release_date": "2019-11-27",
          "seasonId": 147,
          "createdAt": "2019-11-27T00:00:00+00:00",
          "updatedAt": "2019-11-27T00:00:00+00:00"
      },
      {
          "id": 368,
          "episode_number": 12,
          "title": "When the Camellia Blooms - Tập 12",
          "overview": "Tập 12 của When the Camellia Blooms: hành trình của bà mẹ đơn thân giữa tình yêu, gia đình và những bí ẩn giết người trong thị trấn nhỏ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=prl2MXJQSKo",
          "release_date": "2019-12-04",
          "seasonId": 147,
          "createdAt": "2019-12-04T00:00:00+00:00",
          "updatedAt": "2019-12-04T00:00:00+00:00"
      },
      {
          "id": 369,
          "episode_number": 13,
          "title": "When the Camellia Blooms - Tập 13",
          "overview": "Tập 13 của When the Camellia Blooms: hành trình của bà mẹ đơn thân giữa tình yêu, gia đình và những bí ẩn giết người trong thị trấn nhỏ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=prl2MXJQSKo",
          "release_date": "2019-12-11",
          "seasonId": 147,
          "createdAt": "2019-12-11T00:00:00+00:00",
          "updatedAt": "2019-12-11T00:00:00+00:00"
      },
      {
          "id": 370,
          "episode_number": 14,
          "title": "When the Camellia Blooms - Tập 14",
          "overview": "Tập 14 của When the Camellia Blooms: hành trình của bà mẹ đơn thân giữa tình yêu, gia đình và những bí ẩn giết người trong thị trấn nhỏ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=prl2MXJQSKo",
          "release_date": "2019-12-18",
          "seasonId": 147,
          "createdAt": "2019-12-18T00:00:00+00:00",
          "updatedAt": "2019-12-18T00:00:00+00:00"
      },
      {
          "id": 371,
          "episode_number": 15,
          "title": "When the Camellia Blooms - Tập 15",
          "overview": "Tập 15 của When the Camellia Blooms: hành trình của bà mẹ đơn thân giữa tình yêu, gia đình và những bí ẩn giết người trong thị trấn nhỏ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=prl2MXJQSKo",
          "release_date": "2019-12-25",
          "seasonId": 147,
          "createdAt": "2019-12-25T00:00:00+00:00",
          "updatedAt": "2019-12-25T00:00:00+00:00"
      },
      {
          "id": 372,
          "episode_number": 16,
          "title": "When the Camellia Blooms - Tập 16",
          "overview": "Tập 16 của When the Camellia Blooms: hành trình của bà mẹ đơn thân giữa tình yêu, gia đình và những bí ẩn giết người trong thị trấn nhỏ.",
          "runtime": 70,
          "video_url": "https://www.youtube.com/watch?v=prl2MXJQSKo",
          "release_date": "2020-01-01",
          "seasonId": 147,
          "createdAt": "2020-01-01T00:00:00+00:00",
          "updatedAt": "2020-01-01T00:00:00+00:00"
      },
      {
          "id": 373,
          "episode_number": 1,
          "title": "Vincenzo - Tập 1",
          "overview": "Tập 1 của Vincenzo: Hành trình luật sư mafia trở về Hàn Quốc để đòi lại công lý theo cách riêng của mình.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=Rbj8aO7Sc4o",
          "release_date": "2021-02-20",
          "seasonId": 148,
          "createdAt": "2021-02-20T00:00:00+00:00",
          "updatedAt": "2021-02-20T00:00:00+00:00"
      },
      {
          "id": 374,
          "episode_number": 2,
          "title": "Vincenzo - Tập 2",
          "overview": "Tập 2 của Vincenzo: Hành trình luật sư mafia trở về Hàn Quốc để đòi lại công lý theo cách riêng của mình.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=Rbj8aO7Sc4o",
          "release_date": "2021-02-27",
          "seasonId": 148,
          "createdAt": "2021-02-27T00:00:00+00:00",
          "updatedAt": "2021-02-27T00:00:00+00:00"
      },
      {
          "id": 375,
          "episode_number": 3,
          "title": "Vincenzo - Tập 3",
          "overview": "Tập 3 của Vincenzo: Hành trình luật sư mafia trở về Hàn Quốc để đòi lại công lý theo cách riêng của mình.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=Rbj8aO7Sc4o",
          "release_date": "2021-03-06",
          "seasonId": 148,
          "createdAt": "2021-03-06T00:00:00+00:00",
          "updatedAt": "2021-03-06T00:00:00+00:00"
      },
      {
          "id": 376,
          "episode_number": 4,
          "title": "Vincenzo - Tập 4",
          "overview": "Tập 4 của Vincenzo: Hành trình luật sư mafia trở về Hàn Quốc để đòi lại công lý theo cách riêng của mình.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=Rbj8aO7Sc4o",
          "release_date": "2021-03-13",
          "seasonId": 148,
          "createdAt": "2021-03-13T00:00:00+00:00",
          "updatedAt": "2021-03-13T00:00:00+00:00"
      },
      {
          "id": 377,
          "episode_number": 5,
          "title": "Vincenzo - Tập 5",
          "overview": "Tập 5 của Vincenzo: Hành trình luật sư mafia trở về Hàn Quốc để đòi lại công lý theo cách riêng của mình.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=Rbj8aO7Sc4o",
          "release_date": "2021-03-20",
          "seasonId": 148,
          "createdAt": "2021-03-20T00:00:00+00:00",
          "updatedAt": "2021-03-20T00:00:00+00:00"
      },
      {
          "id": 378,
          "episode_number": 6,
          "title": "Vincenzo - Tập 6",
          "overview": "Tập 6 của Vincenzo: Hành trình luật sư mafia trở về Hàn Quốc để đòi lại công lý theo cách riêng của mình.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=Rbj8aO7Sc4o",
          "release_date": "2021-03-27",
          "seasonId": 148,
          "createdAt": "2021-03-27T00:00:00+00:00",
          "updatedAt": "2021-03-27T00:00:00+00:00"
      },
      {
          "id": 379,
          "episode_number": 7,
          "title": "Vincenzo - Tập 7",
          "overview": "Tập 7 của Vincenzo: Hành trình luật sư mafia trở về Hàn Quốc để đòi lại công lý theo cách riêng của mình.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=Rbj8aO7Sc4o",
          "release_date": "2021-04-03",
          "seasonId": 148,
          "createdAt": "2021-04-03T00:00:00+00:00",
          "updatedAt": "2021-04-03T00:00:00+00:00"
      },
      {
          "id": 380,
          "episode_number": 8,
          "title": "Vincenzo - Tập 8",
          "overview": "Tập 8 của Vincenzo: Hành trình luật sư mafia trở về Hàn Quốc để đòi lại công lý theo cách riêng của mình.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=Rbj8aO7Sc4o",
          "release_date": "2021-04-10",
          "seasonId": 148,
          "createdAt": "2021-04-10T00:00:00+00:00",
          "updatedAt": "2021-04-10T00:00:00+00:00"
      },
      {
          "id": 381,
          "episode_number": 9,
          "title": "Vincenzo - Tập 9",
          "overview": "Tập 9 của Vincenzo: Hành trình luật sư mafia trở về Hàn Quốc để đòi lại công lý theo cách riêng của mình.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=Rbj8aO7Sc4o",
          "release_date": "2021-04-17",
          "seasonId": 148,
          "createdAt": "2021-04-17T00:00:00+00:00",
          "updatedAt": "2021-04-17T00:00:00+00:00"
      },
      {
          "id": 382,
          "episode_number": 10,
          "title": "Vincenzo - Tập 10",
          "overview": "Tập 10 của Vincenzo: Hành trình luật sư mafia trở về Hàn Quốc để đòi lại công lý theo cách riêng của mình.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=Rbj8aO7Sc4o",
          "release_date": "2021-04-24",
          "seasonId": 148,
          "createdAt": "2021-04-24T00:00:00+00:00",
          "updatedAt": "2021-04-24T00:00:00+00:00"
      },
      {
          "id": 383,
          "episode_number": 11,
          "title": "Vincenzo - Tập 11",
          "overview": "Tập 11 của Vincenzo: Hành trình luật sư mafia trở về Hàn Quốc để đòi lại công lý theo cách riêng của mình.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=Rbj8aO7Sc4o",
          "release_date": "2021-05-01",
          "seasonId": 148,
          "createdAt": "2021-05-01T00:00:00+00:00",
          "updatedAt": "2021-05-01T00:00:00+00:00"
      },
      {
          "id": 384,
          "episode_number": 12,
          "title": "Vincenzo - Tập 12",
          "overview": "Tập 12 của Vincenzo: Hành trình luật sư mafia trở về Hàn Quốc để đòi lại công lý theo cách riêng của mình.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=Rbj8aO7Sc4o",
          "release_date": "2021-05-08",
          "seasonId": 148,
          "createdAt": "2021-05-08T00:00:00+00:00",
          "updatedAt": "2021-05-08T00:00:00+00:00"
      },
      {
          "id": 385,
          "episode_number": 13,
          "title": "Vincenzo - Tập 13",
          "overview": "Tập 13 của Vincenzo: Hành trình luật sư mafia trở về Hàn Quốc để đòi lại công lý theo cách riêng của mình.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=Rbj8aO7Sc4o",
          "release_date": "2021-05-15",
          "seasonId": 148,
          "createdAt": "2021-05-15T00:00:00+00:00",
          "updatedAt": "2021-05-15T00:00:00+00:00"
      },
      {
          "id": 386,
          "episode_number": 14,
          "title": "Vincenzo - Tập 14",
          "overview": "Tập 14 của Vincenzo: Hành trình luật sư mafia trở về Hàn Quốc để đòi lại công lý theo cách riêng của mình.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=Rbj8aO7Sc4o",
          "release_date": "2021-05-22",
          "seasonId": 148,
          "createdAt": "2021-05-22T00:00:00+00:00",
          "updatedAt": "2021-05-22T00:00:00+00:00"
      },
      {
          "id": 387,
          "episode_number": 15,
          "title": "Vincenzo - Tập 15",
          "overview": "Tập 15 của Vincenzo: Hành trình luật sư mafia trở về Hàn Quốc để đòi lại công lý theo cách riêng của mình.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=Rbj8aO7Sc4o",
          "release_date": "2021-05-29",
          "seasonId": 148,
          "createdAt": "2021-05-29T00:00:00+00:00",
          "updatedAt": "2021-05-29T00:00:00+00:00"
      },
      {
          "id": 388,
          "episode_number": 16,
          "title": "Vincenzo - Tập 16",
          "overview": "Tập 16 của Vincenzo: Hành trình luật sư mafia trở về Hàn Quốc để đòi lại công lý theo cách riêng của mình.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=Rbj8aO7Sc4o",
          "release_date": "2021-06-05",
          "seasonId": 148,
          "createdAt": "2021-06-05T00:00:00+00:00",
          "updatedAt": "2021-06-05T00:00:00+00:00"
      },
      {
          "id": 389,
          "episode_number": 1,
          "title": "Hometown Cha-Cha-Cha - Tập 1",
          "overview": "Tập 1 của Hometown Cha-Cha-Cha: Câu chuyện tình yêu nhẹ nhàng giữa cô nha sĩ thành thị và anh chàng đa năng ở làng biển Gongjin.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=z66fazyp3-M",
          "release_date": "2021-08-28",
          "seasonId": 149,
          "createdAt": "2021-08-28T00:00:00+00:00",
          "updatedAt": "2021-08-28T00:00:00+00:00"
      },
      {
          "id": 390,
          "episode_number": 2,
          "title": "Hometown Cha-Cha-Cha - Tập 2",
          "overview": "Tập 2 của Hometown Cha-Cha-Cha: Câu chuyện tình yêu nhẹ nhàng giữa cô nha sĩ thành thị và anh chàng đa năng ở làng biển Gongjin.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=z66fazyp3-M",
          "release_date": "2021-09-04",
          "seasonId": 149,
          "createdAt": "2021-09-04T00:00:00+00:00",
          "updatedAt": "2021-09-04T00:00:00+00:00"
      },
      {
          "id": 391,
          "episode_number": 3,
          "title": "Hometown Cha-Cha-Cha - Tập 3",
          "overview": "Tập 3 của Hometown Cha-Cha-Cha: Câu chuyện tình yêu nhẹ nhàng giữa cô nha sĩ thành thị và anh chàng đa năng ở làng biển Gongjin.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=z66fazyp3-M",
          "release_date": "2021-09-11",
          "seasonId": 149,
          "createdAt": "2021-09-11T00:00:00+00:00",
          "updatedAt": "2021-09-11T00:00:00+00:00"
      },
      {
          "id": 392,
          "episode_number": 4,
          "title": "Hometown Cha-Cha-Cha - Tập 4",
          "overview": "Tập 4 của Hometown Cha-Cha-Cha: Câu chuyện tình yêu nhẹ nhàng giữa cô nha sĩ thành thị và anh chàng đa năng ở làng biển Gongjin.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=z66fazyp3-M",
          "release_date": "2021-09-18",
          "seasonId": 149,
          "createdAt": "2021-09-18T00:00:00+00:00",
          "updatedAt": "2021-09-18T00:00:00+00:00"
      },
      {
          "id": 393,
          "episode_number": 5,
          "title": "Hometown Cha-Cha-Cha - Tập 5",
          "overview": "Tập 5 của Hometown Cha-Cha-Cha: Câu chuyện tình yêu nhẹ nhàng giữa cô nha sĩ thành thị và anh chàng đa năng ở làng biển Gongjin.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=z66fazyp3-M",
          "release_date": "2021-09-25",
          "seasonId": 149,
          "createdAt": "2021-09-25T00:00:00+00:00",
          "updatedAt": "2021-09-25T00:00:00+00:00"
      },
      {
          "id": 394,
          "episode_number": 6,
          "title": "Hometown Cha-Cha-Cha - Tập 6",
          "overview": "Tập 6 của Hometown Cha-Cha-Cha: Câu chuyện tình yêu nhẹ nhàng giữa cô nha sĩ thành thị và anh chàng đa năng ở làng biển Gongjin.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=z66fazyp3-M",
          "release_date": "2021-10-02",
          "seasonId": 149,
          "createdAt": "2021-10-02T00:00:00+00:00",
          "updatedAt": "2021-10-02T00:00:00+00:00"
      },
      {
          "id": 395,
          "episode_number": 7,
          "title": "Hometown Cha-Cha-Cha - Tập 7",
          "overview": "Tập 7 của Hometown Cha-Cha-Cha: Câu chuyện tình yêu nhẹ nhàng giữa cô nha sĩ thành thị và anh chàng đa năng ở làng biển Gongjin.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=z66fazyp3-M",
          "release_date": "2021-10-09",
          "seasonId": 149,
          "createdAt": "2021-10-09T00:00:00+00:00",
          "updatedAt": "2021-10-09T00:00:00+00:00"
      },
      {
          "id": 396,
          "episode_number": 8,
          "title": "Hometown Cha-Cha-Cha - Tập 8",
          "overview": "Tập 8 của Hometown Cha-Cha-Cha: Câu chuyện tình yêu nhẹ nhàng giữa cô nha sĩ thành thị và anh chàng đa năng ở làng biển Gongjin.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=z66fazyp3-M",
          "release_date": "2021-10-16",
          "seasonId": 149,
          "createdAt": "2021-10-16T00:00:00+00:00",
          "updatedAt": "2021-10-16T00:00:00+00:00"
      },
      {
          "id": 397,
          "episode_number": 9,
          "title": "Hometown Cha-Cha-Cha - Tập 9",
          "overview": "Tập 9 của Hometown Cha-Cha-Cha: Câu chuyện tình yêu nhẹ nhàng giữa cô nha sĩ thành thị và anh chàng đa năng ở làng biển Gongjin.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=z66fazyp3-M",
          "release_date": "2021-10-23",
          "seasonId": 149,
          "createdAt": "2021-10-23T00:00:00+00:00",
          "updatedAt": "2021-10-23T00:00:00+00:00"
      },
      {
          "id": 398,
          "episode_number": 10,
          "title": "Hometown Cha-Cha-Cha - Tập 10",
          "overview": "Tập 10 của Hometown Cha-Cha-Cha: Câu chuyện tình yêu nhẹ nhàng giữa cô nha sĩ thành thị và anh chàng đa năng ở làng biển Gongjin.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=z66fazyp3-M",
          "release_date": "2021-10-30",
          "seasonId": 149,
          "createdAt": "2021-10-30T00:00:00+00:00",
          "updatedAt": "2021-10-30T00:00:00+00:00"
      },
      {
          "id": 399,
          "episode_number": 11,
          "title": "Hometown Cha-Cha-Cha - Tập 11",
          "overview": "Tập 11 của Hometown Cha-Cha-Cha: Câu chuyện tình yêu nhẹ nhàng giữa cô nha sĩ thành thị và anh chàng đa năng ở làng biển Gongjin.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=z66fazyp3-M",
          "release_date": "2021-11-06",
          "seasonId": 149,
          "createdAt": "2021-11-06T00:00:00+00:00",
          "updatedAt": "2021-11-06T00:00:00+00:00"
      },
      {
          "id": 400,
          "episode_number": 12,
          "title": "Hometown Cha-Cha-Cha - Tập 12",
          "overview": "Tập 12 của Hometown Cha-Cha-Cha: Câu chuyện tình yêu nhẹ nhàng giữa cô nha sĩ thành thị và anh chàng đa năng ở làng biển Gongjin.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=z66fazyp3-M",
          "release_date": "2021-11-13",
          "seasonId": 149,
          "createdAt": "2021-11-13T00:00:00+00:00",
          "updatedAt": "2021-11-13T00:00:00+00:00"
      },
      {
          "id": 401,
          "episode_number": 13,
          "title": "Hometown Cha-Cha-Cha - Tập 13",
          "overview": "Tập 13 của Hometown Cha-Cha-Cha: Câu chuyện tình yêu nhẹ nhàng giữa cô nha sĩ thành thị và anh chàng đa năng ở làng biển Gongjin.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=z66fazyp3-M",
          "release_date": "2021-11-20",
          "seasonId": 149,
          "createdAt": "2021-11-20T00:00:00+00:00",
          "updatedAt": "2021-11-20T00:00:00+00:00"
      },
      {
          "id": 402,
          "episode_number": 14,
          "title": "Hometown Cha-Cha-Cha - Tập 14",
          "overview": "Tập 14 của Hometown Cha-Cha-Cha: Câu chuyện tình yêu nhẹ nhàng giữa cô nha sĩ thành thị và anh chàng đa năng ở làng biển Gongjin.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=z66fazyp3-M",
          "release_date": "2021-11-27",
          "seasonId": 149,
          "createdAt": "2021-11-27T00:00:00+00:00",
          "updatedAt": "2021-11-27T00:00:00+00:00"
      },
      {
          "id": 403,
          "episode_number": 15,
          "title": "Hometown Cha-Cha-Cha - Tập 15",
          "overview": "Tập 15 của Hometown Cha-Cha-Cha: Câu chuyện tình yêu nhẹ nhàng giữa cô nha sĩ thành thị và anh chàng đa năng ở làng biển Gongjin.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=z66fazyp3-M",
          "release_date": "2021-12-04",
          "seasonId": 149,
          "createdAt": "2021-12-04T00:00:00+00:00",
          "updatedAt": "2021-12-04T00:00:00+00:00"
      },
      {
          "id": 404,
          "episode_number": 16,
          "title": "Hometown Cha-Cha-Cha - Tập 16",
          "overview": "Tập 16 của Hometown Cha-Cha-Cha: Câu chuyện tình yêu nhẹ nhàng giữa cô nha sĩ thành thị và anh chàng đa năng ở làng biển Gongjin.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=z66fazyp3-M",
          "release_date": "2021-12-11",
          "seasonId": 149,
          "createdAt": "2021-12-11T00:00:00+00:00",
          "updatedAt": "2021-12-11T00:00:00+00:00"
      },
      {
          "id": 405,
          "episode_number": 1,
          "title": "Twenty-Five Twenty-One - Tập 1",
          "overview": "Tập 1 của Twenty-Five Twenty-One: Hành trình thanh xuân rực rỡ giữa Na Hee-do và Baek Yi-jin bắt đầu trong thời kỳ khủng hoảng kinh tế Hàn Quốc.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=PBCXHOskDQ4",
          "release_date": "2022-02-12",
          "seasonId": 150,
          "createdAt": "2022-02-12T00:00:00+00:00",
          "updatedAt": "2022-02-12T00:00:00+00:00"
      },
      {
          "id": 406,
          "episode_number": 2,
          "title": "Twenty-Five Twenty-One - Tập 2",
          "overview": "Tập 2 của Twenty-Five Twenty-One: Na Hee-do bắt đầu hành trình trở thành vận động viên đấu kiếm giữa bao thử thách của tuổi trẻ.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=PBCXHOskDQ4",
          "release_date": "2022-02-13",
          "seasonId": 150,
          "createdAt": "2022-02-13T00:00:00+00:00",
          "updatedAt": "2022-02-13T00:00:00+00:00"
      },
      {
          "id": 407,
          "episode_number": 3,
          "title": "Twenty-Five Twenty-One - Tập 3",
          "overview": "Tập 3 của Twenty-Five Twenty-One: Baek Yi-jin đối mặt với quá khứ gia đình và bắt đầu gắn bó hơn với Hee-do.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=PBCXHOskDQ4",
          "release_date": "2022-02-19",
          "seasonId": 150,
          "createdAt": "2022-02-19T00:00:00+00:00",
          "updatedAt": "2022-02-19T00:00:00+00:00"
      },
      {
          "id": 408,
          "episode_number": 4,
          "title": "Twenty-Five Twenty-One - Tập 4",
          "overview": "Tập 4 của Twenty-Five Twenty-One: Mối quan hệ giữa Hee-do và Yi-jin dần phát triển qua những lần gặp gỡ định mệnh.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=PBCXHOskDQ4",
          "release_date": "2022-02-20",
          "seasonId": 150,
          "createdAt": "2022-02-20T00:00:00+00:00",
          "updatedAt": "2022-02-20T00:00:00+00:00"
      },
      {
          "id": 409,
          "episode_number": 5,
          "title": "Twenty-Five Twenty-One - Tập 5",
          "overview": "Tập 5 của Twenty-Five Twenty-One: Những nỗ lực không ngừng nghỉ đưa Hee-do đến gần hơn với giấc mơ vô địch quốc gia.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=PBCXHOskDQ4",
          "release_date": "2022-02-26",
          "seasonId": 150,
          "createdAt": "2022-02-26T00:00:00+00:00",
          "updatedAt": "2022-02-26T00:00:00+00:00"
      },
      {
          "id": 410,
          "episode_number": 6,
          "title": "Twenty-Five Twenty-One - Tập 6",
          "overview": "Tập 6 của Twenty-Five Twenty-One: Cạnh tranh, áp lực và sự quan tâm của Yi-jin khiến trái tim Hee-do rung động.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=PBCXHOskDQ4",
          "release_date": "2022-02-27",
          "seasonId": 150,
          "createdAt": "2022-02-27T00:00:00+00:00",
          "updatedAt": "2022-02-27T00:00:00+00:00"
      },
      {
          "id": 411,
          "episode_number": 7,
          "title": "Twenty-Five Twenty-One - Tập 7",
          "overview": "Tập 7 của Twenty-Five Twenty-One: Tình bạn và tình yêu dần chồng chéo khi mối quan hệ giữa các nhân vật trở nên sâu sắc.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=PBCXHOskDQ4",
          "release_date": "2022-03-05",
          "seasonId": 150,
          "createdAt": "2022-03-05T00:00:00+00:00",
          "updatedAt": "2022-03-05T00:00:00+00:00"
      },
      {
          "id": 412,
          "episode_number": 8,
          "title": "Twenty-Five Twenty-One - Tập 8",
          "overview": "Tập 8 của Twenty-Five Twenty-One: Sự ghen tuông và hiểu lầm bắt đầu xuất hiện giữa Hee-do và những người xung quanh.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=PBCXHOskDQ4",
          "release_date": "2022-03-06",
          "seasonId": 150,
          "createdAt": "2022-03-06T00:00:00+00:00",
          "updatedAt": "2022-03-06T00:00:00+00:00"
      },
      {
          "id": 413,
          "episode_number": 9,
          "title": "Twenty-Five Twenty-One - Tập 9",
          "overview": "Tập 9 của Twenty-Five Twenty-One: Những tổn thương thời niên thiếu dần lộ diện, đẩy nhân vật vào những lựa chọn khó khăn.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=PBCXHOskDQ4",
          "release_date": "2022-03-12",
          "seasonId": 150,
          "createdAt": "2022-03-12T00:00:00+00:00",
          "updatedAt": "2022-03-12T00:00:00+00:00"
      },
      {
          "id": 414,
          "episode_number": 10,
          "title": "Twenty-Five Twenty-One - Tập 10",
          "overview": "Tập 10 của Twenty-Five Twenty-One: Hee-do đối mặt với thất bại lớn nhất trong sự nghiệp và sự động viên bất ngờ từ Yi-jin.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=PBCXHOskDQ4",
          "release_date": "2022-03-13",
          "seasonId": 150,
          "createdAt": "2022-03-13T00:00:00+00:00",
          "updatedAt": "2022-03-13T00:00:00+00:00"
      },
      {
          "id": 415,
          "episode_number": 11,
          "title": "Twenty-Five Twenty-One - Tập 11",
          "overview": "Tập 11 của Twenty-Five Twenty-One: Một sự kiện bất ngờ khiến Yi-jin phải đối mặt với lựa chọn về sự nghiệp và tình cảm.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=PBCXHOskDQ4",
          "release_date": "2022-03-19",
          "seasonId": 150,
          "createdAt": "2022-03-19T00:00:00+00:00",
          "updatedAt": "2022-03-19T00:00:00+00:00"
      },
      {
          "id": 416,
          "episode_number": 12,
          "title": "Twenty-Five Twenty-One - Tập 12",
          "overview": "Tập 12 của Twenty-Five Twenty-One: Hee-do và Yi-jin đối diện với khoảng cách ngày càng lớn giữa họ.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=PBCXHOskDQ4",
          "release_date": "2022-03-20",
          "seasonId": 150,
          "createdAt": "2022-03-20T00:00:00+00:00",
          "updatedAt": "2022-03-20T00:00:00+00:00"
      },
      {
          "id": 417,
          "episode_number": 13,
          "title": "Twenty-Five Twenty-One - Tập 13",
          "overview": "Tập 13 của Twenty-Five Twenty-One: Ký ức tuổi trẻ và những hứa hẹn bị thử thách bởi sự trưởng thành.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=PBCXHOskDQ4",
          "release_date": "2022-03-26",
          "seasonId": 150,
          "createdAt": "2022-03-26T00:00:00+00:00",
          "updatedAt": "2022-03-26T00:00:00+00:00"
      },
      {
          "id": 418,
          "episode_number": 14,
          "title": "Twenty-Five Twenty-One - Tập 14",
          "overview": "Tập 14 của Twenty-Five Twenty-One: Những lựa chọn của hiện tại phản chiếu lại tất cả hy vọng của quá khứ.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=PBCXHOskDQ4",
          "release_date": "2022-03-27",
          "seasonId": 150,
          "createdAt": "2022-03-27T00:00:00+00:00",
          "updatedAt": "2022-03-27T00:00:00+00:00"
      },
      {
          "id": 419,
          "episode_number": 15,
          "title": "Twenty-Five Twenty-One - Tập 15",
          "overview": "Tập 15 của Twenty-Five Twenty-One: Yi-jin và Hee-do đưa ra quyết định định mệnh khi bước vào tuổi trưởng thành.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=PBCXHOskDQ4",
          "release_date": "2022-04-02",
          "seasonId": 150,
          "createdAt": "2022-04-02T00:00:00+00:00",
          "updatedAt": "2022-04-02T00:00:00+00:00"
      },
      {
          "id": 420,
          "episode_number": 16,
          "title": "Twenty-Five Twenty-One - Tập 16",
          "overview": "Tập cuối của Twenty-Five Twenty-One: Hồi kết của mối tình thanh xuân đẹp đẽ, đầy tiếc nuối và ý nghĩa.",
          "runtime": 80,
          "video_url": "https://www.youtube.com/watch?v=PBCXHOskDQ4",
          "release_date": "2022-04-03",
          "seasonId": 150,
          "createdAt": "2022-04-03T00:00:00+00:00",
          "updatedAt": "2022-04-03T00:00:00+00:00"
      },
      {
          "id": 421,
          "episode_number": 1,
          "title": "Extraordinary Attorney Woo - Tập 1",
          "overview": "Woo Young-woo, nữ luật sư mắc chứng tự kỷ, bắt đầu công việc đầu tiên tại một công ty luật danh tiếng.",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=9SdYFYflVbw",
          "release_date": "2022-06-29",
          "seasonId": 151,
          "createdAt": "2022-06-29T00:00:00+00:00",
          "updatedAt": "2022-06-29T00:00:00+00:00"
      },
      {
          "id": 422,
          "episode_number": 2,
          "title": "Extraordinary Attorney Woo - Tập 2",
          "overview": "Young-woo xử lý vụ kiện đầu tiên, gây bất ngờ bởi tư duy pháp lý độc đáo của mình.",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=9SdYFYflVbw",
          "release_date": "2022-06-30",
          "seasonId": 151,
          "createdAt": "2022-06-30T00:00:00+00:00",
          "updatedAt": "2022-06-30T00:00:00+00:00"
      },
      {
          "id": 423,
          "episode_number": 3,
          "title": "Extraordinary Attorney Woo - Tập 3",
          "overview": "Một vụ án ly kỳ tại vùng quê khiến Young-woo phải vượt qua sự kỳ thị từ người dân.",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=9SdYFYflVbw",
          "release_date": "2022-07-06",
          "seasonId": 151,
          "createdAt": "2022-07-06T00:00:00+00:00",
          "updatedAt": "2022-07-06T00:00:00+00:00"
      },
      {
          "id": 424,
          "episode_number": 4,
          "title": "Extraordinary Attorney Woo - Tập 4",
          "overview": "Câu chuyện về một chú cá voi và bản năng bảo vệ của Young-woo trong một vụ kiện phức tạp.",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=9SdYFYflVbw",
          "release_date": "2022-07-07",
          "seasonId": 151,
          "createdAt": "2022-07-07T00:00:00+00:00",
          "updatedAt": "2022-07-07T00:00:00+00:00"
      },
      {
          "id": 425,
          "episode_number": 5,
          "title": "Extraordinary Attorney Woo - Tập 5",
          "overview": "Young-woo điều tra vụ án cưỡng chế nhà đất, đối mặt với sự phản kháng của cư dân địa phương.",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=9SdYFYflVbw",
          "release_date": "2022-07-13",
          "seasonId": 151,
          "createdAt": "2022-07-13T00:00:00+00:00",
          "updatedAt": "2022-07-13T00:00:00+00:00"
      },
      {
          "id": 426,
          "episode_number": 6,
          "title": "Extraordinary Attorney Woo - Tập 6",
          "overview": "Một vụ án về thừa kế hé lộ những góc khuất tình cảm gia đình khiến Young-woo xúc động.",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=9SdYFYflVbw",
          "release_date": "2022-07-14",
          "seasonId": 151,
          "createdAt": "2022-07-14T00:00:00+00:00",
          "updatedAt": "2022-07-14T00:00:00+00:00"
      },
      {
          "id": 427,
          "episode_number": 7,
          "title": "Extraordinary Attorney Woo - Tập 7",
          "overview": "Young-woo bị cuốn vào cuộc chiến thương hiệu giữa hai công ty mì gói và những mối quan hệ rạn nứt.",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=9SdYFYflVbw",
          "release_date": "2022-07-20",
          "seasonId": 151,
          "createdAt": "2022-07-20T00:00:00+00:00",
          "updatedAt": "2022-07-20T00:00:00+00:00"
      },
      {
          "id": 428,
          "episode_number": 8,
          "title": "Extraordinary Attorney Woo - Tập 8",
          "overview": "Tình yêu chớm nở giữa Young-woo và Jun-ho bị thử thách bởi khoảng cách và khác biệt.",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=9SdYFYflVbw",
          "release_date": "2022-07-21",
          "seasonId": 151,
          "createdAt": "2022-07-21T00:00:00+00:00",
          "updatedAt": "2022-07-21T00:00:00+00:00"
      },
      {
          "id": 429,
          "episode_number": 9,
          "title": "Extraordinary Attorney Woo - Tập 9",
          "overview": "Một vụ kiện tranh chấp quyền nuôi con đưa Young-woo vào những tình huống cảm xúc đầy phức tạp.",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=9SdYFYflVbw",
          "release_date": "2022-07-27",
          "seasonId": 151,
          "createdAt": "2022-07-27T00:00:00+00:00",
          "updatedAt": "2022-07-27T00:00:00+00:00"
      },
      {
          "id": 430,
          "episode_number": 10,
          "title": "Extraordinary Attorney Woo - Tập 10",
          "overview": "Young-woo khám phá một vụ án liên quan đến tín ngưỡng và tự do tôn giáo gây tranh cãi.",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=9SdYFYflVbw",
          "release_date": "2022-07-28",
          "seasonId": 151,
          "createdAt": "2022-07-28T00:00:00+00:00",
          "updatedAt": "2022-07-28T00:00:00+00:00"
      },
      {
          "id": 431,
          "episode_number": 11,
          "title": "Extraordinary Attorney Woo - Tập 11",
          "overview": "Mâu thuẫn giữa cá nhân và công việc khiến Young-woo đứng trước một lựa chọn lớn.",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=9SdYFYflVbw",
          "release_date": "2022-08-03",
          "seasonId": 151,
          "createdAt": "2022-08-03T00:00:00+00:00",
          "updatedAt": "2022-08-03T00:00:00+00:00"
      },
      {
          "id": 432,
          "episode_number": 12,
          "title": "Extraordinary Attorney Woo - Tập 12",
          "overview": "Căng thẳng leo thang khi Young-woo đối đầu với những người thân cận nhất tại công ty.",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=9SdYFYflVbw",
          "release_date": "2022-08-04",
          "seasonId": 151,
          "createdAt": "2022-08-04T00:00:00+00:00",
          "updatedAt": "2022-08-04T00:00:00+00:00"
      },
      {
          "id": 433,
          "episode_number": 13,
          "title": "Extraordinary Attorney Woo - Tập 13",
          "overview": "Young-woo nhận ra ý nghĩa thật sự của nghề luật sư khi gặp một thân chủ đặc biệt.",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=9SdYFYflVbw",
          "release_date": "2022-08-10",
          "seasonId": 151,
          "createdAt": "2022-08-10T00:00:00+00:00",
          "updatedAt": "2022-08-10T00:00:00+00:00"
      },
      {
          "id": 434,
          "episode_number": 14,
          "title": "Extraordinary Attorney Woo - Tập 14",
          "overview": "Tình cảm của Young-woo bị thử thách khi cô phải chọn giữa tình yêu và sự nghiệp.",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=9SdYFYflVbw",
          "release_date": "2022-08-11",
          "seasonId": 151,
          "createdAt": "2022-08-11T00:00:00+00:00",
          "updatedAt": "2022-08-11T00:00:00+00:00"
      },
      {
          "id": 435,
          "episode_number": 15,
          "title": "Extraordinary Attorney Woo - Tập 15",
          "overview": "Sự thật bị che giấu trong một vụ án khiến Young-woo đứng trước ngã rẽ lớn.",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=9SdYFYflVbw",
          "release_date": "2022-08-17",
          "seasonId": 151,
          "createdAt": "2022-08-17T00:00:00+00:00",
          "updatedAt": "2022-08-17T00:00:00+00:00"
      },
      {
          "id": 436,
          "episode_number": 16,
          "title": "Extraordinary Attorney Woo - Tập 16",
          "overview": "Tập cuối đầy cảm xúc, Young-woo tìm được chính mình và khẳng định con đường tương lai.",
          "runtime": 75,
          "video_url": "https://www.youtube.com/watch?v=9SdYFYflVbw",
          "release_date": "2022-08-18",
          "seasonId": 151,
          "createdAt": "2022-08-18T00:00:00+00:00",
          "updatedAt": "2022-08-18T00:00:00+00:00"
      },
      {
          "id": 437,
          "episode_number": 1,
          "title": "See You in My 19th Life - Tập 1",
          "overview": "Ji-eum – cô gái có ký ức từ kiếp trước, quyết định tìm lại người mình yêu ở kiếp thứ 18.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=3yUYh-Rbysk",
          "release_date": "2023-06-17",
          "seasonId": 152,
          "createdAt": "2023-06-17T00:00:00+00:00",
          "updatedAt": "2023-06-17T00:00:00+00:00"
      },
      {
          "id": 438,
          "episode_number": 2,
          "title": "See You in My 19th Life - Tập 2",
          "overview": "Ji-eum tiếp cận Seo-ha và gợi lại những ký ức đã bị lãng quên trong anh.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=3yUYh-Rbysk",
          "release_date": "2023-06-18",
          "seasonId": 152,
          "createdAt": "2023-06-18T00:00:00+00:00",
          "updatedAt": "2023-06-18T00:00:00+00:00"
      },
      {
          "id": 439,
          "episode_number": 3,
          "title": "See You in My 19th Life - Tập 3",
          "overview": "Mối quan hệ giữa Ji-eum và Seo-ha tiến triển, nhưng sự thật về kiếp trước dần hé lộ.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=3yUYh-Rbysk",
          "release_date": "2023-06-24",
          "seasonId": 152,
          "createdAt": "2023-06-24T00:00:00+00:00",
          "updatedAt": "2023-06-24T00:00:00+00:00"
      },
      {
          "id": 440,
          "episode_number": 4,
          "title": "See You in My 19th Life - Tập 4",
          "overview": "Ji-eum bắt đầu bị tổn thương bởi việc sống lại quá khứ, khiến Seo-ha càng bối rối.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=3yUYh-Rbysk",
          "release_date": "2023-06-25",
          "seasonId": 152,
          "createdAt": "2023-06-25T00:00:00+00:00",
          "updatedAt": "2023-06-25T00:00:00+00:00"
      },
      {
          "id": 441,
          "episode_number": 5,
          "title": "See You in My 19th Life - Tập 5",
          "overview": "Một nhân vật từ kiếp sống trước bất ngờ xuất hiện khiến Ji-eum lưỡng lự về tương lai.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=3yUYh-Rbysk",
          "release_date": "2023-07-01",
          "seasonId": 152,
          "createdAt": "2023-07-01T00:00:00+00:00",
          "updatedAt": "2023-07-01T00:00:00+00:00"
      },
      {
          "id": 442,
          "episode_number": 6,
          "title": "See You in My 19th Life - Tập 6",
          "overview": "Seo-ha bắt đầu nghi ngờ Ji-eum không giống người bình thường, khiến quan hệ trở nên căng thẳng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=3yUYh-Rbysk",
          "release_date": "2023-07-02",
          "seasonId": 152,
          "createdAt": "2023-07-02T00:00:00+00:00",
          "updatedAt": "2023-07-02T00:00:00+00:00"
      },
      {
          "id": 443,
          "episode_number": 7,
          "title": "See You in My 19th Life - Tập 7",
          "overview": "Bí mật về vụ tai nạn ở kiếp trước dần được hé lộ, dẫn đến những biến cố bất ngờ.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=3yUYh-Rbysk",
          "release_date": "2023-07-08",
          "seasonId": 152,
          "createdAt": "2023-07-08T00:00:00+00:00",
          "updatedAt": "2023-07-08T00:00:00+00:00"
      },
      {
          "id": 444,
          "episode_number": 8,
          "title": "See You in My 19th Life - Tập 8",
          "overview": "Seo-ha biết được sự thật về Ji-eum và phải đối mặt với sự hoang mang trong lòng.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=3yUYh-Rbysk",
          "release_date": "2023-07-09",
          "seasonId": 152,
          "createdAt": "2023-07-09T00:00:00+00:00",
          "updatedAt": "2023-07-09T00:00:00+00:00"
      },
      {
          "id": 445,
          "episode_number": 9,
          "title": "See You in My 19th Life - Tập 9",
          "overview": "Cả hai bắt đầu đối mặt với cảm xúc thật sự và chấp nhận sự khác biệt giữa họ.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=3yUYh-Rbysk",
          "release_date": "2023-07-15",
          "seasonId": 152,
          "createdAt": "2023-07-15T00:00:00+00:00",
          "updatedAt": "2023-07-15T00:00:00+00:00"
      },
      {
          "id": 446,
          "episode_number": 10,
          "title": "See You in My 19th Life - Tập 10",
          "overview": "Ji-eum quyết định kể hết sự thật về những kiếp sống trước cho Seo-ha.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=3yUYh-Rbysk",
          "release_date": "2023-07-16",
          "seasonId": 152,
          "createdAt": "2023-07-16T00:00:00+00:00",
          "updatedAt": "2023-07-16T00:00:00+00:00"
      },
      {
          "id": 447,
          "episode_number": 11,
          "title": "See You in My 19th Life - Tập 11",
          "overview": "Một thử thách mới ập đến khiến Ji-eum phải lựa chọn giữa tình yêu và định mệnh.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=3yUYh-Rbysk",
          "release_date": "2023-07-22",
          "seasonId": 152,
          "createdAt": "2023-07-22T00:00:00+00:00",
          "updatedAt": "2023-07-22T00:00:00+00:00"
      },
      {
          "id": 448,
          "episode_number": 12,
          "title": "See You in My 19th Life - Tập 12",
          "overview": "Tình cảm của Ji-eum và Seo-ha đứng trước nguy cơ tan vỡ bởi sự thật tàn nhẫn.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=3yUYh-Rbysk",
          "release_date": "2023-07-23",
          "seasonId": 152,
          "createdAt": "2023-07-23T00:00:00+00:00",
          "updatedAt": "2023-07-23T00:00:00+00:00"
      },
      {
          "id": 449,
          "episode_number": 13,
          "title": "See You in My 19th Life - Tập 13",
          "overview": "Ji-eum tìm cách giải thoát khỏi vòng luân hồi để có một cuộc sống bình thường.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=3yUYh-Rbysk",
          "release_date": "2023-07-29",
          "seasonId": 152,
          "createdAt": "2023-07-29T00:00:00+00:00",
          "updatedAt": "2023-07-29T00:00:00+00:00"
      },
      {
          "id": 450,
          "episode_number": 14,
          "title": "See You in My 19th Life - Tập 14",
          "overview": "Quá khứ dần tan biến, Ji-eum phải đối mặt với quyết định cuối cùng về tình yêu.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=3yUYh-Rbysk",
          "release_date": "2023-07-30",
          "seasonId": 152,
          "createdAt": "2023-07-30T00:00:00+00:00",
          "updatedAt": "2023-07-30T00:00:00+00:00"
      },
      {
          "id": 451,
          "episode_number": 15,
          "title": "See You in My 19th Life - Tập 15",
          "overview": "Ji-eum hy sinh để bảo vệ Seo-ha và những người cô yêu quý.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=3yUYh-Rbysk",
          "release_date": "2023-08-05",
          "seasonId": 152,
          "createdAt": "2023-08-05T00:00:00+00:00",
          "updatedAt": "2023-08-05T00:00:00+00:00"
      },
      {
          "id": 452,
          "episode_number": 16,
          "title": "See You in My 19th Life - Tập 16",
          "overview": "Tập cuối xúc động khi Ji-eum học cách sống trọn vẹn cho kiếp sống hiện tại.",
          "runtime": 65,
          "video_url": "https://www.youtube.com/watch?v=3yUYh-Rbysk",
          "release_date": "2023-08-06",
          "seasonId": 152,
          "createdAt": "2023-08-06T00:00:00+00:00",
          "updatedAt": "2023-08-06T00:00:00+00:00"
      }
  ]);
  await queryInterface.bulkInsert('People', [
    {
      "id": 1,
      "name": "Daniel Radcliffe",
      "birthday": "1989-07-23",
      "gender": "male",
      "biography": "Daniel Radcliffe là diễn viên người Anh nổi tiếng với vai Harry Potter trong series phim cùng tên.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/0/00/Daniel_Radcliffe_2012.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 2,
      "name": "Rupert Grint",
      "birthday": "1988-08-24",
      "gender": "male",
      "biography": "Rupert Grint là diễn viên người Anh được biết đến qua vai Ron Weasley trong series Harry Potter.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Rupert_Grint_2011.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 3,
      "name": "Emma Watson",
      "birthday": "1990-04-15",
      "gender": "female",
      "biography": "Emma Watson là nữ diễn viên người Anh, nổi tiếng với vai Hermione Granger trong series phim Harry Potter.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Emma_Watson_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 4,
      "name": "Richard Harris",
      "birthday": "1930-10-01",
      "gender": "male",
      "biography": "Richard Harris là diễn viên và nhà soạn nhạc người Ireland, nổi tiếng với vai Albus Dumbledore trong hai phần đầu của Harry Potter.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Richard_Harris_1973.JPG",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 5,
      "name": "Maggie Smith",
      "birthday": "1934-12-28",
      "gender": "female",
      "biography": "Maggie Smith là nữ diễn viên người Anh nổi tiếng với vai Minerva McGonagall trong loạt phim Harry Potter.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/0/02/Maggie_Smith_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 6,
      "name": "Chris Columbus",
      "birthday": "1958-09-10",
      "gender": "male",
      "biography": "Chris Columbus là đạo diễn, nhà sản xuất phim người Mỹ, nổi tiếng với vai trò đạo diễn bộ phim Harry Potter và Hòn đá Phù thủy.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Chris_Columbus_Cannes_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 7,
      "name": "Kenneth Branagh",
      "birthday": "1960-12-10",
      "gender": "male",
      "biography": "Kenneth Branagh là diễn viên và đạo diễn người Bắc Ireland, nổi bật trong vai Gilderoy Lockhart trong Harry Potter và Phòng chứa Bí mật.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Kenneth_Branagh_2011_Shankbone_2.JPG",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 8,
      "name": "Jason Isaacs",
      "birthday": "1963-06-06",
      "gender": "male",
      "biography": "Jason Isaacs là diễn viên người Anh, nổi tiếng với vai Lucius Malfoy trong series Harry Potter.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Jason_Isaacs_2011.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 9,
      "name": "Alfonso Cuarón",
      "birthday": "1961-11-28",
      "gender": "male",
      "biography": "Alfonso Cuarón là đạo diễn, nhà biên kịch người Mexico, từng đạo diễn Harry Potter và Tên tù Azkaban.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Alfonso_Cuaron_2009.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 10,
      "name": "Ralph Fiennes",
      "birthday": "1962-12-22",
      "gender": "male",
      "biography": "Ralph Fiennes là diễn viên người Anh nổi tiếng với vai Voldemort trong loạt phim Harry Potter.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Ralph_Fiennes_by_Gage_Skidmore.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 11,
      "name": "Brendan Gleeson",
      "birthday": "1955-03-29",
      "gender": "male",
      "biography": "Brendan Gleeson là diễn viên người Ireland, từng đóng vai Mad-Eye Moody trong series Harry Potter.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Brendan_Gleeson_2012.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 12,
      "name": "Mike Newell",
      "birthday": "1942-03-28",
      "gender": "male",
      "biography": "Mike Newell là đạo diễn người Anh, nổi tiếng với bộ phim Harry Potter và Chiếc cốc lửa.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mike_Newell_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 13,
      "name": "Imelda Staunton",
      "birthday": "1956-01-09",
      "gender": "female",
      "biography": "Imelda Staunton là nữ diễn viên người Anh, nổi tiếng với vai Dolores Umbridge trong loạt phim Harry Potter.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Imelda_Staunton_at_the_National_Treasure_Premiere_2004.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 14,
      "name": "Helena Bonham Carter",
      "birthday": "1966-05-26",
      "gender": "female",
      "biography": "Helena Bonham Carter là nữ diễn viên người Anh, nổi tiếng với vai Bellatrix Lestrange trong Harry Potter.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/6/68/Helena_Bonham_Carter_Cannes_2014.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 15,
      "name": "Michael Gambon",
      "birthday": "1940-10-19",
      "gender": "male",
      "biography": "Michael Gambon là diễn viên người Ireland, đóng vai Albus Dumbledore từ phần 3 đến phần cuối của Harry Potter.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Michael_Gambon_-_Montreal_-_2011-10-06.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 16,
      "name": "David Yates",
      "birthday": "1963-10-08",
      "gender": "male",
      "biography": "David Yates là đạo diễn người Anh, nổi tiếng với việc đạo diễn nhiều phần phim Harry Potter cuối cùng.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/3/37/David_Yates_by_Gage_Skidmore.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 17,
      "name": "Tobey Maguire",
      "birthday": "1975-06-27",
      "gender": "male",
      "biography": "Tobey Maguire là diễn viên người Mỹ, nổi tiếng với vai Peter Parker/Spider-Man trong loạt phim Spider-Man đầu tiên.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Tobey_Maguire_2011.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 18,
      "name": "Kirsten Dunst",
      "birthday": "1982-04-30",
      "gender": "female",
      "biography": "Kirsten Dunst là nữ diễn viên người Mỹ, nổi tiếng với vai Mary Jane Watson trong loạt phim Spider-Man.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/1/12/Kirsten_Dunst_2011.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 19,
      "name": "Willem Dafoe",
      "birthday": "1955-07-22",
      "gender": "male",
      "biography": "Willem Dafoe là diễn viên người Mỹ, được biết đến với vai Green Goblin trong Spider-Man.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/79/Willem_Dafoe_2017.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 20,
      "name": "James Franco",
      "birthday": "1978-04-19",
      "gender": "male",
      "biography": "James Franco là diễn viên người Mỹ, đóng vai Harry Osborn trong loạt phim Spider-Man.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/75/James_Franco_2012_Shankbone_2.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 21,
      "name": "Sam Raimi",
      "birthday": "1959-10-23",
      "gender": "male",
      "biography": "Sam Raimi là đạo diễn người Mỹ, nổi tiếng với việc đạo diễn bộ ba phim Spider-Man đầu tiên.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/92/Sam_Raimi_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 22,
      "name": "Hugh Jackman",
      "birthday": "1968-10-12",
      "gender": "male",
      "biography": "Hugh Jackman là diễn viên người Úc, nổi tiếng với vai Wolverine trong loạt phim X-Men.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/1/19/Hugh_Jackman_2011.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 23,
      "name": "Patrick Stewart",
      "birthday": "1940-07-13",
      "gender": "male",
      "biography": "Patrick Stewart là diễn viên người Anh, nổi tiếng với vai Giáo sư X trong loạt phim X-Men.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Patrick_Stewart_by_Gage_Skidmore_2.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 24,
      "name": "Ian McKellen",
      "birthday": "1939-05-25",
      "gender": "male",
      "biography": "Ian McKellen là diễn viên người Anh, nổi tiếng với vai Magneto trong loạt phim X-Men và Gandalf trong Chúa tể những chiếc nhẫn.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/79/Sir_Ian_McKellen_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 25,
      "name": "Halle Berry",
      "birthday": "1966-08-14",
      "gender": "female",
      "biography": "Halle Berry là nữ diễn viên người Mỹ, từng đóng vai Storm trong loạt phim X-Men.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/99/Halle_Berry_2007.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 26,
      "name": "Famke Janssen",
      "birthday": "1964-11-05",
      "gender": "female",
      "biography": "Famke Janssen là nữ diễn viên người Hà Lan, nổi tiếng với vai Jean Grey trong loạt phim X-Men.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/1/19/Famke_Janssen_2011.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 27,
      "name": "Bryan Singer",
      "birthday": "1965-09-17",
      "gender": "male",
      "biography": "Bryan Singer là đạo diễn, nhà sản xuất phim người Mỹ, nổi tiếng với việc đạo diễn các phần đầu của series X-Men.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Bryan_Singer_2006.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 28,
      "name": "Brett Ratner",
      "birthday": "1969-03-28",
      "gender": "male",
      "biography": "Brett Ratner là đạo diễn người Mỹ, nổi tiếng với việc đạo diễn X-Men: The Last Stand.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/97/Brett_Ratner_2009.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 29,
      "name": "Gavin Hood",
      "birthday": "1963-09-12",
      "gender": "male",
      "biography": "Gavin Hood là đạo diễn, biên kịch người Nam Phi, nổi tiếng với X-Men Origins: Wolverine.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Gavin_Hood_2008.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 30,
      "name": "Elijah Wood",
      "birthday": "1981-01-28",
      "gender": "male",
      "biography": "Elijah Wood là diễn viên người Mỹ, nổi tiếng với vai Frodo trong loạt phim The Lord of the Rings.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Elijah_Wood_2014_%28cropped%29.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 31,
      "name": "Ian McKellen",
      "birthday": "1939-05-25",
      "gender": "male",
      "biography": "Ian McKellen là diễn viên người Anh, nổi tiếng với vai Gandalf trong Chúa tể những chiếc nhẫn và Magneto trong loạt phim X-Men.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/79/Sir_Ian_McKellen_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 32,
      "name": "Viggo Mortensen",
      "birthday": "1958-10-20",
      "gender": "male",
      "biography": "Viggo Mortensen là diễn viên người Mỹ gốc Đan Mạch, nổi tiếng với vai Aragorn trong loạt phim Chúa tể những chiếc nhẫn.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Viggo_Mortensen_-_2014.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 33,
      "name": "Sean Astin",
      "birthday": "1971-02-25",
      "gender": "male",
      "biography": "Sean Astin là diễn viên người Mỹ, nổi tiếng với vai Samwise Gamgee trong loạt phim Chúa tể những chiếc nhẫn.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Sean_Astin_2019_%28cropped%29.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 34,
      "name": "Orlando Bloom",
      "birthday": "1977-01-13",
      "gender": "male",
      "biography": "Orlando Bloom là diễn viên người Anh, nổi tiếng với vai Legolas trong loạt phim Chúa tể những chiếc nhẫn và Will Turner trong Pirates of the Caribbean.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/8/80/Orlando_Bloom_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 35,
      "name": "Peter Jackson",
      "birthday": "1961-10-31",
      "gender": "male",
      "biography": "Peter Jackson là đạo diễn, nhà sản xuất phim người New Zealand, nổi tiếng với việc đạo diễn loạt phim Chúa tể những chiếc nhẫn.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Peter_Jackson_by_Gage_Skidmore.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 36,
      "name": "Johnny Depp",
      "birthday": "1963-06-09",
      "gender": "male",
      "biography": "Johnny Depp là diễn viên người Mỹ, nổi tiếng với vai Jack Sparrow trong loạt phim Cướp biển vùng Caribbean.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/3/30/Johnny_Depp_2018.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 37,
      "name": "Keira Knightley",
      "birthday": "1985-03-26",
      "gender": "female",
      "biography": "Keira Knightley là nữ diễn viên người Anh, nổi tiếng với vai Elizabeth Swann trong loạt phim Cướp biển vùng Caribbean.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/92/Keira_Knightley_2017.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 38,
      "name": "Geoffrey Rush",
      "birthday": "1951-07-06",
      "gender": "male",
      "biography": "Geoffrey Rush là diễn viên người Úc, từng đoạt giải Oscar, nổi tiếng với vai Barbossa trong loạt phim Cướp biển vùng Caribbean.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Geoffrey_Rush_2011.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 39,
      "name": "Bill Nighy",
      "birthday": "1949-12-12",
      "gender": "male",
      "biography": "Bill Nighy là diễn viên người Anh, nổi tiếng với nhiều vai diễn đa dạng trong điện ảnh và truyền hình.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/5/58/Bill_Nighy_2009.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 40,
      "name": "Matt Damon",
      "birthday": "1970-10-08",
      "gender": "male",
      "biography": "Matt Damon là diễn viên, nhà biên kịch và nhà sản xuất người Mỹ, nổi tiếng với vai Jason Bourne trong loạt phim Bourne.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/0/04/Matt_Damon_2015.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 41,
      "name": "Franka Potente",
      "birthday": "1974-07-22",
      "gender": "female",
      "biography": "Franka Potente là nữ diễn viên người Đức, nổi tiếng với vai Marie trong bộ phim The Bourne Identity.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Franka_Potente_2011.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 42,
      "name": "Chris Cooper",
      "birthday": "1951-07-09",
      "gender": "male",
      "biography": "Chris Cooper là diễn viên người Mỹ, từng đoạt giải Oscar cho vai phụ, đóng trong loạt phim Bourne.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Chris_Cooper_2009.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 43,
      "name": "Clive Owen",
      "birthday": "1964-10-03",
      "gender": "male",
      "biography": "Clive Owen là diễn viên người Anh, nổi tiếng với vai chính trong The Bourne Identity và nhiều phim hành động khác.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Clive_Owen_2014.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 44,
      "name": "Doug Liman",
      "birthday": "1965-07-24",
      "gender": "male",
      "biography": "Doug Liman là đạo diễn người Mỹ, nổi tiếng với bộ phim The Bourne Identity.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Doug_Liman_2009.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 45,
      "name": "Fraser James",
      "birthday": "1962-09-15",
      "gender": "male",
      "biography": "Fraser James là diễn viên người Anh, từng đóng các vai phụ trong nhiều bộ phim nổi tiếng.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Fraser_James.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 46,
      "name": "Mike Myers",
      "birthday": "1963-05-25",
      "gender": "male",
      "biography": "Mike Myers là diễn viên hài và diễn viên người Canada, nổi tiếng với vai Shrek trong loạt phim Shrek.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Mike_Myers_2012_Shankbone_2.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 47,
      "name": "Eddie Murphy",
      "birthday": "1961-04-03",
      "gender": "male",
      "biography": "Eddie Murphy là diễn viên hài và diễn viên người Mỹ, lồng tiếng cho nhân vật Donkey trong loạt phim Shrek.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Eddie_Murphy_2012_Shankbone_2.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 48,
      "name": "Cameron Diaz",
      "birthday": "1972-08-30",
      "gender": "female",
      "biography": "Cameron Diaz là nữ diễn viên người Mỹ, lồng tiếng cho nhân vật Fiona trong loạt phim Shrek.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/1/11/Cameron_Diaz_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 49,
      "name": "Chris Farley",
      "birthday": "1964-02-15",
      "gender": "male",
      "biography": "Chris Farley là diễn viên hài người Mỹ, tham gia trong nhiều dự án điện ảnh hài hước.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Chris_Farley_SNL_1992.JPG",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 50,
      "name": "Steven Spielberg",
      "birthday": "1946-12-18",
      "gender": "male",
      "biography": "Steven Spielberg là đạo diễn và nhà sản xuất phim huyền thoại người Mỹ, đã đạo diễn nhiều bộ phim kinh điển của Hollywood.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/4/44/Steven_Spielberg_Cannes_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 51,
      "name": "Julie Andrews",
      "birthday": "1935-10-01",
      "gender": "female",
      "biography": "Julie Andrews là nữ diễn viên, ca sĩ người Anh, nổi tiếng với các vai diễn kinh điển và là người lồng tiếng cho Nữ hoàng Lillian trong loạt phim Shrek.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Julie_Andrews_2011.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 52,
      "name": "Antonio Banderas",
      "birthday": "1960-08-10",
      "gender": "male",
      "biography": "Antonio Banderas là diễn viên người Tây Ban Nha, nổi tiếng với vai lồng tiếng cho nhân vật Puss in Boots trong loạt phim Shrek.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Antonio_Banderas_2012.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 53,
      "name": "Ramon Tikaram",
      "birthday": "1967-05-16",
      "gender": "male",
      "biography": "Ramon Tikaram là diễn viên và ca sĩ người Anh, từng tham gia lồng tiếng trong nhiều phim hoạt hình, bao gồm Shrek the Third.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Ramon_Tikaram.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 54,
      "name": "Rupert Everett",
      "birthday": "1959-05-29",
      "gender": "male",
      "biography": "Rupert Everett là diễn viên người Anh, lồng tiếng cho Prince Charming trong loạt phim Shrek.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Rupert_Everett_2004.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 55,
      "name": "Simon J. Smith",
      "birthday": "1965-03-12",
      "gender": "male",
      "biography": "Simon J. Smith là đạo diễn người Anh, đồng đạo diễn một số phần phim trong loạt Shrek.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Simon_J_Smith.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 56,
      "name": "Michael Bay",
      "birthday": "1965-02-17",
      "gender": "male",
      "biography": "Michael Bay là đạo diễn người Mỹ, nổi tiếng với loạt phim hành động bom tấn Transformers.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/d/df/Michael_Bay_2013_Comic_Con_%28cropped%29.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 57,
      "name": "Shia LaBeouf",
      "birthday": "1986-06-11",
      "gender": "male",
      "biography": "Shia LaBeouf là diễn viên người Mỹ, nổi tiếng với vai Sam Witwicky trong loạt phim Transformers.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Shia_LaBeouf_2014.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 58,
      "name": "Megan Fox",
      "birthday": "1986-05-16",
      "gender": "female",
      "biography": "Megan Fox là nữ diễn viên người Mỹ, nổi tiếng với vai Mikaela Banes trong loạt phim Transformers.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/3/38/Megan_Fox_2014.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 59,
      "name": "Josh Duhamel",
      "birthday": "1972-11-14",
      "gender": "male",
      "biography": "Josh Duhamel là diễn viên người Mỹ, tham gia loạt phim Transformers với vai William Lennox.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Josh_Duhamel_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 60,
      "name": "Tyrese Gibson",
      "birthday": "1978-12-30",
      "gender": "male",
      "biography": "Tyrese Gibson là ca sĩ kiêm diễn viên người Mỹ, nổi tiếng với vai Robert Epps trong loạt phim Transformers.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/4/46/Tyrese_Gibson_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 61,
      "name": "John Turturro",
      "birthday": "1957-02-28",
      "gender": "male",
      "biography": "John Turturro là diễn viên người Mỹ, vào vai Seymour Simmons trong loạt phim Transformers.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/a/a3/John_Turturro_2010.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 62,
      "name": "Peter Cullen",
      "birthday": "1941-07-28",
      "gender": "male",
      "biography": "Peter Cullen là diễn viên lồng tiếng kỳ cựu người Canada, nổi tiếng với giọng nói của Optimus Prime trong loạt phim Transformers.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Peter_Cullen_2011.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 63,
      "name": "Christian Bale",
      "birthday": "1974-01-30",
      "gender": "male",
      "biography": "Christian Bale là diễn viên người Anh, nổi tiếng với vai Batman trong The Dark Knight Trilogy.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/8/88/Christian_Bale_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 64,
      "name": "Michael Caine",
      "birthday": "1933-03-14",
      "gender": "male",
      "biography": "Michael Caine là diễn viên huyền thoại người Anh, vào vai Alfred Pennyworth trong The Dark Knight Trilogy.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Michael_Caine_2015.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 65,
      "name": "Gary Oldman",
      "birthday": "1958-03-21",
      "gender": "male",
      "biography": "Gary Oldman là diễn viên người Anh, đóng vai James Gordon trong The Dark Knight Trilogy và Sirius Black trong Harry Potter.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Gary_Oldman_Cannes_2018.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 66,
      "name": "Cillian Murphy",
      "birthday": "1976-05-25",
      "gender": "male",
      "biography": "Cillian Murphy là diễn viên người Ireland, vào vai Scarecrow trong The Dark Knight Trilogy.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Cillian_Murphy_2014.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 67,
      "name": "Christopher Nolan",
      "birthday": "1970-07-30",
      "gender": "male",
      "biography": "Christopher Nolan là đạo diễn người Anh, nổi tiếng với việc đạo diễn The Dark Knight Trilogy và nhiều bộ phim xuất sắc khác.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Christopher_Nolan_Cannes_2018.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 68,
      "name": "Robert Downey Jr.",
      "birthday": "1965-04-04",
      "gender": "male",
      "biography": "Robert Downey Jr. là diễn viên người Mỹ, nổi tiếng với vai Tony Stark / Iron Man trong Vũ trụ điện ảnh Marvel.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 69,
      "name": "Gwyneth Paltrow",
      "birthday": "1972-09-27",
      "gender": "female",
      "biography": "Gwyneth Paltrow là nữ diễn viên người Mỹ, vào vai Pepper Potts trong loạt phim Iron Man và MCU.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/75/Gwyneth_Paltrow_Berlin_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 70,
      "name": "Jeff Bridges",
      "birthday": "1949-12-04",
      "gender": "male",
      "biography": "Jeff Bridges là diễn viên kỳ cựu người Mỹ, vào vai Obadiah Stane trong Iron Man (2008).",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Jeff_Bridges_2014_Comic_Con.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 71,
      "name": "Jon Favreau",
      "birthday": "1966-10-19",
      "gender": "male",
      "biography": "Jon Favreau là đạo diễn và diễn viên người Mỹ, đạo diễn hai phần đầu Iron Man và vào vai Happy Hogan trong MCU.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Jon_Favreau_2018.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 72,
      "name": "Don Cheadle",
      "birthday": "1964-11-29",
      "gender": "male",
      "biography": "Don Cheadle là diễn viên người Mỹ, vào vai James Rhodes / War Machine trong loạt phim MCU.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Don_Cheadle_2011.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 73,
      "name": "Sam Rockwell",
      "birthday": "1968-11-05",
      "gender": "male",
      "biography": "Sam Rockwell là diễn viên người Mỹ, vào vai Justin Hammer trong Iron Man 2.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/71/Sam_Rockwell_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 74,
      "name": "Mickey Rourke",
      "birthday": "1952-09-16",
      "gender": "male",
      "biography": "Mickey Rourke là diễn viên người Mỹ, vào vai phản diện Ivan Vanko / Whiplash trong Iron Man 2.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Mickey_Rourke_2009.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 75,
      "name": "Scarlett Johansson",
      "birthday": "1984-11-22",
      "gender": "female",
      "biography": "Scarlett Johansson là nữ diễn viên người Mỹ, nổi tiếng với vai Natasha Romanoff / Black Widow trong MCU.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/71/Scarlett_Johansson_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 76,
      "name": "Justin Theroux",
      "birthday": "1971-08-10",
      "gender": "male",
      "biography": "Justin Theroux là diễn viên và biên kịch người Mỹ, đồng biên kịch cho Iron Man 2.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Justin_Theroux_2011.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 77,
      "name": "Leslie Bibb",
      "birthday": "1974-11-17",
      "gender": "female",
      "biography": "Leslie Bibb là nữ diễn viên người Mỹ, vào vai nhà báo Christine Everhart trong Iron Man và MCU.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Leslie_Bibb_2011.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 78,
      "name": "Paul Bettany",
      "birthday": "1971-05-27",
      "gender": "male",
      "biography": "Paul Bettany là diễn viên người Anh, ban đầu lồng tiếng JARVIS trong Iron Man và sau trở thành Vision trong MCU.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Paul_Bettany_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 79,
      "name": "Clark Gregg",
      "birthday": "1962-04-02",
      "gender": "male",
      "biography": "Clark Gregg là diễn viên người Mỹ, vào vai đặc vụ Phil Coulson trong nhiều phim thuộc MCU.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Clark_Gregg_2014_Comic_Con.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 80,
      "name": "Samuel L. Jackson",
      "birthday": "1948-12-21",
      "gender": "male",
      "biography": "Samuel L. Jackson là diễn viên người Mỹ, vào vai Nick Fury trong vũ trụ điện ảnh Marvel.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/1/10/Samuel_L_Jackson_SDCC_2014.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 81,
      "name": "Choi Min-sik",
      "birthday": "1962-05-30",
      "gender": "male",
      "biography": "Choi Min-sik là diễn viên gạo cội của Hàn Quốc, nổi tiếng với vai diễn trong phim Oldboy.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/3/33/Choi_Min-sik_in_2015.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 82,
      "name": "Song Kang-ho",
      "birthday": "1967-01-17",
      "gender": "male",
      "biography": "Song Kang-ho là diễn viên hàng đầu của điện ảnh Hàn Quốc, tham gia nhiều tác phẩm nổi bật như Memories of Murder và The Host.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Song_Kang-ho_in_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 83,
      "name": "Kim Sang-kyung",
      "birthday": "1972-06-01",
      "gender": "male",
      "biography": "Kim Sang-kyung là diễn viên người Hàn Quốc, nổi bật trong phim Memories of Murder.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Kim_Sang-kyung_in_2018.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 84,
      "name": "Bong Joon-ho",
      "birthday": "1969-09-14",
      "gender": "male",
      "biography": "Bong Joon-ho là đạo diễn nổi tiếng người Hàn Quốc, tác giả của nhiều phim đình đám như Memories of Murder và The Host.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Bong_Joon-ho_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 85,
      "name": "Jeon Do-yeon",
      "birthday": "1973-02-11",
      "gender": "female",
      "biography": "Jeon Do-yeon là nữ diễn viên nổi tiếng của Hàn Quốc, được quốc tế biết đến qua phim Secret Sunshine.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Jeon_Do-yeon_Berlinale_2023.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 86,
      "name": "Sol Kyung-gu",
      "birthday": "1968-05-01",
      "gender": "male",
      "biography": "Sol Kyung-gu là diễn viên Hàn Quốc, xuất hiện trong nhiều phim kinh điển như Oasis và Public Enemy.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Sol_Kyung-gu_in_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 87,
      "name": "Lee Chang-dong",
      "birthday": "1954-07-04",
      "gender": "male",
      "biography": "Lee Chang-dong là đạo diễn, nhà văn, cựu Bộ trưởng Văn hóa của Hàn Quốc, tác giả phim Secret Sunshine.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Lee_Chang-dong.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 88,
      "name": "Tadanobu Asano",
      "birthday": "1973-11-27",
      "gender": "male",
      "biography": "Tadanobu Asano là diễn viên Nhật Bản, nổi bật trong các phim như Ichi the Killer và Mongol.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/24/Tadanobu_Asano_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 89,
      "name": "Ryuhei Matsuda",
      "birthday": "1983-05-09",
      "gender": "male",
      "biography": "Ryuhei Matsuda là diễn viên người Nhật Bản, được biết đến qua phim Taboo, Blue Spring, và Nana.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Ryuhei_Matsuda_2015.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 90,
      "name": "Takeshi Kitano",
      "birthday": "1947-01-18",
      "gender": "male",
      "biography": "Takeshi Kitano là đạo diễn, diễn viên, và danh hài nổi tiếng của Nhật Bản, tác giả các phim như Hana-bi, Kikujiro.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Takeshi_Kitano_2000.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 91,
      "name": "Rinko Kikuchi",
      "birthday": "1981-01-06",
      "gender": "female",
      "biography": "Rinko Kikuchi là nữ diễn viên người Nhật, được quốc tế biết đến qua vai diễn trong phim Babel và Pacific Rim.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Rinko_Kikuchi_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 92,
      "name": "Joe Odagiri",
      "birthday": "1976-02-16",
      "gender": "male",
      "biography": "Joe Odagiri là nam diễn viên Nhật Bản nổi tiếng với phong cách độc đáo và từng tham gia nhiều phim nghệ thuật.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/3/30/Joe_Odagiri_2011.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 93,
      "name": "Hirokazu Kore-eda",
      "birthday": "1962-06-06",
      "gender": "male",
      "biography": "Hirokazu Kore-eda là đạo diễn bậc thầy của điện ảnh Nhật Bản, nổi tiếng với các tác phẩm nhân văn như Nobody Knows, Still Walking và Shoplifters.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Hirokazu_Koreeda_2015.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 94,
      "name": "Miyazaki Hayao",
      "birthday": "1941-01-05",
      "gender": "male",
      "biography": "Miyazaki Hayao là đạo diễn hoạt hình huyền thoại của Nhật Bản, sáng lập Studio Ghibli và tạo ra nhiều kiệt tác như Howl’s Moving Castle.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Hayao_Miyazaki.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 95,
      "name": "Chieko Baisho",
      "birthday": "1941-06-29",
      "gender": "female",
      "biography": "Chieko Baisho là diễn viên và ca sĩ người Nhật, lồng tiếng cho nhân vật chính trong phim Howl's Moving Castle của Ghibli.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Chieko_Baisho.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 96,
      "name": "Takuya Kimura",
      "birthday": "1972-11-13",
      "gender": "male",
      "biography": "Takuya Kimura là diễn viên nổi tiếng và biểu tượng văn hóa của Nhật Bản, từng tham gia Howl's Moving Castle và nhiều phim truyền hình.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Takuya_Kimura_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 97,
      "name": "Hideaki Anno",
      "birthday": "1960-05-22",
      "gender": "male",
      "biography": "Hideaki Anno là đạo diễn hoạt hình nổi tiếng, từng tham gia lồng tiếng cho nhân vật phụ trong phim Howl’s Moving Castle.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Hideaki_Anno.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 98,
      "name": "Ken Watanabe",
      "birthday": "1959-10-21",
      "gender": "male",
      "biography": "Ken Watanabe là diễn viên Nhật Bản nổi bật trong cả điện ảnh châu Á và Hollywood, được biết đến qua The Last Samurai và Inception.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/4/45/Ken_Watanabe_2015.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 99,
      "name": "Shun Oguri",
      "birthday": "1982-12-26",
      "gender": "male",
      "biography": "Shun Oguri là diễn viên nổi tiếng của Nhật Bản, góp mặt trong nhiều phim điện ảnh và truyền hình được yêu thích.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/99/Shun_Oguri_2016.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 100,
      "name": "Takashi Miike",
      "birthday": "1960-08-24",
      "gender": "male",
      "biography": "Takashi Miike là đạo diễn Nhật Bản nổi tiếng với các bộ phim đa dạng thể loại như Audition và 13 Assassins.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Takashi_Miike.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 101,
      "name": "Tatsuya Fujiwara",
      "birthday": "1982-05-15",
      "gender": "male",
      "biography": "Tatsuya Fujiwara là diễn viên người Nhật nổi tiếng qua vai chính trong phim Battle Royale và Death Note.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Tatsuya_Fujiwara_2015.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 102,
      "name": "Aki Maeda",
      "birthday": "1985-07-11",
      "gender": "female",
      "biography": "Aki Maeda là nữ diễn viên Nhật Bản, nổi bật với vai diễn trong loạt phim Battle Royale.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Aki_Maeda_2009.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 103,
      "name": "Kinji Fukasaku",
      "birthday": "1930-07-03",
      "gender": "male",
      "biography": "Kinji Fukasaku là đạo diễn huyền thoại của điện ảnh Nhật Bản, nổi tiếng với bộ phim Battle Royale.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/6/60/Kinji_Fukasaku.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 104,
      "name": "Lee Byung-hun",
      "birthday": "1970-07-12",
      "gender": "male",
      "biography": "Lee Byung-hun là diễn viên nổi tiếng của Hàn Quốc, từng góp mặt trong nhiều phim hành động và truyền hình đình đám.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Lee_Byung-hun_in_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 105,
      "name": "Song Hye-kyo",
      "birthday": "1981-11-22",
      "gender": "female",
      "biography": "Song Hye-kyo là nữ diễn viên nổi tiếng Hàn Quốc, được yêu mến qua nhiều phim truyền hình và điện ảnh.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/76/Song_Hye-kyo_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 106,
      "name": "Park Chan-wook",
      "birthday": "1963-08-23",
      "gender": "male",
      "biography": "Park Chan-wook là đạo diễn nổi tiếng của Hàn Quốc, người đứng sau nhiều tác phẩm kinh điển như Oldboy và Decision to Leave.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Park_Chan-wook_2016.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 107,
      "name": "Bae Doona",
      "birthday": "1979-10-11",
      "gender": "female",
      "biography": "Bae Doona là nữ diễn viên Hàn Quốc nổi tiếng, hoạt động cả ở Hàn và Hollywood trong các phim như Cloud Atlas và Sense8.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Bae_Doona_2015.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 108,
      "name": "Kim Ji-woon",
      "birthday": "1964-05-27",
      "gender": "male",
      "biography": "Kim Ji-woon là đạo diễn nổi tiếng Hàn Quốc với nhiều thể loại đa dạng như kinh dị, hành động và tâm lý.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Kim_Ji-woon_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 109,
      "name": "Moon So-ri",
      "birthday": "1974-07-02",
      "gender": "female",
      "biography": "Moon So-ri là nữ diễn viên kiêm đạo diễn của Hàn Quốc, nổi tiếng với các vai diễn cảm động và sâu sắc.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/6/64/Moon_So-ri_2016.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 110,
      "name": "Im Sang-soo",
      "birthday": "1962-04-27",
      "gender": "male",
      "biography": "Im Sang-soo là đạo diễn người Hàn Quốc, được biết đến với các phim chính kịch có yếu tố xã hội sâu sắc.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/8/84/Im_Sang-soo_2012.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 111,
      "name": "Song Kang-ho",
      "birthday": "1967-01-17",
      "gender": "male",
      "biography": "Song Kang-ho là nam diễn viên hàng đầu của Hàn Quốc, nổi tiếng qua các bộ phim như The Host, Snowpiercer và Parasite.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Song_Kang-ho_at_The_King_premiere.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 112,
      "name": "Kang Hye-jung",
      "birthday": "1982-01-04",
      "gender": "female",
      "biography": "Kang Hye-jung là nữ diễn viên Hàn Quốc được biết đến với vai diễn ấn tượng trong bộ phim Oldboy.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/8/86/Kang_Hye-jung_2012.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 113,
      "name": "Choi Min-sik",
      "birthday": "1962-01-22",
      "gender": "male",
      "biography": "Choi Min-sik là diễn viên gạo cội của điện ảnh Hàn Quốc, nổi bật với vai chính trong Oldboy và I Saw the Devil.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Choi_Min-sik_2014.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 114,
      "name": "Na Hong-jin",
      "birthday": "1974-03-14",
      "gender": "male",
      "biography": "Na Hong-jin là đạo diễn nổi tiếng Hàn Quốc, được biết đến với các bộ phim hồi hộp như The Chaser và The Wailing.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Na_Hong-jin.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 115,
      "name": "Ha Jung-woo",
      "birthday": "1978-03-11",
      "gender": "male",
      "biography": "Ha Jung-woo là diễn viên tài năng của Hàn Quốc, nổi tiếng với các vai diễn đa dạng và ấn tượng.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Ha_Jung-woo_at_The_Terror_Live_premiere.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 116,
      "name": "Kim Hye-soo",
      "birthday": "1970-09-05",
      "gender": "female",
      "biography": "Kim Hye-soo là nữ diễn viên nổi tiếng của Hàn Quốc, hoạt động nghệ thuật bền bỉ và đa tài.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/8/83/Kim_Hye-soo_2016.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 117,
      "name": "Hwang Jung-min",
      "birthday": "1970-09-01",
      "gender": "male",
      "biography": "Hwang Jung-min là một trong những diễn viên hàng đầu Hàn Quốc, với nhiều vai diễn điện ảnh nổi bật.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Hwang_Jung-min_2016.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 118,
      "name": "Kim Jee-woon",
      "birthday": "1964-05-27",
      "gender": "male",
      "biography": "Kim Jee-woon là đạo diễn Hàn Quốc nổi tiếng với phong cách đa thể loại và chất lượng điện ảnh cao.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Kim_Jee-woon_2015.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 119,
      "name": "Lee Jung-jae",
      "birthday": "1972-12-15",
      "gender": "male",
      "biography": "Lee Jung-jae là nam diễn viên Hàn Quốc có sự nghiệp thành công, đặc biệt nổi tiếng toàn cầu qua series Squid Game.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Lee_Jung-jae_in_2021.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 120,
      "name": "Jeon Do-yeon",
      "birthday": "1973-02-11",
      "gender": "female",
      "biography": "Jeon Do-yeon là một trong những nữ diễn viên xuất sắc nhất của điện ảnh Hàn Quốc, đoạt giải tại Cannes.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Jeon_Do-yeon_2015.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 121,
      "name": "Ngô Ngạn Tổ",
      "birthday": "1974-08-30",
      "gender": "male",
      "biography": "Ngô Ngạn Tổ là nam diễn viên và người mẫu gốc Đài Loan – Mỹ, nổi bật với vai diễn trong phim Dòng máu anh hùng và loạt phim hành động châu Á.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/97/Daniel_Wu_by_Gage_Skidmore.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 122,
      "name": "Johnny Trí Nguyễn",
      "birthday": "1974-02-16",
      "gender": "male",
      "biography": "Johnny Trí Nguyễn là diễn viên, võ sĩ và đạo diễn Việt kiều Mỹ, nổi tiếng với các phim hành động như Dòng máu anh hùng và Bẫy rồng.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/4/40/Johnny_Tri_Nguyen.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 123,
      "name": "Ngô Thanh Vân",
      "birthday": "1979-02-26",
      "gender": "female",
      "biography": "Ngô Thanh Vân là nữ diễn viên, ca sĩ và nhà sản xuất phim nổi tiếng của Việt Nam, góp mặt trong các phim Hai Phượng, Dòng máu anh hùng và Star Wars: The Last Jedi.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Ngô_Thanh_Vân.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 124,
      "name": "Hồng Ánh",
      "birthday": "1977-08-01",
      "gender": "female",
      "biography": "Hồng Ánh là nữ diễn viên gạo cội của điện ảnh Việt Nam, từng đạt nhiều giải thưởng quốc tế với các vai diễn sâu sắc trong Sống trong sợ hãi, Trăng nơi đáy giếng.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Hồng_Ánh_2018.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 125,
      "name": "Trương Ngọc Ánh",
      "birthday": "1976-11-12",
      "gender": "female",
      "biography": "Trương Ngọc Ánh là diễn viên, người mẫu, nhà sản xuất phim, nổi bật trong các phim Áo lụa Hà Đông, Hương Ga.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/8/86/Trương_Ngọc_Ánh.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 126,
      "name": "Lương Mạnh Hải",
      "birthday": "1981-01-20",
      "gender": "male",
      "biography": "Lương Mạnh Hải là nam diễn viên Việt Nam nổi tiếng với các vai diễn trong phim truyền hình và điện ảnh như Đẹp từng centimét, Hotboy nổi loạn.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Lương_Mạnh_Hải.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 127,
      "name": "Đỗ Hải Yến",
      "birthday": "1982-08-01",
      "gender": "female",
      "biography": "Đỗ Hải Yến là nữ diễn viên nổi bật của điện ảnh Việt, từng tham gia các phim nghệ thuật như Mùa len trâu, Người Mỹ trầm lặng.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Đỗ_Hải_Yến.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 128,
      "name": "Thái Hòa",
      "birthday": "1974-09-10",
      "gender": "male",
      "biography": "Thái Hòa là diễn viên hài và chính kịch nổi tiếng của Việt Nam, góp mặt trong nhiều phim ăn khách như Để Mai Tính, Long Ruồi.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Thái_Hòa.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 129,
      "name": "Charlie Nguyễn",
      "birthday": "1968-07-25",
      "gender": "male",
      "biography": "Charlie Nguyễn là đạo diễn Việt kiều nổi tiếng, người đứng sau thành công của các phim như Dòng máu anh hùng, Để Mai Tính, Long Ruồi.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Charlie_Nguyễn.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 130,
      "name": "Nguyễn Vinh Sơn",
      "birthday": "1957-04-12",
      "gender": "male",
      "biography": "Nguyễn Vinh Sơn là đạo diễn kỳ cựu của điện ảnh Việt Nam, từng đạo diễn các phim Mùa len trâu, Thời xa vắng.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Nguyễn_Vinh_Sơn.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 131,
      "name": "Lê Hoàng",
      "birthday": "1956-03-25",
      "gender": "male",
      "biography": "Lê Hoàng là đạo diễn nổi tiếng với phong cách điện ảnh độc đáo, nổi bật qua phim Gái nhảy, Những cô gái chân dài.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/5/56/Lê_Hoàng.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 132,
      "name": "Phan Đăng Di",
      "birthday": "1976-09-30",
      "gender": "male",
      "biography": "Phan Đăng Di là đạo diễn và biên kịch được đánh giá cao trong giới điện ảnh nghệ thuật với phim Bi, đừng sợ và Cha và con và...",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/90/Phan_Đăng_Di.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 133,
      "name": "Nguyễn Quang Dũng",
      "birthday": "1978-09-08",
      "gender": "male",
      "biography": "Nguyễn Quang Dũng là đạo diễn và biên kịch nổi bật của điện ảnh Việt với nhiều phim như Nụ hôn thần chết, Mỹ nhân kế.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/8/80/Nguyễn_Quang_Dũng.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 134,
      "name": "Trần Anh Hùng",
      "birthday": "1962-12-23",
      "gender": "male",
      "biography": "Trần Anh Hùng là đạo diễn người Pháp gốc Việt, nổi tiếng với các phim Mùi đu đủ xanh, Mùa hè chiều thẳng đứng, và phim điện ảnh quốc tế như Eternity.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Trần_Anh_Hùng_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 135,
      "name": "Victor Vũ",
      "birthday": "1975-11-25",
      "gender": "male",
      "biography": "Victor Vũ là đạo diễn Việt kiều, tạo dấu ấn với các phim như Scandal, Quả tim máu, Mắt biếc.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/71/Victor_Vũ.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 136,
      "name": "Nguyễn Nhật Ánh",
      "birthday": "1955-05-07",
      "gender": "male",
      "biography": "Nguyễn Nhật Ánh là nhà văn nổi tiếng, nhiều tác phẩm của ông được chuyển thể thành phim như Mắt biếc, Tôi thấy hoa vàng trên cỏ xanh.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Nguyễn_Nhật_Ánh.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 137,
      "name": "Lương Đình Dũng",
      "birthday": "1973-04-01",
      "gender": "male",
      "biography": "Lương Đình Dũng là đạo diễn, biên kịch phim nghệ thuật nổi bật của Việt Nam với tác phẩm ấn tượng như Cha cõng con, 578: Phát đạn của kẻ điên.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Lương_Đình_Dũng.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 138,
      "name": "Đặng Nhật Minh",
      "birthday": "1938-05-10",
      "gender": "male",
      "biography": "Đặng Nhật Minh là đạo diễn gạo cội của Việt Nam với nhiều tác phẩm sâu sắc, mang đậm dấu ấn dân tộc như Bao giờ cho đến tháng Mười.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Đặng_Nhật_Minh.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 139,
      "name": "Lê Văn Kiệt",
      "birthday": "1978-04-12",
      "gender": "male",
      "biography": "Lê Văn Kiệt là đạo diễn người Việt nổi bật với các tác phẩm như Hai Phượng và Ngôi nhà trong hẻm, kết hợp yếu tố hành động và tâm lý.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Lê_Văn_Kiệt.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 140,
      "name": "Nguyễn Phan Quang Bình",
      "birthday": "1974-03-20",
      "gender": "male",
      "biography": "Nguyễn Phan Quang Bình là đạo diễn, nhà sản xuất nổi tiếng với các phim như Cánh đồng bất tận, Quyên và Bí mật của gió.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Nguyễn_Phan_Quang_Bình.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 141,
      "name": "Nguyễn Hoàng Điệp",
      "birthday": "1982-10-25",
      "gender": "female",
      "biography": "Nguyễn Hoàng Điệp là đạo diễn nữ trẻ của Việt Nam, nổi tiếng với phim độc lập Đập cánh giữa không trung, được quốc tế đánh giá cao.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/25/Nguyễn_Hoàng_Điệp.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 142,
      "name": "Phan Gia Nhật Linh",
      "birthday": "1980-03-27",
      "gender": "male",
      "biography": "Phan Gia Nhật Linh là đạo diễn nổi tiếng với phim Em là bà nội của anh, từng lập kỷ lục phòng vé tại Việt Nam.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Phan_Gia_Nhật_Linh.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 143,
      "name": "Trịnh Đình Lê Minh",
      "birthday": "1986-11-18",
      "gender": "male",
      "biography": "Trịnh Đình Lê Minh là đạo diễn trẻ thuộc thế hệ mới của điện ảnh Việt, được biết đến với tác phẩm Ròm và Bằng chứng vô hình.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/90/Trịnh_Đình_Lê_Minh.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 144,
      "name": "Lý Hải",
      "birthday": "1968-09-28",
      "gender": "male",
      "biography": "Lý Hải là ca sĩ, đạo diễn và nhà sản xuất phim nổi bật với loạt phim điện ảnh ăn khách Lật Mặt từ phần 1 đến phần 6.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Lý_Hải.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 145,
      "name": "Cát Phượng",
      "birthday": "1970-05-15",
      "gender": "female",
      "biography": "Cát Phượng là nữ nghệ sĩ đa tài của sân khấu và điện ảnh Việt, nổi bật trong các phim như Đẻ mướn, Hotboy nổi loạn.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Cát_Phượng.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 146,
      "name": "Chi Pu",
      "birthday": "1993-06-14",
      "gender": "female",
      "biography": "Chi Pu là diễn viên, ca sĩ và người mẫu trẻ của Việt Nam, từng tham gia các phim như Mối tình đầu của tôi và Yêu.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Chi_Pu_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 147,
      "name": "Thu Trang",
      "birthday": "1984-09-15",
      "gender": "female",
      "biography": "Thu Trang là diễn viên hài nổi tiếng, được mệnh danh là 'Hoa hậu làng hài', nổi bật trong các phim Chị Mười Ba và Nghề siêu dễ.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/77/Thu_Trang.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 148,
      "name": "Kiều Minh Tuấn",
      "birthday": "1988-02-21",
      "gender": "male",
      "biography": "Kiều Minh Tuấn là diễn viên nổi bật trong các phim hài và hành động như Em chưa 18, Chị Mười Ba.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Kiều_Minh_Tuấn.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 149,
      "name": "Oanh Kiều",
      "birthday": "1992-10-10",
      "gender": "female",
      "biography": "Oanh Kiều là nữ diễn viên Việt trẻ tuổi, tham gia nhiều bộ phim truyền hình và điện ảnh như Mùa len trâu và Tháng năm rực rỡ.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/4/48/Oanh_Kiều.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 150,
      "name": "Trịnh Thảo",
      "birthday": "1997-11-16",
      "gender": "female",
      "biography": "Trịnh Thảo là diễn viên trẻ được yêu thích với các vai diễn trong phim điện ảnh và truyền hình như Tháng năm rực rỡ và Người cần quên phải nhớ.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Trịnh_Thảo.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 151,
      "name": "Chris Evans",
      "birthday": "1981-06-13",
      "gender": "male",
      "biography": "Chris Evans là nam diễn viên người Mỹ, nổi tiếng với vai Captain America trong Vũ trụ Điện ảnh Marvel.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Chris_Evans_by_Gage_Skidmore_2.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 152,
      "name": "Sebastian Stan",
      "birthday": "1982-08-13",
      "gender": "male",
      "biography": "Sebastian Stan là diễn viên người Mỹ gốc Romania, được biết đến nhiều qua vai Bucky Barnes / Winter Soldier trong các phim Marvel.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/5/59/Sebastian_Stan_by_Gage_Skidmore.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 153,
      "name": "Anthony Mackie",
      "birthday": "1978-09-23",
      "gender": "male",
      "biography": "Anthony Mackie là diễn viên người Mỹ, nổi tiếng với vai Falcon trong loạt phim Marvel.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Anthony_Mackie_SDCC_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 154,
      "name": "Jennifer Lawrence",
      "birthday": "1990-08-15",
      "gender": "female",
      "biography": "Jennifer Lawrence là diễn viên người Mỹ, từng đoạt giải Oscar và nổi tiếng với vai Katniss Everdeen trong The Hunger Games.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Jennifer_Lawrence_SDCC_2015.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 155,
      "name": "Josh Hutcherson",
      "birthday": "1992-10-12",
      "gender": "male",
      "biography": "Josh Hutcherson là diễn viên người Mỹ, nổi tiếng qua vai Peeta Mellark trong loạt phim The Hunger Games.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Josh_Hutcherson_SDCC_2015.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 156,
      "name": "Liam Hemsworth",
      "birthday": "1990-01-13",
      "gender": "male",
      "biography": "Liam Hemsworth là diễn viên người Úc, em trai của Chris Hemsworth, được biết đến với vai Gale trong The Hunger Games.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Liam_Hemsworth_SDCC_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 157,
      "name": "Keanu Reeves",
      "birthday": "1964-09-02",
      "gender": "male",
      "biography": "Keanu Reeves là diễn viên người Canada nổi tiếng toàn cầu qua các phim như The Matrix và John Wick.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/95/Keanu_Reeves_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 158,
      "name": "Halle Berry",
      "birthday": "1966-08-14",
      "gender": "female",
      "biography": "Halle Berry là nữ diễn viên Mỹ đoạt giải Oscar, từng đóng vai Sofia trong loạt phim John Wick.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Halle_Berry_in_2017.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 159,
      "name": "Chad Stahelski",
      "birthday": "1968-09-20",
      "gender": "male",
      "biography": "Chad Stahelski là đạo diễn và diễn viên đóng thế nổi tiếng, đạo diễn loạt phim John Wick.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Chad_Stahelski_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 160,
      "name": "Tom Cruise",
      "birthday": "1962-07-03",
      "gender": "male",
      "biography": "Tom Cruise là diễn viên, nhà sản xuất nổi tiếng với loạt phim Mission: Impossible và nhiều phim hành động kinh điển khác.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Tom_Cruise_by_Gage_Skidmore.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 161,
      "name": "Rebecca Ferguson",
      "birthday": "1983-10-19",
      "gender": "female",
      "biography": "Rebecca Ferguson là nữ diễn viên Thụy Điển, đóng vai Ilsa Faust trong loạt phim Mission: Impossible.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Rebecca_Ferguson_in_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 162,
      "name": "Hayley Atwell",
      "birthday": "1982-04-05",
      "gender": "female",
      "biography": "Hayley Atwell là nữ diễn viên Anh, được biết đến qua vai Peggy Carter trong MCU và loạt phim Mission: Impossible.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Hayley_Atwell_SDCC_2015.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 163,
      "name": "Christopher McQuarrie",
      "birthday": "1968-10-25",
      "gender": "male",
      "biography": "Christopher McQuarrie là đạo diễn và biên kịch của loạt phim Mission: Impossible từ phần 5 trở đi.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Christopher_McQuarrie_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 164,
      "name": "Neve Campbell",
      "birthday": "1973-10-03",
      "gender": "female",
      "biography": "Neve Campbell là nữ diễn viên Canada, nổi tiếng với vai Sidney Prescott trong loạt phim kinh dị Scream.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Neve_Campbell_2015.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 165,
      "name": "Courteney Cox",
      "birthday": "1964-06-15",
      "gender": "female",
      "biography": "Courteney Cox là nữ diễn viên Mỹ, nổi tiếng qua series Friends và vai Gale Weathers trong loạt phim Scream.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Courteney_Cox_2013.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 166,
      "name": "David Arquette",
      "birthday": "1971-09-08",
      "gender": "male",
      "biography": "David Arquette là diễn viên Mỹ, từng tham gia nhiều phần trong loạt phim Scream trong vai cảnh sát Dewey.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/fa/David_Arquette_2014.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 167,
      "name": "Matt Bettinelli-Olpin",
      "birthday": "1978-02-19",
      "gender": "male",
      "biography": "Matt Bettinelli-Olpin là đạo diễn người Mỹ, một trong hai đạo diễn chính của các phần Scream mới.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Matt_Bettinelli-Olpin.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 168,
      "name": "Jenna Ortega",
      "birthday": "2002-09-27",
      "gender": "female",
      "biography": "Jenna Ortega là nữ diễn viên người Mỹ, được biết đến với vai Tara Carpenter trong loạt phim Scream và vai Wednesday trong loạt phim Netflix cùng tên.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/5/53/Jenna_Ortega_2022.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 169,
      "name": "Melissa Barrera",
      "birthday": "1990-07-04",
      "gender": "female",
      "biography": "Melissa Barrera là nữ diễn viên Mexico, thủ vai chính trong các phần phim Scream gần đây.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Melissa_Barrera_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 170,
      "name": "Letitia Wright",
      "birthday": "1993-10-31",
      "gender": "female",
      "biography": "Letitia Wright là nữ diễn viên Guyana–Anh Quốc, nổi tiếng với vai Shuri trong loạt phim Black Panther của Marvel.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Letitia_Wright_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 171,
      "name": "Ryan Coogler",
      "birthday": "1986-05-23",
      "gender": "male",
      "biography": "Ryan Coogler là đạo diễn và biên kịch người Mỹ, nổi tiếng với các phim như Creed và Black Panther.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/6/60/Ryan_Coogler_2018.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 172,
      "name": "Song Joong-ki",
      "birthday": "1985-09-19",
      "gender": "male",
      "biography": "Song Joong-ki là nam diễn viên nổi tiếng Hàn Quốc, tham gia nhiều phim truyền hình và điện ảnh thành công.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/74/Song_Joong-ki_2022.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 173,
      "name": "Hwang Jung-min",
      "birthday": "1970-09-01",
      "gender": "male",
      "biography": "Hwang Jung-min là diễn viên kỳ cựu Hàn Quốc, nổi tiếng qua nhiều phim như Veteran, Ode to My Father và The Wailing.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Hwang_Jung-min_BIFAN_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 174,
      "name": "Don Lee",
      "birthday": "1971-03-01",
      "gender": "male",
      "biography": "Don Lee (Ma Dong-seok) là diễn viên hành động nổi tiếng Hàn Quốc, từng đóng trong Train to Busan và loạt phim The Outlaws.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/3/36/Ma_Dong-seok.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 175,
      "name": "Choi Gwi-hwa",
      "birthday": "1978-03-03",
      "gender": "male",
      "biography": "Choi Gwi-hwa là diễn viên phụ quen mặt của điện ảnh Hàn Quốc, từng góp mặt trong The Outlaws và A Taxi Driver.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/4/45/Choi_Gwi-hwa.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 176,
      "name": "Yoon Jong-bin",
      "birthday": "1979-12-20",
      "gender": "male",
      "biography": "Yoon Jong-bin là đạo diễn Hàn Quốc, được biết đến với các tác phẩm như The Spy Gone North và Nameless Gangster.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Yoon_Jong-bin_2017.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 177,
      "name": "Ha Jung-woo",
      "birthday": "1978-03-11",
      "gender": "male",
      "biography": "Ha Jung-woo là diễn viên và đạo diễn nổi tiếng Hàn Quốc, từng tham gia nhiều phim điện ảnh lớn như The Chaser, Along with the Gods.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Ha_Jung-woo_2016.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 178,
      "name": "Kim Hye-soo",
      "birthday": "1970-09-05",
      "gender": "female",
      "biography": "Kim Hye-soo là một trong những nữ diễn viên hàng đầu Hàn Quốc, nổi bật trong nhiều tác phẩm truyền hình và điện ảnh.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Kim_Hye-soo_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 179,
      "name": "Kang Hyeong-cheol",
      "birthday": "1974-11-01",
      "gender": "male",
      "biography": "Kang Hyeong-cheol là đạo diễn nổi tiếng Hàn Quốc, người đứng sau thành công của phim Sunny và Scandal Makers.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Kang_Hyeong-cheol.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 180,
      "name": "Lee Byung-hun",
      "birthday": "1970-07-12",
      "gender": "male",
      "biography": "Lee Byung-hun là diễn viên nổi tiếng Hàn Quốc với sự nghiệp quốc tế, từng tham gia G.I. Joe, Squid Game và nhiều phim điện ảnh lớn.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/26/Lee_Byung-hun_2020.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 181,
      "name": "Park Seo-jun",
      "birthday": "1988-12-16",
      "gender": "male",
      "biography": "Park Seo-jun là nam diễn viên Hàn Quốc, nổi bật với các vai diễn trong Itaewon Class, What's Wrong with Secretary Kim và nhiều phim điện ảnh.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Park_Seo-jun_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 182,
      "name": "Kang Ha-neul",
      "birthday": "1990-02-21",
      "gender": "male",
      "biography": "Kang Ha-neul là diễn viên Hàn Quốc, nổi bật với vai diễn trong When the Camellia Blooms, Forgotten và Midnight Runners.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/4/45/Kang_Ha-neul_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 183,
      "name": "Ryoo Seung-wan",
      "birthday": "1973-12-15",
      "gender": "male",
      "biography": "Ryoo Seung-wan là đạo diễn Hàn Quốc nổi tiếng với các phim hành động như Veteran, The Battleship Island và Escape from Mogadishu.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Ryoo_Seung-wan_2015.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 184,
      "name": "Kim Nam-gil",
      "birthday": "1980-03-13",
      "gender": "male",
      "biography": "Kim Nam-gil là diễn viên Hàn Quốc, từng xuất hiện trong The Fiery Priest, Pandora và Through the Darkness.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/d/da/Kim_Nam-gil_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 185,
      "name": "Park Hoon-jung",
      "birthday": "1975-01-10",
      "gender": "male",
      "biography": "Park Hoon-jung là đạo diễn và biên kịch Hàn Quốc, nổi bật với các phim như New World, The Witch và Night in Paradise.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Park_Hoon-jung.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 186,
      "name": "Lee Jung-jae",
      "birthday": "1972-12-15",
      "gender": "male",
      "biography": "Lee Jung-jae là diễn viên Hàn Quốc, nổi bật với vai chính trong Squid Game, đồng thời là đạo diễn và nhà sản xuất.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Lee_Jung-jae_2021.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 187,
      "name": "Tang Wei",
      "birthday": "1979-10-07",
      "gender": "female",
      "biography": "Tang Wei là nữ diễn viên Trung Quốc, nổi bật với vai diễn trong Lust, Caution và phim Decision to Leave của đạo diễn Park Chan-wook.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Tang_Wei.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 188,
      "name": "Park Chan-wook",
      "birthday": "1963-08-23",
      "gender": "male",
      "biography": "Park Chan-wook là đạo diễn lừng danh Hàn Quốc, được biết đến với các phim như Oldboy, The Handmaiden và Decision to Leave.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Park_Chan-wook_2022.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 189,
      "name": "Song Kang-ho",
      "birthday": "1967-01-17",
      "gender": "male",
      "biography": "Song Kang-ho là một trong những nam diễn viên hàng đầu Hàn Quốc, từng góp mặt trong Parasite, Memories of Murder và nhiều phim điện ảnh nổi bật khác.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Song_Kang-ho_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 190,
      "name": "Hirokazu Kore-eda",
      "birthday": "1962-06-06",
      "gender": "male",
      "biography": "Hirokazu Kore-eda là đạo diễn Nhật Bản từng đoạt Cành cọ vàng tại Cannes, nổi bật với các phim như Shoplifters và Broker.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Hirokazu_Koreeda_2018.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 191,
      "name": "Nishijima Hidetoshi",
      "birthday": "1971-03-29",
      "gender": "male",
      "biography": "Nishijima Hidetoshi là diễn viên Nhật Bản, nổi tiếng với vai chính trong Drive My Car – phim đoạt Oscar Phim quốc tế hay nhất 2022.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Hidetoshi_Nishijima_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 192,
      "name": "Ryusuke Hamaguchi",
      "birthday": "1978-12-16",
      "gender": "male",
      "biography": "Ryusuke Hamaguchi là đạo diễn Nhật Bản, nổi tiếng với phim Drive My Car, đoạt nhiều giải thưởng quốc tế.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Ryusuke_Hamaguchi_2021.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 193,
      "name": "Junichi Okada",
      "birthday": "1980-11-18",
      "gender": "male",
      "biography": "Junichi Okada là diễn viên Nhật Bản, từng thủ vai trong các phim lịch sử như Sekigahara và The Eternal Zero.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Junichi_Okada_2021.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 194,
      "name": "Masato Harada",
      "birthday": "1949-07-03",
      "gender": "male",
      "biography": "Masato Harada là đạo diễn, nhà biên kịch và diễn viên Nhật Bản, nổi tiếng với các phim lịch sử – chiến tranh như Sekigahara.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Masato_Harada.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 195,
      "name": "Tô Hoài",
      "birthday": "1920-09-27",
      "gender": "male",
      "biography": "Tô Hoài là nhà văn nổi tiếng của Việt Nam, tác giả của nhiều tác phẩm văn học và từng được chuyển thể thành phim như Trăng nơi đáy giếng.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/23/T%C3%B4_Ho%C3%A0i.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 196,
      "name": "Ngô Thanh Vân",
      "birthday": "1979-02-26",
      "gender": "female",
      "biography": "Ngô Thanh Vân là nữ diễn viên, nhà sản xuất, đạo diễn nổi tiếng của Việt Nam, từng đóng vai chính trong Dòng máu anh hùng, Hai Phượng.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Ngo_Thanh_Van_2017.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 197,
      "name": "Lý Hải",
      "birthday": "1968-09-28",
      "gender": "male",
      "biography": "Lý Hải là ca sĩ, diễn viên và đạo diễn nổi tiếng với loạt phim điện ảnh Lật Mặt được yêu thích tại Việt Nam.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Ly_Hai_2023.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 198,
      "name": "Kiều Minh Tuấn",
      "birthday": "1988-02-21",
      "gender": "male",
      "biography": "Kiều Minh Tuấn là nam diễn viên Việt Nam nổi bật với nhiều vai diễn hài hước và cảm xúc trong Em chưa 18, Lật mặt và Để Mai Tính 2.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Kieu_Minh_Tuan.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 199,
      "name": "Hứa Vĩ Văn",
      "birthday": "1979-12-13",
      "gender": "male",
      "biography": "Hứa Vĩ Văn là diễn viên điện ảnh, ca sĩ và người mẫu Việt Nam, nổi bật với các phim như Chàng vợ của em và Em là bà nội của anh.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Hua_Vi_Van.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 200,
      "name": "Trấn Thành",
      "birthday": "1987-02-05",
      "gender": "male",
      "biography": "Trấn Thành là nghệ sĩ đa tài tại Việt Nam: diễn viên, MC, đạo diễn – nổi bật với phim Nhà Bà Nữ, Bố Già.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Tran_Thanh_2022.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 201,
      "name": "Lan Ngọc",
      "birthday": "1990-04-04",
      "gender": "female",
      "biography": "Lan Ngọc là nữ diễn viên trẻ nổi tiếng tại Việt Nam, từng tham gia các phim như Cánh đồng bất tận, Gái già lắm chiêu.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/8/85/Ninh_Duong_Lan_Ngoc.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 202,
      "name": "Thu Trang",
      "birthday": "1984-09-15",
      "gender": "female",
      "biography": "Thu Trang là diễn viên hài và nhà sản xuất phim tại Việt Nam, nổi bật trong loạt phim Chị Mười Ba và Nghề siêu dễ.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/1/10/Thu_Trang_2022.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 203,
      "name": "Tiến Luật",
      "birthday": "1982-01-13",
      "gender": "male",
      "biography": "Tiến Luật là diễn viên hài nổi tiếng, thường xuyên đóng cặp với vợ là Thu Trang trong các dự án phim Việt ăn khách.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/24/Tien_Luat.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 204,
      "name": "Thái Hòa",
      "birthday": "1974-09-10",
      "gender": "male",
      "biography": "Thái Hòa là diễn viên điện ảnh và hài kịch được yêu thích, với các vai diễn ấn tượng trong Để Mai Tính, Long Ruồi và Bỗng Dưng Muốn Khóc.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Thai_Hoa_Vietnam.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 205,
      "name": "Lê Bảo Trung",
      "birthday": "1976-08-14",
      "gender": "male",
      "biography": "Lê Bảo Trung là đạo diễn nổi bật của dòng phim hài, thanh thiếu niên tại Việt Nam như Giải cứu thần chết, Những nụ hôn rực rỡ.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Le_Bao_Trung.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 206,
      "name": "Vũ Ngọc Đãng",
      "birthday": "1975-01-02",
      "gender": "male",
      "biography": "Vũ Ngọc Đãng là đạo diễn tài năng Việt Nam với các tác phẩm gây tiếng vang như Bỗng Dưng Muốn Khóc, Đẹp Từng Centimét.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/71/Vu_Ngoc_Dang.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 207,
      "name": "Trương Ngọc Ánh",
      "birthday": "1976-11-12",
      "gender": "female",
      "biography": "Trương Ngọc Ánh là diễn viên, nhà sản xuất nổi tiếng với các vai diễn mạnh mẽ trong Hương Ga, Truy Sát và Bẫy Rồng.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Truong_Ngoc_Anh.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 208,
      "name": "Johnny Trí Nguyễn",
      "birthday": "1974-02-16",
      "gender": "male",
      "biography": "Johnny Trí Nguyễn là diễn viên và võ sư Việt kiều Mỹ, nổi bật trong các phim hành động như Dòng Máu Anh Hùng, Bẫy Rồng.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/6/68/Johnny_Tri_Nguyen.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 209,
      "name": "Huỳnh Đông",
      "birthday": "1983-12-13",
      "gender": "male",
      "biography": "Huỳnh Đông là diễn viên, đạo diễn nổi bật trong các phim như Áo Lụa Hà Đông, Mẹ Con Đậu Đũa, Trăng Nơi Đáy Giếng.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/d/db/Huynh_Dong.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 210,
      "name": "Lê Văn Kiệt",
      "birthday": "1978-09-03",
      "gender": "male",
      "biography": "Lê Văn Kiệt là đạo diễn Việt kiều nổi bật, đạo diễn các phim hành động như Hai Phượng, Ngôi Nhà Trong Hẻm.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Le_Van_Kiet.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 211,
      "name": "Hồng Ánh",
      "birthday": "1977-08-10",
      "gender": "female",
      "biography": "Hồng Ánh là diễn viên kỳ cựu của điện ảnh Việt, từng tham gia nhiều phim nghệ thuật như Trăng nơi đáy giếng, Thời xa vắng.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Hong_Anh.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 212,
      "name": "Victor Vũ",
      "birthday": "1975-11-25",
      "gender": "male",
      "biography": "Victor Vũ là đạo diễn nổi tiếng người Mỹ gốc Việt, đạo diễn các phim như Mắt Biếc, Thiên Mệnh Anh Hùng, Tôi thấy hoa vàng trên cỏ xanh.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Victor_Vu.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 213,
      "name": "Nguyễn Quang Dũng",
      "birthday": "1978-08-08",
      "gender": "male",
      "biography": "Nguyễn Quang Dũng là đạo diễn nổi tiếng của điện ảnh Việt với các phim ăn khách như Đẹp từng centimét, Hồn Trương Ba da hàng thịt.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Nguyen_Quang_Dung.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 214,
      "name": "Thanh Hằng",
      "birthday": "1983-07-22",
      "gender": "female",
      "biography": "Thanh Hằng là siêu mẫu và diễn viên nổi tiếng, tham gia nhiều phim như Mỹ nhân kế, Chị chị em em và Những nụ hôn rực rỡ.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Thanh_Hang.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 215,
      "name": "Isaac",
      "birthday": "1988-06-13",
      "gender": "male",
      "biography": "Isaac là ca sĩ, diễn viên người Việt Nam, từng tham gia phim điện ảnh như Tấm Cám, Song Lang, Trạng Tí Phiêu Lưu Ký.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Isaac_2019.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 216,
      "name": "Phan Gia Nhật Linh",
      "birthday": "1980-03-15",
      "gender": "male",
      "biography": "Phan Gia Nhật Linh là đạo diễn Việt Nam, nổi bật với Em là bà nội của anh, Trạng Tí Phiêu Lưu Ký.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Phan_Gia_Nhat_Linh.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 217,
      "name": "Mai Thu Huyền",
      "birthday": "1979-06-30",
      "gender": "female",
      "biography": "Mai Thu Huyền là diễn viên, nhà sản xuất, đạo diễn nổi tiếng, đảm nhiệm vai trò đạo diễn phim The Last Wife (Người Vợ Cuối Cùng).",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Mai_Thu_Huyen_2022.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 218,
      "name": "Nguyễn Phan Quang Bình",
      "birthday": "1978-10-29",
      "gender": "male",
      "biography": "Nguyễn Phan Quang Bình là đạo diễn của các phim như Cánh đồng bất tận, Quyên và Tro tàn rực rỡ.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Nguyen_Phan_Quang_Binh.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 219,
      "name": "Hoàng Thùy Linh",
      "birthday": "1988-08-11",
      "gender": "female",
      "biography": "Hoàng Thùy Linh là ca sĩ, diễn viên nổi tiếng, từng tham gia phim truyền hình Nhật ký Vàng Anh và điện ảnh Thần tượng.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Hoang_Thuy_Linh_2022.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 220,
      "name": "Lãnh Thanh",
      "birthday": "1993-11-05",
      "gender": "male",
      "biography": "Lãnh Thanh là diễn viên trẻ Việt Nam, từng tham gia các phim điện ảnh như Thưa mẹ con đi, Bí mật của gió.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/6/64/Lanh_Thanh.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 221,
      "name": "Trúc Anh",
      "birthday": "1998-09-25",
      "gender": "female",
      "biography": "Trúc Anh là nữ diễn viên trẻ nổi bật qua vai Hà Lan trong Mắt Biếc, tạo dấu ấn mạnh mẽ trong lòng khán giả.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Truc_Anh_Mat_Biec.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 222,
      "name": "Nguyễn Nhật Trung",
      "birthday": "1982-06-19",
      "gender": "male",
      "biography": "Nguyễn Nhật Trung là đạo diễn Việt Nam, nổi bật với phim Quỷ Nhập Tràng và các dự án điện ảnh thuộc thể loại kinh dị.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/70/Nguyen_Nhat_Trung.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 223,
      "name": "Lưu Huỳnh",
      "birthday": "1960-01-20",
      "gender": "male",
      "biography": "Lưu Huỳnh là đạo diễn kỳ cựu tại Việt Nam, tác giả của các phim nghệ thuật nổi bật như Hạt mưa sa, Áo lụa Hà Đông.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Luu_Huynh.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 224,
      "name": "Trần Khánh Duyên",
      "birthday": "1979-04-11",
      "gender": "female",
      "biography": "Trần Khánh Duyên là biên kịch và đạo diễn điện ảnh Việt Nam, nổi bật với phim điện ảnh nghệ thuật và các dự án độc lập.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Tran_Khanh_Duyen.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 225,
      "name": "Ngô Thanh Vân",
      "birthday": "1979-02-26",
      "gender": "female",
      "biography": "Ngô Thanh Vân là diễn viên, nhà sản xuất nổi bật trong điện ảnh Việt với các phim như Hai Phượng, Dòng Máu Anh Hùng.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Ngo_Thanh_Van.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 226,
      "name": "Lý Hải",
      "birthday": "1968-09-28",
      "gender": "male",
      "biography": "Lý Hải là ca sĩ, đạo diễn thành công với loạt phim Lật Mặt – thương hiệu hành động hài nổi bật của Việt Nam.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/4/42/Ly_Hai.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 227,
      "name": "Kaity Nguyễn",
      "birthday": "1999-04-09",
      "gender": "female",
      "biography": "Kaity Nguyễn là diễn viên trẻ nổi bật với các vai diễn trong Em Chưa 18, Hồn Papa Da Con Gái, Người Vợ Cuối Cùng.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Kaity_Nguyen.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 228,
      "name": "Thái Hòa",
      "birthday": "1974-08-10",
      "gender": "male",
      "biography": "Thái Hòa là diễn viên nổi tiếng với khả năng biến hóa trong nhiều vai hài hước và tâm lý như Để Mai Tính, Long Ruồi.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Thai_Hoa.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 229,
      "name": "Diễm My 9x",
      "birthday": "1990-05-27",
      "gender": "female",
      "biography": "Diễm My 9x là diễn viên trẻ nổi tiếng trong điện ảnh Việt với phong cách hiện đại, từng tham gia các phim như Mỹ Nhân Kế, Gái Già Lắm Chiêu.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Dieu_My_9x.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 230,
      "name": "Kiều Minh Tuấn",
      "birthday": "1988-02-21",
      "gender": "male",
      "biography": "Kiều Minh Tuấn là diễn viên điện ảnh Việt nổi tiếng với lối diễn tự nhiên, được biết đến qua Em Chưa 18, Bố Già.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/4/44/Kieu_Minh_Tuan.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 231,
      "name": "Tăng Thanh Hà",
      "birthday": "1986-10-24",
      "gender": "female",
      "biography": "Tăng Thanh Hà là diễn viên nổi tiếng trong nhiều phim điện ảnh và truyền hình như Bỗng Dưng Muốn Khóc, Mỹ Nhân Kế.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/1/17/Tang_Thanh_Ha.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 232,
      "name": "Cường Seven",
      "birthday": "1989-01-03",
      "gender": "male",
      "biography": "Cường Seven là ca sĩ, diễn viên nổi bật với phong cách trẻ trung, từng góp mặt trong Truy Sát, Lôi Báo.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Cuong_Seven.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 233,
      "name": "Phương Anh Đào",
      "birthday": "1992-08-25",
      "gender": "female",
      "biography": "Phương Anh Đào là diễn viên trẻ, ghi dấu ấn trong Chàng Vợ Của Em, Nhắm Mắt Thấy Mùa Hè và Tro Tàn Rực Rỡ.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/6/67/Phuong_Anh_Dao.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 234,
      "name": "Thu Trang",
      "birthday": "1984-09-15",
      "gender": "female",
      "biography": "Thu Trang là nghệ sĩ hài kiêm diễn viên nổi tiếng, được biết đến với vai diễn trong phim điện ảnh Chị Mười Ba.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Thu_Trang_2023.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 235,
      "name": "Tiến Luật",
      "birthday": "1982-01-11",
      "gender": "male",
      "biography": "Tiến Luật là diễn viên hài, chồng của Thu Trang, thường xuyên góp mặt trong các phim hài, hành động như Chị Mười Ba.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Tien_Luat_2022.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 236,
      "name": "Hứa Vĩ Văn",
      "birthday": "1979-12-03",
      "gender": "male",
      "biography": "Hứa Vĩ Văn là diễn viên, người mẫu nổi bật tại Việt Nam, từng tham gia các phim Chàng Trai Năm Ấy, Em Là Bà Nội Của Anh.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hua_Vi_Van.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 237,
      "name": "Đỗ Đức Thịnh",
      "birthday": "1975-09-15",
      "gender": "male",
      "biography": "Đỗ Đức Thịnh là đạo diễn kiêm biên kịch điện ảnh Việt, từng đạo diễn phim Siêu Sao Siêu Ngố, Vu Quy Đại Náo.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Do_Duc_Thinh.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 238,
      "name": "Quang Tuấn",
      "birthday": "1985-11-15",
      "gender": "male",
      "biography": "Quang Tuấn là diễn viên được đánh giá cao với các vai diễn trong Bằng Chứng Vô Hình, Bí Mật Của Gió.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/5/56/Quang_Tuan.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 239,
      "name": "B Trần",
      "birthday": "1990-05-18",
      "gender": "male",
      "biography": "B Trần là diễn viên trẻ nổi bật của điện ảnh Việt với phong cách hiện đại, từng xuất hiện trong 12 Chòm Sao, Trạng Tí.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/9e/B_Tran.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 240,
      "name": "Trung Dân",
      "birthday": "1967-08-11",
      "gender": "male",
      "biography": "Trung Dân là nghệ sĩ gạo cội với kinh nghiệm diễn xuất đa dạng trong phim hài, phim truyền hình lẫn điện ảnh.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Trung_Dan.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 241,
      "name": "Khương Ngọc",
      "birthday": "1984-11-29",
      "gender": "male",
      "biography": "Khương Ngọc là diễn viên kiêm đạo diễn cá tính, thường xuất hiện trong các vai phản diện hoặc hài độc đáo.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Khuong_Ngoc.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 242,
      "name": "Hoàng Yến Chibi",
      "birthday": "1995-12-08",
      "gender": "female",
      "biography": "Hoàng Yến Chibi là ca sĩ, diễn viên trẻ Việt Nam, nổi bật trong các phim điện ảnh như Tháng Năm Rực Rỡ.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Hoang_Yen_Chibi_2022.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 243,
      "name": "Minh Hằng",
      "birthday": "1987-06-22",
      "gender": "female",
      "biography": "Minh Hằng là ca sĩ, diễn viên có nhiều đóng góp cho truyền hình và điện ảnh Việt, nổi bật trong Ngôi Nhà Hạnh Phúc bản Việt.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Minh_Hang_2023.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 244,
      "name": "Đinh Ngọc Diệp",
      "birthday": "1984-10-26",
      "gender": "female",
      "biography": "Đinh Ngọc Diệp là diễn viên và nhà sản xuất phim, vợ của đạo diễn Victor Vũ, từng tham gia trong Cô Dâu Đại Chiến, Bóng Ma Học Đường.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/4/42/Dinh_Ngoc_Diep.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 245,
      "name": "Hồng Đào",
      "birthday": "1962-04-25",
      "gender": "female",
      "biography": "Hồng Đào là nghệ sĩ kỳ cựu của sân khấu kịch và điện ảnh Việt, từng tham gia các phim như Thưa mẹ con đi, Đoạt Hồn.",
      "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Hong_Dao.jpg",
      "createdAt": "2025-06-22T00:00:00+07:00",
      "updatedAt": "2025-06-22T00:00:00+07:00"
    },
    {
      "id": 246,
      "name": "Park Hae-jin",
      "birthday": "1983-05-01",
      "gender": "male",
      "biography": "Park Hae-jin là diễn viên Hàn Quốc sinh tại Busan, nổi tiếng với các vai trong Cheese in the Trap, Man to Man và Bad Guys. Anh từng nhận giải Nam diễn viên mới tại Baeksang và MBC Drama Awards.",
      "profile_url": "https://en.wikipedia.org/wiki/Park_Hae-jin",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 247,
      "name": "Kim Go-eun",
      "birthday": "1991-07-02",
      "gender": "female",
      "biography": "Kim Go-eun là diễn viên Hàn Quốc, từng đoạt giải Nữ diễn viên mới qua phim Eungyo (2012). Cô được biết đến qua Cheese in the Trap, Guardian và A Muse.",
      "profile_url": "https://en.wikipedia.org/wiki/Kim_Go-eun",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 248,
      "name": "Seo Kang-joon",
      "birthday": "1993-10-12",
      "gender": "male",
      "biography": "Seo Kang-joon, tên thật Lee Seung-hwan, là diễn viên kiêm ca sĩ, thành viên nhóm 5urprise. Anh được biết đến với Cheese in the Trap, Are You Human? và Grid.",
      "profile_url": "https://en.wikipedia.org/wiki/Seo_Kang-joon",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 249,
      "name": "Lee Sung-kyung",
      "birthday": "1990-08-10",
      "gender": "female",
      "biography": "Lee Sung-kyung là diễn viên, người mẫu Hàn Quốc, nổi bật trong Weightlifting Fairy Kim Bok-joo, Cheese in the Trap và Dr. Romantic 2.",
      "profile_url": "https://en.wikipedia.org/wiki/Lee_Sung-kyung",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 250,
      "name": "Song Joong-ki",
      "birthday": "1985-09-19",
      "gender": "male",
      "biography": "Song Joong-ki là diễn viên nổi tiếng Hàn Quốc, tên tuổi qua Sungkyunkwan Scandal, Descendants of the Sun, Vincenzo và Arthdal Chronicles.",
      "profile_url": "https://en.wikipedia.org/wiki/Song_Joong-ki",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 251,
      "name": "Song Hye-kyo",
      "birthday": "1981-11-22",
      "gender": "female",
      "biography": "Song Hye-kyo là nữ diễn viên hàng đầu Hàn Quốc, nổi bật qua Full House, Descendants of the Sun và Encounter.",
      "profile_url": "https://en.wikipedia.org/wiki/Song_Hye-kyo",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 252,
      "name": "Jin Goo",
      "birthday": "1980-07-20",
      "gender": "male",
      "biography": "Jin Goo là diễn viên Hàn Quốc, biết đến qua Descendants of the Sun, Uncontrollably Fond và The Last Princess.",
      "profile_url": "https://en.wikipedia.org/wiki/Jin_Goo",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 253,
      "name": "Kim Ji-won",
      "birthday": "1992-10-19",
      "gender": "female",
      "biography": "Kim Ji-won là nữ diễn viên Hàn Quốc, đóng vai chính trong Descendants of the Sun, Fight for My Way và Chronicle of Life.",
      "profile_url": "https://en.wikipedia.org/wiki/Kim_Ji-won",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 254,
      "name": "Lee Je-hoon",
      "birthday": "1984-07-04",
      "gender": "male",
      "biography": "Lee Je-hoon là diễn viên Hàn Quốc, nổi tiếng qua Signal, Architecture 101 và Taxi Driver.",
      "profile_url": "https://en.wikipedia.org/wiki/Lee_Je-hoon",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 255,
      "name": "Kim Hye-soo",
      "birthday": "1970-09-05",
      "gender": "female",
      "biography": "Kim Hye-soo là nữ diễn viên hàng đầu Hàn Quốc, với vai diễn nổi bật trong Signal, Coin Locker Girl, và The Thieves.",
      "profile_url": "https://en.wikipedia.org/wiki/Kim_Hye-soo",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 256,
      "name": "Cho Jin-woong",
      "birthday": "1976-03-30",
      "gender": "male",
      "biography": "Cho Jin-woong là diễn viên, nổi bật trong Signal, The Wailing, A Hard Day và The Age of Shadows.",
      "profile_url": "https://en.wikipedia.org/wiki/Cho_Jin-woong",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 257,
      "name": "Ji Chang-wook",
      "birthday": "1987-07-05",
      "gender": "male",
      "biography": "Ji Chang-wook là diễn viên Hàn Quốc, nổi bật qua The K2, Healer, và Suspicious Partner.",
      "profile_url": "https://en.wikipedia.org/wiki/Ji_Chang-wook",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 258,
      "name": "Im Yoon-ah",
      "birthday": "1990-05-30",
      "gender": "female",
      "biography": "Im Yoon-ah (Yoona) là ca sĩ-nữ diễn viên, thành viên SNSD và diễn viên trong The K2, The King in Love và Exit.",
      "profile_url": "https://en.wikipedia.org/wiki/Yoona",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 259,
      "name": "Song Yoon-ah",
      "birthday": "1973-03-28",
      "gender": "female",
      "biography": "Song Yoon-ah là diễn viên Hàn Quốc, bắt đầu nổi tiếng qua phim Divorce Lawyer in Love, cũng đóng chính trong The K2.",
      "profile_url": "https://en.wikipedia.org/wiki/Song_Yoon-ah",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 260,
      "name": "Gong Yoo",
      "birthday": "1979-07-10",
      "gender": "male",
      "biography": "Gong Yoo là diễn viên nổi tiếng với vai Goblin trong Goblin và nam chính trong The Age of Shadows, Train to Busan.",
      "profile_url": "https://en.wikipedia.org/wiki/Gong_Yoo",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 261,
      "name": "Lee Dong-wook",
      "birthday": "1981-11-06",
      "gender": "male",
      "biography": "Lee Dong-wook là diễn viên quen thuộc với Goblin, My Girl, Scent of a Woman và Touch Your Heart.",
      "profile_url": "https://en.wikipedia.org/wiki/Lee_Dong-wook",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 262,
      "name": "Yoo In-na",
      "birthday": "1982-06-05",
      "gender": "female",
      "biography": "Yoo In-na là nữ diễn viên và MC Hàn Quốc, được biết đến qua vai trong Goblin, Queen In-hyun's Man và My Love from the Star.",
      "profile_url": "https://en.wikipedia.org/wiki/Yoo_In-na",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 263,
      "name": "Jun Ji-hyun",
      "birthday": "1981-10-30",
      "gender": "female",
      "biography": "Jun Ji-hyun (Gianna Jun) là nữ diễn viên nổi tiếng với My Sassy Girl, The Thieves và Legends of the Blue Sea.",
      "profile_url": "https://en.wikipedia.org/wiki/Jun_Ji-hyun",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 264,
      "name": "Lee Min-ho",
      "birthday": "1987-06-22",
      "gender": "male",
      "biography": "Lee Min-ho là diễn viên đình đám Hàn Quốc, nổi tiếng qua Boys Over Flowers, The Heirs, Legend of the Blue Sea và The King: Eternal Monarch.",
      "profile_url": "https://en.wikipedia.org/wiki/Lee_Min-ho",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 265,
      "name": "Kim Hee-ae",
      "birthday": "1967-04-23",
      "gender": "female",
      "biography": "Kim Hee-ae là nữ diễn viên kỳ cựu, nổi bật trong The World of the Married, Secret Love Affair và The Queen of Office.",
      "profile_url": "https://en.wikipedia.org/wiki/Kim_Hee-ae",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 266,
      "name": "Park Hae-joon",
      "birthday": "1976-10-14",
      "gender": "male",
      "biography": "Park Hae-joon là diễn viên, từng đóng vai chính trong The World of the Married, Itaewon Class, Chronicle of a Blood Merchant.",
      "profile_url": "https://en.wikipedia.org/wiki/Park_Hae-joon",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 267,
      "name": "Han So-hee",
      "birthday": "1994-11-18",
      "gender": "female",
      "biography": "Han So-hee là nữ diễn viên trẻ, nổi lên qua A World of Married Couple, Nevertheless, My Name và The World of the Married.",
      "profile_url": "https://en.wikipedia.org/wiki/Han_So-hee",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 268,
      "name": "Kim Soo-hyun",
      "birthday": "1988-02-16",
      "gender": "male",
      "biography": "Kim Soo-hyun là diễn viên nổi bật qua Dream High, My Love from the Star, It's Okay to Not Be Okay và The Producers.",
      "profile_url": "https://en.wikipedia.org/wiki/Kim_Soo-hyun",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 269,
      "name": "Seo Ye-ji",
      "birthday": "1990-04-06",
      "gender": "female",
      "biography": "Seo Ye‑ji là nữ diễn viên Hàn Quốc, nổi bật với vai diễn trong It's Okay to Not Be Okay, Lawless Lawyer và Island.",
      "profile_url": "https://en.wikipedia.org/wiki/Seo_Ye-ji",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 270,
      "name": "Oh Jung-se",
      "birthday": "1977-11-27",
      "gender": "male",
      "biography": "Oh Jung-se là diễn viên Hàn Quốc, được biết đến qua vai trong It's Okay to Not Be Okay, Hospital Playlist và Missing: The Other Side.",
      "profile_url": "https://en.wikipedia.org/wiki/Oh_Jung-se",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 271,
      "name": "Park Bo-gum",
      "birthday": "1993-06-16",
      "gender": "male",
      "biography": "Park Bo‑gum là diễn viên Hàn Quốc nổi tiếng với Reply 1988, Love in the Moonlight và Record of Youth.",
      "profile_url": "https://en.wikipedia.org/wiki/Park_Bo-gum",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 272,
      "name": "Park So-dam",
      "birthday": "1991-09-08",
      "gender": "female",
      "biography": "Park So‑dam là nữ diễn viên Hàn Quốc, nổi bật qua Train to Busan, Parasite và Record of Youth.",
      "profile_url": "https://en.wikipedia.org/wiki/Park_So-dam",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 273,
      "name": "Byeon Woo-seok",
      "birthday": "1991-05-31",
      "gender": "male",
      "biography": "Byeon Woo-seok là diễn viên Hàn Quốc, nổi bật với vai trong Record of Youth, Moonshine và Moon Lovers: Scarlet Heart Ryeo.",
      "profile_url": "https://en.wikipedia.org/wiki/Byeon_Woo-seok",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 274,
      "name": "Lee Min-ki",
      "birthday": "1985-01-16",
      "gender": "male",
      "biography": "Lee Min‑ki là diễn viên, đạo diễn Hàn Quốc, nổi bật với Oh My Ladylord, Because This Is My First Life và Dreadnought.",
      "profile_url": "https://en.wikipedia.org/wiki/Lee_Min-ki",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 275,
      "name": "Nana",
      "birthday": "1991-09-14",
      "gender": "female",
      "biography": "Nana (Lee Na‑ra) là ca sĩ, diễn viên, thành viên After School và Orange Caramel, đóng chính trong Oh My Ladylord.",
      "profile_url": "https://en.wikipedia.org/wiki/Nana_(entertainer)",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 276,
      "name": "Kang Min-hyuk",
      "birthday": "1991-06-28",
      "gender": "male",
      "biography": "Kang Min‑hyuk là diễn viên, nhạc sĩ, tay trống của CNBLUE, góp mặt trong Oh My Ladylord, The Heirs và Hospital Ship.",
      "profile_url": "https://en.wikipedia.org/wiki/Kang_Min-hyuk",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 277,
      "name": "Lee Sun-kyun",
      "birthday": "1975-03-02",
      "gender": "male",
      "biography": "Lee Sun‑kyun là diễn viên nổi tiếng qua My Mister, Parasite, Coffee Prince và Helpless.",
      "profile_url": "https://en.wikipedia.org/wiki/Lee_Sun-kyun",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 278,
      "name": "IU",
      "birthday": "1993-05-16",
      "gender": "female",
      "biography": "IU (Lee Ji-eun) là ca sĩ-nữ diễn viên nổi tiếng Hàn Quốc, đóng chính trong My Mister, Moon Lovers và Hotel Del Luna.",
      "profile_url": "https://en.wikipedia.org/wiki/IU_(singer)",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 279,
      "name": "Kim Tae-ri",
      "birthday": "1990-04-24",
      "gender": "female",
      "biography": "Kim Tae-ri là nữ diễn viên Hàn Quốc, nổi bật với vai diễn trong The Handmaiden, Mr. Sunshine và Twenty-Five Twenty-One.",
      "profile_url": "https://en.wikipedia.org/wiki/Kim_Tae-ri",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 280,
      "name": "Nam Joo-hyuk",
      "birthday": "1994-02-22",
      "gender": "male",
      "biography": "Nam Joo-hyuk là diễn viên và người mẫu Hàn Quốc, nổi bật trong Weightlifting Fairy Kim Bok-joo, Start-Up và Twenty-Five Twenty-One.",
      "profile_url": "https://en.wikipedia.org/wiki/Nam_Joo-hyuk",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 281,
      "name": "Park Eun-bin",
      "birthday": "1992-09-04",
      "gender": "female",
      "biography": "Park Eun-bin là nữ diễn viên Hàn Quốc, nổi tiếng với vai chính trong Extraordinary Attorney Woo, The King's Affection và Hot Stove League.",
      "profile_url": "https://en.wikipedia.org/wiki/Park_Eun-bin",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 282,
      "name": "Kang Tae-oh",
      "birthday": "1994-06-20",
      "gender": "male",
      "biography": "Kang Tae-oh là diễn viên Hàn Quốc, nổi bật với vai diễn trong Extraordinary Attorney Woo và Run On.",
      "profile_url": "https://en.wikipedia.org/wiki/Kang_Tae-oh",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 283,
      "name": "Shin Hye-sun",
      "birthday": "1989-08-31",
      "gender": "female",
      "biography": "Shin Hye-sun là nữ diễn viên Hàn Quốc, đóng chính trong See You in My 19th Life, Mr. Queen và Stranger.",
      "profile_url": "https://en.wikipedia.org/wiki/Shin_Hye-sun",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 284,
      "name": "Ahn Bo-hyun",
      "birthday": "1988-05-16",
      "gender": "male",
      "biography": "Ahn Bo-hyun là diễn viên Hàn Quốc, nổi bật qua vai diễn trong Itaewon Class, Yumi's Cells và See You in My 19th Life.",
      "profile_url": "https://en.wikipedia.org/wiki/Ahn_Bo-hyun",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 285,
      "name": "Kim Seon-ho",
      "birthday": "1986-05-08",
      "gender": "male",
      "biography": "Kim Seon-ho là diễn viên Hàn Quốc, nổi bật với vai trong Hometown Cha-Cha-Cha, Start-Up và 100 Days My Prince.",
      "profile_url": "https://en.wikipedia.org/wiki/Kim_Seon-ho",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 286,
      "name": "Shin Min-a",
      "birthday": "1984-04-05",
      "gender": "female",
      "biography": "Shin Min-a là nữ diễn viên Hàn Quốc, nổi tiếng với vai diễn trong Hometown Cha-Cha-Cha, My Girlfriend is a Gumiho và Tomorrow With You.",
      "profile_url": "https://en.wikipedia.org/wiki/Shin_Min-a",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 287,
      "name": "Song Joong-ki",
      "birthday": "1985-09-19",
      "gender": "male",
      "biography": "Song Joong-ki là diễn viên Hàn Quốc, nổi tiếng với các vai trong Descendants of the Sun, Vincenzo và Reborn Rich.",
      "profile_url": "https://en.wikipedia.org/wiki/Song_Joong-ki",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 288,
      "name": "Jeon Yeo-been",
      "birthday": "1989-07-26",
      "gender": "female",
      "biography": "Jeon Yeo-been là nữ diễn viên Hàn Quốc, nổi bật qua vai chính trong Vincenzo và Night in Paradise.",
      "profile_url": "https://en.wikipedia.org/wiki/Jeon_Yeo-been",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 289,
      "name": "Ok Taec-yeon",
      "birthday": "1988-12-27",
      "gender": "male",
      "biography": "Ok Taec-yeon là ca sĩ, rapper, diễn viên Hàn Quốc, thành viên nhóm 2PM, đóng chính trong Vincenzo và Secret Royal Inspector.",
      "profile_url": "https://en.wikipedia.org/wiki/Ok_Taec-yeon",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 290,
      "name": "Gong Yoo",
      "birthday": "1979-07-10",
      "gender": "male",
      "biography": "Gong Yoo là diễn viên nổi tiếng của Hàn Quốc với các phim như Goblin, Train to Busan và Coffee Prince.",
      "profile_url": "https://en.wikipedia.org/wiki/Gong_Yoo",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 291,
      "name": "Kim Go-eun",
      "birthday": "1991-07-02",
      "gender": "female",
      "biography": "Kim Go-eun là diễn viên Hàn Quốc, nổi bật với Goblin, Cheese in the Trap và The King: Eternal Monarch.",
      "profile_url": "https://en.wikipedia.org/wiki/Kim_Go-eun",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 292,
      "name": "Han Ji-min",
      "birthday": "1982-11-05",
      "gender": "female",
      "biography": "Han Ji-min là nữ diễn viên Hàn Quốc, nổi bật với các vai trong Rooftop Prince, The Light in Your Eyes và Our Blues.",
      "profile_url": "https://en.wikipedia.org/wiki/Han_Ji-min",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 293,
      "name": "Jung Hae-in",
      "birthday": "1988-04-01",
      "gender": "male",
      "biography": "Jung Hae-in là diễn viên Hàn Quốc, nổi bật với Something in the Rain, D.P. và Snowdrop.",
      "profile_url": "https://en.wikipedia.org/wiki/Jung_Hae-in",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 294,
      "name": "Lee Ji-eun",
      "birthday": "1993-05-16",
      "gender": "female",
      "biography": "Lee Ji-eun, nghệ danh IU, là ca sĩ kiêm diễn viên Hàn Quốc, nổi tiếng với My Mister, Hotel Del Luna và Moon Lovers.",
      "profile_url": "https://en.wikipedia.org/wiki/IU_(singer)",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 295,
      "name": "Lee Sun-kyun",
      "birthday": "1975-03-02",
      "gender": "male",
      "biography": "Lee Sun-kyun là diễn viên Hàn Quốc, nổi bật trong My Mister, Parasite và Pasta.",
      "profile_url": "https://en.wikipedia.org/wiki/Lee_Sun-kyun",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 296,
      "name": "Lee Bo-young",
      "birthday": "1979-01-12",
      "gender": "female",
      "biography": "Lee Bo-young là diễn viên Hàn Quốc, nổi bật với vai diễn trong I Can Hear Your Voice, Whisper và Mine.",
      "profile_url": "https://en.wikipedia.org/wiki/Lee_Bo-young",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 297,
      "name": "Park Hae-joon",
      "birthday": "1976-06-14",
      "gender": "male",
      "biography": "Park Hae-joon là diễn viên Hàn Quốc, nổi bật trong The World of the Married, Arthdal Chronicles và My Mister.",
      "profile_url": "https://en.wikipedia.org/wiki/Park_Hae-joon",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 298,
      "name": "Lee Joon-gi",
      "birthday": "1982-04-17",
      "gender": "male",
      "biography": "Lee Joon-gi là diễn viên Hàn Quốc, nổi tiếng với các vai trong Moon Lovers, Flower of Evil và Lawless Lawyer.",
      "profile_url": "https://en.wikipedia.org/wiki/Lee_Joon-gi",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 299,
      "name": "Lee Min-ho",
      "birthday": "1987-06-22",
      "gender": "male",
      "biography": "Lee Min-ho là diễn viên Hàn Quốc, nổi tiếng với Boys Over Flowers, The Heirs và Legends of the Blue Sea.",
      "profile_url": "https://en.wikipedia.org/wiki/Lee_Min-ho_(actor)",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 300,
      "name": "Jun Ji-hyun",
      "birthday": "1981-10-30",
      "gender": "female",
      "biography": "Jun Ji-hyun là nữ diễn viên Hàn Quốc, nổi tiếng với My Sassy Girl, Legends of the Blue Sea và Kingdom: Ashin of the North.",
      "profile_url": "https://en.wikipedia.org/wiki/Jun_Ji-hyun",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 301,
      "name": "Ji Chang-wook",
      "birthday": "1987-07-05",
      "gender": "male",
      "biography": "Ji Chang-wook là diễn viên Hàn Quốc, nổi bật qua các vai trong The K2, Healer và Empress Ki.",
      "profile_url": "https://en.wikipedia.org/wiki/Ji_Chang-wook",
      "createdAt": "2025-06-24T00:00:00+00:00",
      "updatedAt": "2025-06-24T00:00:00+00:00"
    },
    {
      "id": 302,
      "name": "Lee Yoon-jung",
      "birthday": "1976-01-01",
      "gender": "female",
      "biography": "Lee Yoon-jung là đạo diễn nổi tiếng người Hàn Quốc, được biết đến qua các bộ phim truyền hình như Cheese in the Trap.",
      "profile_url": "https://en.wikipedia.org/wiki/Lee_Yoon-jung_(director)",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 303,
      "name": "Lee Eung-bok",
      "birthday": "1971-02-27",
      "gender": "male",
      "biography": "Lee Eung-bok là đạo diễn nổi tiếng của Hàn Quốc, từng chỉ đạo Descendants of the Sun, Goblin và Mr. Sunshine.",
      "profile_url": "https://en.wikipedia.org/wiki/Lee_Eung-bok",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 304,
      "name": "Kim Won-seok",
      "birthday": "1972-01-01",
      "gender": "male",
      "biography": "Kim Won-seok là đạo diễn Hàn Quốc, nổi tiếng với tác phẩm Signal.",
      "profile_url": "https://en.wikipedia.org/wiki/Kim_Won-seok_(director)",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 305,
      "name": "Kwak Jung-hwan",
      "birthday": "1972-01-01",
      "gender": "male",
      "biography": "Kwak Jung-hwan là đạo diễn Hàn Quốc nổi tiếng với phim The K2.",
      "profile_url": "https://en.wikipedia.org/wiki/Kwak_Jung-hwan",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 306,
      "name": "Jin Hyuk",
      "birthday": "1970-01-01",
      "gender": "male",
      "biography": "Jin Hyuk là đạo diễn Hàn Quốc với nhiều phim nổi bật như Legend of the Blue Sea.",
      "profile_url": "https://en.wikipedia.org/wiki/Jin_Hyuk_(director)",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 307,
      "name": "Mo Wan-il",
      "birthday": "1970-01-01",
      "gender": "male",
      "biography": "Mo Wan-il là đạo diễn của bộ phim đình đám The World of the Married.",
      "profile_url": "https://en.wikipedia.org/wiki/Mo_Wan-il",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 308,
      "name": "Park Shin-woo",
      "birthday": "1970-01-01",
      "gender": "male",
      "biography": "Park Shin-woo là đạo diễn của It’s Okay to Not Be Okay và nhiều bộ phim tình cảm nổi tiếng.",
      "profile_url": "https://en.wikipedia.org/wiki/Park_Shin-woo",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 309,
      "name": "Ahn Gil-ho",
      "birthday": "1974-01-01",
      "gender": "male",
      "biography": "Ahn Gil-ho là đạo diễn Hàn Quốc, đã tham gia nhiều dự án truyền hình như Record of Youth.",
      "profile_url": "https://en.wikipedia.org/wiki/Ahn_Gil-ho",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 310,
      "name": "Oh Da-young",
      "birthday": "1980-01-01",
      "gender": "female",
      "biography": "Oh Da-young là nữ đạo diễn Hàn Quốc, đảm nhận vai trò đạo diễn chính trong Oh My Ladylord.",
      "profile_url": "https://asianwiki.com/Oh_Da-Young",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 311,
      "name": "Kim Won-seok",
      "birthday": "1972-01-01",
      "gender": "male",
      "biography": "Kim Won-seok là đạo diễn từng thực hiện bộ phim nổi bật My Mister.",
      "profile_url": "https://en.wikipedia.org/wiki/Kim_Won-seok_(director)",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 312,
      "name": "Yoon Seok-ho",
      "birthday": "1957-06-04",
      "gender": "male",
      "biography": "Yoon Seok-ho là đạo diễn nổi tiếng với nhiều phim Hàn lãng mạn, trong đó có Mr. Sunshine.",
      "profile_url": "https://en.wikipedia.org/wiki/Yoon_Seok-ho",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 313,
      "name": "Ahn Pan-seok",
      "birthday": "1961-11-25",
      "gender": "male",
      "biography": "Ahn Pan-seok là đạo diễn nổi bật của Hàn Quốc, đứng sau thành công của Something in the Rain.",
      "profile_url": "https://en.wikipedia.org/wiki/Ahn_Pan-seok",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 314,
      "name": "Lee Jung-hyo",
      "birthday": "1970-01-01",
      "gender": "male",
      "biography": "Lee Jung-hyo là đạo diễn của bộ phim nổi tiếng Crash Landing on You.",
      "profile_url": "https://en.wikipedia.org/wiki/Lee_Jung-hyo",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 315,
      "name": "Cha Young-hoon",
      "birthday": "1970-01-01",
      "gender": "male",
      "biography": "Cha Young-hoon là đạo diễn người Hàn Quốc được biết đến với phim When the Camellia Blooms.",
      "profile_url": "https://en.wikipedia.org/wiki/Cha_Young-hoon",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 316,
      "name": "Kim Hee-won",
      "birthday": "1972-01-01",
      "gender": "female",
      "biography": "Kim Hee-won là đạo diễn của bộ phim Vincenzo, mang phong cách độc đáo và hiện đại.",
      "profile_url": "https://en.wikipedia.org/wiki/Kim_Hee-won_(director)",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 317,
      "name": "Yu Je-won",
      "birthday": "1971-01-01",
      "gender": "male",
      "biography": "Yu Je-won là đạo diễn Hàn Quốc, được biết đến với tác phẩm Hometown Cha-Cha-Cha.",
      "profile_url": "https://en.wikipedia.org/wiki/Yu_Je-won",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 318,
      "name": "Jung Ji-hyun",
      "birthday": "1970-01-01",
      "gender": "male",
      "biography": "Jung Ji-hyun là đạo diễn phim truyền hình Twenty-Five Twenty-One.",
      "profile_url": "https://en.wikipedia.org/wiki/Jung_Ji-hyun",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 319,
      "name": "Yoo In-sik",
      "birthday": "1970-01-01",
      "gender": "male",
      "biography": "Yoo In-sik là đạo diễn nổi tiếng, thực hiện Extraordinary Attorney Woo.",
      "profile_url": "https://en.wikipedia.org/wiki/Yoo_In-sik",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 320,
      "name": "Lee Na-jung",
      "birthday": "1970-01-01",
      "gender": "female",
      "biography": "Lee Na-jung là đạo diễn Hàn Quốc, chỉ đạo bộ phim See You in My 19th Life.",
      "profile_url": "https://en.wikipedia.org/wiki/Lee_Na-jung",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    },
    {
      "id": 321,
      "name": "Shin Won-ho",
      "birthday": "1979-03-03",
      "gender": "male",
      "biography": "Shin Won-ho là đạo diễn Hàn Quốc nổi bật, từng làm việc ở nhiều dự án truyền hình đình đám.",
      "profile_url": "https://en.wikipedia.org/wiki/Shin_Won-ho",
      "createdAt": "2024-01-01T00:00:00",
      "updatedAt": "2024-01-01T00:00:00"
    }
  ]);
  await queryInterface.bulkInsert('MovieActors', [
    { "id": 1, "seasonId": 1, "peopleId": 1, "role": "Harry Potter" },
    { "id": 2, "seasonId": 1, "peopleId": 2, "role": "Ron Weasley" },
    { "id": 3, "seasonId": 1, "peopleId": 3, "role": "Hermione Granger" },
    { "id": 4, "seasonId": 1, "peopleId": 4, "role": "Albus Dumbledore" },
    { "id": 5, "seasonId": 1, "peopleId": 5, "role": "Minerva McGonagall" },
  
    { "id": 6, "seasonId": 2, "peopleId": 1, "role": "Harry Potter" },
    { "id": 7, "seasonId": 2, "peopleId": 2, "role": "Ron Weasley" },
    { "id": 8, "seasonId": 2, "peopleId": 3, "role": "Hermione Granger" },
    { "id": 9, "seasonId": 2, "peopleId": 4, "role": "Albus Dumbledore" },
    { "id": 10, "seasonId": 2, "peopleId": 5, "role": "Minerva McGonagall" },
    { "id": 11, "seasonId": 2, "peopleId": 7, "role": "Gilderoy Lockhart" },
  
    { "id": 12, "seasonId": 3, "peopleId": 1, "role": "Harry Potter" },
    { "id": 13, "seasonId": 3, "peopleId": 2, "role": "Ron Weasley" },
    { "id": 14, "seasonId": 3, "peopleId": 3, "role": "Hermione Granger" },
  
    { "id": 15, "seasonId": 4, "peopleId": 1, "role": "Harry Potter" },
    { "id": 16, "seasonId": 4, "peopleId": 2, "role": "Ron Weasley" },
    { "id": 17, "seasonId": 4, "peopleId": 3, "role": "Hermione Granger" },
    { "id": 18, "seasonId": 4, "peopleId": 10, "role": "Lord Voldemort" },
    { "id": 19, "seasonId": 4, "peopleId": 11, "role": "Mad-Eye Moody" },
  
    { "id": 20, "seasonId": 5, "peopleId": 1, "role": "Harry Potter" },
    { "id": 21, "seasonId": 5, "peopleId": 2, "role": "Ron Weasley" },
    { "id": 22, "seasonId": 5, "peopleId": 3, "role": "Hermione Granger" },
    { "id": 23, "seasonId": 5, "peopleId": 13, "role": "Dolores Umbridge" },
  
    { "id": 24, "seasonId": 6, "peopleId": 1, "role": "Harry Potter" },
    { "id": 25, "seasonId": 6, "peopleId": 2, "role": "Ron Weasley" },
    { "id": 26, "seasonId": 6, "peopleId": 3, "role": "Hermione Granger" },
    { "id": 27, "seasonId": 6, "peopleId": 10, "role": "Lord Voldemort" },
    { "id": 28, "seasonId": 6, "peopleId": 14, "role": "Bellatrix Lestrange" },
    { "id": 29, "seasonId": 6, "peopleId": 15, "role": "Albus Dumbledore" },
  
    { "id": 30, "seasonId": 7, "peopleId": 17, "role": "Peter Parker" },
    { "id": 31, "seasonId": 7, "peopleId": 18, "role": "Mary Jane Watson" },
    { "id": 32, "seasonId": 7, "peopleId": 19, "role": "Green Goblin" },
    { "id": 33, "seasonId": 7, "peopleId": 20, "role": "Harry Osborn" },
  
    { "id": 34, "seasonId": 8, "peopleId": 17, "role": "Peter Parker" },
    { "id": 35, "seasonId": 8, "peopleId": 18, "role": "Mary Jane Watson" },
    { "id": 36, "seasonId": 8, "peopleId": 20, "role": "Harry Osborn" },
  
    { "id": 37, "seasonId": 9, "peopleId": 17, "role": "Peter Parker" },
    { "id": 38, "seasonId": 9, "peopleId": 18, "role": "Mary Jane Watson" },
    { "id": 39, "seasonId": 9, "peopleId": 20, "role": "Harry Osborn" },
  
    { "id": 40, "seasonId": 10, "peopleId": 22, "role": "Logan / Wolverine" },
    { "id": 41, "seasonId": 10, "peopleId": 23, "role": "Charles Xavier" },
    { "id": 42, "seasonId": 10, "peopleId": 24, "role": "Magneto" },
    { "id": 43, "seasonId": 10, "peopleId": 25, "role": "Storm" },
    { "id": 44, "seasonId": 10, "peopleId": 26, "role": "Jean Grey" },
  
    { "id": 51, "seasonId": 11, "peopleId": 22, "role": "Logan / Wolverine" },
    { "id": 52, "seasonId": 11, "peopleId": 23, "role": "Professor X" },
    { "id": 53, "seasonId": 11, "peopleId": 24, "role": "Magneto" },
    { "id": 54, "seasonId": 11, "peopleId": 25, "role": "Storm" },
    { "id": 55, "seasonId": 11, "peopleId": 26, "role": "Jean Grey" },
  
    { "id": 56, "seasonId": 12, "peopleId": 22, "role": "Logan / Wolverine" },
    { "id": 57, "seasonId": 12, "peopleId": 23, "role": "Professor X" },
    { "id": 58, "seasonId": 12, "peopleId": 24, "role": "Magneto" },
    { "id": 59, "seasonId": 12, "peopleId": 25, "role": "Storm" },
    { "id": 60, "seasonId": 12, "peopleId": 26, "role": "Jean Grey" },
  
    { "id": 61, "seasonId": 13, "peopleId": 22, "role": "Logan / Wolverine" },
  
    { "id": 62, "seasonId": 14, "peopleId": 30, "role": "Frodo Baggins" },
    { "id": 63, "seasonId": 14, "peopleId": 24, "role": "Gandalf" },
    { "id": 64, "seasonId": 14, "peopleId": 32, "role": "Aragorn" },
    { "id": 65, "seasonId": 14, "peopleId": 33, "role": "Samwise Gamgee" },
    { "id": 66, "seasonId": 14, "peopleId": 34, "role": "Legolas" },
  
    { "id": 67, "seasonId": 15, "peopleId": 30, "role": "Frodo Baggins" },
    { "id": 68, "seasonId": 15, "peopleId": 24, "role": "Gandalf" },
    { "id": 69, "seasonId": 15, "peopleId": 32, "role": "Aragorn" },
    { "id": 70, "seasonId": 15, "peopleId": 33, "role": "Samwise Gamgee" },
    { "id": 71, "seasonId": 15, "peopleId": 34, "role": "Legolas" },
  
    { "id": 72, "seasonId": 16, "peopleId": 30, "role": "Frodo Baggins" },
    { "id": 73, "seasonId": 16, "peopleId": 24, "role": "Gandalf" },
    { "id": 74, "seasonId": 16, "peopleId": 32, "role": "Aragorn" },
    { "id": 75, "seasonId": 16, "peopleId": 33, "role": "Samwise Gamgee" },
    { "id": 76, "seasonId": 16, "peopleId": 34, "role": "Legolas" },
  
    { "id": 77, "seasonId": 17, "peopleId": 36, "role": "Jack Sparrow" },
    { "id": 78, "seasonId": 17, "peopleId": 37, "role": "Elizabeth Swann" },
    { "id": 79, "seasonId": 17, "peopleId": 38, "role": "Barbossa" },
  
    { "id": 80, "seasonId": 18, "peopleId": 36, "role": "Jack Sparrow" },
    { "id": 81, "seasonId": 18, "peopleId": 37, "role": "Elizabeth Swann" },
    { "id": 82, "seasonId": 18, "peopleId": 38, "role": "Barbossa" },
    { "id": 83, "seasonId": 18, "peopleId": 39, "role": "Davy Jones" },
  
    { "id": 84, "seasonId": 19, "peopleId": 36, "role": "Jack Sparrow" },
    { "id": 85, "seasonId": 19, "peopleId": 37, "role": "Elizabeth Swann" },
    { "id": 86, "seasonId": 19, "peopleId": 38, "role": "Barbossa" },
  
    { "id": 87, "seasonId": 20, "peopleId": 40, "role": "Jason Bourne" },
    { "id": 88, "seasonId": 20, "peopleId": 41, "role": "Marie" },
    { "id": 89, "seasonId": 20, "peopleId": 42, "role": "Conklin" },
    { "id": 90, "seasonId": 20, "peopleId": 43, "role": "The Professor" },
  
    { "id": 91, "seasonId": 21, "peopleId": 40, "role": "Jason Bourne" },
    { "id": 92, "seasonId": 21, "peopleId": 41, "role": "Marie" },
    { "id": 93, "seasonId": 21, "peopleId": 42, "role": "Ward Abbott" },
    { "id": 94, "seasonId": 21, "peopleId": 43, "role": "Kirill" },
  
    { "id": 95, "seasonId": 22, "peopleId": 40, "role": "Jason Bourne" },
    { "id": 96, "seasonId": 22, "peopleId": 42, "role": "Noah Vosen" },
  
    { "id": 97, "seasonId": 23, "peopleId": 46, "role": "Shrek" },
    { "id": 98, "seasonId": 23, "peopleId": 47, "role": "Donkey" },
    { "id": 99, "seasonId": 23, "peopleId": 48, "role": "Princess Fiona" },
  
    { "id": 100, "seasonId": 24, "peopleId": 46, "role": "Shrek" },
    { "id": 101, "seasonId": 24, "peopleId": 47, "role": "Donkey" },
    { "id": 102, "seasonId": 24, "peopleId": 48, "role": "Princess Fiona" },
    { "id": 103, "seasonId": 24, "peopleId": 54, "role": "Prince Charming" },
  
    { "id": 104, "seasonId": 25, "peopleId": 46, "role": "Shrek" },
    { "id": 105, "seasonId": 25, "peopleId": 47, "role": "Donkey" },
    { "id": 106, "seasonId": 25, "peopleId": 48, "role": "Princess Fiona" },
    { "id": 107, "seasonId": 25, "peopleId": 53, "role": "Castle Guard" },
  
    { "id": 108, "seasonId": 26, "peopleId": 46, "role": "Shrek" },
    { "id": 109, "seasonId": 26, "peopleId": 47, "role": "Donkey" },
    { "id": 110, "seasonId": 26, "peopleId": 48, "role": "Princess Fiona" },
    { "id": 111, "seasonId": 26, "peopleId": 52, "role": "Puss in Boots" },
  
    { "id": 112, "seasonId": 27, "peopleId": 57, "role": "Sam Witwicky" },
    { "id": 113, "seasonId": 27, "peopleId": 58, "role": "Mikaela Banes" },
    { "id": 114, "seasonId": 27, "peopleId": 59, "role": "William Lennox" },
    { "id": 115, "seasonId": 27, "peopleId": 60, "role": "Robert Epps" },
    { "id": 116, "seasonId": 27, "peopleId": 62, "role": "Optimus Prime (voice)" },
  
    { "id": 117, "seasonId": 28, "peopleId": 57, "role": "Sam Witwicky" },
    { "id": 118, "seasonId": 28, "peopleId": 58, "role": "Mikaela Banes" },
  
    { "id": 119, "seasonId": 29, "peopleId": 63, "role": "Bruce Wayne / Batman" },
    { "id": 120, "seasonId": 29, "peopleId": 64, "role": "Alfred Pennyworth" },
    { "id": 121, "seasonId": 29, "peopleId": 66, "role": "Scarecrow" },
  
    { "id": 122, "seasonId": 30, "peopleId": 63, "role": "Bruce Wayne / Batman" },
    { "id": 123, "seasonId": 30, "peopleId": 64, "role": "Alfred Pennyworth" },
    { "id": 124, "seasonId": 30, "peopleId": 65, "role": "James Gordon" },
  
    { "id": 125, "seasonId": 31, "peopleId": 68, "role": "Tony Stark / Iron Man" },
    { "id": 126, "seasonId": 31, "peopleId": 69, "role": "Pepper Potts" },
    { "id": 127, "seasonId": 31, "peopleId": 70, "role": "Obadiah Stane" },
  
    { "id": 128, "seasonId": 32, "peopleId": 68, "role": "Tony Stark / Iron Man" },
    { "id": 129, "seasonId": 32, "peopleId": 69, "role": "Pepper Potts" },
    { "id": 130, "seasonId": 32, "peopleId": 75, "role": "Natasha Romanoff" },
  
    { "id": 131, "seasonId": 33, "peopleId": 88, "role": "Aoyama" },
  
    { "id": 132, "seasonId": 34, "peopleId": 89, "role": "Shuya Nanahara" },
    { "id": 133, "seasonId": 34, "peopleId": 90, "role": "Kitano" },
  
    { "id": 134, "seasonId": 35, "peopleId": 81, "role": "Oh Kyeong-pil" },
  
    { "id": 135, "seasonId": 36, "peopleId": 88, "role": "Ash" },
  
    { "id": 136, "seasonId": 37, "peopleId": 89, "role": "Gyeon-woo" },
  
    { "id": 137, "seasonId": 38, "peopleId": 82, "role": "Detective Park" },
    { "id": 138, "seasonId": 38, "peopleId": 83, "role": "Detective Seo" },
  
    { "id": 139, "seasonId": 39, "peopleId": 85, "role": "Su-mi" },
    { "id": 140, "seasonId": 39, "peopleId": 86, "role": "Moo-hyeon" },
  
    { "id": 141, "seasonId": 40, "peopleId": 85, "role": "Young Woman" },
    { "id": 142, "seasonId": 40, "peopleId": 86, "role": "Monk" },
  
    { "id": 143, "seasonId": 41, "peopleId": 113, "role": "Oh Dae-su" },
    { "id": 144, "seasonId": 41, "peopleId": 112, "role": "Mi-do" },
    { "id": 145, "seasonId": 41, "peopleId": 111, "role": "Joo-hwan" },
  
    { "id": 146, "seasonId": 42, "peopleId": 91, "role": "Hana" },
    { "id": 147, "seasonId": 42, "peopleId": 92, "role": "Gin" },
  
    { "id": 148, "seasonId": 43, "peopleId": 91, "role": "Keiko" },
  
    { "id": 149, "seasonId": 44, "peopleId": 95, "role": "Sophie" },
    { "id": 150, "seasonId": 44, "peopleId": 96, "role": "Howl" },
  
    { "id": 151, "seasonId": 45, "peopleId": 99, "role": "Chagawa" },
  
    { "id": 152, "seasonId": 46, "peopleId": 91, "role": "Matsuko" },
  
    { "id": 153, "seasonId": 47, "peopleId": 111, "role": "Park Gang-du" },
    { "id": 154, "seasonId": 47, "peopleId": 107, "role": "Nam-joo" },
  
    { "id": 155, "seasonId": 48, "peopleId": 120, "role": "Shin-ae" },
  
    { "id": 156, "seasonId": 49, "peopleId": 99, "role": "Kenji" },
  
    { "id": 157, "seasonId": 50, "peopleId": 115, "role": "Jung-ho" },
  
    { "id": 158, "seasonId": 51, "peopleId": 116, "role": "Yuko" },
  
    { "id": 159, "seasonId": 52, "peopleId": 115, "role": "Cha Tae-sik" },
  
    { "id": 160, "seasonId": 53, "peopleId": 119, "role": "Sơn" },
    { "id": 161, "seasonId": 53, "peopleId": 120, "role": "Nhi" },
  
    { "id": 162, "seasonId": 54, "peopleId": 117, "role": "Hải Đen" },
  
    { "id": 163, "seasonId": 55, "peopleId": 119, "role": "Khoa" },
  
    { "id": 164, "seasonId": 56, "peopleId": 116, "role": "Kiều Trinh" },
  
    { "id": 165, "seasonId": 57, "peopleId": 117, "role": "Tâm" },
  
    { "id": 166, "seasonId": 58, "peopleId": 116, "role": "Duyên" },
  
    { "id": 167, "seasonId": 59, "peopleId": 120, "role": "Hiền" },
  
    { "id": 168, "seasonId": 60, "peopleId": 117, "role": "Cường" },
  
    { "id": 169, "seasonId": 61, "peopleId": 116, "role": "Ngọc" },
  
    { "id": 170, "seasonId": 62, "peopleId": 116, "role": "Hạnh" },
  
    { "id": 171, "seasonId": 63, "peopleId": 116, "role": "An" },
  
    { "id": 172, "seasonId": 64, "peopleId": 116, "role": "Linh" },
  
    { "id": 173, "seasonId": 65, "peopleId": 116, "role": "Duyên" },
  
    { "id": 174, "seasonId": 66, "peopleId": 117, "role": "Sơn" },
    { "id": 175, "seasonId": 66, "peopleId": 116, "role": "Mai" },
  
    { "id": 176, "seasonId": 67, "peopleId": 119, "role": "Phong" },
  
    { "id": 177, "seasonId": 68, "peopleId": 116, "role": "Trang" },
  
    { "id": 178, "seasonId": 69, "peopleId": 116, "role": "Trinh" },
  
    { "id": 179, "seasonId": 70, "peopleId": 116, "role": "Út Vân" },
  
    { "id": 180, "seasonId": 71, "peopleId": 128, "role": "Hội" },
    { "id": 181, "seasonId": 71, "peopleId": 126, "role": "Định" },
  
    { "id": 182, "seasonId": 72, "peopleId": 146, "role": "Lan" },
    { "id": 183, "seasonId": 72, "peopleId": 150, "role": "Quỳnh" },
  
    { "id": 184, "seasonId": 73, "peopleId": 151, "role": "Steve Rogers / Captain America" },
    { "id": 185, "seasonId": 73, "peopleId": 152, "role": "Bucky Barnes / Winter Soldier" },
  
    { "id": 186, "seasonId": 74, "peopleId": 151, "role": "Steve Rogers" },
    { "id": 187, "seasonId": 74, "peopleId": 152, "role": "Winter Soldier" },
    { "id": 188, "seasonId": 74, "peopleId": 153, "role": "Falcon" },
  
    { "id": 189, "seasonId": 75, "peopleId": 151, "role": "Captain America" },
    { "id": 190, "seasonId": 75, "peopleId": 152, "role": "Winter Soldier" },
    { "id": 191, "seasonId": 75, "peopleId": 153, "role": "Falcon" },
  
    { "id": 192, "seasonId": 76, "peopleId": 150, "role": "Katniss Everdeen" },
  
    { "id": 193, "seasonId": 77, "peopleId": 150, "role": "Katniss" },
  
    { "id": 194, "seasonId": 78, "peopleId": 150, "role": "Katniss" },
  
    { "id": 195, "seasonId": 79, "peopleId": 150, "role": "Katniss" },
  
    { "id": 196, "seasonId": 80, "peopleId": 151, "role": "John Wick" },
  
    { "id": 197, "seasonId": 81, "peopleId": 151, "role": "John Wick" },
  
    { "id": 198, "seasonId": 82, "peopleId": 151, "role": "John Wick" },
  
    { "id": 199, "seasonId": 83, "peopleId": 151, "role": "Ethan Hunt" },
  
    { "id": 200, "seasonId": 84, "peopleId": 151, "role": "Ethan Hunt" },
  
    { "id": 201, "seasonId": 85, "peopleId": 151, "role": "Ethan Hunt" },
  
    { "id": 202, "seasonId": 86, "peopleId": 151, "role": "Ethan Hunt" },
  
    { "id": 203, "seasonId": 87, "peopleId": 151, "role": "Ethan Hunt" },
  
    { "id": 204, "seasonId": 88, "peopleId": 149, "role": "Sidney" },
  
    { "id": 205, "seasonId": 89, "peopleId": 149, "role": "Sidney" },
  
    { "id": 206, "seasonId": 90, "peopleId": 149, "role": "Sidney" },
  
    { "id": 207, "seasonId": 91, "peopleId": 151, "role": "T'Challa / Black Panther" },
  
    { "id": 208, "seasonId": 92, "peopleId": 126, "role": "Tay đua Trí" },
  
    { "id": 209, "seasonId": 93, "peopleId": 150, "role": "Kaiji" },
  
    { "id": 210, "seasonId": 94, "peopleId": 150, "role": "Kaiji" },
  
    { "id": 211, "seasonId": 95, "peopleId": 151, "role": "Kenshin" },
  
    { "id": 212, "seasonId": 96, "peopleId": 150, "role": "Conan" },
  
    { "id": 213, "seasonId": 97, "peopleId": 150, "role": "Conan" },
  
    { "id": 214, "seasonId": 98, "peopleId": 151, "role": "Thanh tra Ma" },
  
    { "id": 215, "seasonId": 99, "peopleId": 151, "role": "Thanh tra Ma" },
  
    { "id": 216, "seasonId": 100, "peopleId": 151, "role": "Thanh tra Ma" },
  
    { "id": 217, "seasonId": 101, "peopleId": 174, "role": "Ma Seok-do" },
  
    { "id": 218, "seasonId": 102, "peopleId": 173, "role": "Seo Do-cheol" },
  
    { "id": 219, "seasonId": 103, "peopleId": 184, "role": "Cha Kim" },
    { "id": 220, "seasonId": 103, "peopleId": 187, "role": "Young-shin" },
  
    { "id": 221, "seasonId": 104, "peopleId": 178, "role": "Sister Anna" },
    { "id": 222, "seasonId": 104, "peopleId": 201, "role": "Sister Lucia" },
  
    { "id": 223, "seasonId": 105, "peopleId": 200, "role": "Jun" },
  
    { "id": 224, "seasonId": 106, "peopleId": 200, "role": "Jun" },
    { "id": 225, "seasonId": 106, "peopleId": 198, "role": "Chang" },
  
    { "id": 226, "seasonId": 107, "peopleId": 186, "role": "Dokja" },
    { "id": 227, "seasonId": 107, "peopleId": 170, "role": "Shin Yumi" },
  
    { "id": 228, "seasonId": 108, "peopleId": 180, "role": "Ahn Ok-yun" },
    { "id": 229, "seasonId": 108, "peopleId": 172, "role": "Seo Hoon" },
  
    { "id": 230, "seasonId": 109, "peopleId": 187, "role": "Song Seo-rae" },
    { "id": 231, "seasonId": 109, "peopleId": 170, "role": "Detective Hae-joon" },
  
    { "id": 232, "seasonId": 110, "peopleId": 189, "role": "Sang-hyeon" },
    { "id": 233, "seasonId": 110, "peopleId": 187, "role": "So-young" },
  
    { "id": 253, "seasonId": 111, "peopleId": 161, "role": "Ilsa Faust" },
    { "id": 254, "seasonId": 111, "peopleId": 162, "role": "Grace" },
  
    { "id": 255, "seasonId": 112, "peopleId": 164, "role": "Sidney Prescott" },
    { "id": 256, "seasonId": 112, "peopleId": 165, "role": "Gale Weathers" },
  
    { "id": 257, "seasonId": 113, "peopleId": 166, "role": "Dewey Riley" },
    { "id": 258, "seasonId": 113, "peopleId": 168, "role": "Tara Carpenter" },
  
    { "id": 259, "seasonId": 114, "peopleId": 169, "role": "Sam Carpenter" },
    { "id": 260, "seasonId": 114, "peopleId": 170, "role": "Shuri" },
  
    { "id": 261, "seasonId": 115, "peopleId": 172, "role": "Vincenzo" },
    { "id": 262, "seasonId": 115, "peopleId": 173, "role": "Thám tử Do-chul" },
  
    { "id": 263, "seasonId": 116, "peopleId": 174, "role": "Ma Seok-do" },
    { "id": 264, "seasonId": 116, "peopleId": 175, "role": "Sĩ quan Kang" },
  
    { "id": 265, "seasonId": 117, "peopleId": 177, "role": "Lim Joong-ho" },
    { "id": 266, "seasonId": 117, "peopleId": 178, "role": "Bà thị trưởng" },
  
    { "id": 267, "seasonId": 118, "peopleId": 180, "role": "Squid Game Master" },
    { "id": 268, "seasonId": 118, "peopleId": 181, "role": "Park Sae-ro-yi" },
  
    { "id": 269, "seasonId": 119, "peopleId": 182, "role": "Kang Doo-young" },
    { "id": 270, "seasonId": 119, "peopleId": 184, "role": "Father Kim" },
  
    { "id": 271, "seasonId": 120, "peopleId": 186, "role": "Seong Gi-hun" },
    { "id": 272, "seasonId": 120, "peopleId": 187, "role": "Seo-rae" },
  
    { "id": 273, "seasonId": 121, "peopleId": 189, "role": "Sang-hyeon" },
    { "id": 274, "seasonId": 121, "peopleId": 190, "role": "Người trung gian" },
  
    { "id": 275, "seasonId": 122, "peopleId": 191, "role": "Kafuku" },
    { "id": 276, "seasonId": 122, "peopleId": 192, "role": "Yusuke" },
  
    { "id": 277, "seasonId": 123, "peopleId": 233, "role": "Thiện" },
    { "id": 278, "seasonId": 123, "peopleId": 199, "role": "Bố Thiện" },
  
    { "id": 279, "seasonId": 124, "peopleId": 198, "role": "Nam" },
    { "id": 280, "seasonId": 124, "peopleId": 214, "role": "Cô Nga" },
  
    { "id": 281, "seasonId": 125, "peopleId": 243, "role": "Thảo" },
    { "id": 282, "seasonId": 125, "peopleId": 235, "role": "Cảnh sát Tuấn" },
  
    { "id": 283, "seasonId": 126, "peopleId": 228, "role": "Phong" },
    { "id": 284, "seasonId": 126, "peopleId": 229, "role": "Lan" },
  
    { "id": 285, "seasonId": 127, "peopleId": 232, "role": "Minh" },
    { "id": 286, "seasonId": 127, "peopleId": 219, "role": "Thảo" },
  
    { "id": 287, "seasonId": 128, "peopleId": 236, "role": "Phúc" },
    { "id": 288, "seasonId": 128, "peopleId": 234, "role": "Mẹ Phúc" },
  
    { "id": 289, "seasonId": 129, "peopleId": 227, "role": "Mai" },
    { "id": 290, "seasonId": 129, "peopleId": 220, "role": "Tùng" },
  
    { "id": 291, "seasonId": 130, "peopleId": 221, "role": "Hà Lan" },
    { "id": 292, "seasonId": 130, "peopleId": 222, "role": "Thầy Định" },
  
    { "id": 293, "seasonId": 131, "peopleId": 224, "role": "Linh mục Giuse" },
    { "id": 294, "seasonId": 131, "peopleId": 231, "role": "Hằng" },
  
    { "id": 295, "seasonId": 132, "peopleId": 242, "role": "Yến" },
    { "id": 296, "seasonId": 132, "peopleId": 240, "role": "Ông Mười" },
  
    { "id": 297, "seasonId": 133, "peopleId": 246, "role": "Yoo Jung" },
    { "id": 298, "seasonId": 133, "peopleId": 247, "role": "Hong Seol" },
    { "id": 299, "seasonId": 133, "peopleId": 248, "role": "Baek In-ho" },
    { "id": 300, "seasonId": 133, "peopleId": 249, "role": "Baek In-ha" },
  
    { "id": 301, "seasonId": 134, "peopleId": 250, "role": "Yoo Si-jin" },
    { "id": 302, "seasonId": 134, "peopleId": 251, "role": "Kang Mo-yeon" },
    { "id": 303, "seasonId": 134, "peopleId": 252, "role": "Seo Dae-young" },
    { "id": 304, "seasonId": 134, "peopleId": 253, "role": "Yoon Myung-joo" },
  
    { "id": 305, "seasonId": 135, "peopleId": 254, "role": "Park Hae-young" },
    { "id": 306, "seasonId": 135, "peopleId": 255, "role": "Cha Soo-hyun" },
    { "id": 307, "seasonId": 135, "peopleId": 256, "role": "Lee Jae-han" },
  
    { "id": 308, "seasonId": 136, "peopleId": 257, "role": "Kim Je-ha" },
    { "id": 309, "seasonId": 136, "peopleId": 258, "role": "Go Anna" },
    { "id": 310, "seasonId": 136, "peopleId": 259, "role": "Choi Yoo-jin" },
  
    { "id": 311, "seasonId": 137, "peopleId": 260, "role": "Kim Shin / Goblin" },
    { "id": 312, "seasonId": 137, "peopleId": 261, "role": "Grim Reaper" },
    { "id": 313, "seasonId": 137, "peopleId": 262, "role": "Sunny" },
    { "id": 314, "seasonId": 137, "peopleId": 291, "role": "Ji Eun-tak" },
  
    { "id": 315, "seasonId": 138, "peopleId": 263, "role": "Shim Cheong" },
    { "id": 316, "seasonId": 138, "peopleId": 264, "role": "Heo Joon-jae" },
  
    { "id": 317, "seasonId": 139, "peopleId": 265, "role": "Ji Sun-woo" },
    { "id": 318, "seasonId": 139, "peopleId": 266, "role": "Lee Tae-oh" },
    { "id": 319, "seasonId": 139, "peopleId": 267, "role": "Yeo Da-kyung" },
  
    { "id": 320, "seasonId": 140, "peopleId": 268, "role": "Moon Gang-tae" },
    { "id": 321, "seasonId": 140, "peopleId": 269, "role": "Ko Moon-young" },
    { "id": 322, "seasonId": 140, "peopleId": 270, "role": "Moon Sang-tae" },
  
    { "id": 323, "seasonId": 141, "peopleId": 271, "role": "Choi Taek" },
    { "id": 324, "seasonId": 141, "peopleId": 272, "role": "Sung Bo-ra" },
    { "id": 325, "seasonId": 141, "peopleId": 273, "role": "Kim Jin-kyung" },
  
    { "id": 326, "seasonId": 142, "peopleId": 274, "role": "Han Bi-soo" },
    { "id": 327, "seasonId": 142, "peopleId": 275, "role": "Oh Joo-in" },
    { "id": 328, "seasonId": 142, "peopleId": 276, "role": "Jung Yoo-jin" },
  
    { "id": 329, "seasonId": 143, "peopleId": 277, "role": "Park Dong-hoon" },
    { "id": 330, "seasonId": 143, "peopleId": 278, "role": "Lee Ji-an" },
  
    { "id": 331, "seasonId": 144, "peopleId": 279, "role": "Na Hee-do" },
    { "id": 332, "seasonId": 144, "peopleId": 280, "role": "Baek Yi-jin" },
  
    { "id": 333, "seasonId": 145, "peopleId": 281, "role": "Woo Young-woo" },
    { "id": 334, "seasonId": 145, "peopleId": 282, "role": "Lee Jun-ho" },
  
    { "id": 335, "seasonId": 146, "peopleId": 283, "role": "Ban Ji-eum" },
    { "id": 336, "seasonId": 146, "peopleId": 284, "role": "Moon Seo-ha" },
  
    { "id": 337, "seasonId": 147, "peopleId": 285, "role": "Hong Du-sik" },
    { "id": 338, "seasonId": 147, "peopleId": 286, "role": "Yoon Hye-jin" },
  
    { "id": 339, "seasonId": 148, "peopleId": 287, "role": "Vincenzo Cassano" },
    { "id": 340, "seasonId": 148, "peopleId": 288, "role": "Hong Cha-young" },
    { "id": 341, "seasonId": 148, "peopleId": 289, "role": "Jang Joon-woo" },
  
    { "id": 342, "seasonId": 149, "peopleId": 292, "role": "Song Hye-jin" },
    { "id": 343, "seasonId": 149, "peopleId": 293, "role": "Seo Joon-hui" },
  
    { "id": 344, "seasonId": 150, "peopleId": 294, "role": "Jang Man-wol" },
    { "id": 345, "seasonId": 150, "peopleId": 295, "role": "Goo Chan-sung" },
  
    { "id": 346, "seasonId": 151, "peopleId": 296, "role": "Lee Ji-soo" },
    { "id": 347, "seasonId": 151, "peopleId": 297, "role": "Park In-gyu" },
  
    { "id": 348, "seasonId": 152, "peopleId": 298, "role": "Wang So" },
    { "id": 349, "seasonId": 152, "peopleId": 294, "role": "Hae Soo" }
  ]);
  await queryInterface.bulkInsert('MovieCrews', [
    { "seasonId": 1, "peopleId": 6, "job": "Đạo diễn" },
    { "seasonId": 2, "peopleId": 6, "job": "Đạo diễn" },
    { "seasonId": 3, "peopleId": 9, "job": "Đạo diễn" },
    { "seasonId": 4, "peopleId": 12, "job": "Đạo diễn" },
    { "seasonId": 5, "peopleId": 16, "job": "Đạo diễn" },
    { "seasonId": 6, "peopleId": 16, "job": "Đạo diễn" },
  
    { "seasonId": 7, "peopleId": 21, "job": "Đạo diễn" },
    { "seasonId": 8, "peopleId": 21, "job": "Đạo diễn" },
    { "seasonId": 9, "peopleId": 21, "job": "Đạo diễn" },
  
    { "seasonId": 10, "peopleId": 27, "job": "Đạo diễn" },
    { "seasonId": 11, "peopleId": 27, "job": "Đạo diễn" },
    { "seasonId": 12, "peopleId": 28, "job": "Đạo diễn" },
    { "seasonId": 13, "peopleId": 29, "job": "Đạo diễn" },
  
    { "seasonId": 14, "peopleId": 35, "job": "Đạo diễn" },
    { "seasonId": 15, "peopleId": 35, "job": "Đạo diễn" },
    { "seasonId": 16, "peopleId": 35, "job": "Đạo diễn" },
  
    { "seasonId": 17, "peopleId": 35, "job": "Đạo diễn" },
    { "seasonId": 18, "peopleId": 35, "job": "Đạo diễn" },
    { "seasonId": 19, "peopleId": 35, "job": "Đạo diễn" },
  
    { "seasonId": 20, "peopleId": 44, "job": "Đạo diễn" },
    { "seasonId": 21, "peopleId": 44, "job": "Đạo diễn" },
    { "seasonId": 22, "peopleId": 44, "job": "Đạo diễn" },
  
    { "seasonId": 23, "peopleId": 55, "job": "Đạo diễn" },
    { "seasonId": 24, "peopleId": 55, "job": "Đạo diễn" },
    { "seasonId": 25, "peopleId": 55, "job": "Đạo diễn" },
    { "seasonId": 26, "peopleId": 55, "job": "Đạo diễn" },
  
    { "seasonId": 27, "peopleId": 56, "job": "Đạo diễn" },
    { "seasonId": 28, "peopleId": 56, "job": "Đạo diễn" },
  
    { "seasonId": 29, "peopleId": 67, "job": "Đạo diễn" },
    { "seasonId": 30, "peopleId": 67, "job": "Đạo diễn" },
  
    { "seasonId": 31, "peopleId": 71, "job": "Đạo diễn" },
    { "seasonId": 32, "peopleId": 71, "job": "Đạo diễn" },
  
    { "seasonId": 33, "peopleId": 90, "job": "Đạo diễn" },
    { "seasonId": 34, "peopleId": 90, "job": "Đạo diễn" },
    { "seasonId": 35, "peopleId": 90, "job": "Đạo diễn" },
  
    { "seasonId": 36, "peopleId": 90, "job": "Đạo diễn" },
    { "seasonId": 37, "peopleId": 90, "job": "Đạo diễn" },
  
    { "seasonId": 38, "peopleId": 84, "job": "Đạo diễn" },
    { "seasonId": 39, "peopleId": 87, "job": "Đạo diễn" },
    { "seasonId": 40, "peopleId": 87, "job": "Đạo diễn" },
  
    { "seasonId": 41, "peopleId": 106, "job": "Đạo diễn" },
    { "seasonId": 42, "peopleId": 93, "job": "Đạo diễn" },
    { "seasonId": 43, "peopleId": 93, "job": "Đạo diễn" },
  
    { "seasonId": 44, "peopleId": 94, "job": "Đạo diễn" },
    { "seasonId": 45, "peopleId": 93, "job": "Đạo diễn" },
    { "seasonId": 46, "peopleId": 100, "job": "Đạo diễn" },
  
    { "seasonId": 47, "peopleId": 84, "job": "Đạo diễn" },
    { "seasonId": 48, "peopleId": 87, "job": "Đạo diễn" },
    { "seasonId": 49, "peopleId": 100, "job": "Đạo diễn" },
  
    { "seasonId": 50, "peopleId": 114, "job": "Đạo diễn" },
    { "seasonId": 51, "peopleId": 100, "job": "Đạo diễn" },
    { "seasonId": 52, "peopleId": 108, "job": "Đạo diễn" },
  
    { "seasonId": 53, "peopleId": 110, "job": "Đạo diễn" },
    { "seasonId": 54, "peopleId": 108, "job": "Đạo diễn" },
    { "seasonId": 55, "peopleId": 108, "job": "Đạo diễn" },
  
    { "seasonId": 56, "peopleId": 108, "job": "Đạo diễn" },
    { "seasonId": 57, "peopleId": 108, "job": "Đạo diễn" },
    { "seasonId": 58, "peopleId": 110, "job": "Đạo diễn" },
  
    { "seasonId": 59, "peopleId": 108, "job": "Đạo diễn" },
    { "seasonId": 60, "peopleId": 108, "job": "Đạo diễn" },
    { "seasonId": 61, "peopleId": 108, "job": "Đạo diễn" },
  
    { "seasonId": 62, "peopleId": 108, "job": "Đạo diễn" },
    { "seasonId": 63, "peopleId": 108, "job": "Đạo diễn" },
    { "seasonId": 64, "peopleId": 108, "job": "Đạo diễn" },
  
    { "seasonId": 65, "peopleId": 110, "job": "Đạo diễn" },
    { "seasonId": 66, "peopleId": 108, "job": "Đạo diễn" },
    { "seasonId": 67, "peopleId": 108, "job": "Đạo diễn" },
  
    { "seasonId": 68, "peopleId": 108, "job": "Đạo diễn" },
    { "seasonId": 69, "peopleId": 108, "job": "Đạo diễn" },
    { "seasonId": 70, "peopleId": 110, "job": "Đạo diễn" },
    
    { "seasonId": 71, "peopleId": 129, "job": "Đạo diễn" },
    { "seasonId": 72, "peopleId": 133, "job": "Đạo diễn" },
    { "seasonId": 73, "peopleId": 151, "job": "Đạo diễn" },
  
    { "seasonId": 74, "peopleId": 151, "job": "Đạo diễn" },
    { "seasonId": 75, "peopleId": 151, "job": "Đạo diễn" },
    { "seasonId": 76, "peopleId": 135, "job": "Đạo diễn" },
  
    { "seasonId": 77, "peopleId": 135, "job": "Đạo diễn" },
    { "seasonId": 78, "peopleId": 135, "job": "Đạo diễn" },
    { "seasonId": 79, "peopleId": 135, "job": "Đạo diễn" },
  
    { "seasonId": 80, "peopleId": 135, "job": "Đạo diễn" },
    { "seasonId": 81, "peopleId": 135, "job": "Đạo diễn" },
    { "seasonId": 82, "peopleId": 135, "job": "Đạo diễn" },
  
    { "seasonId": 83, "peopleId": 135, "job": "Đạo diễn" },
    { "seasonId": 84, "peopleId": 135, "job": "Đạo diễn" },
    { "seasonId": 85, "peopleId": 135, "job": "Đạo diễn" },
  
    { "seasonId": 86, "peopleId": 135, "job": "Đạo diễn" },
    { "seasonId": 87, "peopleId": 135, "job": "Đạo diễn" },
    { "seasonId": 88, "peopleId": 135, "job": "Đạo diễn" },
  
    { "seasonId": 89, "peopleId": 135, "job": "Đạo diễn" },
    { "seasonId": 90, "peopleId": 135, "job": "Đạo diễn" },
    { "seasonId": 91, "peopleId": 135, "job": "Đạo diễn" },
  
    { "seasonId": 92, "peopleId": 135, "job": "Đạo diễn" },
    { "seasonId": 93, "peopleId": 135, "job": "Đạo diễn" },
    { "seasonId": 94, "peopleId": 135, "job": "Đạo diễn" },
  
    { "seasonId": 95, "peopleId": 135, "job": "Đạo diễn" },
    { "seasonId": 96, "peopleId": 135, "job": "Đạo diễn" },
    { "seasonId": 97, "peopleId": 135, "job": "Đạo diễn" },
  
    { "seasonId": 98, "peopleId": 135, "job": "Đạo diễn" },
    { "seasonId": 99, "peopleId": 135, "job": "Đạo diễn" },
    { "seasonId": 100, "peopleId": 135, "job": "Đạo diễn" },
  
    { "seasonId": 101, "peopleId": 176, "job": "Đạo diễn" },
    { "seasonId": 102, "peopleId": 183, "job": "Đạo diễn" },
    { "seasonId": 103, "peopleId": 185, "job": "Đạo diễn" },
  
    { "seasonId": 104, "peopleId": 222, "job": "Đạo diễn" },
    { "seasonId": 105, "peopleId": 185, "job": "Đạo diễn" },
    { "seasonId": 106, "peopleId": 185, "job": "Đạo diễn" },
  
    { "seasonId": 107, "peopleId": 188, "job": "Đạo diễn" },
    { "seasonId": 108, "peopleId": 188, "job": "Đạo diễn" },
    { "seasonId": 109, "peopleId": 188, "job": "Đạo diễn" },
  
    { "seasonId": 110, "peopleId": 190, "job": "Đạo diễn" },
    { "seasonId": 111, "peopleId": 163, "job": "Đạo diễn" },
    { "seasonId": 112, "peopleId": 167, "job": "Đạo diễn" },
  
    { "seasonId": 113, "peopleId": 167, "job": "Đạo diễn" },
    { "seasonId": 114, "peopleId": 171, "job": "Đạo diễn" },
    { "seasonId": 115, "peopleId": 176, "job": "Đạo diễn" },
  
    { "seasonId": 116, "peopleId": 176, "job": "Đạo diễn" },
    { "seasonId": 117, "peopleId": 177, "job": "Đạo diễn" },
    { "seasonId": 118, "peopleId": 179, "job": "Đạo diễn" },
  
    { "seasonId": 119, "peopleId": 185, "job": "Đạo diễn" },
    { "seasonId": 120, "peopleId": 186, "job": "Đạo diễn" },
    { "seasonId": 121, "peopleId": 188, "job": "Đạo diễn" },
  
    { "seasonId": 122, "peopleId": 192, "job": "Đạo diễn" },
    { "seasonId": 123, "peopleId": 210, "job": "Đạo diễn" },
    { "seasonId": 124, "peopleId": 224, "job": "Đạo diễn" },
  
    { "seasonId": 125, "peopleId": 218, "job": "Đạo diễn" },
    { "seasonId": 126, "peopleId": 237, "job": "Đạo diễn" },
    { "seasonId": 127, "peopleId": 200, "job": "Đạo diễn" },
  
    { "seasonId": 128, "peopleId": 212, "job": "Đạo diễn" },
    { "seasonId": 129, "peopleId": 216, "job": "Đạo diễn" },
    { "seasonId": 130, "peopleId": 216, "job": "Đạo diễn" },
    
    { "seasonId": 131, "peopleId": 212, "job": "Đạo diễn" },
    { "seasonId": 132, "peopleId": 223, "job": "Đạo diễn" },
  
    { "seasonId": 133, "peopleId": 310, "job": "Đạo diễn" },
    { "seasonId": 134, "peopleId": 311, "job": "Đạo diễn" },
    { "seasonId": 135, "peopleId": 318, "job": "Đạo diễn" },
  
    { "seasonId": 136, "peopleId": 317, "job": "Đạo diễn" },
    { "seasonId": 137, "peopleId": 316, "job": "Đạo diễn" },
    { "seasonId": 138, "peopleId": 313, "job": "Đạo diễn" },
  
    { "seasonId": 139, "peopleId": 319, "job": "Đạo diễn" },
    { "seasonId": 140, "peopleId": 320, "job": "Đạo diễn" },
    { "seasonId": 141, "peopleId": 312, "job": "Đạo diễn" },
  
    { "seasonId": 142, "peopleId": 309, "job": "Đạo diễn" },
    { "seasonId": 143, "peopleId": 318, "job": "Đạo diễn" },
    { "seasonId": 144, "peopleId": 311, "job": "Đạo diễn" },
  
    { "seasonId": 145, "peopleId": 321, "job": "Đạo diễn" },
    { "seasonId": 146, "peopleId": 308, "job": "Đạo diễn" },
    { "seasonId": 147, "peopleId": 303, "job": "Đạo diễn" },
  
    { "seasonId": 148, "peopleId": 314, "job": "Đạo diễn" },
    { "seasonId": 149, "peopleId": 303, "job": "Đạo diễn" },
    { "seasonId": 150, "peopleId": 306, "job": "Đạo diễn" },
  
    { "seasonId": 151, "peopleId": 305, "job": "Đạo diễn" },
    { "seasonId": 152, "peopleId": 304, "job": "Đạo diễn" }
  ]);
  await queryInterface.bulkInsert('Ratings', [
    {
      "id": 1,
      "rating": 5.0,
      "userId": 7,
      "seasonId": 1,
      "createdAt": "2025-06-22 19:08:00",
      "updatedAt": "2025-06-22 19:08:00"
    },
    {
      "id": 2,
      "rating": 2.5,
      "userId": 6,
      "seasonId": 1,
      "createdAt": "2025-06-23 09:25:00",
      "updatedAt": "2025-06-23 09:25:00"
    },
    {
      "id": 3,
      "rating": 1.5,
      "userId": 10,
      "seasonId": 1,
      "createdAt": "2025-06-03 01:14:00",
      "updatedAt": "2025-06-03 01:14:00"
    },
    {
      "id": 4,
      "rating": 2.5,
      "userId": 3,
      "seasonId": 1,
      "createdAt": "2025-06-11 13:16:00",
      "updatedAt": "2025-06-11 13:16:00"
    },
    {
      "id": 5,
      "rating": 1.5,
      "userId": 4,
      "seasonId": 1,
      "createdAt": "2025-06-11 16:08:00",
      "updatedAt": "2025-06-11 16:08:00"
    },
    {
      "id": 6,
      "rating": 2.0,
      "userId": 9,
      "seasonId": 2,
      "createdAt": "2025-06-14 04:53:00",
      "updatedAt": "2025-06-14 04:53:00"
    },
    {
      "id": 7,
      "rating": 4.0,
      "userId": 10,
      "seasonId": 2,
      "createdAt": "2025-06-24 06:58:00",
      "updatedAt": "2025-06-24 06:58:00"
    },
    {
      "id": 8,
      "rating": 5.0,
      "userId": 6,
      "seasonId": 2,
      "createdAt": "2025-06-13 15:08:00",
      "updatedAt": "2025-06-13 15:08:00"
    },
    {
      "id": 9,
      "rating": 4.5,
      "userId": 1,
      "seasonId": 2,
      "createdAt": "2025-06-07 00:38:00",
      "updatedAt": "2025-06-07 00:38:00"
    },
    {
      "id": 10,
      "rating": 4.5,
      "userId": 4,
      "seasonId": 2,
      "createdAt": "2025-06-04 18:54:00",
      "updatedAt": "2025-06-04 18:54:00"
    },
    {
      "id": 11,
      "rating": 2.0,
      "userId": 6,
      "seasonId": 3,
      "createdAt": "2025-06-12 10:30:00",
      "updatedAt": "2025-06-12 10:30:00"
    },
    {
      "id": 12,
      "rating": 1.5,
      "userId": 8,
      "seasonId": 3,
      "createdAt": "2025-06-10 03:25:00",
      "updatedAt": "2025-06-10 03:25:00"
    },
    {
      "id": 13,
      "rating": 3.0,
      "userId": 1,
      "seasonId": 3,
      "createdAt": "2025-06-06 06:52:00",
      "updatedAt": "2025-06-06 06:52:00"
    },
    {
      "id": 14,
      "rating": 3.0,
      "userId": 5,
      "seasonId": 3,
      "createdAt": "2025-06-04 04:14:00",
      "updatedAt": "2025-06-04 04:14:00"
    },
    {
      "id": 15,
      "rating": 5.0,
      "userId": 4,
      "seasonId": 3,
      "createdAt": "2025-06-02 13:07:00",
      "updatedAt": "2025-06-02 13:07:00"
    },
    {
      "id": 16,
      "rating": 2.5,
      "userId": 7,
      "seasonId": 4,
      "createdAt": "2025-06-18 18:55:00",
      "updatedAt": "2025-06-18 18:55:00"
    },
    {
      "id": 17,
      "rating": 4.5,
      "userId": 5,
      "seasonId": 4,
      "createdAt": "2025-06-28 17:54:00",
      "updatedAt": "2025-06-28 17:54:00"
    },
    {
      "id": 18,
      "rating": 2.0,
      "userId": 2,
      "seasonId": 4,
      "createdAt": "2025-06-13 15:29:00",
      "updatedAt": "2025-06-13 15:29:00"
    },
    {
      "id": 19,
      "rating": 2.0,
      "userId": 6,
      "seasonId": 4,
      "createdAt": "2025-06-20 20:38:00",
      "updatedAt": "2025-06-20 20:38:00"
    },
    {
      "id": 20,
      "rating": 1.5,
      "userId": 4,
      "seasonId": 4,
      "createdAt": "2025-06-02 00:55:00",
      "updatedAt": "2025-06-02 00:55:00"
    },
    {
      "id": 21,
      "rating": 4.5,
      "userId": 8,
      "seasonId": 5,
      "createdAt": "2025-06-02 00:19:00",
      "updatedAt": "2025-06-02 00:19:00"
    },
    {
      "id": 22,
      "rating": 2.0,
      "userId": 4,
      "seasonId": 5,
      "createdAt": "2025-06-05 11:55:00",
      "updatedAt": "2025-06-05 11:55:00"
    },
    {
      "id": 23,
      "rating": 3.0,
      "userId": 6,
      "seasonId": 5,
      "createdAt": "2025-06-29 12:49:00",
      "updatedAt": "2025-06-29 12:49:00"
    },
    {
      "id": 24,
      "rating": 1.0,
      "userId": 1,
      "seasonId": 5,
      "createdAt": "2025-06-09 08:17:00",
      "updatedAt": "2025-06-09 08:17:00"
    },
    {
      "id": 25,
      "rating": 3.5,
      "userId": 3,
      "seasonId": 5,
      "createdAt": "2025-06-30 05:39:00",
      "updatedAt": "2025-06-30 05:39:00"
    },
    {
      "id": 26,
      "rating": 3.5,
      "userId": 5,
      "seasonId": 6,
      "createdAt": "2025-06-28 19:33:00",
      "updatedAt": "2025-06-28 19:33:00"
    },
    {
      "id": 27,
      "rating": 4.0,
      "userId": 8,
      "seasonId": 6,
      "createdAt": "2025-06-07 18:49:00",
      "updatedAt": "2025-06-07 18:49:00"
    },
    {
      "id": 28,
      "rating": 3.5,
      "userId": 7,
      "seasonId": 6,
      "createdAt": "2025-06-03 07:59:00",
      "updatedAt": "2025-06-03 07:59:00"
    },
    {
      "id": 29,
      "rating": 4.5,
      "userId": 4,
      "seasonId": 6,
      "createdAt": "2025-06-23 17:29:00",
      "updatedAt": "2025-06-23 17:29:00"
    },
    {
      "id": 30,
      "rating": 4.5,
      "userId": 10,
      "seasonId": 6,
      "createdAt": "2025-06-30 11:29:00",
      "updatedAt": "2025-06-30 11:29:00"
    },
    {
      "id": 31,
      "rating": 2.5,
      "userId": 6,
      "seasonId": 7,
      "createdAt": "2025-06-18 12:07:00",
      "updatedAt": "2025-06-18 12:07:00"
    },
    {
      "id": 32,
      "rating": 2.0,
      "userId": 9,
      "seasonId": 7,
      "createdAt": "2025-06-07 07:42:00",
      "updatedAt": "2025-06-07 07:42:00"
    },
    {
      "id": 33,
      "rating": 5.0,
      "userId": 4,
      "seasonId": 7,
      "createdAt": "2025-06-01 22:46:00",
      "updatedAt": "2025-06-01 22:46:00"
    },
    {
      "id": 34,
      "rating": 3.0,
      "userId": 10,
      "seasonId": 7,
      "createdAt": "2025-06-06 15:25:00",
      "updatedAt": "2025-06-06 15:25:00"
    },
    {
      "id": 35,
      "rating": 3.0,
      "userId": 2,
      "seasonId": 7,
      "createdAt": "2025-06-15 16:18:00",
      "updatedAt": "2025-06-15 16:18:00"
    },
    {
      "id": 36,
      "rating": 2.5,
      "userId": 1,
      "seasonId": 8,
      "createdAt": "2025-06-17 03:06:00",
      "updatedAt": "2025-06-17 03:06:00"
    },
    {
      "id": 37,
      "rating": 4.0,
      "userId": 5,
      "seasonId": 8,
      "createdAt": "2025-06-12 18:18:00",
      "updatedAt": "2025-06-12 18:18:00"
    },
    {
      "id": 38,
      "rating": 4.5,
      "userId": 2,
      "seasonId": 8,
      "createdAt": "2025-06-25 02:53:00",
      "updatedAt": "2025-06-25 02:53:00"
    },
    {
      "id": 39,
      "rating": 5.0,
      "userId": 10,
      "seasonId": 8,
      "createdAt": "2025-06-15 13:55:00",
      "updatedAt": "2025-06-15 13:55:00"
    },
    {
      "id": 40,
      "rating": 4.5,
      "userId": 3,
      "seasonId": 8,
      "createdAt": "2025-06-19 16:54:00",
      "updatedAt": "2025-06-19 16:54:00"
    },
    {
      "id": 41,
      "rating": 3.0,
      "userId": 6,
      "seasonId": 9,
      "createdAt": "2025-06-28 13:42:00",
      "updatedAt": "2025-06-28 13:42:00"
    },
    {
      "id": 42,
      "rating": 2.5,
      "userId": 8,
      "seasonId": 9,
      "createdAt": "2025-06-09 11:20:00",
      "updatedAt": "2025-06-09 11:20:00"
    },
    {
      "id": 43,
      "rating": 3.0,
      "userId": 4,
      "seasonId": 9,
      "createdAt": "2025-06-18 00:00:00",
      "updatedAt": "2025-06-18 00:00:00"
    },
    {
      "id": 44,
      "rating": 3.0,
      "userId": 3,
      "seasonId": 9,
      "createdAt": "2025-06-27 22:40:00",
      "updatedAt": "2025-06-27 22:40:00"
    },
    {
      "id": 45,
      "rating": 4.0,
      "userId": 7,
      "seasonId": 9,
      "createdAt": "2025-06-07 00:40:00",
      "updatedAt": "2025-06-07 00:40:00"
    },
    {
      "id": 46,
      "rating": 4.0,
      "userId": 10,
      "seasonId": 10,
      "createdAt": "2025-06-08 11:07:00",
      "updatedAt": "2025-06-08 11:07:00"
    },
    {
      "id": 47,
      "rating": 3.0,
      "userId": 6,
      "seasonId": 10,
      "createdAt": "2025-06-13 23:13:00",
      "updatedAt": "2025-06-13 23:13:00"
    },
    {
      "id": 48,
      "rating": 3.5,
      "userId": 4,
      "seasonId": 10,
      "createdAt": "2025-06-02 11:18:00",
      "updatedAt": "2025-06-02 11:18:00"
    },
    {
      "id": 49,
      "rating": 1.0,
      "userId": 9,
      "seasonId": 10,
      "createdAt": "2025-06-19 20:16:00",
      "updatedAt": "2025-06-19 20:16:00"
    },
    {
      "id": 50,
      "rating": 4.0,
      "userId": 1,
      "seasonId": 10,
      "createdAt": "2025-06-19 02:46:00",
      "updatedAt": "2025-06-19 02:46:00"
    },
    {
      "id": 51,
      "rating": 2.0,
      "userId": 8,
      "seasonId": 11,
      "createdAt": "2025-06-20 13:49:00",
      "updatedAt": "2025-06-20 13:49:00"
    },
    {
      "id": 52,
      "rating": 1.5,
      "userId": 9,
      "seasonId": 11,
      "createdAt": "2025-06-09 06:42:00",
      "updatedAt": "2025-06-09 06:42:00"
    },
    {
      "id": 53,
      "rating": 4.5,
      "userId": 1,
      "seasonId": 11,
      "createdAt": "2025-06-22 02:21:00",
      "updatedAt": "2025-06-22 02:21:00"
    },
    {
      "id": 54,
      "rating": 3.5,
      "userId": 2,
      "seasonId": 11,
      "createdAt": "2025-06-16 23:38:00",
      "updatedAt": "2025-06-16 23:38:00"
    },
    {
      "id": 55,
      "rating": 4.0,
      "userId": 5,
      "seasonId": 11,
      "createdAt": "2025-06-02 04:14:00",
      "updatedAt": "2025-06-02 04:14:00"
    },
    {
      "id": 56,
      "rating": 4.0,
      "userId": 9,
      "seasonId": 12,
      "createdAt": "2025-06-20 03:31:00",
      "updatedAt": "2025-06-20 03:31:00"
    },
    {
      "id": 57,
      "rating": 4.0,
      "userId": 2,
      "seasonId": 12,
      "createdAt": "2025-06-11 12:40:00",
      "updatedAt": "2025-06-11 12:40:00"
    },
    {
      "id": 58,
      "rating": 5.0,
      "userId": 8,
      "seasonId": 12,
      "createdAt": "2025-06-21 20:37:00",
      "updatedAt": "2025-06-21 20:37:00"
    },
    {
      "id": 59,
      "rating": 2.5,
      "userId": 3,
      "seasonId": 12,
      "createdAt": "2025-06-26 00:11:00",
      "updatedAt": "2025-06-26 00:11:00"
    },
    {
      "id": 60,
      "rating": 3.0,
      "userId": 10,
      "seasonId": 12,
      "createdAt": "2025-06-30 22:21:00",
      "updatedAt": "2025-06-30 22:21:00"
    },
    {
      "id": 61,
      "rating": 3.0,
      "userId": 2,
      "seasonId": 13,
      "createdAt": "2025-06-16 18:39:00",
      "updatedAt": "2025-06-16 18:39:00"
    },
    {
      "id": 62,
      "rating": 1.5,
      "userId": 3,
      "seasonId": 13,
      "createdAt": "2025-06-10 18:16:00",
      "updatedAt": "2025-06-10 18:16:00"
    },
    {
      "id": 63,
      "rating": 4.5,
      "userId": 1,
      "seasonId": 13,
      "createdAt": "2025-06-13 12:34:00",
      "updatedAt": "2025-06-13 12:34:00"
    },
    {
      "id": 64,
      "rating": 2.0,
      "userId": 6,
      "seasonId": 13,
      "createdAt": "2025-06-01 01:39:00",
      "updatedAt": "2025-06-01 01:39:00"
    },
    {
      "id": 65,
      "rating": 3.5,
      "userId": 9,
      "seasonId": 13,
      "createdAt": "2025-06-25 05:51:00",
      "updatedAt": "2025-06-25 05:51:00"
    },
    {
      "id": 66,
      "rating": 5.0,
      "userId": 6,
      "seasonId": 14,
      "createdAt": "2025-06-11 13:49:00",
      "updatedAt": "2025-06-11 13:49:00"
    },
    {
      "id": 67,
      "rating": 1.5,
      "userId": 5,
      "seasonId": 14,
      "createdAt": "2025-06-19 12:48:00",
      "updatedAt": "2025-06-19 12:48:00"
    },
    {
      "id": 68,
      "rating": 2.5,
      "userId": 10,
      "seasonId": 14,
      "createdAt": "2025-06-19 19:36:00",
      "updatedAt": "2025-06-19 19:36:00"
    },
    {
      "id": 69,
      "rating": 2.0,
      "userId": 2,
      "seasonId": 14,
      "createdAt": "2025-06-10 18:39:00",
      "updatedAt": "2025-06-10 18:39:00"
    },
    {
      "id": 70,
      "rating": 1.5,
      "userId": 7,
      "seasonId": 14,
      "createdAt": "2025-06-04 03:02:00",
      "updatedAt": "2025-06-04 03:02:00"
    },
    {
      "id": 71,
      "rating": 3.0,
      "userId": 9,
      "seasonId": 15,
      "createdAt": "2025-06-26 22:10:00",
      "updatedAt": "2025-06-26 22:10:00"
    },
    {
      "id": 72,
      "rating": 2.0,
      "userId": 2,
      "seasonId": 15,
      "createdAt": "2025-06-15 04:00:00",
      "updatedAt": "2025-06-15 04:00:00"
    },
    {
      "id": 73,
      "rating": 2.0,
      "userId": 7,
      "seasonId": 15,
      "createdAt": "2025-06-24 10:08:00",
      "updatedAt": "2025-06-24 10:08:00"
    },
    {
      "id": 74,
      "rating": 3.0,
      "userId": 10,
      "seasonId": 15,
      "createdAt": "2025-06-27 20:51:00",
      "updatedAt": "2025-06-27 20:51:00"
    },
    {
      "id": 75,
      "rating": 3.5,
      "userId": 6,
      "seasonId": 15,
      "createdAt": "2025-06-02 04:46:00",
      "updatedAt": "2025-06-02 04:46:00"
    },
    {
      "id": 76,
      "rating": 4.0,
      "userId": 5,
      "seasonId": 16,
      "createdAt": "2025-06-29 05:40:00",
      "updatedAt": "2025-06-29 05:40:00"
    },
    {
      "id": 77,
      "rating": 2.0,
      "userId": 9,
      "seasonId": 16,
      "createdAt": "2025-06-18 16:51:00",
      "updatedAt": "2025-06-18 16:51:00"
    },
    {
      "id": 78,
      "rating": 2.0,
      "userId": 3,
      "seasonId": 16,
      "createdAt": "2025-06-11 17:27:00",
      "updatedAt": "2025-06-11 17:27:00"
    },
    {
      "id": 79,
      "rating": 4.5,
      "userId": 2,
      "seasonId": 16,
      "createdAt": "2025-06-27 07:57:00",
      "updatedAt": "2025-06-27 07:57:00"
    },
    {
      "id": 80,
      "rating": 3.5,
      "userId": 10,
      "seasonId": 16,
      "createdAt": "2025-06-27 19:18:00",
      "updatedAt": "2025-06-27 19:18:00"
    },
    {
      "id": 81,
      "rating": 2.5,
      "userId": 10,
      "seasonId": 17,
      "createdAt": "2025-06-14 13:14:00",
      "updatedAt": "2025-06-14 13:14:00"
    },
    {
      "id": 82,
      "rating": 1.5,
      "userId": 3,
      "seasonId": 17,
      "createdAt": "2025-06-11 15:37:00",
      "updatedAt": "2025-06-11 15:37:00"
    },
    {
      "id": 83,
      "rating": 1.0,
      "userId": 9,
      "seasonId": 17,
      "createdAt": "2025-06-05 20:31:00",
      "updatedAt": "2025-06-05 20:31:00"
    },
    {
      "id": 84,
      "rating": 2.0,
      "userId": 4,
      "seasonId": 17,
      "createdAt": "2025-06-10 00:36:00",
      "updatedAt": "2025-06-10 00:36:00"
    },
    {
      "id": 85,
      "rating": 2.0,
      "userId": 8,
      "seasonId": 17,
      "createdAt": "2025-06-02 23:04:00",
      "updatedAt": "2025-06-02 23:04:00"
    },
    {
      "id": 86,
      "rating": 4.5,
      "userId": 5,
      "seasonId": 18,
      "createdAt": "2025-06-17 19:44:00",
      "updatedAt": "2025-06-17 19:44:00"
    },
    {
      "id": 87,
      "rating": 3.0,
      "userId": 9,
      "seasonId": 18,
      "createdAt": "2025-06-23 16:16:00",
      "updatedAt": "2025-06-23 16:16:00"
    },
    {
      "id": 88,
      "rating": 2.0,
      "userId": 8,
      "seasonId": 18,
      "createdAt": "2025-06-18 08:49:00",
      "updatedAt": "2025-06-18 08:49:00"
    },
    {
      "id": 89,
      "rating": 3.0,
      "userId": 7,
      "seasonId": 18,
      "createdAt": "2025-06-05 20:48:00",
      "updatedAt": "2025-06-05 20:48:00"
    },
    {
      "id": 90,
      "rating": 3.0,
      "userId": 3,
      "seasonId": 18,
      "createdAt": "2025-06-08 10:16:00",
      "updatedAt": "2025-06-08 10:16:00"
    },
    {
      "id": 91,
      "rating": 1.5,
      "userId": 6,
      "seasonId": 19,
      "createdAt": "2025-06-17 07:49:00",
      "updatedAt": "2025-06-17 07:49:00"
    },
    {
      "id": 92,
      "rating": 2.5,
      "userId": 9,
      "seasonId": 19,
      "createdAt": "2025-06-10 00:18:00",
      "updatedAt": "2025-06-10 00:18:00"
    },
    {
      "id": 93,
      "rating": 5.0,
      "userId": 2,
      "seasonId": 19,
      "createdAt": "2025-06-02 04:12:00",
      "updatedAt": "2025-06-02 04:12:00"
    },
    {
      "id": 94,
      "rating": 2.0,
      "userId": 5,
      "seasonId": 19,
      "createdAt": "2025-06-01 00:39:00",
      "updatedAt": "2025-06-01 00:39:00"
    },
    {
      "id": 95,
      "rating": 2.5,
      "userId": 10,
      "seasonId": 19,
      "createdAt": "2025-06-10 10:44:00",
      "updatedAt": "2025-06-10 10:44:00"
    },
    {
      "id": 96,
      "rating": 1.5,
      "userId": 4,
      "seasonId": 20,
      "createdAt": "2025-06-20 21:49:00",
      "updatedAt": "2025-06-20 21:49:00"
    },
    {
      "id": 97,
      "rating": 4.0,
      "userId": 2,
      "seasonId": 20,
      "createdAt": "2025-06-23 11:33:00",
      "updatedAt": "2025-06-23 11:33:00"
    },
    {
      "id": 98,
      "rating": 4.0,
      "userId": 6,
      "seasonId": 20,
      "createdAt": "2025-06-16 17:34:00",
      "updatedAt": "2025-06-16 17:34:00"
    },
    {
      "id": 99,
      "rating": 3.5,
      "userId": 5,
      "seasonId": 20,
      "createdAt": "2025-06-01 23:50:00",
      "updatedAt": "2025-06-01 23:50:00"
    },
    {
      "id": 100,
      "rating": 3.0,
      "userId": 10,
      "seasonId": 20,
      "createdAt": "2025-06-22 04:10:00",
      "updatedAt": "2025-06-22 04:10:00"
    },
    {
      "id": 101,
      "rating": 2.5,
      "userId": 4,
      "seasonId": 21,
      "createdAt": "2025-06-12 22:12:00",
      "updatedAt": "2025-06-12 22:12:00"
    },
    {
      "id": 102,
      "rating": 4.5,
      "userId": 5,
      "seasonId": 21,
      "createdAt": "2025-06-29 00:09:00",
      "updatedAt": "2025-06-29 00:09:00"
    },
    {
      "id": 103,
      "rating": 2.0,
      "userId": 8,
      "seasonId": 21,
      "createdAt": "2025-06-11 04:21:00",
      "updatedAt": "2025-06-11 04:21:00"
    },
    {
      "id": 104,
      "rating": 1.5,
      "userId": 3,
      "seasonId": 21,
      "createdAt": "2025-06-17 21:35:00",
      "updatedAt": "2025-06-17 21:35:00"
    },
    {
      "id": 105,
      "rating": 2.5,
      "userId": 10,
      "seasonId": 21,
      "createdAt": "2025-06-28 07:55:00",
      "updatedAt": "2025-06-28 07:55:00"
    },
    {
      "id": 106,
      "rating": 3.5,
      "userId": 1,
      "seasonId": 22,
      "createdAt": "2025-06-03 15:37:00",
      "updatedAt": "2025-06-03 15:37:00"
    },
    {
      "id": 107,
      "rating": 4.5,
      "userId": 9,
      "seasonId": 22,
      "createdAt": "2025-06-12 00:33:00",
      "updatedAt": "2025-06-12 00:33:00"
    },
    {
      "id": 108,
      "rating": 4.5,
      "userId": 8,
      "seasonId": 22,
      "createdAt": "2025-06-14 10:13:00",
      "updatedAt": "2025-06-14 10:13:00"
    },
    {
      "id": 109,
      "rating": 1.0,
      "userId": 7,
      "seasonId": 22,
      "createdAt": "2025-06-27 09:00:00",
      "updatedAt": "2025-06-27 09:00:00"
    },
    {
      "id": 110,
      "rating": 2.0,
      "userId": 3,
      "seasonId": 22,
      "createdAt": "2025-06-20 01:55:00",
      "updatedAt": "2025-06-20 01:55:00"
    },
    {
      "id": 111,
      "rating": 5.0,
      "userId": 5,
      "seasonId": 23,
      "createdAt": "2025-06-14 00:37:00",
      "updatedAt": "2025-06-14 00:37:00"
    },
    {
      "id": 112,
      "rating": 4.0,
      "userId": 2,
      "seasonId": 23,
      "createdAt": "2025-06-20 07:57:00",
      "updatedAt": "2025-06-20 07:57:00"
    },
    {
      "id": 113,
      "rating": 1.0,
      "userId": 7,
      "seasonId": 23,
      "createdAt": "2025-06-25 17:54:00",
      "updatedAt": "2025-06-25 17:54:00"
    },
    {
      "id": 114,
      "rating": 4.5,
      "userId": 8,
      "seasonId": 23,
      "createdAt": "2025-06-29 06:23:00",
      "updatedAt": "2025-06-29 06:23:00"
    },
    {
      "id": 115,
      "rating": 1.5,
      "userId": 1,
      "seasonId": 23,
      "createdAt": "2025-06-22 20:07:00",
      "updatedAt": "2025-06-22 20:07:00"
    },
    {
      "id": 116,
      "rating": 4.5,
      "userId": 7,
      "seasonId": 24,
      "createdAt": "2025-06-15 04:39:00",
      "updatedAt": "2025-06-15 04:39:00"
    },
    {
      "id": 117,
      "rating": 4.0,
      "userId": 8,
      "seasonId": 24,
      "createdAt": "2025-06-10 18:51:00",
      "updatedAt": "2025-06-10 18:51:00"
    },
    {
      "id": 118,
      "rating": 3.0,
      "userId": 3,
      "seasonId": 24,
      "createdAt": "2025-06-22 05:59:00",
      "updatedAt": "2025-06-22 05:59:00"
    },
    {
      "id": 119,
      "rating": 4.5,
      "userId": 9,
      "seasonId": 24,
      "createdAt": "2025-06-21 16:57:00",
      "updatedAt": "2025-06-21 16:57:00"
    },
    {
      "id": 120,
      "rating": 4.0,
      "userId": 10,
      "seasonId": 24,
      "createdAt": "2025-06-11 08:14:00",
      "updatedAt": "2025-06-11 08:14:00"
    },
    {
      "id": 121,
      "rating": 3.5,
      "userId": 8,
      "seasonId": 25,
      "createdAt": "2025-06-17 03:30:00",
      "updatedAt": "2025-06-17 03:30:00"
    },
    {
      "id": 122,
      "rating": 3.5,
      "userId": 2,
      "seasonId": 25,
      "createdAt": "2025-06-13 07:32:00",
      "updatedAt": "2025-06-13 07:32:00"
    },
    {
      "id": 123,
      "rating": 3.5,
      "userId": 5,
      "seasonId": 25,
      "createdAt": "2025-06-14 09:59:00",
      "updatedAt": "2025-06-14 09:59:00"
    },
    {
      "id": 124,
      "rating": 1.5,
      "userId": 3,
      "seasonId": 25,
      "createdAt": "2025-06-04 13:04:00",
      "updatedAt": "2025-06-04 13:04:00"
    },
    {
      "id": 125,
      "rating": 3.0,
      "userId": 1,
      "seasonId": 25,
      "createdAt": "2025-06-02 11:35:00",
      "updatedAt": "2025-06-02 11:35:00"
    },
    {
      "id": 126,
      "rating": 4.5,
      "userId": 8,
      "seasonId": 26,
      "createdAt": "2025-06-27 08:02:00",
      "updatedAt": "2025-06-27 08:02:00"
    },
    {
      "id": 127,
      "rating": 3.5,
      "userId": 6,
      "seasonId": 26,
      "createdAt": "2025-06-27 11:06:00",
      "updatedAt": "2025-06-27 11:06:00"
    },
    {
      "id": 128,
      "rating": 1.5,
      "userId": 5,
      "seasonId": 26,
      "createdAt": "2025-06-13 18:01:00",
      "updatedAt": "2025-06-13 18:01:00"
    },
    {
      "id": 129,
      "rating": 3.0,
      "userId": 10,
      "seasonId": 26,
      "createdAt": "2025-06-28 11:53:00",
      "updatedAt": "2025-06-28 11:53:00"
    },
    {
      "id": 130,
      "rating": 5.0,
      "userId": 7,
      "seasonId": 26,
      "createdAt": "2025-06-30 19:43:00",
      "updatedAt": "2025-06-30 19:43:00"
    },
    {
      "id": 131,
      "rating": 1.5,
      "userId": 4,
      "seasonId": 27,
      "createdAt": "2025-06-19 01:10:00",
      "updatedAt": "2025-06-19 01:10:00"
    },
    {
      "id": 132,
      "rating": 2.0,
      "userId": 10,
      "seasonId": 27,
      "createdAt": "2025-06-20 07:23:00",
      "updatedAt": "2025-06-20 07:23:00"
    },
    {
      "id": 133,
      "rating": 2.5,
      "userId": 1,
      "seasonId": 27,
      "createdAt": "2025-06-24 17:56:00",
      "updatedAt": "2025-06-24 17:56:00"
    },
    {
      "id": 134,
      "rating": 1.0,
      "userId": 9,
      "seasonId": 27,
      "createdAt": "2025-06-15 11:15:00",
      "updatedAt": "2025-06-15 11:15:00"
    },
    {
      "id": 135,
      "rating": 3.5,
      "userId": 2,
      "seasonId": 27,
      "createdAt": "2025-06-01 09:42:00",
      "updatedAt": "2025-06-01 09:42:00"
    },
    {
      "id": 136,
      "rating": 1.5,
      "userId": 7,
      "seasonId": 28,
      "createdAt": "2025-06-11 13:26:00",
      "updatedAt": "2025-06-11 13:26:00"
    },
    {
      "id": 137,
      "rating": 4.0,
      "userId": 8,
      "seasonId": 28,
      "createdAt": "2025-06-10 20:40:00",
      "updatedAt": "2025-06-10 20:40:00"
    },
    {
      "id": 138,
      "rating": 2.5,
      "userId": 10,
      "seasonId": 28,
      "createdAt": "2025-06-05 09:13:00",
      "updatedAt": "2025-06-05 09:13:00"
    },
    {
      "id": 139,
      "rating": 3.0,
      "userId": 5,
      "seasonId": 28,
      "createdAt": "2025-06-18 18:23:00",
      "updatedAt": "2025-06-18 18:23:00"
    },
    {
      "id": 140,
      "rating": 4.0,
      "userId": 2,
      "seasonId": 28,
      "createdAt": "2025-06-01 08:36:00",
      "updatedAt": "2025-06-01 08:36:00"
    },
    {
      "id": 141,
      "rating": 1.5,
      "userId": 4,
      "seasonId": 29,
      "createdAt": "2025-06-04 16:09:00",
      "updatedAt": "2025-06-04 16:09:00"
    },
    {
      "id": 142,
      "rating": 2.5,
      "userId": 10,
      "seasonId": 29,
      "createdAt": "2025-06-06 23:05:00",
      "updatedAt": "2025-06-06 23:05:00"
    },
    {
      "id": 143,
      "rating": 4.5,
      "userId": 1,
      "seasonId": 29,
      "createdAt": "2025-06-17 00:58:00",
      "updatedAt": "2025-06-17 00:58:00"
    },
    {
      "id": 144,
      "rating": 3.0,
      "userId": 5,
      "seasonId": 29,
      "createdAt": "2025-06-27 23:09:00",
      "updatedAt": "2025-06-27 23:09:00"
    },
    {
      "id": 145,
      "rating": 3.0,
      "userId": 8,
      "seasonId": 29,
      "createdAt": "2025-06-19 09:11:00",
      "updatedAt": "2025-06-19 09:11:00"
    },
    {
      "id": 146,
      "rating": 1.5,
      "userId": 4,
      "seasonId": 30,
      "createdAt": "2025-06-24 19:52:00",
      "updatedAt": "2025-06-24 19:52:00"
    },
    {
      "id": 147,
      "rating": 1.0,
      "userId": 8,
      "seasonId": 30,
      "createdAt": "2025-06-02 13:56:00",
      "updatedAt": "2025-06-02 13:56:00"
    },
    {
      "id": 148,
      "rating": 3.5,
      "userId": 6,
      "seasonId": 30,
      "createdAt": "2025-06-07 18:49:00",
      "updatedAt": "2025-06-07 18:49:00"
    },
    {
      "id": 149,
      "rating": 3.5,
      "userId": 1,
      "seasonId": 30,
      "createdAt": "2025-06-26 13:04:00",
      "updatedAt": "2025-06-26 13:04:00"
    },
    {
      "id": 150,
      "rating": 3.5,
      "userId": 9,
      "seasonId": 30,
      "createdAt": "2025-06-05 20:46:00",
      "updatedAt": "2025-06-05 20:46:00"
    },
    {
      "id": 151,
      "userId": 5,
      "seasonId": 31,
      "rating": 7.1,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 152,
      "userId": 6,
      "seasonId": 31,
      "rating": 6.3,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 153,
      "userId": 9,
      "seasonId": 31,
      "rating": 7.9,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 154,
      "userId": 8,
      "seasonId": 31,
      "rating": 7.4,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 155,
      "userId": 6,
      "seasonId": 31,
      "rating": 9.9,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 156,
      "userId": 5,
      "seasonId": 32,
      "rating": 8.9,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 157,
      "userId": 6,
      "seasonId": 32,
      "rating": 6.2,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 158,
      "userId": 3,
      "seasonId": 32,
      "rating": 7.6,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 159,
      "userId": 6,
      "seasonId": 32,
      "rating": 6.3,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 160,
      "userId": 5,
      "seasonId": 32,
      "rating": 7.2,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 161,
      "userId": 3,
      "seasonId": 33,
      "rating": 7.6,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 162,
      "userId": 9,
      "seasonId": 33,
      "rating": 7.4,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 163,
      "userId": 5,
      "seasonId": 33,
      "rating": 9.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 164,
      "userId": 1,
      "seasonId": 33,
      "rating": 8.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 165,
      "userId": 6,
      "seasonId": 33,
      "rating": 8.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 166,
      "userId": 9,
      "seasonId": 34,
      "rating": 7.1,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 167,
      "userId": 3,
      "seasonId": 34,
      "rating": 6.3,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 168,
      "userId": 5,
      "seasonId": 34,
      "rating": 9.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 169,
      "userId": 5,
      "seasonId": 34,
      "rating": 9.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 170,
      "userId": 10,
      "seasonId": 34,
      "rating": 9.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 171,
      "userId": 6,
      "seasonId": 35,
      "rating": 6.5,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 172,
      "userId": 1,
      "seasonId": 35,
      "rating": 7.4,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 173,
      "userId": 8,
      "seasonId": 35,
      "rating": 9.2,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 174,
      "userId": 8,
      "seasonId": 35,
      "rating": 7.2,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 175,
      "userId": 8,
      "seasonId": 35,
      "rating": 7.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 176,
      "userId": 4,
      "seasonId": 36,
      "rating": 6.9,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 177,
      "userId": 4,
      "seasonId": 36,
      "rating": 7.5,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 178,
      "userId": 2,
      "seasonId": 36,
      "rating": 6.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 179,
      "userId": 8,
      "seasonId": 36,
      "rating": 9.3,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 180,
      "userId": 4,
      "seasonId": 36,
      "rating": 8.3,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 181,
      "userId": 8,
      "seasonId": 37,
      "rating": 9.2,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 182,
      "userId": 10,
      "seasonId": 37,
      "rating": 9.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 183,
      "userId": 9,
      "seasonId": 37,
      "rating": 7.3,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 184,
      "userId": 2,
      "seasonId": 37,
      "rating": 6.5,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 185,
      "userId": 2,
      "seasonId": 37,
      "rating": 9.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 186,
      "userId": 6,
      "seasonId": 38,
      "rating": 6.2,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 187,
      "userId": 6,
      "seasonId": 38,
      "rating": 8.4,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 188,
      "userId": 3,
      "seasonId": 38,
      "rating": 9.5,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 189,
      "userId": 1,
      "seasonId": 38,
      "rating": 7.2,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 190,
      "userId": 10,
      "seasonId": 38,
      "rating": 6.9,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 191,
      "userId": 5,
      "seasonId": 39,
      "rating": 7.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 192,
      "userId": 4,
      "seasonId": 39,
      "rating": 9.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 193,
      "userId": 1,
      "seasonId": 39,
      "rating": 8.2,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 194,
      "userId": 3,
      "seasonId": 39,
      "rating": 7.6,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 195,
      "userId": 9,
      "seasonId": 39,
      "rating": 8.4,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 196,
      "userId": 6,
      "seasonId": 40,
      "rating": 6.4,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 197,
      "userId": 4,
      "seasonId": 40,
      "rating": 7.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 198,
      "userId": 8,
      "seasonId": 40,
      "rating": 7.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 199,
      "userId": 10,
      "seasonId": 40,
      "rating": 7.4,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 200,
      "userId": 7,
      "seasonId": 40,
      "rating": 9.6,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 201,
      "userId": 7,
      "seasonId": 41,
      "rating": 7.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 202,
      "userId": 2,
      "seasonId": 41,
      "rating": 8.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 203,
      "userId": 8,
      "seasonId": 41,
      "rating": 9.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 204,
      "userId": 10,
      "seasonId": 41,
      "rating": 8.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 205,
      "userId": 9,
      "seasonId": 41,
      "rating": 7.4,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 206,
      "userId": 5,
      "seasonId": 42,
      "rating": 7.6,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 207,
      "userId": 3,
      "seasonId": 42,
      "rating": 7.9,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 208,
      "userId": 4,
      "seasonId": 42,
      "rating": 9.4,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 209,
      "userId": 10,
      "seasonId": 42,
      "rating": 9.4,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 210,
      "userId": 3,
      "seasonId": 42,
      "rating": 9.5,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 211,
      "userId": 9,
      "seasonId": 43,
      "rating": 7.3,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 212,
      "userId": 2,
      "seasonId": 43,
      "rating": 6.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 213,
      "userId": 6,
      "seasonId": 43,
      "rating": 9.2,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 214,
      "userId": 2,
      "seasonId": 43,
      "rating": 6.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 215,
      "userId": 1,
      "seasonId": 43,
      "rating": 6.6,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 216,
      "userId": 1,
      "seasonId": 44,
      "rating": 7.6,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 217,
      "userId": 10,
      "seasonId": 44,
      "rating": 7.9,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 218,
      "userId": 7,
      "seasonId": 44,
      "rating": 7.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 219,
      "userId": 7,
      "seasonId": 44,
      "rating": 8.1,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 220,
      "userId": 4,
      "seasonId": 44,
      "rating": 8.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 221,
      "userId": 3,
      "seasonId": 45,
      "rating": 8.9,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 222,
      "userId": 5,
      "seasonId": 45,
      "rating": 6.9,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 223,
      "userId": 6,
      "seasonId": 45,
      "rating": 9.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 224,
      "userId": 6,
      "seasonId": 45,
      "rating": 6.6,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 225,
      "userId": 5,
      "seasonId": 45,
      "rating": 9.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 226,
      "userId": 7,
      "seasonId": 46,
      "rating": 8.4,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 227,
      "userId": 6,
      "seasonId": 46,
      "rating": 8.4,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 228,
      "userId": 5,
      "seasonId": 46,
      "rating": 9.1,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 229,
      "userId": 2,
      "seasonId": 46,
      "rating": 9.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 230,
      "userId": 3,
      "seasonId": 46,
      "rating": 8.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 231,
      "userId": 9,
      "seasonId": 47,
      "rating": 6.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 232,
      "userId": 3,
      "seasonId": 47,
      "rating": 6.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 233,
      "userId": 1,
      "seasonId": 47,
      "rating": 8.9,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 234,
      "userId": 5,
      "seasonId": 47,
      "rating": 6.4,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 235,
      "userId": 2,
      "seasonId": 47,
      "rating": 8.3,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 236,
      "userId": 2,
      "seasonId": 48,
      "rating": 7.2,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 237,
      "userId": 9,
      "seasonId": 48,
      "rating": 9.3,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 238,
      "userId": 4,
      "seasonId": 48,
      "rating": 6.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 239,
      "userId": 7,
      "seasonId": 48,
      "rating": 6.5,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 240,
      "userId": 4,
      "seasonId": 48,
      "rating": 9.2,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 241,
      "userId": 1,
      "seasonId": 49,
      "rating": 9.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 242,
      "userId": 3,
      "seasonId": 49,
      "rating": 10.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 243,
      "userId": 1,
      "seasonId": 49,
      "rating": 8.5,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 244,
      "userId": 6,
      "seasonId": 49,
      "rating": 8.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 245,
      "userId": 10,
      "seasonId": 49,
      "rating": 6.4,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 246,
      "userId": 4,
      "seasonId": 50,
      "rating": 9.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 247,
      "userId": 1,
      "seasonId": 50,
      "rating": 9.3,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 248,
      "userId": 4,
      "seasonId": 50,
      "rating": 7.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 249,
      "userId": 5,
      "seasonId": 50,
      "rating": 9.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 250,
      "userId": 7,
      "seasonId": 50,
      "rating": 7.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 251,
      "userId": 3,
      "seasonId": 51,
      "rating": 7.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 252,
      "userId": 8,
      "seasonId": 51,
      "rating": 7.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 253,
      "userId": 1,
      "seasonId": 51,
      "rating": 8.1,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 254,
      "userId": 1,
      "seasonId": 51,
      "rating": 9.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 255,
      "userId": 7,
      "seasonId": 51,
      "rating": 9.2,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 256,
      "userId": 6,
      "seasonId": 52,
      "rating": 6.5,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 257,
      "userId": 1,
      "seasonId": 52,
      "rating": 6.3,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 258,
      "userId": 8,
      "seasonId": 52,
      "rating": 7.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 259,
      "userId": 9,
      "seasonId": 52,
      "rating": 10.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 260,
      "userId": 6,
      "seasonId": 52,
      "rating": 8.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 261,
      "userId": 4,
      "seasonId": 53,
      "rating": 7.2,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 262,
      "userId": 4,
      "seasonId": 53,
      "rating": 9.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 263,
      "userId": 7,
      "seasonId": 53,
      "rating": 7.3,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 264,
      "userId": 1,
      "seasonId": 53,
      "rating": 7.6,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 265,
      "userId": 3,
      "seasonId": 53,
      "rating": 9.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 266,
      "userId": 1,
      "seasonId": 54,
      "rating": 7.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 267,
      "userId": 5,
      "seasonId": 54,
      "rating": 6.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 268,
      "userId": 3,
      "seasonId": 54,
      "rating": 7.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 269,
      "userId": 10,
      "seasonId": 54,
      "rating": 9.6,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 270,
      "userId": 1,
      "seasonId": 54,
      "rating": 8.9,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 271,
      "userId": 9,
      "seasonId": 55,
      "rating": 8.6,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 272,
      "userId": 1,
      "seasonId": 55,
      "rating": 7.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 273,
      "userId": 3,
      "seasonId": 55,
      "rating": 9.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 274,
      "userId": 7,
      "seasonId": 55,
      "rating": 7.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 275,
      "userId": 3,
      "seasonId": 55,
      "rating": 6.1,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 276,
      "userId": 10,
      "seasonId": 56,
      "rating": 8.2,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 277,
      "userId": 2,
      "seasonId": 56,
      "rating": 8.2,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 278,
      "userId": 7,
      "seasonId": 56,
      "rating": 6.2,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 279,
      "userId": 9,
      "seasonId": 56,
      "rating": 6.3,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 280,
      "userId": 7,
      "seasonId": 56,
      "rating": 8.4,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 281,
      "userId": 4,
      "seasonId": 57,
      "rating": 7.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 282,
      "userId": 1,
      "seasonId": 57,
      "rating": 8.1,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 283,
      "userId": 8,
      "seasonId": 57,
      "rating": 9.9,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 284,
      "userId": 5,
      "seasonId": 57,
      "rating": 8.4,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 285,
      "userId": 10,
      "seasonId": 57,
      "rating": 8.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 286,
      "userId": 1,
      "seasonId": 58,
      "rating": 9.6,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 287,
      "userId": 5,
      "seasonId": 58,
      "rating": 9.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 288,
      "userId": 4,
      "seasonId": 58,
      "rating": 6.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 289,
      "userId": 2,
      "seasonId": 58,
      "rating": 9.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 290,
      "userId": 9,
      "seasonId": 58,
      "rating": 9.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 291,
      "userId": 5,
      "seasonId": 59,
      "rating": 9.3,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 292,
      "userId": 7,
      "seasonId": 59,
      "rating": 6.9,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 293,
      "userId": 7,
      "seasonId": 59,
      "rating": 8.6,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 294,
      "userId": 8,
      "seasonId": 59,
      "rating": 7.1,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 295,
      "userId": 1,
      "seasonId": 59,
      "rating": 8.7,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 296,
      "userId": 8,
      "seasonId": 60,
      "rating": 8.1,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 297,
      "userId": 8,
      "seasonId": 60,
      "rating": 6.8,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 298,
      "userId": 9,
      "seasonId": 60,
      "rating": 7.1,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 299,
      "userId": 1,
      "seasonId": 60,
      "rating": 6.9,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 300,
      "userId": 5,
      "seasonId": 60,
      "rating": 10.0,
      "createdAt": "2025-06-23 07:47:23",
      "updatedAt": "2025-06-23 07:47:23"
    },
    {
      "id": 301,
      "userId": 7,
      "seasonId": 61,
      "rating": 6.1,
      "createdAt": "2025-06-11 16:42:32",
      "updatedAt": "2025-06-11 16:42:32"
    },
    {
      "id": 302,
      "userId": 5,
      "seasonId": 61,
      "rating": 6.4,
      "createdAt": "2025-05-31 16:20:49",
      "updatedAt": "2025-05-31 16:20:49"
    },
    {
      "id": 303,
      "userId": 10,
      "seasonId": 61,
      "rating": 8.9,
      "createdAt": "2025-05-29 20:15:25",
      "updatedAt": "2025-05-29 20:15:25"
    },
    {
      "id": 304,
      "userId": 6,
      "seasonId": 61,
      "rating": 8.1,
      "createdAt": "2025-06-20 13:26:55",
      "updatedAt": "2025-06-20 13:26:55"
    },
    {
      "id": 305,
      "userId": 8,
      "seasonId": 61,
      "rating": 8.4,
      "createdAt": "2025-06-01 16:44:19",
      "updatedAt": "2025-06-01 16:44:19"
    },
    {
      "id": 306,
      "userId": 1,
      "seasonId": 62,
      "rating": 8.6,
      "createdAt": "2025-06-04 10:42:19",
      "updatedAt": "2025-06-04 10:42:19"
    },
    {
      "id": 307,
      "userId": 9,
      "seasonId": 62,
      "rating": 5.7,
      "createdAt": "2025-06-12 10:03:21",
      "updatedAt": "2025-06-12 10:03:21"
    },
    {
      "id": 308,
      "userId": 5,
      "seasonId": 62,
      "rating": 9.8,
      "createdAt": "2025-06-05 11:26:24",
      "updatedAt": "2025-06-05 11:26:24"
    },
    {
      "id": 309,
      "userId": 3,
      "seasonId": 62,
      "rating": 7.3,
      "createdAt": "2025-06-04 06:31:13",
      "updatedAt": "2025-06-04 06:31:13"
    },
    {
      "id": 310,
      "userId": 7,
      "seasonId": 62,
      "rating": 8.4,
      "createdAt": "2025-06-11 20:35:41",
      "updatedAt": "2025-06-11 20:35:41"
    },
    {
      "id": 311,
      "userId": 1,
      "seasonId": 63,
      "rating": 8.9,
      "createdAt": "2025-06-19 00:08:43",
      "updatedAt": "2025-06-19 00:08:43"
    },
    {
      "id": 312,
      "userId": 2,
      "seasonId": 63,
      "rating": 5.9,
      "createdAt": "2025-06-05 04:09:34",
      "updatedAt": "2025-06-05 04:09:34"
    },
    {
      "id": 313,
      "userId": 4,
      "seasonId": 63,
      "rating": 9.0,
      "createdAt": "2025-06-15 18:23:17",
      "updatedAt": "2025-06-15 18:23:17"
    },
    {
      "id": 314,
      "userId": 9,
      "seasonId": 63,
      "rating": 7.6,
      "createdAt": "2025-06-07 17:16:00",
      "updatedAt": "2025-06-07 17:16:00"
    },
    {
      "id": 315,
      "userId": 6,
      "seasonId": 63,
      "rating": 9.4,
      "createdAt": "2025-06-12 18:36:55",
      "updatedAt": "2025-06-12 18:36:55"
    },
    {
      "id": 316,
      "userId": 9,
      "seasonId": 64,
      "rating": 8.2,
      "createdAt": "2025-06-17 14:44:38",
      "updatedAt": "2025-06-17 14:44:38"
    },
    {
      "id": 317,
      "userId": 7,
      "seasonId": 64,
      "rating": 9.2,
      "createdAt": "2025-06-02 19:56:45",
      "updatedAt": "2025-06-02 19:56:45"
    },
    {
      "id": 318,
      "userId": 6,
      "seasonId": 64,
      "rating": 5.0,
      "createdAt": "2025-05-25 13:03:03",
      "updatedAt": "2025-05-25 13:03:03"
    },
    {
      "id": 319,
      "userId": 8,
      "seasonId": 64,
      "rating": 5.8,
      "createdAt": "2025-06-16 14:23:53",
      "updatedAt": "2025-06-16 14:23:53"
    },
    {
      "id": 320,
      "userId": 1,
      "seasonId": 64,
      "rating": 9.1,
      "createdAt": "2025-06-03 16:25:04",
      "updatedAt": "2025-06-03 16:25:04"
    },
    {
      "id": 321,
      "userId": 7,
      "seasonId": 65,
      "rating": 7.8,
      "createdAt": "2025-06-16 21:54:48",
      "updatedAt": "2025-06-16 21:54:48"
    },
    {
      "id": 322,
      "userId": 4,
      "seasonId": 65,
      "rating": 6.1,
      "createdAt": "2025-06-10 08:57:18",
      "updatedAt": "2025-06-10 08:57:18"
    },
    {
      "id": 323,
      "userId": 3,
      "seasonId": 65,
      "rating": 6.1,
      "createdAt": "2025-06-16 13:19:17",
      "updatedAt": "2025-06-16 13:19:17"
    },
    {
      "id": 324,
      "userId": 8,
      "seasonId": 65,
      "rating": 6.7,
      "createdAt": "2025-06-09 02:57:36",
      "updatedAt": "2025-06-09 02:57:36"
    },
    {
      "id": 325,
      "userId": 5,
      "seasonId": 65,
      "rating": 6.7,
      "createdAt": "2025-06-07 09:00:42",
      "updatedAt": "2025-06-07 09:00:42"
    },
    {
      "id": 326,
      "userId": 10,
      "seasonId": 66,
      "rating": 6.4,
      "createdAt": "2025-06-07 14:46:37",
      "updatedAt": "2025-06-07 14:46:37"
    },
    {
      "id": 327,
      "userId": 5,
      "seasonId": 66,
      "rating": 8.2,
      "createdAt": "2025-05-28 19:37:14",
      "updatedAt": "2025-05-28 19:37:14"
    },
    {
      "id": 328,
      "userId": 9,
      "seasonId": 66,
      "rating": 6.4,
      "createdAt": "2025-06-23 18:39:13",
      "updatedAt": "2025-06-23 18:39:13"
    },
    {
      "id": 329,
      "userId": 8,
      "seasonId": 66,
      "rating": 5.4,
      "createdAt": "2025-06-10 13:39:12",
      "updatedAt": "2025-06-10 13:39:12"
    },
    {
      "id": 330,
      "userId": 3,
      "seasonId": 66,
      "rating": 8.2,
      "createdAt": "2025-05-25 11:46:48",
      "updatedAt": "2025-05-25 11:46:48"
    },
    {
      "id": 331,
      "userId": 6,
      "seasonId": 67,
      "rating": 9.8,
      "createdAt": "2025-05-25 17:11:45",
      "updatedAt": "2025-05-25 17:11:45"
    },
    {
      "id": 332,
      "userId": 3,
      "seasonId": 67,
      "rating": 5.2,
      "createdAt": "2025-06-16 19:52:28",
      "updatedAt": "2025-06-16 19:52:28"
    },
    {
      "id": 333,
      "userId": 2,
      "seasonId": 67,
      "rating": 7.3,
      "createdAt": "2025-06-08 04:45:17",
      "updatedAt": "2025-06-08 04:45:17"
    },
    {
      "id": 334,
      "userId": 4,
      "seasonId": 67,
      "rating": 7.2,
      "createdAt": "2025-06-17 05:39:44",
      "updatedAt": "2025-06-17 05:39:44"
    },
    {
      "id": 335,
      "userId": 5,
      "seasonId": 67,
      "rating": 7.1,
      "createdAt": "2025-06-11 08:57:57",
      "updatedAt": "2025-06-11 08:57:57"
    },
    {
      "id": 336,
      "userId": 2,
      "seasonId": 68,
      "rating": 9.4,
      "createdAt": "2025-05-29 23:27:46",
      "updatedAt": "2025-05-29 23:27:46"
    },
    {
      "id": 337,
      "userId": 3,
      "seasonId": 68,
      "rating": 7.7,
      "createdAt": "2025-05-28 15:36:38",
      "updatedAt": "2025-05-28 15:36:38"
    },
    {
      "id": 338,
      "userId": 7,
      "seasonId": 68,
      "rating": 7.9,
      "createdAt": "2025-06-20 15:13:19",
      "updatedAt": "2025-06-20 15:13:19"
    },
    {
      "id": 339,
      "userId": 6,
      "seasonId": 68,
      "rating": 5.9,
      "createdAt": "2025-06-19 10:24:12",
      "updatedAt": "2025-06-19 10:24:12"
    },
    {
      "id": 340,
      "userId": 5,
      "seasonId": 68,
      "rating": 5.0,
      "createdAt": "2025-05-30 21:33:45",
      "updatedAt": "2025-05-30 21:33:45"
    },
    {
      "id": 341,
      "userId": 7,
      "seasonId": 69,
      "rating": 6.5,
      "createdAt": "2025-05-24 14:45:40",
      "updatedAt": "2025-05-24 14:45:40"
    },
    {
      "id": 342,
      "userId": 1,
      "seasonId": 69,
      "rating": 9.1,
      "createdAt": "2025-06-12 05:39:40",
      "updatedAt": "2025-06-12 05:39:40"
    },
    {
      "id": 343,
      "userId": 2,
      "seasonId": 69,
      "rating": 6.6,
      "createdAt": "2025-06-18 20:52:10",
      "updatedAt": "2025-06-18 20:52:10"
    },
    {
      "id": 344,
      "userId": 8,
      "seasonId": 69,
      "rating": 9.5,
      "createdAt": "2025-05-30 23:18:30",
      "updatedAt": "2025-05-30 23:18:30"
    },
    {
      "id": 345,
      "userId": 4,
      "seasonId": 69,
      "rating": 7.3,
      "createdAt": "2025-06-14 04:32:54",
      "updatedAt": "2025-06-14 04:32:54"
    },
    {
      "id": 346,
      "userId": 5,
      "seasonId": 70,
      "rating": 5.1,
      "createdAt": "2025-05-26 11:28:38",
      "updatedAt": "2025-05-26 11:28:38"
    },
    {
      "id": 347,
      "userId": 9,
      "seasonId": 70,
      "rating": 8.3,
      "createdAt": "2025-06-11 15:14:08",
      "updatedAt": "2025-06-11 15:14:08"
    },
    {
      "id": 348,
      "userId": 1,
      "seasonId": 70,
      "rating": 6.1,
      "createdAt": "2025-06-10 12:22:44",
      "updatedAt": "2025-06-10 12:22:44"
    },
    {
      "id": 349,
      "userId": 8,
      "seasonId": 70,
      "rating": 6.2,
      "createdAt": "2025-06-09 15:19:51",
      "updatedAt": "2025-06-09 15:19:51"
    },
    {
      "id": 350,
      "userId": 3,
      "seasonId": 70,
      "rating": 9.5,
      "createdAt": "2025-06-14 10:22:38",
      "updatedAt": "2025-06-14 10:22:38"
    },
    {
      "id": 351,
      "userId": 9,
      "seasonId": 71,
      "rating": 9.4,
      "createdAt": "2025-06-04 15:08:01",
      "updatedAt": "2025-06-04 15:08:01"
    },
    {
      "id": 352,
      "userId": 1,
      "seasonId": 71,
      "rating": 6.1,
      "createdAt": "2025-06-22 09:20:37",
      "updatedAt": "2025-06-22 09:20:37"
    },
    {
      "id": 353,
      "userId": 2,
      "seasonId": 71,
      "rating": 6.6,
      "createdAt": "2025-05-30 20:57:37",
      "updatedAt": "2025-05-30 20:57:37"
    },
    {
      "id": 354,
      "userId": 3,
      "seasonId": 71,
      "rating": 6.9,
      "createdAt": "2025-06-23 20:40:36",
      "updatedAt": "2025-06-23 20:40:36"
    },
    {
      "id": 355,
      "userId": 7,
      "seasonId": 71,
      "rating": 8.5,
      "createdAt": "2025-06-08 18:02:24",
      "updatedAt": "2025-06-08 18:02:24"
    },
    {
      "id": 356,
      "userId": 4,
      "seasonId": 72,
      "rating": 5.0,
      "createdAt": "2025-06-03 19:00:00",
      "updatedAt": "2025-06-03 19:00:00"
    },
    {
      "id": 357,
      "userId": 8,
      "seasonId": 72,
      "rating": 7.1,
      "createdAt": "2025-06-06 23:14:47",
      "updatedAt": "2025-06-06 23:14:47"
    },
    {
      "id": 358,
      "userId": 3,
      "seasonId": 72,
      "rating": 7.3,
      "createdAt": "2025-05-29 16:04:58",
      "updatedAt": "2025-05-29 16:04:58"
    },
    {
      "id": 359,
      "userId": 7,
      "seasonId": 72,
      "rating": 5.7,
      "createdAt": "2025-06-04 12:49:14",
      "updatedAt": "2025-06-04 12:49:14"
    },
    {
      "id": 360,
      "userId": 9,
      "seasonId": 72,
      "rating": 8.5,
      "createdAt": "2025-06-16 19:12:07",
      "updatedAt": "2025-06-16 19:12:07"
    },
    {
      "id": 361,
      "userId": 2,
      "seasonId": 73,
      "rating": 8.3,
      "createdAt": "2025-06-18 23:13:18",
      "updatedAt": "2025-06-18 23:13:18"
    },
    {
      "id": 362,
      "userId": 7,
      "seasonId": 73,
      "rating": 5.0,
      "createdAt": "2025-06-09 19:59:51",
      "updatedAt": "2025-06-09 19:59:51"
    },
    {
      "id": 363,
      "userId": 10,
      "seasonId": 73,
      "rating": 6.8,
      "createdAt": "2025-06-07 20:46:12",
      "updatedAt": "2025-06-07 20:46:12"
    },
    {
      "id": 364,
      "userId": 4,
      "seasonId": 73,
      "rating": 5.3,
      "createdAt": "2025-06-15 23:51:04",
      "updatedAt": "2025-06-15 23:51:04"
    },
    {
      "id": 365,
      "userId": 3,
      "seasonId": 73,
      "rating": 9.6,
      "createdAt": "2025-05-25 07:25:02",
      "updatedAt": "2025-05-25 07:25:02"
    },
    {
      "id": 366,
      "userId": 3,
      "seasonId": 74,
      "rating": 5.2,
      "createdAt": "2025-06-19 01:40:15",
      "updatedAt": "2025-06-19 01:40:15"
    },
    {
      "id": 367,
      "userId": 8,
      "seasonId": 74,
      "rating": 8.3,
      "createdAt": "2025-06-02 11:01:42",
      "updatedAt": "2025-06-02 11:01:42"
    },
    {
      "id": 368,
      "userId": 2,
      "seasonId": 74,
      "rating": 7.6,
      "createdAt": "2025-05-30 12:49:23",
      "updatedAt": "2025-05-30 12:49:23"
    },
    {
      "id": 369,
      "userId": 10,
      "seasonId": 74,
      "rating": 5.5,
      "createdAt": "2025-06-12 01:48:33",
      "updatedAt": "2025-06-12 01:48:33"
    },
    {
      "id": 370,
      "userId": 4,
      "seasonId": 74,
      "rating": 8.8,
      "createdAt": "2025-06-03 13:02:07",
      "updatedAt": "2025-06-03 13:02:07"
    },
    {
      "id": 371,
      "userId": 9,
      "seasonId": 75,
      "rating": 6.9,
      "createdAt": "2025-06-02 23:36:07",
      "updatedAt": "2025-06-02 23:36:07"
    },
    {
      "id": 372,
      "userId": 6,
      "seasonId": 75,
      "rating": 7.1,
      "createdAt": "2025-06-20 08:11:52",
      "updatedAt": "2025-06-20 08:11:52"
    },
    {
      "id": 373,
      "userId": 7,
      "seasonId": 75,
      "rating": 5.9,
      "createdAt": "2025-06-15 17:03:53",
      "updatedAt": "2025-06-15 17:03:53"
    },
    {
      "id": 374,
      "userId": 8,
      "seasonId": 75,
      "rating": 7.6,
      "createdAt": "2025-06-10 17:53:11",
      "updatedAt": "2025-06-10 17:53:11"
    },
    {
      "id": 375,
      "userId": 5,
      "seasonId": 75,
      "rating": 6.7,
      "createdAt": "2025-06-22 18:30:25",
      "updatedAt": "2025-06-22 18:30:25"
    },
    {
      "id": 376,
      "userId": 7,
      "seasonId": 76,
      "rating": 9.7,
      "createdAt": "2025-06-18 20:37:10",
      "updatedAt": "2025-06-18 20:37:10"
    },
    {
      "id": 377,
      "userId": 5,
      "seasonId": 76,
      "rating": 8.8,
      "createdAt": "2025-06-02 15:54:14",
      "updatedAt": "2025-06-02 15:54:14"
    },
    {
      "id": 378,
      "userId": 9,
      "seasonId": 76,
      "rating": 6.8,
      "createdAt": "2025-05-28 10:50:07",
      "updatedAt": "2025-05-28 10:50:07"
    },
    {
      "id": 379,
      "userId": 3,
      "seasonId": 76,
      "rating": 9.1,
      "createdAt": "2025-06-20 05:59:17",
      "updatedAt": "2025-06-20 05:59:17"
    },
    {
      "id": 380,
      "userId": 1,
      "seasonId": 76,
      "rating": 6.5,
      "createdAt": "2025-06-12 01:07:48",
      "updatedAt": "2025-06-12 01:07:48"
    },
    {
      "id": 381,
      "userId": 7,
      "seasonId": 77,
      "rating": 8.9,
      "createdAt": "2025-05-28 06:45:18",
      "updatedAt": "2025-05-28 06:45:18"
    },
    {
      "id": 382,
      "userId": 3,
      "seasonId": 77,
      "rating": 5.8,
      "createdAt": "2025-06-23 08:27:15",
      "updatedAt": "2025-06-23 08:27:15"
    },
    {
      "id": 383,
      "userId": 5,
      "seasonId": 77,
      "rating": 7.0,
      "createdAt": "2025-06-09 12:47:26",
      "updatedAt": "2025-06-09 12:47:26"
    },
    {
      "id": 384,
      "userId": 2,
      "seasonId": 77,
      "rating": 5.3,
      "createdAt": "2025-06-01 07:39:20",
      "updatedAt": "2025-06-01 07:39:20"
    },
    {
      "id": 385,
      "userId": 4,
      "seasonId": 77,
      "rating": 6.6,
      "createdAt": "2025-06-06 11:33:18",
      "updatedAt": "2025-06-06 11:33:18"
    },
    {
      "id": 386,
      "userId": 2,
      "seasonId": 78,
      "rating": 5.7,
      "createdAt": "2025-06-09 03:40:22",
      "updatedAt": "2025-06-09 03:40:22"
    },
    {
      "id": 387,
      "userId": 9,
      "seasonId": 78,
      "rating": 5.1,
      "createdAt": "2025-06-09 02:10:57",
      "updatedAt": "2025-06-09 02:10:57"
    },
    {
      "id": 388,
      "userId": 1,
      "seasonId": 78,
      "rating": 6.4,
      "createdAt": "2025-06-18 09:14:10",
      "updatedAt": "2025-06-18 09:14:10"
    },
    {
      "id": 389,
      "userId": 6,
      "seasonId": 78,
      "rating": 5.6,
      "createdAt": "2025-06-04 03:00:15",
      "updatedAt": "2025-06-04 03:00:15"
    },
    {
      "id": 390,
      "userId": 5,
      "seasonId": 78,
      "rating": 6.3,
      "createdAt": "2025-06-12 10:19:17",
      "updatedAt": "2025-06-12 10:19:17"
    },
    {
      "id": 391,
      "userId": 8,
      "seasonId": 79,
      "rating": 6.4,
      "createdAt": "2025-06-02 02:56:03",
      "updatedAt": "2025-06-02 02:56:03"
    },
    {
      "id": 392,
      "userId": 6,
      "seasonId": 79,
      "rating": 9.3,
      "createdAt": "2025-05-24 13:11:23",
      "updatedAt": "2025-05-24 13:11:23"
    },
    {
      "id": 393,
      "userId": 2,
      "seasonId": 79,
      "rating": 8.3,
      "createdAt": "2025-06-01 00:30:40",
      "updatedAt": "2025-06-01 00:30:40"
    },
    {
      "id": 394,
      "userId": 3,
      "seasonId": 79,
      "rating": 7.2,
      "createdAt": "2025-06-23 18:48:53",
      "updatedAt": "2025-06-23 18:48:53"
    },
    {
      "id": 395,
      "userId": 1,
      "seasonId": 79,
      "rating": 5.5,
      "createdAt": "2025-06-12 09:29:41",
      "updatedAt": "2025-06-12 09:29:41"
    },
    {
      "id": 396,
      "userId": 4,
      "seasonId": 80,
      "rating": 9.4,
      "createdAt": "2025-06-05 04:20:27",
      "updatedAt": "2025-06-05 04:20:27"
    },
    {
      "id": 397,
      "userId": 10,
      "seasonId": 80,
      "rating": 10.0,
      "createdAt": "2025-05-28 03:25:45",
      "updatedAt": "2025-05-28 03:25:45"
    },
    {
      "id": 398,
      "userId": 1,
      "seasonId": 80,
      "rating": 9.3,
      "createdAt": "2025-05-27 21:27:04",
      "updatedAt": "2025-05-27 21:27:04"
    },
    {
      "id": 399,
      "userId": 5,
      "seasonId": 80,
      "rating": 9.4,
      "createdAt": "2025-06-02 14:54:56",
      "updatedAt": "2025-06-02 14:54:56"
    },
    {
      "id": 400,
      "userId": 6,
      "seasonId": 80,
      "rating": 7.5,
      "createdAt": "2025-06-12 02:34:52",
      "updatedAt": "2025-06-12 02:34:52"
    },
    {
      "id": 401,
      "userId": 10,
      "seasonId": 81,
      "rating": 6.0,
      "createdAt": "2025-06-16 14:04:39",
      "updatedAt": "2025-06-16 14:04:39"
    },
    {
      "id": 402,
      "userId": 4,
      "seasonId": 81,
      "rating": 7.0,
      "createdAt": "2025-05-26 03:29:01",
      "updatedAt": "2025-05-26 03:29:01"
    },
    {
      "id": 403,
      "userId": 7,
      "seasonId": 81,
      "rating": 7.2,
      "createdAt": "2025-05-27 08:17:52",
      "updatedAt": "2025-05-27 08:17:52"
    },
    {
      "id": 404,
      "userId": 6,
      "seasonId": 81,
      "rating": 5.6,
      "createdAt": "2025-06-07 12:35:05",
      "updatedAt": "2025-06-07 12:35:05"
    },
    {
      "id": 405,
      "userId": 1,
      "seasonId": 81,
      "rating": 8.0,
      "createdAt": "2025-06-08 21:58:21",
      "updatedAt": "2025-06-08 21:58:21"
    },
    {
      "id": 406,
      "userId": 5,
      "seasonId": 82,
      "rating": 5.6,
      "createdAt": "2025-06-09 00:10:58",
      "updatedAt": "2025-06-09 00:10:58"
    },
    {
      "id": 407,
      "userId": 9,
      "seasonId": 82,
      "rating": 8.0,
      "createdAt": "2025-05-25 15:14:29",
      "updatedAt": "2025-05-25 15:14:29"
    },
    {
      "id": 408,
      "userId": 4,
      "seasonId": 82,
      "rating": 5.1,
      "createdAt": "2025-06-21 05:43:09",
      "updatedAt": "2025-06-21 05:43:09"
    },
    {
      "id": 409,
      "userId": 10,
      "seasonId": 82,
      "rating": 6.6,
      "createdAt": "2025-06-08 12:37:23",
      "updatedAt": "2025-06-08 12:37:23"
    },
    {
      "id": 410,
      "userId": 7,
      "seasonId": 82,
      "rating": 9.6,
      "createdAt": "2025-05-29 17:09:49",
      "updatedAt": "2025-05-29 17:09:49"
    },
    {
      "id": 411,
      "userId": 10,
      "seasonId": 83,
      "rating": 5.1,
      "createdAt": "2025-06-10 06:55:41",
      "updatedAt": "2025-06-10 06:55:41"
    },
    {
      "id": 412,
      "userId": 7,
      "seasonId": 83,
      "rating": 6.5,
      "createdAt": "2025-06-08 21:49:11",
      "updatedAt": "2025-06-08 21:49:11"
    },
    {
      "id": 413,
      "userId": 5,
      "seasonId": 83,
      "rating": 7.3,
      "createdAt": "2025-06-07 23:47:25",
      "updatedAt": "2025-06-07 23:47:25"
    },
    {
      "id": 414,
      "userId": 3,
      "seasonId": 83,
      "rating": 7.6,
      "createdAt": "2025-06-15 07:14:24",
      "updatedAt": "2025-06-15 07:14:24"
    },
    {
      "id": 415,
      "userId": 8,
      "seasonId": 83,
      "rating": 9.8,
      "createdAt": "2025-06-10 12:04:11",
      "updatedAt": "2025-06-10 12:04:11"
    },
    {
      "id": 416,
      "userId": 4,
      "seasonId": 84,
      "rating": 6.1,
      "createdAt": "2025-06-16 05:41:09",
      "updatedAt": "2025-06-16 05:41:09"
    },
    {
      "id": 417,
      "userId": 9,
      "seasonId": 84,
      "rating": 5.0,
      "createdAt": "2025-06-21 01:25:11",
      "updatedAt": "2025-06-21 01:25:11"
    },
    {
      "id": 418,
      "userId": 3,
      "seasonId": 84,
      "rating": 8.2,
      "createdAt": "2025-05-24 16:04:41",
      "updatedAt": "2025-05-24 16:04:41"
    },
    {
      "id": 419,
      "userId": 5,
      "seasonId": 84,
      "rating": 7.8,
      "createdAt": "2025-06-18 11:40:15",
      "updatedAt": "2025-06-18 11:40:15"
    },
    {
      "id": 420,
      "userId": 2,
      "seasonId": 84,
      "rating": 8.9,
      "createdAt": "2025-06-09 11:37:09",
      "updatedAt": "2025-06-09 11:37:09"
    },
    {
      "id": 421,
      "userId": 3,
      "seasonId": 85,
      "rating": 8.0,
      "createdAt": "2025-05-30 23:15:06",
      "updatedAt": "2025-05-30 23:15:06"
    },
    {
      "id": 422,
      "userId": 10,
      "seasonId": 85,
      "rating": 8.8,
      "createdAt": "2025-05-25 05:46:03",
      "updatedAt": "2025-05-25 05:46:03"
    },
    {
      "id": 423,
      "userId": 5,
      "seasonId": 85,
      "rating": 5.3,
      "createdAt": "2025-06-02 23:24:18",
      "updatedAt": "2025-06-02 23:24:18"
    },
    {
      "id": 424,
      "userId": 6,
      "seasonId": 85,
      "rating": 6.3,
      "createdAt": "2025-06-21 11:45:50",
      "updatedAt": "2025-06-21 11:45:50"
    },
    {
      "id": 425,
      "userId": 7,
      "seasonId": 85,
      "rating": 6.9,
      "createdAt": "2025-05-26 23:09:26",
      "updatedAt": "2025-05-26 23:09:26"
    },
    {
      "id": 426,
      "userId": 2,
      "seasonId": 86,
      "rating": 8.7,
      "createdAt": "2025-06-13 18:09:08",
      "updatedAt": "2025-06-13 18:09:08"
    },
    {
      "id": 427,
      "userId": 10,
      "seasonId": 86,
      "rating": 5.4,
      "createdAt": "2025-06-20 04:01:45",
      "updatedAt": "2025-06-20 04:01:45"
    },
    {
      "id": 428,
      "userId": 1,
      "seasonId": 86,
      "rating": 5.1,
      "createdAt": "2025-06-01 15:37:06",
      "updatedAt": "2025-06-01 15:37:06"
    },
    {
      "id": 429,
      "userId": 5,
      "seasonId": 86,
      "rating": 7.2,
      "createdAt": "2025-05-31 01:48:24",
      "updatedAt": "2025-05-31 01:48:24"
    },
    {
      "id": 430,
      "userId": 8,
      "seasonId": 86,
      "rating": 9.1,
      "createdAt": "2025-05-30 16:28:16",
      "updatedAt": "2025-05-30 16:28:16"
    },
    {
      "id": 431,
      "userId": 4,
      "seasonId": 87,
      "rating": 5.3,
      "createdAt": "2025-06-05 08:04:10",
      "updatedAt": "2025-06-05 08:04:10"
    },
    {
      "id": 432,
      "userId": 5,
      "seasonId": 87,
      "rating": 8.4,
      "createdAt": "2025-06-18 10:20:45",
      "updatedAt": "2025-06-18 10:20:45"
    },
    {
      "id": 433,
      "userId": 10,
      "seasonId": 87,
      "rating": 5.6,
      "createdAt": "2025-06-18 23:15:38",
      "updatedAt": "2025-06-18 23:15:38"
    },
    {
      "id": 434,
      "userId": 1,
      "seasonId": 87,
      "rating": 6.5,
      "createdAt": "2025-06-24 00:54:17",
      "updatedAt": "2025-06-24 00:54:17"
    },
    {
      "id": 435,
      "userId": 7,
      "seasonId": 87,
      "rating": 9.9,
      "createdAt": "2025-05-30 00:13:12",
      "updatedAt": "2025-05-30 00:13:12"
    },
    {
      "id": 436,
      "userId": 1,
      "seasonId": 88,
      "rating": 9.9,
      "createdAt": "2025-06-14 14:40:44",
      "updatedAt": "2025-06-14 14:40:44"
    },
    {
      "id": 437,
      "userId": 2,
      "seasonId": 88,
      "rating": 9.6,
      "createdAt": "2025-06-17 22:56:13",
      "updatedAt": "2025-06-17 22:56:13"
    },
    {
      "id": 438,
      "userId": 7,
      "seasonId": 88,
      "rating": 7.8,
      "createdAt": "2025-06-13 20:32:53",
      "updatedAt": "2025-06-13 20:32:53"
    },
    {
      "id": 439,
      "userId": 5,
      "seasonId": 88,
      "rating": 7.6,
      "createdAt": "2025-06-22 22:14:31",
      "updatedAt": "2025-06-22 22:14:31"
    },
    {
      "id": 440,
      "userId": 6,
      "seasonId": 88,
      "rating": 9.0,
      "createdAt": "2025-06-17 04:48:41",
      "updatedAt": "2025-06-17 04:48:41"
    },
    {
      "id": 441,
      "userId": 1,
      "seasonId": 89,
      "rating": 5.4,
      "createdAt": "2025-05-31 00:02:32",
      "updatedAt": "2025-05-31 00:02:32"
    },
    {
      "id": 442,
      "userId": 4,
      "seasonId": 89,
      "rating": 9.7,
      "createdAt": "2025-06-09 19:45:13",
      "updatedAt": "2025-06-09 19:45:13"
    },
    {
      "id": 443,
      "userId": 9,
      "seasonId": 89,
      "rating": 7.9,
      "createdAt": "2025-05-28 17:05:42",
      "updatedAt": "2025-05-28 17:05:42"
    },
    {
      "id": 444,
      "userId": 10,
      "seasonId": 89,
      "rating": 8.8,
      "createdAt": "2025-05-25 12:54:14",
      "updatedAt": "2025-05-25 12:54:14"
    },
    {
      "id": 445,
      "userId": 6,
      "seasonId": 89,
      "rating": 5.5,
      "createdAt": "2025-05-28 20:24:39",
      "updatedAt": "2025-05-28 20:24:39"
    },
    {
      "id": 446,
      "userId": 3,
      "seasonId": 90,
      "rating": 7.5,
      "createdAt": "2025-06-10 15:31:51",
      "updatedAt": "2025-06-10 15:31:51"
    },
    {
      "id": 447,
      "userId": 2,
      "seasonId": 90,
      "rating": 8.9,
      "createdAt": "2025-06-17 04:49:37",
      "updatedAt": "2025-06-17 04:49:37"
    },
    {
      "id": 448,
      "userId": 4,
      "seasonId": 90,
      "rating": 8.4,
      "createdAt": "2025-06-20 04:31:52",
      "updatedAt": "2025-06-20 04:31:52"
    },
    {
      "id": 449,
      "userId": 10,
      "seasonId": 90,
      "rating": 10.0,
      "createdAt": "2025-06-10 22:34:31",
      "updatedAt": "2025-06-10 22:34:31"
    },
    {
      "id": 450,
      "userId": 6,
      "seasonId": 90,
      "rating": 8.8,
      "createdAt": "2025-06-02 02:50:45",
      "updatedAt": "2025-06-02 02:50:45"
    },
    {
      "id": 451,
      "userId": 4,
      "seasonId": 91,
      "rating": 7.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 452,
      "userId": 6,
      "seasonId": 91,
      "rating": 9.6,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 453,
      "userId": 8,
      "seasonId": 91,
      "rating": 6.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 454,
      "userId": 10,
      "seasonId": 91,
      "rating": 9.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 455,
      "userId": 1,
      "seasonId": 91,
      "rating": 6.8,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 456,
      "userId": 6,
      "seasonId": 92,
      "rating": 6.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 457,
      "userId": 2,
      "seasonId": 92,
      "rating": 9.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 458,
      "userId": 1,
      "seasonId": 92,
      "rating": 10.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 459,
      "userId": 9,
      "seasonId": 92,
      "rating": 9.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 460,
      "userId": 3,
      "seasonId": 92,
      "rating": 9.8,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 461,
      "userId": 4,
      "seasonId": 93,
      "rating": 9.5,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 462,
      "userId": 10,
      "seasonId": 93,
      "rating": 8.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 463,
      "userId": 2,
      "seasonId": 93,
      "rating": 9.1,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 464,
      "userId": 9,
      "seasonId": 93,
      "rating": 9.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 465,
      "userId": 3,
      "seasonId": 93,
      "rating": 9.1,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 466,
      "userId": 2,
      "seasonId": 94,
      "rating": 8.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 467,
      "userId": 3,
      "seasonId": 94,
      "rating": 8.8,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 468,
      "userId": 7,
      "seasonId": 94,
      "rating": 6.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 469,
      "userId": 1,
      "seasonId": 94,
      "rating": 8.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 470,
      "userId": 6,
      "seasonId": 94,
      "rating": 6.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 471,
      "userId": 1,
      "seasonId": 95,
      "rating": 8.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 472,
      "userId": 9,
      "seasonId": 95,
      "rating": 9.6,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 473,
      "userId": 4,
      "seasonId": 95,
      "rating": 9.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 474,
      "userId": 5,
      "seasonId": 95,
      "rating": 7.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 475,
      "userId": 6,
      "seasonId": 95,
      "rating": 6.8,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 476,
      "userId": 6,
      "seasonId": 96,
      "rating": 8.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 477,
      "userId": 1,
      "seasonId": 96,
      "rating": 6.8,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 478,
      "userId": 3,
      "seasonId": 96,
      "rating": 6.5,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 479,
      "userId": 5,
      "seasonId": 96,
      "rating": 6.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 480,
      "userId": 10,
      "seasonId": 96,
      "rating": 7.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 481,
      "userId": 7,
      "seasonId": 97,
      "rating": 9.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 482,
      "userId": 5,
      "seasonId": 97,
      "rating": 7.1,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 483,
      "userId": 1,
      "seasonId": 97,
      "rating": 9.7,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 484,
      "userId": 4,
      "seasonId": 97,
      "rating": 8.9,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 485,
      "userId": 9,
      "seasonId": 97,
      "rating": 8.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 486,
      "userId": 7,
      "seasonId": 98,
      "rating": 8.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 487,
      "userId": 9,
      "seasonId": 98,
      "rating": 8.5,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 488,
      "userId": 1,
      "seasonId": 98,
      "rating": 8.7,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 489,
      "userId": 4,
      "seasonId": 98,
      "rating": 6.1,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 490,
      "userId": 2,
      "seasonId": 98,
      "rating": 6.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 491,
      "userId": 5,
      "seasonId": 99,
      "rating": 7.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 492,
      "userId": 1,
      "seasonId": 99,
      "rating": 7.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 493,
      "userId": 6,
      "seasonId": 99,
      "rating": 9.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 494,
      "userId": 10,
      "seasonId": 99,
      "rating": 8.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 495,
      "userId": 7,
      "seasonId": 99,
      "rating": 7.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 496,
      "userId": 6,
      "seasonId": 100,
      "rating": 9.9,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 497,
      "userId": 5,
      "seasonId": 100,
      "rating": 8.8,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 498,
      "userId": 10,
      "seasonId": 100,
      "rating": 8.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 499,
      "userId": 7,
      "seasonId": 100,
      "rating": 7.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 500,
      "userId": 8,
      "seasonId": 100,
      "rating": 8.8,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 501,
      "userId": 6,
      "seasonId": 101,
      "rating": 7.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 502,
      "userId": 7,
      "seasonId": 101,
      "rating": 7.6,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 503,
      "userId": 5,
      "seasonId": 101,
      "rating": 8.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 504,
      "userId": 4,
      "seasonId": 101,
      "rating": 7.7,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 505,
      "userId": 10,
      "seasonId": 101,
      "rating": 8.9,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 506,
      "userId": 6,
      "seasonId": 102,
      "rating": 8.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 507,
      "userId": 5,
      "seasonId": 102,
      "rating": 6.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 508,
      "userId": 4,
      "seasonId": 102,
      "rating": 9.6,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 509,
      "userId": 9,
      "seasonId": 102,
      "rating": 6.9,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 510,
      "userId": 7,
      "seasonId": 102,
      "rating": 6.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 511,
      "userId": 6,
      "seasonId": 103,
      "rating": 7.9,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 512,
      "userId": 5,
      "seasonId": 103,
      "rating": 9.6,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 513,
      "userId": 8,
      "seasonId": 103,
      "rating": 8.7,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 514,
      "userId": 7,
      "seasonId": 103,
      "rating": 9.7,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 515,
      "userId": 3,
      "seasonId": 103,
      "rating": 7.6,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 516,
      "userId": 4,
      "seasonId": 104,
      "rating": 8.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 517,
      "userId": 7,
      "seasonId": 104,
      "rating": 8.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 518,
      "userId": 5,
      "seasonId": 104,
      "rating": 7.5,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 519,
      "userId": 10,
      "seasonId": 104,
      "rating": 9.7,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 520,
      "userId": 8,
      "seasonId": 104,
      "rating": 8.8,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 521,
      "userId": 7,
      "seasonId": 105,
      "rating": 9.1,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 522,
      "userId": 5,
      "seasonId": 105,
      "rating": 7.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 523,
      "userId": 9,
      "seasonId": 105,
      "rating": 8.8,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 524,
      "userId": 1,
      "seasonId": 105,
      "rating": 10.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 525,
      "userId": 4,
      "seasonId": 105,
      "rating": 7.6,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 526,
      "userId": 7,
      "seasonId": 106,
      "rating": 6.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 527,
      "userId": 8,
      "seasonId": 106,
      "rating": 9.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 528,
      "userId": 1,
      "seasonId": 106,
      "rating": 9.1,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 529,
      "userId": 5,
      "seasonId": 106,
      "rating": 7.9,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 530,
      "userId": 4,
      "seasonId": 106,
      "rating": 7.5,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 531,
      "userId": 6,
      "seasonId": 107,
      "rating": 7.8,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 532,
      "userId": 10,
      "seasonId": 107,
      "rating": 7.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 533,
      "userId": 4,
      "seasonId": 107,
      "rating": 7.7,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 534,
      "userId": 8,
      "seasonId": 107,
      "rating": 7.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 535,
      "userId": 9,
      "seasonId": 107,
      "rating": 7.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 536,
      "userId": 5,
      "seasonId": 108,
      "rating": 8.6,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 537,
      "userId": 8,
      "seasonId": 108,
      "rating": 7.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 538,
      "userId": 2,
      "seasonId": 108,
      "rating": 9.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 539,
      "userId": 9,
      "seasonId": 108,
      "rating": 10.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 540,
      "userId": 10,
      "seasonId": 108,
      "rating": 7.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 541,
      "userId": 10,
      "seasonId": 109,
      "rating": 7.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 542,
      "userId": 1,
      "seasonId": 109,
      "rating": 9.5,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 543,
      "userId": 4,
      "seasonId": 109,
      "rating": 6.9,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 544,
      "userId": 2,
      "seasonId": 109,
      "rating": 9.1,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 545,
      "userId": 5,
      "seasonId": 109,
      "rating": 9.7,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 546,
      "userId": 6,
      "seasonId": 110,
      "rating": 7.9,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 547,
      "userId": 10,
      "seasonId": 110,
      "rating": 8.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 548,
      "userId": 4,
      "seasonId": 110,
      "rating": 6.1,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 549,
      "userId": 2,
      "seasonId": 110,
      "rating": 7.5,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 550,
      "userId": 3,
      "seasonId": 110,
      "rating": 8.9,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 551,
      "userId": 9,
      "seasonId": 111,
      "rating": 6.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 552,
      "userId": 1,
      "seasonId": 111,
      "rating": 8.5,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 553,
      "userId": 4,
      "seasonId": 111,
      "rating": 8.7,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 554,
      "userId": 2,
      "seasonId": 111,
      "rating": 6.1,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 555,
      "userId": 6,
      "seasonId": 111,
      "rating": 8.7,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 556,
      "userId": 5,
      "seasonId": 112,
      "rating": 9.5,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 557,
      "userId": 9,
      "seasonId": 112,
      "rating": 9.8,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 558,
      "userId": 2,
      "seasonId": 112,
      "rating": 7.6,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 559,
      "userId": 1,
      "seasonId": 112,
      "rating": 8.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 560,
      "userId": 6,
      "seasonId": 112,
      "rating": 6.8,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 561,
      "userId": 6,
      "seasonId": 113,
      "rating": 6.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 562,
      "userId": 3,
      "seasonId": 113,
      "rating": 8.6,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 563,
      "userId": 2,
      "seasonId": 113,
      "rating": 8.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 564,
      "userId": 9,
      "seasonId": 113,
      "rating": 7.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 565,
      "userId": 8,
      "seasonId": 113,
      "rating": 7.8,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 566,
      "userId": 4,
      "seasonId": 114,
      "rating": 7.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 567,
      "userId": 1,
      "seasonId": 114,
      "rating": 8.6,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 568,
      "userId": 8,
      "seasonId": 114,
      "rating": 6.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 569,
      "userId": 3,
      "seasonId": 114,
      "rating": 9.9,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 570,
      "userId": 2,
      "seasonId": 114,
      "rating": 7.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 571,
      "userId": 7,
      "seasonId": 115,
      "rating": 8.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 572,
      "userId": 3,
      "seasonId": 115,
      "rating": 9.5,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 573,
      "userId": 5,
      "seasonId": 115,
      "rating": 6.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 574,
      "userId": 6,
      "seasonId": 115,
      "rating": 7.5,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 575,
      "userId": 10,
      "seasonId": 115,
      "rating": 8.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 576,
      "userId": 8,
      "seasonId": 116,
      "rating": 9.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 577,
      "userId": 1,
      "seasonId": 116,
      "rating": 7.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 578,
      "userId": 6,
      "seasonId": 116,
      "rating": 8.1,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 579,
      "userId": 2,
      "seasonId": 116,
      "rating": 9.1,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 580,
      "userId": 9,
      "seasonId": 116,
      "rating": 8.6,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 581,
      "userId": 9,
      "seasonId": 117,
      "rating": 8.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 582,
      "userId": 5,
      "seasonId": 117,
      "rating": 8.5,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 583,
      "userId": 3,
      "seasonId": 117,
      "rating": 6.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 584,
      "userId": 6,
      "seasonId": 117,
      "rating": 6.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 585,
      "userId": 1,
      "seasonId": 117,
      "rating": 6.6,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 586,
      "userId": 3,
      "seasonId": 118,
      "rating": 6.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 587,
      "userId": 9,
      "seasonId": 118,
      "rating": 8.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 588,
      "userId": 2,
      "seasonId": 118,
      "rating": 7.6,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 589,
      "userId": 5,
      "seasonId": 118,
      "rating": 6.1,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 590,
      "userId": 1,
      "seasonId": 118,
      "rating": 9.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 591,
      "userId": 8,
      "seasonId": 119,
      "rating": 7.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 592,
      "userId": 5,
      "seasonId": 119,
      "rating": 9.1,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 593,
      "userId": 1,
      "seasonId": 119,
      "rating": 6.8,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 594,
      "userId": 6,
      "seasonId": 119,
      "rating": 7.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 595,
      "userId": 7,
      "seasonId": 119,
      "rating": 8.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 596,
      "userId": 4,
      "seasonId": 120,
      "rating": 6.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 597,
      "userId": 2,
      "seasonId": 120,
      "rating": 7.1,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 598,
      "userId": 8,
      "seasonId": 120,
      "rating": 8.1,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 599,
      "userId": 5,
      "seasonId": 120,
      "rating": 6.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 600,
      "userId": 3,
      "seasonId": 120,
      "rating": 8.6,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 601,
      "userId": 3,
      "seasonId": 121,
      "rating": 8.2,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 602,
      "userId": 3,
      "seasonId": 122,
      "rating": 7.5,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 603,
      "userId": 3,
      "seasonId": 123,
      "rating": 8.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 604,
      "userId": 3,
      "seasonId": 124,
      "rating": 7.9,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 605,
      "userId": 3,
      "seasonId": 125,
      "rating": 8.1,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 606,
      "userId": 3,
      "seasonId": 126,
      "rating": 7.6,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 607,
      "userId": 3,
      "seasonId": 127,
      "rating": 8.3,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 608,
      "userId": 3,
      "seasonId": 128,
      "rating": 7.8,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 609,
      "userId": 3,
      "seasonId": 129,
      "rating": 8.0,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 610,
      "userId": 3,
      "seasonId": 130,
      "rating": 7.7,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 611,
      "userId": 3,
      "seasonId": 131,
      "rating": 8.4,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 612,
      "userId": 3,
      "seasonId": 132,
      "rating": 7.9,
      "createdAt": "2025-06-23 07:54:49",
      "updatedAt": "2025-06-23 07:54:49"
    },
    {
      "id": 613,
      "rating": 3.4,
      "userId": 9,
      "seasonId": 133,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 614,
      "rating": 5.0,
      "userId": 1,
      "seasonId": 133,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 615,
      "rating": 4.2,
      "userId": 4,
      "seasonId": 133,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 616,
      "rating": 5.0,
      "userId": 10,
      "seasonId": 133,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 617,
      "rating": 4.4,
      "userId": 8,
      "seasonId": 133,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 618,
      "rating": 4.5,
      "userId": 5,
      "seasonId": 134,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 619,
      "rating": 4.4,
      "userId": 3,
      "seasonId": 134,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 620,
      "rating": 4.6,
      "userId": 8,
      "seasonId": 134,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 621,
      "rating": 4.2,
      "userId": 9,
      "seasonId": 134,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 622,
      "rating": 4.1,
      "userId": 6,
      "seasonId": 134,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 623,
      "rating": 4.8,
      "userId": 2,
      "seasonId": 135,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 624,
      "rating": 3.6,
      "userId": 8,
      "seasonId": 135,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 625,
      "rating": 4.2,
      "userId": 1,
      "seasonId": 135,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 626,
      "rating": 3.8,
      "userId": 3,
      "seasonId": 135,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 627,
      "rating": 3.2,
      "userId": 4,
      "seasonId": 135,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 628,
      "rating": 3.0,
      "userId": 6,
      "seasonId": 136,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 629,
      "rating": 4.3,
      "userId": 2,
      "seasonId": 136,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 630,
      "rating": 4.0,
      "userId": 3,
      "seasonId": 136,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 631,
      "rating": 3.3,
      "userId": 4,
      "seasonId": 136,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 632,
      "rating": 4.8,
      "userId": 5,
      "seasonId": 136,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 633,
      "rating": 3.8,
      "userId": 1,
      "seasonId": 137,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 634,
      "rating": 4.7,
      "userId": 6,
      "seasonId": 137,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 635,
      "rating": 4.1,
      "userId": 7,
      "seasonId": 137,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 636,
      "rating": 3.0,
      "userId": 8,
      "seasonId": 137,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 637,
      "rating": 3.9,
      "userId": 3,
      "seasonId": 137,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 638,
      "rating": 3.7,
      "userId": 8,
      "seasonId": 138,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 639,
      "rating": 4.0,
      "userId": 1,
      "seasonId": 138,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 640,
      "rating": 3.1,
      "userId": 2,
      "seasonId": 138,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 641,
      "rating": 3.7,
      "userId": 4,
      "seasonId": 138,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 642,
      "rating": 4.1,
      "userId": 5,
      "seasonId": 138,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 643,
      "rating": 3.3,
      "userId": 4,
      "seasonId": 139,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 644,
      "rating": 3.8,
      "userId": 2,
      "seasonId": 139,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 645,
      "rating": 5.0,
      "userId": 6,
      "seasonId": 139,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 646,
      "rating": 4.7,
      "userId": 3,
      "seasonId": 139,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 647,
      "rating": 3.9,
      "userId": 1,
      "seasonId": 139,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 648,
      "rating": 4.7,
      "userId": 1,
      "seasonId": 140,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 649,
      "rating": 4.0,
      "userId": 2,
      "seasonId": 140,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 650,
      "rating": 4.4,
      "userId": 5,
      "seasonId": 140,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 651,
      "rating": 4.0,
      "userId": 6,
      "seasonId": 140,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 652,
      "rating": 4.4,
      "userId": 3,
      "seasonId": 140,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 653,
      "rating": 4.1,
      "userId": 5,
      "seasonId": 141,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 654,
      "rating": 3.6,
      "userId": 1,
      "seasonId": 141,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 655,
      "rating": 4.4,
      "userId": 4,
      "seasonId": 141,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 656,
      "rating": 5.0,
      "userId": 3,
      "seasonId": 141,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 657,
      "rating": 4.9,
      "userId": 7,
      "seasonId": 141,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 658,
      "rating": 4.0,
      "userId": 2,
      "seasonId": 142,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 659,
      "rating": 3.7,
      "userId": 3,
      "seasonId": 142,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 660,
      "rating": 4.6,
      "userId": 4,
      "seasonId": 142,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 661,
      "rating": 4.2,
      "userId": 5,
      "seasonId": 142,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 662,
      "rating": 3.9,
      "userId": 6,
      "seasonId": 142,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 663,
      "rating": 4.5,
      "userId": 1,
      "seasonId": 143,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 664,
      "rating": 4.8,
      "userId": 3,
      "seasonId": 143,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 665,
      "rating": 3.5,
      "userId": 7,
      "seasonId": 143,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 666,
      "rating": 4.0,
      "userId": 2,
      "seasonId": 143,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 667,
      "rating": 4.9,
      "userId": 8,
      "seasonId": 143,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 668,
      "rating": 3.9,
      "userId": 3,
      "seasonId": 144,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 669,
      "rating": 3.6,
      "userId": 4,
      "seasonId": 144,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 670,
      "rating": 4.0,
      "userId": 1,
      "seasonId": 144,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 671,
      "rating": 4.7,
      "userId": 6,
      "seasonId": 144,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 672,
      "rating": 4.2,
      "userId": 7,
      "seasonId": 144,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 673,
      "rating": 3.5,
      "userId": 2,
      "seasonId": 145,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 674,
      "rating": 4.1,
      "userId": 4,
      "seasonId": 145,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 675,
      "rating": 4.0,
      "userId": 6,
      "seasonId": 145,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 676,
      "rating": 4.3,
      "userId": 9,
      "seasonId": 145,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 677,
      "rating": 4.9,
      "userId": 1,
      "seasonId": 145,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 678,
      "rating": 3.7,
      "userId": 7,
      "seasonId": 146,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 679,
      "rating": 4.6,
      "userId": 2,
      "seasonId": 146,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 680,
      "rating": 4.2,
      "userId": 6,
      "seasonId": 146,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 681,
      "rating": 3.8,
      "userId": 3,
      "seasonId": 146,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 682,
      "rating": 4.0,
      "userId": 5,
      "seasonId": 146,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 683,
      "rating": 4.5,
      "userId": 1,
      "seasonId": 147,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 684,
      "rating": 4.2,
      "userId": 9,
      "seasonId": 147,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 685,
      "rating": 3.6,
      "userId": 8,
      "seasonId": 147,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 686,
      "rating": 4.4,
      "userId": 2,
      "seasonId": 147,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 687,
      "rating": 4.1,
      "userId": 6,
      "seasonId": 147,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 688,
      "rating": 4.0,
      "userId": 4,
      "seasonId": 148,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 689,
      "rating": 4.8,
      "userId": 5,
      "seasonId": 148,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 690,
      "rating": 3.9,
      "userId": 7,
      "seasonId": 148,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 691,
      "rating": 4.2,
      "userId": 3,
      "seasonId": 148,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 692,
      "rating": 4.7,
      "userId": 6,
      "seasonId": 148,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 693,
      "rating": 3.8,
      "userId": 8,
      "seasonId": 149,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 694,
      "rating": 4.4,
      "userId": 1,
      "seasonId": 149,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 695,
      "rating": 4.0,
      "userId": 5,
      "seasonId": 149,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 696,
      "rating": 3.9,
      "userId": 2,
      "seasonId": 149,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 697,
      "rating": 4.3,
      "userId": 6,
      "seasonId": 149,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 698,
      "rating": 3.6,
      "userId": 3,
      "seasonId": 150,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 699,
      "rating": 4.7,
      "userId": 1,
      "seasonId": 150,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 700,
      "rating": 4.4,
      "userId": 7,
      "seasonId": 150,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 701,
      "rating": 4.1,
      "userId": 4,
      "seasonId": 150,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 702,
      "rating": 4.6,
      "userId": 6,
      "seasonId": 150,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 703,
      "rating": 4.0,
      "userId": 2,
      "seasonId": 151,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 704,
      "rating": 4.8,
      "userId": 3,
      "seasonId": 151,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 705,
      "rating": 4.5,
      "userId": 5,
      "seasonId": 151,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 706,
      "rating": 4.3,
      "userId": 1,
      "seasonId": 151,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 707,
      "rating": 4.7,
      "userId": 6,
      "seasonId": 151,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 708,
      "rating": 4.2,
      "userId": 1,
      "seasonId": 152,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 709,
      "rating": 4.5,
      "userId": 2,
      "seasonId": 152,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 710,
      "rating": 4.1,
      "userId": 3,
      "seasonId": 152,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 711,
      "rating": 4.3,
      "userId": 5,
      "seasonId": 152,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    },
    {
      "id": 712,
      "rating": 4.9,
      "userId": 6,
      "seasonId": 152,
      "createdAt": "2025-06-24 00:00:00",
      "updatedAt": "2025-06-24 00:00:00"
    }
  ]);
} catch (error) { // <-- THÊM KHỐI CODE NÀY VÀO
  console.error('Lỗi chi tiết khi seeding:', error);
  throw error;
}
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Episodes', null, {});
    await queryInterface.bulkDelete('Seasons', null, {});
    await queryInterface.bulkDelete('MovieGenres', null, {});
    await queryInterface.bulkDelete('Movies', null, {});
    await queryInterface.bulkDelete('Genres', null, {});
    await queryInterface.bulkDelete('Peoples', null, {});
  }
}; 