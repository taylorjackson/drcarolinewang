import { type Metadata } from 'next'

import MyStatement from './statement.mdx'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function Statement() {
  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <Prose className="mt-8" data-mdx-content>
          <MyStatement />
        </Prose>
      </div>
    </Container>
  )
}
