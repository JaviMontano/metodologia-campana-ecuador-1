/**
 * Inject standardized footer into all v2 HTML files.
 * Also injects CSS for footer + CTA buttons.
 *
 * Usage: node inject-footer.js
 */

const fs = require('fs');
const path = require('path');

const HTML_DIR = path.resolve(__dirname, '..', 'html');

const WA_GROUP = 'https://chat.whatsapp.com/KKF10Ye4peLBgiYccX8OCx';
const MAILTO = 'https://mail.google.com/mail/?view=cm&to=contacto@metodologia.info&su=Hola+MetodologIA+%E2%80%94+Quiero+saber+mas+sobre+el+CAO+Bootcamp+Quito+2026&body=Hola+equipo+MetodologIA%2C%0A%0AMi+nombre+es+%5Bsu+nombre%5D+y+soy+%5Bcargo%5D+en+%5Bempresa%5D.%0A%0AMe+interesa+conocer+mas+sobre%3A%0A%0A%E2%96%A1+Masterclass+gratuita+(Lunes+6+abril)%0A%E2%96%A1+Taller+De+Ocupado+a+Productivo%0A%E2%96%A1+CAO+Bootcamp+-+Edicion+Creyentes%0A%E2%96%A1+Programa+de+Empoderamiento+para+mi+equipo%0A%0AQuedo+atento.%0A%0ACordialmente%2C%0A%5Bsu+nombre%5D';

// The standardized footer HTML
const FOOTER_HTML = `
  <!-- ================================================================
       FOOTER HOMOLOGADO v2
       ================================================================ -->
  <footer style="padding:3rem 0 calc(2rem + env(safe-area-inset-bottom, 0px));background:var(--bg-primary, #F8FAFC);border-top:1px solid var(--border-color, rgba(184,134,11,0.2));font-family:'Trebuchet MS',Arial,sans-serif;">
    <div style="max-width:720px;margin:0 auto;padding:0 1.5rem;text-align:center;">

      <!-- LOGO -->
      <div style="margin-bottom:24px;">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style="display:inline-block;vertical-align:middle;">
          <defs><linearGradient id="flg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0B2545"/><stop offset="100%" stop-color="#1E293B"/></linearGradient></defs>
          <rect width="36" height="36" rx="10" fill="url(#flg)"/>
          <path d="M10 12h3v12h-3V12zm6 0h3v8h-3v-8zm0 10h3v2h-3v-2zm6-10h3v6h-3v-6zm0 8h3v4h-3v-4z" fill="white"/>
          <circle cx="18" cy="8" r="2" fill="#FFD700"/>
        </svg>
        <span style="font-family:'Poppins',Arial,sans-serif;font-weight:700;font-size:16px;color:var(--text-primary, #0F172A);margin-left:8px;vertical-align:middle;">Metodolog<span style="color:var(--gold, #B8860B);">IA</span></span>
      </div>

      <!-- CTAs ROW -->
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:24px;">
        <!-- WhatsApp Group -->
        <a href="${WA_GROUP}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border-radius:12px;font-family:'Poppins',Arial,sans-serif;font-weight:600;font-size:14px;text-decoration:none;background:#0B2545;color:#FFFFFF;border:1px solid rgba(255,215,0,0.2);transition:all 0.2s;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.318-.724-6.006-1.952a.75.75 0 00-.603-.113l-3.106 1.041 1.041-3.106a.75.75 0 00-.113-.603A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
          Unirse a la Comunidad
        </a>
        <!-- Email wow -->
        <a href="${MAILTO}" style="display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border-radius:12px;font-family:'Poppins',Arial,sans-serif;font-weight:600;font-size:14px;text-decoration:none;background:transparent;color:var(--text-primary, #0F172A);border:1px solid var(--border-color, rgba(184,134,11,0.2));transition:all 0.2s;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          Escribir al Equipo
        </a>
      </div>

      <!-- CONTACT INFO -->
      <div style="margin-bottom:20px;">
        <a href="mailto:contacto@metodologia.info" style="font-size:13px;color:var(--text-secondary, #475569);text-decoration:none;">contacto@metodologia.info</a>
        <span style="color:var(--text-secondary, #475569);margin:0 8px;">&middot;</span>
        <a href="https://metodologia.info" target="_blank" style="font-size:13px;color:var(--text-secondary, #475569);text-decoration:none;">metodologia.info</a>
      </div>

      <!-- DISCLAIMER -->
      <p style="font-size:10px;color:var(--text-secondary, #475569);max-width:500px;margin:0 auto 8px;line-height:1.5;">Esta es una propuesta de diseno de servicio personalizado. Los precios indicados son indicativos y se confirman antes de la firma del acuerdo de servicios. Este documento no constituye un compromiso de entrega ni un contrato.</p>
      <p style="font-size:10px;font-style:italic;color:var(--text-secondary, #475569);">Construido por profesionales, potenciado por la red agentica de MetodologIA.</p>
    </div>
  </footer>`;

// Files to update (exclude investor-one-pager which is print-only and pitch-deck which has slides)
const FILES = [
  'landing-workshop-v2.html',
  'invitation-mobile-v2.html',
  'invitation-desktop-v2.html',
  'dossier-cao-v2.html',
  'cristian-invitation-v2.html',
  'cristian-dossier-v2.html',
  'financial-dashboard-v2.html',
];

for (const file of FILES) {
  const filePath = path.join(HTML_DIR, file);
  if (!fs.existsSync(filePath)) { console.warn(`  SKIP: ${file} not found`); continue; }

  let html = fs.readFileSync(filePath, 'utf-8');

  // Find and replace existing footer (between <footer and </footer>)
  const footerRegex = /\s*<footer[\s\S]*?<\/footer>/;
  if (footerRegex.test(html)) {
    html = html.replace(footerRegex, FOOTER_HTML);
    fs.writeFileSync(filePath, html, 'utf-8');
    console.log(`  Updated footer: ${file}`);
  } else {
    console.warn(`  NO FOOTER FOUND: ${file}`);
  }
}

console.log('\nDone. Footer homologado injected into 7 files.');
console.log(`WhatsApp group: ${WA_GROUP}`);
console.log(`Mailto with template: YES`);
