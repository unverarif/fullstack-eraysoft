-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `hak.partners`
--

DROP TABLE IF EXISTS `hak.partners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hak.partners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` text,
  `name` varchar(45) DEFAULT NULL,
  `job` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hak.partners`
--

LOCK TABLES `hak.partners` WRITE;
/*!40000 ALTER TABLE `hak.partners` DISABLE KEYS */;
INSERT INTO `hak.partners` VALUES (1,'https://www.eraysoft.com.tr/wp-content/uploads/2018/06/plustek-200x166.png','Plustek','Türkiye Distribütorü'),(2,'https://www.eraysoft.com.tr/wp-content/uploads/2018/06/ps_Cheque-Scanners-Panini-Logo-240x160.png','Panini SPA','Türkiye Distribütorü'),(3,'https://www.eraysoft.com.tr/wp-content/uploads/2018/06/Arena_renkli_ING-250x83.png','Arena Bilgisayar','Genel Dağıtıcı'),(4,'https://www.eraysoft.com.tr/wp-content/uploads/2018/06/logo_cozum_ortagi-300x200.png','Logo Yazılım','Çözüm Ortağı'),(5,'https://www.eraysoft.com.tr/wp-content/uploads/2018/06/ProtelLogo-239x96.png','Protel A.Ş.','Çözüm Ortağı'),(6,'https://www.eraysoft.com.tr/wp-content/uploads/2018/06/240_asyasoft_yazilim_l6esNKw0kf_2991-240x160.png','Asyasoft Yazılım','Çözüm Ortağı'),(7,'http://stratus.com.tr/wp-content/uploads/2021/12/stratus-logo-2.png','Stratus Bilişim','Çözüm Ortağı'),(8,'https://www.eraysoft.com.tr/wp-content/uploads/2018/06/mod-240x137.png','Mod Yazılım','Çözüm Ortağı'),(9,'https://www.akinsoft.com.tr/logo/images/akinsoft_logo.png?3','AKINSOFT','Çözüm Ortağı'),(10,'https://www.biscozum.com.tr/Content/assets/base/img/layout/logos/logo-3.png','BİS Çözüm','Çözüm Ortağı'),(11,'https://www.eraysoft.com.tr/wp-content/uploads/2018/06/sispar.jpg','Sispar','Çözüm Ortağı'),(12,'https://www.eraysoft.com.tr/wp-content/uploads/2018/06/sedna-295x118.png','Kod Yazılım','Çözüm Ortağı'),(13,'https://www.eraysoft.com.tr/wp-content/uploads/2019/03/Athena-1186x339.jpg','Athena','Çözüm Ortağı'),(14,'https://www.eraysoft.com.tr/wp-content/uploads/2019/03/europrotel_Logo-384x128.png','Euro Protel','Çözüm Ortağı'),(15,'https://www.eraysoft.com.tr/wp-content/uploads/2019/03/menu_logo-200x50.png','Amonra','Çözüm Ortağı');
/*!40000 ALTER TABLE `hak.partners` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-20 17:10:40
