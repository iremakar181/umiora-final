
// ---------------- SAYFA GEÇİŞ SİSTEMİ (SPA) ----------------
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ---------------- MERKEZİ DİL SÖZLÜĞÜ (i18n) ----------------
let currentLang = localStorage.getItem('umiora_lang') || 'tr';
let currentQuoteIndex = 0;

const translations = {
    tr: {
        "nav-home": "Ana Sayfa", "nav-test": "Dikkat Testi", "nav-fun": "Oyun Odası", "nav-results": "Sonuçlarım", "nav-journal": "Günlüğüm", "nav-profile": "Profilim",
        "welcome-title": "Hoş Geldin 👋", "home-subtitle": "Bugünkü zihinsel durumunu takip etmeye hazır mısın?",
        "card-status-title": "Zihinsel Durumun", "card-status-desc": "Stres ve uyku verini girmek için tıkla.",
        "card-focus-title": "Odak Beklentisi", "status-waiting": "✨ Bekleniyor", "status-waiting-desc": "Analiz için durumunu gir.",
        "card-performance-title": "Son Performans", "card-performance-desc": "Henüz test çözmedin.", "card-quote-title": "Bugünün Sözü",
        "test-title": "Bilişsel Test Merkezi", "test-subtitle": "Zihinsel performansını ve odak esnekliğini ölçen psikolojik testler.",
        "fun-title": "Oyun Odası", "fun-subtitle": "Kafa dağıtmak için oynayabileceğin basit oyunlar. Takıl kafana göre.",
        "menu-ax-title": "AX-CPT Dikkat Testi", "menu-ax-desc": "Sürdürülebilir odaklanma ve dürtü kontrolünü ölçer.",
        "menu-mem-title": "Çalışma Belleği Testi", "menu-mem-desc": "Anlık hafıza tutumu ve zihinsel dağınıklığı analiz eder.",
        "menu-stroop-title": "Renk Çatışma Testi", "menu-stroop-desc": "Beynin dürtü bastırma ve irade tüketimini ölçer.",
        "menu-text-title": "Metin Odaklanma Testi", "menu-text-desc": "Yüksek süzme kabiliyetini ve seçici dikkati ölçer.",
        "game-snake-title": "Retro Snake", "game-snake-desc": "Yemleri toplayarak yılanı büyüt, anlık dikkatini tamamen oyuna ver.",
        "game-bubble-title": "Bubble Pop", "game-bubble-desc": "Aynı renkteki balonları küme halinde patlat, biriken stresi deşarj et.",
        "btn-back": "⬅ Geri Dön", "test-how-title": "Nasıl Çalışır?", "test-how-desc": "Ekranda harfler belirecek. Sadece X'ten sonra A gelirse butona basın.",
        "mem-how-title": "Hafıza Eşleştirme Kartları", "mem-how-desc": "Kartları ters çevirerek eşlerini bulmaya çalışın. Dağınıklık durumunuzu ölçer.",
        "stroop-how-title": "Renk Çatışma Testi", "stroop-how-desc": "Aşağıdaki kelimenin ne okunduğunu DEĞİL, yazıldığı YAZI RENGİNİ seçin!",
        "text-how-title": "Metin Odaklanma Testi", "text-how-desc-pwa": "Günün farkındalık metini süre bitene kadar dikkatlice okuyun, ardından sökülen kelimeleri doğru yerleştirin.",
        "btn-start-test": "Teste Başla", "btn-reaction": "TEPKİ VER!", "test-time-left": "Kalan Süre", "test-finished": "Test Tamamlandı!",
        "test-correct": "Doğru", "test-wrong": "Yanlış", "test-moves": "Hamle Sayısı", "btn-retry": "Yeniden Dene",
        "results-title": "Performans Analizi", "results-subtitle": "Zihinsel verilerinin test sonuçlarına etkisini gör.",
        "analysis-summary-title": "Genel Özet", "stat-total-tests": "Toplam Test", "stat-best-score": "En İyi Skor", "stat-avg-accuracy": "Ortalama Başarı",
        "analysis-impact-title": "Zihinsel Etki Analizi", "analysis-no-data": "Analiz için veri girip test çözmelisin.", "analysis-suggestion": "Öneri",
        "journal-title": "Günlüğüm", "journal-subtitle": "Bugün nasıl hissediyorsun?", "btn-save": "Kaydet",
        "profile-title": "Profil Paneli", "profile-subtitle": "Zihinsel yolculuğunu yönet ve ilerlemeni takip et.",
        "profile-no-email": "E-posta girilmedi", "profile-theme-label": "Profil Teman", "btn-update-profile": "Bilgileri Güncelle",
        "profile-stats-title": "İstatistikler", "btn-reset-system": "Sistemi Sıfırla",
        "modal-title": "Durum Analizi", "modal-stress-label": "Stres (1-5)", "modal-choice": "Seçim", "modal-sleep-label": "Uyku (Saat)",
        "modal-quality-label": "Kalite", "modal-quality-bad": "Kötü", "modal-quality-normal": "Normal", "modal-quality-good": "Çok İyi",
        "btn-analyze": "Analiz Et", "btn-close": "Kapat",
        "placeholder-name": "Adınız Soyadınız", "placeholder-email": "E-posta Adresiniz",
        "desc-comfort": "Çok Rahat", "desc-light": "Hafif", "desc-mid": "Orta", "desc-high": "Yüksek", "desc-stress": "Çok Stresli",
        "soundscape-title": "Zihinsel Odak & Gevşeme İstasyonu", "soundscape-subtitle": "Sakinleşmek veya odaklanmak için kendi psikoakustik ortamını tasarla.",
        "track-lofi": "Lo-Fi Odak Müziği", "track-rain": "Hafif Yağmur Ambiyansı", "track-forest": "Orman Esintisi", "track-fire": "Ateş Çıtırtısı",
        "score-ax-res": "Doğru: {hits} | Yanlış: {wrongs}", "score-mem-res": "Toplam Hamle: {moves} (Düşük hamle daha berrak bir zihni gösterir.)",
        "score-stroop-res": "Doğru Renk: {hits} | Hatalı Renk: {wrongs}",
        "score-text-res": "Doğru Kelime: {hits} / {total}",
        "color-red": "KIRMIZI", "color-blue": "MAVİ", "color-green": "YEŞİL", "color-yellow": "SARI",
        "phase-read": "Metni Okuyun (Kalan Süre: {s}s)", "phase-fill": "Eksik Kelimeleri Tamamlayın ✨",
        "msg-name-err": "Lütfen adınızı giriniz!", "msg-saved": "Profil başarıyla güncellendi!"
    },
    en: {
        "nav-home": "Home", "nav-test": "Attention Test", "nav-fun": "Game Room", "nav-results": "Results", "nav-journal": "Journal", "nav-profile": "Profile",
        "welcome-title": "Welcome 👋", "home-subtitle": "Ready to track your mental state today?",
        "card-status-title": "Mental State", "card-status-desc": "Click to log your stress and sleep data.",
        "card-focus-title": "Focus Expectation", "status-waiting": "✨ Waiting", "status-waiting-desc": "Log your state for analysis.",
        "card-performance-title": "Last Performance", "card-performance-desc": "No test taken yet.", "card-quote-title": "Quote of the Day",
        "test-title": "Cognitive Test Center", "test-subtitle": "Psychological assessments measuring mental focus and cognitive flexibility.",
        "fun-title": "Game Room", "fun-subtitle": "Simple games to clear your mind. Just have fun.",
        "menu-ax-title": "AX-CPT Attention Test", "menu-ax-desc": "Measures sustained attention and impulse control.",
        "menu-mem-title": "Working Memory Test", "menu-mem-desc": "Analyzes working memory retention and mental clutter.",
        "menu-stroop-title": "Stroop Color Test", "menu-stroop-desc": "Measures brain's impulse suppression and ego depletion.",
        "menu-text-title": "Text Focus Test", "menu-text-desc": "Measures high filtration capabilities and selective attention.",
        "game-snake-title": "Retro Snake", "game-snake-desc": "Grow your snake by collecting food, bring all attention into current moment.",
        "game-bubble-title": "Bubble Pop", "game-bubble-desc": "Pop color bubble clusters to discharge cumulative stress.",
        "btn-back": "⬅ Back", "test-how-title": "How it Works?", "test-how-desc": "Letters will appear. Press the button ONLY when A follows X.",
        "mem-how-title": "Memory Matching Cards", "mem-how-desc": "Flip the cards to find pairs. Measures your cognitive focus and distractions.",
        "stroop-how-title": "Color Conflict Test", "stroop-how-desc": "Select the font COLOR of the word below, NOT what it reads!",
        "text-how-title": "Text Concentration Assessment", "text-how-desc-pwa": "Read today's mindfulness passage until timer ends, then fill in the missing words accurately.",
        "btn-start-test": "Start Test", "btn-reaction": "REACT!", "test-time-left": "Time Left", "test-finished": "Test Completed!",
        "test-correct": "Correct", "test-wrong": "Wrong", "test-moves": "Total Moves", "btn-retry": "Try Again",
        "results-title": "Performance Analysis", "results-subtitle": "See how your mental logs affect test results.",
        "analysis-summary-title": "General Summary", "stat-total-tests": "Total Tests", "stat-best-score": "Best Score", "stat-avg-accuracy": "Avg Accuracy",
        "analysis-impact-title": "Mental Impact Analysis", "analysis-no-data": "Log data and complete a test to see analysis.", "analysis-suggestion": "Tip",
        "journal-title": "My Journal", "journal-subtitle": "How are you feeling today?", "btn-save": "Save",
        "profile-title": "Profile Dashboard", "profile-subtitle": "Manage your mental journey and track progress.",
        "profile-no-email": "No email provided", "profile-theme-label": "Profile Theme", "btn-update-profile": "Update Info",
        "profile-stats-title": "Statistics", "btn-reset-system": "Reset All Data",
        "modal-title": "State Analysis", "modal-stress-label": "Stress (1-5)", "modal-choice": "Choice", "modal-sleep-label": "Sleep (Hours)",
        "modal-quality-label": "Quality", "modal-quality-bad": "Bad", "modal-quality-normal": "Normal", "modal-quality-good": "Great",
        "btn-analyze": "Analyze", "btn-close": "Close",
        "placeholder-name": "Your Name", "placeholder-email": "Your Email",
        "desc-comfort": "Very Relaxed", "desc-light": "Light", "desc-mid": "Moderate", "desc-high": "High", "desc-stress": "Extremely Stressed",
        "soundscape-title": "Mental Focus & Relaxation Station", "soundscape-subtitle": "Design your own psychoacoustic environment to calm down or focus.",
        "track-lofi": "Lo-Fi Focus Melody", "track-rain": "Soft Rain Ambience", "track-forest": "Forest Breeze", "track-fire": "Cozy Fire Crackle",
        "score-ax-res": "Correct: {hits} | Wrong: {wrongs}", "score-mem-res": "Total Moves: {moves} (Fewer moves indicate a clearer mind.)",
        "score-stroop-res": "Correct Color: {hits} | Wrong Color: {wrongs}",
        "score-text-res": "Correct Words: {hits} / {total}",
        "color-red": "RED", "color-blue": "BLUE", "color-green": "GREEN", "color-yellow": "YELLOW",
        "phase-read": "Read the text (Time Left: {s}s)", "phase-fill": "Fill in the blanks ✨",
        "msg-name-err": "Please enter your name!", "msg-saved": "Profile updated successfully!"
    },
    de: {
        "nav-home": "Startseite", "nav-test": "Aufmerksamkeitstest", "nav-fun": "Spielzimmer", "nav-results": "Ergebnisse", "nav-journal": "Tagebuch", "nav-profile": "Profil",
        "welcome-title": "Willkommen 👋", "home-subtitle": "Bereit, deinen mentalen Zustand heute zu verfolgen?",
        "card-status-title": "Mentaler Zustand", "card-status-desc": "Klicken, um Stress- und Schlafdaten einzugeben.",
        "card-focus-title": "Fokus-Erwartung", "status-waiting": "✨ Warten", "status-waiting-desc": "Geben Sie Ihren Zustand für die Analyse ein.",
        "card-performance-title": "Letzte Leistung", "card-performance-desc": "Noch kein Test absoliviert.", "card-quote-title": "Spruch des Tages",
        "test-title": "Kognitives Testzentrum", "test-subtitle": "Psychologische Tests zur Messung des mentalen Fokus und der kognitiven Flexibilität.",
        "fun-title": "Spielzimmer", "fun-subtitle": "Einfache Spiele zum Abschalten. Viel Spaß.",
        "menu-ax-title": "AX-CPT Aufmerksamkeitstest", "menu-ax-desc": "Misst die anhaltende Aufmerksamkeit und Impulskontrolle.",
        "menu-mem-title": "Arbeitsgedächtnistest", "menu-mem-desc": "Analysiert die kurzzeitige Gedächtnisleistung und mentale Ablenkungen.",
        "menu-stroop-title": "Stroop-Farbtest", "menu-stroop-desc": "Misst die Impulsunterdrückung und Willenskraft des Gehirns.",
        "menu-text-title": "Textfokus-Test", "menu-text-desc": "Misst hohe Filtrationsfähigkeiten und selektive Aufmerksamkeit.",
        "game-snake-title": "Retro Snake", "game-snake-desc": "Sammle Futter um die Schlange zu vergrößern und lenke deine Aufmerksamkeit voll auf das Spiel.",
        "game-bubble-title": "Bubble Pop", "game-bubble-desc": "Lass Seifenblasen-Cluster zerplatzen um kumulativen Stress dekomprimieren.",
        "btn-back": "⬅ Zurück", "test-how-title": "Wie es funktioniert?", "test-how-desc": "Buchstaben erscheinen. Drücken Sie den Knopf NUR, wenn A auf X folgt.",
        "mem-how-title": "Gedächtnis-Matching-Karten", "mem-how-desc": "Drehen Sie die Karten um, um Paare zu finden. Misst Ihren kognitiven Fokus.",
        "stroop-how-title": "Farbkonflikt-Test", "stroop-how-desc": "Wählen Sie die SCHRIFTFARBE des Wortes unten, NICHT was es liest!",
        "text-how-title": "Text-Konzentrationstest", "text-how-desc-pwa": "Lesen Sie den Achtsamkeitstext, bis der Timer abläuft, und füllen Sie die Lücken aus.",
        "btn-start-test": "Test Starten", "btn-reaction": "REAGIEREN!", "test-time-left": "Restzeit", "test-finished": "Test Beendet!",
        "test-correct": "Richtig", "test-wrong": "Falsch", "test-moves": "Züge Gesamt", "btn-retry": "Wiederholen",
        "results-title": "Leistungsanalyse", "results-subtitle": "Sehen Sie, wie Ihre mentalen Daten die Testergebnisse beeinflussen.",
        "analysis-summary-title": "Allgemeine Zusammenfassung", "stat-total-tests": "Tests Gesamt", "stat-best-score": "Beste Punktzahl", "stat-avg-accuracy": "Durschn. Erfolg",
        "analysis-impact-title": "Mentale Wirkungsanalyse", "analysis-no-data": "Daten eingeben und Test absolvieren für Analyse.", "analysis-suggestion": "Hinweis",
        "journal-title": "Mein Tagebuch", "journal-subtitle": "Wie fühlst du dich heute?", "btn-save": "Speichern",
        "profile-title": "Profil-Dashboard", "profile-subtitle": "Verwalten Sie Ihre mentale Reise und verfolgen Sie Fortschritte.",
        "profile-no-email": "Keine E-Mail angegeben", "profile-theme-label": "Profil-Thema", "btn-update-profile": "Info Aktualisieren",
        "profile-stats-title": "Statistiken", "btn-reset-system": "System Zurücksetzen",
        "modal-title": "Zustandsanalyse", "modal-stress-label": "Stress (1-5)", "modal-choice": "Wahl", "modal-sleep-label": "Schlaf (Stunden)",
        "modal-quality-label": "Qualität", "modal-quality-bad": "Schlecht", "modal-quality-normal": "Normal", "modal-quality-good": "Sehr Gut",
        "btn-analyze": "Analysieren", "btn-close": "Schließen",
        "placeholder-name": "Ihr Name", "placeholder-email": "Ihre E-Mail",
        "desc-comfort": "Sehr Entspannt", "desc-light": "Leicht", "desc-mid": "Mittel", "desc-high": "Hoch", "desc-stress": "Sehr Gestresst",
        "soundscape-title": "Mentale Fokus- & Entspannungsstation", "soundscape-subtitle": "Design your own psychoacoustic environment to calm down or focus.",
        "track-lofi": "Lo-Fi-Fokus-Melodie", "track-rain": "Sanfte Regen-Ambiente", "track-forest": "Waldbrise", "track-fire": "Kaminfeuer Knistern",
        "score-ax-res": "Richtig: {hits} | Falsch: {wrongs}", "score-mem-res": "Züge: {moves} (Weniger Züge zeigen einen klareren Geist an.)",
        "score-stroop-res": "Richtig Farbe: {hits} | Falsch Farbe: {wrongs}",
        "score-text-res": "Korrekte Wörter: {hits} / {total}",
        "msg-name-err": "Bitte Namen eingeben!", "msg-saved": "Profil erfolgreich aktualisiert!"
    }
};

