-- Usuarios
INSERT INTO usuarios (id, nombre, email, telefono, direccion, administrador, valoracion_media)
VALUES 
('11111111-1111-1111-1111-111111111111', 'Juan Pérez', 'juan@example.com', '123456789', 'Calle Falsa 123', TRUE, 4.5),
('22222222-2222-2222-2222-222222222222', 'Ana Gómez', 'ana@example.com', '987654321', 'Av. Siempre Viva 742', FALSE, 4.2),
('33333333-3333-3333-3333-333333333333', 'Carlos Sánchez', 'carlos@example.com', '555123456', 'Calle Luna 123', FALSE, 3.8),
('44444444-4444-4444-4444-444444444444', 'Marta Díaz', 'marta@example.com', '555654321', 'Calle Sol 456', FALSE, 4.1),
('55555555-5555-5555-5555-555555555555', 'Pedro Gómez', 'pedro@example.com', '555987654', 'Calle Estrella 789', TRUE, 4.6),
('66666666-6666-6666-6666-666666666666', 'Laura Méndez', 'laura@example.com', '666123456', 'Calle Nube 321', FALSE, 4.3),
('77777777-7777-7777-7777-777777777777', 'Diego Torres', 'diego@example.com', '777123456', 'Av. Palmeras 456', FALSE, 4.1),
('88888888-8888-8888-8888-888888888888', 'Claudia Romero', 'claudia@example.com', '888123456', 'Calle Jardín 654', FALSE, 3.9),
('99999999-9999-9999-9999-999999999999', 'Sergio Rivas', 'sergio@example.com', '999123456', 'Av. Central 111', TRUE, 4.8),
('aaaaaaa1-aaaa-aaaa-aaaa-aaaaaaaaaaa1', 'Valentina Cruz', 'valentina@example.com', '111987654', 'Calle Sauce 222', FALSE, 4.0),
('bbbbbbb2-bbbb-bbbb-bbbb-bbbbbbbbbbb2', 'Tomás Molina', 'tomas@example.com', '222987654', 'Calle Cedro 333', FALSE, 4.2),
('ccccccc3-cccc-cccc-cccc-ccccccccccc3', 'Emilia Duarte', 'emilia@example.com', '333987654', 'Av. Río 444', FALSE, 4.5),
('ddddddd4-dddd-dddd-dddd-ddddddddddd4', 'Rodrigo Núñez', 'rodrigo@example.com', '444987654', 'Av. Sol 555', FALSE, 4.1),
('eeeeeee5-eeee-eeee-eeee-eeeeeeeeeee5', 'Isabel Morales', 'isabel@example.com', '555987654', 'Calle Lago 666', FALSE, 3.7),
('fffffff6-ffff-ffff-ffff-fffffffffff6', 'Felipe Herrera', 'felipe@example.com', '666987654', 'Calle Sierra 777', TRUE, 4.4),
('ggggggg7-gggg-gggg-gggg-ggggggggggg7', 'Lucía Navarro', 'lucia@example.com', '777987654', 'Av. Viento 888', FALSE, 4.2),
('hhhhhhh8-hhhh-hhhh-hhhh-hhhhhhhhhhh8', 'Mateo Vargas', 'mateo@example.com', '888987654', 'Calle Mar 999', FALSE, 4.3),
('iiiiiii9-iiii-iiii-iiii-iiiiiiiiiii9', 'Camila Reyes', 'camila@example.com', '999987654', 'Av. Luna 101', FALSE, 4.0),
('jjjjjjj0-jjjj-jjjj-jjjj-jjjjjjjjjjj0', 'Nicolás Silva', 'nicolas@example.com', '111223344', 'Calle Estrella 202', FALSE, 4.1),
('kkkkkkk1-kkkk-kkkk-kkkk-kkkkkkkkkkk1', 'Paula Ortega', 'paula@example.com', '222334455', 'Av. Cielo 303', FALSE, 4.4),
('lllllll2-llll-llll-llll-lllllllllll2', 'Andrés León', 'andres@example.com', '333445566', 'Calle Aurora 404', TRUE, 4.6),
('mmmmmmm3-mmmm-mmmm-mmmm-mmmmmmmmmmm3', 'Renata Peña', 'renata@example.com', '444556677', 'Av. Colinas 505', FALSE, 4.3),
('nnnnnnn4-nnnn-nnnn-nnnn-nnnnnnnnnnn4', 'Martín Ibáñez', 'martin@example.com', '555667788', 'Calle Arcoiris 606', FALSE, 3.9),
('ooooooo5-oooo-oooo-oooo-ooooooooooo5', 'Alejandra Paredes', 'alejandra@example.com', '666778899', 'Calle Rocas 707', FALSE, 4.2),
('ppppppp6-pppp-pppp-pppp-ppppppppppp6', 'Gabriel Soto', 'gabriel@example.com', '777889900', 'Av. Brisa 808', FALSE, 4.1);

