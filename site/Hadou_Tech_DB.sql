-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: hadou_tech
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'mouse-producto2.jpg.png',1,'2020-05-16 08:30:00','2020-05-16 08:30:00'),(2,'mouse-producto2.jpg.png',2,'2020-05-16 08:30:00','2020-05-16 08:30:00'),(3,'mouse-producto2.jpg.png',3,'2020-05-16 08:30:00','2020-05-16 08:30:00'),(4,'teclado-producto.jpg',4,'2020-05-16 08:30:00','2020-05-16 08:30:00');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Mouse',5400,12,'Noga','2020-05-16 08:30:00','2020-05-16 08:30:00'),(2,'Mouse',6500,12,'Logitech','2020-05-16 08:30:00','2020-05-16 08:30:00'),(3,'Mouse',7800,10,'Redragon','2020-05-16 08:30:00','2020-05-16 08:30:00'),(4,'Mouse',3500,8,'HP','2020-05-16 08:30:00','2020-05-16 08:30:00');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20210923215953-create-product.js'),('20210923220556-create-user.js'),('20210923220654-create-image.js'),('20210923220726-create-cart.js'),('20210923223138-create-address.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Enzo','Aguero','agueroenzo10@gmail.com','123123','default-image.png','admin','2020-05-16 08:30:00','2020-05-16 08:30:00'),(2,'Enzo','aguero','hola@gmail.com','123123',NULL,'usuario','2021-09-28 01:31:45','2021-09-28 01:31:45'),(3,'Enzo','Aguero','123123@gmail.com','123123',NULL,'usuario','2021-10-01 17:12:52','2021-10-01 17:12:52'),(4,'enzo','aguero','asdas@gmail.com','123123',NULL,'usuario','2021-10-01 17:14:09','2021-10-01 17:14:09'),(5,'Enzo','Aguero','intento@gmail.com','123123',NULL,'usuario','2021-10-01 17:17:19','2021-10-01 17:17:19');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-01 14:45:48
