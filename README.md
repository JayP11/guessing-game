# Guessing Game

A simple command-line number guessing game written in Rust. The game generates a random number between 1 and 100, and you need to guess it with helpful feedback on whether your guess is too high or too low.

## Features

- 🎯 Random number generation (1-100)
- 📝 User input validation
- 💡 Helpful feedback (too high/too low)
- 🏆 Win condition detection
- 🔄 Continuous gameplay until correct guess

## Prerequisites

- [Rust](https://www.rust-lang.org/tools/install) (latest stable version)
- Cargo (comes with Rust)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/JayP11/guessing-game.git
cd guessing-game
```

2. Build the project:
```bash
cargo build
```

## Usage

Run the game:
```bash
cargo run
```

The game will:
1. Generate a random secret number
2. Prompt you to enter your guess
3. Tell you if your guess is too high or too low
4. Continue until you guess the correct number

## How to Play

1. The game generates a random number between 1 and 100
2. Enter your guess when prompted
3. The game will tell you if your guess is too high or too low
4. Keep guessing until you find the correct number!
5. When you win, the game will congratulate you and exit

## Project Structure

```
guessing-game/
├── src/
│   └── main.rs          # Main game logic
├── Cargo.toml           # Project configuration and dependencies
├── Cargo.lock           # Dependency lock file
└── README.md           # This file
```

## Dependencies

- `rand = "0.9.2"` - For random number generation

## Development

To run in development mode with additional output:
```bash
cargo run --release
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Guessing! 🎮** 