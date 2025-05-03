-- Usuarios
INSERT INTO usuarios (id, nombre, email, telefono, direccion, administrador, valoracion_media)
VALUES 
('11111111-1111-1111-1111-111111111111', 'Juan Pérez', 'juan@example.com', '123456789', 'Calle Falsa 123', TRUE, 4.5),
('22222222-2222-2222-2222-222222222222', 'Ana Gómez', 'ana@example.com', '987654321', 'Av. Siempre Viva 742', FALSE, 4.2),
('33333333-3333-3333-3333-333333333333', 'Carlos Sánchez', 'carlos@example.com', '555123456', 'Calle Luna 123', FALSE, 3.8),
('44444444-4444-4444-4444-444444444444', 'Marta Díaz', 'marta@example.com', '555654321', 'Calle Sol 456', FALSE, 4.1),
('55555555-5555-5555-5555-555555555555', 'Pedro Gómez', 'pedro@example.com', '555987654', 'Calle Estrella 789', TRUE, 4.6);

-- Seguridad usuarios
INSERT INTO seguridad_usuarios (id, usuario_id, contrasena, verificado, codigo_verificacion)
VALUES 
(UUID(), '11111111-1111-1111-1111-111111111111', 'hashed_pass_juan', TRUE, NULL),
(UUID(), '22222222-2222-2222-2222-222222222222', 'hashed_pass_ana', FALSE, 'ABC123'),
(UUID(), '33333333-3333-3333-3333-333333333333', 'hashed_pass_carlos', TRUE, NULL),
(UUID(), '44444444-4444-4444-4444-444444444444', 'hashed_pass_marta', FALSE, 'XYZ789'),
(UUID(), '55555555-5555-5555-5555-555555555555', 'hashed_pass_pedro', TRUE, NULL);

-- Categorías
INSERT INTO categorias (id, nombre, descripcion)
VALUES 
('cat-aaa-001', 'Lácteos', 'Productos derivados de la leche'),
('cat-bbb-002', 'Frutas', 'Frutas frescas y de temporada'),
('cat-ccc-003', 'Verduras', 'Vegetales frescos y orgánicos'),
('cat-ddd-004', 'Cárnicos', 'Carnes de alta calidad y frescas');

-- Productos
INSERT INTO productos (id, nombre, descripcion, imagen_url, numero_lote, fecha_produccion, fecha_caducidad, unidad_medida, cantidad_disponible, precio_actual, usuario_id, categoria_id, valoracion_media)
VALUES 
('prod-aaa-001', 'Leche Entera', 'Leche de vaca 1L', 'http://imagen.com/leche.jpg', 'L001', '2025-04-01', '2025-06-01', 'Litro', 100, 1.50, '11111111-1111-1111-1111-111111111111', 'cat-aaa-001', 4.7),
('prod-bbb-002', 'Manzana Roja', 'Manzana roja orgánica', 'http://imagen.com/manzana.jpg', 'F001', '2025-04-15', '2025-05-15', 'Kg', 50, 2.00, '22222222-2222-2222-2222-222222222222', 'cat-bbb-002', 4.3),
('prod-ccc-003', 'Lechuga', 'Lechuga fresca y crujiente', 'http://imagen.com/lechuga.jpg', 'V001', '2025-04-05', '2025-05-05', 'Kg', 200, 0.90, '33333333-3333-3333-3333-333333333333', 'cat-ccc-003', 4.0),
('prod-ddd-004', 'Pechuga de Pollo', 'Pechuga de pollo fresca', 'http://imagen.com/pechuga_pollo.jpg', 'C001', '2025-04-10', '2025-06-10', 'Kg', 150, 5.00, '44444444-4444-4444-4444-444444444444', 'cat-ddd-004', 4.5);

-- Precios producto
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio)
VALUES 
(UUID(), 'prod-aaa-001', 1.30, '2025-03-01 10:00:00'),
(UUID(), 'prod-bbb-002', 1.80, '2025-03-15 10:00:00'),
(UUID(), 'prod-ccc-003', 0.85, '2025-04-05 09:00:00'),
(UUID(), 'prod-ddd-004', 4.80, '2025-04-10 08:30:00');

-- Favoritos
INSERT INTO favoritos_producto (id, usuario_id, producto_id)
VALUES 
(UUID(), '22222222-2222-2222-2222-222222222222', 'prod-aaa-001'),
(UUID(), '55555555-5555-5555-5555-555555555555', 'prod-ccc-003'),
(UUID(), '33333333-3333-3333-3333-333333333333', 'prod-ddd-004');

-- Alertas
INSERT INTO alertas_usuario (id, usuario_id, categoria_id, nombre_clave)
VALUES 
(UUID(), '22222222-2222-2222-2222-222222222222', 'cat-aaa-001', 'leche'),
(UUID(), '55555555-5555-5555-5555-555555555555', 'cat-ddd-004', 'pollo'),
(UUID(), '44444444-4444-4444-4444-444444444444', 'cat-ccc-003', 'lechuga');

-- Compras
INSERT INTO compras (id, usuario_comprador_id, nombre_pagador, direccion_entrega, destinatario)
VALUES 
('compra-001', '22222222-2222-2222-2222-222222222222', 'Ana Gómez', 'Av. Siempre Viva 742', 'Ana Gómez'),
('compra-002', '33333333-3333-3333-3333-333333333333', 'Carlos Sánchez', 'Calle Luna 123', 'Carlos Sánchez'),
('compra-003', '44444444-4444-4444-4444-444444444444', 'Marta Díaz', 'Calle Sol 456', 'Marta Díaz');

-- Estado pedido
INSERT INTO estado_pedido (id, compra_id, estado)
VALUES 
(UUID(), 'compra-001', 'Enviado'),
(UUID(), 'compra-002', 'Pendiente'),
(UUID(), 'compra-003', 'Enviado');

-- Detalle compra
INSERT INTO detalle_compra (id, compra_id, producto_id, cantidad, precio_unitario)
VALUES 
(UUID(), 'compra-001', 'prod-aaa-001', 2, 1.50),
(UUID(), 'compra-002', 'prod-ccc-003', 5, 0.90),
(UUID(), 'compra-003', 'prod-ddd-004', 3, 4.80);

-- Valoraciones de usuarios
INSERT INTO valoraciones_usuario (id, usuario_id, compra_id, valoracion, comentario)
VALUES 
(UUID(), '11111111-1111-1111-1111-111111111111', 'compra-001', 5, 'Muy buen comprador, todo correcto.'),
(UUID(), '33333333-3333-3333-3333-333333333333', 'compra-002', 4, 'Buen producto, aunque llegó un poco tarde.'),
(UUID(), '44444444-4444-4444-4444-444444444444', 'compra-003', 5, 'Excelente calidad, lo recomiendo.');
