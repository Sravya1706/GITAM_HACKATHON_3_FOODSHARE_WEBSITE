<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT id, password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($userId, $hash);
    $stmt->fetch();
    $stmt->close();

    if (password_verify($password, $hash)) {
        echo json_encode(["status" => "success", "message" => "Login successful", "userId" => $userId]);
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid credentials"]);
    }
    $conn->close();
}
?>

