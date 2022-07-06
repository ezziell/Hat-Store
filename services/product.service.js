class ProductsService {

   constructor(){
    this.products = [];
   }

   generate() {

   }

   create(data, id) {
      const newProduct = {
        id: id,
        ...data
      }
      this.products.push(newProduct);
      return newProduct;
   }

   find() {
      return this.products;
   }

   findOne() {

   }

   update(){

   }

   delete(){

   }
}

module.exports = ProductsService;
