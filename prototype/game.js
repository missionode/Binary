
const GameEngine = {
    // --- DATA STORE ---
    questions: [
        { text: "What is one memory with me that you'd love to relive for the first time?", category: "Intimacy & Depth", intensity: "Low" },
        { text: "If we were characters in a movie, what would our genre be?", category: "Fun & Abstract", intensity: "Low" },
        { text: "What is a habit of mine that you secretly find adorable?", category: "Appreciation", intensity: "Medium" },
        { text: "When did you first realize you were interested in me?", category: "Origin Story", intensity: "Medium" },
        { text: "What's one thing you've hesitated to say to me but want to say now?", category: "Vulnerability", intensity: "High" },
        { text: "If you could freeze one moment of our time together, which would it be?", category: "Nostalgia", intensity: "High" },
        { text: "What is your favorite non-physical attribute of mine?", category: "Appreciation", intensity: "Low" },
        { text: "Describe our dynamic in three words.", category: "Abstract", intensity: "Low" },
        { text: "What is the biggest risk you've taken for us?", category: "History", intensity: "High" },
        { text: "If we could travel anywhere tomorrow, where would we go?", category: "Dreams", intensity: "Low" }
    ],

    challenges: [
        { title: "Staring Contest", desc: "Lock eyes for 30s without blinking.", icon: "visibility" },
        { title: "Synced High-Five", desc: "Hit it at the exact same moment.", icon: "pan_tool" },
        { title: "Whisper a Secret", desc: "Share something no one else knows.", icon: "mic_external_on" },
        { title: "Mirror Movement", desc: "Copy each other's moves for 60s.", icon: "repeat" },
        { title: "Simultaneous Shout", desc: "Yell your favorite food on 'Three'.", icon: "campaign" },
        { title: "Thumb War", desc: "Best of three rounds.", icon: "thumb_up" },
        { title: "Trust Fall", desc: "Catch me if you can (carefully!).", icon: "favorite" },
        { title: "Compliment Battle", desc: "Back and forth until someone hesitates.", icon: "sentiment_satisfied" },
        { title: "Harmonize", desc: "Hum a note and try to match pitch.", icon: "music_note" },
        { title: "Touch Test", desc: "Close eyes, guess where I touched you.", icon: "touch_app" }
    ],

    // --- STATE MANAGEMENT ---
    savePlayers: (p1, p2) => {
        localStorage.setItem('binary_p1', p1 || 'Player 1');
        localStorage.setItem('binary_p2', p2 || 'Player 2');
    },

    getPlayers: () => {
        return {
            p1: localStorage.getItem('binary_p1') || 'Player 1',
            p2: localStorage.getItem('binary_p2') || 'Player 2'
        };
    },

    setTurn: (player) => {
        localStorage.setItem('binary_turn', player);
    },

    getTurn: () => {
        return localStorage.getItem('binary_turn');
    },
    
    // NEW: Draft State
    setDraft: (p1Cards, p2Cards) => {
        localStorage.setItem('binary_draft_p1', JSON.stringify(p1Cards));
        localStorage.setItem('binary_draft_p2', JSON.stringify(p2Cards));
    },

    getDraft: () => {
        return {
            p1Cards: JSON.parse(localStorage.getItem('binary_draft_p1') || '[]'),
            p2Cards: JSON.parse(localStorage.getItem('binary_draft_p2') || '[]')
        };
    },

    // NEW: Generate Quiz Queue (Alternating)
    generateQuizQueue: () => {
        const draft = GameEngine.getDraft();
        const players = GameEngine.getPlayers();
        const queue = [];
        
        // Interleave turns: P1, P2, P1, P2...
        // Assuming 3 cards each, total 6 rounds.
        const count = Math.max(draft.p1Cards.length, draft.p2Cards.length);
        
        for (let i = 0; i < count; i++) {
            if (draft.p1Cards[i] !== undefined) {
                // Determine question based on card ID (mocking mapping for now)
                // In a real app, card ID maps to a specific question. 
                // Here we just pull a random unique one or use the ID to seed it.
                const q = GameEngine.questions[draft.p1Cards[i] % GameEngine.questions.length];
                queue.push({ player: players.p1, question: q });
            }
            if (draft.p2Cards[i] !== undefined) {
                const q = GameEngine.questions[draft.p2Cards[i] % GameEngine.questions.length];
                queue.push({ player: players.p2, question: q });
            }
        }
        return queue;
    },

    setWinner: (winnerName) => {
        localStorage.setItem('binary_winner', winnerName);
    },

    getWinner: () => {
        return localStorage.getItem('binary_winner');
    },

    // --- INTELLIGENCE SIMULATION ---
    getRandomQuestion: () => {
        const idx = Math.floor(Math.random() * GameEngine.questions.length);
        return GameEngine.questions[idx];
    },

    generateChallenges: (count = 10) => {
        // Fisher-Yates Shuffle
        const shuffled = [...GameEngine.challenges];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        // Assign to P1/P2
        const selected = shuffled.slice(0, count);
        return selected.map((c, i) => ({
            ...c,
            assignee: i < count / 2 ? "P1" : "P2"
        }));
    },

    // NEW: Dynamic AI Challenges
    setAIChallenges: (challenges) => {
        localStorage.setItem('binary_ai_challenges', JSON.stringify(challenges));
    },

    getAIChallenges: () => {
        const stored = localStorage.getItem('binary_ai_challenges');
        if (stored) return JSON.parse(stored);
        
        // Fallback to static if AI fails (10 total, 5 each)
        return GameEngine.generateChallenges(10);
    },

    generateScanResult: () => {
        const percentage = Math.floor(Math.random() * (98 - 60 + 1) + 60); // 60-98%
        const biases = ["Stable", "Elevated", "Syncing", "Volatile"];
        const bias = biases[Math.floor(Math.random() * biases.length)];
        localStorage.setItem('binary_match_score', percentage);
        localStorage.setItem('binary_match_bias', bias);
        return { percentage, bias };
    },

    getScanResult: () => {
        return {
            percentage: localStorage.getItem('binary_match_score') || 75,
            bias: localStorage.getItem('binary_match_bias') || 'Stable'
        };
    }
};
