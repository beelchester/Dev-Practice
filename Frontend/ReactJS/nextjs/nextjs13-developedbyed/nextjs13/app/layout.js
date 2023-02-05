import './globals.css'
//rootlayout wraps all the pages in the app without having to import it in every page
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <h1>root layout</h1>
        {children}</body>
    </html>
  )
}