-- Seguridad usuarios
INSERT INTO seguridad_usuarios (id, usuario_id, contrasena, verificado, codigo_verificacion)
VALUES 
(UUID(), '11111111-1111-1111-1111-111111111111', 'hashed_pass_juan', TRUE, NULL),
(UUID(), '22222222-2222-2222-2222-222222222222', 'hashed_pass_ana', FALSE, 'ABC123'),
(UUID(), '33333333-3333-3333-3333-333333333333', 'hashed_pass_carlos', TRUE, NULL),
(UUID(), '44444444-4444-4444-4444-444444444444', 'hashed_pass_marta', FALSE, 'XYZ789'),
(UUID(), '55555555-5555-5555-5555-555555555555', 'hashed_pass_pedro', TRUE, NULL),
(UUID(), '66666666-6666-6666-6666-666666666666', 'hashed_pass_laura', TRUE, NULL),
(UUID(), '77777777-7777-7777-7777-777777777777', 'hashed_pass_diego', FALSE, 'DEF456'),
(UUID(), '88888888-8888-8888-8888-888888888888', 'hashed_pass_claudia', TRUE, NULL),
(UUID(), '99999999-9999-9999-9999-999999999999', 'hashed_pass_sergio', TRUE, NULL),
(UUID(), 'aaaaaaa1-aaaa-aaaa-aaaa-aaaaaaaaaaa1', 'hashed_pass_valentina', FALSE, 'GHI789'),
(UUID(), 'bbbbbbb2-bbbb-bbbb-bbbb-bbbbbbbbbbb2', 'hashed_pass_tomas', TRUE, NULL),
(UUID(), 'ccccccc3-cccc-cccc-cccc-ccccccccccc3', 'hashed_pass_emilia', TRUE, NULL),
(UUID(), 'ddddddd4-dddd-dddd-dddd-ddddddddddd4', 'hashed_pass_rodrigo', FALSE, 'JKL012'),
(UUID(), 'eeeeeee5-eeee-eeee-eeee-eeeeeeeeeee5', 'hashed_pass_isabel', TRUE, NULL),
(UUID(), 'fffffff6-ffff-ffff-ffff-fffffffffff6', 'hashed_pass_felipe', TRUE, NULL),
(UUID(), 'ggggggg7-gggg-gggg-gggg-ggggggggggg7', 'hashed_pass_lucia', FALSE, 'MNO345'),
(UUID(), 'hhhhhhh8-hhhh-hhhh-hhhh-hhhhhhhhhhh8', 'hashed_pass_mateo', TRUE, NULL),
(UUID(), 'iiiiiii9-iiii-iiii-iiii-iiiiiiiiiii9', 'hashed_pass_camila', TRUE, NULL),
(UUID(), 'jjjjjjj0-jjjj-jjjj-jjjj-jjjjjjjjjjj0', 'hashed_pass_nicolas', FALSE, 'PQR678'),
(UUID(), 'kkkkkkk1-kkkk-kkkk-kkkk-kkkkkkkkkkk1', 'hashed_pass_paula', TRUE, NULL),
(UUID(), 'lllllll2-llll-llll-llll-lllllllllll2', 'hashed_pass_andres', TRUE, NULL),
(UUID(), 'mmmmmmm3-mmmm-mmmm-mmmm-mmmmmmmmmmm3', 'hashed_pass_renata', FALSE, 'STU901'),
(UUID(), 'nnnnnnn4-nnnn-nnnn-nnnn-nnnnnnnnnnn4', 'hashed_pass_martin', TRUE, NULL),
(UUID(), 'ooooooo5-oooo-oooo-oooo-ooooooooooo5', 'hashed_pass_alejandra', TRUE, NULL),
(UUID(), 'ppppppp6-pppp-pppp-pppp-ppppppppppp6', 'hashed_pass_gabriel', FALSE, 'VWX234');

