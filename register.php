<?php
include 'db.php'; // Include your database connection file

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $dob = $_POST['dob'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $type = $_POST['type'];

    // Insert basic user data into the 'users' table
    $stmt = $conn->prepare("INSERT INTO users (name, dob, password, type) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $dob, $password, $type);
    $stmt->execute();
    $userId = $stmt->insert_id;
    $stmt->close();

    // Insert additional data based on user type into respective tables
    if ($type === 'ngo') {
        $ngoName = $_POST['ngoName'];
        $ngoLocation = $_POST['ngoLocation'];
        $ngoRegNumber = $_POST['ngoRegNumber'];

        // Insert NGO data into the 'ngos' table
        $stmt = $conn->prepare("INSERT INTO ngos (user_id, ngo_name, location, register_number) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("isss", $userId, $ngoName, $ngoLocation, $ngoRegNumber);
    } elseif ($type === 'business') {
        $businessName = $_POST['businessName'];
        $location = $_POST['location'];
        $registerNumber = $_POST['registerNumber'];

        // Insert business data into the 'businesses' table
        $stmt = $conn->prepare("INSERT INTO businesses (user_id, business_name, location, register_number) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("isss", $userId, $businessName, $location, $registerNumber);
    }

    // Execute the prepared statement for additional data insertion
    if ($stmt->execute()) {
        echo "<script>alert('Registration successful');</script>";
    } else {
        echo "<script>alert('Registration failed');</script>";
    }

    $stmt->close();
    $conn->close();
}
?>
