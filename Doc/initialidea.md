This is an exciting concept! A high-energy, interactive game for two players blending chance (toss), strategy (card selection), intimacy/connection (questions), and tech (AI face scanning).

Here is the comprehensive **Architectural Blueprint** for your game prototype "DuoQuest" (placeholder name). This covers the Visual Identity, User Flow, Page List, and Microcopy to prepare us for the coding phase.

---

### 1. Visual Identity & Branding 🫆

We will aim for a **"Modern Arcade meets Clean Tech"** aesthetic. It needs to feel playful but structured.

* **Game Name:** **DuoSync** (Simple, implies connection and action).
* **Logo:** Text-based "DuoSync" with the 'D' as the mark.
* **Color Palette (Tailwind):**
* **Background:** `bg-slate-50` (Light, clean).
* **Primary Action:** `text-indigo-600` / `bg-indigo-600` (Buttons, key highlights).
* **Player 1 (Male/P1):** `text-sky-500` (Calm, assertive).
* **Player 2 (Female/P2):** `text-rose-500` (Energetic, distinct).
* **The AI/Cards:** `text-emerald-500` (Digital, neutral).


* **Typography:** `Inter` or `Poppins` (via Tailwind Typography plugin) for high readability on mobile.
* **Visual Motif:** The "Card" 🫆. We will use clean white cards with soft shadows (`shadow-lg`) and rounded corners (`rounded-xl`).

---

### 2. User Flow

This flow ensures the game moves seamlessly from one stage to the next without page reloads (using a Single Page Application approach or smooth transitions between HTML files).

1. **Onboarding:** Enter Player Names -> Camera Permission.
2. **Stage 1 (The Toss):** Coin Flip Animation -> Winner Declared.
3. **Stage 2 (The Draft):** 20 Cards Face Down -> P1 Picks 3, P2 Picks 3.
4. **Stage 3 (The Inquisition):** Turn-based Q&A (Card Reveal -> Answer -> Mark Complete).
5. **Stage 4 (AI Scan):** Open Camera -> Overlay Scanning Animation -> "Analyzing Compatibility..." -> AI Generates 5 Activity Cards.
6. **Stage 5 (The Gauntlet):** Players complete 5 AI activities -> Check them off.
7. **Stage 6 (The Loop):** Final Toss -> Winner assigns Task -> "Play Again?"

---

### 3. List of Pages (File Structure)

To keep the prototype clean and modular (Atomic structure), we will separate concerns.

* `index.html`: The entry point (Landing & Player Setup).
* `toss.html`: The coin toss arena.
* `draft.html`: The 20-card grid for selection.
* `quiz.html`: The alternating Q&A gameplay.
* `ai-scan.html`: Webcam interface and "Scanning" simulation.
* `activities.html`: The AI-generated task list.
* `loop.html`: The final toss and custom task assignment.
* `styles.css`: Custom animations (flip, scan).
* `app.js`: Main logic controller (state management).

---

### 4. Detailed Breakdown: Microcopy & Elements

#### **Page 1: Landing (`index.html`)**

* **Goal:** Get players ready and grant permissions.
* **Elements:**
* Logo (Top Left).
* Two Input Fields: "Player 1 Name" & "Player 2 Name".
* Button: "Start Game".
* Hidden disclaimer: "Camera access required for AI features."


* **Microcopy:**
* *Headline:* "Sync Up. Game On."
* *Button:* "Enter the Arena"



#### **Page 2: The Toss (`toss.html`)**

* **Goal:** Decide turn order.
* **Elements:**
* 3D CSS Coin (Heads/Tails).
* Button: "Flip Coin".
* Result Display: "Player X Goes First!"


* **Microcopy:**
* *Instruction:* "Fate decides who leads."
* *Result:* "[Name] takes the lead!"



#### **Page 3: The Draft (`draft.html`)**

* **Goal:** Select the questions.
* **Elements:**
* Grid of 20 "Face Down" Cards (using the 🫆 visual).
* Counter: "Player [Name], pick [x] cards."
* Visual feedback: Selected cards glow or flip.


* **Microcopy:**
* *Header:* "Choose Your Weapon."
* *Subtext:* "Hidden beneath are questions that cut deep or lift high."



#### **Page 4: The Inquisition (`quiz.html`)**

* **Goal:** Answer the selected questions.
* **Elements:**
* Split screen or Turn indicator.
* Active Card Display (Large text).
* Button: "Done / Next Turn".


* **Microcopy:**
* *Card Context:* "Question for [Name]"
* *Button:* "Answered. Next."



#### **Page 5: AI Facial Scan (`ai-scan.html`)**

* **Goal:** Use the webcam to "analyze" players.
* **Elements:**
* Video Element (Webcam feed).
* Overlay: Grid/Face mesh animation (CSS).
* Scanning Text: "Analyzing Facial Micro-expressions..."
* Success Trigger: Auto-redirects after 3 seconds.


* **Microcopy:**
* *Overlay:* "Scanning... 34% Compatibility Detected..."
* *Success:* "Match Found. Generating Activities."



#### **Page 6: Activity Challenge (`activities.html`)**

* **Goal:** Do the AI-generated tasks.
* **Elements:**
* List of 5 generated cards (e.g., "Hold a plank together", "Stare contest 30s").
* Checkboxes for completion.
* Unlock Button: Only active when all 5 are checked.


* **Microcopy:**
* *Header:* "AI Generated Challenges."
* *Instruction:* "Complete these to unlock the final toss."



#### **Page 7: The Loop (`loop.html`)**

* **Goal:** Infinite play.
* **Elements:**
* Mini Toss Button.
* Text Area: "Winner's Decree" (Write the task).
* Button: "Execute & Restart".


* **Microcopy:**
* *Winner's Prompt:* "To the victor go the spoils. Assign a task."
* *Restart:* "Spin the Wheel Again."



---

### 5. Data & Logic Needs (JSON)

Since you asked for data-driven headers/content, we will use a `game_data.json` to store:

* The pool of 50+ Questions.
* The pool of 30+ AI Activities.
* The branding text (Headings, Addresses, Rules).

