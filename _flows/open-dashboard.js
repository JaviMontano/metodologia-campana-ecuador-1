#!/usr/bin/env node
/**
 * ACC BPMN Dashboard Launcher
 * Opens the interactive process dashboard in the default browser.
 *
 * Usage:
 *   node _flows/open-dashboard.js          # open in default browser
 *   node _flows/open-dashboard.js --serve   # start local server (port 3333)
 */

const path = require('path');
const fs = require('fs');

const DASHBOARD = path.join(__dirname, 'dashboard.html');
const PORT = parseInt(process.env.DASHBOARD_PORT || '3333', 10);

if (!fs.existsSync(DASHBOARD)) {
  console.error('ERROR: dashboard.html not found at', DASHBOARD);
  process.exit(1);
}

const args = process.argv.slice(2);

if (args.includes('--serve') || args.includes('-s')) {
  // --- Local server mode ---
  const http = require('http');
  const mimeTypes = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml' };

  const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === '/' ? 'dashboard.html' : req.url);
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });

  server.listen(PORT, () => {
    const url = `http://localhost:${PORT}`;
    console.log(`\n  ACC BPMN Dashboard`);
    console.log(`  Serving at: ${url}`);
    console.log(`  Press Ctrl+C to stop\n`);
    openBrowser(url);
  });
} else {
  // --- Direct open mode ---
  const fileUrl = `file://${DASHBOARD.replace(/\\/g, '/')}`;
  console.log(`Opening ACC BPMN Dashboard...`);
  openBrowser(fileUrl);
}

function openBrowser(url) {
  const { exec } = require('child_process');
  const platform = process.platform;
  const cmd = platform === 'win32' ? `start "" "${url}"`
            : platform === 'darwin' ? `open "${url}"`
            : `xdg-open "${url}"`;
  exec(cmd, (err) => {
    if (err) console.error('Could not open browser:', err.message);
  });
}
