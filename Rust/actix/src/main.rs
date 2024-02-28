// use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};

// #[get("/")] // get method for path /
// async fn hello() -> impl Responder {
//     // hello is a Responder function
//     HttpResponse::Ok().body("Hello world!") // response body from server
// }

// #[post("/echo")]
// async fn echo(req_body: String) -> impl Responder {
//     HttpResponse::Ok().body(req_body)
// }
//
// async fn manual_hello() -> impl Responder {
//     HttpResponse::Ok().body("Hey there!")
// }
//
// async fn index() -> impl Responder {
//     HttpResponse::Ok().body("Hey index!")
// }
//
// async fn test() -> impl Responder {
//     HttpResponse::Ok().body("Hey test!")
// }

//Application state is shared with all routes and resources within the same scope. State can be accessed with the web::Data<T> extractor where T is the type of the state. State is also accessible for middleware.

// struct AppState {
//     app_name: String,
// }
//
// #[get("/")]
// async fn state(data: web::Data<AppState>) -> String {
//     // defining states
//     let app_name = &data.app_name; // <- get app_name from state
//     format!("Hello {app_name}!") // <- response with app_name
// }
//
// #[actix_web::main] // executes the async main function within the actix runtime
// async fn main() -> std::io::Result<()> {
//     HttpServer::new(|| {
//         // new HttpServer instance
//         App::new() // main actix server app wrapper, also stores global data state
//             .app_data(web::Data::new(AppState {
//                 app_name: String::from("Actix Web"),
//             }))
//             .service(state) // service for builtin macro defined paths
//             .service(echo)
//             .route("/hey", web::get().to(manual_hello)) // route for manually implemented paths,get method used here
//             .service(
//                 web::scope("/app")
//                     // ...so this handles requests for `GET /app/index.html`
//                     .route("/index.html", web::get().to(index))
//                     .route("test", web::get().to(test)),
//             )
//     })
//     .bind(("127.0.0.1", 8080))?
//     .run()
//     .await
// }

// ------------
// mutable states, for sharing state data betn threads, HttpServer accepts app construct with each
// thread having one app instance

// use actix_web::{guard, web, App, HttpResponse, HttpServer};
// use std::sync::Mutex;
//
// struct AppStateWithCounter {
//     counter: Mutex<i32>, // <- Mutex is necessary to mutate safely across threads
// }
//
// async fn index(data: web::Data<AppStateWithCounter>) -> String {
//     let mut counter = data.counter.lock().unwrap(); // <- get counter's MutexGuard
//     *counter += 1; // <- access counter inside MutexGuard
//
//     format!("Request number: {counter}") // <- response with count
// }
//
// #[actix_web::main]
// async fn main() -> std::io::Result<()> {
//     // Note: web::Data created _outside_ HttpServer::new closure
//     let counter = web::Data::new(AppStateWithCounter {
//         counter: Mutex::new(0),
//     });
//
//     HttpServer::new(move || {
//         // move counter into the closure
//         App::new()
//             .app_data(counter.clone()) // <- register the created data
//             .route("/", web::get().to(index))
//             .service(
//                 web::scope("/")
//                     .guard(guard::Host("www.rust-lang.org")) // this host guard ensures it only
//                     // accept the requset from this host
//                     .route("", web::to(|| async { HttpResponse::Ok().body("www") })),
//             )
//     })
//     .bind(("127.0.0.1", 8080))?
//     .run()
//     .await
// }

//To achieve globally shared state, it must be created outside of the closure passed to HttpServer::new and moved/cloned in.

// -----------
// configuration

use actix_web::{web, App, HttpResponse, HttpServer};

// this function could be located in a different module
fn scoped_config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::resource("/test")
            .route(web::get().to(|| async { HttpResponse::Ok().body("not test") }))
            .route(web::head().to(HttpResponse::MethodNotAllowed)),
    );
}

// this function could be located in a different module
fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::resource("/app")
            .route(web::get().to(|| async { HttpResponse::Ok().body("not app") }))
            .route(web::head().to(HttpResponse::MethodNotAllowed)),
    );
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .configure(config) // root config
            .service(web::scope("/api").configure(scoped_config)) // api scope config
            .route(
                "/",
                web::get().to(|| async { HttpResponse::Ok().body("/") }),
            )
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
