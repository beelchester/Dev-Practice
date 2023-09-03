use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Conversation {
    pub messages: Vec<Message>,
}

impl Conversation {
    pub fn new() -> Conversation {
        // this is a constructor
        Conversation {
            messages: Vec::new(), // creating empty vector
        }
    }
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Message {
    pub user: bool,
    pub text: String,
}
