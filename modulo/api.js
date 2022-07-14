class Productos {
    constructor(productos) {
      this.productos = [{productos}];
    }
  
    async getById() {
      try {
        let contenidoProd = this.producto;
        let idProd = contenidoProd.map( p => p.id);
        return idProd
      } catch (error) {
        console.log(error);
      }
    }
    
    async deleteById() {
      try {
        let contenidoProd = this.producto;
        let obtenerId = contenidoProd.map( o => o.id);
        let idProd = obtenerId.find( p => p.id);
        let deletedProduct = idProd.splice(idProd)
        return deletedProduct
      } catch (error) {
        console.log(error);
      }
    }

    async updateById() {
      let contenidoProd = this.producto;
      let idProd = contenidoProd.find( p => p.id);
      let deletedProduct = idProd.splice(idProd)
      let productToUpdate = req.body;
      let updatedProduct = productos.push(productToUpdate); 
      return updatedProduct
    }
    
  }
  

module.exports= {
  Content: Productos
}
