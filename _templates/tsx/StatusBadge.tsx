/**
 * StatusBadge.tsx — Reusable status badge component
 * Maps semantic statuses to MetodologIA brand colors.
 *
 * Usage:
 *   <StatusBadge status="approved" />
 *   <StatusBadge status="blocked" label="BLOQUEADO" />
 *   <StatusBadge status="warning" label="POR CONFIRMAR" />
 */

import React from 'react';

type StatusType = 'approved' | 'warning' | 'blocked' | 'draft' | 'review' | 'info' | 'tier1' | 'tier2' | 'tier3';

interface StatusBadgeProps {
  status: StatusType;
  label?: string;
  size?: 'sm' | 'md';
}

const BADGE_CONFIG: Record<StatusType, { bg: string; color: string; border: string; defaultLabel: string }> = {
  approved: { bg: 'rgba(39,174,96,0.1)',  color: '#27AE60', border: 'rgba(39,174,96,0.3)',  defaultLabel: 'Aprobado' },
  warning:  { bg: 'rgba(230,126,34,0.1)', color: '#E67E22', border: 'rgba(230,126,34,0.3)', defaultLabel: 'Advertencia' },
  blocked:  { bg: 'rgba(192,57,43,0.1)',  color: '#C0392B', border: 'rgba(192,57,43,0.3)',  defaultLabel: 'Bloqueado' },
  draft:    { bg: 'rgba(128,128,128,0.1)', color: '#808080', border: 'rgba(128,128,128,0.3)', defaultLabel: 'Borrador' },
  review:   { bg: 'rgba(19,125,197,0.1)', color: '#137DC5', border: 'rgba(19,125,197,0.3)', defaultLabel: 'En Revision' },
  info:     { bg: 'rgba(18,37,98,0.08)',  color: '#122562', border: 'rgba(18,37,98,0.2)',   defaultLabel: 'Info' },
  tier1:    { bg: 'rgba(18,37,98,0.08)',  color: '#122562', border: 'rgba(18,37,98,0.2)',   defaultLabel: 'Tier 1' },
  tier2:    { bg: 'rgba(19,125,197,0.1)', color: '#137DC5', border: 'rgba(19,125,197,0.3)', defaultLabel: 'Tier 2' },
  tier3:    { bg: 'rgba(128,128,128,0.1)', color: '#808080', border: 'rgba(128,128,128,0.3)', defaultLabel: 'Tier 3' },
};

export function StatusBadge({ status, label, size = 'sm' }: StatusBadgeProps) {
  const config = BADGE_CONFIG[status] || BADGE_CONFIG.info;
  const fontSize = size === 'sm' ? '11px' : '13px';
  const padding = size === 'sm' ? '2px 10px' : '4px 14px';

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding,
      borderRadius: '9999px',
      fontSize,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      background: config.bg,
      color: config.color,
      border: `1px solid ${config.border}`,
    }}>
      {label || config.defaultLabel}
    </span>
  );
}

export default StatusBadge;
