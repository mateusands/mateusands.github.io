document.documentElement.classList.add('js');

const GH = 'https://github.com/mateusands/';
const LANGS = ['pt', 'en', 'es'];

const ICONS = {
  chess: '<path d="M8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16H8z"/><path d="M8.5 16 9 9h6l.5 7"/><path d="M9 9 7 5l3 1 2-3 2 3 3-1-2 4"/>',
  screen: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="m10 8 4 2-4 2z"/>',
  mouse: '<rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 6v4"/>',
  keyboard: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M18 13h.01M8 16h8M10 13h4"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M9 15h6M9 11h2"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 16V11M12 16V7M17 16v-3"/>',
  coffee: '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v2M10 2v2M14 2v2"/>',
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4"/>',
  calc: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
  message: '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7 8h10M7 12h6"/>',
  widget: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2 12.5"/><path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2 17.5"/>',
  gamepad: '<path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"/><rect x="2" y="6" width="20" height="12" rx="6"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  external: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>'
};

// Projetos profissionais: código e documentação privados, então não há link.
const PRO_PROJECTS = [
  {
    name: 'BPX Connect', icon: 'message', featured: true, sync: true,
    desc: {
      pt: 'Plataforma de atendimento com IA, multi-tenant e multimarca.',
      en: 'AI customer support platform, multi-tenant and multi-brand.',
      es: 'Plataforma de atención con IA, multi-tenant y multimarca.'
    },
    highlights: {
      pt: [
        'Orquestrador de mensagens independente de canal, com filas em BullMQ e Redis, que recebe as conversas, faz a triagem e encaminha cada uma para o fluxo certo',
        'Pipeline de IA com RAG, memória persistente e grounding contra respostas inventadas, mantendo o atendimento no ar 24 horas',
        'Classificação de tópicos sensíveis de Jogo Responsável, com regras e análise semântica',
        'Importador de base de conhecimento com deduplicação e sincronização diária, e Flow Builder visual para desenhar os fluxos'
      ],
      en: [
        'Channel-agnostic message orchestrator, with BullMQ and Redis queues, that receives conversations, triages them and routes each one to the right flow',
        'AI pipeline with RAG, persistent memory and grounding against made-up answers, keeping support online 24 hours',
        'Responsible Gaming sensitive-topic classification, with rules and semantic analysis',
        'Knowledge base importer with deduplication and daily sync, and a visual Flow Builder to design the flows'
      ],
      es: [
        'Orquestador de mensajes independiente del canal, con colas en BullMQ y Redis, que recibe las conversaciones, hace el triaje y envía cada una al flujo correcto',
        'Pipeline de IA con RAG, memoria persistente y grounding contra respuestas inventadas, manteniendo la atención activa 24 horas',
        'Clasificación de temas sensibles de Juego Responsable, con reglas y análisis semántico',
        'Importador de base de conocimiento con deduplicación y sincronización diaria, y Flow Builder visual para diseñar los flujos'
      ]
    }
  },
  {
    name: 'Webchat multimarca', names: { en: 'Multi-brand webchat', es: 'Webchat multimarca' }, icon: 'widget',
    desc: {
      pt: 'Um único código gera o widget de cada marca, integrado ao bot e ao atendimento humano. O roteamento por marca é feito com TaskRouter.',
      en: 'A single codebase generates each brand\'s widget, connected to the bot and to human support. Per-brand routing runs on TaskRouter.',
      es: 'Un único código genera el widget de cada marca, integrado al bot y a la atención humana. El enrutamiento por marca se hace con TaskRouter.'
    }
  },
  {
    name: 'BPX Safe', icon: 'shield',
    desc: {
      pt: 'Sistema de registro e acompanhamento de Jogo Responsável que substituiu o controle em planilha, com trilha de auditoria completa.',
      en: 'Responsible Gaming record and follow-up system that replaced a spreadsheet, with a full audit trail.',
      es: 'Sistema de registro y seguimiento de Juego Responsable que reemplazó el control en hoja de cálculo, con trazabilidad de auditoría completa.'
    }
  },
  {
    name: 'VIBEBPX', icon: 'users',
    desc: {
      pt: 'Rede social interna com feed, stories, chat e conexão com colegas de outros setores. O reconhecimento entre colegas rende pontos trocáveis numa loja de recompensas, com ranking e metas por setor.',
      en: 'Internal social network with feed, stories, chat and connections with colleagues from other teams. Peer recognition earns points redeemable in a rewards store, with rankings and goals per team.',
      es: 'Red social interna con feed, stories, chat y conexión con colegas de otros sectores. El reconocimiento entre colegas da puntos canjeables en una tienda de recompensas, con ranking y metas por sector.'
    }
  }
];
const PRO_STACK = ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL + pgvector', 'Redis', 'BullMQ', 'OpenAI', 'WebSockets', 'Docker', 'Cloudflare'];

