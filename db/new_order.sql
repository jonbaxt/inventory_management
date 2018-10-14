INSERT INTO InventoryOrders (
    date_ordered,
    date_shipped,
    date_recieved,
    completed,
    product_sold_id,
    client_id
) VALUES ( $1, $2, $3, $4, $5, $6 );