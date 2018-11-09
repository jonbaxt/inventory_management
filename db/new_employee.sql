INSERT INTO InventoryEmployees (
    first_name,
    last_name,
    id_pic,
    phone_number,
    email,
    address_line_1,
    address_line_2,
    employee_role
) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8 );

SELECT * FROM InventoryEmployees ORDER BY Employee_Id ASC;