<?php
require_once("./includes/startup.php");
require_once("./includes/config.php");
require_once("./classes/cards.php");
$cards = new cards($settings['SQLiteFile']);

//$sql = 'CREATE TABLE cards (id INTEGER PRIMARY KEY, firstName STRING, lastName STRING, middleName STRING, company STRING, post STRING, phone STRING, skype STRING, www STRING, time STRING)';
//$res =	$cards->arrayQuery($sql);

//$sqlInsert = 'INSERT INTO cards (firstName, lastName, middleName, company, post, phone, skype, www, time) VALUES ("Виктор", "Леонец", "Алексеевич", "SoftServ", "intern", "+38067 63 63 246", "leoo_leoo_leoo", "leonec.com", '.time().')';
//$sqlInsert = 'INSERT INTO cards (firstName, lastName, middleName, company, post, phone, skype, www, time) VALUES ("Виктор", "Леонец", "Алексеевич", "SoftServ", "intern", "067 63 63 246", "leoo_leoo_leoo", "leonec.com", '.time().')';
//$res =	$cards->arrayQuery($sqlInsert);
//echo json_encode($res);


$sql_2 = 'SELECT * FROM cards LIMIT 20';
print json_encode($cards ->arrayQuery($sql_2));
//$sql = 'SELECT * FROM sqlite_master';
?>
