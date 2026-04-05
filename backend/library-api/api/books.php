<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("database.php");

$sql = "SELECT * FROM books";
$result = mysqli_query($conn, $sql);

$books = [];

while ($row = mysqli_fetch_assoc($result)) {
    $books[] = $row;
}

echo json_encode($books);

mysqli_close($conn);
