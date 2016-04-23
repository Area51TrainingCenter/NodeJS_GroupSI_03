-- MySQL dump 10.13  Distrib 5.7.9, for osx10.9 (x86_64)
--
-- Host: localhost    Database: bd_historias
-- ------------------------------------------------------
-- Server version	5.7.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `companias`
--

DROP TABLE IF EXISTS `companias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ccompania` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `diagnosticos`
--

DROP TABLE IF EXISTS `diagnosticos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `diagnosticos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `diagnostico` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `distritos`
--

DROP TABLE IF EXISTS `distritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `distritos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cdistrito` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `enfermeros`
--

DROP TABLE IF EXISTS `enfermeros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `enfermeros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cnombres` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `capellidos` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `historias`
--

DROP TABLE IF EXISTS `historias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `historias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nhistoria` int(11) DEFAULT NULL,
  `dfecha` date DEFAULT NULL,
  `idCompania` int(11) DEFAULT NULL,
  `crequerido` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ccontratante` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cpoliza` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cautorizacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cnombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `capellidoPaterno` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `capellidoMaterno` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nsexo` int(11) DEFAULT NULL,
  `cdni` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ctelefono` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nedad` int(11) DEFAULT NULL,
  `nunidadEdad` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cdireccion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `idDistrito` int(11) DEFAULT NULL,
  `creferencia` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `idDiagnostico` int(11) DEFAULT NULL,
  `ntipoAtencion` int(11) DEFAULT NULL,
  `idMedico` int(11) DEFAULT NULL,
  `idEnfermero` int(11) DEFAULT NULL,
  `csintomas` longtext COLLATE utf8_unicode_ci,
  `cobservaciones` longtext COLLATE utf8_unicode_ci,
  `ctratamiento` longtext COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `medicos`
--

DROP TABLE IF EXISTS `medicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medicos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cnombres` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `capellidos` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pilotos`
--

DROP TABLE IF EXISTS `pilotos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pilotos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cnombres` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `capellidos` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cusuario` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ccontrasena` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-04-16 10:59:43
