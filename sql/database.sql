-- Tabla de usuarios
CREATE TABLE usuarios (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    direccion TEXT,
    valoracion_media DECIMAL(3,2) DEFAULT 0.00
);

CREATE TABLE seguridad_usuarios (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    usuario_id CHAR(36) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    verificado BOOLEAN DEFAULT FALSE,
    codigo_verificacion VARCHAR(10),
    fecha_envio_codigo DATETIME,
    fecha_ultimo_cambio_contrasena DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabla de categorías
CREATE TABLE categorias (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    nombre VARCHAR(100) UNIQUE NOT NULL,
    descripcion TEXT
);

CREATE TABLE productos (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    imagen_url TEXT,
    numero_lote VARCHAR(50),
    fecha_produccion DATE,
    fecha_caducidad DATE,
    unidad_medida VARCHAR(20),
    cantidad_disponible DECIMAL(10,2),
    precio_actual DECIMAL(10,2),
    usuario_id CHAR(36) NOT NULL,
    categoria_id CHAR(36),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Historial de precios de productos
CREATE TABLE precios_producto (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    producto_id CHAR(36) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    fecha_inicio DATETIME NOT NULL,
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- Favoritos de productos
CREATE TABLE favoritos_producto (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    usuario_id CHAR(36) NOT NULL,
    producto_id CHAR(36) NOT NULL,
    fecha_agregado DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(usuario_id, producto_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- Alertas de productos por usuario
CREATE TABLE alertas_usuario (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    usuario_id CHAR(36) NOT NULL,
    categoria_id CHAR(36),
    nombre_clave VARCHAR(100),
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Compras
CREATE TABLE compras (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    fecha_compra DATETIME DEFAULT CURRENT_TIMESTAMP,
    usuario_comprador_id CHAR(36) NOT NULL,
    nombre_pagador CHAR(36) NOT NULL,
    direccion_entrega TEXT NOT NULL,
    destinatario VARCHAR(100) NOT NULL,
    FOREIGN KEY (usuario_comprador_id) REFERENCES usuarios(id)
);

-- Estado de pedidos
CREATE TABLE estado_pedido (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    compra_id CHAR(36) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    fecha_estado DATETIME DEFAULT CURRENT_TIMESTAMP,
    notas TEXT,
    FOREIGN KEY (compra_id) REFERENCES compras(id)
);

-- Detalle de productos por compra
CREATE TABLE detalle_compra (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    compra_id CHAR(36) NOT NULL,
    producto_id CHAR(36) NOT NULL,
    cantidad DECIMAL(10,2) NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) AS (cantidad * precio_unitario) STORED,
    FOREIGN KEY (compra_id) REFERENCES compras(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- Valoraciones de usuarios (como vendedores)
CREATE TABLE valoraciones_usuario (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    usuario_id CHAR(36) NOT NULL,
    compra_id CHAR(36) NOT NULL,
    valoracion INT NOT NULL CHECK (valoracion BETWEEN 1 AND 5),
    comentario TEXT,
    fecha_valoracion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (compra_id) REFERENCES compras(id),
);