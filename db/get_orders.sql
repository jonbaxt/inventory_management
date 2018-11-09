-- SELECT * FROM InventoryOrders;


-- More Joined Out Version for Main Page Information.
SELECT order_id, 
product_sold_id, 
InventoryProducts.product_name, 
InventoryProducts.part_number,
InventoryProducts.product_image,
InventoryProducts.product_label,
InventoryProducts.price as Product_Current_Price,
InventoryProducts.current_count as Product_Count_On_Hand,
InventoryProducts.minimum_stock as Product_Count_Minimum_To_Alert_To_Order,
InventoryProducts.alert_when_low as Is_Product_Needing_To_Notify_To_Order_More_Stock,
InventoryOrders.purchaser_id,
InventoryClients.first_name as buyer_first_name,
InventoryClients.last_name as buyer_last_name,
InventoryClients.company as buyer_company,
InventoryClients.phone_number as buyer_phone_number,
InventoryClients.email as buyer_email,
InventoryClients.company_address_line_1 as buyer_comp_address_1,
InventoryClients.company_address_line_2 as buyer_comp_address_2,
InventoryClients.mailing_address_line_1 as buyer_mail_address_1,
InventoryClients.mailing_address_line_2 as buyer_mail_address_2,
employee_who_entered_id as employee_seller_id,
InventoryEmployees.first_name as employee_seller_first_name,
InventoryEmployees.last_name as employee_seller_last_name,
InventoryEmployees.employee_role as employee_title,
InventoryEmployees.id_pic as seller_pic,
InventoryEmployees.phone_number as seller_phone_number,
InventoryEmployees.email as seller_email,
date_ordered, 
date_shipped, 
date_recieved, 
completed, 
order_notes 
FROM InventoryOrders
JOIN InventoryClients ON InventoryOrders.purchaser_id=InventoryClients.client_id
JOIN InventoryProducts ON InventoryOrders.product_sold_id=InventoryProducts.inventory_id
JOIN InventoryEmployees ON InventoryOrders.employee_who_entered_id=InventoryEmployees.employee_id
ORDER BY Order_Id ASC
-- WHERE purchaser_id=6 
;