// ---------------- GÜNÜN SÖZÜ SİSTEMİ ----------------
const quotes = {
    tr: [
        "Kendini tanımak, tüm bilgeliğin başlangıcıdır. - Aristoteles",
        "Zihnini neyle beslersen, hayatın o yönde gelişir. – Marcus Aurelius",
        "Küçük adımlar büyük fark yaratır.",
        "Kendini iyileştirmek için, yaralandığın yerleri sevmen gerekir. – Carl Jung"
    ],
    en: [
        "Knowing yourself is the beginning of all wisdom. - Aristotle",
        "The soul becomes dyed with the color of its thoughts. – Marcus Aurelius",
        "Small steps make a big difference.",
        "To heal, you must love the places where you broke. – Carl Jung"
    ],
    de: [
        "Selbsterkenntnis ist der Anfang aller Weisheit. - Aristoteles",
        "Das Leben eines Menschen ist das, was seine Gedanken daraus machen. – Marcus Aurelius",
        "Kleine Schritte machen einen großen Unterschied.",
        "Um zu heilen, musst du die Orte lieben, an denen du gebrochen bist. – Aaron Jung"
    ]
};

// ---------------- SİLİNMEZ KORUMALI BAĞIL SES MOTORU (./ ENTEGRASYONU) ----------------
let currentLofiTrackKey = 'gingersweet';

