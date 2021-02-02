-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 02, 2021 at 08:12 PM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iwp`
--

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `moviename` varchar(52) CHARACTER SET utf8 NOT NULL,
  `genre` varchar(12) CHARACTER SET utf8 NOT NULL,
  `review` varchar(1500) CHARACTER SET utf8 NOT NULL,
  `author` int(11) NOT NULL,
  `movie_img` varchar(32) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `moviename`, `genre`, `review`, `author`, `movie_img`) VALUES
(24, 'Donnie Darko', 'SCI-FI', 'I have been obsessed with Donnie Darko ever since I saw it for the first time. I must admit, this is not a film for everybody. There is a lot to take in before, during and after watching this movie. The different plot points, details and events can confuse most viewers, and I understand that. But damn, this is one of the best movies of all time.\r\n\r\nAt first sight, Donnie Darko\'s story is about a mentally-unstable and angsty teenager who receives a visit from a creepy rabbit man, then strange things start happening in the following month until Halloween arrives. This movie is equally parts a character study about Donnie and his inner turmoils and a philosophical mind-bender that leaves you more interested in the mythology of the movie.\r\n\r\nI was really intrigued by the themes of time travel, parallel universes, and superpowers. Although we did not explicitly see this in the film, it left a lot to my imagination and that is something that I always appreciate in a movie. Richard Kelly is a genius for creating a work of art that deviates from the Hollywood formula and creates something unique.\r\n\r\nAnother thing I want to praise about this movie is its atmosphere and tone. The beautiful settings in the town of Middlesex and the casual high-school interactions and situations made me nostalgic about a place I\'ve never visited and situations I have never been in. This includes the Halloween scenes and the dialog between the characters. I rewatch this movie every time I can, and I recom', 5, 'dd.jpg'),
(25, 'CRAZY RICH ASIANS', 'ROMEDY', '\0C\0r\0a\0z\0y\0 \0R\0i\0c\0h\0 \0A\0s\0i\0a\0n\0s\0 \0i\0s\0 \0t\0h\0e\0 \0s\0t\0o\0r\0y\0 \0o\0f\0 \0p\0o\0o\0r\0 \0g\0i\0r\0l\0 \0a\0n\0d\0 \0a\0 \0v\0e\0r\0y\0 \0r\0i\0c\0h\0 \0b\0o\0y\0.\0 \0I\0t\0 \0i\0s\0 \0t\0h\0e\0 \0s\0t\0o\0r\0y\0 \0o\0f\0 \0e\0v\0e\0r\0y\0 \0J\0a\0n\0e\0 \0A\0u\0s\0t\0e\0n\0 \0n\0o\0v\0e\0l\0,\0 \0i\0t\0 \0i\0s\0 \0t\0h\0e\0 \0s\0t\0o\0r\0y\0 \0o\0f\0 \0(\0n\0e\0a\0r\0l\0y\0)\0 \0e\0v\0e\0r\0y\0 \0M\0i\0l\0l\0s\0 \0a\0n\0d\0 \0B\0o\0o\0n\0s\0 \0n\0o\0v\0e\0l\0s\0,\0 \0o\0f\0 \0t\0h\0e\0 \0b\0e\0g\0g\0a\0r\0 \0m\0a\0i\0d\0 \0a\0n\0d\0 \0k\0i\0n\0g\0 \0C\0o\0p\0h\0e\0t\0u\0a\0,\0 \0a\0n\0d\0 \0y\0o\0u\0r\0 \0m\0o\0s\0t\0 \0r\0e\0c\0u\0r\0r\0i\0n\0g\0 \0d\0r\0e\0a\0m\0.\0 \0\r\0\n\0\r\0\n\0P\0r\0i\0d\0e\0 \0a\0n\0d\0 \0P\0r\0e\0j\0u\0d\0i\0c\0e\0 \0h\0a\0d\0 \0d\0e\0p\0t\0h\0 \0a\0n\0d\0 \0c\0h\0a\0r\0a\0c\0t\0e\0r\0 \0a\0n\0d\0 \0d\0e\0l\0e\0c\0t\0a\0b\0l\0e\0 \0p\0l\0o\0t\0 \0t\0w\0i\0s\0t\0s\0.\0 \0C\0r\0a\0z\0y\0 \0R\0i\0c\0h\0 \0A\0s\0i\0a\0n\0s\0 \0h\0a\0s\0 \0b\0i\0l\0l\0i\0o\0n\0a\0i\0r\0e\0s\0,\0 \0a\0 \0l\0o\0t\0 \0o\0f\0 \0C\0h\0i\0n\0e\0s\0e\0 \0c\0h\0a\0r\0a\0c\0t\0e\0r\0s\0 \0a\0n\0d\0 \0a\0 \0f\0e\0w\0 \0z\0i\0n\0g\0y\0 \0z\0a\0n\0g\0y\0 \0l\0i\0n\0e\0s\0.\0 \0T\0h\0e\0r\0e\0 \0i\0s\0 \0n\0o\0 \0d\0e\0p\0t\0h\0 \0t\0o\0 \0t\0h\0e\0 \0s\0t\0o\0r\0y\0;\0 \0y\0o\0u\0 \0c\0o\0u\0l\0d\0 \0p\0r\0e\0d\0i\0c\0t\0,\0 \0i\0f\0 \0y\0o\0u\0 \0w\0a\0n\0t\0e\0d\0 \0t\0o\0 \0t\0a\0k\0e\0 \0t\0h\0e\0 \0t\0r\0o\0u\0b\0l\0e\0 \0t\0o\0 \0d\0o\0 \0s\0o\0,\0 \0e\0v\0e\0r\0y\0 \0t\0w\0i\0s\0t\0 \0a\0n\0d\0 \0e\0v\0e\0r\0y\0 \0t\0u\0r\0n\0 \0o\0f\0 \0t\0h\0e\0 \0p\0l\0o\0t\0,\0 \0b\0u\0t\0 \0w\0h\0y\0 \0b\0o\0t\0h\0e\0r\0?\0 \0T\0h\0e\0 \0t\0w\0i\0s\0t\0s\0 \0a\0n\0d\0 \0t\0u\0r\0n\0s\0 \0a\0r\0e\0 \0m\0e\0r\0e\0l\0y\0 \0s\0l\0i\0g\0h\0t\0 \0b\0u\0m\0p\0s\0 \0o\0n\0 \0a\0 \0s\0m\0o\0o\0t\0h\0 \0r\0o\0a\0d\0 \0f\0r\0o\0m\0 \0l\0o\0v\0e\0b\0i\0r\0d\0s\0 \0t\0o\0 \0e\0n\0g\0a\0g\0e\0d\0 \0c\0o\0u\0p\0l\0e\0,\0 \0a\0n\0d\0 \0t\0h\0e\0 \0i\0n\0t\0r\0o\0d\0u\0c\0t\0i\0o\0n\0 \0o\0f\0 \0t\0h\0e\0 \0m\0o\0t\0h\0e\0r\0 \0a\0s\0 \0t\0h\0e\0 \0p\0u\0t\0a\0t\0i\0v\0e\0 \0f\0l\0y\0 \0i\0n\0 \0h\0o\0n\0e\0y\0p\0o\0t\0 \0i\0s\0 \0j\0u\0s\0t\0 \0a\0 \0d\0i\0v\0e\0r\0s\0i\0o\0n\0,\0 \0p\0e\0r\0s\0u\0m\0a\0b\0l\0y', 5, 'cra.jpg'),
(26, 'Shutter Island', 'THRILLER', 'Doesn\'t matter how many times you would see this movie you will find yourself hanging at the edges! \r\nIn this twisted psychological neo-noir drama directed by Martin Scorsese, Leonardo DiCaprio plays a US Marshal Teddy Daniels set off on an investigation at an island which is currently a mental asylum. Mark Ruffalo plays Chuck investigation partner of Teddy on the case of a mental patient disappearance. After reaching to the island it seemed that everyone including doctors,staff and other patients are playing a mind game with the broken Marshal who also has a twisted past and he actually volunteered to this case in hope to catch a psycho named Andrew who allegedly killed his wife but things takes a nasty turn for the teddy when he reaches to the bottom of the truth.', 5, 'si.jpg'),
(27, 'Interstelalr', 'SCI-FI', 'Personally, I think Interstellar truly delivers as Christopher Nolan\'s best masterpiece. Maybe the general population would put this blockbuster seventh place in the category of the 10 best space movies. I for one would rank it third behind First Man starring Ryan Gosling and Alfonso Cuaron\'s Gravity respectively. \r\n\r\nI like Interstellar, because it focuses mainly on personal loss and the love one feels for their family. The beginning is spectacular! I love how it opens with a farm surrounded by crops of corn, a humble beginning. Its much better than starting the movie with all that intense, apocalyptic action we see at the beginning and end of superhero movies. \r\n\r\nAlso in this film, I like Matthew McConaughey\'s character, Cooper. I like his character, because I like the guys who are just simple, casual, country dwelling ranchers who take their kids out to the ball games or hang with their best friends at the bars in town. Cooper is also my favorite character, because he contemplates the stars the way I like to imagine another universe beyond the horizon. I think its cool judging the fact that he probably was once a test pilot, something I always wanted to do since I was 15-years-old. Matthew is so far the best actor to perform in an astronaut movie since the late Sam Shepard in my opinion.', 6, 'int.jpg'),
(28, 'Gravity', 'SCI-FI', 'Watched it last night. Hands down a great movie! The music and editing successfully pull you into the movie. I take a star because it has a lot of swearing.\r\n\r\nClooney\'s performance was praiseworthy. I\'m seeing a lot of criticism for Bullock and her character because Dr. Stone is apparently supposed to be an experienced astronaut (trained for 6 months by NASA); however, she only did the training to get into space and get her job done. She probably took the class to get the A. She had no way of knowing she would encounter a catastrophe. She was probably reassured that everything would go fine, and nothing bad would happen. Well, she didn\'t prepare for disaster, and that\'s why she couldn\'t seem to get ahold of herself throughout the entire movie.', 6, 'gr.jpg'),
(29, 'Inception', 'THRILLER', 'Christopher Nolan continued to conquer the decade with consistent hits starting the decade with one of his best films (2nd best in my Nolan list). The concept of dream-sharing was extremely fresh and was brilliantly executed. The movie was extremely fast-paced, action-packed, demanded extreme attention and eventually rewards it. This movie is one of the most rewatchable flicks ever made and has aged phenomenally. Hans Zimmer absolutely deserved an oscar for this because the music complimented the film so well. He composed gems like \'528491\', \'One simple idea\' and \'Mombassa\'. My personal favorite soundtrack is \'Time\' which also happens to be a part of my everyday playlist. Leonardo DiCaprio\'s acting, Nolan\'s genius idea, and execution, Zimmer\'s breathtaking soundtracks, and outstanding special effects have made Inception not only the best movie of the decade but also one of my all-time favorite Hollywood movies. Nolan has been proving consistently that he\'s a genius and just like 2010\'s Inception at the very beginning of the decade, I expect Tenet, which comes out in mid-2020 to be my favorite pick for this decade, only time will tell.', 6, 'in.jpg'),
(31, 'star wars', 'SCI-FI', 'i enjoyed star wars alot', 8, 'darth-vader.jpg'),
(33, 'adadad', 'SCI-FI', 'adadad', 5, '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `email` varchar(52) NOT NULL,
  `password` varchar(21) NOT NULL,
  `first_name` varchar(32) NOT NULL,
  `last_name` varchar(32) NOT NULL,
  `country` varchar(10) NOT NULL,
  `bio` varchar(144) NOT NULL,
  `pro_pic` varchar(111) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `first_name`, `last_name`, `country`, `bio`, `pro_pic`) VALUES
(5, 'criticgod', 'knarvekar31@gmail.com', '12345', 'Kshitij', 'Narvekar', 'china', 'DONT  @ ME :) ', 'images/Screenshot (228).png'),
(6, 'mahesh_sabnis', 'mahesh@example.com', '12345', 'Mahesh', 'Sabnis', 'india', 'I Love watching sci-fi movies', 'images/2017-09-21-product-3.jpg'),
(8, 'spellcaster88', 'knarvekar99@gmail.com', '12345', 'Kshitij', 'Narvekar', 'australia', 'i really love watchng movies', 'images/mypic.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_AUTHOR` (`author`) USING BTREE;

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `FK_AUTHOR` FOREIGN KEY (`author`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
