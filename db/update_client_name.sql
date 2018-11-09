UPDATE InventoryClients SET first_name=$2, last_name=$3 WHERE client_id=$1;

SELECT * FROM InventoryClients ORDER BY client_id ASC;