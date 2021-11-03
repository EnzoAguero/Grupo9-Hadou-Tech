UPDATE `hadou_tech`.`Products` SET `description` = 'Adaptado a tus movimientos. Su diseño eficaz hace de este mouse un elemento cómodo, con una gran experiencia de uso para aquellas personas que buscan seguridad en cada click. ' WHERE id = 1 OR id = 2 OR id = 6 OR id = 7;


UPDATE `hadou_tech`.`Products` SET `description` = 'Una combinación resistente, cómoda, elegante y sencilla a la vez. Con un teclado plano equipado con teclas silenciosas en una distribución estándar, teclas F de tamaño normal y teclado numérico.' WHERE id = 3 OR id = 5;


UPDATE `hadou_tech`.`Products` SET `description` = 'Experimenta las llamadas a Internet claras con una simple conexión USB plug-and-play y un micrófono con cancelación de ruido. Los controles en línea le permiten controlar el volumen o silenciar sin interrumpir las llamadas.' WHERE id = 4 OR id = 8;


/*Cambiando el nombre*/
UPDATE `hadou_tech`.`Products` SET `name` = 'Auriculares' WHERE (`id` = '8');
