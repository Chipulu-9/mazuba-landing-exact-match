<?php
/**
 * Mazuba Envirotech - Contact Model
 * CRUD operations for the contacts table
 */

require_once __DIR__ . '/../database.php';

class Contact {
    /**
     * Create a new contact submission
     */
    public static function create(array $data): array {
        $db = getDatabase();
        $sql = "INSERT INTO contacts (name, email, phone, subject, message, status, created_at, updated_at)
                VALUES (:name, :email, :phone, :subject, :message, 'unread', NOW(), NOW())";

        $stmt = $db->prepare($sql);
        $stmt->execute([
            ':name' => $data['name'],
            ':email' => $data['email'],
            ':phone' => $data['phone'] ?? null,
            ':subject' => $data['subject'],
            ':message' => $data['message'],
        ]);

        return ['id' => (int)$db->lastInsertId()] + $data;
    }

    /**
     * Get all contacts ordered by newest first
     */
    public static function getAll(): array {
        $db = getDatabase();
        $stmt = $db->query('SELECT * FROM contacts ORDER BY created_at DESC');
        return $stmt->fetchAll();
    }

    /**
     * Get a single contact by ID
     */
    public static function getById(int $id): ?array {
        $db = getDatabase();
        $stmt = $db->prepare('SELECT * FROM contacts WHERE id = :id');
        $stmt->execute([':id' => $id]);
        $result = $stmt->fetch();
        return $result ?: null;
    }

    /**
     * Update contact status
     */
    public static function updateStatus(int $id, string $status): ?array {
        $db = getDatabase();
        $stmt = $db->prepare('UPDATE contacts SET status = :status, updated_at = NOW() WHERE id = :id');
        $stmt->execute([':status' => $status, ':id' => $id]);

        if ($stmt->rowCount() === 0) return null;
        return ['id' => $id, 'status' => $status];
    }

    /**
     * Delete a contact
     */
    public static function delete(int $id): bool {
        $db = getDatabase();
        $stmt = $db->prepare('DELETE FROM contacts WHERE id = :id');
        $stmt->execute([':id' => $id]);
        return $stmt->rowCount() > 0;
    }
}
