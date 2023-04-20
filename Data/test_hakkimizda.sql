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
-- Table structure for table `hakkimizda`
--

DROP TABLE IF EXISTS `hakkimizda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hakkimizda` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `metin` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hakkimizda`
--

LOCK TABLES `hakkimizda` WRITE;
/*!40000 ALTER TABLE `hakkimizda` DISABLE KEYS */;
INSERT INTO `hakkimizda` VALUES (1,'Firma Profili','ERAYSOFT Bilişim Teknolojileri ve Hizmetleri Tic. Ltd. Şti. , 2006 yılının başında Bankalar ve Kurumsal firmalar başta olmak üzere pasaport okuyucu, kimlik okuyucu, çek okuyucu konularında tüm sektörlere çeşitli bilişim çözümleri sunmak üzere kurulmuştur. ERAYSOFT, müşterilerine en yeni teknolojileri ve en uygun çözümleri sunarak, müşterilerinin verimini, rekabet gücünü arttırarak; koşulsuz müşteri memnuniyeti sağlamayı, kaliteli ve eksiksiz hizmetler sunmayı kendine ilke edinmiştir. ERAYSOFT, ilkeleri doğrultusunda sunduğu yenilikçi ve kalıcı çözümlerle sektördeki yerini almıştır. Yazılım, donanım ve servis büro uygulamaları konularında uzmanlaşmış kadromuz deneyimlerini ERAYSOFT bünyesinde sizlerle paylaşmaktadır. Pasaport Okuyucu, Kimlik Okuyucu konularında sektöründe ilk ve en yaygın firmadır. Çek okuyucu konusunda ise müşteri memnuniyeti ve yaygınlığı en yüksek firmadır.'),(2,'Bilgi Güvenliği','ERAYSOFT ve çalışanları olarak, iş sürekliliğimize ve bilgi varlıklarımıza yönelik her türlü riski yönetmek amacıyla; Bilgi güvenliği yönetim sistemimizin ISO 27001:2013 standardının gereklerini yerine getirecek şekilde dokümante edilmesi, belgelendirilmesi ve sürekli iyileştirilmesi, Bilgi güvenliği ile ilgili tüm yasal mevzuat ve sözleşmelere uyulması, Bilgi varlıklarına yönelik risklerin sistematik olarak yönetilmesi, Bilgi güvenliği farkındalığını artırmak amacıyla teknik ve davranışsal yetkinlikleri geliştirecek eğitimlerin gerçekleştirilmesi yönünde faaliyetlerimizi, uyguladığımız diğer yönetim sistemleri ile birlikte bütünleşik bir şekilde yöneterek, bilişim sektöründe bilgi güvenliği açısından öncülüğümüzle örnek bir kuruluş olmak için tüm gücümüzle çalışırız.');
/*!40000 ALTER TABLE `hakkimizda` ENABLE KEYS */;
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
