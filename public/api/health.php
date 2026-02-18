<?php
/**
 * Mazuba Envirotech - Health Check API
 */

header('Content-Type: application/json');

require_once __DIR__ . '/../../includes/config.php';

echo json_encode([
    'status' => 'OK',
    'message' => 'Mazuba API is running',
    'database' => 'MySQL',
    'timestamp' => date('c'),
]);
