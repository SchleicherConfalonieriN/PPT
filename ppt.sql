-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-02-2023 a las 15:31:43
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
-- Estructura de tabla para la tabla `consultorios`
--

CREATE TABLE `consultorios` (
  `id` int(11) NOT NULL,
  `Numero` int(11) NOT NULL,
  `id_medico` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `consultorios`
--

INSERT INTO `consultorios` (`id`, `Numero`, `id_medico`, `createdAt`, `updatedAt`) VALUES
(1, 100, 1, '2023-02-08 15:58:17', '2023-02-09 12:18:40'),
(2, 200, 2, '2023-02-08 15:58:22', '2023-02-09 12:21:36'),
(3, 300, NULL, '2023-02-08 15:58:27', '2023-02-08 18:54:38'),
(4, 400, NULL, '2023-02-09 00:39:39', '2023-02-09 00:39:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidades`
--

CREATE TABLE `especialidades` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `especialidades`
--

INSERT INTO `especialidades` (`id`, `Nombre`, `createdAt`, `updatedAt`) VALUES
(1, 'Cardiologia', '2023-02-08 02:24:52', '2023-02-09 00:38:55'),
(2, 'Neurologia', '2023-02-03 18:56:07', '2023-02-03 18:56:07'),
(3, 'Odontologia', '2023-02-03 18:56:07', '2023-02-03 18:56:07'),
(10, 'Pediatria', '2023-02-03 18:56:07', '2023-02-03 18:56:07'),
(12, 'Oncologia', '2023-02-08 20:12:37', '2023-02-08 20:15:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horarios`
--

CREATE TABLE `horarios` (
  `id` int(11) NOT NULL,
  `id_medico` int(11) DEFAULT NULL,
  `id_servicio` int(11) DEFAULT NULL,
  `dia` varchar(255) DEFAULT NULL,
  `entrada` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicos`
--

CREATE TABLE `medicos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `dni` int(11) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `medicos`
--

INSERT INTO `medicos` (`id`, `nombre`, `apellido`, `dni`, `precio`, `createdAt`, `updatedAt`) VALUES
(1, 'Nicolas', 'Schleicher', 2222222, 5000, '2023-02-09 11:47:04', '2023-02-09 12:21:12'),
(2, 'Noelia', 'Soledad', 5555555, 5000, '2023-02-09 12:18:13', '2023-02-09 12:21:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medico_especialidads`
--

CREATE TABLE `medico_especialidads` (
  `id` int(11) NOT NULL,
  `id_medico` int(11) NOT NULL,
  `id_especialidad` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `medico_especialidads`
--

INSERT INTO `medico_especialidads` (`id`, `id_medico`, `id_especialidad`, `createdAt`, `updatedAt`) VALUES
(2, 2, 2, '2023-02-03 19:16:37', '2023-02-03 19:16:37'),
(3, 3, 3, '2023-02-03 19:16:37', '2023-02-03 19:16:37'),
(4, 4, 4, '2023-02-03 19:16:37', '2023-02-03 19:16:37'),
(6, 4, 5, '2023-02-03 19:16:37', '2023-02-03 19:16:37'),
(16, 1, 3, '2023-02-08 14:23:04', '2023-02-08 14:23:04'),
(17, 1, 4, '2023-02-08 14:23:06', '2023-02-08 14:23:06'),
(23, 1, 1, '2023-02-08 19:08:22', '2023-02-08 19:08:22'),
(24, 1, 0, '2023-02-08 19:09:44', '2023-02-08 19:09:44'),
(25, 1, 0, '2023-02-09 00:39:06', '2023-02-09 00:39:06'),
(26, 1, 10, '2023-02-09 00:39:19', '2023-02-09 00:39:19'),
(27, 1, 0, '2023-02-09 12:18:40', '2023-02-09 12:18:40'),
(28, 1, 2, '2023-02-09 12:21:12', '2023-02-09 12:21:12'),
(29, 2, 12, '2023-02-09 12:21:36', '2023-02-09 12:21:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajeria`
--

CREATE TABLE `mensajeria` (
  `id` int(11) NOT NULL,
  `id_paciente` int(11) DEFAULT NULL,
  `id_generador` int(11) DEFAULT NULL,
  `medico` varchar(255) DEFAULT NULL,
  `paciente` varchar(255) DEFAULT NULL,
  `DateOld` date DEFAULT NULL,
  `DateNew` date DEFAULT NULL,
  `HourOld` int(11) DEFAULT NULL,
  `HourNew` int(11) DEFAULT NULL,
  `Leido` varchar(255) DEFAULT NULL,
  `Tipo` varchar(255) DEFAULT NULL,
  `Generador` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mensajeria`
--

INSERT INTO `mensajeria` (`id`, `id_paciente`, `id_generador`, `medico`, `paciente`, `DateOld`, `DateNew`, `HourOld`, `HourNew`, `Leido`, `Tipo`, `Generador`, `createdAt`, `updatedAt`) VALUES
(1, 6, 2, 'Lucas Schleicher', 'Noelia Soledad', '2023-02-15', NULL, 13, NULL, '0', 'delete', 'medico', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 6, 2, 'Lucas Schleicher', 'Noelia Soledad', '2023-02-20', '2023-02-20', 10, 13, '0', 'update', 'medico', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 6, 2, 'Lab3', 'Noelia Soledad', '2023-02-06', '2023-02-06', 11, 14, '0', 'update', 'servicio', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 6, 2, 'Lab3', 'Noelia Soledad', '2023-02-06', NULL, 14, NULL, '0', 'delete', 'servicio', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 6, 2, 'Lucas Schleicher', 'Noelia Soledad', '2023-02-20', '2023-02-20', 13, 11, '0', 'update', 'medico', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 6, 2, 'Lucas Schleicher', 'Noelia Soledad', '2023-02-07', '2023-02-07', 14, 14, '0', 'update', 'medico', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 6, 1, 'Kevin Lima', 'Noelia Soledad', '2023-02-20', '2023-02-20', 10, 10, '0', 'update', 'medico', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 6, 1, 'Kevin Lima', 'Noelia Soledad', '2023-02-14', '2023-02-14', 13, 13, '0', 'update', 'medico', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 6, 2, 'Lucas Schleicher', 'Noelia Soledad', '2023-02-14', '2023-02-14', 10, 10, '0', 'update', 'medico', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajerias`
--

CREATE TABLE `mensajerias` (
  `id` int(11) NOT NULL,
  `id_paciente` int(11) DEFAULT NULL,
  `id_servicio` int(11) DEFAULT NULL,
  `servicio` varchar(255) DEFAULT NULL,
  `paciente` varchar(255) DEFAULT NULL,
  `DateOld` date DEFAULT NULL,
  `DateNew` date DEFAULT NULL,
  `HourOld` int(11) DEFAULT NULL,
  `HourNew` int(11) DEFAULT NULL,
  `Leido` varchar(255) DEFAULT NULL,
  `Tipo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `precio` float DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`id`, `nombre`, `precio`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(2, 'Cirujia Ocular', 3000, 'Es una examen de laboratorio acorda las normas expresadas en los cociente racionales', '2023-02-08 20:21:08', '2023-02-09 09:40:26'),
(3, 'Electroencefalograma', 4500, 'Examente de ritmo electrico cerebral', '2023-02-09 09:39:10', '2023-02-09 09:39:10'),
(4, 'Electrocardiograma', 5399, 'Examen de nivel de presion sanguinea', '2023-02-09 09:39:35', '2023-02-09 09:39:35'),
(5, 'Conteo de Trigliceridos', 1920, 'Cantidad de Trigliceridos en Sangre', '2023-02-09 09:40:02', '2023-02-09 09:40:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

CREATE TABLE `turnos` (
  `id` int(11) NOT NULL,
  `id_paciente` int(11) DEFAULT NULL,
  `id_medico` int(11) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Hour` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `turnos`
--

INSERT INTO `turnos` (`id`, `id_paciente`, `id_medico`, `Date`, `Hour`, `createdAt`, `updatedAt`) VALUES
(2, 6, 2, '2023-02-20', 11, '2023-02-09 04:51:33', '2023-02-09 06:38:37'),
(3, 6, 16, '2023-02-21', 10, '2023-02-09 05:08:50', '2023-02-09 05:08:50'),
(4, 6, 23, '2023-02-20', 14, '2023-02-09 10:10:28', '2023-02-09 10:10:28'),
(5, 6, 1, '2023-02-20', 10, '2023-02-09 10:10:58', '2023-02-09 10:10:58'),
(6, 6, 23, '2023-02-07', 10, '2023-02-09 10:16:57', '2023-02-09 10:16:57'),
(7, 6, 2, '2023-02-07', 14, '2023-02-09 10:17:00', '2023-02-09 10:17:00'),
(8, 6, 1, '2023-02-14', 13, '2023-02-09 10:19:25', '2023-02-09 10:19:25'),
(9, 6, 2, '2023-02-14', 10, '2023-02-09 10:21:24', '2023-02-09 10:21:24'),
(10, 12, 0, '2023-02-14', 12, '2023-02-09 12:01:49', '2023-02-09 12:01:49'),
(11, 12, 1, '2023-02-13', 12, '2023-02-09 12:11:23', '2023-02-09 12:11:23');

--
-- Disparadores `turnos`
--
DELIMITER $$
CREATE TRIGGER `delete_turno` AFTER DELETE ON `turnos` FOR EACH ROW BEGIN 
SET @nombre = (select nombre from medicos where id = old.id_medico); 
SET @apellido = (select apellido from medicos where id = old.id_medico); 
set @medico = CONCAT(@nombre," ",@apellido); 
set @nombre_paciente = (select Name from users where id = old.id_paciente); 
set @apellido_paciente = (select LastName from users where id = old.id_paciente); 
set @paciente = CONCAT(@nombre_paciente," ",@apellido_paciente); 
set @dateold = old.Date; 
set @hourold = old.Hour;

INSERT into mensajeria(id_paciente,id_generador,medico,paciente,DateOld,DateNew,HourOld,HourNew,Leido,Tipo,Generador) 
VALUES (old.id_paciente,old.id_medico,@medico,@paciente,@dateold,null,@hourold,null,0,"delete","medico"); 
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `turno_update` BEFORE UPDATE ON `turnos` FOR EACH ROW BEGIN 
SET @nombre = (select nombre from medicos where id = new.id_medico); 
SET @apellido = (select apellido from medicos where id = new.id_medico); 
set @medico = CONCAT(@nombre," ",@apellido); 
set @nombre_paciente = (select Name from users where id = new.id_paciente); 
set @apellido_paciente = (select LastName from users where id = new.id_paciente); 
set @paciente = CONCAT(@nombre_paciente," ",@apellido_paciente); 
set @datenew = new.Date; 
set @dateold = old.Date;
set @hournew = new.Hour; 
set @hourold = old.Hour;

INSERT into mensajeria(id_paciente,id_generador,medico,paciente,DateOld,DateNew,HourOld,HourNew,Leido,Tipo,Generador) 
VALUES (new.id_paciente,new.id_medico,@medico,@paciente,@dateold,@datenew,@hourold,@hournew,0,"update","medico"); 
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turno_s`
--

CREATE TABLE `turno_s` (
  `id` int(11) NOT NULL,
  `id_paciente` int(11) DEFAULT NULL,
  `id_servicio` int(11) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Hour` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `turno_s`
--

INSERT INTO `turno_s` (`id`, `id_paciente`, `id_servicio`, `Date`, `Hour`, `createdAt`, `updatedAt`) VALUES
(3, 6, 2, '2023-02-22', 12, '2023-02-09 09:36:14', '2023-02-09 09:36:14'),
(4, 6, 2, '2023-02-22', 12, '2023-02-09 09:37:12', '2023-02-09 09:37:12'),
(5, 6, 3, '2023-02-07', 10, '2023-02-09 10:25:13', '2023-02-09 10:25:13'),
(6, 12, 2, '2023-02-21', 12, '2023-02-09 12:01:37', '2023-02-09 12:01:37'),
(7, 12, 4, '2023-02-20', 11, '2023-02-09 12:12:06', '2023-02-09 12:12:06');

--
-- Disparadores `turno_s`
--
DELIMITER $$
CREATE TRIGGER `turno_S_delete` AFTER DELETE ON `turno_s` FOR EACH ROW BEGIN 
SET @nombre = (select nombre from servicios where id = old.id_servicio); 
set @nombre_paciente = (select Name from users where id = old.id_paciente); 
set @apellido_paciente = (select LastName from users where id = old.id_paciente); 
set @paciente = CONCAT(@nombre_paciente," ",@apellido_paciente); 
 
set @dateold = old.Date;

set @hourold = old.Hour;

INSERT into mensajeria(id_paciente,id_generador,medico,paciente,DateOld,DateNew,HourOld,HourNew,Leido,Tipo,Generador) 
VALUES (old.id_paciente,old.id_servicio,@nombre,@paciente,@dateold,null,@hourold,null,0,"delete","servicio"); 
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `turno_S_update` BEFORE UPDATE ON `turno_s` FOR EACH ROW BEGIN 
SET @nombre = (select nombre from servicios where id = new.id_servicio); 
set @nombre_paciente = (select Name from users where id = new.id_paciente); 
set @apellido_paciente = (select LastName from users where id = new.id_paciente); 
set @paciente = CONCAT(@nombre_paciente," ",@apellido_paciente); 
set @datenew = new.Date; 
set @dateold = old.Date;
set @hournew = new.Hour; 
set @hourold = old.Hour;

INSERT into mensajeria(id_paciente,id_generador,medico,paciente,DateOld,DateNew,HourOld,HourNew,Leido,Tipo,Generador) 
VALUES (new.id_paciente,new.id_servicio,@nombre,@paciente,@dateold,@datenew,@hourold,@hournew,0,"update","servicio"); 
END
$$
DELIMITER ;

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
-- Indices de la tabla `consultorios`
--
ALTER TABLE `consultorios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Numero` (`Numero`);

--
-- Indices de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medicos`
--
ALTER TABLE `medicos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dni` (`dni`);

--
-- Indices de la tabla `medico_especialidads`
--
ALTER TABLE `medico_especialidads`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mensajeria`
--
ALTER TABLE `mensajeria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mensajerias`
--
ALTER TABLE `mensajerias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `turno_s`
--
ALTER TABLE `turno_s`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT de la tabla `consultorios`
--
ALTER TABLE `consultorios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `horarios`
--
ALTER TABLE `horarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `medicos`
--
ALTER TABLE `medicos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `medico_especialidads`
--
ALTER TABLE `medico_especialidads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `mensajeria`
--
ALTER TABLE `mensajeria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `mensajerias`
--
ALTER TABLE `mensajerias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `turnos`
--
ALTER TABLE `turnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `turno_s`
--
ALTER TABLE `turno_s`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
