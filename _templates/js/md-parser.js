/**
 * md-parser.js — Lightweight Markdown parser for MetodologIA documents
 * Parses markdown into structured sections for template rendering and conversion.
 *
 * Usage:
 *   const { parseMarkdown, extractFrontmatter, sectionsToHTML } = require('./md-parser');
 *   const doc = parseMarkdown(fs.readFileSync('file.md', 'utf8'));
 */

'use strict';

/**
 * Extract YAML-like frontmatter from markdown (between --- delimiters)
 * @param {string} md - Markdown content
 * @returns {{ meta: Object, body: string }}
 */
function extractFrontmatter(md) {
  const match = md.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: md };

  const meta = {};
  match[1].split('\n').forEach(function (line) {
    const sep = line.indexOf(':');
    if (sep > 0) {
      const key = line.substring(0, sep).trim();
      const val = line.substring(sep + 1).trim();
      meta[key] = val;
    }
  });
  return { meta: meta, body: match[2] };
}

/**
 * Parse markdown into structured sections
 * @param {string} md - Markdown content
 * @returns {{ title: string|null, sections: Array, frontmatter: Object }}
 */
function parseMarkdown(md) {
  const { meta, body } = extractFrontmatter(md);
  const lines = body.split('\n');
  const sections = [];
  let current = null;
  let title = null;

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];

    if (line.startsWith('# ') && !title) {
      title = line.substring(2).trim();
      continue;
    }

    var level = 0;
    if (line.startsWith('### ')) level = 3;
    else if (line.startsWith('## ')) level = 2;
    else if (line.startsWith('# ')) level = 1;

    if (level > 0) {
      current = {
        level: level,
        title: line.substring(level + 1).trim(),
        content: [],
        lists: [],
        tables: [],
        codeBlocks: []
      };
      sections.push(current);
    } else if (current) {
      current.content.push(line);

      // Detect list items
      if (/^\s*[-*+]\s/.test(line)) {
        current.lists.push(line.replace(/^\s*[-*+]\s+/, '').trim());
      }
      // Detect numbered list items
      if (/^\s*\d+[.)]\s/.test(line)) {
        current.lists.push(line.replace(/^\s*\d+[.)]\s+/, '').trim());
      }
    }
  }

  // Post-process: extract tables from content
  sections.forEach(function (sec) {
    var tableRows = [];
    var inTable = false;

    sec.content.forEach(function (line) {
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        if (line.includes('---')) return; // separator line
        var cells = line.split('|').filter(function (c) { return c.trim(); }).map(function (c) { return c.trim(); });
        tableRows.push(cells);
        inTable = true;
      } else if (inTable && tableRows.length > 0) {
        sec.tables.push({ headers: tableRows[0], rows: tableRows.slice(1) });
        tableRows = [];
        inTable = false;
      }
    });

    if (tableRows.length > 0) {
      sec.tables.push({ headers: tableRows[0], rows: tableRows.slice(1) });
    }
  });

  return { title: title, sections: sections, frontmatter: meta };
}

/**
 * Convert parsed sections back to clean markdown
 * @param {Object} parsed - Output from parseMarkdown
 * @returns {string}
 */
function sectionsToMarkdown(parsed) {
  var lines = [];
  if (parsed.title) lines.push('# ' + parsed.title, '');

  parsed.sections.forEach(function (sec) {
    var prefix = '#'.repeat(sec.level) + ' ';
    lines.push(prefix + sec.title);
    lines.push.apply(lines, sec.content);
    lines.push('');
  });

  return lines.join('\n');
}

/**
 * Convert parsed sections to basic HTML
 * @param {Object} parsed - Output from parseMarkdown
 * @returns {string}
 */
function sectionsToHTML(parsed) {
  var html = [];
  if (parsed.title) html.push('<h1>' + escapeHtml(parsed.title) + '</h1>');

  parsed.sections.forEach(function (sec) {
    var tag = 'h' + Math.min(sec.level + 1, 6);
    html.push('<' + tag + '>' + escapeHtml(sec.title) + '</' + tag + '>');

    sec.content.forEach(function (line) {
      var trimmed = line.trim();
      if (!trimmed) return;
      if (trimmed.startsWith('|')) return; // skip table lines (handled separately)
      if (/^\s*[-*+]\s/.test(line)) return; // skip list items (handled below)

      // Bold/italic inline
      var processed = escapeHtml(trimmed)
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/`(.+?)`/g, '<code>$1</code>');
      html.push('<p>' + processed + '</p>');
    });

    if (sec.lists.length > 0) {
      html.push('<ul>');
      sec.lists.forEach(function (item) {
        html.push('<li>' + escapeHtml(item) + '</li>');
      });
      html.push('</ul>');
    }

    sec.tables.forEach(function (table) {
      html.push('<table class="table"><thead><tr>');
      table.headers.forEach(function (h) { html.push('<th>' + escapeHtml(h) + '</th>'); });
      html.push('</tr></thead><tbody>');
      table.rows.forEach(function (row) {
        html.push('<tr>');
        row.forEach(function (cell) { html.push('<td>' + escapeHtml(cell) + '</td>'); });
        html.push('</tr>');
      });
      html.push('</tbody></table>');
    });
  });

  return html.join('\n');
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { parseMarkdown: parseMarkdown, extractFrontmatter: extractFrontmatter, sectionsToMarkdown: sectionsToMarkdown, sectionsToHTML: sectionsToHTML };
}
