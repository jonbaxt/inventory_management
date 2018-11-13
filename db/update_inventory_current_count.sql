UPDATE InventoryProducts SET current_count=$2 WHERE inventory_id=$1;

SELECT * FROM InventoryProducts ORDER BY inventory_id ASC;