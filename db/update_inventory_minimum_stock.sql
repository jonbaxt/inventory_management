UPDATE InventoryProducts SET minimum_stock=$2 WHERE inventory_id=$1;

SELECT * FROM InventoryProducts ORDER BY inventory_id ASC;