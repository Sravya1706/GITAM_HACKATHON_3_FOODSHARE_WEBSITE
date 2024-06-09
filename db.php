<?php
$servername = "localhost";
$username = "id22291629_root";
$password = "Vinay@2002";
$dbname = "id22291629_foodshare";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