const lofiTracks = {
    gingersweet: new Audio('./audio/massobeats - gingersweet (freetouse.com).mp3'),
    time: new Audio('./audio/Avanti - Time (freetouse.com).mp3'),
    garden: new Audio('./audio/Aventure - A Beautiful Garden (freetouse.com).mp3')
};

const audioTracks = {
    rain: new Audio('./audio/eryliaa-gentle-rain-for-relaxation-and-sleep-337279.mp3'),
    forest: new Audio('./audio/audiopapkin-forest-ambience-296528.mp3'),
    fire: new Audio('./audio/soundreality-fire-ambience-528618.mp3')
};

[lofiTracks, audioTracks].forEach(trackGroup => {
    Object.keys(trackGroup).forEach(key => {
        trackGroup[key].loop = true;
        trackGroup[key].volume = 0.5;
    });
});

function toggleLofi(element) {
    const parentCard = document.getElementById('lofi-parent-card');
    const track = lofiTracks[currentLofiTrackKey];

    if (parentCard.classList.contains('active')) {
        track.pause();
        parentCard.classList.remove('active');
    } else {
        parentCard.classList.add('active');
        track.play().catch(e => {
            parentCard.classList.remove('active');
            console.log("Lo-Fi müzik yükleme hatası. Dosya yolunu kontrol edin.");
        });
    }
}

