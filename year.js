// =========================================================
//  KASE — State Skill Development Allocation
//  year.js  (Year Detail Page)
// =========================================================

let currentYear = null;
let yearData    = null;
let deptChart   = null;
let splitChart  = null;

// Set topbar date
document.getElementById('topbarDate').textContent = new Date().toLocaleDateString('en-IN', {
  day: 'numeric', month: 'long', year: 'numeric'
});

async function init() {
  const params = new URLSearchParams(window.location.search);
  currentYear  = params.get('year') || '25-26';

  // Active pill
  document.querySelectorAll('.year-pill').forEach(a => {
    if ((a.getAttribute('href') || '').includes(currentYear)) a.classList.add('active');
  });

  yearData = await fetchYearData(currentYear);
  if (!yearData) { document.body.innerHTML = '<p style="padding:2rem;font-family:sans-serif">Data not found.</p>'; return; }

  document.getElementById('pageTitle').textContent    = `State Skill Development Allocation`;
  document.getElementById('pageSubtitle').textContent = `${YEAR_LABELS[currentYear]} — Department-wise Analysis`;
  document.getElementById('heroLabel').textContent    = `Financial Year ${YEAR_LABELS[currentYear]}`;
  document.getElementById('heroYear').textContent     = `State Skill Development Allocation`;
  document.getElementById('heroSubtitle').textContent = `Detailed department and agency-level skill outlay analysis`;

  renderYearSummaryCards();
  renderDeptChart();
  renderSplitChart();
  renderAdminDepts();
  renderTable(yearData.rows);

  document.getElementById('tableSearch').addEventListener('input', filterTable);
  document.getElementById('functFilter').addEventListener('change', filterTable);
}

// ── Year Summary Cards ────────────────────────────────────
function renderYearSummaryCards() {
  const d      = yearData;
  const depts  = aggregateByDept(d.rows);
  const sPct   = d.total > 0 ? ((d.skill / d.total) * 100).toFixed(1) : 0;
  const nPct   = (100 - parseFloat(sPct)).toFixed(1);

  document.getElementById('yearSummaryCards').innerHTML = `
    <div class="sum-card animate-in">
      <div class="sum-card-inner">
        <div class="sum-card-icon total"></div>
        <div class="sum-card-body">
          <div class="sum-card-label">Total Outlay</div>
          <div class="sum-card-value">₹${d.total.toFixed(2)} Cr</div>
          <div class="sum-card-sub">${depts.length} Administrative Departments</div>
        </div>
      </div>
      <div class="sum-card-bar"><div class="sum-card-bar-fill" style="width:100%"></div></div>
    </div>
    <div class="sum-card animate-in" style="animation-delay:.08s">
      <div class="sum-card-inner">
        <div class="sum-card-icon skill"></div>
        <div class="sum-card-body">
          <div class="sum-card-label">Skill Development</div>
          <div class="sum-card-value">₹${d.skill.toFixed(2)} Cr</div>
          <div class="sum-card-sub">${sPct}% of total outlay</div>
        </div>
      </div>
      <div class="sum-card-bar"><div class="sum-card-bar-fill" style="width:${sPct}%"></div></div>
    </div>
    <div class="sum-card animate-in" style="animation-delay:.16s">
      <div class="sum-card-inner">
        <div class="sum-card-icon nonskill"></div>
        <div class="sum-card-body">
          <div class="sum-card-label">Non-Skill Component</div>
          <div class="sum-card-value">₹${d.nonSkill.toFixed(2)} Cr</div>
          <div class="sum-card-sub">${nPct}% — infrastructure &amp; support</div>
        </div>
      </div>
      <div class="sum-card-bar" style="--fill:var(--gold)">
        <div class="sum-card-bar-fill" style="width:${nPct}%;background:linear-gradient(90deg,var(--gold),var(--gold-mid))"></div>
      </div>
    </div>
  `;
}

// ── Dept Chart ────────────────────────────────────────────
function renderDeptChart() {
  const depts = aggregateByDept(yearData.rows).slice(0, 10);
  if (deptChart) deptChart.destroy();
  deptChart = new Chart(document.getElementById('deptChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: depts.map(d => d.name.length > 22 ? d.name.slice(0, 22) + '…' : d.name),
      datasets: [
        { label: 'Skill', data: depts.map(d => d.skill), backgroundColor: '#0e5774', borderRadius: 4 },
        { label: 'Non-Skill', data: depts.map(d => d.nonSkill), backgroundColor: '#e8a020', borderRadius: 4 }
      ]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { font: { size: 11, family: 'Inter' }, padding: 12, usePointStyle: true } },
        tooltip: {
          backgroundColor: '#072e3e',
          callbacks: { label: c => ` ₹${c.parsed.x.toFixed(2)} Cr` }
        }
      },
      scales: {
        x: { stacked: true, grid: { color: 'rgba(14,87,116,0.07)' }, ticks: { callback: v => `₹${v}`, font: { size: 10, family: 'Inter' }, color: '#4a7a90' } },
        y: { stacked: true, grid: { display: false }, ticks: { font: { size: 10, family: 'Inter' }, color: '#1a3d50' } }
      }
    }
  });
}

