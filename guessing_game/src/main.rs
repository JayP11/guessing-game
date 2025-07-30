use std::cmp::Ordering;
use std::io::{self, Write};
use rand::Rng;

fn get_user_guess() -> Option<u32> {
    print!("Please input your guess: ");
    io::stdout().flush().unwrap();
    
    let mut input = String::new();
    io::stdin().read_line(&mut input).ok()?;
    
    input.trim().parse().ok()
}

fn compare_guess(guess: u32, secret: u32) -> bool {
    println!("You guessed: {}", guess);
    
    match guess.cmp(&secret) {
        Ordering::Less => {
            println!("Too small!");
            false
        },
        Ordering::Greater => {
            println!("Too big!");
            false
        },
        Ordering::Equal => {
            println!("You win!");
            true
        }
    }
}

fn main() {
    println!("Guess the number!");
    
    let secret_number = rand::thread_rng().gen_range(1..=100);
    
    loop {
        match get_user_guess() {
            Some(guess) => {
                if compare_guess(guess, secret_number) {
                    break;
                }
            },
            None => {
                println!("Invalid input! Please enter a number.");
                continue;
            }
        }
    }
}