/**
 * ProposalCard.tsx — Reusable proposal summary card component
 * Use in dashboards, listing pages, or proposal overview screens.
 *
 * Props:
 *   title: string — Proposal title
 *   client: string — Client/company name
 *   service: string — Service slug or name
 *   status: 'draft' | 'review' | 'approved' | 'sent'
 *   date: string — ISO date string
 *   amount: string — Formatted amount (e.g., "COP 12.000.000")
 *   lang: 'es' | 'en' — Language indicator
 *   onClick?: () => void
 */

import React from 'react';

interface ProposalCardProps {
  title: string;
  client: string;
  service: string;
  status: 'draft' | 'review' | 'approved' | 'sent';
  date: string;
  amount: string;
  lang: 'es' | 'en';
  onClick?: () => void;
}

const STATUS_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  draft:    { bg: 'rgba(128,128,128,0.1)', text: '#808080', label: 'Borrador' },
  review:   { bg: 'rgba(230,126,34,0.1)', text: '#E67E22', label: 'En Revision' },
  approved: { bg: 'rgba(39,174,96,0.1)',  text: '#27AE60', label: 'Aprobada' },
  sent:     { bg: 'rgba(19,125,197,0.1)', text: '#137DC5', label: 'Enviada' },
};

export function ProposalCard({ title, client, service, status, date, amount, lang, onClick }: ProposalCardProps) {
  const s = STATUS_STYLES[status] || STATUS_STYLES.draft;
  const formattedDate = new Date(date).toLocaleDateString(lang === 'es' ? 'es-CO' : 'en-US', {
    day: 'numeric', month: 'short', year: 'numeric'
  });

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={{
        background: '#FFFFFF',
        borderRadius: '8px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        borderLeft: '4px solid #FFD700',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'box-shadow 250ms ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
        <h3 style={{ fontFamily: "'Poppins', Arial, sans-serif", fontSize: '16px', fontWeight: 600, color: '#122562', margin: 0 }}>
          {title}
        </h3>
        <span style={{
          display: 'inline-flex', alignItems: 'center', padding: '2px 10px',
          borderRadius: '9999px', fontSize: '11px', fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.05em',
          background: s.bg, color: s.text,
        }}>
          {s.label}
        </span>
      </div>

      <p style={{ fontFamily: "'Trebuchet MS', Arial, sans-serif", fontSize: '14px', color: '#1F2833', margin: '0 0 4px' }}>
        {client}
      </p>
      <p style={{ fontSize: '13px', color: '#808080', margin: '0 0 16px' }}>
        {service}
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'Poppins', Arial, sans-serif", fontSize: '18px', fontWeight: 700, color: '#122562' }}>
          {amount}
        </span>
        <span style={{ fontSize: '12px', color: '#808080' }}>
          {formattedDate} &middot; {lang.toUpperCase()}
        </span>
      </div>
    </div>
  );
}

export default ProposalCard;
