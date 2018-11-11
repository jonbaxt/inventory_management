UPDATE InventoryClients SET company_address_line_1=$2, company_address_line_2=$3, mailing_address_line_1=$4, mailing_address_line_2=$5 WHERE client_id=$1;

SELECT * FROM InventoryClients ORDER BY client_id ASC;