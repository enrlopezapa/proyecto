-- Categorías
INSERT INTO categorias (id, nombre, descripcion)
VALUES 
('cat-aaa-001', 'hortaliza', 'Hortalizas frescas y de temporada'),
('cat-bbb-002', 'fruta', 'Frutas frescas y de temporada'),
('cat-ccc-003', 'verdura', 'Vegetales frescos y orgánicos'),
('cat-ddd-004', 'otros', 'Otros productos de alta calidad');

-- Productos
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('753afe0a40bc424aa4f9c82c7045bb3d', 'Lechuga Iceberg', 'Hortaliza fresca y de temporada, ideal para ensaladas y platos saludables.', 'img/lechuga.jpg', '2024-06-13', 'unidad', 31.53, '5a0216e3fb1db68a32e77745aec1abe1', 'cat-aaa-001', 0.23, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('af998b3dd1094430b01b8c178dcef31e', 'Pera Amarilla', 'Fruta fresca y jugosa, perfecta para disfrutar como snack o en batidos.', 'img/pera.jpg', '2024-09-24', 'kg', 11.8, 'b067f7b587ca09a379dc036d1587199c', 'cat-bbb-002', 2.52, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('8c09d9e1513943c8b35729256073139f', 'Lechuga Romana', 'Hortaliza fresca y de temporada, ideal para ensaladas y platos saludables.', 'img/lechuga.jpg', '2024-12-30', 'bolsa', 1.96, 'a5d8581432c320eea0548b1cec88731c', 'cat-aaa-001', 3.42, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('b0cd11206f644b849bca84fb6133cd9e', 'Brócoli', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/brocoli.jpg', '2024-11-20', 'caja', 66.69, '862084ce1d59fba9260f3e8d95a0cdd7', 'cat-ccc-003', 4.44, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('07fe48fd97c347eaa53e8347e38485f7', 'Pepino', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/pepino.jpg', '2025-04-14', 'kg', 53.94, '3649bc051c59bb03a1c69f80f858b726', 'cat-ccc-003', 4.95, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('7bffafce22d045a29f7b03fd4b1dff48', 'Lechuga Rizada', 'Hortaliza fresca y de temporada, ideal para ensaladas y platos saludables.', 'img/lechuga.jpg', '2025-05-01', 'kg', 92.94, 'f5b594b286380093f0879fea43d39379', 'cat-aaa-001', 4.42, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('cc5184ed5cb84b949b591356d84f48c7', 'Vinagre balsámico', 'Producto gourmet de alta calidad, ideal para complementar tu despensa.', 'img/vinagre.jpg', '2024-07-06', 'unidad', 69.47, 'ce3c3781ffdc1201eb4ff97481e76ac4', 'cat-ddd-004', 0.46, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('9d923b05f0284cedb60c9239f522589c', 'Espinaca', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/espinaca.jpg', '2024-08-02', 'caja', 74.67, 'e89488ca8577922bd2442a7864eb5faa', 'cat-ccc-003', 0.97, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('3f026a21bddb4df0a0395949e200d0ff', 'Arroz integral', 'Producto gourmet de alta calidad, ideal para complementar tu despensa.', 'img/arroz.jpg', '2024-06-07', 'caja', 7.29, '7aeeb43d5955d1a86c444e1370ae4f1e', 'cat-ddd-004', 3.47, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('9de9ddf2213f484e9898b178d9979837', 'Pepino', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/pepino.jpg', '2024-07-31', 'kg', 11.96, '3649bc051c59bb03a1c69f80f858b726', 'cat-ccc-003', 0.17, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('2dca2a7cc18d48b4a66431684ae8a270', 'Espinaca', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/espinaca.jpg', '2024-08-22', 'unidad', 55.88, 'c0b5fc08294fa0eafb5a86fd8393e655', 'cat-ccc-003', 3.7, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('48a8e307f96c44d18659e8abceefa4d6', 'Zanahoria', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/zanahoria.jpg', '2025-04-12', 'unidad', 74.27, 'c0b5fc08294fa0eafb5a86fd8393e655', 'cat-ccc-003', 1.22, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('f80dc50fe9d445f28ee141ce1a866af1', 'Brócoli', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/brocoli.jpg', '2025-02-22', 'bolsa', 53.77, 'ba254e61b7f3e3113e3819330ee336c4', 'cat-ccc-003', 2.25, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('d5e2a48e8b6a48a0bd09f090fcc68a8f', 'Aceite de oliva', 'Producto gourmet de alta calidad, ideal para complementar tu despensa.', 'img/aceite.jpg', '2024-09-14', 'caja', 77.67, 'ce3c3781ffdc1201eb4ff97481e76ac4', 'cat-ddd-004', 2.22, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('4845948f4fbc45f3bbdc7539aaa4e56b', 'Lechuga Rizada', 'Hortaliza fresca y de temporada, ideal para ensaladas y platos saludables.', 'img/lechuga.jpg', '2025-03-20', 'kg', 71.86, 'a5d8581432c320eea0548b1cec88731c', 'cat-aaa-001', 3.77, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('b4eaaa8f665246a6a616ed91ffdaeb1f', 'Espinaca', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/espinaca.jpg', '2025-02-02', 'caja', 42.61, '10de0ec1369e85bb55f33bf314b3b57c', 'cat-ccc-003', 0.53, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('4c854db6bfc54d3fa29075aef267472b', 'Sal marina', 'Producto gourmet de alta calidad, ideal para complementar tu despensa.', 'img/sal.jpg', '2024-06-23', 'unidad', 2.42, '547948462adfc580aba9c6ac0d07f9dc', 'cat-ddd-004', 1.68, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('825733665adb48bb8d9328ae107fa4cd', 'Fresa Roja', 'Fruta fresca y jugosa, perfecta para disfrutar como snack o en batidos.', 'img/fresa.jpg', '2024-11-12', 'kg', 67.05, '6d1b8cfd272263d24cb08ebcca8b9583', 'cat-bbb-002', 0.94, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('7e5e66c3203e4e0ca18106189f5e6cea', 'Lechuga Boston', 'Hortaliza fresca y de temporada, ideal para ensaladas y platos saludables.', 'img/lechuga.jpg', '2024-07-08', 'bolsa', 64.85, '7aeeb43d5955d1a86c444e1370ae4f1e', 'cat-aaa-001', 1.69, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('180d9a9f1a034a299d372b49577e3f52', 'Aceite de oliva', 'Producto gourmet de alta calidad, ideal para complementar tu despensa.', 'img/aceite.jpg', '2024-11-18', 'caja', 17.13, 'b067f7b587ca09a379dc036d1587199c', 'cat-ddd-004', 4.51, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('0b5136d8b5654f5984132b6586d9c71f', 'Arroz integral', 'Producto gourmet de alta calidad, ideal para complementar tu despensa.', 'img/arroz.jpg', '2024-10-16', 'caja', 54.65, '7ca4cd8d762b6f6ec5cf5e4424b26f16', 'cat-ddd-004', 4.26, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('f80abfcc490f45b291967cdc72ad5e17', 'Lechuga Iceberg', 'Hortaliza fresca y de temporada, ideal para ensaladas y platos saludables.', 'img/lechuga.jpg', '2025-02-11', 'unidad', 90.61, '10de0ec1369e85bb55f33bf314b3b57c', 'cat-aaa-001', 4.48, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('290c2e6de8fa42c6893c4c68071dd579', 'Lechuga Iceberg', 'Hortaliza fresca y de temporada, ideal para ensaladas y platos saludables.', 'img/lechuga.jpg', '2024-09-24', 'bolsa', 11.97, '547948462adfc580aba9c6ac0d07f9dc', 'cat-aaa-001', 4.05, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('4cf5269b52864fd780855b205d1fe147', 'Lechuga Boston', 'Hortaliza fresca y de temporada, ideal para ensaladas y platos saludables.', 'img/lechuga.jpg', '2024-06-02', 'unidad', 27.07, '189932f5fcfaa7b0504d7d6a8e71e10f', 'cat-aaa-001', 4.46, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('911d2d7299ad4992b202b5721c38f390', 'Zanahoria', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/zanahoria.jpg', '2025-04-28', 'unidad', 34.82, '7d08478fc09eaa666186546e28a74f86', 'cat-ccc-003', 1.86, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('e20baa59bb004330a5cc9be2b67a834a', 'Aceite de oliva', 'Producto gourmet de alta calidad, ideal para complementar tu despensa.', 'img/aceite.jpg', '2024-10-02', 'bolsa', 59.98, '7d08478fc09eaa666186546e28a74f86', 'cat-ddd-004', 3.97, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('ff205d7085bf49ecaf616126550f5638', 'Espinaca', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/espinaca.jpg', '2024-10-11', 'bolsa', 81.54, '10de0ec1369e85bb55f33bf314b3b57c', 'cat-ccc-003', 4.55, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('c937279f074c468992b101944e5b7505', 'Manzana Roja', 'Fruta fresca y jugosa, perfecta para disfrutar como snack o en batidos.', 'img/manzana.jpg', '2024-09-27', 'unidad', 13.87, '7ca4cd8d762b6f6ec5cf5e4424b26f16', 'cat-bbb-002', 3.18, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('b59c2954e41e4a5d8e49f6c89a207695', 'Pepino', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/pepino.jpg', '2024-11-10', 'caja', 67.21, 'ba254e61b7f3e3113e3819330ee336c4', 'cat-ccc-003', 0.95, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('64a27877f9df47b7a9e748b0b8851563', 'Brócoli', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/brocoli.jpg', '2024-12-12', 'unidad', 52.9, 'ce3c3781ffdc1201eb4ff97481e76ac4', 'cat-ccc-003', 2.34, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('63beef0d1af94dd1957cefba946048d6', 'Fresa Roja', 'Fruta fresca y jugosa, perfecta para disfrutar como snack o en batidos.', 'img/fresa.jpg', '2024-09-07', 'caja', 32.88, '7aeeb43d5955d1a86c444e1370ae4f1e', 'cat-bbb-002', 0.28, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('4eaabd51c30e45e49c1a72435da96717', 'Sal marina', 'Producto gourmet de alta calidad, ideal para complementar tu despensa.', 'img/sal.jpg', '2024-06-06', 'kg', 23.01, '7ca4cd8d762b6f6ec5cf5e4424b26f16', 'cat-ddd-004', 2.08, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('d5b4bc3ee5914509b4f2340fcd501629', 'Manzana Amarilla', 'Fruta fresca y jugosa, perfecta para disfrutar como snack o en batidos.', 'img/manzana.jpg', '2024-10-02', 'caja', 90.81, '0a8562488c4d185e5fd819a51b4398db', 'cat-bbb-002', 3.4, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('8e68592ecf9b42a7815df27b7329f1a8', 'Brócoli', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/brocoli.jpg', '2024-12-29', 'caja', 10.85, '189932f5fcfaa7b0504d7d6a8e71e10f', 'cat-ccc-003', 2.67, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('5dd62bcc7d9e4729a0d8ab84c632fd75', 'Pepino', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/pepino.jpg', '2025-03-29', 'bolsa', 68.2, '7aeeb43d5955d1a86c444e1370ae4f1e', 'cat-ccc-003', 0.27, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('b860f6b6cf834745befa9e8798cf36b4', 'Arroz integral', 'Producto gourmet de alta calidad, ideal para complementar tu despensa.', 'img/arroz.jpg', '2024-05-18', 'unidad', 34.37, '3649bc051c59bb03a1c69f80f858b726', 'cat-ddd-004', 1.35, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('597d9751ef2c4f1ba820d902bba2ee45', 'Manzana Amarilla', 'Fruta fresca y jugosa, perfecta para disfrutar como snack o en batidos.', 'img/manzana.jpg', '2024-09-02', 'unidad', 1.44, '235171da05a3742446aba2c7cb7fa401', 'cat-bbb-002', 3.92, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('803906afef9b437cbbd76df1551b4b0c', 'Arroz integral', 'Producto gourmet de alta calidad, ideal para complementar tu despensa.', 'img/arroz.jpg', '2024-10-28', 'bolsa', 21.25, '0a8562488c4d185e5fd819a51b4398db', 'cat-ddd-004', 4.46, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('3269518fef8a4ba0bee3ac45599f368a', 'Lechuga Romana', 'Hortaliza fresca y de temporada, ideal para ensaladas y platos saludables.', 'img/lechuga.jpg', '2025-03-28', 'bolsa', 75.86, '862084ce1d59fba9260f3e8d95a0cdd7', 'cat-aaa-001', 0.27, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('f868abcb95594c41b8a7fe162fa64e3a', 'Arroz integral', 'Producto gourmet de alta calidad, ideal para complementar tu despensa.', 'img/arroz.jpg', '2025-03-03', 'caja', 83.06, '7d08478fc09eaa666186546e28a74f86', 'cat-ddd-004', 3.83, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('74186fc133754df0be76b3bfe84201d6', 'Manzana Amarilla', 'Fruta fresca y jugosa, perfecta para disfrutar como snack o en batidos.', 'img/manzana.jpg', '2024-06-20', 'kg', 79.44, '549c3364c7c4866ab32f028f9ee65cbc', 'cat-bbb-002', 0.12, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('7c0d9dc59e9442a28b06d7a3b91913af', 'Plátano Amarillo', 'Fruta fresca y jugosa, perfecta para disfrutar como snack o en batidos.', 'img/platano.jpg', '2025-04-30', 'bolsa', 97.32, '7aeeb43d5955d1a86c444e1370ae4f1e', 'cat-bbb-002', 3.99, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('9ea831382344460a919c0294ceffd7d4', 'Manzana Verde', 'Fruta fresca y jugosa, perfecta para disfrutar como snack o en batidos.', 'img/manzana.jpg', '2025-02-28', 'caja', 51.57, 'e89488ca8577922bd2442a7864eb5faa', 'cat-bbb-002', 3.88, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('6fa56b2fe1d84c20b8a6a3d399965b62', 'Fresa Roja', 'Fruta fresca y jugosa, perfecta para disfrutar como snack o en batidos.', 'img/fresa.jpg', '2025-02-15', 'kg', 58.38, '862084ce1d59fba9260f3e8d95a0cdd7', 'cat-bbb-002', 3.47, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('af898399f82342c39a8ae8782907099f', 'Plátano Verde', 'Fruta fresca y jugosa, perfecta para disfrutar como snack o en batidos.', 'img/platano.jpg', '2024-11-29', 'bolsa', 15.77, 'b067f7b587ca09a379dc036d1587199c', 'cat-bbb-002', 2.46, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('8886d20f56404955b8b9a39e5b64be21', 'Espinaca', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/espinaca.jpg', '2024-08-10', 'caja', 56.13, 'e89488ca8577922bd2442a7864eb5faa', 'cat-ccc-003', 0.13, 0);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('a6564f4a2324496fbcb0753e28bd7d42', 'Aceite de oliva', 'Producto gourmet de alta calidad, ideal para complementar tu despensa.', 'img/aceite.jpg', '2024-10-06', 'bolsa', 57.93, '6d1b8cfd272263d24cb08ebcca8b9583', 'cat-ddd-004', 2.3, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('d7e26d6c8cc045bfb1c0402aaec6bdaa', 'Pepino', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/pepino.jpg', '2024-10-15', 'bolsa', 85.12, 'c0b5fc08294fa0eafb5a86fd8393e655', 'cat-ccc-003', 0.57, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('5be6d78c72564d0ea661656b61bed875', 'Manzana Verde', 'Fruta fresca y jugosa, perfecta para disfrutar como snack o en batidos.', 'img/manzana.jpg', '2024-10-25', 'bolsa', 53.09, 'ba254e61b7f3e3113e3819330ee336c4', 'cat-bbb-002', 4.58, 1);
INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido) VALUES ('1e50c8aa1d8c48a9933b38d9c1674f34', 'Lechuga Rizada', 'Hortaliza fresca y de temporada, ideal para ensaladas y platos saludables.', 'img/lechuga.jpg', '2024-05-17', 'bolsa', 51.81, '547948462adfc580aba9c6ac0d07f9dc', 'cat-aaa-001', 0.64, 1);

-- Historial de precios
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('8654f739c08c47d19454dccff06334d5', '753afe0a40bc424aa4f9c82c7045bb3d', 25.97, '2024-05-14 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('f4a06f04ea3c40ae8c571c97bee0279c', '753afe0a40bc424aa4f9c82c7045bb3d', 37.61, '2024-04-14 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('e02329b3f88a4b87b756641bd758939f', '753afe0a40bc424aa4f9c82c7045bb3d', 38.08, '2024-03-15 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('c1387e66e40048c3bfc8bdece7f17cbb', '753afe0a40bc424aa4f9c82c7045bb3d', 37.9, '2024-02-14 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('ba49603f43b546fd894b178ac1db5bd1', '753afe0a40bc424aa4f9c82c7045bb3d', 35.41, '2024-01-15 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('05d168459d0c4740a44ffd731f2b1564', 'af998b3dd1094430b01b8c178dcef31e', 14.6, '2024-08-25 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('f193c72039a24035af79e6127743cbd3', 'af998b3dd1094430b01b8c178dcef31e', 15.05, '2024-07-26 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('cbd96f384a1f4bc29d65bff8ab2b4167', 'af998b3dd1094430b01b8c178dcef31e', 13.81, '2024-06-26 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('8b94c0cb0dd743aeb795ee5f04bbdf25', 'af998b3dd1094430b01b8c178dcef31e', 13.48, '2024-05-27 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('584f2bc2169049939a8c46a0716b2fba', '8c09d9e1513943c8b35729256073139f', 2.11, '2024-11-30 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('f8d5f6d2f10f4cb7af0a3c942e4248eb', '8c09d9e1513943c8b35729256073139f', 2.25, '2024-10-31 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('2694f1e7e3614aa88bda578e58efcd24', '8c09d9e1513943c8b35729256073139f', 1.99, '2024-10-01 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('2dde0469cd2c4c2a9620593958b56747', 'b0cd11206f644b849bca84fb6133cd9e', 79.17, '2024-10-21 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('7012c537bc1144c6bd2294da7548c4ce', 'b0cd11206f644b849bca84fb6133cd9e', 74.94, '2024-09-21 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('0391c73a4d98492a84d303937091cdd9', 'b0cd11206f644b849bca84fb6133cd9e', 81.41, '2024-08-22 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('17c868e0d0b34749bcb69ca36634d4e8', '07fe48fd97c347eaa53e8347e38485f7', 41.18, '2025-03-15 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('071e491cf23f4a00a7597805b78f5efa', '07fe48fd97c347eaa53e8347e38485f7', 50.35, '2025-02-13 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('6a230a770fb44d30bd435a3edd10dcad', '07fe48fd97c347eaa53e8347e38485f7', 64.38, '2025-01-14 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('9e09eda72d6d47608259fd4b5a708f4d', '07fe48fd97c347eaa53e8347e38485f7', 53.67, '2024-12-15 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('7c608c4ae4e64c079f6aa04940063279', '07fe48fd97c347eaa53e8347e38485f7', 62.65, '2024-11-15 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('2fb659598db74747b724ae8691ba4be6', '7bffafce22d045a29f7b03fd4b1dff48', 109.52, '2025-04-01 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('fc2cf57f74324e3fb3cfe7eca3d4562e', '7bffafce22d045a29f7b03fd4b1dff48', 82.4, '2025-03-02 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('1f6c62a04c3c4040839bcdf51c302750', '7bffafce22d045a29f7b03fd4b1dff48', 110.78, '2025-01-31 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('c84d945bf4ac401ab0d6eae0497bf45d', '7bffafce22d045a29f7b03fd4b1dff48', 116.08, '2025-01-01 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('88d7e21ee4764b7ba42708f4ee374a73', '7bffafce22d045a29f7b03fd4b1dff48', 65.95, '2024-12-02 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('9d1cac84a6324d90b9ae0e2e57e75013', 'cc5184ed5cb84b949b591356d84f48c7', 72.02, '2024-06-06 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('6a540fed39ad4d6bbf746b26b35d9bec', 'cc5184ed5cb84b949b591356d84f48c7', 58.59, '2024-05-07 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('a0f7e68d7df040d3a085cb66d0bbc138', 'cc5184ed5cb84b949b591356d84f48c7', 74.2, '2024-04-07 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('eda3fd0ff24b40b6863fac03494e8120', '9d923b05f0284cedb60c9239f522589c', 71.92, '2024-07-03 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('7656661471024e099d316af5a7676479', '9d923b05f0284cedb60c9239f522589c', 86.55, '2024-06-03 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('9531430ffd8a40dbb467a950287e4975', '9d923b05f0284cedb60c9239f522589c', 53.79, '2024-05-04 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('cf0ecfb6b78c443dba03a9516d2bae8a', '3f026a21bddb4df0a0395949e200d0ff', 8.89, '2024-05-08 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('27f2f583cc7646b8b6ddd4f4dbac83b5', '3f026a21bddb4df0a0395949e200d0ff', 7.41, '2024-04-08 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('e58d81f9b0f64ec69e3abd7df8b99992', '3f026a21bddb4df0a0395949e200d0ff', 8.53, '2024-03-09 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('a331df49f8a6476284174fb38d7af841', '9de9ddf2213f484e9898b178d9979837', 8.45, '2024-07-01 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('6b33c93e2c224cdd8b74c7b375e38042', '9de9ddf2213f484e9898b178d9979837', 14.0, '2024-06-01 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('de933ef08fa04080a7726e75eb7ea762', '2dca2a7cc18d48b4a66431684ae8a270', 71.21, '2024-07-23 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('a0dafaabb5954256b5929e32dd86ade0', '2dca2a7cc18d48b4a66431684ae8a270', 50.9, '2024-06-23 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('ab83f496883847a384eb3f4506f97367', '2dca2a7cc18d48b4a66431684ae8a270', 72.28, '2024-05-24 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('0919d588667841c8b3c63017e42d7c86', '2dca2a7cc18d48b4a66431684ae8a270', 64.16, '2024-04-24 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('58ff1929d1d749b6ab6f588cd7fe0efc', '48a8e307f96c44d18659e8abceefa4d6', 63.65, '2025-03-13 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('67e1389300fe4d00bb0a983eedef8429', '48a8e307f96c44d18659e8abceefa4d6', 91.27, '2025-02-11 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('ddbb2046caf5499fbfb33cbe2896de36', '48a8e307f96c44d18659e8abceefa4d6', 71.44, '2025-01-12 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('69f724ecd8624edc937a795734089af1', '48a8e307f96c44d18659e8abceefa4d6', 63.27, '2024-12-13 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('88724502396f4158a9a9b4cd2ceb229c', 'f80dc50fe9d445f28ee141ce1a866af1', 48.1, '2025-01-23 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('69d61181982e488388926c1122445e76', 'f80dc50fe9d445f28ee141ce1a866af1', 62.09, '2024-12-24 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('4a5673c7cb3a4e9c86ac6e18a9bfec30', 'f80dc50fe9d445f28ee141ce1a866af1', 55.81, '2024-11-24 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('85e20e5b6f6947de81a92d1e54dda72c', 'd5e2a48e8b6a48a0bd09f090fcc68a8f', 97.52, '2024-08-15 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('4231dab8493b4e7aa68d8ef51a11c03d', 'd5e2a48e8b6a48a0bd09f090fcc68a8f', 76.04, '2024-07-16 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('3feed445e4d74b5fa915a3ac50d6f711', 'd5e2a48e8b6a48a0bd09f090fcc68a8f', 95.88, '2024-06-16 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('71a4a2a0d1674a6091f941722c9d730b', '4845948f4fbc45f3bbdc7539aaa4e56b', 81.07, '2025-02-18 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('250696b8486b468f8d687e8825aaa4d7', '4845948f4fbc45f3bbdc7539aaa4e56b', 81.95, '2025-01-19 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('4177eddc0ecb4070836e6527f9ec4a13', '4845948f4fbc45f3bbdc7539aaa4e56b', 56.03, '2024-12-20 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('5dab1a71eb594edab4e8131250b5fd1b', '4845948f4fbc45f3bbdc7539aaa4e56b', 73.34, '2024-11-20 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('048c66ae23004e6ebca2ccf7cb5634ee', 'b4eaaa8f665246a6a616ed91ffdaeb1f', 52.95, '2025-01-03 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('09beff5660ea44c1b4d05b6c08e2951d', 'b4eaaa8f665246a6a616ed91ffdaeb1f', 48.56, '2024-12-04 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('953a1e0ad77e451ba241383046f5383a', '4c854db6bfc54d3fa29075aef267472b', 1.8, '2024-05-24 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('a24fa1fba5e242f4a88f570d40a1ab75', '4c854db6bfc54d3fa29075aef267472b', 2.49, '2024-04-24 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('3afe5e83216443d1a96a16a93ddf8a89', '825733665adb48bb8d9328ae107fa4cd', 64.81, '2024-10-13 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('341037806b7e41adad7b124b438e74f0', '825733665adb48bb8d9328ae107fa4cd', 53.45, '2024-09-13 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('4fa68935b94f4f06957b75e7a292fd96', '825733665adb48bb8d9328ae107fa4cd', 51.59, '2024-08-14 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('d5aadb49d67b4eea8b82fe3e1af7b033', '825733665adb48bb8d9328ae107fa4cd', 63.74, '2024-07-15 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('12a7566c70c94cb5ba7568df1d992069', '825733665adb48bb8d9328ae107fa4cd', 53.85, '2024-06-15 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('7c96ca6f752b4fecb78642c5b92c7e5a', '7e5e66c3203e4e0ca18106189f5e6cea', 62.05, '2024-06-08 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('b7062b1002ba4fd6a15c1aa8d3bc6088', '7e5e66c3203e4e0ca18106189f5e6cea', 60.08, '2024-05-09 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('88e2724b5cf94aeea59a19a6479d5723', '180d9a9f1a034a299d372b49577e3f52', 18.15, '2024-10-19 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('6c7093f8d9d24901abde9c32b065ec75', '180d9a9f1a034a299d372b49577e3f52', 19.1, '2024-09-19 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('8e52c06f1b7e41159098785e91d7d51a', '180d9a9f1a034a299d372b49577e3f52', 19.05, '2024-08-20 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('b276fc006cfa41a5affd82f2ad7c1a74', '180d9a9f1a034a299d372b49577e3f52', 13.59, '2024-07-21 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('c823ea601a0444d492ac19a5eecb8792', '0b5136d8b5654f5984132b6586d9c71f', 48.54, '2024-09-16 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('8434947988da4b1e9529516ce1111006', '0b5136d8b5654f5984132b6586d9c71f', 62.68, '2024-08-17 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('f3c591e06dd04718aefcf132f4526c9c', '0b5136d8b5654f5984132b6586d9c71f', 68.72, '2024-07-18 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('3b2eb59d655d4deaa40aaab83f4771af', 'f80abfcc490f45b291967cdc72ad5e17', 105.99, '2025-01-12 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('eedd9f41441e41be9216e4e3471078c2', 'f80abfcc490f45b291967cdc72ad5e17', 86.52, '2024-12-13 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('817e98dff9c649d7b55c917e7db67050', 'f80abfcc490f45b291967cdc72ad5e17', 78.81, '2024-11-13 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('d96d1a60bec744a7bb335b1135eaef5f', '290c2e6de8fa42c6893c4c68071dd579', 11.39, '2024-08-25 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('fe968fca3bda4d6e8c247edcbecc854d', '290c2e6de8fa42c6893c4c68071dd579', 12.43, '2024-07-26 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('be2bf590c8ad49819b1bc7bf0741be79', '4cf5269b52864fd780855b205d1fe147', 31.29, '2024-05-03 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('165e52baf2d84389a3f1022699b02266', '4cf5269b52864fd780855b205d1fe147', 20.45, '2024-04-03 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('7ef7e14e586d4f308752e15835b58c6b', '4cf5269b52864fd780855b205d1fe147', 29.74, '2024-03-04 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('3126f68933254feaabfc05fdd924e0ff', '911d2d7299ad4992b202b5721c38f390', 42.61, '2025-03-29 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('6ddcf4c329ce45d096231c0e898f7384', '911d2d7299ad4992b202b5721c38f390', 26.07, '2025-02-27 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('64c44f7815d24394b994b1baf136df33', 'e20baa59bb004330a5cc9be2b67a834a', 71.01, '2024-09-02 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('83facdc533504dd7a0f7c92b26a4d12d', 'e20baa59bb004330a5cc9be2b67a834a', 76.32, '2024-08-03 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('43e7bfdd3db441d8a1f5e13029141c8e', 'e20baa59bb004330a5cc9be2b67a834a', 76.79, '2024-07-04 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('f92ffdd3817a4ab89ae8f67f65670dbd', 'e20baa59bb004330a5cc9be2b67a834a', 61.05, '2024-06-04 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('6040ea1eebfc4d2f83a05cfed54136b6', 'ff205d7085bf49ecaf616126550f5638', 90.91, '2024-09-11 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('aa02662e88d84886a49809cc66744096', 'ff205d7085bf49ecaf616126550f5638', 94.18, '2024-08-12 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('454b5b95ac704ee98e6d79118910a37f', 'ff205d7085bf49ecaf616126550f5638', 66.16, '2024-07-13 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('9cdfeb729be54960b1d82707b7eeb812', 'ff205d7085bf49ecaf616126550f5638', 60.3, '2024-06-13 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('a3fa2817c0f841a5b7fdc5aaf15fd192', 'ff205d7085bf49ecaf616126550f5638', 77.97, '2024-05-14 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('9f6b4471726a428197921394c77f7767', 'c937279f074c468992b101944e5b7505', 16.76, '2024-08-28 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('aa4af8d66ed34fc7941cfdbaea474be5', 'c937279f074c468992b101944e5b7505', 13.61, '2024-07-29 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('131ec588b788499b8187f99dd7a255dc', 'c937279f074c468992b101944e5b7505', 11.45, '2024-06-29 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('bed95a5edd8b4d43bd2a7ed616bf4fad', 'b59c2954e41e4a5d8e49f6c89a207695', 74.85, '2024-10-11 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('84acd46473dc4b2782cae8c9c5ffd724', 'b59c2954e41e4a5d8e49f6c89a207695', 85.1, '2024-09-11 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('a75674edbf2f4d3abd58c1d7edca70f3', 'b59c2954e41e4a5d8e49f6c89a207695', 76.97, '2024-08-12 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('b069ce7f0bb149188a3c939511432f78', '64a27877f9df47b7a9e748b0b8851563', 48.21, '2024-11-12 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('d9f6b88d57144626aeeef94cd2fa9fef', '64a27877f9df47b7a9e748b0b8851563', 67.45, '2024-10-13 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('1bd6b4f87ac94d7d8167b6b8e08a62dd', '64a27877f9df47b7a9e748b0b8851563', 66.38, '2024-09-13 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('661a1e75d10b4d38b878b575b4b7985b', '64a27877f9df47b7a9e748b0b8851563', 54.84, '2024-08-14 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('a6aed63e62174d58ae81f4f466767c34', '64a27877f9df47b7a9e748b0b8851563', 43.51, '2024-07-15 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('647ae77302e44846ae2d4520b8c5b173', '63beef0d1af94dd1957cefba946048d6', 32.61, '2024-08-08 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('414a834649844015a00f9a877bd3dce0', '63beef0d1af94dd1957cefba946048d6', 30.94, '2024-07-09 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('f56102bb3018409f8869277c064d00d9', '63beef0d1af94dd1957cefba946048d6', 31.73, '2024-06-09 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('91cbf6ffa86c4f5db5d0a39bcab06346', '4eaabd51c30e45e49c1a72435da96717', 24.8, '2024-05-07 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('b5177774212a4d9eb855900e30faaeff', '4eaabd51c30e45e49c1a72435da96717', 21.19, '2024-04-07 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('43f307fc2f1140ac888c0a09e26c8890', '4eaabd51c30e45e49c1a72435da96717', 16.97, '2024-03-08 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('5281a1ee7e7d412094865b8cc93634ac', '4eaabd51c30e45e49c1a72435da96717', 18.54, '2024-02-07 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('01b7db8b60db442693d402d6bb9e6510', 'd5b4bc3ee5914509b4f2340fcd501629', 109.31, '2024-09-02 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('ecf529caf7f648d6beccfc142ce41a99', 'd5b4bc3ee5914509b4f2340fcd501629', 69.16, '2024-08-03 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('f9dc718246db4016a17a6a0bc9252b93', '8e68592ecf9b42a7815df27b7329f1a8', 9.37, '2024-11-29 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('f2fab4aa40374a38a3c480bd8baaeacc', '8e68592ecf9b42a7815df27b7329f1a8', 8.92, '2024-10-30 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('cc4c3d33cc634eb78a170e5e62aaddb6', '5dd62bcc7d9e4729a0d8ab84c632fd75', 65.16, '2025-02-27 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('78c776eb0f6f4733b9ce8d47a265a7b5', '5dd62bcc7d9e4729a0d8ab84c632fd75', 72.88, '2025-01-28 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('3b3c3194ca374335abe123758aae090e', '5dd62bcc7d9e4729a0d8ab84c632fd75', 53.87, '2024-12-29 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('90f9bf3ae1a04c3cb47883e03592c565', 'b860f6b6cf834745befa9e8798cf36b4', 39.75, '2024-04-18 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('94b1ffa39e494c7aa981c8d4050d301b', 'b860f6b6cf834745befa9e8798cf36b4', 41.85, '2024-03-19 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('76acfb98facb4e3ebb03cc86433e332d', 'b860f6b6cf834745befa9e8798cf36b4', 42.17, '2024-02-18 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('a466be2c63e14989a7e18946683505eb', '597d9751ef2c4f1ba820d902bba2ee45', 1.02, '2024-08-03 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('9aa2f26b11754a32ab01315630afe6d2', '597d9751ef2c4f1ba820d902bba2ee45', 1.79, '2024-07-04 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('8e28466df9914223a595c1cd074e8dc8', '597d9751ef2c4f1ba820d902bba2ee45', 1.43, '2024-06-04 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('17157d2723404acbabd68630e6afb0e2', '803906afef9b437cbbd76df1551b4b0c', 24.82, '2024-09-28 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('fc0bc63ae85147caab42e5c2635fbd53', '803906afef9b437cbbd76df1551b4b0c', 18.31, '2024-08-29 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('9f25fd4931da4953898de53e1dbf4d53', '803906afef9b437cbbd76df1551b4b0c', 15.82, '2024-07-30 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('cbaaed081cf94c2082b68bcd70b30a82', '803906afef9b437cbbd76df1551b4b0c', 17.07, '2024-06-30 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('2ab2a71e091d4c4db0431ceb0f7819db', '3269518fef8a4ba0bee3ac45599f368a', 94.23, '2025-02-26 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('1ab99ca5a004462baad1eba9f5088f72', '3269518fef8a4ba0bee3ac45599f368a', 77.91, '2025-01-27 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('1a62ca68e18546b68a2e21efd5b16a84', '3269518fef8a4ba0bee3ac45599f368a', 68.61, '2024-12-28 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('917f1a84838045edaec0a81466d8bce9', '3269518fef8a4ba0bee3ac45599f368a', 88.71, '2024-11-28 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('e91304fb30004ddca91eb05e9f31001c', '3269518fef8a4ba0bee3ac45599f368a', 59.07, '2024-10-29 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('7e1cd892aaa44ba38b00a61dbbedb4d3', 'f868abcb95594c41b8a7fe162fa64e3a', 73.65, '2025-02-01 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('5fe2f87fa289417fac2098e29aa81b5a', 'f868abcb95594c41b8a7fe162fa64e3a', 85.47, '2025-01-02 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('0dbbbd6c4ceb43f084f49835639830d4', '74186fc133754df0be76b3bfe84201d6', 74.98, '2024-05-21 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('fb48db0273bb447aa68ed50323b469ce', '74186fc133754df0be76b3bfe84201d6', 102.41, '2024-04-21 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('fc1bd4a73ea3454a8ccb9e114448ba19', '74186fc133754df0be76b3bfe84201d6', 58.31, '2024-03-22 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('b8eb66e83e224803913e83e17f3eb7e7', '7c0d9dc59e9442a28b06d7a3b91913af', 73.1, '2025-03-31 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('9eab185f47a941719ede28a670cf877a', '7c0d9dc59e9442a28b06d7a3b91913af', 83.31, '2025-03-01 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('7cbcd32dc5734c5a901b695f9ae47c0e', '7c0d9dc59e9442a28b06d7a3b91913af', 76.39, '2025-01-30 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('4f62112dd8d0437bae834d8dd4756eea', '7c0d9dc59e9442a28b06d7a3b91913af', 98.96, '2024-12-31 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('e4fe79dc76bc4099acce98208ecea462', '7c0d9dc59e9442a28b06d7a3b91913af', 83.55, '2024-12-01 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('d54e7fe9cc1544a980ea7e02caabaa44', '9ea831382344460a919c0294ceffd7d4', 44.27, '2025-01-29 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('d273b98be04444499073aa687c003af5', '9ea831382344460a919c0294ceffd7d4', 37.66, '2024-12-30 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('973823236f2f463cbe6bde393b737af0', '9ea831382344460a919c0294ceffd7d4', 56.82, '2024-11-30 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('9cf898da3b574b69a67fcb695017b0da', '9ea831382344460a919c0294ceffd7d4', 66.09, '2024-10-31 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('aa9c803bc001464f8ac179e0e56b8dcf', '6fa56b2fe1d84c20b8a6a3d399965b62', 48.72, '2025-01-16 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('ae1faf8bc2c44e169ab2861f55fe54ec', '6fa56b2fe1d84c20b8a6a3d399965b62', 70.39, '2024-12-17 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('341da1275b4b4ebdba7e765c0ce22a21', '6fa56b2fe1d84c20b8a6a3d399965b62', 73.63, '2024-11-17 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('1b117ff963e641fc9814d9a84c894ee2', '6fa56b2fe1d84c20b8a6a3d399965b62', 57.95, '2024-10-18 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('ca1f346b77ec4c0cb68d183f171f066a', '6fa56b2fe1d84c20b8a6a3d399965b62', 41.76, '2024-09-18 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('4e3a9fd375e34f05be540e5adeb1790b', 'af898399f82342c39a8ae8782907099f', 16.02, '2024-10-30 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('6b118e983227439481b62586149e5c64', 'af898399f82342c39a8ae8782907099f', 12.34, '2024-09-30 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('e4fb5603388c4436bc00f5e3e429a2d7', '8886d20f56404955b8b9a39e5b64be21', 40.01, '2024-07-11 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('5a06a0844b164396b7e99b64fb260f65', '8886d20f56404955b8b9a39e5b64be21', 48.68, '2024-06-11 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('c93846aa845b41d58cd6f307a6c3cbd3', '8886d20f56404955b8b9a39e5b64be21', 55.61, '2024-05-12 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('006f5bd482de4f50a7dc08f3695fc041', 'a6564f4a2324496fbcb0753e28bd7d42', 52.36, '2024-09-06 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('c33a269e164c462bb7dc99bd0ace626b', 'a6564f4a2324496fbcb0753e28bd7d42', 49.35, '2024-08-07 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('4a828a5f47814deab43552270a4e9924', 'a6564f4a2324496fbcb0753e28bd7d42', 45.09, '2024-07-08 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('4921f782e1724a30a32d2c8b3a322d94', 'd7e26d6c8cc045bfb1c0402aaec6bdaa', 110.04, '2024-09-15 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('b08511ddfe6e43a4adb782cee7660eef', 'd7e26d6c8cc045bfb1c0402aaec6bdaa', 109.61, '2024-08-16 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('2d070f1ee4dc49a4833d80516900cfea', 'd7e26d6c8cc045bfb1c0402aaec6bdaa', 63.73, '2024-07-17 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('81eb78252a794d8f84a445de5a8e43b8', '5be6d78c72564d0ea661656b61bed875', 58.72, '2024-09-25 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('8860540a0e8446219c9a426e8ddd97a1', '5be6d78c72564d0ea661656b61bed875', 56.79, '2024-08-26 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('baee783cfaa84cac87d58a08e7b6add5', '1e50c8aa1d8c48a9933b38d9c1674f34', 64.55, '2024-04-17 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('4b941205d94649c8bea103dd3561283f', '1e50c8aa1d8c48a9933b38d9c1674f34', 55.74, '2024-03-18 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('01dbd0f363fe4b4dbb06ce691ec1dcf8', '1e50c8aa1d8c48a9933b38d9c1674f34', 44.95, '2024-02-17 15:50:46');
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio) VALUES ('d0e76fddbf274883a89be4e837b61c30', '1e50c8aa1d8c48a9933b38d9c1674f34', 60.4, '2024-01-18 15:50:46');

INSERT INTO productos (id, nombre, descripcion, imagen_url, fecha_produccion, unidad_medida, precio_actual, usuario_id, categoria_id, valoracion_media, vendido)
VALUES
('prod-0001-uuid-0001','Plátano Amarillo', 'Fruta fresca y jugosa, perfecta para disfrutar como snack o en batidos.', 'img/platano.jpg', '2025-04-30', 'kg', 97.32, '7aeeb43d5955d1a86c444e1370ae4f1e', 'cat-bbb-002', 3.99, 1),
('prod-0002-uuid-0002','Manzana Verde', 'Fruta fresca y jugosa, perfecta para disfrutar como snack o en batidos.', 'img/manzana.jpg', '2025-02-28', 'kg', 51.57, 'e89488ca8577922bd2442a7864eb5faa', 'cat-bbb-002', 3.88, 1),
('prod-0003-uuid-0003','Fresa Roja', 'Fruta fresca y jugosa, perfecta para disfrutar como snack o en batidos.', 'img/fresa.jpg', '2025-02-15', 'kg', 58.38, '862084ce1d59fba9260f3e8d95a0cdd7', 'cat-bbb-002', 3.47, 1),
('prod-0004-uuid-0004','Plátano Verde', 'Fruta fresca y jugosa, perfecta para disfrutar como snack o en batidos.', 'img/platano.jpg', '2024-11-29', 'kg', 15.77, 'b067f7b587ca09a379dc036d1587199c', 'cat-bbb-002', 2.46, 1),
('prod-0005-uuid-0005','Espinaca', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/espinaca.jpg', '2024-08-10', 'kg', 56.13, 'e89488ca8577922bd2442a7864eb5faa', 'cat-ccc-003', 0.13, 1),
('prod-0006-uuid-0006','Aceite de oliva', 'Producto gourmet de alta calidad, ideal para complementar tu despensa.', 'img/aceite.jpg', '2024-10-06', 'kg', 57.93, '6d1b8cfd272263d24cb08ebcca8b9583', 'cat-ddd-004', 2.3, 1),
('prod-0007-uuid-0007','Pepino', 'Verdura orgánica, cosechada con métodos sostenibles para una alimentación saludable.', 'img/pepino.jpg', '2024-10-15', 'kg', 85.12, 'c0b5fc08294fa0eafb5a86fd8393e655', 'cat-ccc-003', 0.57, 1),
('prod-0008-uuid-0008','Manzana Verde', 'Fruta fresca y jugosa, perfecta para disfrutar como snack o en batidos.', 'img/manzana.jpg', '2024-10-25', 'kg', 53.09, 'ba254e61b7f3e3113e3819330ee336c4', 'cat-bbb-002', 4.58, 1),
('prod-0009-uuid-0009','Lechuga Rizada', 'Hortaliza fresca y de temporada, ideal para ensaladas y platos saludables.', 'img/lechuga.jpg', '2024-05-17', 'kg', 51.81, '547948462adfc580aba9c6ac0d07f9dc', 'cat-aaa-001', 0.64, 1);

-- Historial de precios
INSERT INTO precios_producto (id, producto_id, precio, fecha_inicio)
VALUES
(UUID(), 'prod-0001-uuid-0001', 97.32, NOW()),
(UUID(), 'prod-0002-uuid-0002', 51.57, NOW()),
(UUID(), 'prod-0003-uuid-0003', 58.38, NOW()),
(UUID(), 'prod-0004-uuid-0004', 15.77, NOW()),
(UUID(), 'prod-0005-uuid-0005', 56.13, NOW()),
(UUID(), 'prod-0006-uuid-0006', 57.93, NOW()),
(UUID(), 'prod-0007-uuid-0007', 85.12, NOW()),
(UUID(), 'prod-0008-uuid-0008', 53.09, NOW()),
(UUID(), 'prod-0009-uuid-0009', 51.81, NOW());

-- Compras
INSERT INTO compras (id, fecha_compra, usuario_comprador_id, nombre_pagador, direccion_entrega, destinatario)
VALUES
('compra-001-uuid-0001', NOW(), '0a8562488c4d185e5fd819a51b4398db', '10de0ec1369e85bb55f33bf314b3b57c', 'Pje. Norte 202', 'Paula Medina'),
('compra-002-uuid-0002', NOW(), '189932f5fcfaa7b0504d7d6a8e71e10f', '1cfd3e92-982e-4e0c-8969-58d71e62aee2', 'Calle Tres 789', 'Carlos Ruiz'),
('compra-003-uuid-0003', NOW(), '235171da05a3742446aba2c7cb7fa401', '77777777-7777-7777-7777-777777777777', 'Ruta 66', 'Ricardo Núñez');

-- Estados de los pedidos
INSERT INTO estado_pedido (id, compra_id, estado, fecha_estado, notas)
VALUES
(UUID(), 'compra-001-uuid-0001', 'Procesado', NOW(), 'Pago recibido, preparando envío.'),
(UUID(), 'compra-002-uuid-0002', 'Enviado', NOW(), 'Enviado vía mensajería urgente.'),
(UUID(), 'compra-003-uuid-0003', 'Entregado', NOW(), 'Entregado el 2025-05-10.');

-- Detalle de compras (productos asociados a cada compra)
INSERT INTO detalle_compra (id, compra_id, producto_id, cantidad, precio_unitario)
VALUES
(UUID(), 'compra-001-uuid-0001', 'prod-0001-uuid-0001', 1, 97.32),
(UUID(), 'compra-001-uuid-0001', 'prod-0002-uuid-0002', 1, 51.57),
(UUID(), 'compra-001-uuid-0001', 'prod-0003-uuid-0003', 1, 58.38),
(UUID(), 'compra-002-uuid-0002', 'prod-0004-uuid-0004', 1, 15.77),
(UUID(), 'compra-002-uuid-0002', 'prod-0005-uuid-0005', 1, 56.13),
(UUID(), 'compra-002-uuid-0002', 'prod-0006-uuid-0006', 1, 57.93),
(UUID(), 'compra-003-uuid-0003', 'prod-0007-uuid-0007', 1, 85.12),
(UUID(), 'compra-003-uuid-0003', 'prod-0008-uuid-0008', 1, 53.09),
(UUID(), 'compra-003-uuid-0003', 'prod-0009-uuid-0009', 1, 51.81);