# Contact Form API Setup

## Overview
This folder contains the PHP backend for the contact form functionality. The main script `send-email.php` handles form submissions and sends emails using PHPMailer.

## Deployment Instructions

### 1. File Structure
When deploying to your hosting environment, ensure the following structure:

```
public_html/
├── api/
│   ├── vendor/           # PHPMailer dependencies
│   ├── composer.json
│   ├── composer.lock
│   └── send-email.php
├── assets/              # Your React app assets
└── index.html           # Your React app entry point
```

### 2. PHP Requirements
- PHP 7.4 or higher
- Extensions: curl, mbstring, openssl, json

### 3. PHPMailer Setup
If PHPMailer is not working on your server:

```bash
# Run these commands in the api directory on your server
composer install
```

### 4. Permissions
Ensure proper permissions:

```bash
chmod 755 api
chmod 644 api/*.php
chmod -R 755 api/vendor
```

### 5. Troubleshooting

#### Check PHP Error Logs
If you encounter a 500 error:
1. Check the `php_errors.log` and `email_errors.log` files in the api directory
2. Run the `test.php` script by visiting `yourdomain.com/api/test.php` to verify PHP configuration

#### Common Issues
- **500 Error**: Usually indicates a PHP configuration issue or missing dependencies
- **SMTP Connection Error**: Check your SMTP credentials and server settings
- **File Permission Issues**: Ensure proper permissions as outlined above

#### SMTP Configuration
Update the SMTP settings in `send-email.php` to match your hosting environment:

```php
$mail->Host = 'your-smtp-server.com';
$mail->Username = 'your-email@domain.com';
$mail->Password = 'your-password';
```

## Frontend Integration
The React app should use the relative path `./api/send-email.php` to ensure it works in both development and production environments.