var appLogic = function(){
    this.categories = ['ECT', 'ECL', 'FOD'];
    this.products = [
        {ProductId:101, ProductName:'Laptop', CategoryName: 'ECT', Price:100000},
        {ProductId:102, ProductName:'Iron', CategoryName: 'ECL', Price:2000},
        {ProductId:103, ProductName:'Biscuts', CategoryName: 'FOD', Price:20}
    ];
    this.getProducts = function(){
        return this.products;
    };
    this.addProduct=function(prd){
        prd
        this.products.push(prd);
        return this.products;
    };
};