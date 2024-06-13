import { project_details } from '../_lib/project'

export default function About() {
  return (
    <main>
      <div className='pad'>
        <h1 className='text-center'>About This Project</h1>
        <p>{project_details.title} Apps is an easy way to rapidly build fast modern websites or web apps.</p>
      </div>
    </main>
  )
}