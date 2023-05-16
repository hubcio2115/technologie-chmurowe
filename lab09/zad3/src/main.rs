use std::env;

fn main() {
    match env::consts::OS {
        "macos" => println!("Hello from MacOS 🍎!"),
        "windows" => println!("Hello from Windows 🪟!"),
        "linux" => println!("Hello from Linux 🐧!"),
        _ => println!("Hello from some special OS 💻!"),
    }
}
