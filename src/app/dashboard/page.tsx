'use client';

import { useState, useEffect } from 'react';
import Icon from '../../components/ui/AppIcon';

interface Subject {
  n: string;
  d: string;
  i: string;
  c: string;
  link: string;
}

interface Tool {
  n: string;
  d: string;
  i: string;
  c: string;
  a: string;
}

interface DrugRow {
  n: string;
  g: string;
  d: string;
  form: string;
  r: string;
  f: string;
  dur: string;
  rem: string;
}

interface LabRow {
  n: string;
  v: string;
}

interface LabField {
  k: string;
  l: string;
  r: string;
}

interface LabSection {
  t: string;
  f: LabField[];
}

interface ProformaData {
  drugChart: DrugRow[];
  customLabs: LabRow[];
  name: string;
  age: string;
  gender: string;
  ip: string;
  doa: string;
  dod: string;
  consult: string;
  dept: string;
  cc: string;
  hopi: string;
  pmh: string;
  fh: string;
  allergy: string;
  diet: string;
  appetite: string;
  sleep: string;
  bowel: string;
  habit: string;
  exercise: string;
  ht: string;
  wt: string;
  bmi: string;
  bp: string;
  pr: string;
  rr: string;
  temp: string;
  spo2: string;
  prov_dx: string;
  final_dx: string;
  img_xray: string;
  img_ct: string;
  img_mri: string;
  img_usg: string;
  img_endo: string;
  img_other: string;
  prog: string;
  dis: string;
  counsel: string;
  [key: string]: any;
}
// This definition is required so the dashboard build doesn't crash
const SidebarItem = ({ icon, label, active, onClick, collapsed }: any) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group relative
        ${active ? 'bg-teal-50 text-teal-700 shadow-sm border border-teal-100' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
    >
      <Icon name={icon} size={20} className={`${active ? 'text-teal-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
      {!collapsed && <span className="font-semibold text-sm">{label}</span>}
    </button>
  );
};
const StudentDashboard = () => {
// --- AMBOSS SIDEBAR LOGIC ---
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeView, setActiveView] = useState<'dash' | 'curr' | 'form' | 'tool'>('dash');
  const [selectedYear, setSelectedYear] = useState('Year 1');
  const [searchQuery, setSearchQuery] = useState('');
  const [proformaData, setProformaData] = useState<ProformaData>({
    drugChart: [],
    customLabs: [],
    name: '',
    age: '',
    gender: '',
    ip: '',
    doa: '',
    dod: '',
    consult: '',
    dept: '',
    cc: '',
    hopi: '',
    pmh: '',
    fh: '',
    allergy: '',
    diet: '',
    appetite: '',
    sleep: '',
    bowel: '',
    habit: '',
    exercise: '',
    ht: '',
    wt: '',
    bmi: '',
    bp: '',
    pr: '',
    rr: '',
    temp: '',
    spo2: '',
    prov_dx: '',
    final_dx: '',
    img_xray: '',
    img_ct: '',
    img_mri: '',
    img_usg: '',
    img_endo: '',
    img_other: '',
    prog: '',
    dis: '',
    counsel: ''
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('pharmaverse_app_data');
    if (saved) {
      try {
        setProformaData(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load saved data');
      }
    }
  }, []);

  // Save data to localStorage
  const saveData = () => {
    localStorage.setItem('pharmaverse_app_data', JSON.stringify(proformaData));
  };

  // Update proforma field
  const updateField = (key: string, value: string) => {
    setProformaData(prev => ({ ...prev, [key]: value }));
  };

  // Save on data change
  useEffect(() => {
    saveData();
  }, [proformaData]);

  // Add drug row
  const addDrugRow = () => {
    setProformaData(prev => ({
      ...prev,
      drugChart: [...prev.drugChart, { n: '', g: '', d: '', form: '', r: '', f: '', dur: '', rem: '' }]
    }));
  };

  // Update drug row
  const updateDrugRow = (index: number, key: string, value: string) => {
    setProformaData(prev => {
      const newChart = [...prev.drugChart];
      newChart[index] = { ...newChart[index], [key]: value };
      return { ...prev, drugChart: newChart };
    });
  };

  // Delete drug row
  const deleteDrugRow = (index: number) => {
    setProformaData(prev => ({
      ...prev,
      drugChart: prev.drugChart.filter((_, i) => i !== index)
    }));
  };

  // Add lab row
  const addLabRow = () => {
    setProformaData(prev => ({
      ...prev,
      customLabs: [...prev.customLabs, { n: '', v: '' }]
    }));
  };

  // Update lab row
  const updateLabRow = (index: number, key: string, value: string) => {
    setProformaData(prev => {
      const newLabs = [...prev.customLabs];
      newLabs[index] = { ...newLabs[index], [key]: value };
      return { ...prev, customLabs: newLabs };
    });
  };

  // Delete lab row
  const deleteLabRow = (index: number) => {
    setProformaData(prev => ({
      ...prev,
      customLabs: prev.customLabs.filter((_, i) => i !== index)
    }));
  };

  // Clear all data
  const clearForm = () => {
    if (confirm('Are you sure you want to clear all patient data?')) {
      const emptyData: ProformaData = {
        drugChart: [],
        customLabs: [],
        name: '',
        age: '',
        gender: '',
        ip: '',
        doa: '',
        dod: '',
        consult: '',
        dept: '',
        cc: '',
        hopi: '',
        pmh: '',
        fh: '',
        allergy: '',
        diet: '',
        appetite: '',
        sleep: '',
        bowel: '',
        habit: '',
        exercise: '',
        ht: '',
        wt: '',
        bmi: '',
        bp: '',
        pr: '',
        rr: '',
        temp: '',
        spo2: '',
        prov_dx: '',
        final_dx: '',
        img_xray: '',
        img_ct: '',
        img_mri: '',
        img_usg: '',
        img_endo: '',
        img_other: '',
        prog: '',
        dis: '',
        counsel: ''
      };
      setProformaData(emptyData);
    }
  };

  // Download backup
  const downloadData = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(proformaData));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', 'pharmaverse_case_backup.json');
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  // Print PDF
  const printPDF = () => {
    const w = window.open();
    if (!w) return;

    const txt = (val: string) => val ? val.replace(/\n/g, '<br>') : '-';

    let labsHTML = '';
    LAB_SCHEMA.forEach(sec => {
      let fields = sec.f.map(f => `<div class="l-row"><div class="l-cell l-p">${f.l}</div><div class="l-cell l-o">${proformaData[f.k] || '-'}</div><div class="l-cell l-r">${f.r}</div></div>`).join('');
      labsHTML += `<div class="l-box"><h5>${sec.t}</h5><div class="l-header"><div class="l-cell">Param</div><div class="l-cell">Observed</div><div class="l-cell">Ref</div></div>${fields}</div>`;
    });

    if (proformaData.customLabs.length > 0) {
      let customFields = proformaData.customLabs.map(l => `<div class="l-row"><div class="l-cell l-p">${l.n}</div><div class="l-cell l-o">${l.v}</div><div class="l-cell l-r">-</div></div>`).join('');
      labsHTML += `<div class="l-box"><h5>OTHER INVESTIGATIONS</h5><div class="l-header"><div class="l-cell">Test</div><div class="l-cell">Result</div><div class="l-cell">Ref</div></div>${customFields}</div>`;
    }

    const medRows = proformaData.drugChart.length ? proformaData.drugChart.map((d, i) => `<tr><td>${i + 1}</td><td><b>${d.n}</b><br><span style="font-size:9px">${d.g}</span></td><td>${d.d}<br>${d.r}</td><td>${d.f}</td><td>${d.dur}</td><td><div class="box-day"></div></td><td><div class="box-day"></div></td><td><div class="box-day"></div></td><td><div class="box-day"></div></td><td><div class="box-day"></div></td><td><div class="box-day"></div></td><td><div class="box-day"></div></td></tr>`).join('') : '<tr><td colspan="12" style="text-align:center;">No Meds</td></tr>';

    const htmlContent = `<html><head><title>PHARM-D CASE SHEET</title><style>
      body { font-family: 'Times New Roman', serif; padding: 20px; max-width: 900px; margin: 0 auto; color: #000; font-size:12px; }
      h1 { text-align: center; font-size: 18px; text-decoration: underline; margin-bottom: 5px; font-weight:bold; }
      h2 { font-size: 14px; background: #eee; padding: 4px; border-bottom: 1px solid #000; margin-top: 15px; margin-bottom: 8px; text-transform:uppercase; font-weight:bold;}
      .row { display: flex; flex-wrap: wrap; margin-bottom: 4px; }
      .col { flex: 1; padding-right: 10px; }
      .lbl { font-weight: bold; margin-right: 5px; }
      .lab-container { display: flex; flex-wrap: wrap; gap: 15px; }
      .l-box { width: 48%; border: 1px solid #000; margin-bottom: 10px; page-break-inside: avoid; }
      .l-box h5 { margin: 0; background: #ddd; text-align: center; font-size:11px; padding:2px; border-bottom:1px solid #000; }
      .l-header { display: flex; font-weight:bold; border-bottom:1px solid #000; background:#f9f9f9; font-size:10px; }
      .l-row { display: flex; border-bottom: 1px dotted #ccc; font-size:11px; }
      .l-cell { flex:1; padding:2px; border-right:1px solid #eee; text-align:center; }
      .l-p { text-align:left; font-weight:bold; flex:1.5; }
      .l-o { font-weight:bold; color:blue; }
      table { width: 100%; border-collapse: collapse; margin-top: 5px; font-size: 11px; }
      th { border: 1px solid #000; background: #eee; padding: 4px; text-align: center; }
      td { border: 1px solid #000; padding: 4px; text-align: center; vertical-align:middle; }
      .box-day { width:12px; height:12px; border:1px solid #000; margin:0 auto; }
      .text-box { border: 1px solid #ccc; padding: 5px; min-height: 30px; margin-bottom: 5px; background:#fdfdfd; white-space: pre-wrap; }
      .footer { margin-top: 30px; border-top: 1px solid #000; padding-top: 10px; display: flex; justify-content: space-between; font-weight: bold; }
    </style></head><body>
      <div style="text-align:center; font-weight:bold; font-size:22px; margin-bottom:5px;">PHARM.D PATIENT PROFILE</div>
      <div style="text-align:center; font-size:12px; margin-bottom:20px;">Department of Pharmacy Practice</div>
      <div style="border: 1px solid #000; padding: 8px;">
        <div class="row"><div class="col"><span class="lbl">Name:</span> ${proformaData.name}</div><div class="col"><span class="lbl">Age/Sex:</span> ${proformaData.age} / ${proformaData.gender}</div><div class="col"><span class="lbl">IP No:</span> ${proformaData.ip}</div></div>
        <div class="row"><div class="col"><span class="lbl">DOA:</span> ${proformaData.doa}</div><div class="col"><span class="lbl">DOD:</span> ${proformaData.dod}</div><div class="col"><span class="lbl">Unit:</span> ${proformaData.dept}</div></div>
      </div>
      <h2>Clinical History</h2>
      <div class="row"><div class="lbl">CHIEF COMPLAINTS:</div></div> <div class="text-box">${txt(proformaData.cc)}</div>
      <div class="row"><div class="lbl">HOPI:</div></div> <div class="text-box">${txt(proformaData.hopi)}</div>
      <div class="row"><div class="col"><span class="lbl">PAST MEDICAL HISTORY:</span><div class="text-box">${txt(proformaData.pmh)}</div></div><div class="col"><span class="lbl">FAMILY HISTORY:</span><div class="text-box">${txt(proformaData.fh)}</div></div></div>
      <div class="row"><span class="lbl">ALLERGIES:</span> ${proformaData.allergy || 'Nil'}</div>
      <h2>Vitals & General Exam</h2>
      <div class="row" style="border:1px solid #000; padding:5px; background:#f0f0f0;">
        <div class="col">BP: <b>${proformaData.bp}</b></div><div class="col">PR: <b>${proformaData.pr}</b></div><div class="col">RR: <b>${proformaData.rr}</b></div><div class="col">Temp: <b>${proformaData.temp}</b></div><div class="col">Wt: <b>${proformaData.wt}</b></div>
      </div>
      <h2>Laboratory Investigations</h2>
      <div class="lab-container">${labsHTML}</div>
      <h2>Other Investigations</h2>
      <div class="row"><div class="col">X-RAY: ${proformaData.img_xray || '-'}</div> <div class="col">CT: ${proformaData.img_ct || '-'}</div></div>
      <div class="row"><div class="col">MRI: ${proformaData.img_mri || '-'}</div> <div class="col">USG: ${proformaData.img_usg || '-'}</div> <div class="col">Others: ${proformaData.img_other || '-'}</div></div>
      <h2>Diagnosis</h2>
      <div class="text-box" style="font-weight:bold; font-size:14px;">${txt(proformaData.final_dx)}</div>
      <h2>Medication Chart</h2>
      <table><thead><tr><th width="3%">#</th><th width="30%">Drug Name</th><th width="10%">Dose/Rt</th><th width="8%">Freq</th><th width="8%">Dur</th><th>D1</th><th>D2</th><th>D3</th><th>D4</th><th>D5</th><th>D6</th><th>D7</th></tr></thead><tbody>${medRows}</tbody></table>
      <h2>Discharge & Counseling</h2>
      <div class="row"><div class="lbl">DISCHARGE PLAN:</div></div> <div class="text-box">${txt(proformaData.dis)}</div>
      <div class="row"><div class="lbl">PATIENT COUNSELING:</div></div> <div class="text-box">${txt(proformaData.counsel)}</div>
      <div class="footer"><div>Date: ${new Date().toLocaleDateString()}</div><div>Signature: __________________________</div></div>
      <script>window.print()<\/script></body></html>`;

    w.document.write(htmlContent);
    w.document.close();
  };

  // Curriculum data
  const CURRICULUM: Record<string, Subject[]> = {
    'Year 1': [
      { n: 'Human Anatomy', d: 'Organ systems', i: 'UserIcon', c: 'bg-teal-100 text-teal-700', link: '#' },
      { n: 'Pharmaceutics', d: 'Dosage forms', i: 'BeakerIcon', c: 'bg-blue-100 text-blue-700', link: '#' },
      { n: 'Medicinal Biochemistry', d: 'Metabolism', i: 'CircleStackIcon', c: 'bg-purple-100 text-purple-700', link: '#' },
      { n: 'Pharm. Organic Chem', d: 'Reactions', i: 'BeakerIcon', c: 'bg-orange-100 text-orange-700', link: '#' },
      { n: 'Pharm. Inorganic Chem', d: 'Impurities', i: 'SparklesIcon', c: 'bg-gray-100 text-gray-700', link: '#' },
      { n: 'Remedial Math/Bio', d: 'Foundation', i: 'CalculatorIcon', c: 'bg-teal-100 text-teal-700', link: '#' }
    ],
    'Year 2': [
      { n: 'Pathophysiology', d: 'Disease Etiology', i: 'MagnifyingGlassIcon', c: 'bg-orange-100 text-orange-700', link: '#' },
      { n: 'Pharm. Microbiology', d: 'Immunity', i: 'BugAntIcon', c: 'bg-teal-100 text-teal-700', link: '#' },
      { n: 'Pharmacognosy', d: 'Plant Drugs', i: 'SparklesIcon', c: 'bg-teal-100 text-teal-700', link: '#' },
      { n: 'Pharmacology-I', d: 'General & ANS', i: 'BeakerIcon', c: 'bg-blue-100 text-blue-700', link: '#' },
      { n: 'Community Pharmacy', d: 'Counseling', i: 'UsersIcon', c: 'bg-purple-100 text-purple-700', link: '#' },
      { n: 'Pharmacotherapeutics-I', d: 'CVS, Resp', i: 'HeartIcon', c: 'bg-orange-100 text-orange-700', link: '#' }
    ],
    'Year 3': [
      { n: 'Pharmacology-II', d: 'CNS, Autocoids', i: 'BeakerIcon', c: 'bg-purple-100 text-purple-700', link: '#' },
      { n: 'Pharm. Analysis', d: 'Spectroscopy', i: 'EyeIcon', c: 'bg-blue-100 text-blue-700', link: '#' },
      { n: 'Pharmacotherapeutics-II', d: 'Infectious', i: 'HeartIcon', c: 'bg-teal-100 text-teal-700', link: '#' },
      { n: 'Pharm. Jurisprudence', d: 'Laws', i: 'ScaleIcon', c: 'bg-gray-100 text-gray-700', link: '#' },
      { n: 'Medicinal Chemistry', d: 'SAR', i: 'SparklesIcon', c: 'bg-orange-100 text-orange-700', link: '#' },
      { n: 'Pharm. Formulations', d: 'Tablets', i: 'Squares2X2Icon', c: 'bg-blue-100 text-blue-700', link: '#' }
    ],
    'Year 4': [
      { n: 'Pharmacotherapeutics-III', d: 'GI, Renal', i: 'ChartBarIcon', c: 'bg-orange-100 text-orange-700', link: '#' },
      { n: 'Hospital Pharmacy', d: 'Inventory', i: 'BuildingOffice2Icon', c: 'bg-blue-100 text-blue-700', link: '#' },
      { n: 'Clinical Pharmacy', d: 'Ward Rounds', i: 'ClipboardDocumentListIcon', c: 'bg-teal-100 text-teal-700', link: '#' },
      { n: 'Biostatistics', d: 'Research', i: 'ChartBarIcon', c: 'bg-purple-100 text-purple-700', link: '#' },
      { n: 'Biopharmaceutics', d: 'ADME', i: 'ClockIcon', c: 'bg-orange-100 text-orange-700', link: '#' },
      { n: 'Toxicology', d: 'Poison', i: 'ExclamationTriangleIcon', c: 'bg-gray-100 text-gray-700', link: '#' }
    ],
    'Year 5': [
      { n: 'Clinical Research', d: 'Protocols', i: 'DocumentMagnifyingGlassIcon', c: 'bg-blue-100 text-blue-700', link: '#' },
      { n: 'Pharmacoepidemiology', d: 'Pop Study', i: 'GlobeAltIcon', c: 'bg-teal-100 text-teal-700', link: '#' },
      { n: 'Pharmacoeconomics', d: 'Cost-Benefit', i: 'CurrencyDollarIcon', c: 'bg-orange-100 text-orange-700', link: '#' },
      { n: 'Clerkship', d: 'Logbook', i: 'ClipboardDocumentCheckIcon', c: 'bg-purple-100 text-purple-700', link: '#' },
      { n: 'Project Work', d: 'Thesis', i: 'PresentationChartLineIcon', c: 'bg-blue-100 text-blue-700', link: '#' }
    ],
    'Year 6': [
      { n: 'Internship (General)', d: '6 Months', i: 'HeartIcon', c: 'bg-orange-100 text-orange-700', link: '#' },
      { n: 'Internship (Specialty)', d: 'Specialties', i: 'HeartIcon', c: 'bg-teal-100 text-teal-700', link: '#' },
      { n: 'Grand Rounds', d: 'Cases', i: 'UsersIcon', c: 'bg-blue-100 text-blue-700', link: '#' }
    ]
  };

  // Tools data
  const TOOLS: Tool[] = [
    { n: 'Proforma Builder', d: 'Full case generator.', i: 'ClipboardDocumentListIcon', c: 'bg-teal-100 text-teal-700', a: 'form' },
    { n: 'Interaction Checker', d: 'Drug conflicts.', i: 'ShieldExclamationIcon', c: 'bg-orange-100 text-orange-700', a: 'https://pharmaverse.rf.gd/drug-interaction-checker-2/' },
    { n: 'Calculators', d: 'BMI, CrCl, eGFR.', i: 'CalculatorIcon', c: 'bg-teal-100 text-teal-700', a: 'https://pharmaverse.rf.gd/calculators-2/' },
    { n: 'Lab Reference', d: 'Standard ranges.', i: 'MagnifyingGlassIcon', c: 'bg-blue-100 text-blue-700', a: 'https://pharmaverse.rf.gd/lab-refereces/' },
    { n: 'Drug Index', d: 'Brands & Doses.', i: 'BookOpenIcon', c: 'bg-purple-100 text-purple-700', a: 'https://pharmaverse.rf.gd/drug-references-2/' },
    { n: 'Poison Info', d: 'Antidotes.', i: 'ExclamationTriangleIcon', c: 'bg-orange-100 text-orange-700', a: 'https://pharmaverse.rf.gd/iv-compatibility/' },
    { n: 'Abbreviations', d: 'Medical Dict.', i: 'DocumentTextIcon', c: 'bg-blue-100 text-blue-700', a: 'https://pharmaverse.rf.gd/abbreviations/' }
  ];

  // Lab schema
  const LAB_SCHEMA: LabSection[] = [
    {
      t: 'Complete Blood Picture (CBP)',
      f: [
        { k: 'hb', l: 'Hb %', r: '11-16(F)/13-18(M)' },
        { k: 'rbc', l: 'RBC Count', r: '3.8-5.5 Mil' },
        { k: 'wbc', l: 'WBC Count', r: '4000-11000' },
        { k: 'plt', l: 'Platelets', r: '1.5-4.5 Lakh' },
        { k: 'pcv', l: 'PCV', r: '35-50%' },
        { k: 'mcv', l: 'MCV', r: '80-96 fL' },
        { k: 'mch', l: 'MCH', r: '27-33 pg' },
        { k: 'mchc', l: 'MCHC', r: '33-36 g/dL' },
        { k: 'esr', l: 'ESR', r: '0-20 mm/hr' },
        { k: 'crp', l: 'C-RP', r: '< 10 mg/L' }
      ]
    },
    {
      t: 'Differential Count',
      f: [
        { k: 'neut', l: 'Neutrophils', r: '40-75%' },
        { k: 'lymph', l: 'Lymphocytes', r: '20-45%' },
        { k: 'mono', l: 'Monocytes', r: '2-10%' },
        { k: 'eos', l: 'Eosinophils', r: '1-6%' },
        { k: 'baso', l: 'Basophils', r: '0-1%' }
      ]
    },
    {
      t: 'Electrolytes',
      f: [
        { k: 'na', l: 'Sodium', r: '135-145 mEq/L' },
        { k: 'k', l: 'Potassium', r: '3.5-5.0 mEq/L' },
        { k: 'cl', l: 'Chloride', r: '95-105 mEq/L' },
        { k: 'ca', l: 'Calcium', r: '8.5-10.5 mg/dL' },
        { k: 'phos', l: 'Phosphorous', r: '2.5-4.5 mg/dL' }
      ]
    },
    {
      t: 'Renal Function (RFT)',
      f: [
        { k: 'gfr', l: 'GFR', r: '> 90 mL/min' },
        { k: 'scr', l: 'Creatinine', r: '0.6-1.2 mg/dL' },
        { k: 'urea', l: 'Urea', r: '15-45 mg/dL' },
        { k: 'bun', l: 'BUN', r: '7-20 mg/dL' }
      ]
    },
    {
      t: 'Liver Function (LFT)',
      f: [
        { k: 'tbili', l: 'Tot Bilirubin', r: '0.1-1.2' },
        { k: 'dbili', l: 'Direct Bili', r: '0-0.3' },
        { k: 'sgpt', l: 'SGPT (ALT)', r: '7-56 U/L' },
        { k: 'sgot', l: 'SGOT (AST)', r: '5-40 U/L' },
        { k: 'alp', l: 'Alk Phos', r: '44-147 U/L' },
        { k: 'tp', l: 'Total Protein', r: '6-8.3 g/dL' },
        { k: 'alb', l: 'Albumin', r: '3.5-5.5 g/dL' }
      ]
    },
    {
      t: 'Thyroid & Urine',
      f: [
        { k: 'tsh', l: 'TSH', r: '0.4-4 mIU/L' },
        { k: 't3', l: 'T3', r: '80-200 ng/dL' },
        { k: 't4', l: 'T4', r: '5-12 ug/dL' },
        { k: 'upro', l: 'Urine Pro', r: 'Negative' },
        { k: 'usug', l: 'Urine Sugar', r: 'Negative' }
      ]
    }
  ];

  // Handle tool click
  const handleToolClick = (action: string) => {
    if (action === 'form') {
      setActiveView('form');
    } else {
      window.open(action, '_blank');
    }
  };

  // Render dashboard
  const renderDashboard = () => {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';

    return (
      <div className="max-w-6xl mx-auto animate-fade-in">
        {/* Hero Banner */}
        <div className="relative bg-gradient-to-r from-primary to-teal-600 rounded-3xl p-12 text-white shadow-xl mb-8 overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">{greeting}, Pharmacist.</h1>
            <p className="text-teal-100 text-lg mb-8">Complete 6-Year Curriculum, Full Proforma, and Tools.</p>
            <button
              onClick={() => setActiveView('curr')}
              className="bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-teal-50 shadow-lg transition-all"
            >
              Browse Curriculum
            </button>
          </div>
        </div>

        {/* Academic Resources */}
        <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-3">Academic Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <a
            href="https://drive.google.com/file/d/1oZzA5aD7MzrlRC56qkWwE6ehXiK1pbeP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-orange-50 border border-orange-200 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
              <Icon name="DocumentTextIcon" size={24} variant="outline" />
            </div>
            <div className="font-bold text-gray-700 text-sm uppercase tracking-wide">Pharm-D Regulations</div>
          </a>
          <a
            href="https://sassy-thursday-f37.notion.site/PHARM-D-SYLLABUS-24c6c8a49f00816a8e3bc34ff79e7c06"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-purple-50 border border-purple-200 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
              <Icon name="BookOpenIcon" size={24} variant="outline" />
            </div>
            <div className="font-bold text-gray-700 text-sm uppercase tracking-wide">Pharm-D Syllabus</div>
          </a>
        </div>

        {/* Quick Access Tools */}
        <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-5">Quick Access</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOLS.slice(0, 4).map((tool, index) => (
            <div
              key={index}
              onClick={() => handleToolClick(tool.a)}
              className="bg-white border border-border rounded-2xl p-6 cursor-pointer transition-all hover:-translate-y-2 hover:shadow-xl hover:border-teal-300"
            >
              <div className={`w-14 h-14 ${tool.c} rounded-xl flex items-center justify-center mb-4 transition-transform hover:scale-110 hover:rotate-12`}>
                <Icon name={tool.i as any} size={28} variant="outline" />
              </div>
              <h4 className="font-bold text-lg mb-1">{tool.n}</h4>
              <p className="text-xs text-textSecondary">{tool.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render curriculum
  const renderCurriculum = () => {
    const years = Object.keys(CURRICULUM);

    return (
      <div className="max-w-6xl mx-auto animate-fade-in">
        <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
        
        {/* Year Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-5 py-2 rounded-full text-sm font-bold border transition whitespace-nowrap ${
                year === selectedYear
                  ? 'bg-primary text-white shadow'
                  : 'bg-white text-gray-500 hover:border-teal-400'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRICULUM[selectedYear].map((subject, index) => (
            <div
              key={index}
              onClick={() => window.open(subject.link, '_blank')}
              className="bg-white border border-border rounded-2xl p-6 cursor-pointer transition-all hover:-translate-y-2 hover:shadow-xl hover:border-teal-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-14 h-14 ${subject.c} rounded-xl flex items-center justify-center mb-4 transition-transform hover:scale-110 hover:rotate-12`}>
                <Icon name={subject.i as any} size={28} variant="outline" />
              </div>
              <h4 className="font-bold text-lg mb-1">{subject.n}</h4>
              <p className="text-xs text-textSecondary">{subject.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render tools
  const renderTools = () => {
    return (
      <div className="max-w-6xl mx-auto animate-fade-in">
        <h2 className="text-2xl font-bold mb-6">Clinical Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS.map((tool, index) => (
            <div
              key={index}
              onClick={() => handleToolClick(tool.a)}
              className="bg-white border border-border rounded-2xl p-6 cursor-pointer transition-all hover:-translate-y-2 hover:shadow-xl hover:border-teal-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-14 h-14 ${tool.c} rounded-xl flex items-center justify-center mb-4 transition-transform hover:scale-110 hover:rotate-12`}>
                <Icon name={tool.i as any} size={28} variant="outline" />
              </div>
              <h4 className="font-bold text-lg mb-1">{tool.n}</h4>
              <p className="text-xs text-textSecondary">{tool.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render proforma
  const renderProforma = () => {
    return (
      <div className="max-w-5xl mx-auto animate-fade-in">
        {/* Toolbar */}
        <div className="flex justify-between items-center mb-6 bg-white p-4 sticky top-20 z-30 shadow-sm border rounded-xl">
          <h2 className="text-xl font-bold text-primary flex items-center gap-2">
            <Icon name="DocumentTextIcon" size={24} variant="outline" />
            Patient Proforma
          </h2>
          <div className="flex gap-2">
            <button
              onClick={clearForm}
              className="text-red-500 border border-red-500 p-2 rounded hover:bg-red-50 transition-all"
              title="Clear Data"
            >
              <Icon name="ArrowPathIcon" size={20} variant="outline" />
            </button>
            <button
              onClick={printPDF}
              className="bg-primary text-white px-4 py-2 rounded font-bold hover:bg-primary/90 shadow transition-all"
            >
              Print Case Sheet
            </button>
          </div>
        </div>

        {/* Patient Profile */}
        <div className="bg-white rounded-xl border border-border p-6 mb-6">
          <h4 className="text-sm font-bold text-primary border-b pb-2 mb-4 uppercase">I. Patient Profile</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="col-span-2">
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Name</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.name}
                onChange={(e) => updateField('name', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Age</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.age}
                onChange={(e) => updateField('age', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Gender</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.gender}
                onChange={(e) => updateField('gender', e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">IP No.</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.ip}
                onChange={(e) => updateField('ip', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">DOA</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.doa}
                onChange={(e) => updateField('doa', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">DOD</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.dod}
                onChange={(e) => updateField('dod', e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Consultant</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.consult}
                onChange={(e) => updateField('consult', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Department</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.dept}
                onChange={(e) => updateField('dept', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Clinical History */}
        <div className="bg-white rounded-xl border border-border p-6 mb-6">
          <h4 className="text-sm font-bold text-primary border-b pb-2 mb-4 uppercase">II. Clinical History</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Chief Complaints</label>
              <textarea
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary h-16"
                value={proformaData.cc}
                onChange={(e) => updateField('cc', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">HOPI</label>
              <textarea
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary h-16"
                value={proformaData.hopi}
                onChange={(e) => updateField('hopi', e.target.value)}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Past History</label>
                <textarea
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary h-16"
                  value={proformaData.pmh}
                  onChange={(e) => updateField('pmh', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Family History</label>
                <textarea
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary h-16"
                  value={proformaData.fh}
                  onChange={(e) => updateField('fh', e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Allergies (Food/Drug)</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.allergy}
                onChange={(e) => updateField('allergy', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Personal History & Vitals */}
        <div className="bg-white rounded-xl border border-border p-6 mb-6">
          <h4 className="text-sm font-bold text-primary border-b pb-2 mb-4 uppercase">III. Personal History & Vitals</h4>
          <div className="text-xs font-bold text-primary mb-2">History</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Diet</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.diet}
                onChange={(e) => updateField('diet', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Appetite</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.appetite}
                onChange={(e) => updateField('appetite', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Sleep</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.sleep}
                onChange={(e) => updateField('sleep', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Bowel/Bladder</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.bowel}
                onChange={(e) => updateField('bowel', e.target.value)}
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Habits</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.habit}
                onChange={(e) => updateField('habit', e.target.value)}
              />
            </div>
          </div>
          <div className="text-xs font-bold text-primary mb-2">Vitals</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">BP (mmHg)</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.bp}
                onChange={(e) => updateField('bp', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Pulse (bpm)</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.pr}
                onChange={(e) => updateField('pr', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Resp (rate)</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.rr}
                onChange={(e) => updateField('rr', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Temp (F)</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.temp}
                onChange={(e) => updateField('temp', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Wt/Ht</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.wt}
                onChange={(e) => updateField('wt', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Diagnosis */}
        <div className="bg-white rounded-xl border border-border p-6 mb-6">
          <h4 className="text-sm font-bold text-primary border-b pb-2 mb-4 uppercase">IV. Diagnosis</h4>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Final Diagnosis</label>
          <textarea
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary h-12"
            value={proformaData.final_dx}
            onChange={(e) => updateField('final_dx', e.target.value)}
          />
        </div>

        {/* Lab Investigations */}
        {LAB_SCHEMA.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white rounded-xl border border-border p-6 mb-6">
            <h4 className="text-sm font-bold text-primary border-b pb-2 mb-4 uppercase">{section.t}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {section.f.map((field, fieldIndex) => (
                <div key={fieldIndex}>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                    {field.l} <span className="text-gray-400 font-normal text-[10px]">({field.r})</span>
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    value={proformaData[field.k] || ''}
                    onChange={(e) => updateField(field.k, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Additional Lab Tests */}
        <div className="bg-slate-50 rounded-xl border border-dashed border-slate-300 p-6 mb-6">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h4 className="text-sm font-bold text-primary uppercase">Additional Lab Tests</h4>
            <button
              onClick={addLabRow}
              className="text-xs bg-white text-primary px-3 py-1 rounded border border-teal-200 hover:bg-teal-50 transition-all"
            >
              + Add Test
            </button>
          </div>
          <div className="space-y-2">
            {proformaData.customLabs.map((lab, index) => (
              <div key={index} className="flex gap-2 items-end">
                <div className="flex-1">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Test</label>
                  <input
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Test Name"
                    value={lab.n}
                    onChange={(e) => updateLabRow(index, 'n', e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Result</label>
                  <input
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Value"
                    value={lab.v}
                    onChange={(e) => updateLabRow(index, 'v', e.target.value)}
                  />
                </div>
                <button
                  onClick={() => deleteLabRow(index)}
                  className="text-red-500 p-2 mb-2 hover:bg-red-50 rounded transition-all"
                >
                  <Icon name="XMarkIcon" size={16} variant="outline" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Imaging & Diagnostics */}
        <div className="bg-white rounded-xl border border-border p-6 mb-6">
          <h4 className="text-sm font-bold text-primary border-b pb-2 mb-4 uppercase">VI. Imaging & Diagnostics</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">X-Ray</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.img_xray}
                onChange={(e) => updateField('img_xray', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">CT Scan</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.img_ct}
                onChange={(e) => updateField('img_ct', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">MRI</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.img_mri}
                onChange={(e) => updateField('img_mri', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">USG</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.img_usg}
                onChange={(e) => updateField('img_usg', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Other</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={proformaData.img_other}
                onChange={(e) => updateField('img_other', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Drug Chart */}
        <div className="bg-white rounded-xl border border-border p-6 mb-6">
          <h4 className="text-sm font-bold text-primary border-b pb-2 mb-4 uppercase">Drug Chart</h4>
          <div className="flex justify-between mb-2">
            <span className="text-xs text-gray-500 font-bold">Details (Brand/Gen, Dose, Rt, Freq, Dur)</span>
            <button
              onClick={addDrugRow}
              className="text-xs bg-primary text-white px-3 py-1 rounded hover:bg-primary/90 transition-all"
            >
              + Add Drug
            </button>
          </div>
          <div className="space-y-3">
            {proformaData.drugChart.map((drug, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-2 bg-gray-50 p-2 rounded border shadow-sm">
                <div className="flex gap-2 w-full">
                  <input
                    className="w-1/2 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Brand Name"
                    value={drug.n}
                    onChange={(e) => updateDrugRow(index, 'n', e.target.value)}
                  />
                  <input
                    className="w-1/2 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Generic Name"
                    value={drug.g}
                    onChange={(e) => updateDrugRow(index, 'g', e.target.value)}
                  />
                </div>
                <div className="flex gap-2 w-full">
                  <input
                    className="w-1/5 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Dose"
                    value={drug.d}
                    onChange={(e) => updateDrugRow(index, 'd', e.target.value)}
                  />
                  <input
                    className="w-1/5 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Form"
                    value={drug.form}
                    onChange={(e) => updateDrugRow(index, 'form', e.target.value)}
                  />
                  <input
                    className="w-1/5 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Route"
                    value={drug.r}
                    onChange={(e) => updateDrugRow(index, 'r', e.target.value)}
                  />
                  <input
                    className="w-1/5 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Freq"
                    value={drug.f}
                    onChange={(e) => updateDrugRow(index, 'f', e.target.value)}
                  />
                  <input
                    className="w-1/5 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Dur/Days"
                    value={drug.dur}
                    onChange={(e) => updateDrugRow(index, 'dur', e.target.value)}
                  />
                </div>
                <input
                  className="w-full md:w-1/3 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Remarks"
                  value={drug.rem}
                  onChange={(e) => updateDrugRow(index, 'rem', e.target.value)}
                />
                <button
                  onClick={() => deleteDrugRow(index)}
                  className="text-red-500 w-full md:w-auto flex justify-center items-center hover:bg-red-50 rounded transition-all p-2"
                >
                  <Icon name="XMarkIcon" size={16} variant="outline" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Progress & Discharge */}
        <div className="bg-white rounded-xl border border-border p-6 mb-6">
          <h4 className="text-sm font-bold text-primary border-b pb-2 mb-4 uppercase">Progress & Discharge</h4>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Progress Notes</label>
          <textarea
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary h-24 mb-4"
            value={proformaData.prog}
            onChange={(e) => updateField('prog', e.target.value)}
          />
          <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Discharge Meds</label>
          <textarea
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary h-24 mb-4"
            value={proformaData.dis}
            onChange={(e) => updateField('dis', e.target.value)}
          />
          <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Counseling</label>
          <textarea
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary h-24"
            value={proformaData.counsel}
            onChange={(e) => updateField('counsel', e.target.value)}
          />
 </div>
);
}; 

return (
      {/* 1. SIDEBAR (The Amboss Hamburger Menu) */}
      <aside className={`fixed lg:relative h-full bg-white border-r border-slate-200 z-[100] transition-all duration-300 ${isSidebarCollapsed ? 'w-20' : 'w-72'}`}>
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="p-6 mb-4 flex items-center justify-between border-b border-slate-50">
            {!isSidebarCollapsed && <span className="font-black text-lg text-[#022c22]">PHARMAVERSE</span>}
            <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="p-2 hover:bg-slate-100 rounded-lg text-slate-400">
              <Icon name={isSidebarCollapsed ? "Bars3Icon" : "ChevronLeftIcon"} size={20} />
            </button>
          </div>
          
          <nav className="flex-1 px-4 space-y-1">
             <SidebarItem icon="Squares2X2Icon" label="Dashboard" active={activeView === 'dash'} onClick={() => setActiveView('dash')} collapsed={isSidebarCollapsed} />
             <SidebarItem icon="BookOpenIcon" label="Curriculum" active={activeView === 'curr'} onClick={() => setActiveView('curr')} collapsed={isSidebarCollapsed} />
             <SidebarItem icon="ClipboardDocumentListIcon" label="Proforma" active={activeView === 'form'} onClick={() => setActiveView('form')} collapsed={isSidebarCollapsed} />
             <SidebarItem icon="WrenchIcon" label="Tools" active={activeView === 'tool'} onClick={() => setActiveView('tool')} collapsed={isSidebarCollapsed} />
          </nav>

          <div className="p-4 border-t border-slate-100">
            <button onClick={() => window.location.href = '/'} className="flex items-center gap-4 px-4 py-3 w-full text-red-500 font-bold hover:bg-red-50 rounded-xl transition-all">
              <Icon name="ArrowLeftOnRectangleIcon" size={20} />
              {!isSidebarCollapsed && <span>Exit to Website</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA (No Overlap here!) */}
      <main className="flex-1 h-screen overflow-y-auto relative bg-slate-50/30 transition-all duration-300">
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
          {/* SEARCH BAR */}
          <div className="relative mb-10 flex items-center justify-between gap-4 sticky top-0 bg-[#F8FAFC]/80 backdrop-blur-md z-10 py-4">
            <div className="relative flex-1 max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center text-slate-300"><Icon name="MagnifyingGlassIcon" size={18} /></div>
              <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-14 pr-4 shadow-sm outline-none text-sm transition-all" placeholder="Ask a clinical question..." />
            </div>
            <div className="w-11 h-11 bg-[#0f766e] text-white font-bold rounded-2xl grid place-items-center shadow-lg border border-[#022c22]">P</div>
          </div>

          <div className="animate-fade-in pb-20">
             {activeView === 'dash' && renderDashboard()}
             {activeView === 'curr' && renderCurriculum()}
             {activeView === 'tool' && renderTools()}
             {activeView === 'form' && renderProforma()}

          </div>
        </div>
      </main>
    </div>
  );
}; 

export default StudentDashboard;
