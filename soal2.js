

let productBin = [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ]
let qty;
let totalqty = 0;
for(let i =0;i < productBin.length;i++ ){

    console.log('ID '+ i+': ');
    console.log(productBin[i].id);
    console.log('ProductCode '+ i+': ');
    console.log(productBin[i].productCode);
    if (productBin[i].productCode == 'FBR00040101'){
            qty = Number(productBin[i].quantity);
            console.log('Jumlah qty '+ i +': ');
            console.log(qty);  
            
    }
    totalqty = totalqty + qty; 
}
console.log('Jumlah qty total : ');
console.log(totalqty); 

