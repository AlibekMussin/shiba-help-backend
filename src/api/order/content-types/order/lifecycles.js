module.exports = {
    
  afterCreate: async ({ params }) => {
    ctx = params.data;
    console.log(ctx);

        const { products } = ctx;
        console.log('get hook');
        const products_list = JSON.parse(products);
    
        // 1. Извлечение данных заказа и продуктов
        // ...
    
        // 2. Для каждого продукта, уменьшите значение quantity
        for (const product of products_list) {
          const { id, quantity } = product;
          
          // Найдите продукт в базе данных (используйте соответствующую модель)
          
          const existingProduct = await strapi.db.query('api::product.product').findOne({ where: { id: id }, });

          if (existingProduct) {
            console.log('existingProduct');
            console.log(existingProduct);
            if (existingProduct.count>0)
            {
              const check = existingProduct.count - quantity;
              console.log('existingProduct.count', existingProduct.count);
              console.log('quantity', quantity);
              console.log('check', check);
              // Сохраните обновленные данные продукта обратно в базу данных
              strapi.db.query('api::product.product').update({ where: { id: id },
                data: {
                  count: existingProduct.count -= quantity
              }, });
            }
            else
            {
              
            }            
          }
        }    
    
      },
    };
