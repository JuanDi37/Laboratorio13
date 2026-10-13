# Memo comparativo — JDcoin frente a MMLTI1

Texto de extensión aproximada a dos páginas, sujeto a tipografía y formato de impresión.

## Alcance y resultado

Analizamos JDcoin, referencia solicitada como memecoin, frente a la emisión MMLTI1 presentada por TOHKN. El resultado exige conservar una diferencia fundamental de identidad: la fuente oficial de MMLTI1 permite identificar una oferta documental, mientras que el nombre JDcoin no permite vincular inequívocamente el activo solicitado con red y contrato. Por ello no atribuimos a JDcoin direcciones ni métricas de homónimos. La investigación no concluye fraude, ausencia de mercado ni inexistencia del activo; concluye falta de una atribución defendible en esta entrega.

Una memecoin y un token de deuda pueden utilizar registros blockchain, pero la relación económica difiere. En el primer modelo, la atención, la distribución inicial y la negociación pueden desempeñar un papel decisivo en la demanda. En el segundo, el análisis parte de derechos de cobro y obligaciones documentadas frente a un emisor. El token registra operaciones, pero la capacidad de pago no nace automáticamente del código. Esta distinción orienta qué preguntas deben responder las fuentes y cuáles requieren información adicional.

## Identidad y documentación

El procedimiento comienza por buscar una vinculación desde la fuente oficial hacia red y dirección. En EVM la pareja red-dirección identifica el contrato; el nombre y el símbolo son atributos modificables o repetibles y no constituyen identidad suficiente. En otros ecosistemas hay que examinar identificadores y facultades del modelo correspondiente. Copiar una dirección que aparece en un agregador sin esa vinculación podría cambiar silenciosamente el objeto de la auditoría.

Para MMLTI1 consultamos la [ficha oficial de TOHKN](https://www.tohkn.com/es/issuances/mmlti1), que presenta una emisión de deuda de MultiMoney y enlaza documentación DIR. La fuente declara Polygon y ERC-3643. Conservamos la atribución al emisor: no inspeccionamos una dirección contractual confirmada ni realizamos lectura integral de anexos o certificación regulatoria independiente. La disponibilidad de documentación mejora trazabilidad, pero no elimina riesgo crediticio ni acredita correspondencia completa del despliegue.

## Contrato y administración

La metodología contractual explica cómo comprobar código verificado, bytecode, implementación de proxies y estado. Una verificación de compilación no significa que un explorador certifique legitimidad del negocio ni ausencia de vulnerabilidades. Si existe capacidad de actualizar el contrato, hay que conocer autoridad, procedimiento y alcance. Un administrador de proxy puede cambiar comportamiento aunque una interfaz de token parezca sencilla.

Mint, pause y restricciones de transferencia son facultades que deben revisarse con la ABI y el código concretos. Mint puede aumentar oferta; pause puede detener ciertas operaciones; un módulo de cumplimiento puede condicionar quién transfiere a quién. El estándar ERC-3643 describe un marco para tokens regulados, pero no demuestra qué roles están asignados o qué reglas están activas en MMLTI1. No atribuimos estas funciones a JDcoin sin resolver su contrato. El informe muestra un esquema de lecturas y su interpretación, no salidas inventadas.

## Mercado y salida

La capitalización multiplica precio de referencia y oferta circulante. No equivale al dinero disponible para absorber ventas. FDV utiliza otra medida de oferta y tampoco garantiza profundidad. En un AMM examinamos reservas, impacto de precio y propiedad de la liquidez. En mercados con órdenes examinamos tamaño, dispersión y ejecución. El nominal autorizado de una emisión describe tamaño contractual y no debe presentarse como capitalización de mercado.

Contar vendedores en veinticuatro horas requiere definir dirección única, ventana y clasificación de operaciones. Una dirección no representa necesariamente a una persona y una transferencia no representa necesariamente una venta. Routers y múltiples wallets complican la interpretación. Sin identidad de JDcoin no calculamos esa métrica; sin actividad secundaria verificada para MMLTI1 no asignamos cifras. La liquidez debe analizarse junto con restricciones de elegibilidad y comercialización, pues una posición puede tener derechos de cobro y aun carecer de salida inmediata.

## Fair-launch y regulación

Fair-launch describe una aspiración de acceso inicial sin asignaciones privilegiadas; demostrarlo exige revisar distribución, bots, reservas y tiempos. Un lanzamiento abierto puede terminar concentrado. Renunciar ownership no elimina controles auxiliares, liquidez administrada ni riesgos de actualización. La regulación incorpora otra fuente de confianza y obligaciones, pero no reemplaza la evaluación de contrato, operación o deudor. La comparación útil reconoce qué controles son legítimos y qué dependencia introducen.

La documentación legal delimita derechos; el contrato ejecuta reglas; el operador gestiona procesos; el mercado permite o limita salida. Cuando esas capas divergen hay que explicar la divergencia, no escoger la declaración más favorable. Una restricción solo en la interfaz genera una dependencia diferente de una regla efectivamente impuesta por el token. Un derecho contractual no garantiza por sí solo recepción puntual del pago.

## Evaluación y aprendizaje

La evaluación general del laboratorio conserva exactamente 20%, 30%, 25%, 20% y 5%. La rúbrica de tokens sobre diez puntos pertenece a S15 y requiere consultar ese documento, cuyos criterios no se proporcionaron aquí. No inventamos scores para ninguno de los activos. Tampoco fabricamos notas de compañeros porque no se suministraron presentaciones. El panel representa estados de documentación y riesgos sin convertirlos en una calificación financiera.

Aprendimos que la precisión de identidad precede a la precisión numérica. El informe permite comparar modelos y entender límites sin atribuir transacciones o auditorías no realizadas. La principal conclusión es que una due diligence rigurosa reúne fuentes concordantes, implementación identificada, información económica y obligaciones documentales; ninguna capa sustituye a las demás.
