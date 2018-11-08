DELETE FROM InventoryClients WHERE client_id=$1;

SELECT * FROM InventoryClients ORDER BY client_id ASC;