// Descrições reescritas a partir do README/descrição de cada repositório.
const PROJECTS = [
  {
    name: 'Zugzwang', repo: 'Zugzwang', icon: 'chess', lang: 'TypeScript',
    cats: ['web', 'dados'], featured: true, wip: true,
    tags: ['TypeScript', 'React', 'Express', 'Minimax', 'Stockfish', 'Vitest'],
    desc: {
      pt: 'Xadrez contra um bot, feito do zero em TypeScript. A engine é própria, com minimax, e a revisão de partida usa o Stockfish. O cliente é em React.',
      en: 'Chess against a bot, built from scratch in TypeScript. The engine is my own, using minimax, and game review runs on Stockfish. The client is React.',
      es: 'Ajedrez contra un bot, hecho desde cero en TypeScript. El motor es propio, con minimax, y la revisión de partidas usa Stockfish. El cliente es React.'
    },
    highlights: {
      pt: [
        'Monorepo com pnpm workspaces: engine, servidor e cliente compartilham tipos e ferramentas',
        'Regras do chess.js isoladas num wrapper, então nenhum outro pacote depende da biblioteca',
        'Análise profunda com Stockfish 18 em WASM numa fila assíncrona, com fallback local no navegador',
        'TypeScript em modo strict e any proibido por lint desde o primeiro commit'
      ],
      en: [
        'pnpm workspaces monorepo: engine, server and client share types and tooling',
        'chess.js rules isolated behind a wrapper, so no other package depends on the library',
        'Deep analysis with Stockfish 18 in WASM on an async queue, with a local fallback in the browser',
        'Strict TypeScript, with any banned by lint since the first commit'
      ],
      es: [
        'Monorepo con pnpm workspaces: motor, servidor y cliente comparten tipos y herramientas',
        'Reglas de chess.js aisladas en un wrapper, así ningún otro paquete depende de la biblioteca',
        'Análisis profundo con Stockfish 18 en WASM en una cola asíncrona, con fallback local en el navegador',
        'TypeScript en modo strict y any prohibido por lint desde el primer commit'
      ]
    }
  },
  {
    name: 'PeekIn', repo: 'peekin', icon: 'screen', lang: 'JavaScript',
    cats: ['web'],
    tags: ['WebRTC', 'Socket.IO', 'Electron', 'Cloudflare'],
    desc: {
      pt: 'Compartilhamento de tela, com ou sem som, por um link temporário do Cloudflare. A chamada é P2P via WebRTC: o servidor só faz a sinalização e o vídeo vai direto de um navegador ao outro.',
      en: 'Screen sharing, with or without sound, through a temporary Cloudflare link. The call is P2P over WebRTC: the server only handles signaling and the video goes straight from one browser to the other.',
      es: 'Compartir pantalla, con o sin sonido, mediante un enlace temporal de Cloudflare. La llamada es P2P vía WebRTC: el servidor solo hace la señalización y el video va directo de un navegador a otro.'
    }
  },
  {
    name: 'open-m711pro', repo: 'open-m711pro', icon: 'mouse', lang: 'Python',
    cats: ['linux'], featured: true, stars: 3,
    tags: ['Python', 'USB', 'hidraw', 'PySide6', 'Linux'],
    desc: {
      pt: 'Driver e interface open source para Linux do mouse Redragon M711 Pro / Cobra Pro. Controla RGB, DPI, polling rate e remapeamento de botões sem Windows.',
      en: 'Open source Linux driver and GUI for the Redragon M711 Pro / Cobra Pro mouse. Controls RGB, DPI, polling rate and button remapping without Windows.',
      es: 'Driver e interfaz open source para Linux del mouse Redragon M711 Pro / Cobra Pro. Controla RGB, DPI, polling rate y reasignación de botones sin Windows.'
    },
    highlights: {
      pt: [
        'Protocolo USB obtido por engenharia reversa, capturando o tráfego do app oficial com usbmon e Wireshark',
        'Núcleo só com a biblioteca padrão do Python, falando com o mouse via hidraw',
        'Remapeia os 16 botões e lê de volta o estado real do mouse',
        'Interface em Qt (PySide6), com fallback para tkinter e testes no CI'
      ],
      en: [
        'USB protocol reverse-engineered by capturing the official app\'s traffic with usbmon and Wireshark',
        'Core uses only the Python standard library and talks to the mouse through hidraw',
        'Remaps all 16 buttons and reads back the mouse\'s real state',
        'Qt interface (PySide6), with a tkinter fallback and tests in CI'
      ],
      es: [
        'Protocolo USB obtenido por ingeniería inversa, capturando el tráfico de la app oficial con usbmon y Wireshark',
        'Núcleo solo con la biblioteca estándar de Python, hablando con el mouse vía hidraw',
        'Reasigna los 16 botones y lee el estado real del mouse',
        'Interfaz en Qt (PySide6), con fallback a tkinter y pruebas en CI'
      ]
    }
  },
  {
    name: 'Flag Rush', repo: 'flag-rush', icon: 'flag', lang: 'JavaScript',
    cats: ['web', 'dados'], demo: 'https://mateusands.github.io/flag-rush/',
    tags: ['HTML', 'CSS', 'JavaScript', 'i18n'],
    desc: {
      pt: 'Adivinhe a bandeira em 5 segundos. Jogo de navegador em HTML, CSS e JavaScript puro, sem build nem dependências, em 9 idiomas.',
      en: 'Guess the flag in 5 seconds. A browser game in plain HTML, CSS and JavaScript, with no build step or dependencies, in 9 languages.',
      es: 'Adivina la bandera en 5 segundos. Juego de navegador en HTML, CSS y JavaScript puro, sin build ni dependencias, en 9 idiomas.'
    }
  },
  {
    name: 'open-ek75', repo: 'open-ek75', icon: 'keyboard', lang: 'Python',
    cats: ['linux'],
    tags: ['Python', 'HID', 'Linux'],
    desc: {
      pt: 'Driver e interface para Linux do teclado Dareu TK51G/EK75 (vendido como Husky HTG200/500/800). RGB por zona, remapeamento, macros decodificadas e tela de teste de teclas. Protocolo HID por engenharia reversa.',
      en: 'Linux driver and GUI for the Dareu TK51G/EK75 keyboard (sold as Husky HTG200/500/800). Per-zone RGB, key remapping, decoded macros and a key test screen. HID protocol reverse-engineered.',
      es: 'Driver e interfaz para Linux del teclado Dareu TK51G/EK75 (vendido como Husky HTG200/500/800). RGB por zona, reasignación, macros decodificadas y pantalla de prueba de teclas. Protocolo HID por ingeniería inversa.'
    }
  },
  {
    name: 'imgconv', repo: 'imgconv', icon: 'image', lang: 'Go',
    cats: ['desktop'],
    tags: ['Go', 'CLI', 'TUI'],
    desc: {
      pt: 'Meu projeto para aprender Go: um conversor de imagens com três interfaces, linha de comando, terminal e navegador.',
      en: 'My project for learning Go: an image converter with three interfaces, command line, terminal UI and browser.',
      es: 'Mi proyecto para aprender Go: un conversor de imágenes con tres interfaces, línea de comandos, terminal y navegador.'
    }
  },
  {
    name: 'pdf-tool', repo: 'pdf-tool', icon: 'file', lang: 'Python',
    cats: ['desktop'],
    tags: ['Python', 'CustomTkinter'],
    desc: {
      pt: 'App desktop para PDF e Word: dividir, juntar, converter, organizar, compactar, proteger e desbloquear. Interface escura com ícones vetoriais.',
      en: 'Desktop app for PDF and Word: split, merge, convert, reorder, compress, protect and unlock. Dark interface with vector icons.',
      es: 'App de escritorio para PDF y Word: dividir, unir, convertir, organizar, comprimir, proteger y desbloquear. Interfaz oscura con íconos vectoriales.'
    }
  },
  {
    name: 'media-downloader', repo: 'media-downloader', icon: 'download', lang: 'Python',
    cats: ['desktop'],
    tags: ['Python', 'yt-dlp', 'CustomTkinter'],
    desc: {
      pt: 'Baixa vídeo ou áudio das plataformas suportadas pelo yt-dlp, detecta playlists e revisa capa e metadados do MP3 com dados do iTunes.',
      en: 'Downloads video or audio from the platforms yt-dlp supports, detects playlists and reviews MP3 cover art and metadata with iTunes data.',
      es: 'Descarga video o audio de las plataformas que soporta yt-dlp, detecta playlists y revisa la portada y los metadatos del MP3 con datos de iTunes.'
    }
  },
  {
    name: 'dados-publicos-brasil', repo: 'dados-publicos-brasil', icon: 'chart', lang: 'Jupyter Notebook',
    cats: ['dados'],
    tags: ['Python', 'pandas', 'Jupyter'],
    desc: {
      pt: 'Análises de dados públicos brasileiros com Python e pandas. A primeira cruza as notas do ENEM 2023 por escola, renda e estado.',
      en: 'Analyses of Brazilian public data with Python and pandas. The first one crosses ENEM 2023 scores by school, income and state.',
      es: 'Análisis de datos públicos brasileños con Python y pandas. El primero cruza las notas del ENEM 2023 por escuela, ingreso y estado.'
    }
  },
  {
    name: 'cachy-caffeine', repo: 'cachy-caffeine', icon: 'coffee', lang: 'Python',
    cats: ['linux', 'desktop'],
    tags: ['Python', 'Linux'],
    desc: {
      pt: 'App de bandeja para Linux que, quando ativo, impede a tela de bloquear e a máquina de suspender.',
      en: 'Linux tray app that, while active, keeps the screen from locking and the machine from suspending.',
      es: 'App de bandeja para Linux que, mientras está activa, impide que la pantalla se bloquee y que la máquina se suspenda.'
    }
  },
  {
    name: 'hyperx-solocast-boot-mute', repo: 'hyperx-solocast-boot-mute', icon: 'mic', lang: 'Shell',
    cats: ['linux'],
    tags: ['Shell', 'USB', 'Linux'],
    desc: {
      pt: 'Faz o HyperX SoloCast ligar mutado sem quebrar o sensor de toque. Escreve no registrador de mute do próprio firmware USB do microfone, e não no mixer do sistema.',
      en: 'Makes the HyperX SoloCast boot muted without breaking its tap-to-mute sensor. It writes to the microphone\'s own USB firmware mute register, not the OS mixer.',
      es: 'Hace que el HyperX SoloCast arranque silenciado sin romper el sensor táctil. Escribe en el registro de mute del propio firmware USB del micrófono, no en el mezclador del sistema.'
    }
  },
  {
    name: 'calculadora-tkinter', repo: 'calculadora-tkinter', icon: 'calc', lang: 'Python',
    cats: ['desktop'],
    tags: ['Python', 'Tkinter', 'Tests'],
    desc: {
      pt: 'Calculadora desktop sem dependências. Tem avaliador de expressão próprio (AST com allowlist, sem eval) e a regra de cálculo separada da interface, coberta por testes.',
      en: 'Dependency-free desktop calculator. It has its own expression evaluator (AST with an allowlist, no eval) and the calculation logic separate from the UI, covered by tests.',
      es: 'Calculadora de escritorio sin dependencias. Tiene su propio evaluador de expresiones (AST con allowlist, sin eval) y la lógica de cálculo separada de la interfaz, cubierta por pruebas.'
    }
  },
  {
    name: 'game-in-godot', repo: 'game-in-godot', icon: 'gamepad', lang: 'GDScript',
    cats: ['dados'], wip: true,
    tags: ['Godot', 'GDScript'],
    desc: {
      pt: 'Jogo de plataforma 2D em desenvolvimento, feito com a Godot Engine.',
      en: '2D platformer in development, made with the Godot Engine.',
      es: 'Juego de plataformas 2D en desarrollo, hecho con Godot Engine.'
    }
  }
];

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const svg = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};

