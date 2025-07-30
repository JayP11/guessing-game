# Number Guessing Game

A number guessing game with both Rust and React versions. Guess a random number between 1 and 100!

## What's This?

Two versions of the same game:
- **Rust**: Command-line game
- **React**: Web interface with modern design

## Quick Start

**Rust version:**
```bash
cd guessing_game
cargo run
```

**React version:**
```bash
cd frontend
npm start
```
Then open http://localhost:3000

## How to Play

1. Start either version
2. Enter your guess (1-100)
3. Get hints (too high/low)
4. Keep guessing until you win!

## Features

Both versions include:
- Random number generation
- Input validation
- Helpful feedback
- Win detection

**React version adds:**
- Beautiful web interface
- Mobile responsive
- Attempt counter
- Play again button

## Development

```bash
# Rust
cargo build
cargo run

# React
npm start
npm run build
```

## Project Structure

```
guessing_game/
├── guessing_game/     # Rust backend
└── frontend/         # React frontend
```

## License

MIT License 