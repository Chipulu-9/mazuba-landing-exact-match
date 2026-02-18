<?php
/**
 * Mazuba Envirotech - Quotes API
 * Handles CRUD operations for quote requests
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/../../includes/models/Quote.php';

$method = $_SERVER['REQUEST_METHOD'];

// Get ID from query string for GET/PUT/DELETE single record
$id = isset($_GET['id']) ? (int)$_GET['id'] : null;

try {
    switch ($method) {
        case 'GET':
            if ($id) {
                $quote = Quote::getById($id);
                if (!$quote) {
                    http_response_code(404);
                    echo json_encode(['message' => 'Quote not found']);
                    break;
                }
                echo json_encode($quote);
            } else {
                $quotes = Quote::getAll();
                echo json_encode($quotes);
            }
            break;

        case 'POST':
            $data = json_decode(file_get_contents('php://input'), true);

            // Validate required fields
            $errors = [];
            if (empty($data['name']) || strlen($data['name']) < 2 || strlen($data['name']) > 100) {
                $errors[] = 'Name is required (2-100 characters)';
            }
            if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
                $errors[] = 'A valid email is required';
            }
            if (empty($data['service'])) {
                $errors[] = 'Service is required';
            }

            if (!empty($errors)) {
                http_response_code(400);
                echo json_encode(['message' => $errors[0]]);
                break;
            }

            $quote = Quote::create($data);
            http_response_code(201);
            echo json_encode([
                'message' => 'Quote request submitted successfully',
                'quote' => $quote
            ]);
            break;

        case 'PUT':
            if (!$id) {
                http_response_code(400);
                echo json_encode(['message' => 'Quote ID is required']);
                break;
            }

            $data = json_decode(file_get_contents('php://input'), true);
            if (empty($data['status'])) {
                http_response_code(400);
                echo json_encode(['message' => 'Status is required']);
                break;
            }

            $result = Quote::updateStatus($id, $data['status']);
            if (!$result) {
                http_response_code(404);
                echo json_encode(['message' => 'Quote not found']);
                break;
            }

            echo json_encode(['message' => 'Quote updated successfully', 'quote' => $result]);
            break;

        case 'DELETE':
            if (!$id) {
                http_response_code(400);
                echo json_encode(['message' => 'Quote ID is required']);
                break;
            }

            $deleted = Quote::delete($id);
            if (!$deleted) {
                http_response_code(404);
                echo json_encode(['message' => 'Quote not found']);
                break;
            }

            echo json_encode(['message' => 'Quote deleted successfully']);
            break;

        default:
            http_response_code(405);
            echo json_encode(['message' => 'Method not allowed']);
    }
} catch (Exception $e) {
    http_response_code(500);
    $response = ['message' => 'Internal server error'];
    if (APP_ENV === 'development') {
        $response['error'] = $e->getMessage();
    }
    echo json_encode($response);
}
