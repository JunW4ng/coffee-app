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

CREATE TABLE product (
    id SERIAL,
    nombre VARCHAR(50) NOT NULL,
    precio INT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO product (nombre, precio) VALUES ('Espresso', 2000);
INSERT INTO product (nombre, precio) VALUES ('Capuccino', 2200);
INSERT INTO product (nombre, precio) VALUES ('FlatWhite', 2800);
INSERT INTO product (nombre, precio) VALUES ('Latte', 2800);
INSERT INTO product (nombre, precio) VALUES ('Americano', 2100);
INSERT INTO product (nombre, precio) VALUES ('Filtrados', 2800);
INSERT INTO product (nombre, precio) VALUES ('Matcha Latte', 3200);
INSERT INTO product (nombre, precio) VALUES ('Chai Latte', 3700);