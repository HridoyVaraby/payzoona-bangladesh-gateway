<?php
// Simple test script to verify PHP is working correctly
header('Content-Type: application/json');

// Check if PHPMailer is available
$phpmailer_available = class_exists('PHPMailer\\PHPMailer\\PHPMailer');

// Check PHP version
$php_version = phpversion();

// Check if required extensions are loaded
$extensions = [
    'curl' => extension_loaded('curl'),
    'mbstring' => extension_loaded('mbstring'),
    'openssl' => extension_loaded('openssl'),
    'json' => extension_loaded('json')
];

// Check if vendor directory is accessible
$vendor_accessible = file_exists(__DIR__ . '/vendor/autoload.php');

// Check if we can write to log files
$log_writable = is_writable(__DIR__);

// Return diagnostic information
echo json_encode([
    'success' => true,
    'php_version' => $php_version,
    'phpmailer_available' => $phpmailer_available,
    'extensions' => $extensions,
    'vendor_accessible' => $vendor_accessible,
    'log_writable' => $log_writable,
    'server_info' => $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown'
]);