-- Categorías
INSERT INTO categorias (id, nombre, descripcion)
VALUES 
('cat-aaa-001', 'hortaliza', 'Hortalizas frescas y de temporada'),
('cat-bbb-002', 'fruta', 'Frutas frescas y de temporada'),
('cat-ccc-003', 'verdura', 'Vegetales frescos y orgánicos'),
('cat-ddd-004', 'otros', 'Otros productos de alta calidad');

-- Productos
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido)
VALUES 
('prod-aaa-001', 'Leche Entera', 'Leche de vaca 1L', 'http://imagen.com/leche.jpg', '2025-04-01', 'Litro', 1.50, '11111111-1111-1111-1111-111111111111', 'cat-aaa-001', 4.7, FALSE),
('prod-bbb-002', 'Manzana Roja', 'Manzana roja orgánica', 'http://imagen.com/manzana.jpg', '2025-04-15', 'Kg', 2.00, '22222222-2222-2222-2222-222222222222', 'cat-bbb-002', 4.3, FALSE),
('prod-ccc-003', 'Lechuga', 'Lechuga fresca y crujiente', 'http://imagen.com/lechuga.jpg', '2025-04-05', 'Kg', 0.90, '33333333-3333-3333-3333-333333333333', 'cat-ccc-003', 4.0, FALSE),
('prod-ddd-004', 'Pechuga de Pollo', 'Pechuga de pollo fresca', 'http://imagen.com/pechuga_pollo.jpg', '2025-06-10', 'Kg', 5.00, '44444444-4444-4444-4444-444444444444', 'cat-ddd-004', 4.5, TRUE),
('prod-aaa-005', 'Yogur Natural', 'Yogur natural sin azúcar', 'http://imagen.com/yogur.jpg', '2025-04-10', 'Unidad', 0.80, '66666666-6666-6666-6666-666666666666', 'cat-aaa-001', 4.6, FALSE),
('prod-aaa-006', 'Queso Fresco', 'Queso fresco artesanal', 'http://imagen.com/queso.jpg', '2025-04-12', 'Kg', 4.50, '99999999-9999-9999-9999-999999999999', 'cat-aaa-001', 4.8, TRUE),
('prod-aaa-007', 'Leche Deslactosada', 'Leche deslactosada 1L', 'http://imagen.com/leche_d.jpg', '2025-04-20', 'Litro', 1.70, 'aaaaaaa1-aaaa-aaaa-aaaa-aaaaaaaaaaa1', 'cat-aaa-001', 4.4, FALSE),
('prod-bbb-008', 'Banana', 'Banana madura de cultivo ecológico', 'http://imagen.com/banana.jpg', '2025-04-18', 'Kg', 1.80, 'bbbbbbb2-bbbb-bbbb-bbbb-bbbbbbbbbbb2', 'cat-bbb-002', 4.2, FALSE),
('prod-bbb-009', 'Pera Conferencia', 'Pera jugosa y fresca', 'http://imagen.com/pera.jpg', '2025-04-14', 'Kg', 2.10, 'ccccccc3-cccc-cccc-cccc-ccccccccccc3', 'cat-bbb-002', 4.1, TRUE),
('prod-bbb-010', 'Uva Blanca', 'Uva blanca sin semilla', 'http://imagen.com/uva.jpg', '2025-04-22', 'Kg', 2.50, 'ddddddd4-dddd-dddd-dddd-ddddddddddd4', 'cat-bbb-002', 4.3, FALSE),
('prod-ccc-011', 'Espinaca', 'Espinaca fresca en hojas', 'http://imagen.com/espinaca.jpg', '2025-04-08', 'Kg', 1.20, 'eeeeeee5-eeee-eeee-eeee-eeeeeeeeeee5', 'cat-ccc-003', 4.0, FALSE),
('prod-ccc-012', 'Zanahoria', 'Zanahoria orgánica', 'http://imagen.com/zanahoria.jpg', '2025-04-09', 'Kg', 1.00, 'fffffff6-ffff-ffff-ffff-fffffffffff6', 'cat-ccc-003', 4.2, TRUE),
('prod-ccc-013', 'Brócoli', 'Brócoli verde fresco', 'http://imagen.com/brocoli.jpg', '2025-04-17', 'Kg', 1.70, 'ggggggg7-gggg-gggg-gggg-ggggggggggg7', 'cat-ccc-003', 4.5, FALSE),
('prod-ddd-014', 'Carne Molida', 'Carne molida 90/10', 'http://imagen.com/carne_molida.jpg', '2025-04-03', 'Kg', 6.50, 'hhhhhhh8-hhhh-hhhh-hhhh-hhhhhhhhhhh8', 'cat-ddd-004', 4.6, TRUE),
('prod-ddd-015', 'Costillas de Cerdo', 'Costillas con corte grueso', 'http://imagen.com/costillas.jpg', '2025-04-06', 'Kg', 7.20, 'iiiiiii9-iiii-iiii-iiii-iiiiiiiiiii9', 'cat-ddd-004', 4.4, FALSE),
('prod-ddd-016', 'Chuleta de Res', 'Chuleta de res premium', 'http://imagen.com/chuleta.jpg', '2025-04-11', 'Kg', 8.90, 'jjjjjjj0-jjjj-jjjj-jjjj-jjjjjjjjjjj0', 'cat-ddd-004', 4.7, TRUE),
('prod-aaa-017', 'Mantequilla', 'Mantequilla sin sal', 'http://imagen.com/mantequilla.jpg', '2025-04-13', 'Unidad', 2.30, 'kkkkkkk1-kkkk-kkkk-kkkk-kkkkkkkkkkk1', 'cat-aaa-001', 4.1, FALSE),
('prod-aaa-018', 'Leche de Cabra', 'Leche de cabra pasteurizada', 'http://imagen.com/leche_cabra.jpg', '2025-04-16', 'Litro', 2.10, 'lllllll2-llll-llll-llll-lllllllllll2', 'cat-aaa-001', 4.5, TRUE),
('prod-bbb-019', 'Fresa', 'Fresas frescas del campo', 'http://imagen.com/fresa.jpg', '2025-04-07', 'Kg', 3.00, 'mmmmmmm3-mmmm-mmmm-mmmm-mmmmmmmmmmm3', 'cat-bbb-002', 4.6, FALSE),
('prod-bbb-020', 'Mango', 'Mango maduro listo para comer', 'http://imagen.com/mango.jpg', '2025-04-19', 'Unidad', 1.20, 'nnnnnnn4-nnnn-nnnn-nnnn-nnnnnnnnnnn4', 'cat-bbb-002', 4.3, FALSE),
('prod-ccc-021', 'Col Rizada', 'Col rizada orgánica', 'http://imagen.com/col_rizada.jpg', '2025-04-21', 'Kg', 1.90, 'ooooooo5-oooo-oooo-oooo-ooooooooooo5', 'cat-ccc-003', 4.2, FALSE),
('prod-ccc-022', 'Pimiento Rojo', 'Pimiento rojo dulce', 'http://imagen.com/pimiento.jpg', '2025-04-23', 'Kg', 2.20, 'ppppppp6-pppp-pppp-pppp-ppppppppppp6', 'cat-ccc-003', 4.4, TRUE);

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
INSERT INTO alertas_usuario (id, usuario_id, categoria_id, nombre_clave, activo)
VALUES 
(UUID(), '22222222-2222-2222-2222-222222222222', 'cat-aaa-001', 'leche', TRUE),
(UUID(), '55555555-5555-5555-5555-555555555555', 'cat-ddd-004', 'pollo', FALSE),
(UUID(), '44444444-4444-4444-4444-444444444444', 'cat-ccc-003', 'lechuga', FALSE);

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
