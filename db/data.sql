CREATE DATABASE app_coffee;

CREATE TABLE ADMIN_LOCAL (
    id SERIAL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(25) NOT NULL,
    nombre VARCHAR(25) NOT NULL
);

CREATE TABLE EMPLEADO (
    id SERIAL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(25) NOT NULL,
    nombre VARCHAR(25) NOT NULL
);

CREATE TABLE ORDEN (
    id SERIAL,
    total_orden INT NOT NULL,
    orden_date DATE
);