-- Tabla de usuarios
CREATE TABLE usuarios (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    direccion TEXT,
    administrador BOOLEAN,
    valoracion_media DECIMAL(3,2) DEFAULT 0.00
);

CREATE TABLE seguridad_usuarios (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    usuario_id CHAR(36) UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    verificado BOOLEAN DEFAULT FALSE,
    codigo_verificacion VARCHAR(10),
    fecha_envio_codigo DATETIME,
    fecha_ultimo_cambio_contrasena DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
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
    fecha_produccion DATE,
    unidad_medida VARCHAR(20),
    precio_actual DECIMAL(10,2),
    usuario_id CHAR(36),
    categoria_id CHAR(36),
    valoracion_media DECIMAL(3,2) DEFAULT 0.00,
    vendido BOOLEAN,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE SET NULL
);

-- Historial de precios de productos
CREATE TABLE precios_producto (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    producto_id CHAR(36),
    precio DECIMAL(10,2) NOT NULL,
    fecha_inicio DATETIME NOT NULL,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE
);

-- Favoritos de productos
CREATE TABLE favoritos_producto (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    usuario_id CHAR(36),
    producto_id CHAR(36),
    fecha_agregado DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(usuario_id, producto_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE
);

-- Alertas de productos por usuario
CREATE TABLE alertas_usuario (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    usuario_id CHAR(36),
    categoria_id CHAR(36),
    nombre_clave VARCHAR(100),
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE CASCADE
);

-- Compras
CREATE TABLE compras (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    fecha_compra DATETIME DEFAULT CURRENT_TIMESTAMP,
    usuario_comprador_id CHAR(36),
    nombre_pagador CHAR(36),
    direccion_entrega TEXT NOT NULL,
    destinatario VARCHAR(100) NOT NULL,
    FOREIGN KEY (usuario_comprador_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Estado de pedidos
CREATE TABLE estado_pedido (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    compra_id CHAR(36),
    estado VARCHAR(50) NOT NULL,
    fecha_estado DATETIME DEFAULT CURRENT_TIMESTAMP,
    notas TEXT,
    FOREIGN KEY (compra_id) REFERENCES compras(id) ON DELETE CASCADE
);

-- Detalle de productos por compra
CREATE TABLE detalle_compra (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    compra_id CHAR(36),
    producto_id CHAR(36),
    cantidad DECIMAL(10,2) NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) AS (cantidad * precio_unitario) STORED,
    FOREIGN KEY (compra_id) REFERENCES compras(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE SET NULL
);

-- Valoraciones de usuarios (como vendedores)
CREATE TABLE valoraciones_usuario (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    usuario_id CHAR(36),
    compra_id CHAR(36),
    valoracion INT NOT NULL CHECK (valoracion BETWEEN 1 AND 5),
    comentario TEXT,
    fecha_valoracion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL,
    FOREIGN KEY (compra_id) REFERENCES compras(id) ON DELETE SET NULL
);