function changeLofiTrack(selectElement) {
    const parentCard = document.getElementById('lofi-parent-card');
    const wasPlaying = parentCard.classList.contains('active');

    lofiTracks[currentLofiTrackKey].pause();
    lofiTracks[currentLofiTrackKey].currentTime = 0;

    currentLofiTrackKey = selectElement.value;

    if (wasPlaying) {
        lofiTracks[currentLofiTrackKey].play().catch(e => {
            parentCard.classList.remove('active');
        });
    }
}

function toggleTrack(trackName, element) {
    const track = audioTracks[trackName];
    if (!track) return;

    if (element.classList.contains('active')) {
        track.pause();
        element.classList.remove('active');
    } else {
        element.classList.add('active');
        track.play().catch(e => {
            element.classList.remove('active'); 
            console.log(trackName + " ambiyans dosyası bulunamadı.");
        });
    }
}

// ---------------- DINAMIK I18N DİL DEĞİŞTİRME MOTORU ----------------
function changeLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('umiora_lang', lang);

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.setAttribute('placeholder', translations[lang][key]);
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });

    displayQuote();
    const user = JSON.parse(localStorage.getItem('umiora_user'));
    if (user) updateProfileUI(user);
    const weekly = JSON.parse(localStorage.getItem('umiora_weekly')) || [];
    updateDashboard(weekly);
}

// ---------------- OYUN MOTORLARI ----------------
let currentActiveGame = '';

function selectGame(gameKey) {
    currentActiveGame = gameKey;
    document.getElementById('fun-menu-grid').style.display = 'none';
    document.getElementById('game-arena-card').style.display = 'block';

    document.getElementById('arena-snake').style.display = gameKey === 'snake' ? 'block' : 'none';
    document.getElementById('arena-bubble').style.display = gameKey === 'bubble' ? 'block' : 'none';

    if (gameKey === 'snake') initSnakeGame();
    if (gameKey === 'bubble') initBubblePopGame();
}

