INSERT INTO InventoryProducts
( product_name,
    part_number,
    product_label,
    product_image,
    current_count,
    minimum_stock,
    price,
    alert_when_low)
VALUES
(   $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8
    );