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
      { "type": "variable", "text": " List" },
      { "type": "newline" },
      { "type": "keyword", "text": "from" },
      { "type": "variable", "text": " krungsri.core " },
      { "type": "keyword", "text": "import" },
      { "type": "variable", "text": " Team" },
      { "type": "newline" },
      { "type": "newline" },
      { "type": "keyword", "text": "class" },
      { "type": "variable", "text": " FarewellPipeline" },
      { "type": "operator", "text": ":" },
      { "type": "newline" },
      { "type": "keyword", "text": "    def" },
      { "type": "function", "text": " run" },
      { "type": "operator", "text": "(self):" },
      { "type": "newline" },
      { "type": "comment", "text": "        # สรุปการเดินทางที่ Krungsri" },
      { "type": "newline" },
      { "type": "keyword", "text": "        for" },
      { "type": "variable", "text": " phase " },
      { "type": "keyword", "text": "in" },
      { "type": "operator", "text": " [" },
      { "type": "string", "text": "\"Extract_Memories\"" },
      { "type": "operator", "text": ", " },
      { "type": "string", "text": "\"Transform_Lessons\"" },
      { "type": "operator", "text": ", " },
      { "type": "string", "text": "\"Load_Gratitude\"" },
      { "type": "operator", "text": "]:" },
      { "type": "newline" },
      { "type": "function", "text": "            print" },
      { "type": "operator", "text": "(" },
      { "type": "string", "text": "f\"[INFO] {phase} completed!\"" },
      { "type": "operator", "text": ")" },
      { "type": "newline" },
      { "type": "newline" },
      { "type": "keyword", "text": "        return" },
      { "type": "string", "text": " \"\"\"" },
      { "type": "newline" },
      { "type": "string", "text": "        ขอบคุณทุกคนที่ Krungsri สำหรับมิตรภาพและประสบการณ์ที่ยอดเยี่ยมครับ" },
      { "type": "newline" },
      { "type": "string", "text": "        หากมีสิ่งใดล่วงเกิน ต้องขออภัยมา ณ ที่นี้ด้วยนะครับ" },
      { "type": "newline" },
      { "type": "string", "text": "        หวังว่าเราจะได้ร่วมงานกันใหม่ในอนาคต Keep in touch ครับ!" },
      { "type": "newline" },
      { "type": "string", "text": "        \"\"\"" }
    ],
    "output": [
      "[INFO] Extract_Memories completed!",
      "[INFO] Transform_Lessons completed!",
      "[INFO] Load_Gratitude completed!",
      "✓ ขอบคุณทุกคนที่ Krungsri สำหรับมิตรภาพและประสบการณ์ที่ยอดเยี่ยมครับ",
      "✓ หากมีสิ่งใดล่วงเกิน ต้องขออภัยมา ณ ที่นี้ด้วยนะครับ",
      "✓ หวังว่าเราจะได้ร่วมงานกันใหม่ในอนาคต Keep in touch ครับ!"
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
      "title": "Onboarding",
      "text": "เริ่มต้นเรียนรู้ระบบ ทำความรู้จักทีม และสร้าง environment แรก",
      "tag": "Day 1 ✓",
      "style": "ok"
    },
    {
      "title": "Core Engineering",
      "text": "สร้าง ETL pipelines, ดูแล Airflow DAGs และ migrate workloads",
      "tag": "Maintain ✓",
      "style": "ok2"
    },
    {
      "title": "Senior Contributions",
      "text": "Review code, Design ระบบ และช่วยทีมแก้ปัญหา incident",
      "tag": "Mentor ✓",
      "style": "ok"
    },
    {
      "title": "Final Commit",
      "text": "ส่งมอบงานครบถ้วน และ Friendship.db จะคงอยู่ตลอดไป",
      "tag": "Loading ✈️",
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
