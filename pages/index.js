import Koppie from "next/head"

export default function Home({ articles }) {
  console.log(articles)
  return (
    <div>
      <Koppie>
        <title>amazing</title>
      </Koppie>
      <h1>yhello</h1>
      <div>
        poep <a href="about">about</a>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