/* ---------- Idioma ---------- */

let lang = 'pt';
const ui = () => window.I18N[lang].ui;

// O português já está no HTML; guarda o original para poder voltar a ele.
const ptText = new Map();
const ptLabel = new Map();
$$('[data-i18n]').forEach((el) => ptText.set(el, el.innerHTML));
$$('[data-i18n-label]').forEach((el) => ptLabel.set(el, el.getAttribute('aria-label')));

function detectLang() {
  const saved = store.get('lang');
  if (LANGS.includes(saved)) return saved;
  const prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'pt'];
  for (const p of prefs) {
    const code = String(p).toLowerCase().slice(0, 2);
    if (LANGS.includes(code)) return code;
  }
  return 'en';
}

function applyLang(next) {
  lang = next;
  const dict = window.I18N[lang];
  $$('[data-i18n]').forEach((el) => {
    const v = lang === 'pt' ? ptText.get(el) : dict[el.dataset.i18n];
    if (v != null) el.innerHTML = v;
  });
  $$('[data-i18n-label]').forEach((el) => {
    const v = lang === 'pt' ? ptLabel.get(el) : dict[el.dataset.i18nLabel];
    if (v != null) el.setAttribute('aria-label', v);
  });
  document.documentElement.lang = ui().htmlLang;
  document.title = ui().title;
  $('meta[name="description"]').setAttribute('content', ui().description);
  $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', b.dataset.lang === lang));

  renderPro();
  renderProjects();
  syncThemeLabel();
  syncMenuLabel();
  typing.restart();
}

