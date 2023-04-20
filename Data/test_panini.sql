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
-- Table structure for table `panini`
--

DROP TABLE IF EXISTS `panini`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `panini` (
  `id` int NOT NULL AUTO_INCREMENT,
  `soru` longtext,
  `cevap` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `panini`
--

LOCK TABLES `panini` WRITE;
/*!40000 ALTER TABLE `panini` DISABLE KEYS */;
INSERT INTO `panini` VALUES (1,'Cihazların tarama hızı nedir?','Panini MyVisionX Serisi Çek Tarayıcı ve Çek Okuma cihazları dakika da 50 , 75 ve 100 çek tarama hızlarına göre 3 modelden oluşur.'),(2,'Sahte çekleri tespit edebilir mi?','Eraysoft’un Türkiye için özel ürettirdiği ve sadece Eraysoft tarafından satışı ve desteği gerçekleştirilen VisionX Türkiye serisi cihazlar içerisinde özel MICR okuma ünitesiyle sahte MICR tespiti yapmakta ve böyle bir durumda kullanıcı uyarmaktadır.'),(3,'Hangi Muhasebe (ERP) sistemleri ile entegre çalışır?','Panini çek tarayıcı ve Eraysoft Çek Otomasyon Yazılımı Türkiye’de yaygın kullanılan ve bilinen hemen hemen tüm ERP sistemleri entegre çalışır. Örnek olarak, LOGO , Link, Netsis, Oracle, SAP, ETA, AS400, Axapta, Navision, BIS , vb. Bunlar dışında bir ERP sistemi kullanıyorsanız ve sistemiz herhangi bir yöntem (txt dosya , xml, web service, doğrudan veritabanı bağlantısı vs.)ile veri alışverişine uygunsa bu durumda da Eraysoft Çek Otomasyon Yazılımını bu sisteme göre bir gün içinde uyarlanabilir.'),(4,'Sistemin kurulumu ve entegrasyon ne kadar sürmektedir?','Cihaz ve yazılım kurulumu ile ERP sistemine entegrasyonun tamamlanması maksimum 1-3 iş günü içerisinde tamamlanmaktadır. Kurulum uzaktan yapılabileceği gibi gereği durumunda yerinde de yapılabilmektedir.'),(5,'Garanti süresi ve servis hızı ?','Panini MyVisionX serisi cihazların garanti süresi 2 yıldır. Bu süre içerisinde cihazlarda meydana gelen ve kullanıcı hatası (sıvı teması , düşürme vs) dışındaki tüm arızalar herhangi bir ücret talep edilmeden Eraysoft Merkez Servis ofisinde tamir edilmektedir. Cihazın serviste bekleme süresi ortalama 1 gün maksimum 3 gündür. Eraysoft Bilişim Teknolojileri 12 yıldır Panini Çek Tarayıcı sistemlerinin Türkiye Distribütörü olup bu konuda yeterli sayıda eğitimli servis elemanı bulunmakta aynı zamanda da ihtiyaç duyulan tüm yedek parçaları her daim stoklarında tutmaktadır.'),(6,'Yazılım standartmıdır? Firmaya özel geliştirme yapılabilir mi?','Eraysoft Çek Otomasyon Yazılımı , yaklaşık 17 senelik bu konuda tecrübeye sahip yazılım mühendisleri tarafından geliştirilmiş olup, Türkiye ‘ deki muhasebe ,Bankacılık ve firmaların iç çalışma prensipleri göz önünde bulundurularak sürekli geliştirilmektedir. Çek konusunda çıkan tüm yeni mevzuatlar hızlı bir şekilde yazılıma veya donanıma entegre edilmektedir. Bununla birlikte firmanın yazılım üzerinde istediği ve sistemin altyapısını köklü olarak değiştirmeyen tüm ilave çalışmalar ücretsiz olarak ve çok hızlı bir şekilde sağlanmaktadır.'),(7,'Cihaz ve yazılım fiyatları neledir?','Firmanız için en ekonomik ve uygun sistemi belirleyip fiyat teklifi almak için lütfen (212) 278 01 56-57 no’lu telefonlarımızdan veya info@eraysoft.com.tr mail adresimizden bize ulaşabilirsiniz. Konu ile ilgili satış temsilcilerimiz sizlere yardımcı olmaktan mutluluk duyacaktır.');
/*!40000 ALTER TABLE `panini` ENABLE KEYS */;
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
