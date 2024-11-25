<?php
// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $job = $_POST['job'];

    // Validate the phone number (optional, additional check)
    if (!preg_match('/^09[0-9]{9}$/', $phone)) {
        echo "Invalid phone number format.";
        exit;
    }

    // Email configuration
    $to = "286.mahmoodi.286@gmail.com";
    $subject = "New Consulting Request";
    $headers = "From: no-reply@yourdomain.com" . "\r\n" .
        "Reply-To: no-reply@yourdomain.com" . "\r\n" .
        "Content-Type: text/plain; charset=UTF-8";

    // Email content
    $body = "You have received a new consulting request:\n\n";
    $body .= "Name: $name\n";
    $body .= "Phone: $phone\n";
    $body .= "Job Field: $job\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Your request has been sent successfully!');</script>";
    } else {
        echo "<script>alert('Failed to send your request. Please try again.');</script>";
    }
} else {
    echo "<script>alert('Invalid request.');</script>";
}
?>