// ── Split Doughnut Chart ──────────────────────────────────
function renderSplitChart() {
  if (splitChart) splitChart.destroy();
  splitChart = new Chart(document.getElementById('splitChart').getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Skill Development', 'Non-Skill Component'],
      datasets: [{
        data: [yearData.skill, yearData.nonSkill],
        backgroundColor: ['#0e5774', '#e8a020'],
        borderWidth: 3,
        borderColor: '#fff',
        hoverOffset: 10,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '60%',
      plugins: {
        legend: { position: 'bottom', labels: { font: { size: 12, family: 'Inter' }, padding: 16, usePointStyle: true } },
        tooltip: {
          backgroundColor: '#072e3e',
          callbacks: { label: c => ` ₹${c.parsed.toFixed(2)} Cr (${((c.parsed / yearData.total) * 100).toFixed(1)}%)` }
        }
      }
    }
  });
}

// ── Admin Dept Cards ──────────────────────────────────────
function renderAdminDepts() {
  const depts     = aggregateByDept(yearData.rows);
  const container = document.getElementById('adminView');
  container.innerHTML = '';

  depts.forEach((dept, i) => {
    const skillW = dept.total > 0 ? (dept.skill    / dept.total) * 100 : 0;
    const nonW   = dept.total > 0 ? (dept.nonSkill / dept.total) * 100 : 0;
    const card   = document.createElement('div');
    card.className = 'dept-card animate-in';
    card.style.animationDelay = `${i * 0.045}s`;
    card.innerHTML = `
      <div class="dept-card-name">${dept.name}</div>
      <div class="dept-card-total">₹${dept.total.toFixed(2)}</div>
      <div class="dept-card-total-label">Total Outlay (₹ Crores)</div>
      <div class="dept-card-bars">
        <div class="bar-row">
          <span class="bar-label">Skill</span>
          <div class="bar-track"><div class="bar-fill-skill" style="width:${skillW}%"></div></div>
          <span class="bar-val">₹${dept.skill.toFixed(1)}</span>
        </div>
        <div class="bar-row">
          <span class="bar-label">Non-Skill</span>
          <div class="bar-track"><div class="bar-fill-nonskill" style="width:${nonW}%"></div></div>
          <span class="bar-val">₹${dept.nonSkill.toFixed(1)}</span>
        </div>
      </div>
      <div class="dept-card-count">${dept.agencies.length} entr${dept.agencies.length !== 1 ? 'ies' : 'y'}</div>
    `;
    card.addEventListener('click', () => showAgencies(dept));
    container.appendChild(card);
  });
}

