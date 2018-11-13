UPDATE InventoryProducts SET product_label=$2 WHERE inventory_id=$1;

SELECT * FROM InventoryProducts ORDER BY inventory_id ASC;