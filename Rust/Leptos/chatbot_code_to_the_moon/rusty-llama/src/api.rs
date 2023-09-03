use crate::model::conversation::Conversation;
use leptos::*;

#[server(Converse "/api")] // creating a server named Converse, and /api is the route
                           // good thing about leptos the function below can be directly accessed
                           // in frontend too instead of using routes and stuff everytime
                           // cx is parent scope context that is passed everywhere
pub async fn converse(cx: Scope, prompt: Conversation) -> Result<String, ServerfnError> {
    use actix_web::dev::ConnectionInfo;
    use actix_web::web::Data;
    use leptos_actix::extract;
    use llm::models::Llama;
}
