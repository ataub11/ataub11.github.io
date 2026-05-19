// All content for Allison's site — synced with current resume.

window.SITE_DATA = {
  identity: {
    name: 'Allison Taub',
    title: 'Vehicle Integration Engineer · Mechanical + CS',
    location: 'Mountain View, CA',
    coords: '37.4°N 122.1°W',
    education: 'Duke University · B.S.E Mechanical Engineering · B.A Computer Science · Cert. Robotics & Automation',
    currentRole: 'Vehicle Integration Engineer @ Woven by Toyota',
    statement: "Hi, I'm Allison — a mechanical engineer and computer scientist working at the intersection of hardware, embedded systems, and machine learning. I currently integrate and validate vehicle subsystems at Woven by Toyota; outside of work I build robots that walk, paint, and fly.",
    email: 'ataub17@gmail.com',
    phone: '(516) 551-2908',
    linkedin: 'https://www.linkedin.com/in/allison-taub-duke',
    github: 'https://github.com/ataub11',
  },

  // Featured projects get the full case-study treatment.
  featured: [
    {
      id: 'team-ant',
      idx: '01',
      title: 'Perception-Driven Cable Insertion',
      kicker: 'Robotics / Computer Vision / ROS2',
      year: 'Feb 2026 — May 2026',
      role: 'Team ANT · AI for Industry Challenge',
      org: 'Mountain View, CA',
      summary: 'A UR5e robot that finds, hovers above, and inserts cables into randomly-posed task boards using a learned vision pipeline and force-feedback spiral search.',
      body: [
        "Built a perception-driven cable insertion policy for a UR5e arm. The robot has to find a randomly-posed task board, identify the correct port, and insert an SFP or SC plug without breaking anything — all from camera input.",
        "The camera prepass localizes the task board via LED anchoring and SFP cage detection, then backprojects detections to 3D hover positions using the camera intrinsics. From the hover, the arm descends and runs a force-feedback spiral search to find the port lip before committing to insertion. Retry logic and Z-correction handle elevated ports.",
        "I replaced an early hand-tuned HSV detector with an end-to-end ML pipeline: a YOLO-class SFP cage detector trained to mAP50=0.995, integrated into the ROS2 vision graph. Detection confidence (≥0.45) gates the hover distance — no explicit depth check needed.",
      ],
      stats: [
        { k: '0.995', l: 'detector mAP50' },
        { k: 'UR5e', l: 'manipulator' },
        { k: 'ROS2', l: 'integration' },
      ],
      tags: ['ROS2', 'YOLO', 'UR5e', 'Force Control', 'Perception', 'Python'],
      slotId: 'feat-ant',
      slotHint: 'UR5e + task board photo',
      slotMp4: 'images/aic-policy.mp4',
    },
    {
      id: 'rainforest',
      idx: '02',
      title: 'Blue Devil Rainforest Divers · XPRIZE',
      kicker: 'Drones / Biodiversity / Field Engineering',
      year: 'Aug 2021 — May 2024',
      role: 'Drone Hardware & Waterproofing',
      org: 'Duke University × XPRIZE',
      summary: 'A drone swarm built to autonomously photograph rainforest canopies for biodiversity cataloging — hardened to fly in the wettest conditions on Earth.',
      body: [
        "Three years on Duke's XPRIZE Rainforest team building drone swarms that autonomously photograph rainforest canopies for biodiversity cataloging. The competition demands you survey hectares of remote jungle in a single day — every part of the hardware has to hold up unattended.",
        "I owned waterproofing for the swarm. Engineered protection systems for Parrot Anafi drones so they could operate in rain — silicone motor sealing, structured taping at exposure points, and laser-cut polycarbonate caps to dispel water from motor openings. Tested independently and stacked.",
        "Also designed packable custom drones for remote field deployment, where you can't bring spares and every flight is the only flight. In Summer 2023 the team traveled to Singapore for the XPRIZE semifinals.",
      ],
      stats: [
        { k: '3yr', l: 'on the team' },
        { k: 'SG', l: 'semifinal site' },
        { k: 'IP-X', l: 'wet-flight rated' },
      ],
      tags: ['Drones', 'Parrot Anafi', 'Field Engineering', 'Waterproofing', 'XPRIZE'],
      slotId: 'feat-rainforest',
      slotHint: 'drone / Singapore field trip',
      slotSrc: 'images/xprize-drone.png',
      slotFit: 'natural',
      links: [
        { kind: 'doc',   url: 'https://drive.google.com/open?id=1UvyF0fM2PSppasTvaeQNp2G1qo0fvoyxkiy6IxTNSII', label: 'Report: Flying Drones in Wet' },
        { kind: 'video', url: 'https://www.youtube.com/watch?v=Yygkew0jc60', label: 'XPRIZE drone test (1)' },
        { kind: 'video', url: 'https://www.youtube.com/watch?v=5Sy_3tKG2qc', label: 'XPRIZE drone test (2)' },
      ],
    },
    {
      id: 'bot-ross',
      idx: '03',
      title: 'Bot Ross — A String-Driven Art Robot',
      kicker: 'Robotics / Generative Art / Research',
      year: 'Aug 2021 — Dec 2021',
      role: 'Designer, Fabricator, Software',
      org: 'Duke University · Research',
      summary: 'A pulley-driven painting robot — two Nema 17 steppers and a weighted gondola swing a marker across the canvas, drawing with the loose character of a human hand.',
      body: [
        "Bot Ross is a pulley-based string bot that paints. Two weighted pulleys driven by Nema 17 stepper motors suspend a weighted gondola, which holds the marker against the canvas. Position is determined geometrically — from the lengths of the two cords — not by a rigid gantry.",
        "The control stack runs grbl_polar on an Arduino: a fork of grbl that uses similar triangles and trigonometry to convert G-code into cord-length commands. I authored the upstream toolchain in Python and C — image input vectorized into strokes, strokes into G-code, G-code into motion. Because the marker hangs rather than being clamped, the cords flex and the carriage sways; every painting comes out slightly different from the last.",
        "Built as part of a broader research project on the interplay of previous actions in robot learning. Featured on Duke Pratt's news page.",
      ],
      stats: [
        { k: '2', l: 'Nema 17 motors' },
        { k: 'grbl', l: 'polar fork' },
        { k: '1/1', l: 'editions per piece' },
      ],
      tags: ['Python', 'C', 'G-Code', 'Arduino', 'Nema 17', 'grbl_polar'],
      slotId: 'feat-botross',
      slotHint: 'String Bot gif — drag it in here',
      slotSrc: 'images/artbot.gif',
      slotFit: 'natural',
      links: [
        { kind: 'site',   url: 'https://pratt.duke.edu/about/news/lets-build-artbot', label: 'Duke Pratt article' },
        { kind: 'slides', url: 'https://drive.google.com/file/d/176eDXuXk729JWsmWDFaQUzEXZ65Y1oAB/view', label: 'Project poster' },
      ],
    },
    {
      id: 'turtlebot-feat',
      idx: '04',
      title: 'TurtleBot Autonomous Exploration',
      kicker: 'Autonomy / Simulation / ROS',
      year: '2023',
      role: 'Simulation Environment + Integration',
      org: 'Duke · ECE 383',
      summary: 'A TurtleBot that autonomously explores a complex environment, finds a target, and navigates to it while avoiding obstacles — built end-to-end in ROS and Gazebo.',
      body: [
        "The system goal: a TurtleBot autonomously explores a complex environment looking for a target, then plans a path to it while avoiding obstacles. The robot uses its full sensor suite to scan the environment while wandering, and once the target is recognized it shifts into navigation mode.",
        "I owned the simulation environment. The team needed a custom world for testing, so I started from the turtlebot3 base house file and edited the SDF to spawn the TurtleBot at a fixed entry point (removing run-to-run variability). I then modeled the target object in SolidWorks, exported an STL, wrote the converter that produced an SDF version of the target, and integrated it into the parent world file.",
        "Wrapped the whole pipeline in a bash launcher so the team could spin up the simulation with one command, and stayed deep in code review across the wider stack as we integrated.",
      ],
      stats: [
        { k: 'ROS', l: 'middleware' },
        { k: 'SDF', l: 'world generation' },
        { k: '1cmd', l: 'launch script' },
      ],
      tags: ['ROS', 'Gazebo', 'SolidWorks', 'SDF', 'Bash', 'Python'],
      slotId: 'feat-turtlebot',
      slotHint: 'Gazebo simulation screenshot',
      slotVideo: 'https://drive.google.com/file/d/1R62ohnPk-ejqp-sWUnsnHrGJxvm-pYBY/preview',
      links: [
        { kind: 'repo',  url: 'https://gitlab.oit.duke.edu/sg491/navigator', label: 'Codebase (GitLab)' },
        { kind: 'video', url: 'https://drive.google.com/file/d/1R62ohnPk-ejqp-sWUnsnHrGJxvm-pYBY/view', label: 'Final demo video' },
        { kind: 'doc',   url: 'https://drive.google.com/open?id=1SWF4jk4_t71Jksr708p1Y8s9NKXhoC1IxW-eMZ6QgVA', label: 'Technical memo' },
      ],
    },
  ],

  // Briefer project archive.
  archive: [
    {
      id: 'gm', org: 'General Motors', year: '2023',
      title: 'Electrical Advanced Vehicle Design', type: 'Internship',
      tags: ['Siemens NX','Bracket Design','Sensor Layout','Wire Routing'],
      blurb: "Engineering Design Intern on the Advanced Vehicle Design Electrical team. Modeled and modified support brackets for electrical modules in Siemens NX, designed sensor layouts to maximize FOV across vehicles, and routed cables to ensure modules were properly powered.",
      links: [],
    },
    {
      id: 'sheldon', org: 'Duke · Robot Studio', year: '2024',
      title: 'Sheldon — Wheel-Less Walking Robot', type: 'Project',
      tags: ['Fusion 360','Arduino','Gait Design','3D Print'],
      blurb: "Senior Robot Studio brief: build a robot that walks and dances without wheels. I modeled Sheldon after a crab and treated gait as the central design problem.",
      links: [
        { kind: 'video', url: 'https://www.youtube.com/watch?v=lBizOXtRZfo', label: 'Walking / dancing demo' },
        { kind: 'video', url: 'https://www.youtube.com/watch?v=15In59m6fv4', label: "Sheldon's first steps" },
      ],
      images: [
        { src: 'images/sheldon-cad.png', caption: 'Sheldon — CAD model.' },
        { src: 'images/sheldon-irl.png', caption: 'Sheldon, fully assembled and 3D-printed.' },
      ],
    },
    {
      id: 'maglev', org: 'Duke', year: '2023',
      title: 'Magnetic Levitation PID Controller', type: 'Course',
      tags: ['LabVIEW','PID','Ziegler–Nichols'],
      blurb: "Designed a PID controller in LabVIEW to levitate a steel ball with an electromagnet on a Feedback Instruments device. Tuned with the Ziegler–Nichols method. The plots show the desired position (red) vs the measured position (white) of the ball under control.",
      images: [
        { src: 'images/maglev-ball.jpg', caption: 'The levitating steel ball, mid-control.' },
        { src: 'images/maglev-controller.jpg', caption: 'Controller accuracy: red = desired position, white = measured.' },
      ],
      links: [
        { kind: 'pdf', label: 'Lab Report', url: 'https://drive.google.com/file/u/0/d/1VcxEdBpA4_RDsF6JeP2Scw2CQbiFoh0i/view' },
      ],
    },
    {
      id: 'irobot-arc', org: 'iRobot Corporation', year: '2022',
      title: 'Next-Gen Cleaning Systems · R&D Intern', type: 'Internship',
      tags: ['Mechanical Design','Prototyping','SolidWorks','FOV Testing','Gearbox'],
      blurb: "Summer with iRobot's R&D group across the next-generation cleaning system team and the new product team. Prototyped agitation mechanisms, compared efficiency through power-draw measurement, architected a gearbox for a cleaning concept, and tested camera field of view (FOV) on prototype robots — updating CAD to reflect empirical results.",
      links: [],
    },
    {
      id: 'pod', org: 'Duke × Epirus', year: '2022',
      title: 'Mobile Surveillance Drone POD', type: 'Project',
      tags: ['SolidWorks','Flow Sim','3D Print'],
      blurb: "Designed a drone-mounted carrying case for Epirus's radar system. My focus: SolidWorks prototypes, flow simulations across designs, and 3D-printed builds for wind/rain testing.",
      images: [
        { src: 'images/drone-pod-cfd.gif', caption: 'Flow simulation across the POD body (SolidWorks).' },
      ],
      links: [
        { kind: 'slides', url: 'https://docs.google.com/presentation/d/1o0_azU11srE31C00EyQ9SxrJKWOs1n8eqnr9jdpWkBM/present?slide=id.p1', label: 'Poster presentation' },
      ],
    },
    {
      id: 'cshl', org: 'Cold Spring Harbor Lab', year: '2019–20',
      title: 'Arabidopsis Plant Vision Pipeline', type: 'Research',
      tags: ['Raspberry Pi','PyTorch','Plant CV','Python'],
      blurb: "Ware Lab research on Arabidopsis Thaliana growth. Built a Raspberry Pi time-lapse rig feeding Plant CV for biomass tracking, plus a PyTorch classifier identifying mutant seeds by color and shape.",
      links: [
        { kind: 'slides', url: 'https://docs.google.com/presentation/d/1TZloHgVdnjUSyDzuSH6fsNpXL5jlFeFwemTYg5LVQ9Q/present', label: 'Summary presentation' },
      ],
    },
    {
      id: 'epirus', org: 'Epirus Inc.', year: '2021',
      title: 'POD Structural + PCB Mounts', type: 'Internship',
      tags: ['Mechanical','RF Mounts','Prototyping'],
      blurb: "Lab support on the POD Scrum at Epirus — designed 3D-printed mounts for PCBs and RF technologies, and prototyped five structural pieces for the POD itself.",
      links: [],
    },
    {
      id: 'h2m', org: 'H2M architects', year: '2017–20',
      title: 'Mechanical / Electrical Drafting', type: 'Internship',
      tags: ['AutoCAD','HVAC','Lighting Plans'],
      blurb: "Three years on the Mechanical and Electrical teams: AutoCAD floorplans for a museum point-of-sale system, a water trombe wall design for a cafe (heating air + water), and library lighting plans.",
      links: [],
    },
    {
      id: 'rl', org: 'Duke', year: '2023–24',
      title: 'Interplay of Previous Actions — Robot Learning',
      type: 'Research',
      tags: ['Robot Learning','Motion Planning','Simulation'],
      blurb: "Comprehensive investigation into how past actions shape robot motion planning. Developed a novel model that lets robots plan future actions by analyzing prior behavior, using computational simulations to study the dynamics of leveraging history for efficient planning. Bot Ross was developed as one outcome under this project.",
      images: [
        { src: 'images/interplay-ur5.png', caption: 'UR5 simulation environment used to study action history.' },
      ],
      links: [
        { kind: 'pdf',  url: 'https://drive.google.com/file/d/1xWAQyvlo5C12JZyUZa3jIU-nVyV-nkLA/view?usp=sharing', label: 'Research paper' },
        { kind: 'repo', url: 'https://github.com/ataub11/finalproject', label: 'Code (GitHub)' },
      ],
    },
    {
      id: 'zavalanos', org: 'Zavalanos Research Group, Duke', year: '2023–24',
      title: 'Autonomous Flight for DJI Matrice 100', type: 'Research',
      tags: ['ROS','Jetson Xavier AGX','DJI Matrice 100','Autonomy'],
      blurb: "Programmed autonomous flight on DJI Matrice 100 drones using ROS and a Jetson Xavier AGX. Target applications: exploring archeological dig sites and search-and-rescue missions.",
      images: [
        { src: 'images/zavalanos-drone.jpg', caption: 'DJI Matrice 100 with Jetson Xavier AGX payload.' },
      ],
      links: [],
    },
  ],

  // Timeline (newest first).
  timeline: [
    { range: 'Aug 2025 — Present',   org: 'Woven by Toyota · Sunnyvale, CA',  role: 'Vehicle Integration Engineer · validating embedded SW and ECU integration across CAN/UDP/Serial; owning new vehicle subsystems from prototype through validation; engineered a custom multi-computer thermal management system improving airflow by 50%.' },
    { range: 'Aug 2024 — Aug 2025',  org: 'The Aerospace Corporation · Chantilly, VA',  role: 'Vehicle Modeling & Simulation Software Engineer · built distributed Java simulations of in-orbit vehicle dynamics; mentored summer 2025 interns.' },
    { range: 'Aug 2020 — May 2024',  org: 'Duke University',                  role: 'B.S.E Mechanical Engineering · B.A Computer Science · Cert. Robotics & Automation' },
    { range: 'May 2023 — Aug 2023',  org: 'General Motors · Warren, MI',      role: 'Engineering Design Intern · Advanced Vehicle Design Electrical' },
    { range: 'May 2022 — Jul 2022',  org: 'iRobot Corporation · Bedford, MA', role: 'Mechanical Design Intern · R&D' },
    { range: 'Jun 2021 — Aug 2021',  org: 'Epirus Inc.',                      role: 'Mechanical Engineer · POD Scrum' },
    { range: 'Sep 2019 — Aug 2020',  org: 'Cold Spring Harbor Laboratory',    role: 'Research Assistant · Ware Lab' },
    { range: 'Sep 2017 — Jun 2020',  org: 'H2M architects + engineers',       role: 'Mechanical & Electrical Teams' },
  ],

  skills: {
    'Languages': ['Python','C','C++','Java','MATLAB / Simulink','SQL','Bash','LabVIEW'],
    'Frameworks & Protocols': ['ROS2','PyTorch','YOLO','CAN','UDP','Serial Communication','Linux','Microsoft Suite'],
    'CAD & Simulation': ['SolidWorks','Siemens NX','Autodesk Suite','PTC Creo','OnShape','Ansys Suite'],
    'Hardware & Fab': ['3D Printing','Laser Cutting','Mill','Lathe','Drill Press','Saws','Power Tools','Oscilloscopes','Voltage & Current Probes','Arduino','Raspberry Pi'],
  },
};
