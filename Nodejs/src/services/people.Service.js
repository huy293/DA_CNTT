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
                    model: MovieActor,
                    include: [
                        {
                            model: Season,
                            include: [
                                {
                                    model: Movie,
                                    attributes: ['id', 'title']
                                }
                            ]
                        }
                    ]
                },
                {
                    model: MovieCrew,
                    include: [
                        {
                            model: Season,
                            include: [
                                {
                                    model: Movie,
                                    attributes: ['id', 'title']
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        console.log('People found:', people ? 'Yes' : 'No');
        console.log('MovieActors count:', people?.MovieActors?.length || 0);
        console.log('MovieCrews count:', people?.MovieCrews?.length || 0);

        if (!people) return null;

        // Tổng hợp thông tin
        const movies = [];
        
        // Thêm movies từ MovieActor
        if (people.MovieActors) {
            people.MovieActors.forEach(ma => {
                if (ma.Season) {
                    movies.push({
                        ...ma.Season.toJSON(),
                        role: 'Actor',
                        character: ma.role,
                        movieTitle: ma.Season.Movie?.title
                    });
                }
            });
        }

        // Thêm movies từ MovieCrew
        if (people.MovieCrews) {
            people.MovieCrews.forEach(mc => {
                if (mc.Season) {
                    movies.push({
                        ...mc.Season.toJSON(),
                        role: 'Crew',
                        job: mc.job,
                        movieTitle: mc.Season.Movie?.title
                    });
                }
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