/*eslint no-console: 0, no-unused-vars: 0, dot-notation: 0*/
"use strict";

var conn = $.hdb.getConnection();
var query = "SELECT FROM dev161.db.data::PurchaseOrder.Item { " +
	        " PURCHASEORDERID as \"PurchaseOrderItemId\", " +
            " PURCHASEORDERITEM as \"ItemPos\", " +
            " PRODUCT as \"ProductID\", " +
            " GROSSAMOUNT as \"Amount\" " +
            " } ";
var rs = conn.executeQuery(query);

var body = "";

for(var i = 0; i < rs.length; i++){
   if(rs[i]["Amount"] >= 500){
	body += rs[i]["PurchaseOrderItemId"] + "\t" + rs[i]["ItemPos"] + "\t" + 
			rs[i]["ProductID"] + "\t" + rs[i]["Amount"] + "\n";
   }
}
$.response.setBody(body);
