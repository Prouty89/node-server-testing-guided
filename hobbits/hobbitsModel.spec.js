const Hobbits = require('./hobbitsModel');
const db = require('../data/dbConfig');

describe('hobits model', () => {
    beforeEach(async () => {
        await db('hobbits').truncate();
    })

    it('should set the environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });
    describe('insert()', () => {
        it('should insert hobbits into the db', async ()=> {
            //Insert a record
            const [id] = await Hobbits.insert({ name: 'Gaffer'})
           
            let hobbit = await db('hobbits')
            .where({id})
            .first();

            //assert the record was inserted
            expect(hobbit.name).toBe('Gaffer')
        });   
    });
});
