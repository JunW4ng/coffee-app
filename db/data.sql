CREATE DATABASE app_coffee;

CREATE TABLE admin_local (
    id SERIAL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(25) NOT NULL,
    nombre VARCHAR(25) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE empleado (
    id SERIAL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(25) NOT NULL,
    nombre VARCHAR(25) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (admin_local_id) REFERENCES admin_local(id)
);

CREATE TABLE orden (
    id SERIAL,
    total_orden INT NOT NULL,
    orden_date DATE,
    PRIMARY KEY (id),
    FOREIGN KEY (empleado_id) REFERENCES empleado(id)
);
