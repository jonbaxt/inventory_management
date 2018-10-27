-- SELECT * FROM InventoryOrders;


-- More Joined Out Version for Main Page Information.
SELECT order_id, 
product_sold_id, 
InventoryProducts.product_name, 
InventoryOrders.purchaser_id,
inventoryclients.first_name as buyer_first_name,
inventoryclients.last_name as buyer_last_name,
InventoryClients.company as buyer_company,
employee_who_entered_id as employee_seller_id,
InventoryEmployees.first_name as employee_seller_first_name,
InventoryEmployees.last_name as employee_seller_last_name,
InventoryEmployees.id_pic as seller_pic,
date_ordered, 
date_shipped, 
date_recieved, 
completed, 
order_notes 
FROM InventoryOrders
JOIN InventoryClients ON InventoryOrders.purchaser_id=InventoryClients.client_id
JOIN InventoryProducts ON InventoryOrders.product_sold_id=InventoryProducts.inventory_id
JOIN inventoryEmployees ON InventoryOrders.employee_who_entered_id=InventoryEmployees.employee_id
-- WHERE purchaser_id=6
;