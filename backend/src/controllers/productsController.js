const connection = require('../database/connection');

module.exports = {
    async all(request, response) {
        const { page, offset, filter } = request.query;
        let products;
        let total
        
        if ( filter.trim() !== '' ) {
            total = await connection('products')
                .whereRaw(`description like '%${filter}%' or details like '%${filter}%'`)
                .count();

            products = await connection('products')
                .whereRaw(`description like '%${filter}%' or details like '%${filter}%'`)
                .limit(offset || 5)
                .offset(page * (offset || 5))
                .select('*');
        } else {
            total = await connection('products')
                .count();

            products = await connection('products')
                .limit(offset || 5)
                .offset(page * (offset || 5))
                .select('*');
        }        

        let totalRecords = total[0]['count(*)'];
        setTimeout(() => {
            return response.json({products, totalRecords});
        }, 1000);
    }
}