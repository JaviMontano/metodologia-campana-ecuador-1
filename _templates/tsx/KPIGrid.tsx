/**
 * KPIGrid.tsx — Reusable KPI metrics grid component
 * Use in dashboards, reports, and summary views.
 *
 * Usage:
 *   <KPIGrid items={[
 *     { value: '17', label: 'Servicios', trend: '+2', trendUp: true },
 *     { value: '95%', label: 'Cobertura', trend: '+5%', trendUp: true },
 *     { value: '3', label: 'POR CONFIRMAR', trend: '-1', trendUp: false },
 *     { value: 'COP 150M', label: 'Pipeline', trend: '+12%', trendUp: true },
 *   ]} />
 */

import React from 'react';

interface KPIItem {
  value: string;
  label: string;
  trend?: string;
  trendUp?: boolean;
}

interface KPIGridProps {
  items: KPIItem[];
  columns?: number;
}

export function KPIGrid({ items, columns = 4 }: KPIGridProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${Math.min(columns, items.length)}, 1fr)`,
      gap: '16px',
    }}>
      {items.map((item, i) => (
        <div key={i} style={{
          background: '#FFFFFF',
          borderRadius: '8px',
          padding: '24px',
          textAlign: 'center',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          border: '1px solid rgba(0,0,0,0.08)',
        }}>
          <div style={{
            fontFamily: "'Poppins', Arial, sans-serif",
            fontSize: '32px',
            fontWeight: 700,
            color: '#122562',
            lineHeight: 1.2,
          }}>
            {item.value}
          </div>
          <div style={{ fontSize: '13px', color: '#808080', marginTop: '4px' }}>
            {item.label}
          </div>
          {item.trend && (
            <div style={{
              fontSize: '12px',
              marginTop: '8px',
              color: item.trendUp ? '#27AE60' : '#C0392B',
              fontWeight: 600,
            }}>
              {item.trendUp ? '\u25B2' : '\u25BC'} {item.trend}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default KPIGrid;
