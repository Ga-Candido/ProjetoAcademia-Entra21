CREATE TABLE `academia`.`funcionario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `idade` INT NOT NULL,
  `endereco` VARCHAR(45) NULL,
  `telefone` VARCHAR(45) NOT NULL,
  `funcao` VARCHAR(45) NOT NULL,
  `turno` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `telefone_UNIQUE` (`telefone` ASC) VISIBLE);
