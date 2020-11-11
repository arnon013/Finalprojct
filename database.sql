-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 11, 2020 at 09:09 PM
-- Server version: 10.1.46-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `darunph3_efx`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(10) NOT NULL,
  `cus` int(11) NOT NULL DEFAULT '1',
  `date` date NOT NULL,
  `breakdown` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(120) COLLATE utf8_unicode_ci NOT NULL,
  `statusbook` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `breakdowntech` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `tech` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `datefix` date NOT NULL,
  `service` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `withdraw` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `statusfix` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `cashpledge` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `statuscash` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `statusprice` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `datepro` date NOT NULL,
  `waranty` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `warantypro` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `book_img` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `cus`, `date`, `breakdown`, `name`, `statusbook`, `breakdowntech`, `price`, `tech`, `datefix`, `service`, `withdraw`, `statusfix`, `cashpledge`, `statuscash`, `statusprice`, `datepro`, `waranty`, `warantypro`, `book_img`) VALUES
(74, 27, '2020-10-29', 'เปิดไม่ติด', 'HP', 'รอช่างตรวจสอบ', 'รอช่างตรวจสอบ', 'รอช่างตรวจสอบ', 'ช่างอานนท์', '0000-00-00', 'รอช่างตรวจสอบ', 'รอช่างตรวจสอบ', '', '', '', '', '0000-00-00', '', '', 'imgbooking/74/1603683206.png'),
(75, 119, '2020-11-09', 'จอเสีย\n', '', 'รอช่างตรวจสอบ', 'รอช่างตรวจสอบ', 'รอช่างตรวจสอบ', 'รอแอดมินจัดการ', '0000-00-00', 'รอช่างตรวจสอบ', 'รอช่างตรวจสอบ', '', '', '', '', '0000-00-00', '', '', 'imgbooking/75/1604829021.png');

-- --------------------------------------------------------

--
-- Table structure for table `booking_detail`
--

CREATE TABLE `booking_detail` (
  `id` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `product_id` int(10) NOT NULL,
  `booking_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) NOT NULL,
  `name` varchar(256) NOT NULL,
  `description` text NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `created`, `modified`) VALUES
(1, 'Ram', '', '2017-06-01 00:35:07', '2017-05-30 11:04:33'),
(2, 'HDD', '', '2014-06-01 00:35:07', '2014-05-30 11:04:33'),
(3, 'SSD', '', '2014-06-01 00:35:07', '2014-05-30 11:04:54'),
(5, 'M.2', '', '2014-06-01 00:35:07', '2016-01-08 06:57:47');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(10) NOT NULL,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tel` text COLLATE utf8_unicode_ci NOT NULL,
  `img_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` char(1) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `name`, `email`, `password`, `tel`, `img_id`, `address`, `status`) VALUES
