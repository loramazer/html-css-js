-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: hotel
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `quartos`
--

DROP TABLE IF EXISTS `quartos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quartos` (
  `quarto_id` int NOT NULL AUTO_INCREMENT,
  `numero_quarto` int NOT NULL DEFAULT '10',
  `capacidade` int NOT NULL,
  `preco_por_noite` decimal(10,2) NOT NULL,
  `status_disponibilidade` tinyint(1) NOT NULL,
  `descricao` text,
  `criado_em` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `atualizado_em` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `tipo_quarto_id` int NOT NULL,
  PRIMARY KEY (`quarto_id`),
  KEY `fk_tipo_quarto` (`tipo_quarto_id`),
  CONSTRAINT `fk_tipo_quarto` FOREIGN KEY (`tipo_quarto_id`) REFERENCES `tipos_quarto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quartos`
--

LOCK TABLES `quartos` WRITE;
/*!40000 ALTER TABLE `quartos` DISABLE KEYS */;
INSERT INTO `quartos` VALUES (46,101,1,100.00,1,'Quarto individual confortável com cama de solteiro.','2024-10-08 21:39:02','2024-10-08 21:39:02',1),(47,102,1,100.00,1,'Quarto individual moderno com vista para o jardim.','2024-10-08 21:39:02','2024-10-08 21:39:02',1),(48,103,1,120.00,1,'Quarto individual com decoração clássica.','2024-10-08 21:39:02','2024-10-08 21:39:02',1),(49,104,1,110.00,1,'Quarto individual com design contemporâneo.','2024-10-08 21:39:02','2024-10-08 21:39:02',1),(50,105,1,90.00,1,'Quarto individual simples e aconchegante.','2024-10-08 21:39:02','2024-10-08 21:39:02',1),(51,201,2,150.00,1,'Quarto duplo com cama de casal e ambiente acolhedor.','2024-10-08 21:39:02','2024-10-08 21:39:02',2),(52,202,2,160.00,1,'Quarto duplo com duas camas de solteiro.','2024-10-08 21:39:02','2024-10-08 21:39:02',2),(53,203,2,170.00,1,'Quarto duplo com vista panorâmica e varanda.','2024-10-08 21:39:02','2024-10-08 21:39:02',2),(54,301,3,200.00,1,'Quarto triplo espaçoso com camas confortáveis.','2024-10-08 21:39:02','2024-10-08 21:39:02',3),(55,302,3,210.00,1,'Quarto triplo com estilo moderno e decoração vibrante.','2024-10-08 21:39:02','2024-10-08 21:39:02',3),(56,401,4,250.00,1,'Quarto familiar com duas camas de casal.','2024-10-08 21:39:02','2024-10-08 21:39:02',4),(57,402,4,260.00,1,'Quarto familiar com área de estar e cozinha compacta.','2024-10-08 21:39:02','2024-10-08 21:39:02',4),(58,403,4,270.00,1,'Quarto familiar com design elegante e funcional.','2024-10-08 21:39:02','2024-10-08 21:39:02',4),(59,501,2,300.00,1,'Suíte luxuosa com cama king size e banheira de hidromassagem.','2024-10-08 21:39:02','2024-10-08 21:39:02',1),(60,502,2,320.00,1,'Suíte romântica com varanda e vista para o mar.','2024-10-08 21:39:02','2024-10-08 21:39:02',1);
/*!40000 ALTER TABLE `quartos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-09 16:22:24
