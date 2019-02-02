<?php
header('Access-Control-Allow-Origin: *');
require_once('dbconfig.php');

//  Creating pdo object for MySQL
$pdoString = "mysql:host=localhost;dbname=$dbname;charset=utf8";
$pdo = new PDO($pdoString, $dbuser, $dbpass);


function searchRequest($get_values, $pdo){
    // Gettings request values
    $shops = $get_values['shops'];
    $categories = $get_values['categories'];
    $sortBy = $get_values['sortBy'];
    $sortOrder = $get_values['sortOrder'];
    $searchTerm = $get_values['search'];
  
    //  Building SQL query based on request data
    $page = (isset($get_values['page']) AND $get_values['page'] > 0)? $get_values['page'] : 1;
    $page_query = (($page - 1) * 10).", 10";
    $sortQuery = ($sortBy <> "" && $sortOrder <> "") ? "ORDER BY ".$sortBy." ".$sortOrder : "";
    $shops_query = ($shops && $shops <> "All")? " AND shop_id IN (".$shops.")" : "";
    $categories_query = ($categories && $categories <> "All")? " AND category IN (".$categories.")" : "";
    
    //  Get search results
    $query = $pdo->query("SELECT * FROM `goods` WHERE name LIKE '%".$searchTerm."%'".$shops_query.$categories_query.$sortQuery." LIMIT ".$page_query);
    $results = $query->fetchAll(PDO::FETCH_ASSOC);

    //  Get total num of results
    $query = $pdo->query("SELECT COUNT(*) as ResultsFound FROM `goods` WHERE name LIKE '%".$searchTerm."%'".$shops_query.$categories_query);
    $resultsNum = $query->fetchAll(PDO::FETCH_COLUMN);

    //  Making and returning array with results and results num
    $result['results'] = $results;
    $result['resultsNum'] = $resultsNum[0];
    return json_encode($result, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
}

//  Gettings categories list
function getCategories($pdo){
  $query = $pdo->query("SELECT * FROM categories")->fetchAll(PDO::FETCH_KEY_PAIR);
  return json_encode($query, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
}

//  Getting shops list
function getShopsList($pdo){
  $query = $pdo->query("SELECT id, name FROM shops")->fetchAll(PDO::FETCH_KEY_PAIR);
  return json_encode($query, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
}


//  Search request
if(isset($_GET['search']) && $_GET['search'] !== ""){
  $result = searchRequest($_GET, $pdo);
}

//  Gettings categories list
if(isset($_GET['get_categories'])){$result = getCategories($pdo);}

//  Getting shops list
if(isset($_GET['get_shopslist'])){$result = getShopsList($pdo);}


// Output result
if(isset($result)){
  header('Content-Type: application/json');
  echo $result;
}
?>
