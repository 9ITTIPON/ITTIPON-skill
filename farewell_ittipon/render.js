function renderFarewell(data) {
  // 1. Stats and Header
  const titleEl = document.querySelector('.py-title');
  if (titleEl) {
    const dagPart = data.stats.dag_id.replace('KRUNGSRI_', '');
    titleEl.innerHTML = `KRUNGSRI_<span class="dag">${dagPart}</span> <span class="highlight-farewell">FAREWELL</span>`;
  }
  
  const subEl = document.querySelector('.py-sub');
  if (subEl) {
    subEl.innerHTML = `
      dag_id: ${data.stats.dag_id} &nbsp;·&nbsp; status: <span style="color:var(--g)">${data.stats.status}</span><br>
      duration: ${data.stats.duration} &nbsp;·&nbsp; tasks: ${data.stats.tasks} &nbsp;·&nbsp; retries: ${data.stats.retries}
    `;
  }

  const statusRow = document.querySelector('.status-row');
  if (statusRow) {
    statusRow.innerHTML = `
      <span class="badge badge-ok">✓ ${data.stats.status.toUpperCase()}</span>
      <span class="badge badge-blue">⏱ ${data.stats.duration}</span>
      <span class="badge badge-v">Python ${data.stats.python_version}</span>
      <span class="badge badge-y">${data.stats.platform}</span>
    `;
  }

  // 2. Profile
  const pname = document.querySelector('.pname');
  if (pname) pname.textContent = data.profile.name;
  const prole = document.querySelector('.prole');
  if (prole) {
    prole.innerHTML = `
      <div style="margin-bottom:12px;">${data.profile.role}</div>
      <a href="${data.profile.linkedin}" target="_blank" 
         style="color:#000; background:var(--b); text-decoration:none; font-size:12px; font-weight:700; 
                padding:10px 20px; border-radius:6px; display:inline-block; 
                box-shadow:0 0 15px rgba(56,189,248,0.4); transition:all 0.3s ease;
                letter-spacing:1px; text-transform:uppercase;">
        LINKEDIN CONNECT ↗
      </a>
    `;
  }

  // 3. Python Block
  const pyBar = document.querySelector('.py-bar');
  if (pyBar) {
    pyBar.innerHTML = `<div class="py-fdot"></div>${data.farewell_script.title} &nbsp;·&nbsp; Python ${data.farewell_script.version} &nbsp;·&nbsp; ${data.farewell_script.location}`;
  }

  const pyCode = document.querySelector('.py-code');
  if (pyCode) {
    pyCode.innerHTML = data.farewell_script.code.map(line => {
      if (line.type === 'newline') return '<br>';
      return `<span class="${line.type === 'variable' ? 'v' : line.type === 'keyword' ? 'kw' : line.type === 'function' ? 'fn' : line.type === 'operator' ? 'op' : line.type === 'string' ? 's' : 'c'}">${line.text}</span>`;
    }).join('');
  }

  const pyOut = document.querySelector('.py-out');
  if (pyOut) {
    const outputHtml = data.farewell_script.output.map(line => `<div class="ok">${line}</div>`).join('');
    pyOut.innerHTML = `
      <div class="out-hd">OUTPUT</div>
      ${outputHtml}
      <div class="od">${data.farewell_script.footer}</div>
    `;
  }

  // 4. Pipeline Flow
  const pipeFlow = document.querySelector('.pipe-flow');
  if (pipeFlow) {
    pipeFlow.innerHTML = data.pipeline.map(node => `
      <div class="pipe-node ${node.status}">
        <div class="pipe-icon">${node.icon}${node.status === 'done' ? '<div class="pipe-tick">✓</div>' : ''}</div>
        <div class="pipe-label"><strong>${node.label}</strong>${node.sub}</div>
      </div>
    `).join('');
  }

  // 5. Timeline
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    timeline.innerHTML = data.timeline.map(item => `
      <div class="tl-item">
        <div class="tl-dot ${item.style}"></div>
        <div class="tl-body">
          <div class="tl-time">${item.title}</div>
          <div class="tl-text">${item.text}</div>
          <span class="tl-tag">${item.tag}</span>
        </div>
      </div>
    `).join('');
  }

  // 6. Success Box
  const sTitle = document.querySelector('.s-title');
  if (sTitle) sTitle.textContent = data.success.title;
  const sSub = document.querySelector('.s-sub');
  if (sSub) sSub.textContent = data.success.sub;

  // 7. Footer
  const foot = document.querySelector('.foot');
  if (foot) {
    foot.innerHTML = `
      <div>
        <strong>${data.footer.title}</strong>
        <span>${data.footer.sub}</span>
      </div>
      <div class="conn">
        <div class="conn-dot"></div>
        <span class="conn-txt">${data.footer.connection}</span>
      </div>
    `;
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  renderFarewell(FAREWELL_DATA);
});
