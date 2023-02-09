-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-02-2023 a las 14:43:44
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ppt`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `dni` int(11) DEFAULT NULL,
  `Password` varchar(500) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `Name`, `LastName`, `Type`, `Email`, `dni`, `Password`, `createdAt`, `updatedAt`) VALUES
(1, 'Luis', 'Ramirez', '3', 'luis@gmail.com', 11111111, '12345', '2023-02-03 19:00:38', '2023-02-03 19:00:38'),
(11, 'Nicolas', 'Schleicher', '2', 'nicosc41@gmail.com', 2222222, '12345', '2023-02-09 11:47:04', '2023-02-09 11:47:04'),
(12, 'Roberto', 'Lisano', '1', 'rober@gmail.com', 33333333, '12345', '2023-02-09 12:00:56', '2023-02-09 12:00:56'),
(13, 'Noelia', 'Soledad', '2', 'noe@gmail.com', 5555555, '12345', '2023-02-09 12:18:13', '2023-02-09 12:18:13');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `dni` (`dni`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
