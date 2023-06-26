import Repo from "./components/Repo";

export default function Home() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Using GitHubApi
      </h1>
      <Repo />
    </main>
  )
}
