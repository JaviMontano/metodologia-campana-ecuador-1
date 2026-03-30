/**
 * utils.js — Reusable JavaScript utilities for MetodologIA templates and scripts
 *
 * Usage (Node.js):  const utils = require('./_templates/js/utils');
 * Usage (Browser):  <script src="_templates/js/utils.js"></script> → window.MUtils
 */

(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.MUtils = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // ── String Utilities ─────────────────────────────────────────────────────

  /** Remove accents and normalize to ASCII */
  function stripAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  /** Convert string to URL/file-safe slug */
  function slugify(str, maxLen = 25) {
    let slug = stripAccents(str)
      .toLowerCase()
      .replace(/[&+/.,']/g, '-')
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-{2,}/g, '-')
      .replace(/^-|-$/g, '');
    if (maxLen && slug.length > maxLen) {
      slug = slug.substring(0, maxLen).replace(/-[^-]*$/, '');
    }
    return slug.length < 2 ? 'item' : slug;
  }

  /** Truncate text preserving word boundaries */
  function truncate(str, maxLen = 100, suffix = '...') {
    if (str.length <= maxLen) return str;
    const trimmed = str.substring(0, maxLen - suffix.length);
    return trimmed.substring(0, trimmed.lastIndexOf(' ')) + suffix;
  }

  /** Capitalize first letter */
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // ── Number / Currency ────────────────────────────────────────────────────

  /** Format number as COP currency: 12000000 → "COP 12.000.000" */
  function formatCOP(amount) {
    const num = typeof amount === 'string' ? parseInt(amount.replace(/\D/g, ''), 10) : amount;
    return 'COP ' + num.toLocaleString('es-CO');
  }

  /** Format number as USD currency: 3500 → "USD 3,500" */
  function formatUSD(amount) {
    const num = typeof amount === 'string' ? parseFloat(amount.replace(/[^0-9.]/g, '')) : amount;
    return 'USD ' + num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  }

  /** Parse COP string back to number: "COP 12.000.000" → 12000000 */
  function parseCOP(str) {
    return parseInt(String(str).replace(/[^0-9]/g, ''), 10) || 0;
  }

  // ── Date Utilities ───────────────────────────────────────────────────────

  /** Format date as YYYY-MM-DD */
  function dateISO(date) {
    const d = date ? new Date(date) : new Date();
    return d.toISOString().split('T')[0];
  }

  /** Format date for display: "29 de marzo de 2026" */
  function dateLongES(date) {
    const d = date ? new Date(date) : new Date();
    return d.toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  /** Format date for display: "March 29, 2026" */
  function dateLongEN(date) {
    const d = date ? new Date(date) : new Date();
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }

  // ── File / Path Utilities ────────────────────────────────────────────────

  /** Generate MetodologIA standard filename */
  function proposalFilename(serviceSlug, companySlug, lang, ext) {
    const date = dateISO().substring(0, 7); // YYYY-MM
    return `propuesta_${serviceSlug}_${companySlug}_${date}_${lang.toUpperCase()}.${ext}`;
  }

  /** Sanitize filename (remove unsafe chars) */
  function sanitizeFilename(name) {
    return name.replace(/[<>:"/\\|?*\x00-\x1f]/g, '_').replace(/_{2,}/g, '_');
  }

  // ── Markdown Utilities ───────────────────────────────────────────────────

  /** Convert markdown table array to markdown string */
  function mdTable(headers, rows) {
    const sep = headers.map(() => '---');
    const lines = [
      '| ' + headers.join(' | ') + ' |',
      '| ' + sep.join(' | ') + ' |',
      ...rows.map(row => '| ' + row.join(' | ') + ' |')
    ];
    return lines.join('\n');
  }

  /** Wrap text in markdown [POR CONFIRMAR] style */
  function porConfirmar(text, responsible) {
    return `[POR CONFIRMAR: ${responsible || 'JM'}] ${text}`;
  }

  // ── Validation ───────────────────────────────────────────────────────────

  /** Check if string contains red-list terms */
  function checkRedList(text) {
    const redTerms = [
      'resultados garantizados', 'guaranteed results',
      'sin riesgo', 'zero risk',
      'resultados instantáneos', 'instant results',
      'revolucionario', 'revolutionary',
      'disruptivo', 'disruptive',
      'único en el mercado', 'unique in the market',
      'soluciones innovadoras', 'innovative solutions',
      'equipo de expertos', 'team of experts',
      'hack', 'truco', 'secreto'
    ];
    const lower = stripAccents(text.toLowerCase());
    return redTerms.filter(term => lower.includes(stripAccents(term.toLowerCase())));
  }

  /** Replace "transformación" with "(R)Evolución" */
  function enforceRevolution(text) {
    return text
      .replace(/transformaci[oó]n/gi, '(R)Evolución')
      .replace(/transformation/gi, '(R)Evolution');
  }

  // ── Data Helpers ─────────────────────────────────────────────────────────

  /** Deep clone an object (JSON-safe) */
  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  /** Pick specific keys from an object */
  function pick(obj, keys) {
    return keys.reduce(function (acc, k) {
      if (k in obj) acc[k] = obj[k];
      return acc;
    }, {});
  }

  /** Group array of objects by a key */
  function groupBy(arr, key) {
    return arr.reduce(function (acc, item) {
      const k = typeof key === 'function' ? key(item) : item[key];
      (acc[k] = acc[k] || []).push(item);
      return acc;
    }, {});
  }

  return {
    stripAccents, slugify, truncate, capitalize,
    formatCOP, formatUSD, parseCOP,
    dateISO, dateLongES, dateLongEN,
    proposalFilename, sanitizeFilename,
    mdTable, porConfirmar,
    checkRedList, enforceRevolution,
    clone, pick, groupBy
  };
});
