-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 12, 2023 at 05:33 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coinbase`
--

-- --------------------------------------------------------

--
-- Table structure for table `coindata`
--

CREATE TABLE `coindata` (
  `timestamp` varchar(50) NOT NULL,
  `coinValue` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `coindata`
--

INSERT INTO `coindata` (`timestamp`, `coinValue`) VALUES
('12/9/2023, 8:58:03 pm', 'tails won'),
('12/9/2023, 8:59:58 pm', 'heads won'),
('12/9/2023, 9:00:01 pm', 'heads won'),
('12/9/2023, 9:00:05 pm', 'tails won'),
('12/9/2023, 9:00:08 pm', 'tails won'),
('12/9/2023, 9:00:11 pm', 'tails won'),
('12/9/2023, 9:00:15 pm', 'heads won'),
('12/9/2023, 9:00:20 pm', 'tails won'),
('12/9/2023, 9:00:24 pm', 'heads won'),
('12/9/2023, 9:00:28 pm', 'tails won'),
('12/9/2023, 9:00:31 pm', 'heads won'),
('12/9/2023, 9:00:34 pm', 'tails won'),
('12/9/2023, 9:00:37 pm', 'heads won'),
('12/9/2023, 9:00:42 pm', 'heads won');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
