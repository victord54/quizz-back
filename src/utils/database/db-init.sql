DROP DATABASE IF EXISTS `quizz`;

CREATE DATABASE `quizz`;

USE `quizz`;

CREATE TABLE `question` (
    `qst_idtqst` BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Question ID',
    `qst_libqst` VARCHAR(255) NOT NULL COMMENT 'Question label',
    `qst_opt` TEXT NOT NULL COMMENT 'Question options separated by a |',
    `qst_ans` VARCHAR(255) NOT NULL COMMENT 'Question answer'
) ENGINE = InnoDB DEFAULT CHARSET = utf8 COMMENT = 'Questions table';

INSERT INTO
    `quizz`.`question` (
        `qst_libqst`,
        `qst_opt`,
        `qst_ans`
    )
VALUES (
        "Quelle est la capitale de la France ?",
        "Paris | Madrid | Berlin | Londres",
        "Paris"
    ),
    (
        "Qui a écrit 'Les Misérables' ?",
        "Victor Hugo | Molière | Émile Zola | Albert Camus",
        "Victor Hugo"
    ),
    (
        "Combien y a-t-il de continents sur Terre ?",
        "4 | 5 | 6 | 7",
        "7"
    ),
    (
        "Quel est le plus grand océan du monde ?",
        "Océan Pacifique | Océan Atlantique | Océan Indien | Océan Arctique",
        "Océan Pacifique"
    ),
    (
        "En quelle année a eu lieu la Révolution française ?",
        "1789 | 1798 | 1815 | 1848",
        "1789"
    ),
    (
        "Quel est le symbole chimique de l'eau ?",
        "H2O | O2 | CO2 | N2",
        "H2O"
    ),
    (
        "Quel est le plus petit nombre premier ?",
        "1 | 2 | 3 | 5",
        "2"
    ),
    (
        "Quelle est la capitale de l'Italie ?",
        "Rome | Milan | Venise | Florence",
        "Rome"
    ),
    (
        "Quel est le peintre du tableau 'La Joconde' ?",
        "Leonard de Vinci | Claude Monet | Pablo Picasso | Vincent van Gogh",
        "Leonard de Vinci"
    ),
    (
        "Quelle est la planète la plus proche du soleil ?",
        "Mercure | Vénus | Mars | Terre",
        "Mercure"
    ),
    (
        "Quel est le plus grand désert du monde ?",
        "Désert du Sahara | Désert de Gobi | Désert de Kalahari | Désert d'Atacama",
        "Désert du Sahara"
    ),
    (
        "Quel est le plus grand mammifère terrestre ?",
        "Éléphant | Girafe | Rhinocéros | Hippopotame",
        "Éléphant"
    ),
    (
        "Quel est le plus grand pays du monde ?",
        "Russie | Canada | Chine | États-Unis",
        "Russie"
    ),
    (
        "Quel est le plus grand fleuve du monde ?",
        "Nil | Amazone | Yangzi Jiang | Mississippi",
        "Nil"
    ),
    (
        "Quel est le plus long fleuve de France ?",
        "Loire | Rhône | Seine | Garonne",
        "Loire"
    ),
    (
        "Quelle est la monnaie utilisée en Allemagne ?",
        "Euro | Franc | Dollar | Livre sterling",
        "Euro"
    ),
    (
        "Combien d'os possède un corps humain adulte ?",
        "206 | 208 | 210 | 212",
        "206"
    ),
    (
        "Quel est l’élément chimique représenté par le symbole Au ?",
        "Or | Argent | Aluminium | Uranium",
        "Or"
    ),
    (
        "Quel pays est connu comme le pays du soleil levant ?",
        "Japon | Chine | Corée du Sud | Thaïlande",
        "Japon"
    ),
    (
        "Qui est l'auteur de 'Le Petit Prince' ?",
        "Antoine de Saint-Exupéry | Marcel Proust | Jules Verne | Jean-Paul Sartre",
        "Antoine de Saint-Exupéry"
    ),
    (
        "Quel est le nombre de joueurs dans une équipe de football ?",
        "9 | 10 | 11 | 12",
        "11"
    ),
    (
        "Quelle planète est surnommée la planète rouge ?",
        "Mars | Jupiter | Saturne | Mercure",
        "Mars"
    ),
    (
        "Quel est le premier président des États-Unis ?",
        "George Washington | Thomas Jefferson | Abraham Lincoln | John Adams",
        "George Washington"
    ),
    (
        "Combien de côtés a un hexagone ?",
        "6 | 7 | 8 | 9",
        "6"
    ),
    (
        "En quelle année a été signé le Traité de Versailles ?",
        "1919 | 1914 | 1920 | 1939",
        "1919"
    ),
    (
        "Quelle est la langue officielle du Brésil ?",
        "Portugais | Espagnol | Anglais | Français",
        "Portugais"
    ),
    (
        "Qui a inventé l'ampoule électrique ?",
        "Thomas Edison | Nikola Tesla | Alexander Graham Bell | Benjamin Franklin",
        "Thomas Edison"
    ),
    (
        "Quel est l’animal terrestre le plus rapide ?",
        "Guépard | Lion | Gazelle | Léopard",
        "Guépard"
    ),
    (
        "Quelle est la capitale de l'Australie ?",
        "Canberra | Sydney | Melbourne | Brisbane",
        "Canberra"
    ),
    (
        "Quel est le plus grand désert du monde ?",
        "Sahara | Antarctique | Gobi | Kalahari",
        "Antarctique"
    ),
    (
        "Quel est le plus petit pays du monde ?",
        "Vatican | Monaco | Saint-Marin | Andorre",
        "Vatican"
    ),
    (
        "Qui a peint 'La Nuit étoilée' ?",
        "Vincent van Gogh | Pablo Picasso | Claude Monet | Salvador Dalí",
        "Vincent van Gogh"
    );