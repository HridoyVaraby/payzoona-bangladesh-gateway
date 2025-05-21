<?php
// Ensure no output before headers
ob_start();

// Set error handling to catch any PHP errors
set_error_handler(function($errno, $errstr, $errfile, $errline) {
    http_response_code(500);
    echo json_encode(['error' => 'PHP Error: ' . $errstr]);
    exit;
});

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request data']);
    exit;
}

// Validate required fields
$required_fields = ['name', 'email', 'message'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "$field is required"]);
        exit;
    }
}

// Composer autoloader
try {
    require 'vendor/autoload.php';
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to load required dependencies: ' . $e->getMessage()]);
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Create a new PHPMailer instance
// Create error log file if it doesn't exist
$logFile = __DIR__ . '/email_errors.log';
if (!file_exists($logFile)) {
    file_put_contents($logFile, '');
}

// Log start of email attempt
$logMessage = '[' . date('Y-m-d H:i:s') . '] Attempting to send email from: ' . $data['email'] . "\n";
file_put_contents($logFile, $logMessage, FILE_APPEND);

try {
    $mail = new PHPMailer(true);

    // Server settings
    $mail->isSMTP();
    $mail->Host = 'mail.modernarchitecturebd.com'; // Update this to Payzoona's mail server when available
    $mail->SMTPAuth = true;
    $mail->Username = 'admin@modernarchitecturebd.com'; // Update this to Payzoona's email when available
    $mail->Password = '[!cRin%vANa4'; // Update this to Payzoona's password when available
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    // Recipients
    $mail->setFrom('admin@modernarchitecturebd.com', 'Payzoona Contact Form'); // Update sender name
    $mail->addAddress('modernarchitecturebd@gmail.com'); // Update this to Payzoona's admin email when available
    $mail->addReplyTo($data['email'], $data['name']);

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';
    
    // Create HTML message
    $message = "<h2>New Payzoona Contact Form Submission</h2>";
    $message .= "<p><strong>Name:</strong> " . htmlspecialchars($data['name']) . "</p>";
    $message .= "<p><strong>Email:</strong> " . htmlspecialchars($data['email']) . "</p>";
    if (!empty($data['company'])) {
        $message .= "<p><strong>Company:</strong> " . htmlspecialchars($data['company']) . "</p>";
    }
    if (!empty($data['phone'])) {
        $message .= "<p><strong>Phone:</strong> " . htmlspecialchars($data['phone']) . "</p>";
    }
    $message .= "<p><strong>Message:</strong></p>";
    $message .= "<p>" . nl2br(htmlspecialchars($data['message'])) . "</p>";

    $mail->Body = $message;
    $mail->AltBody = strip_tags(str_replace(['<br>', '</p>'], "\n", $message));

    $mail->send();
    
    // Log successful email
    $logMessage = '[' . date('Y-m-d H:i:s') . '] Email successfully sent to: modernarchitecturebd@gmail.com' . "\n\n"; // Update this when email changes
    file_put_contents($logFile, $logMessage, FILE_APPEND);
    
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);

} catch (Exception $e) {
    // Log email error
    $errorMessage = $mail->ErrorInfo;
    $logMessage = '[' . date('Y-m-d H:i:s') . '] Error sending email: ' . $errorMessage . "\n\n";
    file_put_contents($logFile, $logMessage, FILE_APPEND);
    
    http_response_code(500);
    echo json_encode(['error' => 'Message could not be sent. Mailer Error: ' . $errorMessage]);
}

// Flush output buffer to ensure all content is sent
ob_end_flush();