-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 01 Cze 2022, 09:42
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `star_systems`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `planety`
--

CREATE TABLE `planety` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(20) UNSIGNED NOT NULL,
  `atmosphere` varchar(20) DEFAULT NULL,
  `temprature` varchar(10) DEFAULT NULL,
  `climate` varchar(20) UNSIGNED DEFAULT NULL,
  `gravity` float(2) UNSIGNED DEFAULT NULL,
  `system_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `planety`
--

INSERT INTO `planety` (`id`, `name`, `atmosphere`, `temperature`, `climate`, `gravity`, `system_id`) VALUES
(1, "Merkury", "Brak atmosfery", "Próżnia", "Kratery kosmiczne", 3.2, 0),
(2, "Wenus", "Lekko toksyczna", "10*C - 50*C", "Bagna siarkowe", 8.9, 0),
(3, "Ziemia", "Da się żyć", "-5*C - 24*C", "Mieszany", 9.9, 0),
(4, "Księżyc", "Brak atmosfery", "Próżnia", "Kratery kosmiczne", 1.6, 0),
(5, "Mars", "Da się żyć", "-10*C - 20*C", "Prekambryjska dzicz", 3.7, 0),
(6, "Deimos", "Brak atmosfery", "Próżnia", "Kratery kosmiczne", 0.003, 0),
(7, "Saturn", "Toksyczna", "-140*C", "Gazowy olbrzym", 10.4, 0),
(8, "Tytan", "Toksyczna", "-180*C", "Chmury metanu", 1.4, 0),
(9, "Enceladus", "Brak atmosfery", "Próżnia", "Lodowe gejzery", 0.1, 0),
(10, "Uran", "Toksyczna", "-190*C", "Lodowy olbrzym", 8.7, 0),
(11, "Oberon", "Brak atmosfery", "Próżnia", "Lodowy krajobraz", 0.35, 0),
(12, "Neptun", "Toksyczna", "-220*C", "Burze metanowe", 11.0, 0),
(13, "Tryton", "Brak atmosfery", "Próżnia", "Lodowe równiny", 0.78, 0),
(14, "Io", "Brak atmosfery", "Próżnia", "Wulkaniczny", 1.8, 1),
(15, "Europa", "Da się żyć", "-15*C - 5*C", "Ocean pod lodem", 1.3, 1),
(16, "Calisto", "Brak atmosfery", "Próżnia", "Zlodowaciałe kratery", 1.2, 1),
(17, "Alfa Centauri A-1", "Da się żyć", "15*C - 40*C", "Sawanny i lasy", 9.5, 2),
(18, "Alfa Centauri A-2", "Toksyczna", "-5*C - 24*C", "Góry siarkowe", 10.1, 2),
(19, "Alfa Centauri B-1", "Brak atmosfery", "Próżnia", "Kratery radioaktywne", 0.4, 2),
(20, "Alfa Centauri B-2", "Da się żyć", "-20*C - 0*C", "Lodowe tundry", 7.2, 2)
(21, "Proxima Centauri A", "Toksyczna", "-50*C - 10*C", "Burze jonowe", 6.3, 3),
(22, "Proxima Centauri B", "Da się żyć", "-5*C - 25*C", "Zmienny", 9.8, 3),
(23, "Proxima Centauri C", "Brak atmosfery", "Próżnia", "Skały meteorytowe", 0.7, 3),
(24, "Tau Ceti A", "Toksyczna", "-60*C - -10*C", "Gazy metanowe", 7.4, 4),
(25, "Tau Ceti B", "Da się żyć", "-5*C - 20*C", "Leśny", 9.2, 4),
(26, "Tau Ceti C", "Da się żyć", "0*C - 35*C", "Pustynie i oceany", 9.6, 4),
(27, "Tau Ceti D", "Toksyczna", "-30*C - 5*C", "Chmury siarki", 8.1, 4),
(28, "Tau Ceti E", "Brak atmosfery", "Próżnia", "Kratery skalne", 0.5, 4),
(29, "TRAPPIST-1 A", "Brak atmosfery", "Próżnia", "Martwa skała", 0.6, 5),
(30, "TRAPPIST-1 B", "Toksyczna", "-100*C - -30*C", "Aktywny wulkanizm", 1.7, 5),
(31, "TRAPPIST-1 C", "Da się żyć", "-10*C - 20*C", "Las mglisty", 8.3, 5),
(32, "TRAPPIST-1 D", "Da się żyć", "-15*C - 10*C", "Bagna i lód", 7.9, 5),
(33, "TRAPPIST-1 E", "Da się żyć", "5*C - 35*C", "Dżungla", 10.2, 5),
(34, "TRAPPIST-1 F", "Toksyczna", "-80*C - -20*C", "Pola siarki", 6.8, 5),
(35, "Ross 128-A", "Brak atmosfery", "Próżnia", "Pył i kratery", 0.9, 6),
(36, "Ross 128-B", "Da się żyć", "0*C - 25*C", "Tereny mieszane", 9.4, 6),
(37, "Ross 128-C", "Da się żyć", "10*C - 30*C", "Stepy", 9.7, 6),
(38, "Ross 128-D", "Brak atmosfery", "Próżnia", "Skały i pustkowia", 1.1, 6),
(39, "Barnard-A", "Brak atmosfery", "Próżnia", "Pyłowe równiny", 0.4, 7),
(40, "Barnard-B", "Da się żyć", "-10*C - 15*C", "Tundra z roślinnością", 8.9, 7),
(41, "Barnard-C", "Brak atmosfery", "Próżnia", "Skaliste góry", 0.5, 7),
(42, "EZ-A", "Da się żyć", "15*C - 40*C", "Lasy tropikalne", 10.0, 8),
(43, "EZ-B", "Toksyczna", "-40*C - 0*C", "Mgły amoniaku", 6.5, 8),
(44, "EZ-C", "Brak atmosfery", "Próżnia", "Lodowe pustynie", 0.2, 8),
(45, "EZ-D", "Brak atmosfery", "Próżnia", "Izolowane Wyspy", 0.3, 8),
(46, "Teegarden A", "Toksyczna", "-50*C - -10*C", "Pustkowia gazowe", 7.1, 9),
(47, "Teegarden B", "Da się żyć", "5*C - 25*C", "Zróżnicowany", 9.9, 9),
(48, "Teegarden C", "Da się żyć", "0*C - 30*C", "Lasy i jeziora", 9.3, 9),
(49, "Luyten A", "Lekko toksyczna", "0*C - 20*C", "Wilgotna sawanna", 8.2, 10),
(50, "Luyten B", "Toksyczna", "-20*C - 10*C", "Chmury siarkowe", 7.6, 10),
(51, "Luyten C", "Da się żyć", "10*C - 35*C", "Ziemiopodobna", 10.0, 10),

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `gwiazdy`
--

CREATE TABLE `gwiazdy` (
  `id` int(10) UNSIGNED NOT NULL,
  `nazwa` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `gwiazdy`
--

INSERT INTO `gwiazdy` (`id`, `nazwa`) VALUES
(0, 'Słońce'),
(1, 'Jowisz'),
(2, 'Alfa Centauri'),
(3, 'Proxima Centauri'),
(4, 'Tau Ceti'),
(5, 'TRAPPIST-1'),
(6, 'Ross-128'),
(7, 'Barnard Star'),
(8, 'Ez Aquarii'),
(9, 'Teegarden Star'),
(10, 'Lutyen Star');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `pracownicy`
--
ALTER TABLE `planety`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `stanowiska`
--
ALTER TABLE `gwiazdy`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `planety`
--
ALTER TABLE `planety`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT dla tabeli `gwiazdy`
--
ALTER TABLE `gwiazdy`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