function setupLang() {
  $$('.lang button').forEach((b) => b.addEventListener('click', () => {
    store.set('lang', b.dataset.lang);
    applyLang(b.dataset.lang);
  }));
}

/* ---------- Projetos ---------- */

function renderPro() {
  const t = ui();
  const cards = PRO_PROJECTS.map((p) => {
    const name = (p.names && p.names[lang]) || p.name;
    const highlights = p.highlights
      ? `<ul class="highlights">${p.highlights[lang].map((h) => `<li>${esc(h)}</li>`).join('')}</ul>`
      : '';
    const sync = p.sync ? `<a href="#sync-ai">${svg('arrow')}${esc(t.seeSync)}</a>` : '';
    return `
      <li class="project${p.featured ? ' is-featured' : ''}">
        <div class="project-top">
          <span class="project-icon">${svg(p.icon)}</span>
        </div>
        <h3>${esc(name)}</h3>
        <div class="project-body">
          <p>${esc(p.desc[lang])}</p>
          ${highlights}
        </div>
        <div class="project-links">
          <span class="private">${svg('lock')}${esc(t.privateCode)}</span>
          ${sync}
        </div>
      </li>`;
  });
  cards.push(`
      <li class="project project-stack">
        <div class="project-top"><span class="project-icon">${svg('layers')}</span></div>
        <h3>Stack</h3>
        <p class="stack-note">${esc(t.proStack)}</p>
        <ul class="tags">${PRO_STACK.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
      </li>`);
  $('#pro-projects').innerHTML = cards.join('');
}