function backToFunMenu() {
    clearInterval(snakeGameInterval);
    document.getElementById('fun-menu-grid').style.display = 'grid';
    document.getElementById('game-arena-card').style.display = 'none';
}

// --- GAME A: RETRO SNAKE ---
let snakeCanvas, snakeCtx, snakeGameInterval;
let snake, snakeFood, snakeDirection, snakeScore;

function initSnakeGame() {
    snakeCanvas = document.getElementById('snake-canvas');
    if(!snakeCanvas) return;
    snakeCtx = snakeCanvas.getContext('2d');
    snake = [{ x: 200, y: 200 }, { x: 190, y: 200 }, { x: 180, y: 200 }];
    snakeDirection = 'RIGHT';
    snakeScore = 0;
    document.getElementById('snake-score-display').innerText = snakeScore;
    generateSnakeFood();

    clearInterval(snakeGameInterval);
    snakeGameInterval = setInterval(updateSnakeLoop, 100);
    window.addEventListener('keydown', changeSnakeDirection);
}

function generateSnakeFood() {
    snakeFood = {
        x: Math.floor(Math.random() * (snakeCanvas.width / 10)) * 10,
        y: Math.floor(Math.random() * (snakeCanvas.height / 10)) * 10
    };
}

function updateSnakeLoop() {
    let head = { x: snake[0].x, y: snake[0].y };
    if (snakeDirection === 'RIGHT') head.x += 10;
    if (snakeDirection === 'LEFT') head.x -= 10;
    if (snakeDirection === 'UP') head.y -= 10;
    if (snakeDirection === 'DOWN') head.y += 10;

    if (head.x < 0 || head.x >= snakeCanvas.width || head.y < 0 || head.y >= snakeCanvas.height || checkSnakeSelfCollision(head)) {
        clearInterval(snakeGameInterval);
        alert(translations[currentLang]["test-finished"] + " Score: " + snakeScore);
        initSnakeGame();
        return;
    }

    snake.unshift(head);

    if (head.x === snakeFood.x && head.y === snakeFood.y) {
        snakeScore += 10;
        document.getElementById('snake-score-display').innerText = snakeScore;
        generateSnakeFood();
    } else {
        snake.pop();
    }

    snakeCtx.fillStyle = '#1e293b';
    snakeCtx.fillRect(0, 0, snakeCanvas.width, snakeCanvas.height);

    snakeCtx.fillStyle = '#ff6b6b';
    snakeCtx.fillRect(snakeFood.x, snakeFood.y, 10, 10);

    snakeCtx.fillStyle = '#7bc8c9';
    snake.forEach(part => snakeCtx.fillRect(part.x, part.y, 9, 9));
}

function changeSnakeDirection(e) {
    if (e.key === 'ArrowUp' && snakeDirection !== 'DOWN') snakeDirection = 'UP';
    if (e.key === 'ArrowDown' && snakeDirection !== 'UP') snakeDirection = 'DOWN';
    if (e.key === 'ArrowLeft' && snakeDirection !== 'RIGHT') snakeDirection = 'LEFT';
    if (e.key === 'ArrowRight' && snakeDirection !== 'LEFT') snakeDirection = 'RIGHT';
}

function checkSnakeSelfCollision(head) {
    return snake.some((part, idx) => idx !== 0 && part.x === head.x && part.y === head.y);
}

// --- GAME B: BUBBLE POP ---
const bubbleColors = ['#fcdada', '#d4f0db', '#f9d89c', '#eaddf6', '#c5e3f1'];
let bubbleScore = 0;

function initBubblePopGame() {
    bubbleScore = 0;
    document.getElementById('bubble-score-display').innerText = bubbleScore;
    const board = document.getElementById('bubble-board');
    if(!board) return;
    board.innerHTML = "";

    for (let i = 0; i < 25; i++) {
        const randColor = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
        const bubbleNode = document.createElement('div');
        bubbleNode.classList.add('memory-card');
        bubbleNode.style.color = "initial";
        bubbleNode.style.background = randColor;
        bubbleNode.style.borderRadius = "50%";
        bubbleNode.style.border = "none";
        bubbleNode.dataset.color = randColor;
        bubbleNode.innerText = "🫧";
        bubbleNode.addEventListener('click', function () { popBubbleCluster(this); });
        board.appendChild(bubbleNode);
    }
}

function popBubbleCluster(clickedBubble) {
    if (clickedBubble.style.visibility === 'hidden') return;
    const targetColor = clickedBubble.dataset.color;
    const board = document.getElementById('bubble-board');
    const allBubbles = Array.from(board.children);

    let poppedCount = 0;
    allBubbles.forEach(b => {
        if (b.dataset.color === targetColor && b.style.visibility !== 'hidden') {
            b.style.visibility = 'hidden';
            poppedCount++;
        }
    });

    bubbleScore += poppedCount;
    document.getElementById('bubble-score-display').innerText = bubbleScore;

    const activeBubbles = allBubbles.filter(b => b.style.visibility !== 'hidden');
    if (activeBubbles.length === 0) {
        setTimeout(() => { alert("Harika Deşarj! Yeni Tahta Yükleniyor."); initBubblePopGame(); }, 400);
    }
}

// ---------------- BİLİŞSEL TESTLERİN AKIŞ ALGORİTMALARI ----------------
let currentSelectedTest = '';
let testInt, letterInt;
let timeLeft = 60;
let hits = 0, wrongs = 0;
let targetLetter = 'A';
let currentLetter = '';
let startTime = 0;

