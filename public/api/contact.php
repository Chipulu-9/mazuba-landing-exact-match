<?php
/**
 * Mazuba Envirotech - Contact API
 * Handles CRUD operations for contact form submissions
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/../../includes/models/Contact.php';

$method = $_SERVER['REQUEST_METHOD'];
$id = isset($_GET['id']) ? (int)$_GET['id'] : null;

try {
    switch ($method) {
        case 'GET':
            if ($id) {
                $contact = Contact::getById($id);
                if (!$contact) {
                    http_response_code(404);
                    echo json_encode(['message' => 'Contact not found']);
                    break;
                }
                echo json_encode($contact);
            } else {
                $contacts = Contact::getAll();
                echo json_encode($contacts);
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
            if (empty($data['subject']) || strlen($data['subject']) < 5 || strlen($data['subject']) > 200) {
                $errors[] = 'Subject is required (5-200 characters)';
            }
            if (empty($data['message']) || strlen($data['message']) < 10 || strlen($data['message']) > 2000) {
                $errors[] = 'Message is required (10-2000 characters)';
            }

            if (!empty($errors)) {
                http_response_code(400);
                echo json_encode(['message' => $errors[0]]);
                break;
            }

            $contact = Contact::create($data);
            http_response_code(201);
            echo json_encode([
                'message' => 'Contact form submitted successfully',
                'contact' => $contact
            ]);
            break;

        case 'PUT':
            if (!$id) {
                http_response_code(400);
                echo json_encode(['message' => 'Contact ID is required']);
                break;
            }

            $data = json_decode(file_get_contents('php://input'), true);
            if (empty($data['status'])) {
                http_response_code(400);
                echo json_encode(['message' => 'Status is required']);
                break;
            }

            $result = Contact::updateStatus($id, $data['status']);
            if (!$result) {
                http_response_code(404);
                echo json_encode(['message' => 'Contact not found']);
                break;
            }

            echo json_encode(['message' => 'Contact updated successfully', 'contact' => $result]);
            break;

        case 'DELETE':
            if (!$id) {
                http_response_code(400);
                echo json_encode(['message' => 'Contact ID is required']);
                break;
            }

            $deleted = Contact::delete($id);
            if (!$deleted) {
                http_response_code(404);
                echo json_encode(['message' => 'Contact not found']);
                break;
            }

            echo json_encode(['message' => 'Contact deleted successfully']);
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
