INSERT INTO InventoryClients (
    first_name,
    last_name,
    phone_number,
    email,
    company,
    company_address_line_1,
    company_address_line_2,
    mailing_address_line_1,
    mailing_address_line_2 ) 
    VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9 );