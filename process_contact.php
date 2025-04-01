<?php
// Start session
session_start();

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check honeypot field to prevent spam
    if (!empty($_POST['botcheck'])) {
        // This is a bot submission, redirect back to contact page
        header("Location: /contact?status=error&message=" . urlencode("Error processing your request."));
        exit;
    }
    
    // Validate required fields
    $required_fields = ['name', 'email', 'phone', 'subject', 'message'];
    $errors = [];
    
    foreach ($required_fields as $field) {
        if (empty($_POST[$field])) {
            $errors[] = ucfirst($field) . " is required";
        }
    }
    
    // Validate email format
    if (!empty($_POST['email']) && !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }
    
    // If there are errors, redirect back with error message
    if (!empty($errors)) {
        $error_message = implode(", ", $errors);
        header("Location: /contact?status=error&message=" . urlencode($error_message));
        exit;
    }
    
    // Process the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    
    // In a real application, you would send an email here
    // For demonstration purposes, we'll just simulate a successful submission
    
    // Set a success message in the session
    $_SESSION['contact_form_status'] = 'success';
    $_SESSION['contact_form_message'] = 'Thank you for your message. We\'ll get back to you shortly!';
    
    // Redirect to contact page with success message
    header("Location: /contact?status=success&message=" . urlencode("Thank you for your message. We'll get back to you shortly!"));
    exit;
} else {
    // If someone tries to access this file directly, redirect to the contact page
    header("Location: /contact");
    exit;
}