// ── Agency View ───────────────────────────────────────────
function showAgencies(dept) {
  document.getElementById('adminView').classList.add('hidden');
  const view = document.getElementById('agencyView');
  view.classList.remove('hidden');

  document.getElementById('breadcrumb').innerHTML = `
    <span class="bc-item" onclick="showAllDepts()">All Departments</span>
    <span class="bc-sep">›</span>
    <span class="bc-item active">${dept.name}</span>
  `;

  // Group by agency within this dept
  const agencyMap = {};
  dept.agencies.forEach(r => {
    const k = r.agency || r.adminDept;
    if (!agencyMap[k]) agencyMap[k] = { name: k, total: 0, skill: 0, nonSkill: 0, rows: [] };
    agencyMap[k].total    += safeNum(r.total);
    agencyMap[k].skill    += safeNum(r.skill);
    agencyMap[k].nonSkill += safeNum(r.nonSkill);
    agencyMap[k].rows.push(r);
  });

  const agencies = Object.values(agencyMap);

  view.innerHTML = `
    <div class="agency-header">
      <h4 class="agency-dept-title">${dept.name}</h4>
      <button class="btn-back" onclick="showAllDepts()">← All Departments</button>
    </div>
    <div class="agency-grid">
      ${agencies.map((ag, i) => {
        const funcSet   = [...new Set(ag.rows.map(r => r.functionality).filter(Boolean))];
        const funcClass = funcSet.includes('Core') ? 'func-core' : 'func-supportive';
        const activity  = ag.rows[0]?.activity || '';
        const safeAg    = JSON.stringify(ag).replace(/"/g, '&quot;');
        return `
          <div class="agency-card animate-in" style="animation-delay:${i * 0.05}s"
               onclick="openModal(JSON.parse(this.dataset.ag))" data-ag="${safeAg}">
            <div class="agency-name">${ag.name}</div>
            <span class="agency-functionality ${funcClass}">${funcSet.join(', ') || 'N/A'}</span>
            <div class="agency-total">₹${ag.total.toFixed(2)}</div>
            <div class="agency-total-label">Total Outlay (₹ Crores)</div>
            <div class="agency-skill-split">
              <span class="split-tag skill">Skill ₹${ag.skill.toFixed(2)} Cr</span>
              <span class="split-tag nonskill">Non-Skill ₹${ag.nonSkill.toFixed(2)} Cr</span>
            </div>
            <div class="agency-activity-preview">${activity}</div>
            <div class="view-detail-btn">View Details →</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function showAllDepts() {
  document.getElementById('agencyView').classList.add('hidden');
  document.getElementById('adminView').classList.remove('hidden');
  document.getElementById('breadcrumb').innerHTML = `<span class="bc-item active">All Departments</span>`;
}

// ── Modal ─────────────────────────────────────────────────
function openModal(ag) {
  const rows      = ag.rows;
  const funcSet   = [...new Set(rows.map(r => r.functionality).filter(Boolean))];
  const funcClass = funcSet.includes('Core') ? 'func-core' : 'func-supportive';
  const deptName  = rows[0]?.adminDept || '';

  let activitiesHtml = '';
  rows.forEach((r, i) => {
    if (r.activity) {
      activitiesHtml += `
        <div class="modal-section-title">${rows.length > 1 ? `Activity ${i+1}` : 'Activity'}</div>
        <div class="modal-activity">${r.activity}</div>
        ${r.explanation && r.explanation !== '-' ? `<div style="font-size:0.75rem;color:var(--text-500);margin-top:0.3rem;padding-left:0.5rem">Non-Skill Explanation: ${r.explanation}</div>` : ''}
      `;
    }
  });

  const hoaVals = [...new Set(rows.map(r => r.hoa).filter(Boolean))];
  const refVals = [...new Set(rows.map(r => r.reference).filter(Boolean))];

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-agency-name">${ag.name}</div>
    <div class="modal-dept-name">
      ${deptName} &nbsp;·&nbsp;
      <span class="agency-functionality ${funcClass}">${funcSet.join(', ') || 'N/A'}</span>
    </div>
    <div class="modal-stat-row">
      <div class="modal-stat">
        <div class="modal-stat-val">₹${ag.total.toFixed(2)}</div>
        <div class="modal-stat-label">Total (Cr)</div>
      </div>
      <div class="modal-stat">
        <div class="modal-stat-val" style="color:var(--green)">₹${ag.skill.toFixed(2)}</div>
        <div class="modal-stat-label">Skill Dev (Cr)</div>
      </div>
      <div class="modal-stat">
        <div class="modal-stat-val" style="color:var(--gold)">₹${ag.nonSkill.toFixed(2)}</div>
        <div class="modal-stat-label">Non-Skill (Cr)</div>
      </div>
    </div>
    ${activitiesHtml}
    ${(hoaVals.length || refVals.length) ? `
    <div class="modal-meta">
      ${hoaVals.length ? `<div class="modal-meta-row"><span class="modal-meta-key">Head of Account</span><span class="modal-meta-val">${hoaVals.join(' | ')}</span></div>` : ''}
      ${refVals.length ? `<div class="modal-meta-row"><span class="modal-meta-key">Reference</span><span class="modal-meta-val">${refVals.join(' | ')}</span></div>` : ''}
    </div>` : ''}
  `;

  document.getElementById('detailModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('detailModal').classList.add('hidden');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── Table ─────────────────────────────────────────────────
function renderTable(rows) {
  document.getElementById('tableBody').innerHTML = rows.map((r, i) => {
    const fStyle = r.functionality === 'Core'
      ? 'background:var(--kase-teal-xpale);color:var(--kase-teal-dark)'
      : 'background:var(--gold-light);color:#7a5000';
    const act = (r.activity || '');
    return `
      <tr onclick="openModalFromRow(${i})" title="Click to view details">
        <td>${r.slNo || ''}</td>
        <td><strong>${r.adminDept || ''}</strong></td>
        <td>${r.agency || ''}</td>
        <td><span class="table-func-badge" style="${fStyle}">${r.functionality || ''}</span></td>
        <td style="max-width:280px;font-size:0.76rem;color:var(--text-700)">${act.length > 110 ? act.slice(0, 110) + '…' : act}</td>
        <td><strong style="color:var(--kase-teal)">₹${safeNum(r.total).toFixed(2)}</strong></td>
        <td style="color:var(--green);font-weight:600">₹${safeNum(r.skill).toFixed(2)}</td>
        <td style="color:var(--gold);font-weight:600">₹${safeNum(r.nonSkill).toFixed(2)}</td>
        <td style="font-size:0.68rem;color:var(--text-500);font-family:monospace">${r.hoa || ''}</td>
      </tr>
    `;
  }).join('');
}

function openModalFromRow(idx) {
  const r = yearData.rows[idx];
  if (!r) return;
  openModal({ name: r.agency || r.adminDept, total: safeNum(r.total), skill: safeNum(r.skill), nonSkill: safeNum(r.nonSkill), rows: [r] });
}

function filterTable() {
  const q = document.getElementById('tableSearch').value.toLowerCase();
  const f = document.getElementById('functFilter').value;
  renderTable(yearData.rows.filter(r => {
    const textOk = !q || [r.adminDept, r.agency, r.activity].some(v => (v || '').toLowerCase().includes(q));
    const funcOk = !f || r.functionality === f;
    return textOk && funcOk;
  }));
}

document.addEventListener('DOMContentLoaded', init);
