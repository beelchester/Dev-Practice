<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "password";
$database = "test123";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));

$input = json_decode(file_get_contents('php://input'), true);
$sqlCreateTable = "CREATE TABLE IF NOT EXISTS users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50)
)";

if ($conn->query($sqlCreateTable) === TRUE) {

switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM users";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $data = array();
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            echo json_encode($data);
        } else {
            echo "No users found";
        }
        break;
    case 'POST':
        $name = $input['name'];
        $email = $input['email'];
        $sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        break;
    case 'PUT':
        $id = $request[0];
        $name = $input['name'];
        $email = $input['email'];
        $sql = "UPDATE users SET name='$name', email='$email' WHERE id=$id";
        if ($conn->query($sql) === TRUE) {
            echo "Record updated successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        break;
    case 'DELETE':
        $id = $request[0];
        $sql = "DROP TABLE users";
        if ($conn->query($sql) === TRUE) {
            echo "Record deleted successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        break;
}}

$conn->close();
?>

