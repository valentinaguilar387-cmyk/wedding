// Catálogo de pases en GitHub + lectura directa de data/invitados.json del repositorio
const CATALOGO_PASES = {"VL-001":{"id":"INV-001","codigo":"VL-001","nombre":"Emilia Contreras","cupos":1},"INV-001":{"id":"INV-001","codigo":"VL-001","nombre":"Emilia Contreras","cupos":1},"VL-002":{"id":"INV-002","codigo":"VL-002","nombre":"Rigoberto Aguilar","cupos":1},"INV-002":{"id":"INV-002","codigo":"VL-002","nombre":"Rigoberto Aguilar","cupos":1},"VL-003":{"id":"INV-003","codigo":"VL-003","nombre":"Carlos Aguilar","cupos":1},"INV-003":{"id":"INV-003","codigo":"VL-003","nombre":"Carlos Aguilar","cupos":1},"VL-004":{"id":"INV-004","codigo":"VL-004","nombre":"Esperanza Contreras","cupos":2},"INV-004":{"id":"INV-004","codigo":"VL-004","nombre":"Esperanza Contreras","cupos":2},"VL-005":{"id":"INV-005","codigo":"VL-005","nombre":"Manuel Campos","cupos":2},"INV-005":{"id":"INV-005","codigo":"VL-005","nombre":"Manuel Campos","cupos":2},"VL-006":{"id":"INV-006","codigo":"VL-006","nombre":"Daniel Quintanilla","cupos":2},"INV-006":{"id":"INV-006","codigo":"VL-006","nombre":"Daniel Quintanilla","cupos":2},"VL-007":{"id":"INV-007","codigo":"VL-007","nombre":"Eduardo Tobar","cupos":2},"INV-007":{"id":"INV-007","codigo":"VL-007","nombre":"Eduardo Tobar","cupos":2},"VL-008":{"id":"INV-008","codigo":"VL-008","nombre":"Doris Cea","cupos":2},"INV-008":{"id":"INV-008","codigo":"VL-008","nombre":"Doris Cea","cupos":2},"VL-009":{"id":"INV-009","codigo":"VL-009","nombre":"Luis Valencia","cupos":1},"INV-009":{"id":"INV-009","codigo":"VL-009","nombre":"Luis Valencia","cupos":1},"VL-010":{"id":"INV-010","codigo":"VL-010","nombre":"Guillermo Marroquin","cupos":2},"INV-010":{"id":"INV-010","codigo":"VL-010","nombre":"Guillermo Marroquin","cupos":2},"VL-011":{"id":"INV-011","codigo":"VL-011","nombre":"Aaron Marroquin","cupos":2},"INV-011":{"id":"INV-011","codigo":"VL-011","nombre":"Aaron Marroquin","cupos":2},"VL-012":{"id":"INV-012","codigo":"VL-012","nombre":"Kevin Telule","cupos":2},"INV-012":{"id":"INV-012","codigo":"VL-012","nombre":"Kevin Telule","cupos":2},"VL-013":{"id":"INV-013","codigo":"VL-013","nombre":"Oscar Melgar","cupos":2},"INV-013":{"id":"INV-013","codigo":"VL-013","nombre":"Oscar Melgar","cupos":2},"VL-014":{"id":"INV-014","codigo":"VL-014","nombre":"Cristian Argueta","cupos":2},"INV-014":{"id":"INV-014","codigo":"VL-014","nombre":"Cristian Argueta","cupos":2},"VL-015":{"id":"INV-015","codigo":"VL-015","nombre":"Claudia Alfaro","cupos":2},"INV-015":{"id":"INV-015","codigo":"VL-015","nombre":"Claudia Alfaro","cupos":2},"VL-016":{"id":"INV-016","codigo":"VL-016","nombre":"Jenifer Avalos","cupos":2},"INV-016":{"id":"INV-016","codigo":"VL-016","nombre":"Jenifer Avalos","cupos":2},"VL-017":{"id":"INV-017","codigo":"VL-017","nombre":"Danilo Maldonado","cupos":2},"INV-017":{"id":"INV-017","codigo":"VL-017","nombre":"Danilo Maldonado","cupos":2},"VL-018":{"id":"INV-018","codigo":"VL-018","nombre":"Edilberto Navarrete","cupos":2},"INV-018":{"id":"INV-018","codigo":"VL-018","nombre":"Edilberto Navarrete","cupos":2},"VL-019":{"id":"INV-019","codigo":"VL-019","nombre":"Walter Antonio","cupos":2},"INV-019":{"id":"INV-019","codigo":"VL-019","nombre":"Walter Antonio","cupos":2},"VL-020":{"id":"INV-020","codigo":"VL-020","nombre":"Dennis Wilber","cupos":2},"INV-020":{"id":"INV-020","codigo":"VL-020","nombre":"Dennis Wilber","cupos":2},"VL-021":{"id":"INV-021","codigo":"VL-021","nombre":"Henry Gutierrez","cupos":1},"INV-021":{"id":"INV-021","codigo":"VL-021","nombre":"Henry Gutierrez","cupos":1},"VL-022":{"id":"INV-022","codigo":"VL-022","nombre":"Jaime Figueroa","cupos":2},"INV-022":{"id":"INV-022","codigo":"VL-022","nombre":"Jaime Figueroa","cupos":2},"VL-023":{"id":"INV-023","codigo":"VL-023","nombre":"Diego Muñoz","cupos":1},"INV-023":{"id":"INV-023","codigo":"VL-023","nombre":"Diego Muñoz","cupos":1},"VL-024":{"id":"INV-024","codigo":"VL-024","nombre":"Luis Rodriguez","cupos":1},"INV-024":{"id":"INV-024","codigo":"VL-024","nombre":"Luis Rodriguez","cupos":1},"VL-025":{"id":"INV-025","codigo":"VL-025","nombre":"Anderson Rodriguez","cupos":2},"INV-025":{"id":"INV-025","codigo":"VL-025","nombre":"Anderson Rodriguez","cupos":2},"VL-026":{"id":"INV-026","codigo":"VL-026","nombre":"Antonia Rivera","cupos":1},"INV-026":{"id":"INV-026","codigo":"VL-026","nombre":"Antonia Rivera","cupos":1},"VL-027":{"id":"INV-027","codigo":"VL-027","nombre":"Armando Marin","cupos":2},"INV-027":{"id":"INV-027","codigo":"VL-027","nombre":"Armando Marin","cupos":2},"VL-028":{"id":"INV-028","codigo":"VL-028","nombre":"Alcides Franco","cupos":3},"INV-028":{"id":"INV-028","codigo":"VL-028","nombre":"Alcides Franco","cupos":3},"VL-029":{"id":"INV-029","codigo":"VL-029","nombre":"Ester Marin","cupos":3},"INV-029":{"id":"INV-029","codigo":"VL-029","nombre":"Ester Marin","cupos":3},"VL-030":{"id":"INV-030","codigo":"VL-030","nombre":"Elmer Alvarado","cupos":2},"INV-030":{"id":"INV-030","codigo":"VL-030","nombre":"Elmer Alvarado","cupos":2},"VL-031":{"id":"INV-031","codigo":"VL-031","nombre":"Brandon Moran","cupos":1},"INV-031":{"id":"INV-031","codigo":"VL-031","nombre":"Brandon Moran","cupos":1},"VL-032":{"id":"INV-032","codigo":"VL-032","nombre":"Victor Mejia","cupos":3},"INV-032":{"id":"INV-032","codigo":"VL-032","nombre":"Victor Mejia","cupos":3},"VL-033":{"id":"INV-033","codigo":"VL-033","nombre":"Walter Anaya","cupos":1},"INV-033":{"id":"INV-033","codigo":"VL-033","nombre":"Walter Anaya","cupos":1},"VL-034":{"id":"INV-034","codigo":"VL-034","nombre":"Vanessa Garcia","cupos":2},"INV-034":{"id":"INV-034","codigo":"VL-034","nombre":"Vanessa Garcia","cupos":2},"VL-035":{"id":"INV-035","codigo":"VL-035","nombre":"Adriana Garay","cupos":4},"INV-035":{"id":"INV-035","codigo":"VL-035","nombre":"Adriana Garay","cupos":4},"VL-036":{"id":"INV-036","codigo":"VL-036","nombre":"Rony Santos","cupos":1},"INV-036":{"id":"INV-036","codigo":"VL-036","nombre":"Rony Santos","cupos":1},"VL-037":{"id":"INV-037","codigo":"VL-037","nombre":"Abigail Aguilar","cupos":2},"INV-037":{"id":"INV-037","codigo":"VL-037","nombre":"Abigail Aguilar","cupos":2},"VL-038":{"id":"INV-038","codigo":"VL-038","nombre":"Isaura Sanchez","cupos":2},"INV-038":{"id":"INV-038","codigo":"VL-038","nombre":"Isaura Sanchez","cupos":2},"VL-039":{"id":"INV-039","codigo":"VL-039","nombre":"Brenda Ponce","cupos":1},"INV-039":{"id":"INV-039","codigo":"VL-039","nombre":"Brenda Ponce","cupos":1},"VL-040":{"id":"INV-040","codigo":"VL-040","nombre":"Wendy Gonzalez","cupos":1},"INV-040":{"id":"INV-040","codigo":"VL-040","nombre":"Wendy Gonzalez","cupos":1},"VL-041":{"id":"INV-041","codigo":"VL-041","nombre":"Arely Menjivar","cupos":1},"INV-041":{"id":"INV-041","codigo":"VL-041","nombre":"Arely Menjivar","cupos":1},"VL-042":{"id":"INV-042","codigo":"VL-042","nombre":"Ariana Escobar","cupos":2},"INV-042":{"id":"INV-042","codigo":"VL-042","nombre":"Ariana Escobar","cupos":2},"VL-043":{"id":"INV-043","codigo":"VL-043","nombre":"Jose Martinez","cupos":1},"INV-043":{"id":"INV-043","codigo":"VL-043","nombre":"Jose Martinez","cupos":1},"VL-044":{"id":"INV-044","codigo":"VL-044","nombre":"Luis Rodriguez","cupos":1},"INV-044":{"id":"INV-044","codigo":"VL-044","nombre":"Luis Rodriguez","cupos":1},"VL-045":{"id":"INV-045","codigo":"VL-045","nombre":"David Merino","cupos":2},"INV-045":{"id":"INV-045","codigo":"VL-045","nombre":"David Merino","cupos":2},"VL-046":{"id":"INV-046","codigo":"VL-046","nombre":"Edwin Barrera","cupos":2},"INV-046":{"id":"INV-046","codigo":"VL-046","nombre":"Edwin Barrera","cupos":2},"VL-047":{"id":"INV-047","codigo":"VL-047","nombre":"Brayan Siguenza","cupos":1},"INV-047":{"id":"INV-047","codigo":"VL-047","nombre":"Brayan Siguenza","cupos":1},"VL-048":{"id":"INV-048","codigo":"VL-048","nombre":"Josefina Villatoro","cupos":2},"INV-048":{"id":"INV-048","codigo":"VL-048","nombre":"Josefina Villatoro","cupos":2},"VL-049":{"id":"INV-049","codigo":"VL-049","nombre":"Gerardo Alvarado","cupos":2},"INV-049":{"id":"INV-049","codigo":"VL-049","nombre":"Gerardo Alvarado","cupos":2},"VL-050":{"id":"INV-050","codigo":"VL-050","nombre":"Ruth Hernandez","cupos":1},"INV-050":{"id":"INV-050","codigo":"VL-050","nombre":"Ruth Hernandez","cupos":1},"VL-051":{"id":"INV-051","codigo":"VL-051","nombre":"Karen Santos","cupos":2},"INV-051":{"id":"INV-051","codigo":"VL-051","nombre":"Karen Santos","cupos":2},"VL-052":{"id":"INV-052","codigo":"VL-052","nombre":"Noemy Marin","cupos":1},"INV-052":{"id":"INV-052","codigo":"VL-052","nombre":"Noemy Marin","cupos":1},"VL-053":{"id":"INV-053","codigo":"VL-053","nombre":"Walter De Paz","cupos":1},"INV-053":{"id":"INV-053","codigo":"VL-053","nombre":"Walter De Paz","cupos":1},"VL-054":{"id":"INV-054","codigo":"VL-054","nombre":"Walter Marin","cupos":1},"INV-054":{"id":"INV-054","codigo":"VL-054","nombre":"Walter Marin","cupos":1},"VL-055":{"id":"INV-055","codigo":"VL-055","nombre":"Blanca Chicas","cupos":1},"INV-055":{"id":"INV-055","codigo":"VL-055","nombre":"Blanca Chicas","cupos":1},"VL-056":{"id":"INV-056","codigo":"VL-056","nombre":"Gloria Alfaro","cupos":1},"INV-056":{"id":"INV-056","codigo":"VL-056","nombre":"Gloria Alfaro","cupos":1},"VL-057":{"id":"INV-057","codigo":"VL-057","nombre":"Lidia Mejia","cupos":1},"INV-057":{"id":"INV-057","codigo":"VL-057","nombre":"Lidia Mejia","cupos":1},"VL-058":{"id":"INV-058","codigo":"VL-058","nombre":"Franklin Marin","cupos":1},"INV-058":{"id":"INV-058","codigo":"VL-058","nombre":"Franklin Marin","cupos":1},"VL-059":{"id":"INV-059","codigo":"VL-059","nombre":"Danilo Cortez","cupos":2},"INV-059":{"id":"INV-059","codigo":"VL-059","nombre":"Danilo Cortez","cupos":2},"VL-060":{"id":"INV-060","codigo":"VL-060","nombre":"Mauricio Maravilla","cupos":1},"INV-060":{"id":"INV-060","codigo":"VL-060","nombre":"Mauricio Maravilla","cupos":1}};