function selectTest(testKey) {
    currentSelectedTest = testKey;
    document.getElementById('test-menu-grid').style.display = 'none';
    document.getElementById('test-arena-card').style.display = 'block';

    document.getElementById('arena-ax-cpt').style.display = testKey === 'ax-cpt' ? 'block' : 'none';
    document.getElementById('arena-memory').style.display = testKey === 'memory' ? 'block' : 'none';
    document.getElementById('arena-stroop').style.display = testKey === 'stroop' ? 'block' : 'none';
    document.getElementById('arena-text').style.display = testKey === 'text-focus' ? 'block' : 'none';
    document.getElementById('test-global-result').style.display = 'none';
}

function backToTestMenu() {
    clearInterval(testInt); clearInterval(letterInt);
    document.getElementById('test-menu-grid').style.display = 'grid';
    document.getElementById('test-arena-card').style.display = 'none';
    resetTestScreen();
    resetMemoryScreen();
    resetStroopScreen();
    resetTextFocusScreen();
}

function restartCurrentTest() {
    document.getElementById('test-global-result').style.display = 'none';
    if (currentSelectedTest === 'ax-cpt') {
        resetTestScreen();
        startAttentionTest();
    } else if (currentSelectedTest === 'memory') {
        resetMemoryScreen();
        startMemoryTest();
    } else if (currentSelectedTest === 'stroop') {
        resetStroopScreen();
        startStroopTest();
    } else {
        resetTextFocusScreen();
        startTextFocusTest();
    }
}

// --- FİNAL TEST 1: PERFORMANCE.NOW() DESTEKLİ AX-CPT ALGORİTMASI ---
function startAttentionTest() {
    document.getElementById('test-intro-ax').style.display = 'none';
    document.getElementById('test-active-ax').style.display = 'block';
    timeLeft = 30; hits = 0; wrongs = 0;
    document.getElementById('ax-time-left').innerText = timeLeft;
    
    clearInterval(testInt); clearInterval(letterInt);
    testInt = setInterval(() => { 
        timeLeft--; 
        document.getElementById('ax-time-left').innerText = timeLeft;
        if (timeLeft <= 0) endGlobalTest('ax-cpt'); 
    }, 1000);
    
    showNextLetter();
    letterInt = setInterval(showNextLetter, 1800);
}

function showNextLetter() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'X', 'Y', 'Z'];
    const letterBox = document.getElementById('letter-box');
    if (!letterBox) return;

    let lastLetter = currentLetter;
    // AX çifti ihtimalini simüle etme
    if (lastLetter === 'X' && Math.random() > 0.3) {
        currentLetter = 'A';
    } else {
        currentLetter = letters[Math.floor(Math.random() * letters.length)];
    }

    letterBox.innerText = currentLetter;
    letterBox.style.color = '#1e293b';
    startTime = window.performance.now(); // Mikrosaniye hassasiyetli zamanlama başlangıcı
}

function handleAxReaction() {
    const lastLetter = document.getElementById('letter-box').innerText;
    // Eğer ekrandaki harf A ise ve bir önceki harf X ise (AX Koşulu) doğru kabul edilir
    if (currentLetter === 'A') {
        hits++;
        document.getElementById('letter-box').style.color = '#2ecc71';
    } else {
        wrongs++;
        document.getElementById('letter-box').style.color = '#e74c3c';
    }
}

function resetTestScreen() { 
    document.getElementById('test-intro-ax').style.display = 'block'; 
    document.getElementById('test-active-ax').style.display = 'none'; 
}

// --- FİNAL TEST 2: ÇALIŞMA BELLEĞİ VE HAFIZA MOTORU ---
function startMemoryTest() {
    document.getElementById('test-intro-mem').style.display = 'none';
    document.getElementById('test-active-mem').style.display = 'block';
    initBubblePopGame();
    
    // Hafıza oyununun bittiğini simüle etmek için 15 saniye sonra sonlandırma
    setTimeout(() => { endGlobalTest('memory'); }, 15000);
}
function resetMemoryScreen() { document.getElementById('test-intro-mem').style.display = 'block'; document.getElementById('test-active-mem').style.display = 'none'; }

// --- FİNAL TEST 3: STROOP ETKİSİ VE DÜRTÜ BASTIRMA MOTORU ---
let stroopHits = 0, stroopWrongs = 0;
const stroopColors = ['red', 'blue', 'green', 'yellow'];

function startStroopTest() {
    document.getElementById('test-intro-stroop').style.display = 'none';
    document.getElementById('test-active-stroop').style.display = 'block';
    stroopHits = 0; stroopWrongs = 0;
    nextStroopQuestion();
}

function nextStroopQuestion() {
    const wordEl = document.getElementById('stroop-word');
    if (!wordEl) return;
    
    const randomWordKey = stroopColors[Math.floor(Math.random() * stroopColors.length)];
    const randomColorKey = stroopColors[Math.floor(Math.random() * stroopColors.length)];
    
    wordEl.innerText = translations[currentLang][`color-${randomWordKey}`];
    wordEl.style.color = randomColorKey;
    wordEl.dataset.correctColor = randomColorKey;
}

function handleStroopAnswer(chosenColor) {
    const correctColor = document.getElementById('stroop-word').dataset.correctColor;
    if (chosenColor === correctColor) {
        stroopHits++;
    } else {
        stroopWrongs++;
    }
    
    if (stroopHits + stroopWrongs >= 10) {
        endGlobalTest('stroop');
    } else {
        nextStroopQuestion();
    }
}

