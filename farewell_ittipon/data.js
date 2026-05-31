const FAREWELL_DATA = {
  "stats": {
    "dag_id": "KRUNGSRI_CAREER_JOURNEY",
    "duration": "2.5 years",
    "tasks": "100/100",
    "retries": 0,
    "status": "success",
    "python_version": "3.11",
    "platform": "Apache Airflow"
  },
  "profile": {
    "name": "DATA_ENGINEER.py",
    "role": "Krungsri · 2.5y runtime"
  },
  "farewell_script": {
    "title": "farewell_pipeline.py",
    "version": "3.11",
    "location": "Krungsri Data Platform",
    "code": [
      { "type": "keyword", "text": "from" },
      { "type": "variable", "text": " typing " },
      { "type": "keyword", "text": "import" },
      { "type": "variable", "text": " List, Dict" },
      { "type": "newline" },
      { "type": "keyword", "text": "from" },
      { "type": "variable", "text": " krungsri.core " },
      { "type": "keyword", "text": "import" },
      { "type": "variable", "text": " Team, Experience" },
      { "type": "newline" },
      { "type": "newline" },
      { "type": "keyword", "text": "class" },
      { "type": "variable", "text": " FarewellPipeline" },
      { "type": "operator", "text": ":" },
      { "type": "newline" },
      { "type": "keyword", "text": "    def" },
      { "type": "function", "text": " __init__" },
      { "type": "operator", "text": "(self, user: str):" },
      { "type": "newline" },
      { "type": "variable", "text": "        self.user " },
      { "type": "operator", "text": "=" },
      { "type": "variable", "text": " user" },
      { "type": "newline" },
      { "type": "variable", "text": "        self.status " },
      { "type": "operator", "text": "=" },
      { "type": "string", "text": "\"Running\"" },
      { "type": "newline" },
      { "type": "newline" },
      { "type": "keyword", "text": "    def" },
      { "type": "function", "text": " run" },
      { "type": "operator", "text": "(self) -> str:" },
      { "type": "newline" },
      { "type": "comment", "text": "        # ETL: Extract memories -> Transform lessons -> Load gratitude" },
      { "type": "newline" },
      { "type": "keyword", "text": "        for" },
      { "type": "variable", "text": " phase " },
      { "type": "keyword", "text": "in" },
      { "type": "operator", "text": " [" },
      { "type": "string", "text": "\"MEMORIES\"" },
      { "type": "operator", "text": ", " },
      { "type": "string", "text": "\"LESSONS\"" },
      { "type": "operator", "text": ", " },
      { "type": "string", "text": "\"GRATITUDE\"" },
      { "type": "operator", "text": "]:" },
      { "type": "newline" },
      { "type": "function", "text": "            print" },
      { "type": "operator", "text": "(" },
      { "type": "string", "text": "f\"[PROCESS] {phase} synchronizing...\"" },
      { "type": "operator", "text": ")" },
      { "type": "newline" },
      { "type": "newline" },
      { "type": "keyword", "text": "        return" },
      { "type": "string", "text": " \"\"\"" },
      { "type": "newline" },
      { "type": "string", "text": "        วันนี้เป็นวันสุดท้ายที่กรุงศรีครับ" },
      { "type": "newline" },
      { "type": "string", "text": "        ขอบคุณทุกคนสำหรับมิตรภาพและโอกาสที่มอบให้" },
      { "type": "newline" },
      { "type": "string", "text": "        หากมีข้อผิดพลาด ขออภัยมา ณ ที่นี้ด้วยครับ 🙏" },
      { "type": "newline" },
      { "type": "string", "text": "        ขออนุญาตออกจากกลุ่มไลน์นะครับ 😅" },
      { "type": "newline" },
      { "type": "string", "text": "        Keep in touch ครับ 🙏🏻" },
      { "type": "newline" },
      { "type": "string", "text": "        \"\"\"" },
      { "type": "newline" },
      { "type": "newline" },
      { "type": "keyword", "text": "if" },
      { "type": "variable", "text": " __name__ " },
      { "type": "operator", "text": "==" },
      { "type": "string", "text": " \"__main__\"" },
      { "type": "operator", "text": ":" },
      { "type": "newline" },
      { "type": "variable", "text": "    pipeline " },
      { "type": "operator", "text": "=" },
      { "type": "function", "text": " FarewellPipeline" },
      { "type": "operator", "text": "(" },
      { "type": "string", "text": "\"Ittipon\"" },
      { "type": "operator", "text": ")" },
      { "type": "newline" },
      { "type": "function", "text": "    print" },
      { "type": "operator", "text": "(" },
      { "type": "variable", "text": "pipeline" },
      { "type": "operator", "text": "." },
      { "type": "function", "text": "run" },
      { "type": "operator", "text": "())" }
    ],
    "output": [
      "[PROCESS] MEMORIES synchronizing...",
      "[PROCESS] LESSONS synchronizing...",
      "[PROCESS] GRATITUDE synchronizing...",
      "✓ วันนี้เป็นวันสุดท้ายที่กรุงศรีครับ",
      "✓ ขอบคุณทุกคนสำหรับมิตรภาพและโอกาสที่มอบให้",
      "✓ หากมีข้อผิดพลาด ขออภัยมา ณ ที่นี้ด้วยครับ 🙏",
      "✓ ขออนุญาตออกจากกลุ่มไลน์นะครับ 😅 · Keep in touch ครับ 🙏🏻"
    ],
    "footer": "Final Commit: friendship.db → Persistent storage"
  },
  "pipeline": [
    {
      "id": "join_team",
      "label": "join_team",
      "sub": "day 1",
      "icon": "🚀",
      "status": "done"
    },
    {
      "id": "build_pipelines",
      "label": "build_pipelines",
      "sub": "ETL · Airflow",
      "icon": "⚙️",
      "status": "done"
    },
    {
      "id": "fix_incidents",
      "label": "fix_incidents",
      "sub": "0 unresolved",
      "icon": "🔥",
      "status": "done"
    },
    {
      "id": "share_knowledge",
      "label": "share_knowledge",
      "sub": "docs + reviews",
      "icon": "🧠",
      "status": "done"
    },
    {
      "id": "next_chapter",
      "label": "next_chapter",
      "sub": "loading…",
      "icon": "✈️",
      "status": "current"
    }
  ],
  "timeline": [
    {
      "title": "Year 0 — Onboarding",
      "text": "เริ่มต้นเรียนรู้ระบบ ทำความรู้จักทีม สร้าง environment ครั้งแรก",
      "tag": "task: join_team ✓",
      "style": "ok"
    },
    {
      "title": "Year 1–2 — Core Engineering",
      "text": "สร้าง ETL pipelines, ดูแล Airflow DAGs, migrate workloads, แก้ bug กลางดึก",
      "tag": "tasks: build + maintain ✓",
      "style": "ok2"
    },
    {
      "title": "Year 2–2.5 — Senior Contributions",
      "text": "Review code, implement, design, เขียน docs จริงจัง, แก้ incident ก่อน standup 🏆",
      "tag": "tasks: mentor + resolve ✓",
      "style": "ok"
    },
    {
      "title": "Today — Final Commit",
      "text": "git commit -m \"farewell: handover complete, friendship.db persists\" · exit_code: 0",
      "tag": "next_chapter: loading ✈️",
      "style": "fin"
    }
  ],
  "success": {
    "title": "PIPELINE COMPLETED SUCCESSFULLY",
    "sub": "exit_code: 0 · next_run: somewhere_great.py"
  },
  "footer": {
    "title": "Data Engineer vNext",
    "sub": "Krungsri · Data Engineering · 2.5y runtime",
    "connection": "friendship.db: still online ❤️"
  }
};
