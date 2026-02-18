<?php
/**
 * Mazuba Envirotech - Database Connection
 * MySQL PDO connection with error handling
 */

require_once __DIR__ . '/config.php';

function getDatabase(): PDO {
    static $pdo = null;

    if ($pdo === null) {
        $dsn = sprintf(
            'mysql:host=%s;port=%s;dbname=%s;charset=utf8mb4',
            DB_HOST,
            DB_PORT,
            DB_NAME
        );

        try {
            $pdo = new PDO($dsn, DB_USER, DB_PASSWORD, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ]);
        } catch (PDOException $e) {
            if (APP_ENV === 'development') {
                die('Database connection failed: ' . $e->getMessage());
            }
            die('Database connection failed.');
        }
    }

    return $pdo;
}
