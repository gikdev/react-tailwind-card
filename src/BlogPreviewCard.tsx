const styles = {
  card: `
    bg-white text-[hsl(0,0%,7%)] border p-8
    border-[hsl(0,0%,7%)] rounded-[2rem] flex
    flex-col gap-8 shadow-[0.5rem_0.5rem_0_0_hsl(0,0%,7%)]
    transition cursor-pointer	relative w-[34.5rem]
    hover:translate-y-[-0.5rem] hover:translate-x-[-0.5rem] 
    hover:shadow-[1rem_1rem_0_0_hsl(0,0%,7%)]
  `,
  image: `rounded-2xl w-[30rem]`,
  tag: `py-2 px-4 font-extrabold rounded-lg inline-block mb-8 text-[0.9em] bg-[#F4D04E]`,
  date: `mb-8 text-[0.9em]`,
  heading: `mb-8 hover:text-[#F4D04E] transition text-[2.4rem] font-extrabold`,
  description: `text-[hsl(0,0%,50%)] max-w-full`,
  avatar: {
    self: `flex gap-4 items-center`,
    image: `w-16`,
    name: `font-extrabold`,
  }
}

export default () => (
  <div className={styles.card}>
    <div>
      <img className={styles.image} src="/react-tailwind-card/illustration-article.svg" alt="Something..." /> 
    </div> 
    <div>
      <span className={styles.tag}>Learning</span> 
      <p className={styles.date}>Published 21 Dec 2023</p>
      <h2 className={styles.heading}>HTML & CSS foundations</h2>
      <p className={styles.description}>These languages are the backbone of every website, defining structure, content, and presentation.</p>
    </div>
    <div>
      <div className={styles.avatar.self}>
        <img className={styles.avatar.image} src="/react-tailwind-card/image-avatar.webp" alt="Greg Hooper Image" /> 
        <span className={styles.avatar.name}>Greg Hooper</span>
      </div> 
    </div>
  </div>
)