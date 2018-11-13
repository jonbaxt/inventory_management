DELETE FROM InventoryProducts WHERE inventory_id=$1;

SELECT * FROM InventoryProducts ORDER BY inventory_id ASC;