let activeFilter = 'all';

function renderProjects() {
  const t = ui();
  $('#projects').innerHTML = PROJECTS.map((p) => {
    const url = GH + p.repo;
    const badge = p.wip
      ? `<span class="badge">${esc(t.wip)}</span>`
      : p.stars ? `<span class="badge">${svg('star')}<span class="sr-only">${esc(t.stars)}:</span> ${p.stars}</span>` : '';
    const highlights = p.highlights
      ? `<ul class="highlights">${p.highlights[lang].map((h) => `<li>${esc(h)}</li>`).join('')}</ul>`
      : '';
    const demo = p.demo
      ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener" aria-label="${esc(t.playOf(p.name))}">${svg('external')}${esc(t.play)}</a>`
      : '';
    return `
      <li class="project${p.featured ? ' is-featured' : ''}" data-cats="${p.cats.join(' ')}"${p.featured ? ' data-featured' : ''}>
        <div class="project-top">
          <span class="project-icon">${svg(p.icon)}</span>
          <span class="project-meta">${badge}<span class="lang-dot">${esc(p.lang)}</span></span>
        </div>
        <h3><a href="${url}" target="_blank" rel="noopener">${esc(p.name)}</a></h3>
        <div class="project-body">
          <p>${esc(p.desc[lang])}</p>
          ${highlights}
        </div>
        <ul class="tags">${p.tags.map((tag) => `<li>${esc(tag)}</li>`).join('')}</ul>
        <div class="project-links">
          <a href="${url}" target="_blank" rel="noopener" aria-label="${esc(t.codeOf(p.name))}">${svg('github')}${esc(t.code)}</a>
          ${demo}
        </div>
      </li>`;
  }).join('');
  applyFilter(activeFilter, false);
}

