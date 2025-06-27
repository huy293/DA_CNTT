const {People, MovieActor, MovieCrew, Movie, Season} = require('../models');

exports.GetAll = async () => {
    return await People.findAll();
}

exports.GetById = async (id) => {
    try {
        console.log('GetById called with id:', id);
        
        const people = await People.findByPk(id, {
            include: [
                {
                    model: Season,
                    as: 'ActorSeasons',
                    include: [
                        {
                            model: Movie,
                            attributes: ['id', 'title']
                        }
                    ],
                    through: {
                        attributes: ['role']
                    }
                },
                {
                    model: Season,
                    as: 'CrewSeasons',
                    include: [
                        {
                            model: Movie,
                            attributes: ['id', 'title']
                        }
                    ],
                    through: {
                        attributes: ['job']
                    }
                }
            ]
        });

        console.log('People found:', people ? 'Yes' : 'No');
        console.log('ActorSeasons count:', people?.ActorSeasons?.length || 0);
        console.log('CrewSeasons count:', people?.CrewSeasons?.length || 0);

        if (!people) return null;

        // Tổng hợp thông tin
        const movies = [];
        
        // Thêm movies từ ActorSeasons
        if (people.ActorSeasons) {
            people.ActorSeasons.forEach(season => {
                movies.push({
                    ...season.toJSON(),
                    role: 'Actor',
                    character: season.MovieActor?.role,
                    movieTitle: season.Movie?.title
                });
            });
        }

        // Thêm movies từ CrewSeasons
        if (people.CrewSeasons) {
            people.CrewSeasons.forEach(season => {
                movies.push({
                    ...season.toJSON(),
                    role: 'Crew',
                    job: season.MovieCrew?.job,
                    movieTitle: season.Movie?.title
                });
            });
        }

        console.log('Total movies found:', movies.length);

        return {
            ...people.toJSON(),
            movies: movies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
        };
    } catch (error) {
        console.error('Error in GetById service:', error);
        console.error('Error stack:', error.stack);
        throw error;
    }
}

exports.Create = async (PersonData) => {
    const Person = await People.create(PersonData);
    return Person;
}

exports.Update_Profile = async (id, profile_url) => {
    const Person = await People.findByPk(id);
    if (!Person) return null;
    await Person.update({ profile_url });
    return Person;
}

exports.Update = async (id, PersonData) => {
    const Person = await People.findByPk(id);
    if (!Person) return null;
    await Person.update(PersonData);
    return Person;
}

exports.Delete = async (id) => {
    const Person = await People.findByPk(id);
    if (!Person) return null;
    await Person.destroy();
    return Person;
}