// Mejoras progresivas: el contenido sigue visible sin JavaScript.
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const text = (selector, value) => { $(selector).textContent = value; };
const press = (selector, active) => $$(selector).forEach(button => {
  button.setAttribute('aria-pressed', String(button === active));
});
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: .04 });
  $$('.concept-card, .diagram, .section-heading').forEach(element => {
    element.classList.add('will-reveal'); observer.observe(element);
  });
}
// Un solo tokenizador preserva el texto y evita insertar HTML del código fuente.
const token = /(\/\/[^\n]*|#[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:const|let|await|async|import|from|return|if|else|new|true|false|try|catch|while)\b|\b\d+(?:\.\d+)?\b)/g;
$$('code[data-language]').forEach(element => {
  const source = element.textContent, fragment = document.createDocumentFragment();
  let cursor = 0;
  for (const match of source.matchAll(token)) {
    fragment.append(document.createTextNode(source.slice(cursor, match.index)));
    const span = document.createElement('span');
    const value = match[0];
    span.className = 'syntax-' + (/^(\/\/|#)/.test(value) ? 'comment' : /^["']/.test(value) ? 'string' : /^\d/.test(value) ? 'number' : 'keyword');
    span.textContent = value; fragment.append(span); cursor = match.index + value.length;
  }
  fragment.append(document.createTextNode(source.slice(cursor))); element.replaceChildren(fragment);
});


const risks = {
  identidad: ['Identidad / atribución', 'JDcoin no dispone de una identificación inequívoca en este informe. MMLTI1 tiene ficha de emisión, pero no una dirección inspeccionada. La diferencia es documental y no prueba seguridad contractual.'],
  control: ['Control / capacidad de cambiar reglas', 'Mint puede ampliar oferta; pause puede detener operaciones; una actualización puede cambiar la implementación. ERC-3643 describe controles posibles, pero no atribuimos roles activos a MMLTI1 sin inspeccionar el despliegue. Para JDcoin las facultades son indeterminadas.'],
  mercado: ['Mercado / capacidad de salida', 'La capitalización no es una reserva disponible para vendedores. Las restricciones documentadas de una emisión pueden limitar negociación. Sin contratos y mercados identificados no se atribuyen liquidez ni vendedores de 24 horas a ninguno de los casos.'],
  derechos: ['Derechos / obligación económica', 'MMLTI1 se presenta como un derecho de crédito frente al emisor. Ese derecho no equivale a propiedad accionaria ni a garantía de pago. La memecoin solicitada no tiene aquí una documentación atribuible. La comparación fair-launch es conceptual, no una propiedad confirmada de JDcoin.']
};
$$('[data-risk]').forEach(button => button.addEventListener('click', () => {
  press('[data-risk]', button);
  const [title, explanation] = risks[button.dataset.risk];
  text('#risk-title', title); text('#risk-text', explanation);
}));