function applyFilter(f, announce) {
  activeFilter = f;
  const chips = $$('.chip');
  chips.forEach((c) => {
    const on = c.dataset.filter === f;
    c.classList.toggle('is-active', on);
    c.setAttribute('aria-pressed', on);
  });
  let shown = 0;
  $$('#projects .project').forEach((card) => {
    const show = f === 'all' || card.dataset.cats.split(' ').includes(f);
    card.hidden = !show;
    // o destaque ocupa duas colunas só na visão "Todos"
    card.classList.toggle('is-featured', f === 'all' && card.hasAttribute('data-featured'));
    if (show) shown++;
  });
  if (announce) {
    const chip = chips.find((c) => c.dataset.filter === f);
    $('#filter-status').textContent = ui().filterStatus(shown, chip.textContent.trim());
  }
}

function setupFilters() {
  $('.filters').addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (chip) applyFilter(chip.dataset.filter, true);
  });
}

/* ---------- Animações ---------- */

function setupReveal() {
  const els = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el) => io.observe(el));
}

const typing = (() => {
  const el = $('#typed');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let timer = null;

  function run() {
    const roles = ui().roles;
    let r = 0, i = roles[0].length, deleting = true;
    const tick = () => {
      if (deleting) {
        i--;
        if (i <= 0) { deleting = false; r = (r + 1) % roles.length; }
      } else {
        i++;
        if (i >= roles[r].length) {
          el.textContent = roles[r];
          deleting = true;
          timer = setTimeout(tick, 2200);
          return;
        }
      }
      el.textContent = roles[r].slice(0, i);
      timer = setTimeout(tick, deleting ? 35 : 65);
    };
    timer = setTimeout(tick, 2400);
  }

  return {
    restart() {
      clearTimeout(timer);
      el.textContent = ui().roles[0];
      if (!reduced.matches) run();
    }
  };
})();

/* ---------- Tema ---------- */

const themeBtn = $('#theme-toggle');
const root = document.documentElement;
const currentTheme = () => root.dataset.theme
  || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

function syncThemeLabel() {
  const t = currentTheme();
  themeBtn.setAttribute('aria-label', t === 'dark' ? ui().themeToLight : ui().themeToDark);
  $('meta[name="theme-color"]').setAttribute('content', getComputedStyle(root).getPropertyValue('--bg').trim());
}

function setupTheme() {
  themeBtn.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    store.set('theme', next);
    syncThemeLabel();
  });
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', syncThemeLabel);
}

/* ---------- Navegação ---------- */

const nav = $('#nav');
const menuBtn = $('#menu-toggle');
const links = $('#nav-links');

function syncMenuLabel() {
  const open = links.classList.contains('is-open');
  menuBtn.setAttribute('aria-label', open ? ui().menuClose : ui().menuOpen);
}

function setupNav() {
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const setMenu = (open) => {
    links.classList.toggle('is-open', open);
    nav.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', open);
    syncMenuLabel();
  };
  menuBtn.addEventListener('click', () => setMenu(!links.classList.contains('is-open')));
  links.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !links.classList.contains('is-open')) return;
    setMenu(false);
    menuBtn.focus();
  });

  // marca o link da seção visível
  const anchors = $$('a', links);
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        anchors.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    anchors.forEach((a) => { const s = $(a.getAttribute('href')); if (s) io.observe(s); });
  }
}

/* ---------- Copiar contato ---------- */

function setupCopy() {
  const status = $('#copy-status');
  $$('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        status.textContent = ui().copied;
        btn.classList.add('is-done');
      } catch (e) {
        status.textContent = ui().copyFail;
      }
      setTimeout(() => { status.textContent = ''; btn.classList.remove('is-done'); }, 2000);
    });
  });
}

/* ---------- Início ---------- */

$('#year').textContent = new Date().getFullYear();
$('#project-count').textContent = PROJECTS.length;
setupFilters();
setupReveal();
setupTheme();
setupNav();
setupCopy();
setupLang();
applyLang(detectLang());
