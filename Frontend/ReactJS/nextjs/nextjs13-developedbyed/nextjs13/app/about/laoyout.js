//this layout is only for the about page and has to be imported in the about page
// the rootlayout will be ignored if the about page uses aboutlayout

export default function AboutLayout({ children}) {
  return (
    <body>
      <h1>about layout</h1>
      {children}
    </body>
  )
}