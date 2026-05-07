// =========================================================
//  KASE — State Skill Development Expenditure
//  index.js  (Home Page)
// =========================================================

const YEARS = ['21-22', '22-23', '23-24', '24-25', '25-26'];

// Set topbar date
document.getElementById('topbarDate').textContent = new Date().toLocaleDateString('en-IN', {
  day: 'numeric', month: 'long', year: 'numeric'
});

async function init() {
  const allData = {};
  for (const y of YEARS) {
    allData[y] = await fetchYearData(y);
  }
  renderSummaryCards(allData);
  renderYearGrid(allData);
  renderTrendChart(allData);
  renderStackedChart(allData);
  renderPieGrid(allData);
}

// ── Summary Cards ─────────────────────────────────────────
function renderSummaryCards(allData) {
  const totalAll = YEARS.reduce((s, y) => s + (allData[y]?.total || 0), 0);
  const skillAll = YEARS.reduce((s, y) => s + (allData[y]?.skill || 0), 0);
  const nonAll   = YEARS.reduce((s, y) => s + (allData[y]?.nonSkill || 0), 0);
  const skillPct = ((skillAll / totalAll) * 100).toFixed(1);
  const nonPct   = ((nonAll   / totalAll) * 100).toFixed(1);

  document.getElementById('summaryCards').innerHTML = `
    <div class="sum-card animate-in">
      <div class="sum-card-inner">
        <div class="sum-card-icon total">💰</div>
        <div class="sum-card-body">
          <div class="sum-card-label">5-Year Total Outlay</div>
          <div class="sum-card-value">₹${totalAll.toFixed(0)} Cr</div>
          <div class="sum-card-sub">Across all departments &amp; years</div>
        </div>
      </div>
      <div class="sum-card-bar"><div class="sum-card-bar-fill" style="width:100%"></div></div>
    </div>
    <div class="sum-card animate-in" style="animation-delay:.08s">
      <div class="sum-card-inner">
        <div class="sum-card-icon skill">📈</div>
        <div class="sum-card-body">
          <div class="sum-card-label">Skill Development Outlay</div>
          <div class="sum-card-value">₹${skillAll.toFixed(1)} Cr</div>
          <div class="sum-card-sub">${skillPct}% of total — 5-year cumulative</div>
        </div>
      </div>
      <div class="sum-card-bar"><div class="sum-card-bar-fill" style="width:${skillPct}%"></div></div>
    </div>
    <div class="sum-card animate-in" style="animation-delay:.16s">
      <div class="sum-card-inner">
        <div class="sum-card-icon nonskill">🏗️</div>
        <div class="sum-card-body">
          <div class="sum-card-label">Non-Skill Component</div>
          <div class="sum-card-value">₹${nonAll.toFixed(1)} Cr</div>
          <div class="sum-card-sub">${nonPct}% of total — infrastructure &amp; support</div>
        </div>
      </div>
      <div class="sum-card-bar"><div class="sum-card-bar-fill" style="width:${nonPct}%"></div></div>
    </div>
  `;
}

// ── Year Grid ─────────────────────────────────────────────
function renderYearGrid(allData) {
  document.getElementById('yearGrid').innerHTML = YEARS.map((y, i) => {
    const d = allData[y];
    if (!d) return '';
    const skillPct = d.total > 0 ? ((d.skill / d.total) * 100).toFixed(0) : 0;
    const nonPct   = d.total > 0 ? ((d.nonSkill / d.total) * 100).toFixed(0) : 0;
    const depts    = aggregateByDept(d.rows);
    return `
      <a href="year.html?year=${y}" class="year-card animate-in" style="animation-delay:${i * 0.07}s">
        <div class="year-card-year">${YEAR_LABELS[y]}</div>
        <div class="year-card-label">State Skill Development Allocation</div>
        <div class="year-card-total">₹${d.total.toFixed(2)}</div>
        <div class="year-card-total-label">Total Outlay (₹ Crores)</div>
        <div class="year-card-chips">
          <span class="chip chip-skill">Skill ${skillPct}% · ₹${d.skill.toFixed(1)} Cr</span>
          <span class="chip chip-nonskill">Non-Skill ${nonPct}% · ₹${d.nonSkill.toFixed(1)} Cr</span>
        </div>
        <div class="year-card-meta">${depts.length} Administrative Departments</div>
        <div class="year-card-arrow">→</div>
      </a>
    `;
  }).join('');
}