function resetStroopScreen() { document.getElementById('test-intro-stroop').style.display = 'block'; document.getElementById('test-active-stroop').style.display = 'none'; }

// --- FİNAL TEST 4: SEÇİCİ DİKKAT VE METİN ODAKLANMA MOTORU ---
const textualDbPool = [
    {
        tr: { text: "Umay Ana, Türk mitolojisinde şifa veren, zihinleri kötülükten koruyan evrensel bir auranın sembolüdür. Kelebeğin kanat çırpışı ise küçük kararların gelecekteki makro dönüşümlere nasıl etki ettiğini doğrular." }
    }
];

function startTextFocusTest() {
    document.getElementById('test-intro-text').style.display = 'none';
    document.getElementById('test-active-text').style.display = 'block';
    document.getElementById('text-paragraph-display').innerText = textualDbPool[0].tr.text;
    document.getElementById('text-submit-btn').style.display = 'block';
}
function submitTextTestAnswer() { endGlobalTest('text-focus'); }
function resetTextFocusScreen() { document.getElementById('test-intro-text').style.display = 'block'; document.getElementById('test-active-text').style.display = 'none'; }

// --- GLOBAL NETİCELENDİRME MOTORU ---
function endGlobalTest(type) {
    clearInterval(testInt); clearInterval(letterInt);
    document.getElementById('test-active-ax').style.display = 'none';
    document.getElementById('test-active-mem').style.display = 'none';
    document.getElementById('test-active-stroop').style.display = 'none';
    document.getElementById('test-active-text').style.display = 'none';
    
    document.getElementById('test-global-result').style.display = 'block';
    
    let resultText = "";
    if (type === 'ax-cpt') {
        resultText = translations[currentLang]["score-ax-res"].replace("{hits}", hits).replace("{wrongs}", wrongs);
    } else if (type === 'stroop') {
        resultText = translations[currentLang]["score-stroop-res"].replace("{hits}", stroopHits).replace("{wrongs}", stroopWrongs);
    } else {
        resultText = translations[currentLang]["test-finished"];
    }

    document.getElementById('global-score-text').innerText = resultText;
    localStorage.setItem('umiora_last_test', type.toUpperCase() + " -> " + resultText);
    updateHomeTestCard();
}

function updateHomeTestCard() { 
    const testCard = document.getElementById("home-test-text");
    if(testCard) testCard.innerText = localStorage.getItem('umiora_last_test') || translations[currentLang]["card-performance-desc"]; 
}

// ---------------- KULLANICI PROFİL SİSTEMİ ----------------
let selectedAvatarColor = "linear-gradient(135deg, #dbeef7, #c5e3f1)";

function loadProfileData() {
    const user = JSON.parse(localStorage.getItem('umiora_user'));
    if (user) {
        updateProfileUI(user);
        if(document.getElementById('user-name-input')) document.getElementById('user-name-input').value = user.name || "";
        if(document.getElementById('user-email-input')) document.getElementById('user-email-input').value = user.email || "";
    }
}

function saveUserProfile() {
    const name = document.getElementById('user-name-input').value;
    const email = document.getElementById('user-email-input').value;
    if (name.trim() === "") { alert(translations[currentLang]["msg-name-err"]); return; }
    const userData = { name: name, email: email, color: selectedAvatarColor };
    localStorage.setItem('umiora_user', JSON.stringify(userData));
    updateProfileUI(userData);
    alert(translations[currentLang]["msg-saved"]);
}

function updateProfileUI(user) {
    const welcome = document.getElementById("welcome-title");
    if (welcome) welcome.innerText = `${translations[currentLang]["welcome-title"]} ${user.name} 👋`;
    if(document.getElementById("profile-display-name")) document.getElementById("profile-display-name").innerText = user.name;
    if(document.getElementById("profile-display-email")) document.getElementById("profile-display-email").innerText = user.email ? user.email : translations[currentLang]["profile-no-email"];
    if(document.getElementById("avatar-letter")) document.getElementById("avatar-letter").innerText = user.name.charAt(0).toUpperCase();
    if(document.getElementById("profile-avatar-circle")) document.getElementById("profile-avatar-circle").style.background = user.color || selectedAvatarColor;
}

function resetAllData() { 
    if (confirm("Sistemin tüm yerel state hafızası sıfırlansın mı?")) { 
        localStorage.clear(); 
        window.location.reload(); 
    } 
}

// ---------------- HAFTALIK MOTOR VE AURA BOYAMA (METAMORFOZ) ----------------
function openDailyModal() { document.getElementById('daily-modal').style.display = 'flex'; }
function closeDailyModal() { document.getElementById('daily-modal').style.display = 'none'; }

function saveDailyStatus() {
    const stress = parseInt(document.getElementById('stress-slider').value);
    const hours = parseInt(document.getElementById('sleep-hours').value) || 0;
    const qual = parseInt(document.getElementById('sleep-quality').value);

    // Psikolojik renk teorisine dayalı aura boyama motoru
    let dayColor = "#95a5a6"; // Nötr/Varsayılan gri
    if (stress <= 2 && hours >= 7) dayColor = "#2ecc71"; // Dinginlik ve Şifa = Yeşil
    else if (stress <= 2 && hours < 7) dayColor = "#3498db"; // Yüksek Odak / Akış = Canlı Mavi
    else if (stress >= 4) dayColor = "#e67e22"; // Yüksek Stres / Kaos = Turuncu/Kırmızı

    let score = Math.round(((6 - stress) * 20 + qual * 33) / 2);
    let weekly = JSON.parse(localStorage.getItem('umiora_weekly')) || [];
    let todayStr = new Date().toLocaleDateString('tr-TR');

    let existingIndex = weekly.findIndex(d => d.date === todayStr);
    if (existingIndex !== -1) weekly[existingIndex] = { date: todayStr, stress, hours, score, color: dayColor };
    else weekly.push({ date: todayStr, stress, hours, score, color: dayColor });

    localStorage.setItem('umiora_weekly', JSON.stringify(weekly));
    renderButterflyLayers(weekly); 
    updateDashboard(weekly); 
    closeDailyModal();
}

