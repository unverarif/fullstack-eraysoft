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
-- Table structure for table `idscanner_faq`
--

DROP TABLE IF EXISTS `idscanner_faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `idscanner_faq` (
  `id` int NOT NULL AUTO_INCREMENT,
  `soru` text,
  `cevap` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `idscanner_faq`
--

LOCK TABLES `idscanner_faq` WRITE;
/*!40000 ALTER TABLE `idscanner_faq` DISABLE KEYS */;
INSERT INTO `idscanner_faq` VALUES (1,'Hangi dokümanları otomatik okuyabilir?','Üzerinde MRZ kodu bulunan tüm Dünya pasaportları ve ID Kartları, Türkiye Cumhuriyeti yeni ve eski kimlik kartları ve yeni ehliyetleri otomatik olarak okuyabilmektedir.'),(2,'Hangi sektörler ihtiyaç duyar?','Oteller, Döviz büroları : Yeni bir yasa ile tüm döviz bürolarına alım-satım işlemlerinde pasaport resmini alma ve arşivleme zorunluluğu getirilmiştir. Bir çok döviz bürosu bu işlemler için Eraysoft ürünlerini tercih etmiştir. Güvenlik Girişi olan tüm Binalar Üniversiteler, Acenteler, Hastaneler'),(3,'Garanti süresi ve servis hızı ?','Plustek TR550 Plus serisi cihazların ve SmartScan Pro yazılımının garanti süresi 2 yıldır. Bu süre içerisinde cihazlarda meydana gelen ve kullanıcı hatası (sıvı teması , düşürme vs) dışındaki tüm arızalar herhangi bir ücret talep edilmeden Eraysoft Merkez Servis ofisinde tamir edilmektedir. Cihazın serviste bekleme süresi ortalama 1 gün maksimum 3 gündür. Eraysoft Bilişim Teknolojileri 12 yıldır Plustek Pasaport Kimlik Tarayıcı sistemlerinin Türkiye Distribütörü olup bu konuda yeterli sayıda eğitimli servis elemanı bulunmakta aynı zamanda da ihtiyaç duyulan tüm yedek parçaları her daim stoklarında tutmaktadır.'),(4,'Hangi Otelcilik(PMS) sistemleri ile entegre çalışır?','Plustek TR550 Plus Pasaport ve Kimlik tarayıcı ve Eraysoft SmartScan Pro Yazılımı tüm PMS sistemleri ile entegre çalışır. Örnek olarak, Fidelio , Opera, Athena, Asyasoft, Sispar, Akınsoft, ModHotel, Sentez, Elektra, Odeon, OnQ, EuroProtel , Amonra, Sedna vb. Bunlar dışında bir PMS sistemi kullanıyorsanız yazılım uzmanlarımız dakikalar içerisinde tanımlamaları yaparak sisteminize entegrasyonu sağlar.'),(5,'Sistemin kurulumu ve entegrasyon ne kadar sürmektedir?','Cihaz ve yazılım kurulumu ile PMS sistemine entegrasyonun tamamlanması maksimum 30 dk. dır. Kurulum uzak bağlantı ile rahatlıkla yapılabileceği gibi gereği durumunda yerinde de yapılabilmektedir.'),(6,'Garanti süresi ve servis hızı ?','Plustek TR550 Plus serisi cihazların ve SmartScan Pro yazılımının garanti süresi 2 yıldır. Bu süre içerisinde cihazlarda meydana gelen ve kullanıcı hatası (sıvı teması , düşürme vs) dışındaki tüm arızalar herhangi bir ücret talep edilmeden Eraysoft Merkez Servis ofisinde tamir edilmektedir. Cihazın serviste bekleme süresi ortalama 1 gün maksimum 3 gündür. Eraysoft Bilişim Teknolojileri 12 yıldır Plustek Pasaport Kimlik Tarayıcı sistemlerinin Türkiye Distribütörü olup bu konuda yeterli sayıda eğitimli servis elemanı bulunmakta aynı zamanda da ihtiyaç duyulan tüm yedek parçaları her daim stoklarında tutmaktadır.'),(7,'Cihaz ve yazılım fiyatları neledir?','Oteliniz veya kurumunuz için en ekonomik ve uygun sistemi belirleyip fiyat teklifi almak için lütfen (212) 278 01 56-57 no’lu telefonlarımızdan veya info@eraysoft.com.tr mail adresimizden bize ulaşabilirsiniz. Konu ile ilgili satış temsilcilerimiz sizlere yardımcı olmaktan mutluluk duyacaktır.'),(8,'OCR Lisans sınırı var mıdır?','Eraysoft tarafından satışı gerçekleştirilen Pasaport ve kimlik tarama sisteminde aylık ve yıllık gibi lisans veya tarama adeti sınırlaması yoktur. Süre ve tarama sınırı olmayan “Sınırsız OCR Lisansı” verilmektedir.');
/*!40000 ALTER TABLE `idscanner_faq` ENABLE KEYS */;
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
