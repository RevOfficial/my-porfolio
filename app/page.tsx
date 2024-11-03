import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Bio
      </h1>
      <p className="mb-4">
        {`Hi, I'm xMiwng. I'm currently working as a non-experience developer 
        sharing version of cheating in AOV and also Mod Skin's file, which 
        modifies the default skin to any skin I want.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
