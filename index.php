<?php
// Start session for state management
session_start();

// Define base path
$base_path = dirname(__FILE__);

// Simple router
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

// Remove trailing slash if present
if ($path != '/' && substr($path, -1) === '/') {
    $path = rtrim($path, '/');
}

// Default route
if ($path === '/' || $path === '') {
    $page = 'home';
} else {
    // Remove leading slash
    $page = substr($path, 1);
}

// Valid pages
$valid_pages = [
    'home', 'about', 'services', 'contact', 'privacy-policy', 
    'terms-of-service', 'spare-parts', 'industrial-washing', 
    'ac-maintenance', 'ac-installation'
];

// Check if page exists
if (!in_array($page, $valid_pages)) {
    $page = 'home'; // Default to home if page not found
}

// Include header
include_once($base_path . '/includes/header.php');

// Include the requested page
include_once($base_path . '/pages/' . $page . '.php');

// Include footer
include_once($base_path . '/includes/footer.php');
?>