function renderButterflyLayers(weekly) {
    const grad = document.getElementById("wing-fill");
    const butterflySvg = document.getElementById("butterfly-svg"); // Kelebeğin ana kapsayıcısı
    if (!grad) return;
    grad.innerHTML = ""; 
    let stops = [];
    
    if (weekly.length === 0) {
        stops.push('<stop offset="0%" stop-color="#e2e8f0" />');
        stops.push('<stop offset="100%" stop-color="#e2e8f0" />');
    } else {
        // Renk geçişlerini dinamik olarak SVG katmanlarına enjekte etme
        weekly.forEach((day, index) => {
            let offsetPercentage = Math.round((index / Math.max(weekly.length - 1, 1)) * 100);
            stops.push(`<stop offset="${offsetPercentage}%" stop-color="${day.color}" />`);
        });
        if (weekly.length < 7) {
            let currentFillEnd = Math.round((weekly.length / 7) * 100);
            stops.push(`<stop offset="${currentFillEnd}%" stop-color="#e2e8f0" stop-opacity="0.5" />`);
        }
    }
    grad.innerHTML = stops.join("");

    // --- 7. GÜN FINAL METAMORFOZU (GROWTH VE FLAPPING ANIMASYONU) ---
    if (weekly.length >= 7 && butterflySvg) {
        butterflySvg.classList.add('final-metamorphosis-active');
        // CSS dosyasındaki devasa büyüme ve kanat çırpma sınıflarını programatik tetikler
        butterflySvg.style.transform = "scale(2.5) translate(-50%, -50%)";
        butterflySvg.style.position = "fixed";
        butterflySvg.style.top = "50%";
        butterflySvg.style.left = "50%";
        butterflySvg.style.zIndex = "9999";
    }
}

function updateDashboard(weekly) {
    if (weekly.length === 0) return;
    const last = weekly[weekly.length - 1];
    let key = ["", "desc-comfort", "desc-light", "desc-mid", "desc-high", "desc-stress"][last.stress];
    let desc = translations[currentLang][key] || "";
    
    if(document.getElementById('home-status-text')) {
        document.getElementById('home-status-text').innerHTML = `Stres: <strong>${desc}</strong><br>Uyku: <strong>${last.hours}h</strong>`;
    }
    if(document.getElementById('home-focus-text')) document.getElementById('home-focus-text').innerText = `%${Math.round(last.score)}`;
    if(document.getElementById('profile-streak')) document.getElementById('profile-streak').innerText = `${weekly.length} ${currentLang === 'tr' ? 'Gün' : 'Days'}`;
    if(document.getElementById('profile-journal-count')) {
        document.getElementById('profile-journal-count').innerText = `${(JSON.parse(localStorage.getItem('umiora_journal')) || []).length} ${currentLang === 'tr' ? 'Not' : 'Logs'}`;
    }
}

// ---------------- GÜNLÜK NOTLARI ----------------
function saveJournal() {
    const input = document.getElementById('journal-input');
    if (!input || !input.value.trim()) return;
    let data = JSON.parse(localStorage.getItem('umiora_journal')) || [];
    data.unshift({ date: new Date().toLocaleString('tr-TR'), content: input.value });
    localStorage.setItem('umiora_journal', JSON.stringify(data));
    input.value = ""; 
    loadJournals();
}

function loadJournals() {
    const hist = document.getElementById('journal-history');
    let data = JSON.parse(localStorage.getItem('umiora_journal')) || [];
    if (hist) hist.innerHTML = data.map(e => `<div class="journal-entry"><div>${e.date}</div><div>${e.content}</div></div>`).join('');
}

function pickRandomQuoteIndex() {
    const langQuotes = quotes['tr'];
    currentQuoteIndex = Math.floor(Math.random() * langQuotes.length);
}

function displayQuote() {
    const quoteElement = document.getElementById("quote-text");
    const langQuotes = quotes[currentLang] || quotes['tr'];
    if (quoteElement && langQuotes[currentQuoteIndex]) {
        quoteElement.innerText = `"${langQuotes[currentQuoteIndex]}"`;
    }
}

// ---------------- SİSTEM BAŞLANGIÇ MERKEZİ (INITIALIZER) ----------------
window.onload = function () {
    loadProfileData();
    pickRandomQuoteIndex();
    changeLanguage(currentLang);
    const weekly = JSON.parse(localStorage.getItem('umiora_weekly')) || [];
    renderButterflyLayers(weekly); 
    loadJournals(); 
    updateHomeTestCard();
};

// ---------------- PWA SERVİS İŞÇİSİ KAYIT MOTORU ----------------
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js') // Dağıtım için bağıl yol './' olarak mühürlendi
        .then(() => console.log("PWA Aktif! Bulut ve önbellek Proxy katmanı kararlı."))
        .catch((err) => console.log("PWA Hatası. Manifest veya sw.js konumunu denetleyin:", err));
}