document.addEventListener('DOMContentLoaded', () => {

  // --- 0. DETECCIÓN DE PASE PERSONALIZADO (?pase=VL-001 o ?codigo=VL-001) ---
  const params = new URLSearchParams(window.location.search);
  const rawCode = (params.get('pase') || params.get('codigo') || params.get('id') || '').trim().toUpperCase();
  const normalizedCode = rawCode.replace(/^VL(\d+)$/, 'VL-$1').replace(/^INV(\d+)$/, 'INV-$1');

  const badgeEl = document.getElementById('guest-pass-badge');
  const badgeNameEl = document.getElementById('pass-badge-name');
  const badgeCuposEl = document.getElementById('pass-badge-cupos');
  const rsvpSummaryEl = document.getElementById('rsvp-pass-summary');
  const rsvpCodigoInput = document.getElementById('rsvp-codigo');
  const rsvpNombreInput = document.getElementById('rsvp-nombre');
  const rsvpPersonasSelect = document.getElementById('rsvp-personas');
  const rsvpPersonasGroup = document.getElementById('rsvp-personas-group');

  function applyGuestPass(guest) {
    if (!guest || !guest.nombre) return;
    const cupos = Math.max(1, Number(guest.pases_asignados || guest.cupos || 1));
    const cuposTexto = cupos === 1 ? '🎟️ Pase válido por 1 cupo' : `🎟️ Pase válido por ${cupos} cupos`;

    if (badgeEl && badgeNameEl && badgeCuposEl) {
      badgeNameEl.textContent = guest.nombre;
      badgeCuposEl.textContent = cuposTexto;
      badgeEl.style.display = 'flex';
    }

    if (rsvpCodigoInput) {
      rsvpCodigoInput.value = guest.codigo || normalizedCode;
    }

    if (rsvpNombreInput) {
      rsvpNombreInput.value = guest.nombre;
      rsvpNombreInput.readOnly = true;
      rsvpNombreInput.style.opacity = '0.92';
    }

    if (rsvpPersonasSelect) {
      rsvpPersonasSelect.innerHTML = '';
      for (let i = cupos; i >= 1; i--) {
        const opt = document.createElement('option');
        opt.value = String(i);
        opt.textContent = i === 1
          ? (cupos === 1 ? '1 persona (Pase Individual)' : 'Asistiré solo yo (1 persona)')
          : `${i} personas${i === cupos ? ' (Cupo completo)' : ''}`;
        if (i === cupos) opt.selected = true;
        rsvpPersonasSelect.appendChild(opt);
      }
    }

    if (rsvpSummaryEl) {
      let extraEstado = '';
      if (guest.estado === 'CONFIRMADO') {
        extraEstado = `<br><span style="color:#a7f3d0;font-weight:600;">✓ Ya confirmaste ${guest.pases_confirmados || guest.confirmados || cupos} cupo(s).</span>`;
      } else if (guest.estado === 'DECLINADO') {
        extraEstado = `<br><span style="color:#fca5a5;font-weight:600;">Habías indicado que no podrías asistir.</span>`;
      }
      rsvpSummaryEl.innerHTML = `<strong>Pase #${guest.codigo || normalizedCode}</strong> · ${guest.nombre}<br><span>Cupos asignados: <strong>${cupos} ${cupos === 1 ? 'persona' : 'personas'}</strong></span>${extraEstado}`;
      rsvpSummaryEl.style.display = 'block';
    }
  }

  if (normalizedCode) {
    const localGuest = CATALOGO_PASES[normalizedCode] || CATALOGO_PASES[rawCode];
    if (localGuest) {
      applyGuestPass(localGuest);
    }
    // Leer directamente data/invitados.json alojado en el mismo repositorio de GitHub
    fetch('data/invitados.json?t=' + Date.now())
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data && Array.isArray(data.invitados)) {
          const found = data.invitados.find(g =>
            (g.codigo && g.codigo.toUpperCase() === normalizedCode) ||
            (g.id && g.id.toUpperCase() === normalizedCode)
          );
          if (found) applyGuestPass(found);
        }
      })
      .catch(() => {});
  }

  // Mostrar/ocultar selector de personas según Sí / No
  const radiosAsistencia = document.querySelectorAll('input[name="Asistencia"]');
  radiosAsistencia.forEach(radio => {
    radio.addEventListener('change', () => {
      const isSi = document.querySelector('input[name="Asistencia"]:checked')?.value === 'Si';
      if (rsvpPersonasGroup) {
        rsvpPersonasGroup.style.display = isSi ? 'block' : 'none';
      }
    });
  });

  // --- 1. LÓGICA DEL SOBRE ---
  const envelope = document.getElementById("envelope");
  const cover = document.getElementById("cover");
  const story = document.getElementById("story");
  const music = document.getElementById("music");

  let opened = false;
  const openEnvelope = () => {
    if (opened) return;
    opened = true;
    
    if (music) {
      music.volume = 0.5;
      music.play().catch((error) => {
        console.log("Autoplay bloqueado (normal en móviles): ", error);
      });
    }

    cover.classList.add("hidden"); 
    
    setTimeout(() => {
      cover.style.display = "none";
      story.style.display = "block";
      
      setTimeout(() => {
        story.style.opacity = "1";
      }, 50);
    }, 1000);
  };

  if (cover) {
    cover.addEventListener("click", openEnvelope);
  }
  if (envelope) {
    envelope.addEventListener("click", openEnvelope);
  }

  // --- 2. LÓGICA DE LA CUENTA REGRESIVA ---
  const daysEl = document.getElementById("days");
  
  if (daysEl) {
    const targetDate = new Date(2027, 0, 23, 16, 0, 0).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;

      if (distance < 0) {
        clearInterval(timer);
        const countdownContainer = document.getElementById("countdown");
        if (countdownContainer) countdownContainer.innerHTML = "<p>¡Es Hoy!</p>";
      }
    }, 1000);
  }

  // --- 3. LÓGICA DEL FORMULARIO DE CONFIRMACIÓN (INDEPENDIENTE EN GITHUB + GOOGLE APPS SCRIPT) ---
  const form = document.getElementById('rsvp-form');
  const message = document.getElementById('rsvp-message');
  const confirmDetail = document.getElementById('rsvp-confirm-detail');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwc6kMhPUHet1cgQTWMoDJ0ZvCD7PTc0JkHQZLJoOMWFfOiG81rap7mKXiuwzjnbpMN3Q/exec';

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      
      const btn = document.getElementById('btn-submit');
      const originalText = btn.innerText;
      
      btn.disabled = true;
      btn.innerText = "ENVIANDO...";

      const formData = new FormData(form);
      if (formData.get('Asistencia') === 'No') {
        formData.set('Personas', '0');
      }

      fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' })
        .then(() => {
          form.style.display = "none";
          if (confirmDetail) {
            const nombre = formData.get('Nombre') || '';
            const personas = formData.get('Personas') || '1';
            confirmDetail.textContent = formData.get('Asistencia') === 'Si'
              ? `¡Qué alegría, ${nombre}! Hemos registrado ${personas} cupo(s) confirmado(s).`
              : `Gracias por avisarnos, ${nombre}. Hemos registrado tu respuesta.`;
          }
          message.style.display = "block";
        })
        .catch(error => {
          console.error('Error RSVP:', error.message);
          btn.disabled = false;
          btn.innerText = originalText;
          alert("Hubo un error al enviar tu confirmación. Por favor intenta de nuevo.");
        });
    });
  }
});
