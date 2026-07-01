const ofertas = [
  { producto: "Ternera Premium", precio: "9,99 €/kg" },
  { producto: "Pollo Fresco", precio: "3,99 €/kg" },
  { producto: "Cordero Halal", precio: "12,99 €/kg" }
];

const lista = document.getElementById("lista-ofertas");

if (lista) {
  lista.innerHTML = "";

  ofertas.forEach((oferta) => {
    lista.innerHTML += `
      <div style="background:#fff;color:#222;padding:20px;margin:15px 0;border-radius:12px;">
        <h3>${oferta.producto}</h3>
        <h2 style="color:#d62828">${oferta.precio}</h2>

        <a class="boton"
        href="https://wa.me/34616401773?text=Hola,%20quiero%20pedir%20${encodeURIComponent(oferta.producto)}">
        Pedir por WhatsApp
        </a>
      </div>
    `;
  });
}