(27, 'TiMi', 'pond@mail.com', '96616680568c4b9f536d55c134e45c27', '0634463398', 'imgprofile/27/1603609260.png', '194/6 Raimaiphatthana Cha-am Phetchaburi 76120', '1'),
(28, 'Anurak Krakphet', 'max@mail.com', '96616680568c4b9f536d55c134e45c27', '0989191654', 'imgprofile/28/1591279265.png', 'Signalinfo LTD. นครปฐม 73000', '2'),
(30, 'ช่างอานนท์', 'arm@mail.com', '96616680568c4b9f536d55c134e45c27', '0882201075', 'imgprofile/30/1601415440.png', '12/4', '3'),
(47, 'ช่างวิศรุต', 'pondtech@mail.com', '96616680568c4b9f536d55c134e45c27', '0989191654', 'imgprofile/avatar.png', 'Signalinfo ', '3'),
(50, 'ช่างต่าย', 'taitech@mail.com', '96616680568c4b9f536d55c134e45c27', '0989191844', 'imgprofile/avatar.png', 'Signalinfo ', '3'),
(79, 'satjing', 'supatthar2015@gmail.com', '694406c736b0ea54074a390a9c74c06a', '0658494389', 'imgprofile/avatar.png', '12/4', '1'),
(80, 'อาม', 'arm@mail.com', '81dc9bdb52d04dc20036dbd8313ed055', '0882201075', 'imgprofile/avatar.png', '19/2', '1'),
(81, 'toto', 'toto@mail.com', '29b729c5473115d22713faa9f5b976f3', '0658494389', 'imgprofile/avatar.png', '12/4', '1'),
(82, 'Wisarut Dokmaikul', 'bad@mail.com', '96616680568c4b9f536d55c134e45c27', '0988185549', 'imgprofile/82/1591018983.png', '194/6 76120', '1'),
(83, 'Anurak klakphet', 'Ggk@mail.com', '25d55ad283aa400af464c76d713c07ad', '0984812229', 'imgprofile/avatar.png', '262', '1'),
(84, 'สุภัทรา สัตย์จริง', 'pond@mail.com', '96616680568c4b9f536d55c134e45c27', '0658494389', 'imgprofile/avatar.png', '12/4', '1'),
(85, 'สุภัทรา', 'spt@mail.com', '96616680568c4b9f536d55c134e45c27', '0658494389', 'imgprofile/avatar.png', '12/4', '1'),
(86, 'อาม', 'moo@mail.com', '3c65755497c3bd14241d8b28155de06f', '0882201075', 'imgprofile/avatar.png', '19/2', '1'),
(87, 'Tai supatthar', 'Tai@mail.com', '25d55ad283aa400af464c76d713c07ad', '0929191844', NULL, NULL, '1'),
(88, 'พสิษฐ์ กาญจนพาณิชย์กุล', 'pasit2542@gmail.com', '040b7cf4a55014e185813e0644502ea9', '0926194516', 'imgprofile/88/1597375350.png', '18/24', '1'),
(89, 'Ta', 'Ta112141@mail.com', '25d55ad283aa400af464c76d713c07ad', '0929191844', 'laptop.jpg', '12/4', '1'),
(117, 'Wisarut Dokmaikul', 'pondwsrd@gmail.com', '96616680568c4b9f536d55c134e45c27', '0634463398', 'imgprofile/117/1600986975.png', '194/6 ถนน 3301\nต.ไร่ใหม่พัฒนา อ.ชะอำ จ.เพรชบุรี\n76120 ', '1'),
(118, 'สุภัทรา', 'sup112141@gmail.com', '2928aa81e6b562d017102c6e5906136b', '0658494389', 'imgprofile/avatar.png', '12/4 m4 ', '1'),
(119, 'สุชาติ สัตย์จริง', 'suchad@mail.com', '3f08bbfe306ebec4a20e54d2eb7d88a0', '0634805215', 'imgprofile/avatar.png', '12/4', '1');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderid` int(10) NOT NULL,
  `member_id` int(20) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cname` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `tel` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `total` float NOT NULL,
  `number` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `order_img` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderid`, `member_id`, `date`, `cname`, `address`, `email`, `tel`, `total`, `number`, `order_img`) VALUES
(171, 27, '2020-06-01 17:44:13', 'TiMi', '194/6 Raimaiphatthana Cha-am Phetchaburi 76120', 'pond@mail.com', '0634463398', 2800, 'SHP5016028599', 'img/171/1591033453.png'),
(172, 27, '2020-10-26 04:07:08', 'TiMi', '180/8 73000 NPRU', 'pond@mail.com', '0634463398', 8130, '', 'img/172/1603685228.png'),
(173, 27, '2020-10-26 04:07:54', 'TiMi', '180/8 73000 NPRU', 'pond@mail.com', '0634463398', 8130, '', 'img/173/1603685274.png'),
(174, 27, '2020-10-26 04:08:47', 'TiMi', '180/8 73000 NPRU', 'pond@mail.com', '0634463398', 8130, '', 'img/174/1603685327.png'),
(175, 119, '2020-11-08 09:52:02', 'สุชาติ สัตย์จริง', '12/4', 'suchad@mail.com', '0634805215', 3200, '', 'img/175/1604829122.png'),
(176, 119, '2020-11-08 09:52:05', 'สุชาติ สัตย์จริง', '12/4', 'suchad@mail.com', '0634805215', 3200, '', 'img/176/1604829125.png'),
(177, 119, '2020-11-08 09:52:05', 'สุชาติ สัตย์จริง', '12/4', 'suchad@mail.com', '0634805215', 3200, '', 'img/177/1604829125.png'),
(178, 119, '2020-11-08 09:52:06', 'สุชาติ สัตย์จริง', '12/4', 'suchad@mail.com', '0634805215', 3200, '', 'img/178/1604829126.png');

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `product_id` int(10) NOT NULL,
  `count` int(10) NOT NULL,
  `price` int(10) NOT NULL,
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`product_id`, `count`, `price`, `id`, `order_id`) VALUES
(98, 1, 2800, 134, 171),
(100, 1, 7880, 135, 172),
(80, 1, 250, 136, 172),
(100, 1, 7880, 137, 173),
(80, 1, 250, 138, 173),
(100, 1, 7880, 139, 174),
(80, 1, 250, 140, 174),
(101, 1, 3200, 141, 175),
(101, 1, 3200, 142, 176),
(101, 1, 3200, 143, 177),
(101, 1, 3200, 144, 178);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `category_id` int(11) NOT NULL,
  `qty` int(20) NOT NULL,
  `waranty` int(20) NOT NULL,
  `created` datetime NOT NULL,
  `img` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `category_id`, `qty`, `waranty`, `created`, `img`) VALUES
(77, 'M.2 512 GB Samsung Evo', 'M.2 512 GB Samsung Evo', '7800', 5, 10, 2, '0000-00-00 00:00:00', 'imgproduct/77/1600359026.png'),
(78, 'Acer Nitro', 'ss', '4490', 3, 10, 10, '0000-00-00 00:00:00', 'imgproduct/78/1590771523.png'),
(79, 'Pond', '', '100', 3, 10, 10, '0000-00-00 00:00:00', 'imgproduct/79/1591030542.png'),
(80, 'ssd', '480 GB', '250', 3, 1, 1, '0000-00-00 00:00:00', 'imgproduct/80/1591028995.png'),
(81, 'intel', 'gen 9', '10000', 5, 1, 1, '0000-00-00 00:00:00', 'imgproduct/81/1591029065.png'),
(82, 'Sandisk', 'M.2', '1000', 5, 1, 1, '0000-00-00 00:00:00', 'imgproduct/82/1591029147.png'),
(83, 'Sandisk', '500GB', '3000', 5, 1, 1, '0000-00-00 00:00:00', 'imgproduct/83/1591029220.png'),
(84, 'Sandisk', '128GB', '1500', 5, 1, 1, '0000-00-00 00:00:00', 'imgproduct/84/1591029240.png'),
(85, 'Sandisk', '256GB', '2500', 5, 1, 1, '0000-00-00 00:00:00', 'imgproduct/85/1591029261.png'),
(86, 'Sandisk', '1 T', '5500', 5, 1, 1, '0000-00-00 00:00:00', 'imgproduct/86/1591029291.png'),
(87, 'samsung', '1 T 970 EVO', '6500', 5, 1, 1, '0000-00-00 00:00:00', 'imgproduct/87/1591031222.png'),
(88, 'samsung', '512 GB 970 EVO', '6500', 5, 1, 1, '0000-00-00 00:00:00', 'imgproduct/88/1591031233.png'),
(89, '354857315', '256 GB 970 EVO', '3500', 5, 1, 1, '0000-00-00 00:00:00', 'imgproduct/89/1591029370.png'),
(90, '354857315', '128 GB 970 EVO', '2500', 5, 1, 1, '0000-00-00 00:00:00', 'imgproduct/90/1591029381.png'),
(91, 'WD', '128 GB ', '1200', 3, 1, 1, '0000-00-00 00:00:00', 'imgproduct/91/1591029423.png'),
(92, 'WD', '256 GB ', '1200', 3, 1, 1, '0000-00-00 00:00:00', 'imgproduct/92/1591029432.png'),
(93, 'WD', '480 GB ', '2200', 3, 1, 1, '0000-00-00 00:00:00', 'imgproduct/93/1591029455.png'),
(94, 'WD', '1 T  ', '4800', 3, 1, 1, '0000-00-00 00:00:00', 'imgproduct/94/1591029471.png'),
(95, 'KingSton', 'Bus 1666  4GB', '1200', 1, 1, 1, '0000-00-00 00:00:00', 'imgproduct/95/1591029632.png'),
(96, 'KingSton', 'Bus 3200 8GB', '3100', 1, 1, 1, '0000-00-00 00:00:00', 'imgproduct/96/1591029664.png'),
(97, 'Corsair', 'Bus 3000 16GB(8GBx2)', '3700', 1, 1, 2, '0000-00-00 00:00:00', 'imgproduct/97/1591029786.png'),
(98, 'Corsair', 'Bus 2600 16GB(8GBx2)', '2800', 1, 1, 2, '0000-00-00 00:00:00', 'imgproduct/98/1591029803.png'),
(99, 'WD', '500 GB', '700', 2, 1, 3, '0000-00-00 00:00:00', 'imgproduct/99/1591029882.png'),
(100, 'WD', '6 T', '7880', 2, 1, 3, '0000-00-00 00:00:00', 'imgproduct/100/1591114328.png'),
(101, 'Dahua Skyhawk', '1 T', '3200', 2, 1, 3, '0000-00-00 00:00:00', 'imgproduct/101/1591030003.png'),
(106, 'SSD WD Green', '480 GB', '2500', 3, 1, 1, '0000-00-00 00:00:00', 'imgproduct/106/1602605408.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `booking_detail`
--
ALTER TABLE `booking_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `booking_detail_ibfk_1` (`booking_id`),
  ADD KEY `booking_detail_ibfk_2` (`product_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderid`),
  ADD KEY `member_id` (`member_id`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_detail_ibfk_1` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `booking_detail`
--
ALTER TABLE `booking_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=179;

--
-- AUTO_INCREMENT for table `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking_detail`
--
ALTER TABLE `booking_detail`
  ADD CONSTRAINT `booking_detail_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `booking` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `booking_detail_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`);

--
-- Constraints for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`orderid`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
