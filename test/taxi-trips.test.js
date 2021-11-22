let assert = require("assert");
let TaxiTrips = require("../taxi-trips");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://wecode:pg123@localhost:5432/taxi_trips';

const pool = new Pool({
    connectionString
});

describe('Taxi Trips', function () {

    // beforeEach(async function () {
        
    // });

    it('should find how many trips all the taxis made', async function () {

        const taxiTrips = TaxiTrips(pool);
        const res = await taxiTrips.toatlTripCount();
       
        assert.equal(0, res);
    

    });

    it('should find all the regions', async function () {

        const taxiTrips = TaxiTrips(pool);

        const results = await taxiTrips.findAllRegions();
    
        assert.deepStrictEqual([ {name: "Durban"}, {name: "Cape Town"}, {name: "Gauteng"}], results);

    });

    it.skip('should find all the taxis for a region', async function () {
        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([], taxiTrips.findTaxisForRegion('Durban'));
        assert.deepStrictEqual([], taxiTrips.findTaxisForRegion('Cape Town'));
        assert.deepStrictEqual([], taxiTrips.findTaxisForRegion('Gauteng'));

    })

    it.skip('should find all the trips for a reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        
        assert.deepStrictEqual([], taxiTrips.findTripsByRegNumber('...'));
        assert.deepStrictEqual([], taxiTrips.findTripsByRegNumber('***'));

    });

    it.skip('should find the total number of trips by region', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Cape Town').length);
        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Gauteng').length);
        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Gauteng').length);

    });

    it.skip('find the total income for a given reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual(0, taxiTrips.findIncomeByRegNumber('...').length);
        assert.deepStrictEqual(0, taxiTrips.findIncomeByRegNumber('***').length);

    });

    it.skip('find the total income for each taxi', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual([{}, {}, {}], taxiTrips.findTotalIncomePerTaxi());

    });

    it.skip('find the total income for all the taxis', async function () {
        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual(0.00, taxiTrips.findTotalIncome());
    });


    after(function () {
        pool.end();
    });

});