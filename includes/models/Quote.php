<?php
/**
 * Mazuba Envirotech - Quote Model
 * CRUD operations for the quotes table
 */

require_once __DIR__ . '/../database.php';

class Quote {
    /**
     * Create a new quote
     */
    public static function create(array $data): array {
        $db = getDatabase();
        $sql = "INSERT INTO quotes (name, email, phone, service, property_type, location, message, status, created_at, updated_at)
                VALUES (:name, :email, :phone, :service, :property_type, :location, :message, 'pending', NOW(), NOW())";

        $stmt = $db->prepare($sql);
        $stmt->execute([
            ':name' => $data['name'],
            ':email' => $data['email'],
            ':phone' => $data['phone'] ?? null,
            ':service' => $data['service'],
            ':property_type' => $data['propertyType'] ?? null,
            ':location' => $data['location'] ?? null,
            ':message' => $data['message'] ?? null,
        ]);

        return ['id' => (int)$db->lastInsertId()] + $data;
    }

    /**
     * Get all quotes ordered by newest first
     */
    public static function getAll(): array {
        $db = getDatabase();
        $stmt = $db->query('SELECT * FROM quotes ORDER BY created_at DESC');
        return $stmt->fetchAll();
    }

    /**
     * Get a single quote by ID
     */
    public static function getById(int $id): ?array {
        $db = getDatabase();
        $stmt = $db->prepare('SELECT * FROM quotes WHERE id = :id');
        $stmt->execute([':id' => $id]);
        $result = $stmt->fetch();
        return $result ?: null;
    }

    /**
     * Update quote status
     */
    public static function updateStatus(int $id, string $status): ?array {
        $db = getDatabase();
        $stmt = $db->prepare('UPDATE quotes SET status = :status, updated_at = NOW() WHERE id = :id');
        $stmt->execute([':status' => $status, ':id' => $id]);

        if ($stmt->rowCount() === 0) return null;
        return ['id' => $id, 'status' => $status];
    }

    /**
     * Delete a quote
     */
    public static function delete(int $id): bool {
        $db = getDatabase();
        $stmt = $db->prepare('DELETE FROM quotes WHERE id = :id');
        $stmt->execute([':id' => $id]);
        return $stmt->rowCount() > 0;
    }
}
