UPDATE InventoryClients SET company=$2 WHERE client_id=$1;

SELECT * FROM InventoryClients ORDER BY client_id ASC;