

<?php
// Database credentials
$host = "localhost";
$username = "root";
$password = "1234567";
$dbname = "kanto_wagyu";

// Establish connection
$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Checks if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first = $_POST['firstname'];
    $last = $_POST['lastname'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];

    // Prepares and binds data for security
    $stmt = $conn->prepare("INSERT INTO feedback (first_name, last_name, email, comment) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $first, $last, $email, $comment);

    // Executes and instantly redirects back to feedback section
    if ($stmt->execute()) {
        header("Location: support.html#feedback");
        exit(); 
    } else {
        echo "Error: " . $stmt->error;
    }
}

$stmt->close();
$conn->close();
?>