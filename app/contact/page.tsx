import { project_details } from '../_lib/project'

export default function About() {
  return (
    <main>
      <div className='pad'>
        <div className='text-center'>
          <h1>Contact</h1>
          <p>For enquiries, please mail us at <a href={`mailto:${project_details.email}`}><u>{project_details.email}</u></a>.</p>
        </div>
      </div>
    </main>
  )
}