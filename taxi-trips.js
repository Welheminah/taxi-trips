module.exports = function TaxiTrips(pool) {

    async function  toatlTripCount(){
        const results = await pool.query("SELECT * FROM trip");
        return results.rowCount;

    }
    
    async function findAllRegions(){
        const results = await pool.query("SELECT name FROM region");
        
        return results.rows;
    }

    async function findTaxisForRegion(){

    }

    async function findTripsByRegNumber(){

    }
    return {
        toatlTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber
    }
}