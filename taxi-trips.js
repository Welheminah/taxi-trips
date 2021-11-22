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
        const results = await pool.query("SELECT reg_number FROM taxi WHERE reg_number")

    }

    async function findTripsByRegNumber(reg_number){
        const results = await pool.query("SELECT * FROM trip WHERE reg_number = $1", [reg_number]);
        return results.rows;
    }

    async function findTripsByRegion(){

    }

    async function findIncomeByRegNumber(){

    }

    async function findTotalIncomePerTaxi(){

    }

    async function findTotalIncome(){

    }

    async function findTotalIncomeByRegion(){

    }

    return {
        toatlTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        findTripsByRegion,
        findIncomeByRegNumber,
        findTotalIncomePerTaxi,
        findTotalIncomeByRegion,
        findTotalIncome

    }
}