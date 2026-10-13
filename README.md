# Lab 13 — Token Due Diligence

Sesión 15.

## Título y objetivo

Comparar la referencia JDcoin con MMLTI1 mediante identidad, controles contractuales, derechos y mercado, conservando la atribución de cada dato.

## Instrucciones

En este laboratorio trabajamos en Visual Studio Code para analizar la memecoin de referencia JDcoin frente a MMLTI1, emisión de deuda presentada por TOHKN, construyendo un informe web independiente con HTML, CSS y JavaScript. Comenzamos por establecer la identidad de cada activo mediante ticker, blockchain y contrato, evitando asociar a JDcoin datos de monedas homónimas cuando no existe una vinculación inequívoca. Examinamos las declaraciones públicas de la emisión regulada, su documentación DIR y el estándar anunciado, y explicamos cómo contrastarlas con código verificado, implementaciones de proxies, roles y eventos en exploradores blockchain. Organizamos la comparación de capitalización, liquidez, vendedores únicos durante veinticuatro horas, mecanismos de emisión, facultades administrativas, mint, pause y restricciones de transferencia, diferenciando información documental, capacidades de un estándar y comprobaciones del contrato concreto. Conservamos la rúbrica general original y distinguimos la rúbrica de tokens de diez puntos de S15, cuyos criterios requieren consultar ese documento y no se inventan; el gráfico muestra estados documentales sin scores. Implementamos un panel interactivo para interpretar riesgos de identidad, control, mercado y cumplimiento, junto con diagramas de lectura del contrato y una tabla comparativa. Cerramos el trabajo explicando las diferencias entre fair-launch y emisión regulada, sus límites económicos y técnicos, y entregamos la página navegable, sus archivos de estilo e interacción y un README que documenta metodología, resultados y aprendizajes.

## Descripción del trabajo

Presentamos un dashboard de auditoría, una ruta de inspección en exploradores, una comparación financiera y un panel de riesgos. El gráfico muestra estados documentales sin scores. La rúbrica de tokens de diez puntos requiere consultar S15 y no se confunde con los porcentajes de evaluación general. MEMO.md desarrolla la comparación.

## Tecnologías

Exploradores EVM, ERC-20, ERC-3643, lectura de ABI, proxies, roles, documentación DIR y análisis de liquidez. HTML5, CSS3 y JavaScript implementan la presentación.

## Resultados

La fuente oficial describe MMLTI1; no se inspeccionó una dirección contractual de la emisión. JDcoin permanece sin identidad inequívoca. No se atribuyen capitalización, liquidez o vendedores a homónimos. Se explican las facultades administrativas y los límites de cada modelo.

## Aprendizaje

Aprendimos a examinar un token desde su identidad hasta sus derechos y controles, separando los datos atribuibles de las capacidades hipotéticas. Comprendimos que una auditoría rigurosa puede producir incertidumbres explícitas y que esa precisión mejora la interpretación de las cifras, los riesgos y las declaraciones comerciales.

## Visualización

Abrimos la carpeta WEB3-LABS en Visual Studio Code. Con la extensión Live Server instalada, hacemos clic derecho en este index.html y elegimos **Open with Live Server**. La navegación principal está en ../index.html. Usamos localhost para Web Crypto; no se necesitan cuentas ni credenciales. Los controles se operan con Tab, Enter y Espacio.

## Rúbrica original

- Kickoff memecoin documentado: 20%.
- Emisión TOHKN: contrato, funcionalidad on-chain y DIR: 30%.
- Scores de rúbrica de 10 puntos aplicados a ambos tokens: 25%.
- Memo comparativo de aproximadamente dos páginas: 20%.
- Notas de presentación de compañeros: 5%.

Total: 100%. Los alcances y límites se describen en la tabla HTML; no se asignan calificaciones por ejecuciones no realizadas. La rúbrica de tokens de 10 puntos requiere consultar S15, cuyos criterios no están disponibles en esta entrega.

## Alcance académico

Las simulaciones se identifican en pantalla; no representan conexiones, publicaciones ni transacciones externas. No se proporcionaron penalizaciones adicionales y no se inventan deducciones. JDcoin sin datos de homónimos; sin scores fabricados de S15 ni notas atribuidas a compañeros.

## Fuentes primarias

- [Ficha oficial de MMLTI1 y enlaces a DIR](https://www.tohkn.com/es/issuances/mmlti1)
- [ERC-3643 · estándar para tokens regulados](https://eips.ethereum.org/EIPS/eip-3643)
- [ERC-20 · interfaz de tokens fungibles](https://eips.ethereum.org/EIPS/eip-20)
- [Etherscan · verificación de contratos](https://docs.etherscan.io/contract-verification/introduction)