// ── Trend Chart ───────────────────────────────────────────
function renderTrendChart(allData) {
  const ctx = document.getElementById('trendChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: YEARS.map(y => YEAR_LABELS[y]),
      datasets: [{
        label: 'Total Outlay (₹ Cr)',
        data: YEARS.map(y => allData[y]?.total || 0),
        borderColor: '#0e5774',
        backgroundColor: ctx => {
          const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, 280);
          g.addColorStop(0, 'rgba(14,87,116,0.18)');
          g.addColorStop(1, 'rgba(14,87,116,0)');
          return g;
        },
        borderWidth: 2.5,
        pointBackgroundColor: '#0e5774',
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: true,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#072e3e',
          titleColor: 'rgba(255,255,255,0.6)',
          bodyColor: '#fff',
          padding: 12,
          callbacks: { label: c => ` ₹${c.parsed.y.toFixed(2)} Crores` }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          grid: { color: 'rgba(14,87,116,0.07)' },
          ticks: { callback: v => `₹${v}Cr`, font: { size: 11, family: 'Inter' }, color: '#4a7a90' }
        },
        x: {
          grid: { display: false },
          ticks: { font: { size: 11, family: 'Inter' }, color: '#4a7a90' }
        }
      }
    }
  });
}

// ── Stacked Bar Chart ─────────────────────────────────────
function renderStackedChart(allData) {
  const ctx = document.getElementById('stackedChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: YEARS.map(y => YEAR_LABELS[y]),
      datasets: [
        {
          label: 'Skill Development',
          data: YEARS.map(y => allData[y]?.skill || 0),
          backgroundColor: '#0e5774',
          borderRadius: { topLeft: 4, topRight: 4 },
        },
        {
          label: 'Non-Skill Component',
          data: YEARS.map(y => allData[y]?.nonSkill || 0),
          backgroundColor: '#e8a020',
          borderRadius: { topLeft: 4, topRight: 4 },
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { font: { size: 11, family: 'Inter' }, padding: 16, usePointStyle: true }
        },
        tooltip: {
          backgroundColor: '#072e3e',
          callbacks: { label: c => ` ₹${c.parsed.y.toFixed(2)} Cr` }
        }
      },
      scales: {
        x: { stacked: true, grid: { display: false }, ticks: { font: { size: 11, family: 'Inter' }, color: '#4a7a90' } },
        y: { stacked: true, grid: { color: 'rgba(14,87,116,0.07)' }, ticks: { callback: v => `₹${v}`, font: { size: 11, family: 'Inter' }, color: '#4a7a90' } }
      }
    }
  });
}

// ── Pie Grid ──────────────────────────────────────────────
function renderPieGrid(allData) {
  document.getElementById('pieGrid').innerHTML = YEARS.map((y, i) => {
    const d = allData[y];
    return `
      <div class="pie-card animate-in" style="animation-delay:${i * 0.07}s">
        <div class="pie-card-year">${YEAR_LABELS[y]}</div>
        <div style="font-size:0.72rem;color:var(--text-500);font-weight:600;margin-bottom:0.5rem;">
          Total ₹${d.total.toFixed(2)} Cr
        </div>
        <div class="pie-canvas-wrapper"><canvas id="pie-${y}"></canvas></div>
      </div>
    `;
  }).join('');

  YEARS.forEach(y => {
    const d = allData[y];
    new Chart(document.getElementById(`pie-${y}`).getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Skill Development', 'Non-Skill Component'],
        datasets: [{
          data: [d.skill, d.nonSkill],
          backgroundColor: ['#0e5774', '#e8a020'],
          borderWidth: 2.5,
          borderColor: '#fff',
          hoverOffset: 6,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: { position: 'bottom', labels: { font: { size: 10, family: 'Inter' }, padding: 8, usePointStyle: true } },
          tooltip: {
            backgroundColor: '#072e3e',
            callbacks: { label: c => ` ₹${c.parsed.toFixed(2)} Cr (${((c.parsed / d.total) * 100).toFixed(1)}%)` }
          }
        }
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', init);
